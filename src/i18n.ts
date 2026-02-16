import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import ko from './locales/ko.json'; // Ensure this path is correct relative to src/i18n.ts

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: {
      en: {
        translation: en
      },
      ko: {
        translation: ko
      }
    },
    fallbackLng: 'en',
    debug: true, // Enable debug to see if translations are loading
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;
