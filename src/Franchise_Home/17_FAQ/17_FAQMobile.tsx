import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "./data";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQMobile() {
  const [activeTab, setActiveTab] = useState(faqData.tabs[0].id);
  const [expandedId, setExpandedId] = useState<string | null>(
    faqData.questions.find((q) => q.isExpanded)?.id || null
  );

  const filteredQuestions = faqData.questions.filter(
    (q) => q.category === activeTab
  );

  return (
    <section className="w-full bg-background px-4 py-6">
      <p className="text-[9px] font-bold uppercase tracking-[3px] text-gray-500 mb-3 text-center">
        {faqData.sectionLabel}
      </p>

      <h2 className="text-base font-bold text-white mb-1 text-center">{faqData.title}</h2>
      <p className="text-gray-400 text-[10px] text-center mb-4 px-4">{faqData.subtitle}</p>
      <div className="flex gap-1.5 overflow-x-auto pb-3 scrollbar-hide mb-4">
        {faqData.tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-1.5 rounded-full text-[10px] font-semibold whitespace-nowrap shrink-0 ${
              activeTab === tab.id
                ? "bg-[#D4AF37] text-[#0a1128]"
                : "border border-gray-700 text-gray-400"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="space-y-2">
        {filteredQuestions.map((q) => (
          <div
            key={q.id}
            className="bg-[#0d1a3a] border border-gray-800 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setExpandedId(expandedId === q.id ? null : q.id)}
              className="w-full flex items-center gap-2 p-3 text-left"
            >
              <HelpCircle size={12} className="text-accent shrink-0" />
              <span className="text-white text-[10px] font-medium flex-1">{q.question}</span>
              <motion.div animate={{ rotate: expandedId === q.id ? 180 : 0 }}>
                <ChevronDown size={12} className="text-gray-500" />
              </motion.div>
            </button>

            <AnimatePresence>
              {expandedId === q.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-3 pb-3 pl-7">
                    <p className="text-gray-400 text-[10px] leading-relaxed bg-background p-3 rounded-lg border border-gray-800/50">
                      {q.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <p className="text-gray-600 text-[8px] mt-4 leading-relaxed">{faqData.disclaimer}</p>
    </section>
  );
}
