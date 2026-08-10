import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { FileText, ChevronDown, AlertCircle } from "lucide-react";
import { termsData } from "./data";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 30 } },
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const listItemReveal: Variants = {
    hidden: { opacity: 0, x: -15, scale: 0.95 },
    show: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", stiffness: 400, damping: 30 } },
};

export default function Terms() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="w-full relative z-10"
        >
            <motion.div
                variants={fadeInUp}
                className="w-full bg-white/95 backdrop-blur-2xl border-y border-gray-200/60 overflow-hidden"
            >
                {/* Section header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100/80">
                    <div className="flex items-center gap-3.5">
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: -3 }}
                            className="w-10 h-10 rounded-[12px] bg-[#0a1128] flex items-center justify-center text-[#d4af37] shrink-0 shadow-[0_8px_20px_rgba(10,17,40,0.15)] border border-gray-900/10"
                        >
                            <FileText size={18} strokeWidth={2.5} className="opacity-95" />
                        </motion.div>
                        <div className="flex flex-col gap-0.5">
                            <h2 className="text-[1.15rem] font-extrabold text-gray-900 tracking-tight leading-none">{termsData.title}</h2>
                            <span className="text-[0.68rem] text-gray-500 font-medium leading-none">{termsData.subtitle || "Seller-defined conditions"}</span>
                        </div>
                    </div>
                    <span className="px-3 py-1.5 text-[0.6rem] font-bold rounded-full border border-gray-200 text-gray-400 tracking-[0.08em] uppercase bg-gray-50 shadow-sm">{termsData.count || "8 TERMS"}</span>
                </div>

                {/* Terms content */}
                <div className="px-4 py-5 flex flex-col gap-4 relative">
                    {/* Timeline line */}
                    <div className="absolute left-[1.35rem] top-[1.75rem] bottom-16 w-[2px] bg-gradient-to-b from-[#d4af37]/30 via-[#d4af37]/15 to-transparent z-0 rounded-full" />

                    {/* Visible items */}
                    <motion.ul
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="flex flex-col gap-1.5 relative z-10"
                    >
                        {termsData.visibleItems.map((item, idx) => (
                            <motion.li
                                key={idx}
                                variants={listItemReveal}
                                whileHover={{ x: 4, backgroundColor: "rgba(212,175,55,0.03)" }}
                                className="flex items-start gap-4 group cursor-default rounded-xl py-2 px-1 transition-all duration-300"
                            >
                                <motion.span
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: 0.2 + idx * 0.1, type: "spring" }}
                                    className="w-[10px] h-[10px] rounded-full bg-[#d4af37] mt-[0.35rem] shrink-0 ring-[3.5px] ring-white shadow-[0_2px_8px_rgba(212,175,55,0.3)] relative z-10 group-hover:scale-110 transition-transform"
                                />
                                <span className="text-[0.85rem] text-[#334155] leading-snug font-semibold tracking-tight">{item}</span>
                            </motion.li>
                        ))}
                    </motion.ul>

                    {/* Hidden items */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className="flex flex-col gap-1.5 overflow-hidden relative z-10"
                            >
                                {termsData.hiddenItems.map((item, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -15 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05, type: "spring", stiffness: 400, damping: 30 }}
                                        whileHover={{ x: 4, backgroundColor: "rgba(212,175,55,0.03)" }}
                                        className="flex items-start gap-4 group cursor-default rounded-xl py-2 px-1 transition-all duration-300"
                                    >
                                        <span className="w-[10px] h-[10px] rounded-full bg-[#d4af37] mt-[0.35rem] shrink-0 ring-[3.5px] ring-white shadow-[0_2px_8px_rgba(212,175,55,0.3)] relative z-10 group-hover:scale-110 transition-transform" />
                                        <span className="text-[0.85rem] text-[#334155] leading-snug font-semibold tracking-tight">{item}</span>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>

                    {/* Expand/collapse button */}
                    <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        whileHover={{ scale: 1.04, backgroundColor: "rgba(212,175,55,0.05)" }}
                        whileTap={{ scale: 0.96 }}
                        className="flex items-center gap-1.5 font-bold text-[0.72rem] w-fit relative z-10 px-4 py-2 mt-1 rounded-full border border-[#d4af37]/30 bg-white text-[#d4af37] transition-all shadow-sm"
                    >
                        {isOpen ? "Show less" : `+${termsData.hiddenItems.length} more terms`}
                        <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        >
                            <ChevronDown size={14} strokeWidth={2.5} />
                        </motion.div>
                    </motion.button>

                    {/* Warning card */}
                    {termsData.warning && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-3 flex items-start gap-3 bg-amber-50/70 border border-amber-200/60 rounded-xl p-4 backdrop-blur-sm relative z-10 shadow-sm"
                        >
                            <div className="w-1 h-full min-h-[20px] rounded-full bg-gradient-to-b from-amber-500 to-amber-600 shrink-0" />
                            <AlertCircle size={15} className="text-amber-600 shrink-0 mt-0.5" />
                            <p className="text-[0.7rem] text-amber-800 leading-relaxed font-medium">
                                {termsData.warning}
                            </p>
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
}
