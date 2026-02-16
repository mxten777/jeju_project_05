import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { setLanguage, type Language } from '../lib/lang';

interface LanguageToggleProps {
  variant?: 'desktop' | 'mobile';
  className?: string;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ variant = 'desktop', className = '' }) => {
  const { i18n } = useTranslation();
  
  // Use resolvedLanguage for consistency, fallback to language
  const currentLang = (i18n.resolvedLanguage || i18n.language || 'en').toLowerCase();
  
  const handleToggle = () => {
    // Cycle: EN -> KO -> JA -> EN
    let nextLang: Language = 'en';
    if (currentLang.includes('en')) nextLang = 'ko';
    else if (currentLang.includes('ko')) nextLang = 'ja';
    else if (currentLang.includes('ja')) nextLang = 'en';
    
    setLanguage(nextLang);
  };

  const getLabel = () => {
    if (currentLang.includes('ko')) return 'KR';
    if (currentLang.includes('ja')) return 'JP';
    return 'EN';
  };

  if (variant === 'mobile') {
    return (
      <button 
        onClick={handleToggle} 
        className={`flex items-center space-x-2 text-slate-500 hover:text-[#003366] p-2 transition-colors ${className}`}
        aria-label="Switch Language"
      >
        <Globe size={20} /> 
        <span className="font-medium text-sm">
          {currentLang.includes('en') ? '한국어/日本語 (KR/JP)' : 
           currentLang.includes('ko') ? '日本語/English (JP/EN)' : 
           'English/한국어 (EN/KR)'}
        </span>
      </button>
    );
  }

  // Desktop variant
  return (
    <button 
      onClick={handleToggle}
      className={`flex items-center gap-2 text-xs font-bold transition-colors uppercase p-2 rounded hover:bg-black/5 focus-ring ${className}`}
      aria-label="Switch Language"
      title="Click to switch language (EN -> KR -> JP)"
    >
      <Globe size={18} />
      <span>{getLabel()}</span>
    </button>
  );
};

export default LanguageToggle;
