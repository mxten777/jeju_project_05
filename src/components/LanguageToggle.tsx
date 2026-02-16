import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { setLanguage } from '../lib/lang';

interface LanguageToggleProps {
  variant?: 'desktop' | 'mobile';
  className?: string;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ variant = 'desktop', className = '' }) => {
  const { i18n } = useTranslation();
  
  // Use resolvedLanguage for consistency, fallback to language
  const currentLang = i18n.resolvedLanguage || i18n.language || 'en';
  const isKo = currentLang.startsWith('ko');
  
  const handleToggle = () => {
    const nextLang = isKo ? 'en' : 'ko';
    setLanguage(nextLang);
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
          {isKo ? 'Switch to English (EN)' : '한국어 사이트 바로가기 (KR)'}
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
    >
      <Globe size={18} />
      <span>{isKo ? 'EN' : 'KR'}</span>
    </button>
  );
};

export default LanguageToggle;
