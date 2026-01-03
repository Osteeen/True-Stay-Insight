
import React from 'react';
import { motion } from 'framer-motion';

const FinalCTA: React.FC = () => {
  const calendlyUrl = "https://calendly.com/austinjohn337/new-meeting";

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto bg-gray-900 rounded-[3rem] md:rounded-[4rem] p-12 md:p-32 text-center relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)]"
      >
        {/* Animated Background Mesh */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-[50%] -right-[20%] w-[100%] h-[100%] bg-purple-600/20 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-[50%] -left-[20%] w-[100%] h-[100%] bg-indigo-600/10 blur-[120px] rounded-full"
        />
        
        <div className="relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-7xl font-bold text-white mb-10 leading-[1.1]"
          >
            Ready to hear what your <br className="hidden md:block" /> guests won't write?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl mb-16 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Join modern hospitality teams using TSI to protect their reputation and delight guests before they ever hit the review boards.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button 
              onClick={() => window.open(calendlyUrl, '_blank')}
              className="px-12 py-6 bg-purple-600 text-white rounded-full font-bold hover:bg-purple-700 transition-all shadow-2xl shadow-purple-900/60 w-full sm:w-auto hover:scale-105 active:scale-95 text-xl"
            >
              Book a call
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
