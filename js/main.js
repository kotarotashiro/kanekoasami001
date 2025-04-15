document.addEventListener('DOMContentLoaded', function() {
  // モバイルメニューの切り替え
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mainNav = document.querySelector('.main-nav');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenuBtn.classList.toggle('active');
      mainNav.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });
  }
  
  // ページ内リンクのスムーススクロール
  const pageLinks = document.querySelectorAll('a[href^="#"]');
  pageLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // モバイルメニューが開いている場合は閉じる
        if (mobileMenuBtn && mobileMenuBtn.classList.contains('active')) {
          mobileMenuBtn.click();
        }
      }
    });
  });
  
  // FAQのアコーディオン機能
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      // 他のFAQを閉じる
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
      
      // クリックしたFAQを開閉する
      item.classList.toggle('active');
    });
  });
  
  // 現在年をフッターに表示
  const currentYearElement = document.getElementById('current-year');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
  
  // スクロールアニメーション
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  
  function checkScroll() {
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('revealed');
      }
    });
    
    // トップに戻るボタンの表示制御
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  }
  
  // スクロール時にアニメーション要素をチェック
  window.addEventListener('scroll', checkScroll);
  
  // 初期表示時もチェック
  checkScroll();
  
  // トップに戻るボタンの機能
  const backToTopBtn = document.querySelector('.back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // タイムラインアニメーション
  function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
      item.style.animationDelay = `${index * 0.2}s`;
      item.classList.add('animate');
    });
  }
  
  // タイムラインセクションが表示されたときにアニメーション開始
  const timelineSection = document.querySelector('.timeline');
  if (timelineSection) {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        animateTimeline();
        observer.unobserve(timelineSection);
      }
    });
    observer.observe(timelineSection);
  }
  
  // 料金タブ切り替え機能
  const pricingTabBtns = document.querySelectorAll('.pricing-tab-btn');
  
  if (pricingTabBtns.length > 0) {
    pricingTabBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        // タブボタンのアクティブ状態切り替え
        pricingTabBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // タブコンテンツの表示切り替え
        const targetId = this.getAttribute('data-target');
        const tabContents = document.querySelectorAll('.pricing-tab-content');
        
        tabContents.forEach(content => {
          content.classList.remove('active');
        });
        
        document.getElementById(`${targetId}-content`).classList.add('active');
      });
    });
  }
});

// プライバシーポリシーモーダル
function setupPrivacyPolicyLinks() {
  const privacyLinks = document.querySelectorAll('.privacy-policy-link');
  const privacyModal = document.createElement('div');
  privacyModal.className = 'privacy-modal';
  
  privacyLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // モーダルコンテンツを作成
      privacyModal.innerHTML = `
        <div class="privacy-modal-content">
          <button class="privacy-close">&times;</button>
          <div class="privacy-content">
            <h1>プライバシーポリシー</h1>
            <p class="update-date">最終更新日: 2024年3月1日</p>
            
            <h2>1. 個人情報の収集について</h2>
            <p>当サイト「PremaNadi」（以下、「当サイト」）では、お問い合わせやサービスのお申し込みの際に、お名前、メールアドレス等の個人情報をご登録いただく場合がございます。これらの個人情報は、質問に対する回答や必要な情報を電子メールなどでご連絡する場合に利用させていただくものであり、個人情報をご提供いただく際の目的以外では利用いたしません。</p>
            
            <h2>2. 個人情報の第三者への開示</h2>
            <p>当サイトでは、個人情報は適切に管理し、以下に該当する場合を除いて第三者に開示することはありません。</p>
            <ul>
              <li>ご本人の同意がある場合</li>
              <li>法令に基づき開示することが必要である場合</li>
            </ul>
            
            <h2>3. 個人情報の安全対策</h2>
            <p>当サイトでは、個人情報の漏洩、滅失、毀損等を防ぐために、適切なセキュリティ対策を実施しています。個人情報の安全性確保のために、アクセス制限や暗号化などの対策を講じています。</p>
            
            <h2>4. Cookie（クッキー）の使用について</h2>
            <p>当サイトでは、サイトの利便性向上のためにCookieを使用しています。Cookieとは、ウェブサイトがブラウザを通じてコンピュータに一時的に記録する情報で、ユーザーのサイト閲覧履歴や入力情報などを記録します。ただし、記録される情報には、ユーザー個人を特定するものは一切含まれません。</p>
            
            <h2>5. アクセス解析ツールについて</h2>
            <p>当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。</p>
            
            <h2>6. プライバシーポリシーの変更について</h2>
            <p>当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しおよび改善していきます。修正された最新のプライバシーポリシーは常に本ページにて開示されます。</p>
          </div>
        </div>
      `;
      
      // モーダルを表示
      document.body.appendChild(privacyModal);
      setTimeout(() => {
        privacyModal.classList.add('show');
      }, 10);
      
      // スクロール禁止
      document.body.style.overflow = 'hidden';
      
      // 閉じるボタンの処理
      const closeButton = privacyModal.querySelector('.privacy-close');
      closeButton.addEventListener('click', closePrivacyModal);
      
      // モーダル外クリックで閉じる
      privacyModal.addEventListener('click', function(e) {
        if (e.target === privacyModal) {
          closePrivacyModal();
        }
      });
    });
  });
  
  function closePrivacyModal() {
    privacyModal.classList.remove('show');
    setTimeout(() => {
      if (document.body.contains(privacyModal)) {
        document.body.removeChild(privacyModal);
      }
    }, 300);
    document.body.style.overflow = '';
  }
}

// DOM読み込み完了時にプライバシーポリシーリンクの設定を実行
document.addEventListener('DOMContentLoaded', setupPrivacyPolicyLinks); 