import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Cpu, Zap, ShieldCheck, TrendingUp, Globe, Users, Award, Smartphone, Server, Car } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);

    const stats = [
        { label: "Annual Revenue", value: "$150M+", icon: <TrendingUp /> },
        { label: "Global Customers", value: "500+", icon: <Users /> },
        { label: "Patents Held", value: "110+", icon: <Award /> },
        { label: "Export Countries", value: "25+", icon: <Globe /> },
    ];

    const industries = [
         { name: "Automotive", icon: <Car size={32} />, desc: "ADAS / Infotainment" },
         { name: "IoT & Mobile", icon: <Smartphone size={32} />, desc: "Wearables / Smart Home" },
         { name: "Industrial", icon: <Server size={32} />, desc: "Factory Automation" },
    ];

    return (
        <>
            {/* 1. Hero Section (Premium Parallax) */}
            <section className="relative h-screen flex items-center overflow-hidden bg-slate-900">
                <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-slate-900/40 z-10"></div>
                    <video 
                        className="w-full h-full object-cover opacity-30 scale-105"
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                        poster="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                    >
                         {/* Placeholder for actual background video - using empty source causes console warning */}
                         {/* <source src="" type="video/mp4" /> */}
                    </video>
                </motion.div>
                
                <div className="container-custom relative z-20 pt-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="max-w-4xl"
                    >
                        <div className="inline-block px-4 py-1 mb-6 border border-sky-500/30 rounded-full bg-sky-500/10 backdrop-blur-sm">
                            <span className="text-sky-400 text-sm font-semibold tracking-wider uppercase">Global Semiconductor Leader</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-none bg-clip-text">
                            Powering the <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 via-blue-400 to-indigo-500">Intelligent World</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl font-light leading-relaxed">
                            {t('home.hero.subtitle')}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-5">
                            <Link to="/products" className="btn-primary group">
                                <span>{t('home.hero.cta_products')}</span>
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/contact" className="btn-outline group">
                                <span>{t('home.hero.cta_contact')}</span>
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 w-full h-24 bg-linear-to-t from-slate-50 to-transparent z-20"></div>
            </section>

            {/* 2. Global Trust Indicators (Floating Bar) */}
            <div className="relative z-30 -mt-20 container-custom">
                <div className="bg-white shadow-2xl rounded-sm p-8 md:p-12 border-b-4 border-sky-500 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center md:items-start space-y-2 border-r last:border-0 border-slate-100 pr-4">
                            <div className="text-sky-500 mb-2 opacity-80 scale-110">{stat.icon}</div>
                            <div className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tighter">{stat.value}</div>
                            <div className="text-sm font-semibold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 3. Technology & Innovation */}
            <section className="section-padding bg-slate-50">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                        <div className="max-w-2xl">
                            <h2 className="text-sm font-bold text-sky-500 uppercase tracking-widest mb-3">Core Technology</h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                                Engineering Excellence <br/> for <span className="text-sky-600">Performance</span>
                            </h3>
                        </div>
                        <p className="md:w-1/3 text-lg text-slate-600 mt-6 md:mt-0 pb-2 border-l-4 border-sky-200 pl-6">
                            We deliver low-power, high-density memory solutions optimized for the era of hyper-connectivity.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Cpu />,
                                title: "Nano-Process Technology",
                                desc: "Advanced node scaling delivering superior performance-to-power ratios for next-gen devices.",
                                bg: "bg-slate-900"
                            },
                            {
                                icon: <Zap />,
                                title: "Ultra Low Power",
                                desc: "Industry-leading power efficiency extending battery life in mobile and IoT applications.",
                                bg: "bg-blue-900"
                            },
                            {
                                icon: <ShieldCheck />,
                                title: "Automotive Grade Reliability",
                                desc: "AEC-Q100 qualified solutions tested for extreme thermal and physical durability.",
                                bg: "bg-sky-600"
                            }
                        ].map((tech, idx) => (
                            <div key={idx} className={`group relative h-96 p-10 flex flex-col justify-between overflow-hidden shadow-2xl transition-all hover:-translate-y-2 ${tech.bg}`}>
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                                <div className="relative z-10 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-6">
                                    {React.cloneElement(tech.icon as React.ReactElement<{size: number}>, { size: 32 })}
                                </div>
                                <div className="relative z-10 mt-auto">
                                    <h4 className="text-2xl font-bold text-white mb-4">{tech.title}</h4>
                                    <p className="text-white/70 leading-relaxed mb-6">
                                        {tech.desc}
                                    </p>
                                    <a href="#" className="inline-flex items-center text-white font-semibold border-b border-white/30 pb-1 hover:border-white transition-colors">
                                        View Tech Specs <ArrowRight className="ml-2 w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* 4. Product Portfolio Snippet */}
             <section className="section-padding bg-white overflow-hidden">
                <div className="container-custom">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Product Portfolio</h2>
                        <div className="w-24 h-1 bg-sky-500 mx-auto"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
                        {[
                            { name: "LPDDR4 / LPDDR4X", id: "lpddr4x", cat: "Mobile Memory", feature: "4266 Mbps Speed" },
                            { name: "eMMC 5.1", id: "emmc-51", cat: "Storage", feature: "Embedded Multimedia Card" },
                            { name: "NAND MCP", id: "nand-mcp", cat: "IoT / Mobile", feature: "Space-saving Package" },
                            { name: "Automotive DRAM", id: "auto-dram", cat: "Automotive", feature: "AEC-Q100 Qualified" }
                        ].map((prod, idx) => (
                            <Link to={`/products/${prod.id}`} key={idx} className="block group">
                                <div className="bg-white p-12 hover:bg-slate-50 transition-colors h-full flex flex-col items-center md:items-start text-center md:text-left">
                                    <div className="text-xs font-bold tracking-widest text-secondary-500 uppercase mb-3">{prod.cat}</div>
                                    <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-primary-600 transition-colors">{prod.name}</h3>
                                    <p className="text-slate-500 text-sm mb-6 grow">{prod.feature}</p>
                                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary-600 group-hover:text-white transition-all ml-auto md:ml-0 mt-auto">
                                        <ArrowRight size={18} />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    
                    <div className="mt-16 text-center">
                         <Link to="/products" className="btn-outline-dark">View All Products</Link>
                    </div>
                </div>
             </section>

             {/* 5. Industries */}
            <section className="py-24 bg-slate-900 text-white border-y border-white/10">
                 <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                             <h2 className="text-4xl font-bold mb-6">Empowering Industries</h2>
                             <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                 From autonomous vehicles to smart connected homes, Jeju Semiconductor is at the heart of the devices that drive our world.
                             </p>
                             <ul className="space-y-6">
                                 {industries.map((ind, i) => (
                                     <li key={i} className="flex items-center space-x-6 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-default">
                                         <div className="p-3 bg-sky-500/20 text-sky-400 rounded-lg">
                                             {ind.icon}
                                         </div>
                                         <div>
                                             <h4 className="text-xl font-bold">{ind.name}</h4>
                                             <p className="text-sm text-slate-500 mt-1">{ind.desc}</p>
                                         </div>
                                     </li>
                                 ))}
                             </ul>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-sky-500/20 blur-3xl rounded-full"></div>
                             <img 
                                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                                alt="Furturistic Tech" 
                                className="relative z-10 rounded-sm shadow-2xl border border-white/10"
                             />
                        </div>
                    </div>
                 </div>
            </section>

             {/* 6. CTA / Inquiry */}
             <section className="py-32 bg-sky-600 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-900/10 -skew-x-12 transform origin-top"></div>
                 <div className="container-custom relative z-10 text-center">
                     <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready for the Next Generation?</h2>
                     <p className="text-xl text-sky-100 mb-12 max-w-2xl mx-auto">
                         Connect with our engineering team to develop customized memory solutions for your specific application needs.
                     </p>
                     <Link to="/contact" className="bg-white text-sky-700 hover:bg-slate-100 px-10 py-5 font-bold text-lg shadow-xl transition-all inline-flex items-center gap-3">
                         Start a Project <ChevronRight size={20} />
                     </Link>
                 </div>
             </section>
        </>
    );
};

// Start a Project icon fix
function ChevronRight({ size = 24 }: { size?: number }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );
}

export default Home;
