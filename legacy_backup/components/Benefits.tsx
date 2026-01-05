
import React from 'react';
import { motion } from 'framer-motion';

const Benefits: React.FC = () => {
  const benefits = [
    {
      title: "Higher Response Rates",
      desc: "Reach up to 60% of guests after checkout. Voice feels personal, making guests more likely to share their thoughts than through email links.",
      icon: "📈"
    },
    {
      title: "Real Conversations",
      desc: "Go beyond '1-5 stars'. Capture nuance, emotion, and context that surveys miss through natural, open-ended voice dialogue.",
      icon: "💬"
    },
    {
      title: "Private Issue Resolution",
      desc: "Identify service gaps immediately. Escalations are sent to your team in real-time, allowing you to resolve issues before they become public.",
      icon: "🛡️"
    }
  ];

  return (
    <section className="py-32 px-6 bg-gray-50/50" id="benefits">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-purple-600 uppercase tracking-widest mb-4"
          >
            Efficiency Redefined
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900"
          >
            Voice-First Hospitality Intelligence
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((benefit, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-soft hover:shadow-2xl transition-all border border-gray-100 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-500 leading-relaxed text-lg">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
