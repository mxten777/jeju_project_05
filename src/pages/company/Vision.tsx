import React from 'react';
import SubPageLayout from '../../components/layout/SubPageLayout';
import { Target, Users, ShieldCheck } from 'lucide-react';

const Vision = () => {
  return (
    <SubPageLayout 
      title="Vision & Mission" 
      subtitle="Connecting the world through trusted technology and sustainable growth."
      category="COMPANY"
    >
      <section className="mb-24">
         <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
               <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                  <h3 className="text-xl font-bold text-primary-600 mb-2 uppercase tracking-wide">Our Mission</h3>
                  <p className="text-2xl font-bold text-slate-800 leading-tight">
                     Pioneering Low-Power Memory Solutions for a Connected World
                  </p>
               </div>
               
               <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                  <h3 className="text-xl font-bold text-primary-600 mb-2 uppercase tracking-wide">Our Vision</h3>
                  <p className="text-2xl font-bold text-slate-800 leading-tight">
                     Global No.1 Fabless Memory Provider
                  </p>
               </div>
            </div>
            
            <div className="relative h-full min-h-100">
               <div className="absolute inset-0 bg-primary-100 rounded-2xl opacity-20 transform rotate-3"></div>
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center rounded-2xl shadow-xl"></div>
            </div>
         </div>
      </section>

      <section className="bg-slate-900 text-white p-12 md:p-20 rounded-3xl text-center relative overflow-hidden">
         <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-16">Core Values</h2>
            
            <div className="grid md:grid-cols-3 gap-12">
               {[
                 { icon: <Target />, title: "Innovation", desc: "Constant technological advancement." },
                 { icon: <ShieldCheck />, title: "Reliability", desc: "Uncompromising quality assurance." },
                 { icon: <Users />, title: "Partnership", desc: "Shared growth with customers." },
               ].map((val, idx) => (
                 <div key={idx} className="group">
                    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-all transform group-hover:scale-110">
                       {React.cloneElement(val.icon as React.ReactElement<{size: number}>, { size: 36 })}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                    <p className="text-slate-400 text-sm">{val.desc}</p>
                 </div>
               ))}
            </div>
         </div>
         
         {/* Background Effect */}
         <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary-600/20 rounded-full blur-3xl"></div>
         <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary-600/20 rounded-full blur-3xl"></div>
      </section>
    </SubPageLayout>
  );
};

export default Vision;
