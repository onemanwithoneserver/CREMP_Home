import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { faqData } from "./data";
import { SectionHeader } from "../components/SectionHeader";

export default function FAQMobile() {
  const [expandedId, setExpandedId] = useState<string | null>(
    faqData.questions.find((q) => q.isExpanded)?.id || null,
  );

  return (
    <section className="w-full px-4 py-10 relative overflow-hidden  bg-white dark:bg-gray-900">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -right-[10%] w-[300px] h-[300px] bg-[#d4af37]/10 rounded-full blur-[80px] animate-pulse-soft" />
      </div>

      <div className="relative z-10 pb-10">
        <div className="flex flex-col mb-2 text-center items-center">
          <SectionHeader
            overline={faqData.sectionLabel}
            title={faqData.title}
            align="center"
          />
        </div>

        <div className="flex flex-col gap-3 mt-4">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-3"
            >
              {faqData.questions.map((q, index) => (
                <motion.div
                  key={q.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`group bg-white rounded-xl overflow-hidden transition-all duration-300 relative ${
                    expandedId === q.id
                      ? "shadow-[0_12px_30px_rgba(0,0,0,0.08)] border-transparent"
                      : "shadow-sm border border-gray-100"
                  }`}
                >
                  <div
                    className={`w-[3px] h-full absolute left-0 top-0 z-20 bg-gradient-to-b from-[#bf953f] to-[#b38728] transition-opacity duration-300 ${expandedId === q.id ? "opacity-100" : "opacity-0"}`}
                  />

                  <button
                    onClick={() =>
                      setExpandedId(expandedId === q.id ? null : q.id)
                    }
                    className="w-full flex items-center justify-between p-4 text-left bg-white"
                  >
                    <span
                      className={`text-[15px] font-semibold pr-4 transition-colors leading-snug ${expandedId === q.id ? "text-[#d4af37]" : "text-[#0a1128]"}`}
                    >
                      {q.question}
                    </span>
                    <motion.div
                      animate={{ rotate: expandedId === q.id ? 180 : 0 }}
                      transition={{ duration: 0.4, type: "spring" }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        expandedId === q.id
                          ? "bg-[#0a1128] text-white"
                          : "bg-gray-50 text-gray-400"
                      }`}
                    >
                      {expandedId === q.id ? (
                        <Minus size={16} strokeWidth={2.5} />
                      ) : (
                        <Plus size={16} strokeWidth={2.5} />
                      )}
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {expandedId === q.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                        className="overflow-hidden bg-gray-50/50"
                      >
                        <div className="px-4 pb-5 pt-2">
                          <p className="text-gray-600 text-[14px] leading-relaxed pl-3 border-l-2 border-gray-200">
                            {q.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
