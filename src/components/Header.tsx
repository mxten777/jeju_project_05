import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe, ChevronRight, Search, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MENU_STRUCTURE } from '../data/menu';

const Header = () => {
    // State management
    const [scrolled, setScrolled] = useState(false);
    const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
    const { i18n } = useTranslation();
    
    // Scroll detection
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 15;
            setScrolled(isScrolled);
        };
        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Toggle language
    const toggleLanguage = () => {
        const currentLang = i18n.language;
        const targetLang = currentLang.startsWith('en') ? 'ko' : 'en';
        i18n.changeLanguage(targetLang);
    };

    // Toggle mobile menu expansion
    const toggleMobileExpand = (id: string) => {
        setMobileExpanded(mobileExpanded === id ? null : id);
    };

    /**
     * HEADER STATE LOGIC (Accessibility & Contrast)
     * ----------------------------------------------------
     * 1. Top (Transparent): Dark gradient overlay (scrim) + White Text
     * 2. Scrolled: White Layout + Dark Navy Text + Shadow
     * 3. Mega Menu Open: White Layout + Dark Text
     * 4. Mobile Menu Open: White Layout + Dark Text
     */
    
    // Determine which pages support the "Transparent Header with Dark Hero"
    const hasDarkHero = true; // Currently assuming all pages have dark hero. 
    // If you have a white-background page at the top, add logic here like:
    // const hasDarkHero = location.pathname !== '/white-page';
    
    // Determine if we should show the "Light Mode" (White background) header
    // The header becomes "Light Mode" if:
    // - User has scrolled down
    // - Mega menu is being hovered (desktop)
    // - Mobile menu is open
    // - Page doesn't have a dark hero section (needs contrast)
    const isLightState = scrolled || hoveredMenu !== null || mobileMenuOpen || !hasDarkHero;

    // Background Class
    const bgClass = isLightState
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-md'
        : 'bg-transparent border-b border-white/10';

    // Text & Interaction Colors
    const textBase = isLightState ? 'text-slate-800' : 'text-white';
    // const textBrand = 'text-[#00AEEF]'; // Removed unused
    const hoverEffect = isLightState ? 'hover:text-[#00AEEF]' : 'hover:text-white/80';
    
    // Logo styling
    const logoHead = isLightState ? 'text-[#003366]' : 'text-white';
    const logoSub = isLightState ? 'text-slate-500' : 'text-sky-100/80';

    // Button styling (CTA)
    // Ensures button is always visible regardless of header state
    const buttonClass = isLightState
        ? 'bg-[#003366] text-white hover:bg-[#002244] border-transparent'
        : 'bg-white/10 text-white hover:bg-white hover:text-[#003366] border-white/30 backdrop-blur-sm';

    return (
        <header 
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${bgClass}`}
            onMouseLeave={() => setHoveredMenu(null)}
        >
            {/* Scrim Overlay for Top State Contrast */}
            {/* Creates a subtle dark gradient behind text when transparent so it reads on light images */}
            {!isLightState && (
                <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/20 to-transparent pointer-events-none -z-10 h-32 transition-opacity duration-500" />
            )}

            <div className="container-custom h-20 flex items-center justify-between relative">
                
                {/* 1. LOGO AREA */}
                <Link to="/" className="flex items-center space-x-3 z-50 relative group focus-ring p-1" aria-label="Jeju Semiconductor Home">
                    <div className="w-9 h-9 bg-[#00AEEF] rounded-sm flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                        <span className="text-white font-bold text-sm tracking-tighter">JS</span>
                    </div>
                    <div className="flex flex-col justify-center">
                         <span className={`font-bold text-lg tracking-tight leading-none transition-colors duration-300 ${logoHead}`}>JEJU SEMI</span>
                         <span className={`text-[10px] tracking-[0.2em] font-medium uppercase transition-colors duration-300 ${logoSub}`}>Global Memory</span>
                    </div>
                </Link>

                {/* 2. DESKTOP NAVIGATION */}
                <nav className="hidden lg:flex items-center h-full" aria-label="Main Navigation">
                    <ul className="flex items-center space-x-10 h-full">
                        {MENU_STRUCTURE.map((menu) => (
                            <li 
                                key={menu.id} 
                                className="h-full flex items-center"
                                onMouseEnter={() => setHoveredMenu(menu.id)}
                            >
                                <Link 
                                    to={menu.path}
                                    className={`relative py-4 text-[15px] font-bold tracking-wide transition-colors flex items-center gap-1 group focus-ring ${textBase} ${hoverEffect}`}
                                >
                                    {menu.label}
                                    {/* Animated Underline */}
                                    <span className={`absolute bottom-2 left-0 h-0.5 bg-[#00AEEF] transition-all duration-300 ${hoveredMenu === menu.id ? 'w-full opacity-100' : 'w-0 opacity-0'}`}></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* 3. DESKTOP ACTIONS */}
                <div className="hidden lg:flex items-center space-x-6">
                    <button 
                        className={`transition-colors p-2 rounded-full hover:bg-black/5 focus-ring ${textBase}`}
                        aria-label="Search"
                    >
                        <Search size={20} />
                    </button>
                    
                    <button 
                        onClick={toggleLanguage}
                        className={`flex items-center gap-2 text-xs font-bold transition-colors uppercase p-2 rounded hover:bg-black/5 focus-ring ${textBase}`}
                        aria-label="Switch Language"
                    >
                        <Globe size={18} />
                        <span>{i18n.language.startsWith('en') ? 'KR' : 'EN'}</span>
                    </button>

                    <Link 
                        to="/contact" 
                        className={`px-6 py-2.5 text-xs font-bold uppercase tracking-wider border transition-all rounded-sm shadow-sm focus-ring ${buttonClass}`}
                        aria-label="Contact Inquiry"
                    >
                        Inquiry
                    </Link>
                </div>

                {/* 4. MOBILE MENU BUTTON */}
                <button 
                    className={`lg:hidden z-50 p-2 rounded focus-ring ${textBase}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
                    aria-expanded={mobileMenuOpen}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* 5. MEGA MENU DROPDOWN (DESKTOP) */}
            <AnimatePresence>
                {hoveredMenu && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="absolute top-full left-0 w-full bg-white border-t-2 border-[#003366] shadow-xl overflow-hidden hidden lg:block"
                        onMouseEnter={() => setHoveredMenu(hoveredMenu)}
                        onMouseLeave={() => setHoveredMenu(null)}
                    >
                        <div className="container-custom py-12">
                            <div className="grid grid-cols-4 gap-12">
                                {/* Left: Featured Info */}
                                <div className="col-span-1 border-r border-slate-100 pr-8 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-3xl font-bold text-[#003366] mb-4">
                                            {MENU_STRUCTURE.find(m => m.id === hoveredMenu)?.label}
                                        </h3>
                                        <p className="text-slate-500 text-sm leading-relaxed">
                                            We deliver world-class semiconductor solutions with precision and innovation.
                                        </p>
                                    </div>
                                    <Link to={MENU_STRUCTURE.find(m => m.id === hoveredMenu)?.path || "#"} 
                                          className="mt-8 text-[#00AEEF] font-bold text-sm tracking-widest flex items-center gap-2 cursor-pointer group hover:text-[#008ec2] w-fit focus-ring">
                                        VIEW OVERVIEW <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                                
                                {/* Right: Menu Links */}
                                <div className="col-span-3">
                                    <ul className="grid grid-cols-3 gap-y-4 gap-x-8">
                                        {MENU_STRUCTURE.find(m => m.id === hoveredMenu)?.children?.map((child) => (
                                            <li key={child.path}>
                                                <Link 
                                                    to={child.path}
                                                    className="group flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all duration-200 focus-ring"
                                                    onClick={() => setHoveredMenu(null)}
                                                >
                                                    <span className="text-[#334155] font-semibold group-hover:text-[#00AEEF] transition-colors text-[15px]">{child.label}</span>
                                                    <ChevronRight size={18} className="text-slate-300 group-hover:text-[#00AEEF] opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
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

            {/* 6. MOBILE MENU OVERLAY */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 lg:hidden overflow-y-auto"
                    >
                        <nav className="flex flex-col flex-1 pb-10">
                            {MENU_STRUCTURE.map((menu) => (
                                <div key={menu.id} className="border-b border-slate-100">
                                    <button 
                                        onClick={() => toggleMobileExpand(menu.id)}
                                        className="flex items-center justify-between w-full py-5 focus-ring"
                                        aria-expanded={mobileExpanded === menu.id}
                                    >
                                        <span className={`text-lg font-bold transition-colors ${mobileExpanded === menu.id ? 'text-[#00AEEF]' : 'text-slate-800'}`}>
                                            {menu.label}
                                        </span>
                                        <ChevronRight 
                                            size={20} 
                                            className={`transform transition-transform duration-300 ${mobileExpanded === menu.id ? 'rotate-90 text-[#00AEEF]' : 'text-slate-400'}`} 
                                        />
                                    </button>
                                    
                                    <AnimatePresence>
                                        {mobileExpanded === menu.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden bg-slate-50/50 rounded-lg mb-4"
                                            >
                                                <ul className="flex flex-col space-y-1 p-4">
                                                    {menu.children?.map((child) => (
                                                        <li key={child.path}>
                                                            <Link
                                                                to={child.path}
                                                                onClick={() => setMobileMenuOpen(false)}
                                                                className="block py-2.5 px-2 text-[15px] font-medium text-slate-600 hover:text-[#00AEEF] hover:bg-slate-100 rounded transition-colors focus-ring"
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
                        
                        {/* Mobile Footer Area */}
                        <div className="pb-10 pt-6 border-t border-slate-100">
                             <div className="grid grid-cols-2 gap-4 mb-8">
                                <Link 
                                    to="/contact" 
                                    className="flex justify-center items-center py-3 bg-[#003366] text-white font-bold rounded-lg shadow-md active:scale-95 transition-transform"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Inquiry
                                </Link>
                                <button className="flex justify-center items-center py-3 border border-slate-200 text-slate-700 font-bold rounded-lg bg-white active:scale-95 transition-transform">
                                    <Search size={20} className="mr-2"/> Search
                                </button>
                             </div>

                             <button 
                                onClick={toggleLanguage} 
                                className="flex items-center space-x-2 text-slate-500 hover:text-[#003366] p-2"
                             >
                                <Globe size={20} /> 
                                <span className="font-medium text-sm">{i18n.language.startsWith('en') ? '한국어 사이트 바로가기 (KR)' : 'Switch to English (EN)'}</span>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
