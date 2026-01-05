
import React from 'react';
import { motion } from 'framer-motion';

const Process: React.FC = () => {
  const steps = [
    { id: '01', title: 'Guest Checks Out', desc: 'A seamless integration with your PMS triggers the feedback process the moment a guest departs.' },
    { id: '02', title: 'AI Calls Automatically', desc: 'Our AI reaches out at the optimal time with a warm, conversational tone to ask about their stay.' },
    { id: '03', title: 'Insights Appear', desc: 'Feedback is analyzed and categorized. Serious issues are escalated immediately to your dashboard.' }
  ];

  return (
    <section className="py-32 px-6 bg-white overflow-hidden" id="how-it-works">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-purple-600 uppercase tracking-widest mb-4"
          >
            Our Process
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900"
          >
            Insights in Motion
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          {/* Animated background line */}
          <div className="hidden md:block absolute top-[45px] left-[15%] right-[15%] h-[1px] bg-gray-100 -z-10 overflow-hidden">
            <motion.div
              initial={{ x: '-100%' }}
              whileInView={{ x: '100%' }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-1/2 h-full bg-gradient-to-r from-transparent via-purple-300 to-transparent"
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.3 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white border border-gray-100 shadow-xl mb-8 group-hover:border-purple-200 transition-all relative">
                <div className="absolute inset-2 rounded-full border border-dashed border-purple-200 group-hover:rotate-180 transition-transform duration-1000"></div>
                <span className="text-2xl font-black text-purple-600">{step.id}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed text-lg px-4">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
