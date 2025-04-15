/**
 * マヤ暦計算ロジック
 */

// 全KINテーブルをマージする関数
function mergeKinTables() {
    const allKinTables = {};
    
    // 各時代のKINテーブルをマージ
    Object.assign(allKinTables, kinTable1910to1929);
    Object.assign(allKinTables, kinTable1930to1949);
    Object.assign(allKinTables, kinTable1950to1969);
    Object.assign(allKinTables, kinTable1970to1989);
    Object.assign(allKinTables, kinTable1990to2009);
    Object.assign(allKinTables, kinTable2010to2029);
    
    // 2030-2065のデータは既存のkinTable2030to2065オブジェクトから取得
    if (typeof kinTable2030to2065 !== 'undefined') {
        Object.assign(allKinTables, kinTable2030to2065);
    }
    
    return allKinTables;
}

// マージされたKINテーブル
const kinTable = mergeKinTables();

// KIN情報データ
const kin_data = {};

/**
 * KIN番号を計算する
 * @param {number} year - 年
 * @param {number} month - 月
 * @param {number} day - 日
 * @param {boolean} leapYearAdjust - うるう年調整を行うかどうか
 * @returns {number} KIN番号 (1-260)
 */
function calculateKin(year, month, day, leapYearAdjust = false) {
    try {
        // デバッグ: kinTableの内容を確認
        console.log('kinTable:', kinTable);
        console.log('年月:', year, month);
        console.log('kinTable[year]:', kinTable[year]);
        
        // 年と月が有効範囲内かチェック
        if (!kinTable[year] || !kinTable[year][month]) {
            throw new Error(`無効な年月です: ${year}年${month}月`);
        }

        // 基準KIN値を取得
        let baseKin = kinTable[year][month];
        console.log('基準KIN値:', baseKin);
        
        // 日付を加算
        let kin = baseKin + day;
        console.log('日付加算後:', kin);
        
        // うるう年調整
        if (leapYearAdjust && isLeapYear(year) && month === 3) {
            kin += 1;
            console.log('うるう年調整後:', kin);
        }
        
        // 1-260の範囲に正規化
        while (kin > 260) {
            kin -= 260;
        }
        
        while (kin <= 0) {
            kin += 260;
        }
        
        console.log('最終KIN値:', kin);
        return kin;
    } catch (error) {
        console.error("KIN計算エラー:", error);
        return null;
    }
}

/**
 * うるう年かどうかを判定する
 * @param {number} year - 年
 * @returns {boolean} うるう年の場合true
 */
function isLeapYear(year) {
    return leapYears.includes(year);
}

/**
 * KIN番号から太陽の紋章を取得する
 * @param {number} kin - KIN番号
 * @returns {string} 太陽の紋章
 */
function getSolarSeal(kin) {
    const sealIndex = ((kin - 1) % 20) + 1;
    return solarSeals[sealIndex - 1];
}

/**
 * KIN番号から銀河の音を取得する
 * @param {number} kin - KIN番号
 * @returns {string} 銀河の音
 */
function getGalacticTone(kin) {
    const toneIndex = (kin - 1) % 13;
    return (toneIndex + 1).toString(); // 数字のみを返す (1-13)
}

/**
 * KIN番号からウェーブスペルを取得する
 * @param {number} kin - KIN番号
 * @returns {string} ウェーブスペル
 */
function getWavespell(kin) {
    const wavespellNumber = Math.floor((kin - 1) / 13) + 1;
    const wavespellSeal = solarSeals[(wavespellNumber - 1) % 20];
    return wavespellSeal;
}

/**
 * KIN番号の詳細情報を取得する
 * @param {number} kin - KIN番号
 * @returns {object} KIN詳細情報
 */
function getKinDetails(kin) {
    if (kin < 1 || kin > 260 || !Number.isInteger(kin)) {
        return null;
    }
    
    const solarSeal = getSolarSeal(kin);
    const galacticTone = getGalacticTone(kin);
    const wavespell = getWavespell(kin);
    
    return {
        kin: kin,
        solarSeal: solarSeal,
        galacticTone: parseInt(galacticTone), // 銀河の音の数字を返す
        wavespell: wavespell
    };
}

// KIN情報データを初期化する
function initKinData() {
    for (let kin = 1; kin <= 260; kin++) {
        const solarSeal = getSolarSeal(kin);
        const galacticTone = getGalacticTone(kin);
        const wavespellNumber = Math.floor((kin - 1) / 13) + 1;
        const wavespellSeal = solarSeals[(wavespellNumber - 1) % 20];
        
        kin_data[`KIN${kin}`] = {
            "太陽の紋章": solarSeal,
            "銀河の音": galacticTone,
            "ウェーブスペル": wavespellSeal
        };
    }
}

// うるう年テーブル（1910-2065）
const leapYears = [
    1912, 1916, 1920, 1924, 1928, 1932, 1936, 1940, 1944, 1948,
    1952, 1956, 1960, 1964, 1968, 1972, 1976, 1980, 1984, 1988,
    1992, 1996, 2000, 2004, 2008, 2012, 2016, 2020, 2024, 2028,
    2032, 2036, 2040, 2044, 2048, 2052, 2056, 2060, 2064
];

// 太陽の紋章
const solarSeals = [
    "赤い龍", "白い風", "青い夜", "黄色い種", "赤い蛇",
    "白い世界の橋渡し", "青い手", "黄色い星", "赤い月", "白い犬",
    "青い猿", "黄色い人", "赤い空歩く人", "白い魔法使い", "青い鷲",
    "黄色い戦士", "赤い地球", "白い鏡", "青い嵐", "黄色い太陽"
];

// 銀河の音
const galacticTones = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"
];

/**
 * 年月日からKIN番号を取得する
 * @param {number} year - 年
 * @param {number} month - 月
 * @param {number} day - 日
 * @param {boolean} leapYearAdjust - うるう年調整を行うかどうか
 * @returns {number} KIN番号 (1-260)
 */
function getKinNumber(year, month, day, leapYearAdjust = false) {
    // KIN番号を計算
    const kin = calculateKin(year, month, day, leapYearAdjust);
    if (kin === null) {
        throw new Error(`KIN番号の計算に失敗しました: ${year}年${month}月${day}日`);
    }
    return kin;
}
