// サービスデータ
const serviceData = {
  "maya-personal": {
    title: "マヤ暦個人鑑定",
    category: "鑑定",
    price: "¥15,000",
    description: "あなたの生まれ持った才能、人生の目的、使命を読み解き、最適な人生の方向性をお伝えします。生年月日から導き出されるマヤ暦のエネルギーを基に、あなたの本質や強み、使命などを紐解いていきます。",
    content: [
      "生まれ持った才能・適性の解説",
      "人生の目的・使命の解読",
      "適職・才能の活かし方のアドバイス",
      "現在のエネルギー状況と未来の流れ",
      "質問事項への回答（キャリア、恋愛、人間関係など）"
    ],
    target: "人生の方向性に迷いがある方、自分の才能や本来の使命を知りたい方、転機を前向きに活かしたい方",
    next: ["maya-basic", "shinmitsu"],
    application: "公式LINEまたはお問い合わせフォームよりお申し込みください。",
    detailUrl: "#"
  },
  "maya-120min": {
    title: "マヤ暦120分鑑定",
    price: "¥25,000",
    category: "鑑定",
    description: "個人鑑定の内容に加え、あなたと周りの方との相性や関係性についても深く読み解きます。特定の人間関係の悩みがある方や、より深い自己理解を求める方におすすめです。",
    content: [
      "個人鑑定の内容（才能・使命・人生の目的の明確化）",
      "あなたと周りの人との相性",
      "関係性の改善アドバイス",
      "具体的なアクションプラン",
      "より深い自己理解への導き",
      "詳細な質疑応答・フィードバック"
    ],
    target: [
      "人間関係を改善したい方",
      "より深い自己理解を求める方",
      "自分のこと・周りのことを知りたい方",
      "人間関係に悩む方"
    ],
    next: ["future-creation", "maya-work"],
    apply: "専用予約フォームから予約。日程調整後、ZoomまたはLINEビデオ通話で行います。"
  },
  "maya-work": {
    title: "マヤ暦お仕事コンサル",
    price: "¥44,000",
    category: "鑑定",
    description: "あなたの才能と使命を仕事に活かすための専門コンサルティング。マヤ暦の知恵から、あなたに合った職業や働き方、収入アップの方法をアドバイスします。",
    content: [
      "才能と適職の分析",
      "仕事での強み・弱みの把握",
      "理想的な働き方の提案",
      "キャリアプランの作成",
      "収入アップのための戦略",
      "具体的なアクションプラン作成"
    ],
    target: [
      "才能を活かした仕事を見つけたい方",
      "転職・起業を検討中の方",
      "才能を活かす仕事を知りたい方",
      "いきいき働く方法を知りたい方",
      "会社員・フリーランス・フリーター"
    ],
    next: ["startup-school", "future-creation"],
    apply: "専用予約フォームから予約。日程調整後、ZoomまたはLINEビデオ通話で行います。"
  },
  "shinmitsu": {
    title: "真密教鑑定",
    category: "鑑定",
    price: "¥20,000",
    description: "古来から伝わる真密教の叡智を用いた鑑定。名前と生年月日に秘められた運命のコードを解読します。過去世からの影響や魂の目的までを明らかにする深遠な鑑定です。",
    content: [
      "名前の音霊分析",
      "生年月日の数霊解読",
      "過去世からの影響と課題",
      "魂レベルでの使命と目的",
      "現在の状況に対するスピリチュアルな観点からのアドバイス"
    ],
    target: "深い自己理解を求める方、スピリチュアルな視点から人生を見つめたい方、名前の意味や変遷に興味がある方",
    next: ["maya-personal", "memory-oil"],
    application: "完全予約制。公式LINEまたはお問い合わせフォームよりご予約ください。",
    detailUrl: "#"
  },
  "tarot": {
    title: "タロットセッション",
    price: "¥10,000",
    category: "鑑定",
    description: "タロットカードを通して、あなたの現在の状況や未来の可能性、問題解決のヒントを読み解きます。具体的な質問や悩みがある方におすすめです。",
    content: [
      "現在の状況の本質の把握",
      "未来の可能性と選択肢の提示",
      "問題解決のヒントの提供",
      "具体的な行動アドバイス",
      "潜在意識からのメッセージの解読",
      "質疑応答・フィードバック"
    ],
    target: [
      "現在の迷いや悩みに具体的な答えを求める方",
      "決断を迫られている方",
      "未来の可能性を探りたい方",
      "人間関係や恋愛の悩みがある方"
    ],
    next: ["maya-120min", "future-creation", "maya-work"],
    apply: "専用予約フォームから予約。対面またはZoomでのセッションが可能です。"
  },
  "maya-parenting": {
    title: "マヤ暦ミラクル子育て講座",
    category: "講座",
    price: "¥39,800",
    description: "子どもの才能を伸ばすマヤ暦の知恵と具体的な接し方を学ぶ、子育てに悩むママのための講座です。子どものキネシオロジーとマヤ暦を組み合わせた独自メソッドで、子育ての悩みを解消します。",
    content: [
      "マヤ暦の基礎知識と子育てへの活かし方",
      "子どもの才能を読み解くワーク",
      "子どものタイプ別接し方・褒め方講座",
      "ママ自身のセルフケア実践法",
      "日常生活での具体的な活用方法"
    ],
    target: "2歳〜小学生のお子さんを持つ母親、子どもの才能を伸ばしたい方、子育てに悩みや不安を抱えている方",
    next: ["maya-basic", "synchrono-salon"],
    application: "公式LINEまたはお問い合わせフォームよりお申し込みください。3ヶ月のサポート付き。",
    detailUrl: "#"
  },
  "maya-montessori": {
    title: "マヤ・モンテッソーリ講座",
    price: "¥24,200",
    category: "講座",
    description: "マヤ暦の知恵とモンテッソーリ教育を組み合わせた応用講座です。子どもの才能や個性に合わせた教育環境の作り方や、自主性を育む関わり方を学びます。",
    content: [
      "モンテッソーリ教育の基本理念",
      "マヤ暦から見る子どもの個性と才能",
      "発達段階別の最適な環境づくり",
      "才能を引き出す実践的な活動",
      "家庭でできるモンテッソーリ活動",
      "ケーススタディと質疑応答"
    ],
    target: [
      "モンテッソーリ教育に興味のある方",
      "子どもの才能を最大限に引き出したい方",
      "マヤ暦ミラクル子育て講座を受講された方",
      "教育関係者や保育士の方"
    ],
    next: ["maya-parenting", "maya-basic"],
    apply: "公式LINEまたは専用フォームから申込み。3時間×2日間の講座です。"
  },
  "maya-basic": {
    title: "マヤ暦鑑定初級講座",
    category: "講座",
    price: "¥79,800",
    description: "マヤ暦の基礎から鑑定方法までを学べる講座。自分や家族の才能を理解し、日々の生活に活かせます。マヤ暦鑑定師としての第一歩を踏み出せる内容です。",
    content: [
      "マヤ暦の歴史と基礎知識",
      "ツォルキンの13の音と20の紋章の意味と読み方",
      "あなた自身と家族の鑑定実践",
      "日常生活への活かし方",
      "初級認定試験と修了証発行"
    ],
    target: "マヤ暦に興味がある方、自分や家族の才能を理解したい方、将来マヤ暦鑑定師として活動したい方",
    next: ["maya-advanced", "synchrono-salon"],
    application: "公式LINEまたはお問い合わせフォームよりお申し込みください。オンラインと対面から選択可能。",
    detailUrl: "#"
  },
  "kakehashi": {
    title: "かけはし講座",
    price: "¥11,000",
    category: "講座",
    description: "初級講座修了者向けの講座です。マヤ暦アドバイザーとして活動するための心構えやクライアント対応、鑑定テクニック、活動サポートなどを学びます。",
    content: [
      "アドバイザーとしての心構え",
      "クライアントとの効果的な対応方法",
      "鑑定の実践テクニック",
      "活動を始めるためのサポート",
      "事例研究と実践演習",
      "質疑応答・フィードバック"
    ],
    target: [
      "アドバイザーとして活動したい方",
      "マヤ暦初級講座を修了した方",
      "鑑定スキルを向上させたい方",
      "実践的なアドバイス方法を学びたい方"
    ],
    next: ["maya-basic"],
    apply: "公式LINEまたは専用フォームから申込み。3時間の講座で、テキスト込みです。"
  },
  "miracle-diary": {
    title: "ミラクルダイアリー講座",
    price: "¥8,800〜",
    category: "講座",
    description: "ミラクルダイアリーの効果的な使い方を学ぶ講座です。目標設定や記録、振り返りの方法を習得し、日々の生活に取り入れることで人生の充実度を高めることができます。",
    content: [
      "ミラクルダイアリーの基本的な使い方",
      "効果的な目標設定の方法",
      "日々の記録の取り方",
      "振り返りの重要性とコツ",
      "実践ワークショップ",
      "質疑応答・サポート"
    ],
    target: [
      "ミラクルダイアリーを効果的に活用したい方",
      "目標達成に向けて計画的に行動したい方",
      "日々の生活に充実感を求める方",
      "自己成長に興味がある方"
    ],
    next: ["miracle-diary-product", "future-creation"],
    apply: "公式LINEまたは専用フォームから申込み。3時間の講座で、サロン生は割引があります。"
  },
  "memory-oil-basic": {
    title: "メモリーオイル基礎講座",
    price: "¥30,800",
    category: "講座",
    description: "メモリーオイルの基礎知識から実践的なブレンド方法までを学ぶ講座です。願望達成のためのツールとして活用する方法や、日常生活での使い方を習得できます。",
    content: [
      "メモリーオイルの基礎知識",
      "各種オイルの特性と効果",
      "願望達成のための使用方法",
      "実践的なブレンドレッスン",
      "スプレーセット作成",
      "質疑応答・サポート"
    ],
    target: [
      "メモリーオイルに興味がある方",
      "願望実現のツールを探している方",
      "アロマやエッセンシャルオイルが好きな方",
      "自分だけのブレンドを作りたい方"
    ],
    next: ["memory-oil"],
    apply: "公式LINEまたは専用フォームから申込み。3時間の講座で、スプレーセット付きです。"
  },
  "future-creation": {
    title: "未来創造3ヶ月プロジェクト",
    price: "詳細は公式LINEにお問い合わせください",
    category: "プログラム",
    description: "3ヶ月間にわたり、あなたの才能と使命を発見し、理想の人生を設計するためのプロジェクトです。マヤ暦鑑定をベースに、具体的な行動計画を立て、継続的なサポートを受けながら理想の未来を創造していきます。",
    content: [
      "才能と使命の発見（マヤ暦鑑定）",
      "理想の人生の設計と明確化",
      "具体的な行動計画の策定",
      "定期的なセッションでの進捗確認",
      "軌道修正と継続的なサポート",
      "3ヶ月間の集中サポート"
    ],
    target: [
      "本気で人生を変えたい方",
      "自分の使命を見つけたい方",
      "理想の未来を実現したい方",
      "計画的に目標達成を目指す方"
    ],
    next: ["startup-school", "synchrono-salon"],
    apply: "個別相談後、専用フォームから申込み。詳しくは公式LINEにてお問い合わせください。"
  },
  "startup-school": {
    title: "起業スクール",
    price: "詳細は公式LINEにお問い合わせください",
    category: "プログラム",
    description: "マヤ暦の才能鑑定を活かした起業や事業拡大のためのスクールです。ビジネスモデルの構築からマーケティング、集客方法、価格設定など、実践的なビジネススキルを学びます。",
    content: [
      "マヤ暦から見る最適なビジネスモデル",
      "効果的なマーケティング戦略",
      "集客の仕組みづくり",
      "適切な価格設定の方法",
      "ブランディングとSNS活用法",
      "1年間の継続サポート"
    ],
    target: [
      "起業を考えている方",
      "ビジネスを拡大したい方",
      "マヤ暦の知識をビジネスに活かしたい方",
      "自分の才能を活かした仕事がしたい方"
    ],
    next: ["future-creation", "maya-work"],
    apply: "個別相談後、専用フォームから申込み。詳しくは公式LINEにてお問い合わせください。"
  },
  "yoga-instructor": {
    title: "ヨガインストラクター講座",
    price: "詳細は公式LINEにお問い合わせください",
    category: "プログラム",
    description: "ヨガの哲学や歴史、アーサナ（ポーズ）、呼吸法、解剖学、指導法など、ヨガインストラクターとして必要な知識とスキルを学ぶ講座です。",
    content: [
      "ヨガの哲学と歴史",
      "各種アーサナ（ポーズ）の習得",
      "呼吸法と瞑想の実践",
      "解剖学の基礎知識",
      "効果的な指導法とティーチング",
      "実践的なクラス構成法"
    ],
    target: [
      "ヨガインストラクターを目指す方",
      "ヨガの知識を深めたい方",
      "心身の健康に関心がある方",
      "自分の才能を活かした仕事を探している方"
    ],
    next: ["synchrono-salon"],
    apply: "公式LINEにてお問い合わせください。詳細な内容や受講スケジュールについてご案内いたします。"
  },
  "synchrono-salon": {
    title: "金子あさみとシンクロサロン",
    category: "会員制サロン",
    price: "¥2,000/月",
    description: "マヤ暦ガイダンス、オンラインヨガ、限定ライブ配信など様々なコンテンツを月額定額で利用できます。サロンメンバー限定の特典やイベントも多数ご用意しています。",
    content: [
      "月2回のマヤ暦ガイダンスライブ",
      "週1回のオンラインヨガクラス",
      "メンバー限定Q&Aセッション",
      "過去の講座アーカイブ閲覧",
      "サロン限定割引特典"
    ],
    target: "定期的にマヤ暦の知恵に触れたい方、自己成長を継続的に行いたい方、コミュニティの中で学びを深めたい方",
    next: ["maya-personal", "maya-basic"],
    application: "公式サイトの申込フォームから登録可能。初月無料トライアル実施中。",
    detailUrl: "#"
  },
  "memory-oil": {
    title: "メモリーオイル",
    category: "商品",
    price: "¥3,800〜",
    description: "才能や目標に合わせてブレンドしたアロマオイル。香りを通じて潜在意識に働きかけます。マヤ暦の紋章エネルギーと精油の特性を組み合わせた独自のブレンドです。",
    content: [
      "マヤ暦20種類の紋章別オイル",
      "目的別ブレンドオイル（豊かさ、愛情、創造性など）",
      "季節の変わり目におすすめの調整オイル",
      "天然100%オーガニック精油使用",
      "専用の使い方ガイドブック付き"
    ],
    target: "日常生活にマヤ暦の叡智を取り入れたい方、アロマの香りで意識を高めたい方、ギフトを探している方",
    next: ["maya-personal", "synchrono-salon"],
    application: "オンラインショップまたは対面セッション時にご購入いただけます。",
    detailUrl: "#"
  },
  "miracle-diary-product": {
    title: "ミラクルダイアリー",
    price: "¥2,750〜",
    category: "商品",
    description: "目標設定や日々の振り返り、願望実現をサポートする特別な手帳です。サイズやデザインも選べ、自分だけの理想の人生を創造するためのツールとして活用できます。",
    content: [
      "年間カレンダー",
      "月間スケジュール",
      "週間計画ページ",
      "目標設定シート",
      "振り返りセクション",
      "手帳サイズ（B6/B5/A5）から選択可能"
    ],
    target: [
      "目標を達成したい方",
      "日々の生活を充実させたい方",
      "願望実現に取り組みたい方",
      "自己管理能力を高めたい方"
    ],
    next: ["miracle-diary"],
    apply: "公式LINEまたは専用フォームから注文。早割や会員割引もあります。"
  }
};

