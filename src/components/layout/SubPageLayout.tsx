import React from 'react';
import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface SubPageLayoutProps {
  title: string;
  subtitle?: string;
  category?: string;
  children: React.ReactNode;
  bgImage?: string;
}

const SubPageLayout: React.FC<SubPageLayoutProps> = ({ 
  title, 
  subtitle, 
  category, 
  children,
  bgImage
}) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    ...pathnames.map((name, index) => {
      const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
      const isLast = index === pathnames.length - 1;
      return { 
        name: name.charAt(0).toUpperCase() + name.slice(1).replace('-', ' '), 
        path: routeTo,
        isLast 
      };
    })
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-secondary-900 z-0">
          <div className="absolute inset-0 bg-linear-to-r from-secondary-900 to-secondary-800 opacity-90" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
          {bgImage && (
             <div className={`absolute inset-0 bg-[url('${bgImage}')] bg-cover bg-center opacity-30 mix-blend-overlay`} />
          )}
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {category && (
              <span className="text-secondary-400 font-semibold tracking-wider text-sm uppercase mb-4 block">
                {category}
              </span>
            )}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </div>

      {/* Breadcrumbs & Navigation Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-[80px] z-20 shadow-xs">
        <div className="container mx-auto px-6 py-4 flex items-center text-sm text-slate-500">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={crumb.path}>
              {index > 0 && <ChevronRight className="w-4 h-4 mx-2 text-slate-300" />}
              <Link 
                to={crumb.path}
                className={`hover:text-primary-600 transition-colors ${crumb.isLast ? 'text-primary-600 font-medium pointer-events-none' : ''}`}
              >
                {crumb.name}
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
};

export default SubPageLayout;
