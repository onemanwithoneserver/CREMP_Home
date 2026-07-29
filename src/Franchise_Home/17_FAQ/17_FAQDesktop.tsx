import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "./data";
import { Plus, Minus } from "lucide-react";

export default function FAQDesktop() {
  const [activeTab, setActiveTab] = useState(faqData.tabs[0].id);
  const [expandedId, setExpandedId] = useState<string | null>(
    faqData.questions.find((q) => q.isExpanded)?.id || null
  );

  const filteredQuestions = faqData.questions.filter(
    (q) => q.category === activeTab
  );

  return (
    <section className="w-full bg-background py-16 px-6">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-12 ">
        
        {/* Left Column - Sticky Context */}
        <div className="w-full lg:w-2/5 flex flex-col relative">
          <div className="sticky top-24">
            <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4 sm:mb-6 w-full"
          >
            <div className="flex items-center gap-1.5">
              <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-[#d4af37] to-transparent"></div>
              <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
            </div>
            <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0b162c] dark:text-white shrink-0 text-center">
              {faqData.sectionLabel}
            </p>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
              <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-[#d4af37] to-transparent"></div>
            </div>
          </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-[1.1]"
            >
              {faqData.title}
            </motion.h2>
            
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] text-white rounded-[4px] text-sm font-bold shadow-[0_2px_8px_rgba(212,175,55,0.3)] hover:shadow-[0_4px_12px_rgba(212,175,55,0.5)] transition-all hover-lift w-fit"
            >
              {(() => { const Icon = faqData.ctaButton.icon; return <Icon size={18} />; })()}
              {faqData.ctaButton.label}
            </motion.button>
          </div>
        </div>

        {/* Right Column - Tabs & Accordion */}
        <div className="w-full lg:w-2/3 flex flex-col">
          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            {faqData.tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setExpandedId(null);
                }}
                className={`px-5 py-2.5 rounded-[4px] text-sm font-bold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-sm"
                    : "bg-white dark:bg-surface border border-border text-gray-600 dark:text-gray-400 hover:border-primary/50 hover:text-primary dark:hover:text-accent shadow-sm"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <AnimatePresence mode="popLayout">
              {filteredQuestions.map((q, index) => (
                <motion.div
                  key={q.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`bg-white dark:bg-surface border-[0.5px] rounded-lg overflow-hidden transition-colors duration-300 ${
                    expandedId === q.id ? "border-primary-[5px] dark:border-accent shadow-sm" : "border-border shadow-sm hover:border-border-light"
                  }`}
                >
                  <button
                    onClick={() => setExpandedId(expandedId === q.id ? null : q.id)}
                    className="w-full flex items-center justify-between p-4 text-left"
                  >
                    <span className={`text-base font-bold pr-8 transition-colors ${expandedId === q.id ? "text-primary dark:text-accent" : "text-gray-900 dark:text-white"}`}>
                      {q.question}
                    </span>
                    <motion.div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                        expandedId === q.id ? "bg-gradient-to-br from-[#bf953f] to-[#b38728] text-white shadow-sm shadow-[#d4af37]/30" : "bg-gray-100 dark:bg-gray-800 text-gray-500"
                      }`}
                    >
                      {expandedId === q.id ? (
                        <Minus size={18} strokeWidth={2.5} />
                      ) : (
                        <Plus size={18} strokeWidth={2.5} />
                      )}
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {expandedId === q.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2">
                          <p className="text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed">
                            {q.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>


        </div>

      </div>
    </section>
  );
}


