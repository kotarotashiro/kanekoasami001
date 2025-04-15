/**
 * UI操作関連の機能
 */

// DOMが読み込まれたら実行
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing form...');
    initializeForm();
    setupEventListeners();
    console.log('Initialization complete');
});

/**
 * フォームの初期化
 */
function initializeForm() {
    console.log('Initializing form...');
    // 年の選択肢を生成（1910-2065）
    const yearSelect = document.getElementById('year-select');
    console.log('Year select element:', yearSelect);
    const currentYear = new Date().getFullYear();
    
    for (let year = 1910; year <= 2065; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        
        // 現在の年を選択状態に
        if (year === currentYear) {
            option.selected = true;
        }
        
        yearSelect.appendChild(option);
    }
    console.log('Year options generated');
    
    // 月の選択肢を生成
    const monthSelect = document.getElementById('month-select');
    console.log('Month select element:', monthSelect);
    for (let month = 1; month <= 12; month++) {
        const option = document.createElement('option');
        option.value = month;
        option.textContent = month;
        
        // 現在の月を選択状態に
        if (month === new Date().getMonth() + 1) {
            option.selected = true;
        }
        
        monthSelect.appendChild(option);
    }
    console.log('Month options generated');
    
    // 日の選択肢を更新
    updateDayOptions();
    console.log('Day options updated');
}

/**
 * イベントリスナーの設定
 */
function setupEventListeners() {
    console.log('Setting up event listeners...');
    // 年または月が変更されたら日の選択肢を更新
    document.getElementById('year-select').addEventListener('change', updateDayOptions);
    document.getElementById('month-select').addEventListener('change', updateDayOptions);
    
    // フォームの値が変更されたらKIN計算を実行
    const formElements = document.querySelectorAll('#year-select, #month-select, #day-select, #leapYearAdjustment');
    formElements.forEach(element => {
        element.addEventListener('change', calculateAndDisplayResult);
    });
    
    // フォームの送信イベントを処理
    document.getElementById('birthDateForm').addEventListener('submit', function(event) {
        event.preventDefault(); // デフォルトの送信動作を防止
        calculateAndDisplayResult();
    });
    console.log('Event listeners set up');
}

/**
 * 日の選択肢を更新する
 */
function updateDayOptions() {
    console.log('Updating day options...');
    const year = parseInt(document.getElementById('year-select').value);
    const month = parseInt(document.getElementById('month-select').value);
    const daySelect = document.getElementById('day-select');
    const currentDay = parseInt(daySelect.value) || new Date().getDate();
    
    // 月の日数を取得
    const daysInMonth = getDaysInMonth(year, month);
    
    // 現在の選択肢をクリア
    daySelect.innerHTML = '';
    
    // 新しい選択肢を生成
    for (let day = 1; day <= daysInMonth; day++) {
        const option = document.createElement('option');
        option.value = day;
        option.textContent = day;
        
        // 以前選択されていた日を維持（可能であれば）
        if (day === currentDay && day <= daysInMonth) {
            option.selected = true;
        }
        
        daySelect.appendChild(option);
    }
    console.log('Day options updated');
    
    // KIN計算を実行
    calculateAndDisplayResult();
}

/**
 * 月の日数を取得する
 */
function getDaysInMonth(year, month) {
    console.log('Getting days in month...');
    // 各月の日数
    const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    // うるう年の2月は29日
    if (month === 2 && isLeapYear(year)) {
        return 29;
    }
    
    return daysInMonth[month];
}

/**
 * KIN番号を計算して結果を表示する
 */
function calculateAndDisplayResult() {
    console.log('Calculating and displaying result...');
    // フォームから値を取得
    const year = parseInt(document.getElementById('year-select').value);
    const month = parseInt(document.getElementById('month-select').value);
    const day = parseInt(document.getElementById('day-select').value);
    const leapYearAdjust = document.getElementById('leapYearAdjustment').checked;
    
    try {
        // KIN番号を計算
        const kin = calculateKin(year, month, day, leapYearAdjust);
        
        if (kin) {
            // KIN詳細情報を取得
            const kinInfo = getKinDetails(kin);
            
            // 結果を表示
            displayResult(kinInfo);
        }
    } catch (error) {
        console.error("計算エラー:", error);
        // エラーメッセージを表示
        document.getElementById('result-container').style.display = 'block';
        document.getElementById('kin-number').textContent = 'エラー: ' + error.message;
    }
}

