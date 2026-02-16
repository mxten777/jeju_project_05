// src/lib/lang.ts
import i18n from '../i18n';

export type Language = 'en' | 'ko';

export const setLanguage = async (lang: Language) => {
  try {
    // 1. Update i18n instance
    await i18n.changeLanguage(lang);
    
    // 2. Persist to localStorage
    localStorage.setItem('lang', lang);
    
    // 3. Update HTML document structure
    document.documentElement.lang = lang;
    
    // (Optional) Analytics event logic could go here
    console.log(`Language set to: ${lang}`);
    
  } catch (error) {
    console.error('Failed to set language:', error);
  }
};

export const getLanguage = (): Language => {
  // Priority: i18n.resolvedLanguage > i18n.language > localStorage > navigator > 'en'
  const current = i18n.resolvedLanguage || i18n.language || localStorage.getItem('lang');
  if (current && current.startsWith('ko')) return 'ko';
  return 'en';
};
