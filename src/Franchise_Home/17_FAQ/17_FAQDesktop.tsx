import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { faqData } from "./data";
import { SectionHeader } from "../components/SectionHeader";

export default function FAQDesktop() {
  const [expandedId, setExpandedId] = useState<string | null>(
    faqData.questions.find((q) => q.isExpanded)?.id || null,
  );

  return (
    <section className="w-full bg-gradient-to-tr from-[#fafafa] via-white to-[#f4f4f9] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 bg-[length:200%_200%] animate-gradient-shift transition-colors duration-300 py-12 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-[120px] animate-pulse-soft" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse-soft" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row pb-10 gap-8 relative z-10">
        <div className="w-full lg:w-1/3 flex flex-col relative">
          <div className="sticky top-32">
            <SectionHeader
              overline={faqData.sectionLabel}
              title={faqData.title}
              align="left"
            />
          </div>
        </div>

        <div className="w-full lg:w-2/3 flex flex-col">
          <div className="flex flex-col gap-4">
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-4"
              >
                {faqData.questions.map((q, index) => (
                  <motion.div
                    key={q.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`group bg-white rounded-2xl overflow-hidden transition-all duration-300 relative ${
                      expandedId === q.id
                        ? "shadow-[0_20px_40px_rgba(0,0,0,0.08)] border-transparent"
                        : "shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200"
                    }`}
                  >
                    <div
                      className={`w-1 h-full absolute left-0 top-0 z-20 bg-gradient-to-b from-[#bf953f] to-[#b38728] transition-opacity duration-300 ${expandedId === q.id ? "opacity-100" : "opacity-0"}`}
                    />

                    <button
                      onClick={() =>
                        setExpandedId(expandedId === q.id ? null : q.id)
                      }
                      className="w-full flex items-start justify-between p-4 text-left relative z-10 bg-white"
                    >
                      <span
                        className={`text-lg font-semibold pr-8 transition-colors duration-300 ${expandedId === q.id ? "text-[#d4af37]" : "text-[#0a1128] group-hover:text-[#0a1128]"}`}
                      >
                        {q.question}
                      </span>
                      <motion.div
                        animate={{ rotate: expandedId === q.id ? 180 : 0 }}
                        transition={{ duration: 0.4, type: "spring" }}
                        className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                          expandedId === q.id
                            ? "bg-[#0a1128] text-white"
                            : "bg-gray-50 text-gray-400 group-hover:bg-[#d4af37]/10 group-hover:text-[#d4af37]"
                        }`}
                      >
                        {expandedId === q.id ? (
                          <Minus size={20} strokeWidth={2.5} />
                        ) : (
                          <Plus size={20} strokeWidth={2.5} />
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
                            duration: 0.4,
                            ease: [0.04, 0.62, 0.23, 0.98],
                          }}
                          className="overflow-hidden bg-gray-50/50"
                        >
                          <div className="px-6 pb-8 pt-2">
                            <p className="text-gray-600 text-base leading-relaxed pl-4 border-l-2 border-gray-200">
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
      </div>
    </section>
  );
}
