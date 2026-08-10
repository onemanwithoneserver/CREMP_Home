import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, ChevronDown, AlertCircle } from "lucide-react";
import { termsData } from "./data";
import { Container } from "../../components/layout";

export default function Terms() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full py-2 bg-transparent relative z-10">
            <Container>
                <div className="w-full bg-white dark:bg-[#11224d] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] border border-gray-100 dark:border-white/10 overflow-hidden mb-6">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-white/5">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-slate-500 flex items-center justify-center text-white shrink-0">
                                <FileText size={18} fill="currentColor" className="opacity-80" />
                            </div>
                            <h2 className="text-[1.05rem] font-medium text-gray-800 dark:text-gray-100">{termsData.title}</h2>
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-400">
                            <span className="text-[0.75rem] font-medium">{termsData.count}</span>
                        </div>
                    </div>

                    <div className="p-4 flex flex-col gap-4">
                        <ul className="flex flex-col gap-3">
                            {termsData.visibleItems.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                                    <span className="text-[0.85rem] text-gray-600 dark:text-gray-300 leading-snug">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <AnimatePresence>
                            {isOpen && (
                                <motion.ul
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex flex-col gap-3 overflow-hidden"
                                >
                                    {termsData.hiddenItems.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                                            <span className="text-[0.85rem] text-gray-600 dark:text-gray-300 leading-snug">{item}</span>
                                        </li>
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>

                        <button 
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center gap-1 text-amber-500 font-medium text-[0.8rem] w-fit hover:text-amber-600 transition-colors"
                        >
                            {isOpen ? "Show less" : `+${termsData.hiddenItems.length} more terms`}
                            <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                                <ChevronDown size={14} />
                            </motion.div>
                        </button>

                        <div className="mt-2 flex items-start gap-2.5 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/50 rounded-xl p-3">
                            <AlertCircle size={16} className="text-amber-600 shrink-0 mt-0.5" />
                            <p className="text-[0.7rem] text-amber-800 dark:text-amber-500 leading-relaxed">
                                {termsData.warning}
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
