/**
 * マヤ暦KIN説明データ
 * KIN番号に対応する太陽の紋章、銀河の音、ウェイブスペル等の情報
 */

// 太陽の紋章（20種類）
const solarSeals = [
    "赤い竜", "白い風", "青い夜", "黄色い種", "赤い蛇",
    "白い世界の橋渡し", "青い手", "黄色い星", "赤い月", "白い犬",
    "青い猿", "黄色い人", "赤い空歩く人", "白い魔法使い", "青い鷲",
    "黄色い戦士", "赤い地球", "白い鏡", "青い嵐", "黄色い太陽"
];

// 銀河の音（13種類）
const galacticTones = [
    "磁気の", "極性の", "電気の", "自己存在の", "倍音の",
    "律動の", "共振の", "銀河の", "太陽の", "惑星の",
    "スペクトルの", "水晶の", "宇宙の"
];

// うるう年リスト
const leapYears = [
    1912, 1916, 1920, 1924, 1928, 1932, 1936, 1940, 1944, 1948,
    1952, 1956, 1960, 1964, 1968, 1972, 1976, 1980, 1984, 1988,
    1992, 1996, 2000, 2004, 2008, 2012, 2016, 2020, 2024, 2028,
    2032, 2036, 2040, 2044, 2048, 2052, 2056, 2060, 2064
];

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

// うるう年判定関数
function isLeapYear(year) {
    return leapYears.includes(year);
}

// KIN番号を計算する関数
function getKinNumber(year, month, day, leapYearAdjust = false) {
    try {
        // 年と月が有効範囲内かチェック
        if (!kinTable[year] || !kinTable[year][month]) {
            throw new Error(`無効な年月です: ${year}年${month}月`);
        }

        // 基準KIN値を取得
        let baseKin = kinTable[year][month];
        
        // 日付を加算
        let kin = baseKin + day;
        
        // うるう年調整
        if (leapYearAdjust && isLeapYear(year) && month === 3) {
            kin += 1;
        }
        
        // 1-260の範囲に正規化
        while (kin > 260) {
            kin -= 260;
        }
        
        while (kin <= 0) {
            kin += 260;
        }
        
        return kin;
    } catch (error) {
        console.error("KIN計算エラー:", error);
        throw error;
    }
}

// KIN情報データベース
const KIN_DESCRIPTIONS = {};

// KIN情報を初期化する
for (let kin = 1; kin <= 260; kin++) {
    // 太陽の紋章を計算
    const sealIndex = (kin - 1) % 20;
    const solarSeal = solarSeals[sealIndex];
    
    // 銀河の音を計算
    const toneIndex = (kin - 1) % 13;
    const tone = toneIndex + 1; // 銀河の音 (1-13)
    const galacticTone = galacticTones[toneIndex];
    
    // ウェーブスペルを計算
    const wavespellNumber = Math.floor((kin - 1) / 13) + 1;
    const wavespellSeal = solarSeals[(wavespellNumber - 1) % 20];
    
    // KIN情報をデータベースに追加
    KIN_DESCRIPTIONS[kin] = {
        number: kin,
        name: solarSeal,
        tone: tone, // 銀河の音を数字で表記（1-13）
        wavespell: wavespellSeal
    };
}
