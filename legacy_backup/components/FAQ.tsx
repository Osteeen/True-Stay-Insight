
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FAQItem = {
  q: string;
  a: string;
};

type FAQCategory = {
  title: string;
  items: FAQItem[];
};

const FAQ: React.FC = () => {
  const categories: FAQCategory[] = [
    {
      title: "General",
      items: [
        {
          q: "What is TrueStay Insight?",
          a: "TrueStay Insight is an AI powered guest feedback platform that automatically calls guests after checkout, listens to their experience in a natural conversation, and turns those conversations into structured insights for hotel teams."
        },
        {
          q: "How is this different from surveys or review links?",
          a: "Surveys are easy to ignore. Calls feel personal. TrueStay Insight captures real voice feedback, follow up questions, tone, and context that surveys miss, allowing hotels to detect issues early before they reach public review platforms."
        },
        {
          q: "Do guests know they are speaking with AI?",
          a: "Yes. The AI clearly introduces itself as a virtual assistant calling on behalf of the hotel. There is no deception."
        },
        {
          q: "When are guests contacted?",
          a: "Calls are placed after checkout at a configurable delay. Hotels can control timing based on their operations and guest preferences."
        },
        {
          q: "What happens if a guest does not answer?",
          a: "If the guest does not answer, the system automatically retries based on predefined rules. Call attempts are capped to avoid disturbing guests."
        },
        {
          q: "Does this replace my existing feedback system?",
          a: "It can, but it does not have to. Many hotels run TrueStay Insight alongside surveys and reviews to capture deeper insights while maintaining existing workflows."
        },
        {
          q: "How quickly can we go live?",
          a: "Most hotels go live within 3 to 5 business days after onboarding."
        }
      ]
    },
    {
      title: "Technical",
      items: [
        {
          q: "What systems does TrueStay Insight integrate with?",
          a: "TrueStay Insight integrates with Hotel PMS systems, Spreadsheets and data feeds, Airtable, and Custom APIs. If you can export guest checkout data, TrueStay Insight can work with it."
        },
        {
          q: "What guest data is required to start?",
          a: "At minimum, we need the Guest name, Phone number, and Checkout date and time. Additional fields like room number, guest category, or stay type can be included for deeper analysis."
        },
        {
          q: "Can this work if we use Google Sheets or another system instead of Airtable?",
          a: "Yes. Guest data can be ingested automatically from Google Sheets or other systems and synced into the platform."
        },
        {
          q: "How many calls can be made at once?",
          a: "Call concurrency is configurable. Hotels can limit how many calls happen simultaneously to match their operational preferences."
        },
        {
          q: "What happens if the guest hangs up or says nothing?",
          a: "The system detects call outcomes and handles them gracefully. If no meaningful interaction occurs, the call is logged and no false insights are generated."
        }
      ]
    },
    {
      title: "Billing",
      items: [
        {
          q: "How is pricing structured?",
          a: "Pricing is based on room count and call volume. This ensures predictable costs that scale with your property."
        },
        {
          q: "Is there a setup fee?",
          a: "Yes. There is a one time setup fee of $1,000, which covers system configuration, integration setup, AI voice customization, and workflow tuning."
        },
        {
          q: "Are there long term contracts?",
          a: "No long term contracts are required. Plans are billed monthly."
        },
        {
          q: "What happens if we exceed our call limit?",
          a: "You will never be charged unexpectedly. Overage handling is discussed and approved before activation."
        },
        {
          q: "Do you offer custom pricing?",
          a: "Yes. Multi property hotels and custom workflows are priced individually. Please contact sales for tailored pricing."
        }
      ]
    },
    {
      title: "Security & Privacy",
      items: [
        {
          q: "Is guest data secure?",
          a: "Yes. All data is encrypted in transit and at rest using industry standard security practices."
        },
        {
          q: "Do you store call recordings?",
          a: "Call recordings can be enabled or disabled based on hotel policy. Transcripts and insights are stored securely."
        },
        {
          q: "Who owns the guest data?",
          a: "You do. TrueStay Insight does not sell, share, or reuse guest data for any purpose outside your account."
        },
        {
          q: "Is this compliant with privacy regulations?",
          a: "TrueStay Insight is built with privacy by design and supports compliance with data protection regulations such as GDPR."
        },
        {
          q: "Can guests opt out?",
          a: "Yes. Guests can opt out at any time, and future calls will be automatically suppressed."
        }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState(0);
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-32 px-6 bg-gray-50/50" id="faq">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-purple-600 uppercase tracking-widest mb-4"
          >
            Support
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Category Tabs */}
          <div className="w-full md:w-1/4 space-y-2">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveCategory(i);
                  setOpenIdx(null);
                }}
                className={`w-full text-left px-6 py-4 rounded-2xl font-bold transition-all ${activeCategory === i
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-200'
                    : 'text-gray-500 hover:bg-white hover:text-gray-900'
                  }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <div className="w-full md:w-3/4 space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {categories[activeCategory].items.map((item, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <button
                      onClick={() => setOpenIdx(openIdx === i ? null : i)}
                      className="w-full p-6 text-left flex justify-between items-center group"
                    >
                      <span className="font-bold text-gray-900 text-lg group-hover:text-purple-600 transition-colors leading-tight">{item.q}</span>
                      <motion.span
                        animate={{ rotate: openIdx === i ? 45 : 0 }}
                        className={`text-2xl font-light ml-4 shrink-0 ${openIdx === i ? 'text-purple-600' : 'text-gray-300'}`}
                      >
                        +
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {openIdx === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <div className="px-6 pb-6 text-gray-500 leading-relaxed text-lg border-t border-gray-50 pt-4">
                            {item.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
