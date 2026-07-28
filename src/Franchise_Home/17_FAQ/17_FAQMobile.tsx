import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "./data";
import { Plus, Minus } from "lucide-react";

export default function FAQMobile() {
  const [activeTab, setActiveTab] = useState(faqData.tabs[0].id);
  const [expandedId, setExpandedId] = useState<string | null>(
    faqData.questions.find((q) => q.isExpanded)?.id || null
  );

  const filteredQuestions = faqData.questions.filter(
    (q) => q.category === activeTab
  );

  return (
    <section className="w-full bg-background px-4 py-12">
      
      {/* Context Header */}
      <div className="flex flex-col mb-8 text-center items-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-primary mb-3"
        >
          {faqData.sectionLabel}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-black text-gray-900 dark:text-white mb-4 leading-tight"
        >
          {faqData.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 dark:text-gray-400 text-[13px] leading-relaxed mb-6 px-2"
        >
          {faqData.subtitle}
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] text-white rounded-[4px] text-sm font-bold shadow-[0_2px_8px_rgba(212,175,55,0.3)] hover:shadow-[0_4px_12px_rgba(212,175,55,0.5)] transition-all hover-lift"
        >
          {(() => { const Icon = faqData.ctaButton.icon; return <Icon size={16} />; })()}
          {faqData.ctaButton.label}
        </motion.button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide mb-4 -mx-4 px-4 snap-x">
        {faqData.tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              setExpandedId(null);
            }}
            className={`px-5 py-2.5 rounded-[4px] text-xs font-bold transition-all duration-300 whitespace-nowrap snap-start shrink-0 ${
              activeTab === tab.id
                ? "bg-primary text-white shadow-sm"
                : "bg-white dark:bg-surface border border-border text-gray-600 dark:text-gray-400 hover:border-primary/50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div className="flex flex-col gap-3">
        <AnimatePresence mode="popLayout">
          {filteredQuestions.map((q, index) => (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`bg-white dark:bg-surface border rounded-[4px] overflow-hidden transition-colors duration-300 ${
                expandedId === q.id ? "border-primary dark:border-accent shadow-sm" : "border-border shadow-sm"
              }`}
            >
              <button
                onClick={() => setExpandedId(expandedId === q.id ? null : q.id)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <span className={`text-[13px] font-bold pr-4 transition-colors leading-snug ${expandedId === q.id ? "text-primary dark:text-accent" : "text-gray-900 dark:text-white"}`}>
                  {q.question}
                </span>
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${
                    expandedId === q.id ? "bg-gradient-to-br from-[#bf953f] to-[#b38728] text-white shadow-sm shadow-[#d4af37]/30" : "bg-gray-100 dark:bg-gray-800 text-gray-500"
                  }`}
                >
                  {expandedId === q.id ? (
                    <Minus size={16} strokeWidth={2.5} />
                  ) : (
                    <Plus size={16} strokeWidth={2.5} />
                  )}
                </div>
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
                    <div className="px-4 pb-4 pt-1">
                      <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
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


    </section>
  );
}
