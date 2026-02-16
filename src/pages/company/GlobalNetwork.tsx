import SubPageLayout from '../../components/layout/SubPageLayout';
import { MapPin, Phone, Mail } from 'lucide-react';

const GlobalNetwork = () => {
   const locations = [
      { name: "Jeju Headquarters", type: "R&D / Management", address: "11-10, Cheomdan-ro 8-gil, Jeju-si, Jeju-do, Korea", phone: "+82-64-740-1700", geo: { lat: 33.4547, lng: 126.5651 } },
      { name: "Pangyo R&D Center", type: "R&D / Sales", address: "Sampyeong-dong, Bundang-gu, Seongnam-si, Gyeonggi-do, Korea", phone: "+82-31-123-4567", geo: { lat: 37.3948, lng: 127.1111 } },
      { name: "USA (San Jose)", type: "Sales Office", address: "San Jose, CA, United States", phone: "+1-408-123-4567", geo: { lat: 37.3382, lng: -121.8863 } },
      { name: "China (Shenzhen)", type: "Sales Office", address: "Shenzhen, Guangdong, China", phone: "+86-755-1234-5678", geo: { lat: 22.5431, lng: 114.0579 } },
      { name: "Taiwan (Taipei)", type: "Sales Office", address: "Neihu District, Taipei City, Taiwan", phone: "+886-2-1234-5678", geo: { lat: 25.0330, lng: 121.5654 } },
   ];

   return (
      <SubPageLayout 
         title="Global Network" 
         subtitle="Strategically located to serve our global partners efficiently."
         category="COMPANY"
      >
         <div className="grid md:grid-cols-2 gap-12">
            {/* List */}
            <div className="space-y-6">
               {locations.map((loc, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-primary-200 transition-colors w-full">
                     <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                           <MapPin size={18} className="text-primary-600" />
                           {loc.name}
                        </h3>
                        <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded">
                           {loc.type}
                        </span>
                     </div>
                     <p className="text-slate-500 text-sm mb-4 pl-7">{loc.address}</p>
                     
                     <div className="pl-7 flex gap-4 text-xs font-medium text-slate-400">
                        <span className="flex items-center gap-1 hover:text-slate-600 cursor-pointer">
                           <Phone size={14} /> {loc.phone}
                        </span>
                        <span className="flex items-center gap-1 hover:text-slate-600 cursor-pointer">
                           <Mail size={14} /> Contact
                        </span>
                     </div>
                  </div>
               ))}
            </div>
            
            {/* Map Placeholder */}
            <div className="h-full min-h-[500px] bg-slate-100 rounded-2xl overflow-hidden relative border border-slate-200">
               {/* Simplified World Map Graphic */}
               <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')] bg-contain bg-no-repeat bg-center opacity-30"></div>
               
               {/* Location Dots (Approximate positioning for visual effect) */}
               {locations.map((loc, i) => (
                  <div 
                     key={i} 
                     className="absolute w-4 h-4 bg-primary-600 border-2 border-white rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2 hover:scale-150 transition-transform cursor-pointer group"
                     style={{ 
                        left: i === 0 || i === 1 ? '78%' : i === 2 ? '15%' : i === 3 ? '75%' : '80%', 
                        top: i === 0 ? '38%' : i === 1 ? '37%' : i === 2 ? '38%' : i === 3 ? '45%' : '42%' 
                     }}
                  >
                     <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {loc.name}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </SubPageLayout>
   );
};

export default GlobalNetwork;
