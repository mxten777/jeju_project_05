import SubPageLayout from '../../components/layout/SubPageLayout';
import { Download, Calendar } from 'lucide-react';

const disclosures = [
  { id: 1, date: "2024-03-15", title: "[Notice] Notice of the 24th Annual General Meeting of Shareholders", type: "Notice" },
  { id: 2, date: "2024-02-10", title: "[Earnings] 2023 4Q Earnings Release Conference Call", type: "IR Event" },
  { id: 3, date: "2024-01-25", title: "[Disclosure] Supply Contract Announcement with Global Automotive OEM", type: "Disclosure" },
  { id: 4, date: "2023-12-15", title: "[Disclosure] Decision on Paid-in Capital Increase", type: "Disclosure" },
  { id: 5, date: "2023-11-08", title: "[Earnings] 2023 3Q Earnings Release", type: "IR Event" },
];

const Disclosure = () => {
  return (
    <SubPageLayout 
      title="Disclosures" 
      subtitle="Official corporate announcements and regulatory filings."
      category="INVESTORS"
    >
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-slate-50 border-b border-slate-200 text-sm font-semibold text-slate-600">
          <div className="col-span-2 text-center">Date</div>
          <div className="col-span-2 text-center">Type</div>
          <div className="col-span-6">Subject</div>
          <div className="col-span-2 text-center">Download</div>
        </div>
        
        <div className="divide-y divide-slate-100">
          {disclosures.map((item) => (
            <div key={item.id} className="md:grid grid-cols-12 gap-4 p-4 items-center hover:bg-slate-50 transition-colors group">
              <div className="col-span-2 text-center text-slate-500 text-sm mb-2 md:mb-0 flex items-center justify-center gap-2 md:block">
                <Calendar size={14} className="md:hidden" />
                {item.date}
              </div>
              <div className="col-span-2 text-center mb-2 md:mb-0">
                <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                  item.type === 'Notice' ? 'bg-blue-100 text-blue-700' :
                  item.type === 'IR Event' ? 'bg-green-100 text-green-700' :
                  'bg-orange-100 text-orange-700'
                }`}>
                  {item.type}
                </span>
              </div>
              <div className="col-span-6 font-medium text-slate-800 group-hover:text-primary-600 transition-colors mb-4 md:mb-0">
                {item.title}
              </div>
              <div className="col-span-2 flex justify-center">
                <button className="flex items-center gap-2 px-4 py-2 text-sm text-slate-600 hover:text-primary-600 hover:bg-slate-100 rounded-lg transition-all border border-slate-200 hover:border-primary-200">
                  <Download size={16} />
                  <span className="hidden md:inline">Download</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SubPageLayout>
  );
};

export default Disclosure;
