import React from 'react';
import SubPageLayout from '../components/layout/SubPageLayout';
import { MapPin, Phone, Mail, Globe, Clock, Building, ArrowRight } from 'lucide-react';

const Location = () => {
   const locations = [
      { 
        name: "제주 본사 (Jeju Headquarters)", 
        role: "R&D / Test / Management", 
        address: "제주특별자치도 제주시 첨단로 8길 11-10 (63309)", 
        phone: "+82-64-740-1700", 
        email: "jeju_hq@jeju-semi.com",
        image: "https://images.unsplash.com/photo-1596707323533-0c48206d7e00?q=80&w=2070&auto=format&fit=crop"
      },
      { 
        name: "판교 연구소 (Pangyo R&D Center)", 
        role: "Design / Sales / Marketing", 
        address: "경기도 성남시 분당구 판교로 255 (삼평동)", 
        phone: "+82-31-123-4567", 
        email: "sales_pangyo@jeju-semi.com",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
      },
      { 
        name: "미국 지사 (USA Office - San Jose)", 
        role: "North America Sales", 
        address: "San Jose, CA, United States", 
        phone: "+1-408-123-4567", 
        email: "sales_usa@jeju-semi.com",
        image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop"
      },
      { 
        name: "중국 지사 (China Office - Shenzhen)", 
        role: "China Sales Support", 
        address: "Shenzhen, Guangdong, China", 
        phone: "+86-755-1234-5678", 
        email: "sales_cn@jeju-semi.com",
        image: "https://images.unsplash.com/photo-1506161726002-c841103f1207?q=80&w=2028&auto=format&fit=crop"
      },
      { 
        name: "대만 지사 (Taiwan Office - Taipei)", 
        role: "Taiwan Sales Support", 
        address: "Neihu District, Taipei City, Taiwan", 
        phone: "+886-2-1234-5678", 
        email: "sales_tw@jeju-semi.com",
        image: "https://images.unsplash.com/photo-1542456013233-a3359d9f5820?q=80&w=2070&auto=format&fit=crop"
      },
   ];

   return (
      <SubPageLayout 
         title="오시는 길" 
         subtitle="제주반도체의 글로벌 네트워크와 사업장을 안내해 드립니다."
         category="CONTACT"
         bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
      >
         <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid lg:grid-cols-2 gap-12">
              {locations.map((loc, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-shadow group flex flex-col h-full">
                  <div className="h-64 overflow-hidden relative shrink-0">
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors z-10" />
                    <img src={loc.image} alt={loc.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#003366] text-xs font-bold rounded-full shadow-xs">
                        {loc.role}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2 break-keep">
                       <Building className="text-[#00AEEF] w-6 h-6 shrink-0" />
                       {loc.name}
                    </h3>
                    
                    <div className="space-y-4 text-slate-600 mb-8 flex-grow">
                       <div className="flex items-start gap-4">
                          <MapPin className="w-5 h-5 text-slate-400 mt-1 shrink-0" />
                          <p className="leading-relaxed break-keep">{loc.address}</p>
                       </div>
                       <div className="flex items-center gap-4">
                          <Phone className="w-5 h-5 text-slate-400 shrink-0" />
                          <p>{loc.phone}</p>
                       </div>
                       <div className="flex items-center gap-4">
                          <Mail className="w-5 h-5 text-slate-400 shrink-0" />
                          <a href={`mailto:${loc.email}`} className="text-[#003366] hover:text-[#00ABEF] transition-colors">{loc.email}</a>
                       </div>
                    </div>

                    <div className="pt-6 border-t border-slate-100 flex justify-between items-center mt-auto">
                       <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                          <Clock className="w-4 h-4" />
                          09:00 - 18:00 (Local Time)
                       </div>
                       <button className="text-[#003366] text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                          지도 보기 <ArrowRight className="w-4 h-4" />
                       </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Global Map Placeholder or Call to Action */}
            <div className="mt-16 bg-[#003366] rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-slate-900 opacity-50 z-0" />
                <div className="relative z-10">
                   <h2 className="text-3xl font-bold mb-4 break-keep">공식 대리점이나 파트너를 찾고 계신가요?</h2>
                   <p className="text-slate-300 mb-8 max-w-2xl mx-auto break-keep">
                      전 세계 20여 개국에 제주반도체의 공식 대리점이 위치해 있습니다. 가장 가까운 파트너를 찾아 개발 가속화를 위한 지원을 받아보세요.
                   </p>
                   <button className="px-8 py-3 bg-[#00AEEF] hover:bg-[#009bd5] text-white font-bold rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95">
                      공식 대리점 찾기
                   </button>
                </div>
            </div>
         </div>
      </SubPageLayout>
   );
};

export default Location;
