
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const calendlyUrl = "https://calendly.com/austinjohn337/new-meeting";

  return (
    <section className="pt-44 pb-32 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-xs font-bold mb-8 border border-purple-100 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
            </span>
            NEXT-GEN HOSPITALITY FEEDBACK
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]"
        >
          Capture the feedback <br />
          <span className="text-transparent bg-clip-text purple-gradient" style={{ WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>guests won't write.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Truestayinsight automatically calls your guests after checkout to capture natural feedback, detect issues early, and prevent negative public reviews.
        </motion.p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Sample Call Card moved to first position */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="flex items-center gap-4 bg-white/80 backdrop-blur-sm border border-gray-200 p-3 pr-8 rounded-2xl shadow-xl shadow-gray-200/40 cursor-pointer hover:border-purple-300 transition-all group order-2 md:order-1"
          >
            <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center relative group-hover:bg-emerald-100 transition-colors">
              <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-emerald-600 border-b-[8px] border-b-transparent ml-1"></div>
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-tight">Sample Call</div>
              <div className="text-sm font-semibold text-gray-900 leading-tight">Guest: "Room service was..."</div>
            </div>
            <div className="flex gap-0.5 items-end h-4 ml-2">
              <div className="w-1 bg-emerald-300 rounded-full h-2 animate-bounce"></div>
              <div className="w-1 bg-emerald-400 rounded-full h-4 animate-bounce delay-75"></div>
              <div className="w-1 bg-emerald-500 rounded-full h-3 animate-bounce delay-150"></div>
            </div>
          </motion.div>

          {/* Book a call button moved to second position */}
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            onClick={() => window.open(calendlyUrl, '_blank')}
            className="px-12 py-5 bg-purple-600 text-white rounded-full font-bold hover:bg-purple-700 transition-all shadow-2xl shadow-purple-300/50 w-full md:w-auto hover:scale-105 active:scale-95 text-lg order-1 md:order-2"
          >
            Book a call
          </motion.button>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[10%] w-24 h-24 bg-purple-100/50 rounded-3xl blur-sm -z-0"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 left-[5%] w-32 h-32 bg-indigo-50/50 rounded-full blur-md -z-0"
      />
    </section>
  );
};

export default Hero;
