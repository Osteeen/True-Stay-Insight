
import React from 'react';
import { motion } from 'framer-motion';

const Dashboard: React.FC = () => {
  const calendlyUrl = "https://calendly.com/austinjohn337/new-meeting";

  return (
    <section className="py-32 px-6 bg-white overflow-hidden" id="platform">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
            >
              Command Center for <br className="hidden md:block" /> Guest Experience
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 text-lg font-light leading-relaxed"
            >
              Real-time visibility into every post-stay interaction. Track trends, manage escalations, and recover guests before they leave a review.
            </motion.p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            onClick={() => window.open(calendlyUrl, '_blank')}
            className="flex items-center gap-2 text-purple-600 font-bold hover:text-purple-700 transition-colors px-8 py-4 rounded-full bg-purple-50 border border-purple-100 w-full md:w-auto justify-center"
          >
            Book a discovery call <span className="text-xl">↗</span>
          </motion.button>
        </div>

        {/* Dashboard Frame */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#f8f9fc] rounded-[2rem] md:rounded-[2.5rem] p-4 md:p-8 shadow-2xl border border-gray-100 overflow-hidden"
        >
          {/* Browser Header Decorator */}
          <div className="flex items-center gap-2 mb-8 px-4 opacity-40">
            <div className="w-3 h-3 rounded-full bg-rose-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
            <div className="ml-4 h-3 w-32 md:w-48 bg-gray-200 rounded-full"></div>
          </div>

          {/* Stats Grid - Optimized for mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
            <StatCard label="Response Rate" value="42.8%" trend="+12% vs email" color="emerald" />
            <StatCard label="Avg Sentiment" value="8.9" trend="out of 10.0" color="purple" />
            <div className="sm:col-span-2 lg:col-span-1">
              <StatCard label="Escalations" value="3" trend="Needs Attention" color="rose" isUrgent />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Interactions Table - Scrollable on mobile */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-900">Recent Interactions</h3>
                <button className="text-sm font-bold text-purple-600 hover:underline">View All</button>
              </div>
              <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
                <table className="w-full text-left min-w-[500px]">
                  <thead>
                    <tr className="text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-50">
                      <th className="pb-4">Guest</th>
                      <th className="pb-4">Status</th>
                      <th className="pb-4">Sentiment</th>
                      <th className="pb-4">Issues</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <TableRow name="Elena R." sub="Ste 404" status="Completed" sentiment={9.2} issues="None" />
                    <TableRow name="Marcus T." sub="Rm 202" status="Escalated" sentiment={4.5} issues="AC Noise" isEscalated />
                    <TableRow name="Sarah L." sub="Rm 105" status="Completed" sentiment={8.8} issues="None" />
                    <TableRow name="David B." sub="Ste 301" status="Scheduled" sentiment={0} issues="None" isScheduled />
                  </tbody>
                </table>
              </div>
            </div>

            {/* Sidebar Charts - Responsive stacking */}
            <div className="space-y-6 md:space-y-8">
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-sm font-bold text-gray-400 uppercase mb-6">Sentiment Trend</h3>
                <div className="h-24 relative flex items-end gap-1">
                  {[40, 60, 45, 80, 70, 90, 85].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      className="flex-1 purple-gradient opacity-80 rounded-t-sm"
                    />
                  ))}
                </div>
                <div className="flex justify-between text-[10px] font-bold text-gray-300 mt-2 uppercase">
                  <span>Mon</span><span>Wed</span><span>Fri</span><span>Sun</span>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-sm font-bold text-gray-400 uppercase mb-6">Top Issues (7d)</h3>
                <div className="space-y-4">
                  <IssueProgress label="Room Cleanliness" value={12} color="amber" />
                  <IssueProgress label="Check-in Wait" value={8} color="rose" />
                  <IssueProgress label="AC / Temp" value={5} color="indigo" />
                </div>
              </div>

              <div className="bg-purple-600 rounded-3xl p-6 text-white shadow-xl shadow-purple-200">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">✨</span>
                  <span className="text-xs font-bold uppercase tracking-wider">AI Recommendation</span>
                </div>
                <p className="text-sm font-medium leading-relaxed opacity-90">
                  "Housekeeping complaints peak on Sundays. Consider overlapping shift schedules during checkout hours."
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const StatCard = ({ label, value, trend, color, isUrgent = false }: any) => (
  <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden group">
    <div className={`absolute left-0 top-0 bottom-0 w-1 ${isUrgent ? 'bg-rose-500' : 'bg-gray-100 group-hover:bg-purple-500 transition-colors'}`} />
    <div className="text-xs font-bold text-gray-400 uppercase mb-2">{label}</div>
    <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
    <div className={`text-xs font-bold ${color === 'rose' ? 'text-rose-500' : 'text-emerald-500'}`}>{trend}</div>
  </div>
);

const TableRow = ({ name, sub, status, sentiment, issues, isEscalated = false, isScheduled = false }: any) => (
  <tr className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
    <td className="py-5">
      <div className="font-bold text-gray-900 whitespace-nowrap">{name}</div>
      <div className="text-xs text-gray-400">{sub}</div>
    </td>
    <td className="py-5">
      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase whitespace-nowrap ${
        isEscalated ? 'bg-rose-50 text-rose-600' : 
        isScheduled ? 'bg-gray-100 text-gray-400' : 
        'bg-emerald-50 text-emerald-600'
      }`}>
        {isEscalated ? '⚠ ' : ''}{status}
      </span>
    </td>
    <td className="py-5">
      <div className="flex items-center gap-2">
        <div className="w-12 h-1.5 bg-gray-100 rounded-full overflow-hidden shrink-0">
          <div className={`h-full ${sentiment > 7 ? 'bg-emerald-500' : 'bg-rose-400'}`} style={{ width: `${sentiment * 10}%` }}></div>
        </div>
        <span className="text-xs font-bold text-gray-700">{sentiment > 0 ? sentiment : '-'}</span>
      </div>
    </td>
    <td className="py-5">
      <span className={`text-xs font-medium whitespace-nowrap ${isEscalated ? 'text-rose-600' : 'text-gray-400'}`}>
        {issues}
      </span>
    </td>
  </tr>
);

const IssueProgress = ({ label, value, color }: any) => (
  <div className="space-y-2">
    <div className="flex justify-between text-xs font-bold">
      <span className="text-gray-700">{label}</span>
      <span className="text-gray-400">{value}%</span>
    </div>
    <div className="w-full h-1 bg-gray-50 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        transition={{ duration: 1 }}
        className={`h-full bg-purple-500`} 
      />
    </div>
  </div>
);

export default Dashboard;
