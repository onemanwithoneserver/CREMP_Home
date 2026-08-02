import { useState, useMemo } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import clsx from "clsx";
import { 
  HelpCircle, 
  Minus, 
  Plus,
} from "lucide-react";
import { faqData } from "./data";
import { SectionHeader } from "../components/SectionHeader";
import { BookACall } from "./components/BookACall";

const pulseGlow: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};


export default function FAQMobile() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedId, setExpandedId] = useState<string | null>(faqData.questions[0].id);

  const filteredQuestions = useMemo(() => {
    if (!searchQuery.trim()) return faqData.questions;
    const q = searchQuery.toLowerCase();
    return faqData.questions.filter((item) => {
      return (
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q)
      );
    });
  }, [searchQuery]);

  return (
    <section className="w-full px-4 py-12 pb-20 relative overflow-hidden rounded-[8px] bg-white/40 ">
      <motion.div
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute top-[10%] -right-[10%] w-[300px] h-[300px] rounded-full bg-[#D4AF37]/10 blur-[100px] dark:bg-[#D4AF37]/15"
      />
      <motion.div
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute bottom-[10%] -left-[10%] w-[250px] h-[250px] rounded-full bg-[#D4AF37]/10 blur-[100px] dark:bg-[#D4AF37]/10"
      />

      <div className="relative z-10 flex flex-col gap-4">
        <div>
          <SectionHeader
            overline={faqData.sectionLabel}
            title={faqData.title}
            align="center"
          />
        </div>

        <motion.div layout className="flex flex-col gap-3">
          <AnimatePresence mode="popLayout">
            {filteredQuestions.length === 0 ? (
              <motion.div
                key="empty-state"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-12 bg-white/70 dark:bg-[#0b1b42]/70 backdrop-blur-xl rounded-[4px] border border-dashed border-gray-200/60 dark:border-[#d4af37]/20 p-4"
              >
                <HelpCircle size={28} className="mx-auto text-gray-400 mb-1 opacity-50" />
                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">No questions found</p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-3 px-3 py-1 bg-[#0b1b42] dark:bg-[#d4af37] text-white dark:text-gray-950 text-xs font-bold rounded-[2px] transition-transform active:scale-95"
                >
                  Reset Search
                </button>
              </motion.div>
            ) : (
              filteredQuestions.map((q, index) => {
                const isExpanded = expandedId === q.id;

                return (
                  <motion.div
                    layout
                    key={q.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3), ease: [0.04, 0.62, 0.23, 0.98] }}
                    className={clsx(
                      "rounded-[4px] border transition-all relative overflow-hidden backdrop-blur-xl",
                      isExpanded
                        ? "bg-white/90 dark:bg-[#0b1b42]/90 shadow-md border-[#d4af37]/50"
                        : "bg-white/70 dark:bg-[#0b1b42]/70 border-gray-200/60 dark:border-[#d4af37]/20"
                    )}
                  >
                    <div
                      className={clsx(
                        "w-1 h-full absolute left-0 top-0 z-20 bg-gradient-to-b from-[#d4af37] to-[#b38728] transition-opacity duration-300",
                        isExpanded ? "opacity-100" : "opacity-0"
                      )}
                    />

                    <button
                      onClick={() => setExpandedId(isExpanded ? null : q.id)}
                      className="w-full flex items-start justify-between p-4 text-left gap-3 relative z-10"
                    >
                      <div className="flex flex-col gap-0.5 pr-2">
                        <h4 className={clsx(
                          "text-xs font-bold leading-snug transition-colors duration-200",
                          isExpanded ? "text-gray-950 dark:text-white" : "text-gray-800 dark:text-gray-200"
                        )}>
                          {q.question}
                        </h4>
                      </div>

                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className={clsx(
                          "w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors mt-0.5",
                          isExpanded
                            ? "bg-[#0b1b42] text-white dark:bg-[#d4af37] dark:text-gray-950"
                            : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300"
                        )}
                      >
                        {isExpanded ? <Minus size={14} strokeWidth={2.5} /> : <Plus size={14} strokeWidth={2.5} />}
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                          className="overflow-hidden border-t border-gray-200/50 dark:border-white/10 bg-white/50 dark:bg-black/20 p-4 flex flex-col gap-3"
                        >

                          <motion.p
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.15, duration: 0.3 }}
                            className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed"
                          >
                            {q.answer}
                          </motion.p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            )}
          </AnimatePresence>
        </motion.div>

          <BookACall />

      </div>
    </section>
  );
}