// DOM要素の取得
document.addEventListener('DOMContentLoaded', function() {
  // 現在の年を設定
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // モバイルメニューの処理
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mainNav = document.querySelector('.main-nav');
  
  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', function() {
      this.classList.toggle('active');
      mainNav.classList.toggle('active');
    });
  }
  
  // FAQのアコーディオン機能
  const faqItems = document.querySelectorAll('.faq-item');
  
  if (faqItems.length > 0) {
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
      const toggle = item.querySelector('.faq-toggle');
      
      if (question) {
        question.addEventListener('click', function() {
          item.classList.toggle('active');
          const icon = toggle.querySelector('i');
          if (icon) {
            icon.classList.toggle('fa-plus');
            icon.classList.toggle('fa-minus');
          }
        });
      }
    });
  }

  // サービスリンクにイベントリスナーを追加（物販タブのリンクを含む全てのリンク）
  const allServiceLinks = document.querySelectorAll('.service-link');
  allServiceLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const serviceId = this.getAttribute('data-service') || this.getAttribute('data-service-id');
      if (serviceId) {
        showServiceModal(serviceId);
      }
    });
  });
  
  // 提案ボタンのクリックイベント
  const suggestBtn = document.getElementById('suggest-btn');
  if (suggestBtn) {
    suggestBtn.addEventListener('click', function() {
      const wishInput = document.getElementById('wish-input');
      const wish = wishInput.value.trim();
      
      if (wish) {
        // ローディング表示
        const suggestionsGrid = document.getElementById('modal-suggestions-grid');
        suggestionsGrid.innerHTML = '<div class="loading-spinner"><i class="fas fa-spinner fa-spin"></i> お探しています...</div>';
        
        // モーダルを表示
        const suggestionModal = document.getElementById('suggestionModal');
        suggestionModal.classList.add('show');
        
        // AIに問い合わせ（ローカルデータから提案）
        setTimeout(() => {
          showSuggestionsInModal(wish);
        }, 1500);
      } else {
        wishInput.placeholder = "何か入力してください...";
        wishInput.focus();
      }
    });
  }

  // モーダル内の提案を表示
  function showSuggestionsInModal(wish) {
    const suggestionResults = keywordMatchSuggestions(wish);
    const suggestionsGrid = document.getElementById('modal-suggestions-grid');
    const userWishText = document.getElementById('user-wish-text');
    
    // ユーザーの望みをモーダルに表示
    if (userWishText) {
      userWishText.textContent = wish;
    }
    
    suggestionsGrid.innerHTML = '';
    
    if (suggestionResults.length === 0) {
      suggestionsGrid.innerHTML = '<div class="no-results"><i class="fas fa-search"></i><p>お探しの内容に合うサービスが見つかりませんでした。お問い合わせフォームよりご相談ください。</p><a href="#contact" class="btn btn-primary">お問い合わせ</a></div>';
      return;
    }
    
    suggestionResults.forEach(suggestion => {
      const card = document.createElement('div');
      card.className = 'suggestion-card';
      
      card.innerHTML = `
        <div class="suggestion-header">
          <h3 class="suggestion-title">${suggestion.title}</h3>
          <div class="suggestion-meta">
            <span class="suggestion-category">${suggestion.category}</span>
            <span class="suggestion-price">${suggestion.price || ''}</span>
          </div>
        </div>
        <p class="suggestion-description">${suggestion.description}</p>
        <div class="suggestion-footer">
          <a href="#" class="btn btn-primary btn-sm service-link" data-service="${suggestion.id}">詳細を見る</a>
        </div>
      `;
      
      suggestionsGrid.appendChild(card);
    });
    
    // アニメーション効果を追加
    const cards = suggestionsGrid.querySelectorAll('.suggestion-card');
    cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.animation = 'fadeInUp 0.5s ease-out forwards';
    });
    
    // キーフレームアニメーションを追加
    if (!document.getElementById('suggestion-animations')) {
      const styleSheet = document.createElement('style');
      styleSheet.id = 'suggestion-animations';
      styleSheet.innerHTML = `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .no-results {
          text-align: center;
          padding: 2rem;
          background: var(--primary-light);
          border-radius: 1rem;
          margin: 1rem 0;
        }
        
        .no-results i {
          font-size: 2.5rem;
          color: var(--primary-color);
          margin-bottom: 1rem;
          display: block;
        }
        
        .no-results p {
          margin-bottom: 1.5rem;
        }
      `;
      document.head.appendChild(styleSheet);
    }
    
    // サービスリンクのイベント登録を更新
    const serviceLinks = suggestionsGrid.querySelectorAll('.service-link');
    serviceLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const serviceId = this.dataset.service;
        if (serviceId) {
          // サジェスションモーダルを閉じる
          document.getElementById('suggestionModal').classList.remove('show');
          // サービスモーダルを開く
          showServiceModal(serviceId);
        }
      });
    });
  }

  // サジェスションモーダルを閉じる
  const closeSuggestionModal = document.getElementById('closeSuggestionModal');
  if (closeSuggestionModal) {
    closeSuggestionModal.addEventListener('click', function() {
      document.getElementById('suggestionModal').classList.remove('show');
    });
  }

  // モーダル外をクリックしても閉じる
  window.addEventListener('click', function(e) {
    const suggestionModal = document.getElementById('suggestionModal');
    const serviceModal = document.getElementById('serviceModal');
    if (e.target === suggestionModal) {
      suggestionModal.classList.remove('show');
    }
    if (e.target === serviceModal) {
      serviceModal.classList.remove('show');
    }
  });

  // スクロールイベントの効果
  let scrollTicking = false;

  function updateScrollEffects() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // スクロール表示要素
    const revealElements = document.querySelectorAll('.reveal-on-scroll:not(.revealed)');
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('revealed');
      }
    });
    
    // トップに戻るボタンの表示/非表示
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
      if (scrollTop > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
    
    scrollTicking = false;
  }

  window.addEventListener('scroll', function() {
    if (!scrollTicking) {
      window.requestAnimationFrame(function() {
        updateScrollEffects();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  });
  
  // 初期化時にも実行
  updateScrollEffects();
  
  // 浮遊要素にクラスを適用
  const floatElements = document.querySelectorAll('.feature-card, .badge, .feature-icon');
  floatElements.forEach((element, index) => {
    if (index % 3 === 0) {
      element.classList.add('floating-element-slow');
    } else if (index % 3 === 1) {
      element.classList.add('floating-element');
    } else {
      element.classList.add('floating-element-fast');
    }
  });

  // トップに戻るボタンのクリックイベント
  const backToTopBtn = document.querySelector('.back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // モーダルを閉じるボタンにイベントリスナーを追加
  const closeButton = document.querySelector('.close');
  if (closeButton) {
    closeButton.addEventListener('click', function() {
      document.getElementById('serviceModal').classList.remove('show');
    });
  }
  
  // モーダル背景のクリックでも閉じるようにする
  const modal = document.getElementById('serviceModal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        this.classList.remove('show');
      }
    });
  }
  
  // サービスマップのサービスリンクにイベントリスナーを追加
  const serviceMapLinks = document.querySelectorAll('.service-category a');
  serviceMapLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const serviceId = this.getAttribute('data-service');
      if (serviceId) {
        showServiceModal(serviceId);
      }
    });
  });

  // サービスタブの切り替え
  const tabItems = document.querySelectorAll('.tab-item');
  const tabPanes = document.querySelectorAll('.tab-pane');
  const tabGroup = document.querySelector('.tab-group');
  
  if (tabGroup) {
    // 初期状態でアクティブなタブを設定
    tabGroup.setAttribute('data-active-tab', 'kantei');
    
    tabItems.forEach(item => {
      item.addEventListener('click', function() {
        // アクティブなタブを更新
        tabItems.forEach(tab => tab.classList.remove('active'));
        this.classList.add('active');
        
        // タブペインを表示
        const tabId = this.getAttribute('data-tab');
        tabGroup.setAttribute('data-active-tab', tabId);
        
        tabPanes.forEach(pane => {
          pane.classList.remove('active');
          // アニメーション用のクラスをリセット
          pane.classList.remove('fade-in');
        });
        
        const activePane = document.getElementById(tabId);
        if (activePane) {
          // ディスプレイをブロックに設定してからアニメーション用のクラスを追加
          activePane.classList.add('active');
          
          // 少し遅延させてアニメーションを適用
          setTimeout(() => {
            activePane.classList.add('fade-in');
          }, 50);
        }
      });
    });
  }

  // プライバシーポリシーポップアップ用のDOM要素を初期化
  document.addEventListener('DOMContentLoaded', function() {
    // プライバシーポリシーモーダルが存在しない場合は作成
    if (!document.getElementById('privacyModal')) {
      // モーダル要素を作成
      const modalDiv = document.createElement('div');
      modalDiv.className = 'privacy-modal';
      modalDiv.id = 'privacyModal';
      
      // モーダルの内容を作成
      modalDiv.innerHTML = `
        <div class="privacy-modal-content">
          <div class="privacy-close" id="closePrivacyModal">
            <i class="fas fa-times"></i>
          </div>
          <div class="privacy-content">
            <h1>プライバシーポリシー</h1>
            
            <p>PremaNadi（以下、「当サイト」）は、お客様の個人情報の保護を最優先事項と考えております。本プライバシーポリシーでは、当サイトがどのように個人情報を収集、使用、開示するかについて説明いたします。</p>
            
            <h2>1. 収集する情報</h2>
            <p>当サイトでは、以下の情報を収集することがあります：</p>
            <ul>
              <li>お名前</li>
              <li>メールアドレス</li>
              <li>電話番号</li>
              <li>生年月日（マヤ暦鑑定などのサービス提供に必要な場合）</li>
              <li>お問い合わせやサービス提供に関連して自発的に提供された情報</li>
              <li>ウェブサイトの使用状況に関する情報（アクセスログ、IPアドレス、使用ブラウザなど）</li>
            </ul>
            
            <h2>2. 個人情報の利用目的</h2>
            <p>収集した個人情報は、以下の目的で利用します：</p>
            <ul>
              <li>お問い合わせへの回答</li>
              <li>サービスの提供とお客様サポート</li>
              <li>サービス改善のための分析</li>
              <li>新サービスや特別オファーなどのご案内（お客様の同意がある場合）</li>
              <li>関連法令の遵守</li>
            </ul>
            
            <h2>3. 個人情報の共有</h2>
            <p>当サイトは、以下の場合を除き、お客様の個人情報を第三者と共有することはありません：</p>
            <ul>
              <li>お客様の同意がある場合</li>
              <li>法的要請に応じる必要がある場合</li>
              <li>当サイトのサービス提供に必要な業務委託先（適切な機密保持契約の下）</li>
            </ul>
            
            <h2>4. Cookieの使用</h2>
            <p>当サイトでは、お客様の体験向上のためにCookieを使用しています。Cookieとは、お客様のブラウザに保存される小さなデータファイルで、ウェブサイトの使用状況を記録します。ブラウザの設定でCookieを無効にすることも可能ですが、当サイトの一部機能が正常に動作しなくなる可能性があります。</p>
            
            <h2>5. セキュリティ</h2>
            <p>当サイトは、お客様の個人情報を保護するため、適切な技術的・組織的対策を講じていますが、インターネット上の送信やデジタル保存は100%安全でないことをご了承ください。</p>
            
            <h2>6. 個人情報の保持期間</h2>
            <p>当サイトは、法令で義務付けられている場合や正当な事業目的のために必要な期間に限り、個人情報を保持します。</p>
            
            <h2>7. お子様のプライバシー</h2>
            <p>当サイトは16歳未満のお子様から意図的に個人情報を収集することはありません。16歳未満のお子様が個人情報を提供された場合は、直ちにご連絡ください。</p>
            
            <h2>8. お客様の権利</h2>
            <p>お客様は、ご自身の個人情報に関して以下の権利を有しています：</p>
            <ul>
              <li>個人情報へのアクセス</li>
              <li>個人情報の訂正</li>
              <li>個人情報の削除</li>
              <li>個人情報の処理の制限</li>
              <li>データポータビリティ</li>
              <li>処理への異議申し立て</li>
            </ul>
            <p>これらの権利行使をご希望の場合は、下記の連絡先までお問い合わせください。</p>
            
            <h2>9. 本ポリシーの変更</h2>
            <p>当サイトは、必要に応じて本プライバシーポリシーを変更することがあります。変更があった場合は、当サイト上で通知します。</p>
            
            <h2>10. お問い合わせ</h2>
            <p>本プライバシーポリシーに関するご質問やお問い合わせは、以下の連絡先までお願いいたします：</p>
            <p>Email: info@premanadi.com</p>
            
            <p class="update-date">最終更新日: 2023年12月1日</p>
          </div>
        </div>
      `;
      
      // bodyに追加
      document.body.appendChild(modalDiv);
      
      // 閉じるボタンの動作を設定
      const closeButton = document.getElementById('closePrivacyModal');
      if (closeButton) {
        closeButton.addEventListener('click', function() {
          const modal = document.getElementById('privacyModal');
          if (modal) {
            modal.classList.remove('show');
          }
        });
      }
    }
    
    // ウィンドウクリックでモーダルを閉じる
    window.addEventListener('click', function(event) {
      const modal = document.getElementById('privacyModal');
      if (event.target === modal) {
        modal.classList.remove('show');
      }
    });
    
    // すべてのプライバシーポリシーリンクにイベントリスナーを設定
    setupPrivacyPolicyLinks();
    
    // ページ読み込み時にクッキー同意バナーを表示（初回訪問時のみ）
    if (!localStorage.getItem('privacyPolicyAccepted')) {
      showCookieConsentBanner();
    }
  });

  // プライバシーポリシーリンクの処理を設定
  function setupPrivacyPolicyLinks() {
    // すべてのプライバシーポリシーのリンクを取得
    const privacyLinks = document.querySelectorAll('.privacy-policy-link');
    
    // 各リンクにクリックイベントを設定
    privacyLinks.forEach(link => {
      // 既存のイベントリスナーを削除（重複防止）
      const newLink = link.cloneNode(true);
      link.parentNode.replaceChild(newLink, link);
      
      // 新しいイベントリスナーを設定
      newLink.addEventListener('click', function(e) {
        e.preventDefault();
        const modal = document.getElementById('privacyModal');
        if (modal) {
          modal.classList.add('show');
        } else {
          console.error('プライバシーポリシーモーダルが見つかりません');
        }
      });
    });
  }

  // クッキー同意バナーを表示
  function showCookieConsentBanner() {
    // バナー要素を作成
    const banner = document.createElement('div');
    banner.className = 'cookie-consent-banner';
    banner.innerHTML = `
      <div class="cookie-content">
        <p>当サイトでは、ユーザー体験向上のためCookieを使用しています。サイトを利用することで、
        <span class="privacy-policy-link">プライバシーポリシー</span>に同意したことになります。</p>
        <button id="acceptCookies" class="btn btn-primary">同意する</button>
      </div>
    `;
    
    // bodyに追加
    document.body.appendChild(banner);
    
    // 同意ボタンのクリックイベント
    document.getElementById('acceptCookies').addEventListener('click', function() {
      localStorage.setItem('privacyPolicyAccepted', 'true');
      banner.style.transform = 'translateY(100%)';
      
      // アニメーション後に要素を削除
      setTimeout(() => {
        document.body.removeChild(banner);
      }, 300);
    });
    
    // プライバシーポリシーリンクのイベント設定
    const privacyLink = banner.querySelector('.privacy-policy-link');
    privacyLink.addEventListener('click', function() {
      document.getElementById('privacyModal').classList.add('show');
    });
    
    // 少し遅らせてバナーを表示
    setTimeout(() => {
      banner.style.transform = 'translateY(0)';
    }, 1000);
  }

  // ページ内のプライバシーポリシーのリンクを追加または更新する
  function addPrivacyPolicyLinks() {
    // フッターにプライバシーポリシーのリンクを追加
    const footerLinks = document.querySelectorAll('.footer-links');
    if (footerLinks.length > 0) {
      // フッターの最後のリンクリスト（企業情報など）を探す
      const lastLinkSection = footerLinks[footerLinks.length - 1];
      const linksList = lastLinkSection.querySelector('ul');
      
      // すでにリンクがあるかチェック
      const existingLink = linksList.querySelector('a[href="#privacy"]');
      if (!existingLink) {
        // 新しいリンクを追加
        const newLi = document.createElement('li');
        newLi.innerHTML = '<a href="#privacy" class="privacy-policy-link">プライバシーポリシー</a>';
        linksList.appendChild(newLi);
      }
    }
    
    // お問い合わせフォームのプライバシーポリシーチェックボックスのラベルを更新
    const privacyCheckLabels = document.querySelectorAll('.privacy-policy label');
    privacyCheckLabels.forEach(label => {
      const link = label.querySelector('a');
      if (link) {
        link.className = 'privacy-policy-link';
        link.setAttribute('href', '#privacy');
      } else {
        // リンクが存在しない場合はテキストを置き換え
        const text = label.textContent;
        if (text.includes('プライバシーポリシー')) {
          label.innerHTML = text.replace('プライバシーポリシー', '<span class="privacy-policy-link">プライバシーポリシー</span>');
        }
      }
    });
  }

  // Cookie同意バナーのスタイルを追加
  const style = document.createElement('style');
  style.textContent = `
    .cookie-consent-banner {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.95);
      padding: 1rem;
      box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
      z-index: 1000;
      transform: translateY(100%);
      transition: transform 0.3s ease;
      backdrop-filter: blur(10px);
    }
    
    .cookie-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    
    .cookie-content p {
      margin: 0;
      padding-right: 1rem;
      flex: 1;
      min-width: 0;
    }
    
    .cookie-content button {
      white-space: nowrap;
    }
    
    @media (max-width: 768px) {
      .cookie-content {
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
      }
      
      .cookie-content p {
        margin-bottom: 0;
        padding-right: 1rem;
        flex: 1;
        min-width: 0;
      }
      
      .cookie-content button {
        white-space: nowrap;
      }
    }
  `;

  document.head.appendChild(style);

  // ページ読み込み完了時にプライバシーポリシーリンクを追加
  window.addEventListener('load', function() {
    addPrivacyPolicyLinks();
    
    // 少し遅延して実行（動的に追加された要素に対応するため）
    setTimeout(setupPrivacyPolicyLinks, 500);
  });

  // 起業スクールページのタイムラインアニメーション
  function revealOnScroll() {
    const elements = document.querySelectorAll('.reveal-on-scroll');
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 100) {
        element.classList.add('revealed');
      }
    });
  }

  // 初期ロード時とスクロール時に実行
  revealOnScroll();
  window.addEventListener('scroll', revealOnScroll);

  // タイムラインアニメーション
  function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    if (timelineItems.length > 0) {
      timelineItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('animated');
        }, 300 * index);
      });
    }
  }

  // タイムラインが表示された時にアニメーション開始
  const timeline = document.querySelector('.timeline');
  if (timeline) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateTimeline();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    observer.observe(timeline);
  }

  // テスティモニアルスライダーの自動スクロール
  function setupTestimonialSlider() {
    const slider = document.querySelector('.testimonial-slider');
    
    if (slider && slider.children.length > 1) {
      let currentSlide = 0;
      const slides = slider.children;
      const totalSlides = slides.length;
      
      // モバイルでのみスライド表示に切り替え
      if (window.innerWidth <= 768) {
        // 最初は全て非表示にする
        for (let i = 0; i < totalSlides; i++) {
          if (i !== currentSlide) {
            slides[i].style.display = 'none';
          }
        }
        
        // 3秒ごとにスライド切り替え
        setInterval(() => {
          slides[currentSlide].style.display = 'none';
          currentSlide = (currentSlide + 1) % totalSlides;
          slides[currentSlide].style.display = 'block';
        }, 5000);
      }
    }
  }
  
  setupTestimonialSlider();
  
  // リサイズ時の処理
  window.addEventListener('resize', () => {
    setupTestimonialSlider();
  });
});

