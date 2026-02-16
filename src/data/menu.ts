export const MENU_STRUCTURE = [
  {
    id: 'company',
    label: 'COMPANY',
    path: '/company',
    children: [
      { label: '회사소개', path: '/company/about' },
      { label: '비전·미션', path: '/company/vision' },
      { label: '연혁', path: '/company/history' },
      { label: '인증 및 수상', path: '/company/certifications' },
      { label: '글로벌 네트워크', path: '/company/global' },
    ]
  },
  {
    id: 'products',
    label: 'PRODUCTS',
    path: '/products',
    children: [
      { label: '제품 카테고리', path: '/products/category' },
      { label: '제품 검색', path: '/products/search' },
      { label: '주요 제품군', path: '/products/featured' },
    ]
  },
  {
    id: 'technology',
    label: 'TECHNOLOGY',
    path: '/technology',
    children: [
      { label: '핵심 기술', path: '/technology/core' },
      { label: '연구개발', path: '/technology/rnd' },
      { label: '적용 산업', path: '/technology/applications' },
    ]
  },
  {
    id: 'investors',
    label: 'INVESTORS',
    path: '/investors',
    children: [
      { label: '투자정보', path: '/investors/info' },
      { label: '공시자료', path: '/investors/disclosure' },
      { label: '재무정보', path: '/investors/financial' },
      { label: 'IR 자료', path: '/investors/ir-materials' },
    ]
  },
  {
    id: 'news',
    label: 'NEWS',
    path: '/news',
    children: [
      { label: '보도자료', path: '/news/press' },
      { label: '공지사항', path: '/news/notice' },
      { label: '주요 성과', path: '/news/achievements' },
    ]
  },
  {
    id: 'contact',
    label: 'CONTACT',
    path: '/contact',
    children: [
      { label: '문의하기', path: '/contact/inquiry' },
      { label: '오시는 길', path: '/contact/location' },
      { label: '글로벌 문의', path: '/contact/global' },
    ]
  }
];
