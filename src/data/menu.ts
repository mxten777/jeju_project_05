export const MENU_STRUCTURE = [
  {
    id: 'company',
    label: 'menu.company.title',
    path: '/company',
    children: [
      { label: 'menu.company.about', path: '/company/about' },
      { label: 'menu.company.vision', path: '/company/vision' },
      { label: 'menu.company.history', path: '/company/history' },
      { label: 'menu.company.certifications', path: '/company/certifications' },
      { label: 'menu.company.global', path: '/company/global' },
    ]
  },
  {
    id: 'products',
    label: 'menu.products.title',
    path: '/products',
    children: [
      { label: 'menu.products.category', path: '/products/category' },
      { label: 'menu.products.search', path: '/products/search' },
      { label: 'menu.products.featured', path: '/products/featured' },
    ]
  },
  {
    id: 'technology',
    label: 'menu.technology.title',
    path: '/technology',
    children: [
      { label: 'menu.technology.core', path: '/technology/core' },
      { label: 'menu.technology.rnd', path: '/technology/rnd' },
      { label: 'menu.technology.applications', path: '/technology/applications' },
    ]
  },
  {
    id: 'investors',
    label: 'menu.investors.title',
    path: '/investors',
    children: [
      { label: 'menu.investors.info', path: '/investors/info' },
      { label: 'menu.investors.disclosure', path: '/investors/disclosure' },
      { label: 'menu.investors.financial', path: '/investors/financial' },
      { label: 'menu.investors.ir_materials', path: '/investors/ir-materials' },
    ]
  },
  {
    id: 'news',
    label: 'menu.news.title',
    path: '/news',
    children: [
      { label: 'menu.news.press', path: '/news/press' },
      { label: 'menu.news.notice', path: '/news/notice' },
      { label: 'menu.news.achievements', path: '/news/achievements' },
    ]
  },
  {
    id: 'contact',
    label: 'menu.contact.title',
    path: '/contact',
    children: [
      { label: 'menu.contact.inquiry', path: '/contact/inquiry' },
      { label: 'menu.contact.location', path: '/contact/location' },
      { label: 'menu.contact.global', path: '/contact/global' },
    ]
  }
];
