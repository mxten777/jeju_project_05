import SubPageLayout from '../../components/layout/SubPageLayout';
import { FileText, Download, Calendar } from 'lucide-react';

const irMaterials = [
  { id: 1, date: "2024-03-20", title: "Global Semiconductor Conference Presentation", type: "Presentation" },
  { id: 2, date: "2024-02-15", title: "Q4 2023 Earnings Call Presentation", type: "Presentation" },
  { id: 3, date: "2024-01-10", title: "Corporate Governance Report 2023", type: "Report" },
  { id: 4, date: "2023-11-20", title: "Sustainability Report 2023", type: "Report" },
  { id: 5, date: "2023-10-05", title: "Company Introduction Brochure (Eng)", type: "Brochure" },
];

const IR = () => {
  return (
    <SubPageLayout 
      title="IR Materials" 
      subtitle="Access our latest presentations, reports, and investment resources."
      category="INVESTORS"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {irMaterials.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md transition-shadow group relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
            
            <div>
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div className={`p-3 rounded-lg ${
                  item.type === 'Presentation' ? 'bg-blue-50 text-blue-600' :
                  item.type === 'Report' ? 'bg-green-50 text-green-600' :
                  'bg-orange-50 text-orange-600'
                }`}>
                  <FileText size={24} />
                </div>
                <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-2 py-1 rounded-full">
                  {item.type}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2 min-h-[3.5rem]">
                {item.title}
              </h3>
              
              <div className="flex items-center text-slate-400 text-sm mb-6">
                <Calendar size={14} className="mr-2" />
                {item.date}
              </div>
            </div>

            <button className="w-full py-3 flex items-center justify-center gap-2 border border-slate-200 rounded-lg text-slate-600 font-medium hover:bg-primary-600 hover:text-white hover:border-transparent transition-all group-hover:shadow-lg">
              <Download size={18} />
              Download PDF
            </button>
          </div>
        ))}
      </div>
    </SubPageLayout>
  );
};

export default IR;
