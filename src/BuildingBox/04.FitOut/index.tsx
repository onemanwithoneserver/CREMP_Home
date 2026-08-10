import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Sofa, ChevronDown, CheckCircle2 } from "lucide-react";
import { fitOutData } from "./data";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 30 } },
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const itemReveal: Variants = {
    hidden: { opacity: 0, x: -10, scale: 0.95 },
    show: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", stiffness: 400, damping: 30 } },
};

export default function FitOut() {
    const [isOpen, setIsOpen] = useState(true);

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
                {/* Accordion header */}
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    whileTap={{ scale: 0.998 }}
                    className="w-full flex items-center justify-between p-4 bg-transparent hover:bg-[#d4af37]/[0.02] transition-colors duration-300"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#0b1b42] border border-[#d4af37]/25 flex items-center justify-center text-[#d4af37] shrink-0 shadow-lg shadow-[#0a1128]/20">
                            <Sofa size={16} fill="currentColor" />
                        </div>
                        <div className="flex flex-col items-start">
                            <h2 className="text-[1.05rem] font-bold text-[#0a1128] tracking-tight leading-tight">{fitOutData.title}</h2>
                            <span className="text-[0.68rem] text-gray-400 font-medium">{fitOutData.subtitle}</span>
                        </div>
                    </div>
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="w-8 h-8 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center"
                    >
                        <ChevronDown size={16} className="text-gray-400" />
                    </motion.div>
                </motion.button>

                {/* Accordion content */}
                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                        >
                            <div className="px-4 pb-4 flex flex-col gap-4 border-t border-gray-100/80 mx-0">
                                {/* Included items */}
                                <motion.div
                                    variants={staggerContainer}
                                    initial="hidden"
                                    animate="show"
                                    className="flex flex-wrap gap-2 pt-5"
                                >
                                    {fitOutData.included.map((item, idx) => (
                                        <motion.span
                                            key={idx}
                                            variants={itemReveal}
                                            whileHover={{ scale: 1.05, y: -1 }}
                                            className="flex items-center gap-1.5 px-3 py-1.5 text-[0.68rem] font-semibold rounded-full bg-emerald-50/80 text-emerald-600 border border-emerald-100 shadow-sm transition-all duration-300 hover:shadow-md hover:bg-emerald-50"
                                        >
                                            <CheckCircle2 size={12} />
                                            {item}
                                        </motion.span>
                                    ))}
                                </motion.div>

                                {/* Grid items */}
                                <motion.div
                                    variants={staggerContainer}
                                    initial="hidden"
                                    animate="show"
                                    className="grid grid-cols-2 gap-y-2 gap-x-3 pb-1"
                                >
                                    {fitOutData.items.map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            variants={itemReveal}
                                            whileHover={{ x: 3 }}
                                            className="flex items-center gap-2.5 text-gray-600 group cursor-default py-2 px-2 rounded-xl hover:bg-[#d4af37]/[0.03] transition-all duration-300"
                                        >
                                            <div className="w-7 h-7 flex items-center justify-center shrink-0 transition-all duration-300">
                                                <item.icon size={15} className="text-gray-400 group-hover:text-[#d4af37] transition-colors duration-300" />
                                            </div>
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
