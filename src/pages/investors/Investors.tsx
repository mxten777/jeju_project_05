import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Globe, 
  Award, 
  FileText, 
  Download, 
  ArrowRight,
  PieChart
} from 'lucide-react';
import SubPageLayout from '../../components/layout/SubPageLayout';

const Investors = () => {
  const financialHighlights = [
    { title: "Annual Revenue", value: "$420M", growth: "+15.2% YoY", icon: TrendingUp, color: "text-blue-600" },
    { title: "Operating Profit", value: "$48M", growth: "+12.5% YoY", icon: PieChart, color: "text-green-600" },
    { title: "Global Customers", value: "250+", growth: "Across 30 Countries", icon: Globe, color: "text-purple-600" },
    { title: "Patents Held", value: "1,200+", growth: "Tech Leadership", icon: Award, color: "text-orange-600" }
  ];

  const quickLinks = [
    { title: "Disclosure", desc: "Real-time corporate disclosures and filings.", link: "/investors/disclosure", icon: FileText },
    { title: "Financial Info", desc: "Quarterly reports and financial statements.", link: "/investors/financial", icon: PieChart },
    { title: "IR Materials", desc: "Download presentations and IR fact sheets.", link: "/investors/ir-materials", icon: Download }
  ];

  const announcements = [
    { date: "2024.03.15", title: "Notice of the 24th Annual General Meeting of Shareholders", type: "Notice" },
    { date: "2024.02.10", title: "2023 4Q Earnings Release Conference Call", type: "IR Event" },
    { date: "2024.01.25", title: "Supply Contract Announcement with Global Automotive OEM", type: "Disclosure" }
  ];

  return (
    <SubPageLayout 
      title="Investor Relations" 
      subtitle="Building sustainable value through transparent management and continuous innovation."
      category="INVESTORS"
    >
      {/* 1. Key Financial Highlights */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-slate-800 mb-8 border-l-4 border-primary-600 pl-4">
          Key Financial Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {financialHighlights.map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-lg bg-slate-50 ${item.color}`}>
                  <item.icon size={24} />
                </div>
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  {item.growth}
                </span>
              </div>
              <h3 className="text-slate-500 text-sm font-medium mb-1">{item.title}</h3>
              <p className="text-3xl font-bold text-slate-900">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 2. IR Quick Links */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quickLinks.map((link, index) => (
            <Link to={link.link} key={index} className="group">
              <div className="h-full bg-slate-900 text-white p-8 rounded-2xl relative overflow-hidden transition-transform transform group-hover:-translate-y-2">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <link.icon size={120} />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-primary-400">
                    <link.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-400 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    {link.desc}
                  </p>
                  <div className="flex items-center text-primary-400 font-medium text-sm">
                    View More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Latest Announcements */}
      <section>
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl font-bold text-slate-800 border-l-4 border-primary-600 pl-4">
            Latest Announcements
          </h2>
          <Link to="/news" className="text-slate-500 hover:text-primary-600 text-sm font-medium flex items-center transition-colors">
            View All News <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 divide-y divide-slate-100">
          {announcements.map((item, index) => (
            <div key={index} className="p-6 flex flex-col md:flex-row md:items-center justify-between hover:bg-slate-50 transition-colors group cursor-pointer">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-primary-600 bg-primary-50 px-2 py-1 rounded">
                    {item.type}
                  </span>
                  <span className="text-slate-400 text-sm">{item.date}</span>
                </div>
                <h3 className="text-lg font-medium text-slate-800 group-hover:text-primary-700 transition-colors">
                  {item.title}
                </h3>
              </div>
              <div className="mt-4 md:mt-0 md:ml-6">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary-600 group-hover:text-white transition-all">
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SubPageLayout>
  );
};

export default Investors;
