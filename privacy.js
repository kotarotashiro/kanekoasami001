// プライバシーポリシーポップアップと関連機能
document.addEventListener('DOMContentLoaded', function() {
  // プライバシーポリシーモーダルの作成
  createPrivacyModal();
  
  // プライバシーポリシーリンクのクリックイベントを設定
  setupPrivacyPolicyLinks();
  
  // クッキー同意バナーを表示（初回訪問時のみ）
  if (!localStorage.getItem('privacyPolicyAccepted')) {
    showCookieConsentBanner();
  }

  // フッターなどにプライバシーポリシーリンクを追加
  addPrivacyPolicyLinks();
});

// プライバシーポリシーモーダルを作成
function createPrivacyModal() {
  // すでに存在する場合は作成しない
  if (document.getElementById('privacyModal')) {
    return;
  }
  
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
  
  // モーダル外クリックで閉じる
  window.addEventListener('click', function(event) {
    const modal = document.getElementById('privacyModal');
    if (event.target === modal) {
      modal.classList.remove('show');
    }
  });
}

// プライバシーポリシーリンクのイベントを設定する関数
function setupPrivacyPolicyLinks() {
  // すべてのプライバシーポリシーのリンクを取得
  const privacyLinks = document.querySelectorAll('.privacy-policy-link');
  
  // 各リンクにクリックイベントを設定
  privacyLinks.forEach(link => {
    // 既存のイベントリスナーを削除（重複防止）
    const newLink = link.cloneNode(true);
    if (link.parentNode) {
      link.parentNode.replaceChild(newLink, link);
    }
    
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

// クッキー同意バナーを表示する関数
function showCookieConsentBanner() {
  // バナー要素を作成
  const banner = document.createElement('div');
  banner.className = 'cookie-consent-banner';
  banner.style.transform = 'translateY(100%)';
  
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
  const acceptButton = document.getElementById('acceptCookies');
  if (acceptButton) {
    acceptButton.addEventListener('click', function() {
      localStorage.setItem('privacyPolicyAccepted', 'true');
      banner.style.transform = 'translateY(100%)';
      
      // アニメーション後に要素を削除
      setTimeout(() => {
        if (banner.parentNode) {
          banner.parentNode.removeChild(banner);
        }
      }, 300);
    });
  }
  
  // バナー内のプライバシーポリシーリンクのイベント設定
  const privacyLink = banner.querySelector('.privacy-policy-link');
  if (privacyLink) {
    privacyLink.addEventListener('click', function(e) {
      e.preventDefault();
      const modal = document.getElementById('privacyModal');
      if (modal) {
        modal.classList.add('show');
      }
    });
  }
  
  // 少し遅らせてバナーを表示
  setTimeout(() => {
    banner.style.transform = 'translateY(0)';
  }, 1000);
}

// ページ内のプライバシーポリシーリンクを追加/更新する関数
function addPrivacyPolicyLinks() {
  // フッターにプライバシーポリシーリンクを追加
  const footerLinks = document.querySelectorAll('.footer-links');
  if (footerLinks.length > 0) {
    // フッターの最後のリンクリスト（企業情報など）を探す
    const lastLinkSection = footerLinks[footerLinks.length - 1];
    const linksList = lastLinkSection.querySelector('ul');
    
    if (linksList) {
      // すでにリンクがあるかチェック
      const existingLink = linksList.querySelector('a[href="#privacy"]');
      if (!existingLink) {
        // 新しいリンクを追加
        const newLi = document.createElement('li');
        newLi.innerHTML = '<a href="#privacy" class="privacy-policy-link">プライバシーポリシー</a>';
        linksList.appendChild(newLi);
      }
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
  
  // リンクのイベント設定を更新
  setTimeout(setupPrivacyPolicyLinks, 100);
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