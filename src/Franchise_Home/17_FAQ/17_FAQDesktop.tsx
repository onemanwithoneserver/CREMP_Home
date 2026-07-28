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
    <section className="w-full bg-surface-alt/30 dark:bg-background py-16 px-6 border-t border-border/50">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-12 ">
        
        {/* Left Column - Sticky Context */}
        <div className="w-full lg:w-2/5 flex flex-col relative">
          <div className="sticky top-24">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-black uppercase tracking-[0.2em] text-accent mb-4"
            >
              {faqData.sectionLabel}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 leading-[1.1]"
            >
              {faqData.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-primary/70 text-base leading-relaxed mb-8 max-w-sm"
            >
              {faqData.subtitle}
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 px-6 py-3.5 bg-primary hover:bg-primary/90 dark:bg-accent dark:hover:bg-accent/90 text-white rounded-lg text-sm font-bold shadow-md transition-all hover:-translate-y-0.5 w-fit"
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
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-primary text-white dark:bg-accent dark:text-white shadow-md"
                    : "bg-surface border border-border text-primary/60 hover:border-accent/50 hover:text-accent shadow-sm"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="flex flex-col gap-4">
            <AnimatePresence mode="popLayout">
              {filteredQuestions.map((q, index) => (
                <motion.div
                  key={q.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`bg-surface border rounded-xl overflow-hidden transition-colors duration-300 ${
                    expandedId === q.id ? "border-accent/50 shadow-md" : "border-border shadow-sm hover:border-border-light"
                  }`}
                >
                  <button
                    onClick={() => setExpandedId(expandedId === q.id ? null : q.id)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className={`text-base font-bold pr-8 transition-colors ${expandedId === q.id ? "text-accent" : "text-primary"}`}>
                      {q.question}
                    </span>
                    <motion.div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        expandedId === q.id ? "bg-accent/10 text-accent" : "bg-surface-alt text-primary/40"
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
                          <p className="text-primary/70 text-[15px] leading-relaxed">
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
