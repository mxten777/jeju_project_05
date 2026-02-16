import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface PageMetaProps {
  title?: string;
  description?: string;
}

const PageMeta = ({ title, description }: PageMetaProps) => {
  const location = useLocation();

  useEffect(() => {
    // Basic Title
    const baseTitle = 'Jeju Semiconductor';
    document.title = title ? `${title} | ${baseTitle}` : baseTitle;

    // Meta Description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description || 'Global Leader in Memory Solutions');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description || 'Global Leader in Memory Solutions';
      document.head.appendChild(meta);
    }
    
    // OG Tags (Basic)
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title || baseTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description || 'Global memory semiconductor solutions provider.');

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', window.location.href);

  }, [title, description, location]);

  return null;
};

export default PageMeta;
