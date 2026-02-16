import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Zap, 
  Layers, 
  ArrowRight,
  ShieldCheck,
  Microscope,
  Server,
  Activity
} from 'lucide-react';
import SubPageLayout from '../../components/layout/SubPageLayout';

const Technology = () => {
  return (
    <SubPageLayout 
      title="Technology Innovation" 
      subtitle="Leading the future of semiconductor solutions through continuous R&D and advanced process technology."
      category="TECHNOLOGY"
      bgImage="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
    >
      {/* 1. Core Competency Overview */}
      <section className="mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Core Competencies</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Jeju Semiconductor specializes in low-power, high-density memory solutions optimized for the mobile and IoT era.
            Our proprietary design technology ensures superior performance and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap size={40} />,
              title: "Ultra Low Power",
              desc: "Industry-leading power efficiency maximizing battery life for portable devices through advanced circuit design."
            },
            {
              icon: <Layers size={40} />,
              title: "High Density Packaging",
              desc: "State-of-the-art Multi-Chip Package (MCP) technology integrating diverse memory solutions in minimal form factors."
            },
            {
              icon: <ShieldCheck size={40} />,
              title: "Extreme Reliability",
              desc: "Automotive-grade quality assurance (AEC-Q100) guaranteeing stability in harsh environments."
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-primary-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 2. Process Technology Visualization */}
      <section className="mb-24 bg-slate-900 text-white rounded-3xl overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent" />
        
        <div className="relative z-10 p-12 md:p-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 text-primary-400 font-bold tracking-wider uppercase mb-4">
              <Microscope size={20} />
              <span>Nano-Process Technology</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Precision Engineering at the Nanoscale
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Our advanced lithography and etching processes enable higher integration density and faster switching speeds. 
              We are pushing the boundaries of Moore's Law with innovative 3D stacking techniques.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "2x nm Low Power DRAM Process",
                "Advanced 3D NAND Stacking",
                "TSV (Through-Silicon Via) Integration"
              ].map((tech, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-200">
                  <div className="w-2 h-2 rounded-full bg-primary-500" />
                  {tech}
                </li>
              ))}
            </ul>

            <Link to="/technology/core" className="inline-flex items-center gap-2 text-white font-semibold border-b border-white/30 pb-1 hover:border-white transition-all">
              Learn about our Process <ArrowRight size={16} />
            </Link>
          </div>

          <div className="relative h-full min-h-[400px] flex items-center justify-center">
             {/* Abstract Chip Visualization */}
             <div className="relative w-64 h-64 md:w-80 md:h-80">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-primary-500/30 border-dashed"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 rounded-full border border-white/10"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-40 h-40 bg-linear-to-br from-primary-600 to-indigo-600 rounded-xl shadow-[0_0_50px_rgba(59,130,246,0.5)] flex items-center justify-center relative overflow-hidden backdrop-blur-md border border-white/20">
                      <Cpu size={64} className="text-white relative z-10" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                   </div>
                </div>
                
                {/* Orbital dots */}
                <motion.div 
                  className="absolute top-0 left-1/2 w-4 h-4 bg-primary-400 rounded-full blur-sm"
                  animate={{ rotate: 360 }}
                  style={{ originY: "160px", originX: "-50%" }} // Approximate radius
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
             </div>
          </div>
        </div>
      </section>

      {/* 3. Tech Applications */}
      <section className="mb-24">
         <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Powering the Connected World</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Mobile", icon: <Layers />, desc: "High-performance LPDDR for smartphones." },
              { title: "Automotive", icon: <Activity />, desc: "Reliable memory for ADAS & Infotainment." },
              { title: "IoT", icon: <Server />, desc: "Low-power solutions for connected devices." },
              { title: "AI Edge", icon: <Cpu />, desc: "High-bandwidth memory for AI processing." },
            ].map((app, idx) => (
               <div key={idx} className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:bg-white hover:shadow-lg hover:border-primary-200 transition-all text-center group cursor-pointer">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-slate-400 group-hover:text-primary-600 group-hover:scale-110 transition-all">
                    {app.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{app.title}</h3>
                  <p className="text-sm text-slate-500">{app.desc}</p>
               </div>
            ))}
         </div>
      </section>

      {/* 4. R&D Chart / Stats */}
      <section className="bg-linear-to-br from-slate-50 to-white rounded-3xl p-12 border border-slate-200 text-center">
         <h2 className="text-3xl font-bold text-slate-900 mb-6">Continuous R&D Investment</h2>
         <p className="text-slate-600 max-w-2xl mx-auto mb-12">
            Jeju Semiconductor reinvests over 15% of annual revenue into Research & Development to maintain our technological leadership.
         </p>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6">
               <div className="text-5xl font-bold text-primary-600 mb-2">1,200+</div>
               <div className="text-slate-500 font-medium">Global Patents</div>
            </div>
            <div className="p-6 border-lborder-r border-slate-200">
               <div className="text-5xl font-bold text-primary-600 mb-2">15%</div>
               <div className="text-slate-500 font-medium">Revenue to R&D</div>
            </div>
            <div className="p-6">
               <div className="text-5xl font-bold text-primary-600 mb-2">300+</div>
               <div className="text-slate-500 font-medium">R&D Engineers</div>
            </div>
         </div>
      </section>
    </SubPageLayout>
  );
};

export default Technology;
