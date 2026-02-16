import SubPageLayout from '../../components/layout/SubPageLayout';
import { motion } from 'framer-motion';

const History = () => {
  const events = [
    { year: "2024", title: "Global Expansion", desc: "Opened new R&D center in Pangyo" },
    { year: "2022", title: "Automotive Growth", desc: "Achieved AEC-Q100 certification for LPDDR4X" },
    { year: "2018", title: "Market Leadership", desc: "Ranked #1 in low-power memory market share" },
    { year: "2010", title: "Tech Innovation", desc: "Developed world's first 4Gb LPDDR2" },
    { year: "2005", title: "IPO Listing", desc: "Listed on KOSDAQ (080220)" },
    { year: "2000", title: "Foundation", desc: "Established Jeju Semiconductor" },
  ];

  return (
    <SubPageLayout 
      title="History" 
      subtitle="A journey of continuous challenge and innovation."
      category="COMPANY"
    >
      <div className="relative border-l-2 border-slate-200 ml-4 md:ml-20 pl-8 md:pl-16 space-y-16 py-10">
        {events.map((event, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="relative"
          >
            <div className="absolute -left-[41px] md:-left-[73px] top-1 w-6 h-6 bg-white border-4 border-primary-600 rounded-full shadow-md z-10 transition-transform hover:scale-125"></div>
            
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
               <span className="text-3xl font-bold text-primary-600 w-24 tabular-nums">{event.year}</span>
               <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{event.title}</h3>
                  <p className="text-slate-500">{event.desc}</p>
               </div>
            </div>
            
            {/* Visual connector for last item */}
            {idx !== events.length - 1 && (
               <div className="absolute left-[5px] top-[28px] w-px h-full bg-slate-200 hidden"></div>
            )}
          </motion.div>
        ))}
        
        {/* Bottom fade line */}
        <div className="absolute bottom-0 -left-[2px] w-1 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </div>
    </SubPageLayout>
  );
};

export default History;
