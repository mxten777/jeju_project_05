import React from 'react';
import SubPageLayout from '../../components/layout/SubPageLayout';
import { BarChart, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Financial = () => {
    
  const annualData = [
    { year: 2023, revenue: 520, opProfit: 65, netProfit: 52 },
    { year: 2022, revenue: 480, opProfit: 58, netProfit: 45 },
    { year: 2021, revenue: 410, opProfit: 42, netProfit: 32 },
    { year: 2020, revenue: 350, opProfit: 30, netProfit: 22 },
  ];

  return (
    <SubPageLayout 
      title="Financial Information" 
      subtitle="Comprehensive overview of our financial performance and stability."
      category="INVESTORS"
    >
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-sm border border-slate-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
              <BarChart size={24} />
            </div>
            <h3 className="text-slate-500 font-medium">Revenue (2023)</h3>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-slate-800">$520M</span>
            <span className="text-green-600 text-sm font-semibold flex items-center">
              <ArrowUpRight size={14} /> +8.3%
            </span>
          </div>
        </motion.div>

        <motion.div 
          className="bg-white p-6 rounded-xl shadow-sm border border-slate-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-green-50 rounded-lg text-green-600">
              <BarChart size={24} />
            </div>
            <h3 className="text-slate-500 font-medium">Operating Profit</h3>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-slate-800">$65M</span>
            <span className="text-green-600 text-sm font-semibold flex items-center">
              <ArrowUpRight size={14} /> +12.1%
            </span>
          </div>
        </motion.div>

        <motion.div 
          className="bg-white p-6 rounded-xl shadow-sm border border-slate-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-purple-50 rounded-lg text-purple-600">
              <BarChart size={24} />
            </div>
            <h3 className="text-slate-500 font-medium">Net Profit</h3>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-slate-800">$52M</span>
            <span className="text-green-600 text-sm font-semibold flex items-center">
              <ArrowUpRight size={14} /> +15.5%
            </span>
          </div>
        </motion.div>
      </div>

      {/* Financial Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-12">
        <div className="p-6 border-b border-slate-200">
          <h3 className="text-lg font-bold text-slate-800">Annual Performance</h3>
          <p className="text-slate-500 text-sm">Unit: USD Million</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-slate-600">
            <thead className="bg-slate-50 text-slate-700 uppercase">
              <tr>
                <th scope="col" className="px-6 py-4 font-semibold">Year</th>
                <th scope="col" className="px-6 py-4 font-semibold">Revenue</th>
                <th scope="col" className="px-6 py-4 font-semibold">Operating Profit</th>
                <th scope="col" className="px-6 py-4 font-semibold">Net Profit</th>
                <th scope="col" className="px-6 py-4 font-semibold">OP Margin</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {annualData.map((row, index) => (
                <tr key={index} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900">{row.year}</td>
                  <td className="px-6 py-4">{row.revenue}</td>
                  <td className="px-6 py-4">{row.opProfit}</td>
                  <td className="px-6 py-4">{row.netProfit}</td>
                  <td className="px-6 py-4 text-blue-600 font-medium">
                    {((row.opProfit / row.revenue) * 100).toFixed(1)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SubPageLayout>
  );
};

export default Financial;