// キーワードマッチングによる提案
function keywordMatchSuggestions(wish) {
  const results = [];
  
  // キーワードマッチングの簡易デモ
  const keywords = {
    '才能': ['maya-personal', 'future-creation', 'maya-work'],
    '仕事': ['maya-work', 'startup-school', 'future-creation'],
    '子育て': ['maya-parenting', 'maya-montessori'],
    '人間関係': ['maya-120min', 'synchrono-salon'],
    '使命': ['maya-personal', 'future-creation'],
    '自分': ['maya-personal', 'shinmitsu', 'future-creation'],
    '不安': ['tarot', 'maya-personal', 'synchrono-salon'],
    '将来': ['future-creation', 'maya-work', 'maya-personal'],
    '悩み': ['maya-personal', 'tarot', 'synchrono-salon'],
    'ヨガ': ['yoga-instructor', 'synchrono-salon'],
    '起業': ['startup-school', 'maya-work'],
    '方向性': ['maya-personal', 'future-creation'],
    'オイル': ['memory-oil', 'memory-oil-basic'],
    '成長': ['future-creation', 'startup-school', 'synchrono-salon'],
    '変化': ['maya-personal', 'future-creation', 'tarot'],
    '目的': ['maya-personal', 'future-creation'],
    '子供': ['maya-parenting', 'maya-montessori'],
    '幸せ': ['maya-personal', 'future-creation', 'synchrono-salon'],
    '豊か': ['future-creation', 'startup-school'],
    '本来': ['maya-personal', 'shinmitsu'],
    '転機': ['maya-personal', 'tarot', 'future-creation'],
    '転職': ['maya-work', 'future-creation'],
    '可能性': ['maya-personal', 'future-creation'],
    '願望': ['tarot', 'maya-personal'],
    '潜在': ['maya-personal', 'future-creation'],
    '直感': ['maya-personal', 'tarot'],
    '運命': ['maya-personal', 'shinmitsu'],
    '習慣': ['miracle-diary', 'synchrono-salon'],
    '健康': ['yoga-instructor', 'synchrono-salon'],
    '家族': ['maya-parenting', 'maya-montessori']
  };
  
  // 願望からキーワードを検出
  let matchedServiceIds = [];
  for (const [keyword, services] of Object.entries(keywords)) {
    if (wish.includes(keyword)) {
      matchedServiceIds = [...matchedServiceIds, ...services];
    }
  }
  
  // 重複を除去
  matchedServiceIds = [...new Set(matchedServiceIds)];
  
  // 何も見つからない場合はデフォルトのサービスを表示
  if (matchedServiceIds.length === 0) {
    matchedServiceIds = ['maya-personal', 'future-creation', 'synchrono-salon'];
  }
  
  // サービスIDからサービスデータを取得
  matchedServiceIds.forEach(id => {
    if (serviceData[id]) {
      results.push({
        id: id,
        title: serviceData[id].title,
        category: serviceData[id].category,
        description: serviceData[id].description
      });
    }
  });
  
  return results;
}

