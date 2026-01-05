
import React from 'react';
import { motion } from 'framer-motion';

const Story: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative"
        >
          {/* Main Visual: High-end hospitality image */}
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200"
              alt="Luxury Hotel Guest Experience"
              className="w-full h-auto aspect-[4/3] object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
          </div>

          {/* Floating Call Card Decorator */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-6 -right-6 md:right-0 bg-white p-6 rounded-3xl shadow-2xl z-20 border border-gray-50 flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
            </div>
            <div>
              <div className="text-xs font-bold text-purple-600 uppercase tracking-wider">Live Call</div>
              <div className="text-sm font-bold text-gray-900">Guest is responding...</div>
            </div>
          </motion.div>

          <div className="absolute -top-10 -left-10 w-48 h-48 bg-purple-50 rounded-full -z-10 blur-3xl opacity-60"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-50 rounded-full -z-10 blur-3xl opacity-40"></div>
        </motion.div>

        <div className="w-full lg:w-1/2 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-purple-600 uppercase tracking-widest"
          >
            Our Mission
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
          >
            Guest feedback is <br /> fundamentally broken.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-gray-500 leading-relaxed text-lg font-light"
          >
            <p>
              Traditional surveys fail because they arrive too late and feel like homework. Most guests simply don't bother, while those with minor frustrations stay silent until they reach a public review platform.
            </p>
            <p>
              We built Truestayinsight (TSI) to restore the human connection in hospitality. By using natural voice conversations, we make it easy for guests to share their genuine experience without the friction of digital forms.
            </p>
            <div className="pt-4 border-l-4 border-purple-100 pl-6">
              <p className="font-semibold text-gray-900 italic">
                "Because a 2-minute conversation with TSI is worth more than a 20-question survey."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;
