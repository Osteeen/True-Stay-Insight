
import React from 'react';
import { motion } from 'framer-motion';

const Comparison: React.FC = () => {
  const metrics = [
    { label: "Feedback Response Rate", manual: "3 - 8%", ai: "45 - 60%" },
    { label: "Staff Time Required", manual: "40+ hours / mo", ai: "Zero" },
    { label: "Data Depth", manual: "Fixed Star Ratings", ai: "Natural Conversation" },
    { label: "Consistency", manual: "Erratic / Subjective", ai: "100% Reliable" },
    { label: "Resolution Speed", manual: "2 - 5 Days", ai: "Real-time Alerts" },
  ];

  return (
    <section className="py-32 px-6 bg-gray-50/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-gray-900"
          >
            Manual Surveys vs Truestayinsight
          </motion.h2>
        </div>
        
        {/* Mobile View: Card-based comparison */}
        <div className="md:hidden space-y-6">
          {metrics.map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-50">{m.label}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Legacy</div>
                  <div className="text-gray-500 font-medium">{m.manual}</div>
                </div>
                <div className="border-l border-purple-100 pl-4">
                  <div className="text-[10px] font-bold text-purple-400 uppercase tracking-widest mb-1">Truestayinsight</div>
                  <div className="text-purple-600 font-black text-lg">{m.ai}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop View: Clean Table */}
        <div className="hidden md:block relative">
          <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50">
                  <th className="p-8 text-xs font-bold text-gray-400 uppercase tracking-widest">Metric</th>
                  <th className="p-8 text-xs font-bold text-gray-900 uppercase tracking-widest">Legacy Manual & Email</th>
                  <th className="p-8 text-xs font-bold text-purple-600 uppercase tracking-widest bg-purple-50/30">Truestayinsight Advantage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {metrics.map((m, i) => (
                  <tr key={i} className="hover:bg-gray-50/30 transition-colors group">
                    <td className="p-8 font-bold text-gray-700 text-lg">{m.label}</td>
                    <td className="p-8 text-gray-500 text-lg">{m.manual}</td>
                    <td className="p-8 font-black text-purple-600 text-xl bg-purple-50/10 group-hover:bg-purple-50/40 transition-colors">
                      {m.ai}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400 font-medium italic">Transform your post-stay listening strategy today.</p>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
