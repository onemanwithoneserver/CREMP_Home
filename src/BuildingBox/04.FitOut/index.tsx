import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sofa, ChevronDown, CheckCircle2 } from "lucide-react";
import { fitOutData } from "./data";
import { Container } from "../../components/layout";

export default function FitOut() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="w-full py-2 bg-transparent relative z-10">
            <Container>
                <div className="w-full bg-white dark:bg-[#11224d] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] border border-gray-100 dark:border-white/10 overflow-hidden">
                    {/* Header (Accordion Toggle) */}
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full flex items-center justify-between p-4 bg-transparent hover:bg-gray-50 dark:hover:bg-black/10 transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-orange-500 flex items-center justify-center text-white shrink-0">
                                <Sofa size={18} fill="currentColor" />
                            </div>
                            <div className="flex flex-col items-start">
                                <h2 className="text-[1.05rem] font-medium text-gray-800 dark:text-gray-100">{fitOutData.title}</h2>
                                <span className="text-[0.75rem] text-gray-500 dark:text-gray-400">{fitOutData.subtitle}</span>
                            </div>
                        </div>
                        <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ChevronDown size={20} className="text-gray-400" />
                        </motion.div>
                    </button>

                    {/* Collapsible Content */}
                    <AnimatePresence initial={false}>
                        {isOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="p-4 pt-0 flex flex-col gap-5 border-t border-gray-100 dark:border-white/5 mx-4 mt-2">
                                    
                                    {/* Included Tags */}
                                    <div className="flex flex-wrap gap-2 pt-4">
                                        {fitOutData.included.map((item, idx) => (
                                            <span 
                                                key={idx} 
                                                className="flex items-center gap-1.5 px-3 py-1.5 text-[0.75rem] font-medium rounded-full bg-gray-50 dark:bg-black/20 text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-white/10"
                                            >
                                                <CheckCircle2 size={12} className="text-emerald-500" />
                                                {item}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Items List (2 columns) */}
                                    <div className="grid grid-cols-2 gap-y-4 gap-x-2 pb-2">
                                        {fitOutData.items.map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                                <item.icon size={16} className="text-gray-400 dark:text-gray-500" />
                                                <span className="text-[0.8rem] font-medium truncate">{item.label}</span>
                                                {item.active && (
                                                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0 ml-auto" />
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </Container>
        </div>
    );
}
