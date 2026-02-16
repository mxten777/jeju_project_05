import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import ko from './locales/ko.json';
import ja from './locales/ja.json';

// Utility to determine initial language
const getInitialLanguage = (): string => {
  // 1. Check localStorage
  const savedLang = localStorage.getItem('lang');
  if (savedLang) {
    return savedLang;
  }

  // 2. Check Browser Navigator
  const browserLang = navigator.language || (navigator.languages && navigator.languages[0]);
  if (browserLang) {
    const lang = browserLang.toLowerCase();
    if (lang.includes('ko') || lang.includes('kr')) return 'ko';
    if (lang.includes('ja') || lang.includes('jp')) return 'ja';
  }

  // 3. Default
  return 'en';
};

const initialLang = getInitialLanguage();
// Set HTML lang attribute immediately for consistency
document.documentElement.lang = initialLang;

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ko: { translation: ko },
      ja: { translation: ja }
    },
    lng: initialLang,
    fallbackLng: 'en',
    debug: import.meta.env.MODE === 'development',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;
