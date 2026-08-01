import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { 
  HelpCircle, 
  Minus, 
  Plus, 
  Search, 
  Sparkles, 
  CheckCircle2
} from "lucide-react";
import { faqData } from "./data";
import { SectionHeader } from "../components/SectionHeader";
import { FranchiseAnimation } from "./components/FranchiseAnimation";

export default function FAQDesktop() {
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
    <section className="w-full py-16 px-6 relative bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[15%] right-[5%] w-[500px] h-[500px] bg-[#d4af37]/5 dark:bg-[#d4af37]/10 rounded-full blur-[140px] animate-pulse-soft" />
        <div
          className="absolute bottom-[15%] left-[5%] w-[500px] h-[500px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[140px] animate-pulse-soft"
          style={{ animationDelay: "2.5s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12 relative z-10">
        <div className="w-full lg:w-[440px] shrink-0 sticky top-24 self-start flex flex-col gap-6">
          <div>
            <SectionHeader
              overline={faqData.sectionLabel}
              title={faqData.title}
              align="left"
            />
          </div>

          <FranchiseAnimation />
        </div>

        <div className="flex-1 w-full min-w-0 flex flex-col gap-4">
          <div className="relative w-full">
            <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search frequently asked questions (e.g. investment, setup, royalty, territory)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-14 py-3 bg-gray-50/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 rounded-[4px] text-xs font-medium text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#d4af37] dark:focus:border-[#d4af37] transition-colors shadow-sm"
            />
            <AnimatePresence>
              {searchQuery && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[11px] font-semibold text-gray-400 hover:text-gray-700 dark:hover:text-white"
                >
                  Clear
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          <motion.div layout className="flex flex-col gap-4">
            <AnimatePresence mode="popLayout">
              {filteredQuestions.length === 0 ? (
                <motion.div
                  key="empty-state"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center py-16 bg-gray-50 dark:bg-gray-800/40 border border-dashed border-gray-200 dark:border-gray-700 rounded-[4px]"
                >
                  <HelpCircle size={36} className="mx-auto text-gray-400 mb-2 opacity-50" />
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">No matching questions found.</p>
                  <p className="text-xs text-gray-400 mt-1">Try searching for keywords like investment, royalty, territory or training.</p>
                  <button
                    onClick={() => setSearchQuery("")}
                    className="mt-4 px-4 py-1.5 bg-[#0a1128] dark:bg-[#d4af37] text-white dark:text-gray-950 text-xs font-bold rounded-[4px] transition-transform active:scale-95"
                  >
                    Show All Questions
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
                        "group rounded-[4px] transition-colors duration-300 relative border overflow-hidden",
                        isExpanded
                          ? "bg-white dark:bg-[#0a1128] shadow-lg border-[#d4af37]/50 dark:border-[#d4af37]/40 ring-1 ring-[#d4af37]/20"
                          : "bg-white dark:bg-gray-800/80 shadow-sm border-gray-200 dark:border-gray-700/80 hover:border-gray-300 dark:hover:border-gray-600"
                      )}
                    >
                      <div
                        className={clsx(
                          "w-1.5 h-full absolute left-0 top-0 z-20 transition-opacity duration-300 bg-gradient-to-b from-[#d4af37] to-[#b38728]",
                          isExpanded ? "opacity-100" : "opacity-0"
                        )}
                      />

                      <button
                        onClick={() => setExpandedId(isExpanded ? null : q.id)}
                        className="w-full flex items-start justify-between p-5 text-left relative z-10 gap-4"
                      >
                        <div className="flex flex-col gap-1 pr-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#d4af37] flex items-center gap-1">
                            <Sparkles size={10} />
                            {q.categoryLabel}
                          </span>
                          <h4 className={clsx(
                            "text-base font-bold transition-colors duration-200 leading-snug",
                            isExpanded
                              ? "text-gray-950 dark:text-white"
                              : "text-gray-800 dark:text-gray-200 group-hover:text-gray-950 dark:group-hover:text-white"
                          )}>
                            {q.question}
                          </h4>
                        </div>

                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className={clsx(
                            "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 shadow-sm mt-0.5",
                            isExpanded
                              ? "bg-[#0a1128] text-white dark:bg-[#d4af37] dark:text-gray-950"
                              : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300 group-hover:bg-[#d4af37]/20 group-hover:text-[#d4af37]"
                          )}
                        >
                          {isExpanded ? <Minus size={15} strokeWidth={2.5} /> : <Plus size={15} strokeWidth={2.5} />}
                        </motion.div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                            className="overflow-hidden border-t border-gray-100 dark:border-gray-800 bg-gray-50/60 dark:bg-gray-900/60"
                          >
                            <div className="p-5 pt-4 flex flex-col gap-4">
                              {q.highlight && (
                                <motion.div 
                                  initial={{ x: -10, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: 0.1, duration: 0.3 }}
                                  className="p-3 bg-[#d4af37]/10 border-l-2 border-[#d4af37] rounded-r-[2px] text-xs font-semibold text-gray-900 dark:text-[#d4af37]"
                                >
                                  {q.highlight}
                                </motion.div>
                              )}

                              <motion.p 
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.15, duration: 0.3 }}
                                className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed"
                              >
                                {q.answer}
                              </motion.p>

                              {q.points && q.points.length > 0 && (
                                <motion.div 
                                  initial={{ y: 10, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  transition={{ delay: 0.2, duration: 0.3 }}
                                  className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2"
                                >
                                  {q.points.map((point, pIdx) => (
                                    <div
                                      key={pIdx}
                                      className="flex items-center gap-2 p-2 rounded-[2px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-[11px] font-medium text-gray-700 dark:text-gray-300"
                                    >
                                      <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                                      <span>{point}</span>
                                    </div>
                                  ))}
                                </motion.div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}