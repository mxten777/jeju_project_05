import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe, ChevronRight, Search, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MENU_STRUCTURE } from '../data/menu';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState<string | null>(null);
    const { i18n } = useTranslation();

    const toggleMobileMenu = (id: string) => {
        setMobileMenuOpen(mobileMenuOpen === id ? null : id);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ko' : 'en');
    };

    // Style logic:
    // Scrolled: White background, Dark Text (Standard corporate look)
    // Top: Transparent background, White Text (Hero overlay)
    
    // Check if we are in a 'scrolled' state OR if we want to force white header on some pages (optional)
    const isScrolledState = scrolled;

    const headerBg = isScrolledState 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm' 
        : 'bg-transparent border-b border-white/10';

    const textColor = isScrolledState 
        ? 'text-slate-800' // Dark text on white
        : 'text-white';      // White text on transparent

    const iconHoverColor = 'hover:text-[#00AEEF]';
    
    // Logo color: Deep Navy on white, White on transparent
    const logoTextColor = isScrolledState ? 'text-[#003366]' : 'text-white';
    const subLogoColor = isScrolledState ? 'text-slate-500' : 'text-sky-200';

    return (
        <header 
            className={`fixed w-full z-50 transition-all duration-300 ${headerBg}`}
            onMouseLeave={() => setHoveredMenu(null)}
        >
            <div className="container-custom h-20 flex items-center justify-between relative">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-3 z-50 relative group">
                    <div className="w-9 h-9 bg-[#00AEEF] rounded-sm flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                        <span className="text-white font-bold text-sm tracking-tighter">JS</span>
                    </div>
                    <div className="flex flex-col justify-center">
                         <span className={`font-bold text-lg tracking-tight leading-none transition-colors duration-300 ${logoTextColor}`}>JEJU SEMI</span>
                         <span className={`text-[10px] tracking-[0.2em] font-medium uppercase transition-colors duration-300 ${subLogoColor}`}>Global Memory</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center h-full">
                    <ul className="flex items-center space-x-10 h-full">
                        {MENU_STRUCTURE.map((menu) => (
                            <li 
                                key={menu.id} 
                                className="h-full flex items-center"
                                onMouseEnter={() => setHoveredMenu(menu.id)}
                            >
                                <Link 
                                    to={menu.path}
                                    className={`relative py-2 text-[15px] font-bold tracking-wide transition-colors flex items-center gap-1 group ${textColor} ${iconHoverColor}`}
                                >
                                    {menu.label}
                                    {/* Animated Underline */}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00AEEF] transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center space-x-6">
                    <button className={`${textColor} ${iconHoverColor} transition-colors p-1`}>
                        <Search size={20} />
                    </button>
                    <button 
                        onClick={toggleLanguage}
                        className={`flex items-center gap-2 text-xs font-bold ${textColor} ${iconHoverColor} transition-colors uppercase p-1`}
                    >
                        <Globe size={18} />
                        <span>{i18n.language === 'en' ? 'KR' : 'EN'}</span>
                    </button>
                    <Link 
                        to="/contact/inquiry" 
                        className={`px-6 py-2.5 text-xs font-bold uppercase tracking-wider border transition-all rounded-sm ${
                            isScrolledState 
                            ? 'border-slate-300 text-slate-700 hover:bg-[#003366] hover:text-white hover:border-[#003366]' 
                            : 'border-white/40 text-white hover:bg-white hover:text-[#003366]'
                        }`}
                    >
                        Inquiry
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className={`lg:hidden z-50 p-2 ${textColor}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Desktop Mega Menu Dropdown */}
            <AnimatePresence>
                {hoveredMenu && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-slate-100 border-b shadow-xl overflow-hidden hidden lg:block"
                        onMouseEnter={() => setHoveredMenu(hoveredMenu)}
                        onMouseLeave={() => setHoveredMenu(null)}
                    >
                        <div className="container-custom py-12">
                            <div className="grid grid-cols-4 gap-12">
                                <div className="col-span-1 border-r border-slate-100 pr-8 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-3xl font-bold text-[#003366] mb-4">
                                            {MENU_STRUCTURE.find(m => m.id === hoveredMenu)?.label}
                                        </h3>
                                        <p className="text-slate-500 text-sm leading-relaxed">
                                            Explore our advanced semiconductor solutions designed for the future of technology.
                                        </p>
                                    </div>
                                    <div className="mt-8 text-[#00AEEF] font-bold text-sm tracking-widest flex items-center gap-2 cursor-pointer group">
                                        VIEW OVERVIEW <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                                <div className="col-span-3">
                                    <ul className="grid grid-cols-3 gap-y-4 gap-x-8">
                                        {MENU_STRUCTURE.find(m => m.id === hoveredMenu)?.children?.map((child) => (
                                            <li key={child.path}>
                                                <Link 
                                                    to={child.path}
                                                    className="group flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all duration-300"
                                                >
                                                    <span className="text-slate-700 font-semibold group-hover:text-[#00AEEF] transition-colors text-[15px]">{child.label}</span>
                                                    <ChevronRight size={18} className="text-slate-300 group-hover:text-[#00AEEF] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 lg:hidden overflow-y-auto"
                    >
                        <nav className="flex flex-col space-y-4 pb-20">
                            {MENU_STRUCTURE.map((menu) => (
                                <div key={menu.id} className="border-b border-slate-100 pb-2">
                                    <button 
                                        onClick={() => toggleMobileMenu(menu.id)}
                                        className="flex items-center justify-between w-full py-4"
                                    >
                                        <span className={`text-lg font-bold transition-colors ${mobileMenuOpen === menu.id ? 'text-[#00AEEF]' : 'text-slate-800'}`}>
                                            {menu.label}
                                        </span>
                                        <ChevronRight 
                                            size={20} 
                                            className={`transform transition-transform duration-300 ${mobileMenuOpen === menu.id ? 'rotate-90 text-[#00AEEF]' : 'text-slate-400'}`} 
                                        />
                                    </button>
                                    
                                    <AnimatePresence>
                                        {mobileMenuOpen === menu.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <ul className="flex flex-col space-y-3 pl-4 pb-4">
                                                    {menu.children?.map((child) => (
                                                        <li key={child.path}>
                                                            <Link
                                                                to={child.path}
                                                                onClick={() => setIsOpen(false)}
                                                                className="block text-base font-medium text-slate-500 hover:text-[#00AEEF] transition-colors"
                                                            >
                                                                {child.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </nav>
                        <div className="pb-8">
                            <button onClick={toggleLanguage} className="flex items-center space-x-3 text-slate-500 hover:text-[#003366]">
                                <Globe size={24} /> <span className="text-xl font-medium">{i18n.language === 'en' ? '한국어' : 'English'}</span>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