/**
 * 結果を表示する
 */
function displayResult(kinInfo) {
    console.log('Displaying result...');
    // 結果コンテナを表示
    document.getElementById('result-container').style.display = 'block';
    
    // KIN番号
    document.getElementById('kin-number').textContent = `KIN ${kinInfo.kin}`;
    
    // 太陽の紋章
    document.getElementById('solar-seal').textContent = 
        `${kinInfo.solarSeal.name}（${kinInfo.solarSeal.meaning}）`;
    
    // 銀河の音
    document.getElementById('galactic-tone').textContent = 
        `${kinInfo.galacticTone.name}（${kinInfo.galacticTone.meaning}）`;
    
    // 詳細情報
    const detailsElement = document.getElementById('kin-details');
    detailsElement.innerHTML = '';
    
    // 説明
    const descriptionPara = document.createElement('p');
    descriptionPara.textContent = kinInfo.details.description || "詳細情報は準備中です。";
    detailsElement.appendChild(descriptionPara);
    
    // 才能
    if (kinInfo.details.talents && kinInfo.details.talents.length > 0) {
        const talentsHeader = document.createElement('h3');
        talentsHeader.textContent = '才能・資質';
        detailsElement.appendChild(talentsHeader);
        
        const talentsList = document.createElement('ul');
        kinInfo.details.talents.forEach(talent => {
            const item = document.createElement('li');
            item.textContent = talent;
            talentsList.appendChild(item);
        });
        detailsElement.appendChild(talentsList);
    }
    
    // 課題
    if (kinInfo.details.challenges && kinInfo.details.challenges.length > 0) {
        const challengesHeader = document.createElement('h3');
        challengesHeader.textContent = '課題・成長点';
        detailsElement.appendChild(challengesHeader);
        
        const challengesList = document.createElement('ul');
        kinInfo.details.challenges.forEach(challenge => {
            const item = document.createElement('li');
            item.textContent = challenge;
            challengesList.appendChild(item);
        });
        detailsElement.appendChild(challengesList);
    }
    
    // 人生のテーマ
    if (kinInfo.details.lifeTheme) {
        const themeHeader = document.createElement('h3');
        themeHeader.textContent = '人生のテーマ';
        detailsElement.appendChild(themeHeader);
        
        const themePara = document.createElement('p');
        themePara.textContent = kinInfo.details.lifeTheme;
        detailsElement.appendChild(themePara);
    }
    
    // 関連KIN情報を表示
    if (kinInfo.relatedKins) {
        // 関連KINの詳細情報を取得する関数
        function getKinInfo(kin) {
            if (typeof kin === 'number') {
                const solarSeal = getSolarSeal(kin);
                const galacticTone = getGalacticTone(kin);
                return `KIN ${kin} (${galacticTone} ${solarSeal})`;
            } else if (kin && kin.solarSeal) {
                // 太陽の紋章情報がある場合は紋章のみを返す
                return kin.solarSeal;
            } else {
                return kin; // 文字列の場合はそのまま返す
            }
        }
        
        // ガイドKIN
        if (kinInfo.relatedKins.guideKin) {
            document.getElementById('guide-kin').textContent = kinInfo.relatedKins.guideKin.solarSeal;
        }
        
        // 反対KIN
        if (kinInfo.relatedKins.oppositeKin) {
            document.getElementById('opposite-kin').textContent = kinInfo.relatedKins.oppositeKin.solarSeal;
        }
        
        // 神秘KIN
        document.getElementById('mystical-kin').textContent = kinInfo.relatedKins.mysticalKin.solarSeal;
        
        // 類似KIN1
        document.getElementById('similar-kin1').textContent = getKinInfo(kinInfo.relatedKins.similarKin1);
        
        // 類似KIN2
        document.getElementById('similar-kin2').textContent = getKinInfo(kinInfo.relatedKins.similarKin2);
        
        // 鏡の向こうKIN
        document.getElementById('mirror-kin').textContent = getKinInfo(kinInfo.relatedKins.mirrorKin);
        
        // 絶対反対KIN
        document.getElementById('absolute-opposite-kin').textContent = getKinInfo(kinInfo.relatedKins.absoluteOppositeKin);
        
        // 絶対拡張KIN
        document.getElementById('absolute-extended-kin').textContent = getKinInfo(kinInfo.relatedKins.absoluteExtendedKin);
    }
    console.log('Result displayed');
}
