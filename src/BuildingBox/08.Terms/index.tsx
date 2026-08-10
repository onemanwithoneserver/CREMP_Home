import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { FileText, ChevronDown, AlertCircle } from "lucide-react";
import { termsData } from "./data";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 30 } },
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const listItem: Variants = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 400, damping: 30 } },
};

export default function Terms() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="w-full relative z-10"
        >
            <motion.div
                variants={fadeInUp}
                className="w-full bg-white/90 dark:bg-[#0b1b42]/90 backdrop-blur-xl rounded-[4px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.45)] border border-gray-200/80 dark:border-white/10 overflow-hidden mb-6"
            >
                <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-white/5">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-[4px] bg-[#0b1b42] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0 shadow-md shadow-[#0a1128]/25">
                            <FileText size={17} className="opacity-90" />
                        </div>
                        <h2 className="text-[1rem] font-semibold text-[#0a1128] dark:text-white tracking-tight">{termsData.title}</h2>
                    </div>
                    <span className="px-2.5 py-1 text-[0.6rem] font-bold rounded-[2px] border border-gray-200 dark:border-white/10 text-gray-400 tracking-widest uppercase bg-gray-50/50 dark:bg-white/5">{termsData.count}</span>
                </div>

                <div className="p-4 flex flex-col gap-4 relative">
                    <div className="absolute left-[1.65rem] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#d4af37]/30 via-[#d4af37]/10 to-transparent z-0" />

                    <motion.ul
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="flex flex-col gap-3 relative z-10"
                    >
                        {termsData.visibleItems.map((item, idx) => (
                            <motion.li
                                key={idx}
                                variants={listItem}
                                className="flex items-start gap-3 group cursor-default hover:bg-[#d4af37]/[0.02] rounded-[2px] py-0.5 px-0.5 transition-colors"
                            >
                                <span className="w-2 h-2 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b38728] mt-1.5 shrink-0 shadow-sm shadow-[#d4af37]/30" />
                                <span className="text-[0.82rem] text-gray-600 dark:text-gray-300 leading-relaxed font-medium">{item}</span>
                            </motion.li>
                        ))}
                    </motion.ul>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                className="flex flex-col gap-3 overflow-hidden relative z-10"
                            >
                                {termsData.hiddenItems.map((item, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.06, type: "spring", stiffness: 400, damping: 30 }}
                                        className="flex items-start gap-3 group cursor-default hover:bg-[#d4af37]/[0.02] rounded-[2px] py-0.5 px-0.5 transition-colors"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b38728] mt-1.5 shrink-0 shadow-sm shadow-[#d4af37]/30" />
                                        <span className="text-[0.82rem] text-gray-600 dark:text-gray-300 leading-relaxed font-medium">{item}</span>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>

                    <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-1.5 font-bold text-[0.75rem] w-fit relative z-10 px-3 py-1.5 rounded-[2px] border border-[#d4af37]/20 bg-[#d4af37]/5 text-[#d4af37] hover:bg-[#d4af37]/10 hover:border-[#d4af37]/30 transition-all"
                    >
                        {isOpen ? "Show less" : `+${termsData.hiddenItems.length} more terms`}
                        <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        >
                            <ChevronDown size={13} />
                        </motion.div>
                    </motion.button>

                    <div className="mt-1 flex items-start gap-2.5 bg-amber-50/80 dark:bg-amber-900/10 border border-amber-200/80 dark:border-amber-900/50 rounded-[4px] p-3.5 backdrop-blur-sm relative z-10">
                        <div className="w-1 h-full min-h-[20px] rounded-full bg-gradient-to-b from-amber-500 to-amber-600 shrink-0" />
                        <AlertCircle size={15} className="text-amber-600 shrink-0 mt-0.5" />
                        <p className="text-[0.7rem] text-amber-800 dark:text-amber-500 leading-relaxed font-medium">
                            {termsData.warning}
                        </p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
