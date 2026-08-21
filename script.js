const shortcutLinks = [
  {
    name: '네이버 블로그',
    subtitle: '게시글 작성 / 관리',
    url: 'https://blog.naver.com/',
    icon: 'N',
    className: 'blog'
  },
  {
    name: '애드포스트',
    subtitle: '수익 / 광고 관리',
    url: 'https://adpost.naver.com/main',
    icon: 'A',
    className: 'ad'
  },
  {
    name: '쇼핑 커넥트',
    subtitle: '상품 / 연계 관리',
    url: 'https://brandconnect.naver.com/980838492743328/affiliate/products',
    icon: 'S',
    className: 'shopping'
  },
  {
    name: '캡컷',
    subtitle: '영상 편집',
    url: 'https://www.capcut.com/ko-kr/',
    icon: 'C',
    className: 'capcut'
  },
  {
    name: '네이버 클립',
    subtitle: '콘텐츠 제작 / 참조',
    url: 'https://clip.naver.com/',
    icon: 'V',
    className: 'naverclip'
  },
  {
    name: '레뷰',
    subtitle: '리뷰 / 분석',
    url: 'https://www.revu.net/',
    icon: 'R',
    className: 'review'
  },
  {
    name: '강남맛집',
    subtitle: '맛집 정보 / 탐색',
    url: 'https://xn--939au0g4vj8sq.net/mypage/index.php',
    icon: 'G',
    className: 'gangnam'
  }
];

const todayDate = document.getElementById('todayDate');
const shortcutGrid = document.getElementById('shortcutGrid');

function renderShortcuts() {
  if (!shortcutGrid) return;

  shortcutGrid.innerHTML = shortcutLinks.map((item) => `
    <a class="shortcut-card ${item.className}" href="${item.url}" target="_blank" rel="noreferrer">
      <div class="icon">${item.icon}</div>
      <div class="text">
        <strong>${item.name}</strong>
        <small>${item.subtitle}</small>
      </div>
    </a>
  `).join('');
}

if (todayDate) {
  const now = new Date();
  const formatted = new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'short'
  }).format(now);

  todayDate.textContent = formatted;
}

renderShortcuts();

// 바로가기 순서를 바꾸고 싶으면 배열 순서를 바꾸면 됩니다.
// 새 사이트를 추가하려면 아래 배열에 객체 하나만 추가하면 됩니다.
// 예시:
// {
//   name: '카카오맵',
//   subtitle: '장소 확인',
//   url: 'https://map.kakao.com/',
//   icon: 'K',
//   className: 'map'
// },

