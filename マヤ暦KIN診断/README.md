# マヤ暦診断ツール

## 概要
このツールは、生年月日からマヤ暦のKIN番号を計算し、太陽の紋章、銀河の音、ウェーブスペルなどの基本情報を表示するWebアプリケーションです。

## 特徴
- 1910年から2065年までの生年月日に対応
- うるう年調整機能
- KIN番号に基づく基本情報と関連KIN情報の表示
- 純粋なJavaScriptで実装（外部ライブラリ不要）

## ファイル構造
```
マヤ暦診断コード/
├── index.html        # メインHTMLファイル
├── css/
│   └── maya-kin.css  # スタイルシート
├── js/
│   ├── maya-calculator.js  # KIN計算ロジック
│   └── ui-controller.js    # UI操作関連の機能
└── data/
    ├── kin-descriptions.js # KIN番号の基本情報データ
    ├── kin-table-1910-1929.js
    ├── kin-table-1930-1949.js
    ├── kin-table-1950-1969.js
    ├── kin-table-1970-1989.js
    ├── kin-table-1990-2009.js
    ├── kin-table-2010-2029.js
    └── kin-table-2030-2065.js
```

## 使用方法
1. `index.html`をブラウザで開きます
2. 生年月日を選択します
3. 必要に応じてうるう年調整をチェックします
4. KIN番号と基本情報が表示されます

## データ構造
- `kinTable`: 年月ごとのKIN基準値（20年ごとに分割）
- `kinDescriptions`: KIN番号の基本情報（太陽の紋章、銀河の音、ウェーブスペル）
- `solarSeals`: 20種類の太陽の紋章
- `galacticTones`: 13種類の銀河の音
- `leapYears`: うるう年のリスト

## 主要な計算関数
- `calculateKin()`: 生年月日からKIN番号を計算
- `getSolarSeal()`: KIN番号から太陽の紋章を取得
- `getGalacticTone()`: KIN番号から銀河の音を取得
- `getWavespell()`: KIN番号からウェーブスペルを取得
- `getKinDetails()`: KIN番号の基本情報を取得
- `calculateRelatedKins()`: 関連KIN情報を計算

## 今後の改善点
- 多言語サポート
- 結果の保存・共有機能
- モバイル対応の強化