// サービス詳細モーダル表示
function showServiceModal(serviceId) {
  const service = serviceData[serviceId];
  if (!service) return;
  
  const modal = document.getElementById('serviceModal');
  const modalTitle = modal.querySelector('.modal-title');
  const modalCategory = modal.querySelector('.modal-category');
  const modalPrice = modal.querySelector('.modal-price');
  const modalDescription = modal.querySelector('.modal-description');
  const contentList = modal.querySelector('.content-list');
  const targetAudience = modal.querySelector('.target-audience');
  const applicationMethod = modal.querySelector('.application-method');
  const relatedServices = modal.querySelector('.related-services');
  const modalFooter = modal.querySelector('.modal-footer');
  
  modalTitle.textContent = service.title;
  modalCategory.textContent = service.category;
  modalPrice.textContent = service.price;
  modalDescription.textContent = service.description;
  
  // 内容リストを生成
  contentList.innerHTML = '';
  service.content.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    contentList.appendChild(li);
  });
  
  // 対象者
  targetAudience.textContent = Array.isArray(service.target) ? service.target.join(' ') : service.target;
  
  // 申し込み方法
  applicationMethod.textContent = service.application || (service.apply || '公式LINEまたはお問い合わせフォームよりお申し込みください。');
  
  // 関連サービス
  relatedServices.innerHTML = '';
  if (service.next && service.next.length > 0) {
    service.next.forEach(nextId => {
      if (serviceData[nextId]) {
        const item = document.createElement('div');
        item.className = 'related-service-item';
        item.textContent = serviceData[nextId].title;
        item.dataset.service = nextId;
        item.addEventListener('click', function() {
          showServiceModal(nextId);
        });
        relatedServices.appendChild(item);
      }
    });
  }
  
  // フッターのボタンを設定
  modalFooter.innerHTML = '';
  if (serviceId === 'future-creation') {
    // 未来創造プロジェクトの詳細ページへのリンク
    const detailLink = document.createElement('a');
    detailLink.href = 'future-project.html';
    detailLink.className = 'btn btn-primary';
    detailLink.innerHTML = '詳細を見る <i class="fas fa-arrow-right"></i>';
    modalFooter.appendChild(detailLink);
  } else if (serviceId === 'startup-school') {
    // 起業スクールの詳細ページへのリンク
    const detailLink = document.createElement('a');
    detailLink.href = 'entrepreneur-school.html';
    detailLink.className = 'btn btn-primary';
    detailLink.innerHTML = '詳細を見る <i class="fas fa-arrow-right"></i>';
    modalFooter.appendChild(detailLink);
  } else if (serviceId === 'yoga-instructor') {
    // ヨガインストラクター養成講座の詳細ページへのリンク
    const detailLink = document.createElement('a');
    detailLink.href = 'yoga-instructor.html';
    detailLink.className = 'btn btn-primary';
    detailLink.innerHTML = '詳細を見る <i class="fas fa-arrow-right"></i>';
    modalFooter.appendChild(detailLink);
  } else if (serviceId === 'synchrono-salon') {
    // シンクロサロンの詳細ページへのリンク
    const detailLink = document.createElement('a');
    detailLink.href = 'sync-salon.html';
    detailLink.className = 'btn btn-primary';
    detailLink.innerHTML = '詳細を見る <i class="fas fa-arrow-right"></i>';
    modalFooter.appendChild(detailLink);
  } else if (serviceId === 'maya-work') {
    // マヤ暦お仕事コンサルの詳細ページへのリンク
    const detailLink = document.createElement('a');
    detailLink.href = 'career-consulting.html';
    detailLink.className = 'btn btn-primary';
    detailLink.innerHTML = '詳細を見る <i class="fas fa-arrow-right"></i>';
    modalFooter.appendChild(detailLink);
  } else {
    // 通常のお問い合わせリンク
    const contactLink = document.createElement('a');
    contactLink.href = '#contact';
    contactLink.className = 'btn btn-primary';
    contactLink.textContent = 'お問い合わせ';
    modalFooter.appendChild(contactLink);
  }
  
  // モーダルを表示
  modal.classList.add('show');
  
  // 閉じるイベントリスナーはDOMContentLoadedで設定済のため削除
}

