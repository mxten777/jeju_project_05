import React from 'react';
import SubPageLayout from '../../components/layout/SubPageLayout';
import { Award, CheckCircle } from 'lucide-react';

const Certifications = () => {
   return (
      <SubPageLayout 
         title="Certifications" 
         subtitle="Our commitment to quality, environmental responsibility, and international standards."
         category="COMPANY"
      >
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
               { title: "ISO 9001", id: "Quality Management System", date: "Initial: 2002" },
               { title: "ISO 14001", id: "Environmental Management", date: "Initial: 2005" },
               { title: "ISO 45001", id: "Occupational Health & Safety", date: "Initial: 2010" },
               { title: "IATF 16949", id: "Automotive Quality Management", date: "Initial: 2016" },
               { title: "AEC-Q100", id: "Automotive Electronics Council", date: "Qualified Products: All" },
               { title: "Green Partner", id: "Sony Green Partner Certification", date: "Certified" },
            ].map((cert, idx) => (
               <div key={idx} className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-primary-200 transition-all text-center">
                  <div className="w-20 h-20 bg-slate-50 border-4 border-white shadow-inner rounded-full flex items-center justify-center mx-auto mb-6 text-primary-600">
                     <Award size={36} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{cert.title}</h3>
                  <p className="text-slate-500 text-sm mb-4 font-medium">{cert.id}</p>
                  <div className="inline-flex items-center text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full">
                     <CheckCircle size={12} className="mr-1" />
                     {cert.date}
                  </div>
               </div>
            ))}
         </div>
      </SubPageLayout>
   );
};

export default Certifications;
