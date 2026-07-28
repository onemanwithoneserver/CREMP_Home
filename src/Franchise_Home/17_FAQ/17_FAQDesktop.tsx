import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "./data";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQDesktop() {
  const [activeTab, setActiveTab] = useState(faqData.tabs[0].id);
  const [expandedId, setExpandedId] = useState<string | null>(
    faqData.questions.find((q) => q.isExpanded)?.id || null
  );

  const filteredQuestions = faqData.questions.filter(
    (q) => q.category === activeTab
  );

  return (
    <section className="w-full bg-[#0a1128] px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] font-bold uppercase tracking-[3px] text-gray-500 mb-6 text-center"
        >
          {faqData.sectionLabel}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-start justify-between mb-8"
        >
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{faqData.title}</h2>
            <p className="text-gray-400 text-sm max-w-lg">{faqData.subtitle}</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#D4AF37] text-[#0a1128] text-sm font-bold rounded-lg"
          >
            {(() => { const Icon = faqData.ctaButton.icon; return <Icon size={16} />; })()}
            {faqData.ctaButton.label}
          </motion.button>
        </motion.div>
        <div className="flex items-center gap-2 mb-6">
          {faqData.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === tab.id
                  ? "bg-[#D4AF37] text-[#0a1128]"
                  : "border border-gray-700 text-gray-400 hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="space-y-3">
          {filteredQuestions.map((q) => (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#0d1a3a] border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-all"
            >
              <button
                onClick={() => setExpandedId(expandedId === q.id ? null : q.id)}
                className="w-full flex items-center gap-3 p-4 text-left"
              >
                <HelpCircle size={16} className="text-[#D4AF37] shrink-0" />
                <span className="text-white text-sm font-medium flex-1">{q.question}</span>
                <motion.div
                  animate={{ rotate: expandedId === q.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={16} className="text-gray-500" />
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedId === q.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 pl-10">
                      <p className="text-gray-400 text-sm leading-relaxed bg-[#0a1128] p-4 rounded-lg border border-gray-800/50">
                        {q.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-600 text-[10px] mt-6 leading-relaxed"
        >
          {faqData.disclaimer}
        </motion.p>
      </div>
    </section>
  );
}
