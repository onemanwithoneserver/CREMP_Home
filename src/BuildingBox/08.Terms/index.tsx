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
    show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const listItem: Variants = {
    hidden: { opacity: 0, x: -12 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 400, damping: 30 } },
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
                className="w-full bg-white/95 backdrop-blur-2xl rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.03)] border border-gray-200/60 overflow-hidden"
            >
                {/* Section header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100/80">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#0b1b42] border border-[#d4af37]/25 flex items-center justify-center text-[#d4af37] shrink-0 shadow-lg shadow-[#0a1128]/20">
                            <FileText size={16} className="opacity-90" />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-[1.05rem] font-bold text-[#0a1128] tracking-tight leading-tight">{termsData.title}</h2>
                            <span className="text-[0.65rem] text-gray-400 font-medium">Seller-defined conditions</span>
                        </div>
                    </div>
                    <span className="px-3 py-1.5 text-[0.55rem] font-bold rounded-full border border-gray-200/80 text-gray-400 tracking-[0.12em] uppercase bg-gray-50/60 shadow-sm">{termsData.count}</span>
                </div>

                {/* Terms content */}
                <div className="p-4 flex flex-col gap-3.5 relative">
                    {/* Timeline line */}
                    <div className="absolute left-[1.85rem] top-5 bottom-5 w-[2px] bg-gradient-to-b from-[#d4af37]/25 via-[#d4af37]/10 to-transparent z-0" />

                    {/* Visible items */}
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
                                className="flex items-start gap-3 group cursor-default hover:bg-[#d4af37]/[0.02] rounded-xl py-1.5 px-1.5 transition-colors duration-300"
                            >
                                <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b38728] mt-1.5 shrink-0 shadow-sm shadow-[#d4af37]/25 ring-2 ring-[#d4af37]/10" />
                                <span className="text-[0.82rem] text-gray-600 leading-relaxed font-medium">{item}</span>
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
                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                className="flex flex-col gap-3 overflow-hidden relative z-10"
                            >
                                {termsData.hiddenItems.map((item, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -12 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.06, type: "spring", stiffness: 400, damping: 30 }}
                                        className="flex items-start gap-3 group cursor-default hover:bg-[#d4af37]/[0.02] rounded-xl py-1.5 px-1.5 transition-colors duration-300"
                                    >
                                        <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b38728] mt-1.5 shrink-0 shadow-sm shadow-[#d4af37]/25 ring-2 ring-[#d4af37]/10" />
                                        <span className="text-[0.82rem] text-gray-600 leading-relaxed font-medium">{item}</span>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>

                    {/* Expand/collapse button */}
                    <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex items-center gap-1.5 font-bold text-[0.72rem] w-fit relative z-10 px-4 py-2 rounded-full border border-[#d4af37]/20 bg-[#d4af37]/[0.04] text-[#d4af37] hover:bg-[#d4af37]/[0.08] hover:border-[#d4af37]/30 transition-all duration-300 shadow-sm"
                    >
                        {isOpen ? "Show less" : `+${termsData.hiddenItems.length} more terms`}
                        <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        >
                            <ChevronDown size={13} />
                        </motion.div>
                    </motion.button>

                    {/* Warning card */}
                    <div className="mt-1 flex items-start gap-3 bg-amber-50/70 border border-amber-200/60 rounded-xl p-4 backdrop-blur-sm relative z-10 shadow-sm">
                        <div className="w-1 h-full min-h-[20px] rounded-full bg-gradient-to-b from-amber-500 to-amber-600 shrink-0" />
                        <AlertCircle size={15} className="text-amber-600 shrink-0 mt-0.5" />
                        <p className="text-[0.7rem] text-amber-800 leading-relaxed font-medium">
                            {termsData.warning}
                        </p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
