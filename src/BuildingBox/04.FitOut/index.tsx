import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Sofa, ChevronDown, CheckCircle2 } from "lucide-react";
import { fitOutData } from "./data";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 30 } },
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const itemReveal: Variants = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 400, damping: 30 } },
};

export default function FitOut() {
    const [isOpen, setIsOpen] = useState(true);

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
                className="w-full bg-white/90 dark:bg-[#0b1b42]/90 backdrop-blur-xl rounded-[4px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.45)] border border-gray-200/80 dark:border-white/10 overflow-hidden"
            >
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    whileTap={{ scale: 0.995 }}
                    className="w-full flex items-center justify-between p-4 bg-transparent hover:bg-[#d4af37]/[0.02] dark:hover:bg-white/[0.02] transition-colors duration-300"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-[4px] bg-[#0b1b42] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0 shadow-md shadow-[#0a1128]/25">
                            <Sofa size={17} fill="currentColor" />
                        </div>
                        <div className="flex flex-col items-start">
                            <h2 className="text-[1rem] font-semibold text-[#0a1128] dark:text-white tracking-tight">{fitOutData.title}</h2>
                            <span className="text-[0.7rem] text-gray-500 dark:text-gray-400 font-medium">{fitOutData.subtitle}</span>
                        </div>
                    </div>
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="w-7 h-7 rounded-[4px] bg-gray-100 dark:bg-white/5 flex items-center justify-center"
                    >
                        <ChevronDown size={16} className="text-gray-400" />
                    </motion.div>
                </motion.button>

                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                        >
                            <div className="p-4 pt-0 flex flex-col gap-5 border-t border-gray-100 dark:border-white/5 mx-4 mt-2">
                                <motion.div
                                    variants={staggerContainer}
                                    initial="hidden"
                                    animate="show"
                                    className="flex flex-wrap gap-2 pt-4"
                                >
                                    {fitOutData.included.map((item, idx) => (
                                        <motion.span
                                            key={idx}
                                            variants={itemReveal}
                                            className="flex items-center gap-1.5 px-3 py-1.5 text-[0.7rem] font-semibold rounded-[2px] bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800/60 shadow-sm"
                                        >
                                            <CheckCircle2 size={12} />
                                            {item}
                                        </motion.span>
                                    ))}
                                </motion.div>

                                <motion.div
                                    variants={staggerContainer}
                                    initial="hidden"
                                    animate="show"
                                    className="grid grid-cols-2 gap-y-3 gap-x-3 pb-2"
                                >
                                    {fitOutData.items.map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            variants={itemReveal}
                                            whileHover={{ x: 2 }}
                                            className="flex items-center gap-2.5 text-gray-600 dark:text-gray-400 group cursor-default py-1 px-1 rounded-[2px] hover:bg-[#d4af37]/[0.03] transition-colors"
                                        >
                                            <item.icon size={15} className="text-gray-400 dark:text-gray-500 group-hover:text-[#d4af37] transition-colors shrink-0" />
                                            <span className="text-[0.78rem] font-medium truncate">{item.label}</span>
                                            {item.active && (
                                                <CheckCircle2 size={13} className="text-emerald-500 shrink-0 ml-auto" />
                                            )}
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
}
