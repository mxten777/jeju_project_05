import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Globe, Target, ArrowRight } from 'lucide-react';
import SubPageLayout from '../../components/layout/SubPageLayout';

const About = () => {
  return (
    <SubPageLayout 
      title="Company Overview" 
      subtitle="Pioneering the future of memory solutions with reliability and innovation."
      category="COMPANY"
      bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    >
      {/* 1. CEO Message / Introduction */}
      <section className="mb-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6 relative">
            Leading the Low-Power Memory Market
            <div className="absolute -bottom-2 left-0 w-20 h-1 bg-primary-600 rounded-full"></div>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Since our establishment in 2000, Jeju Semiconductor has dedicated itself to developing high-performance, low-power memory solutions essential for the mobile and IoT era.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            We are committed to providing competitive products through continuous R&D and quality management, growing alongside our customers as a trusted global partner.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mt-8 p-6 bg-slate-50 rounded-xl border border-slate-100">
             <div>
                <div className="text-4xl font-bold text-primary-600 mb-1">2000</div>
                <div className="text-sm text-slate-500 font-medium">Founded</div>
             </div>
             <div className="w-px bg-slate-200 hidden sm:block"></div>
             <div>
                <div className="text-4xl font-bold text-primary-600 mb-1">KOSDAQ</div>
                <div className="text-sm text-slate-500 font-medium">Listed Company</div>
             </div>
             <div className="w-px bg-slate-200 hidden sm:block"></div>
             <div>
                <div className="text-4xl font-bold text-primary-600 mb-1">25+</div>
                <div className="text-sm text-slate-500 font-medium">Years of Excellence</div>
             </div>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10">
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop" alt="Jeju Semiconductor HQ" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-10 -right-10 w-full h-full border-2 border-primary-100 rounded-2xl z-0 hidden md:block"></div>
        </div>
      </section>

      {/* 2. Business Areas */}
      <section className="mb-24">
        <div className="text-center mb-16">
           <h2 className="text-3xl font-bold text-slate-900 mb-4">Business Areas</h2>
           <p className="text-slate-500 max-w-2xl mx-auto">
             We provide optimized memory solutions across various industries, focusing on reliability and efficiency.
           </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {[
             { title: "Mobile Solution", icon: <Target />, desc: "Ultra-low power DRAM & NAND for smartphones and wearables." },
             { title: "Automotive", icon: <Award />, desc: "AEC-Q100 qualified high-reliability memory for vehicles." },
             { title: "IoT / Consumer", icon: <Globe />, desc: "Small form-factor MCP for diverse IoT applications." }
           ].map((item, idx) => (
             <div key={idx} className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-6">
                   {React.cloneElement(item.icon as React.ReactElement<{size: number}>, { size: 32 })}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-6">
                  {item.desc}
                </p>
                <Link to="/products" className="text-primary-600 font-medium text-sm flex items-center hover:underline">
                  View Products <ArrowRight size={16} className="ml-1" />
                </Link>
             </div>
           ))}
        </div>
      </section>

      {/* 3. Global Network Preview */}
      <section className="bg-slate-900 text-white rounded-3xl p-12 md:p-20 relative overflow-hidden text-center">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
         
         <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Global Network</h2>
            <p className="text-slate-300 text-lg mb-10">
               With headquarters in Jeju and sales offices worldwide, we deliver excellence to customers across the globe.
            </p>
            <Link to="/company/global" className="inline-flex items-center px-8 py-4 bg-primary-600 rounded-full font-bold hover:bg-primary-500 transition-colors shadow-lg shadow-primary-500/30">
               View Global Presence <Globe size={20} className="ml-2" />
            </Link>
         </div>
      </section>
    </SubPageLayout>
  );
};

export default About;