// お問い合わせフォーム処理
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // フォームのバリデーション
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      const privacy = document.getElementById('privacy').checked;
      
      if (!name || !email || !subject || !message || !privacy) {
        alert('必須項目をすべて入力してください。');
        return;
      }
      
      // メール形式の簡易チェック
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('有効なメールアドレスを入力してください。');
        return;
      }
      
      // フォーム送信確認
      const formData = {
        name: name,
        email: email,
        phone: document.getElementById('phone').value,
        subject: subject,
        message: message
      };
      
      // ここに実際のフォーム送信処理を実装
      // 例: フォームデータをサーバーに送信
      
      // 送信成功時の処理（デモ）
      alert('お問い合わせありがとうございます。24時間以内にご返信いたします。');
      contactForm.reset();
    });
  }
});

// タイプライタアニメーション
document.addEventListener('DOMContentLoaded', function() {
  const wishInput = document.getElementById('wish-input');
  const typewriterText = document.querySelector('.typewriter-text');
  
  if (typewriterText && wishInput) {
    const placeholder = "例：自分の才能を見つけたい";
    
    // プレースホルダーテキストを設定
    typewriterText.textContent = "";
    
    // 左から右へのタイプライター効果（文字を1文字ずつ表示）
    let i = 0;
    function typeWriter() {
      if (i < placeholder.length) {
        typewriterText.textContent += placeholder.charAt(i);
        i++;
        setTimeout(typeWriter, 100); // 1文字あたり100ミリ秒の速度（より遅く）
      } else {
        // タイピングが終わったら、しばらく待機して削除を開始
        setTimeout(deleteText, 3000);
      }
    }
    
    // テキストを1文字ずつ削除する関数
    function deleteText() {
      if (typewriterText.textContent.length > 0) {
        typewriterText.textContent = typewriterText.textContent.slice(0, -1);
        setTimeout(deleteText, 50);
      } else {
        // 削除が終わったら、しばらく待機して再度タイピングを開始
        i = 0;
        setTimeout(typeWriter, 1000);
      }
    }
    
    // タイプライターアニメーションを開始
    setTimeout(typeWriter, 1000);
    
    // 入力欄がフォーカスされたときにタイプライタープレースホルダーを非表示
    wishInput.addEventListener('focus', function() {
      const typewriterPlaceholder = document.querySelector('.typewriter-placeholder');
      if (typewriterPlaceholder) {
        typewriterPlaceholder.style.display = 'none';
      }
    });
    
    // 入力欄からフォーカスが外れたときに、入力値がなければタイプライタープレースホルダーを表示
    wishInput.addEventListener('blur', function() {
      const typewriterPlaceholder = document.querySelector('.typewriter-placeholder');
      if (typewriterPlaceholder && this.value === '') {
        typewriterPlaceholder.style.display = 'block';
      }
    });
    
    // 入力中はプレースホルダーを非表示
    wishInput.addEventListener('input', function() {
      const typewriterPlaceholder = document.querySelector('.typewriter-placeholder');
      if (typewriterPlaceholder) {
        if (this.value !== '') {
          typewriterPlaceholder.style.display = 'none';
        } else {
          typewriterPlaceholder.style.display = 'block';
        }
      }
    });
  }
});
