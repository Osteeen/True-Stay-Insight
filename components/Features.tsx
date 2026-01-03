
import React from 'react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  const calendlyUrl = "https://calendly.com/austinjohn337/new-meeting";

  const features = [
    { title: "Conversational AI", desc: "Natural, non-linear dialogues that adapt to guest responses like a human agent would.", tag: "Intelligence" },
    { title: "Issue Detection", desc: "Automatically identifies mentions of maintenance, cleanliness, or service failures.", tag: "Monitoring" },
    { title: "Sentiment Analysis", desc: "Goes beyond words to analyze the emotional tone of the guest's feedback.", tag: "Analysis" },
    { title: "Smart Timing", desc: "Calls are placed when guests are most likely to be available based on check-out data.", tag: "Logistics" },
    { title: "Escalation Alerts", desc: "SMS or email notifications sent to managers the second a serious issue is detected.", tag: "Urgency" },
    { title: "Dashboard Reporting", desc: "View feedback by guest type, room category, or specific property areas.", tag: "Reporting" }
  ];

  return (
    <section className="py-32 px-6 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-sm font-bold text-purple-600 uppercase tracking-widest mb-4"
            >
              The Platform
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            >
              Listening at Scale <br />
              <span className="text-gray-400">Without Compromise.</span>
            </motion.h2>
          </div>
          <button 
            onClick={() => window.open(calendlyUrl, '_blank')}
            className="px-8 py-4 bg-white border border-gray-200 rounded-full font-bold text-gray-600 hover:bg-gray-50 transition-all flex items-center gap-2 group"
          >
            Book a discovery call <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-soft hover:shadow-2xl transition-all group cursor-default"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 text-gray-400 text-[10px] font-bold uppercase mb-8 group-hover:bg-purple-50 group-hover:text-purple-600 transition-colors">
                <span className="w-1 h-1 rounded-full bg-current"></span>
                {feature.tag}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed text-lg mb-8">{feature.desc}</p>
              <div className="h-1 w-12 bg-gray-100 group-hover:w-full group-hover:bg-purple-600 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
