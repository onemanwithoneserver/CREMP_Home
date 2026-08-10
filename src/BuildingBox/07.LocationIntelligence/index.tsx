import { motion, type Variants } from "framer-motion";
import { Cpu, Lock, MapPin } from "lucide-react";
import { locationIntelligenceData } from "./data";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 30 } },
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
};

const gridItem: Variants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 400, damping: 30 } },
};

const pulseGlow: Variants = {
    animate: {
        scale: [1, 1.06, 1],
        opacity: [0.2, 0.4, 0.2],
        transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
    },
};

const shimmer: Variants = {
    animate: {
        backgroundPosition: ["200% 0", "-200% 0"],
        transition: { duration: 3, repeat: Infinity, ease: "linear" },
    },
};

export default function LocationIntelligence() {
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
                className="w-full bg-white/90 dark:bg-[#0b1b42]/90 backdrop-blur-xl rounded-[4px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.45)] border border-gray-200/80 dark:border-white/10 overflow-hidden relative"
            >
                <motion.div
                    variants={pulseGlow}
                    animate="animate"
                    className="pointer-events-none absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-[#7c3aed]/5 blur-[80px] dark:bg-[#7c3aed]/10"
                />

                <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-white/5 relative z-10">
                    <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-[4px] bg-[#7c3aed] flex items-center justify-center text-white shrink-0 shadow-md shadow-[#7c3aed]/25">
                            <Cpu size={15} />
                        </div>
                        <h2 className="text-[1rem] font-semibold text-[#0a1128] dark:text-white tracking-tight">{locationIntelligenceData.title}</h2>
                    </div>
                    <motion.span
                        variants={shimmer}
                        animate="animate"
                        className="px-2.5 py-1 text-[0.55rem] font-bold rounded-[2px] border border-[#7c3aed]/30 text-[#7c3aed] tracking-widest uppercase bg-gradient-to-r from-[#7c3aed]/5 via-[#7c3aed]/15 to-[#7c3aed]/5 bg-[length:200%_100%]"
                    >
                        COMING SOON
                    </motion.span>
                </div>

                <div className="p-4 flex flex-col gap-4 relative z-10">
                    <p className="text-[0.78rem] text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                        {locationIntelligenceData.description}
                    </p>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-3 gap-2"
                    >
                        {locationIntelligenceData.items.map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={gridItem}
                                whileHover={{ y: -2, scale: 1.02 }}
                                className="relative rounded-[4px] border border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-black/10 backdrop-blur-sm p-3 flex flex-col justify-between min-h-[85px] overflow-hidden opacity-70 cursor-default hover:opacity-90 hover:border-[#7c3aed]/20 transition-all duration-300 group"
                            >
                                <motion.div
                                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3, ease: "easeInOut" }}
                                    className="absolute top-2.5 right-2.5"
                                >
                                    <Lock size={11} className="text-gray-300 dark:text-gray-600 group-hover:text-[#7c3aed]/50 transition-colors" />
                                </motion.div>
                                <div className="w-6 h-6 rounded-[3px] bg-[#7c3aed]/10 dark:bg-[#7c3aed]/20 flex items-center justify-center text-[#7c3aed] mb-2 border border-[#7c3aed]/15">
                                    <item.icon size={12} />
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-[0.62rem] font-semibold text-gray-700 dark:text-gray-300 truncate pr-4 leading-tight">{item.label}</span>
                                    <div className="flex items-center gap-1">
                                        <motion.span
                                            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                                            transition={{ duration: 1.5, repeat: Infinity, delay: idx * 0.2 }}
                                            className="w-1.5 h-1.5 rounded-full bg-[#7c3aed]"
                                        />
                                        <span className="text-[0.55rem] text-gray-400 font-medium">{item.status}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div className="bg-gray-50/80 dark:bg-black/20 backdrop-blur-sm p-3 px-4 border-t border-gray-100 dark:border-white/5 flex items-center gap-2.5 relative z-10">
                    <div className="w-1 h-4 rounded-full bg-gradient-to-b from-[#d4af37] to-[#b38728] shrink-0" />
                    <MapPin size={13} className="text-[#7c3aed] shrink-0" />
                    <span className="text-[0.68rem] text-gray-500 dark:text-gray-400 font-medium truncate">{locationIntelligenceData.footer}</span>
                </div>
            </motion.div>
        </motion.div>
    );
}
