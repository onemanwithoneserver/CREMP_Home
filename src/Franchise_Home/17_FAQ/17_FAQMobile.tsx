import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { faqData } from "./data";
import { SectionHeader } from "../components/SectionHeader";

export default function FAQMobile() {
    const [activeTab, setActiveTab] = useState(faqData.tabs[0].id);
    const [expandedId, setExpandedId] = useState<string | null>(
        faqData.questions.find((q) => q.isExpanded)?.id || null
    );

    const filteredQuestions = faqData.questions.filter(
        (q) => q.category === activeTab
    );

    return (
        <section className="w-full bg-[#FAFAFA] px-4 py-12">
            <div className="flex flex-col mb-2 text-center items-center">
                <SectionHeader 
                    overline={faqData.sectionLabel}
                    title={faqData.title}
                    align="center"
                />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide mb-2 -mx-2 px-2 snap-x">
                {faqData.tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => {
                            setActiveTab(tab.id);
                            setExpandedId(null);
                        }}
                        className={`px-5 py-2.5 rounded-[4px] text-xs font-semibold transition-all duration-300 whitespace-nowrap snap-start shrink-0 ${activeTab === tab.id
                                ? "bg-primary text-white shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
                                : "bg-white dark:bg-white border border-gray-100 text-gray-600 dark:text-gray-400 hover:border-primary/50"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="flex flex-col gap-3">
                <AnimatePresence mode="popLayout">
                    {filteredQuestions.map((q, index) => (
                        <motion.div
                            key={q.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className={`bg-white dark:bg-white border-[0.5px] rounded-[4px] overflow-hidden transition-all duration-300 ${expandedId === q.id ? "border-primary-[2px] dark:border-accent shadow-[0_12px_40px_rgb(0,0,0,0.08)]" : "border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
                                }`}
                        >
                            <button
                                onClick={() => setExpandedId(expandedId === q.id ? null : q.id)}
                                className="w-full flex items-center justify-between p-4 text-left"
                            >
                                <span className={`text-[13px] font-semibold pr-4 transition-colors leading-snug ${expandedId === q.id ? "text-[#0a1128] dark:text-accent" : "text-[#0a1128] dark:text-white"}`}>
                                    {q.question}
                                </span>
                                <div
                                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${expandedId === q.id ? "bg-gradient-to-br from-[#bf953f] to-[#b38728] text-white shadow-sm shadow-[#d4af37]/30" : "bg-gray-100 dark:bg-gray-800 text-gray-500"
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

