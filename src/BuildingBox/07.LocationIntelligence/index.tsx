import { motion, type Variants } from "framer-motion";
import { Cpu, Lock, MapPin } from "lucide-react";
import { locationIntelligenceData } from "./data";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 24 },
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
        opacity: [0.3, 0.5, 0.3],
        scale: [1, 1.04, 1],
        transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
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
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="w-full relative z-10"
        >
            <motion.div
                variants={fadeInUp}
                className="w-full bg-white/95 backdrop-blur-2xl rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.03)] border border-gray-200/60 overflow-hidden relative"
            >
                {/* Ambient glow */}
                <motion.div
                    variants={pulseGlow}
                    animate="animate"
                    className="pointer-events-none absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-[#7c3aed]/[0.04] blur-[80px]"
                />

                {/* Section header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100/80 relative z-10">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#7c3aed] flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#7c3aed]/20">
                            <Cpu size={16} />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-[1.05rem] font-bold text-[#0a1128] tracking-tight leading-tight">{locationIntelligenceData.title}</h2>
                            <span className="text-[0.65rem] text-gray-400 font-medium">AI-Powered Insights</span>
                        </div>
                    </div>
                    <motion.span
                        variants={shimmer}
                        animate="animate"
                        className="px-3 py-1.5 text-[0.52rem] font-bold rounded-full border border-[#7c3aed]/25 text-[#7c3aed] tracking-[0.12em] uppercase bg-gradient-to-r from-[#7c3aed]/5 via-[#7c3aed]/12 to-[#7c3aed]/5 bg-[length:200%_100%] shadow-sm"
                    >
                        COMING SOON
                    </motion.span>
                </div>

                {/* Description */}
                <div className="p-4 flex flex-col gap-3.5 relative z-10">
                    <p className="text-[0.78rem] text-gray-500 leading-relaxed font-medium">
                        {locationIntelligenceData.description}
                    </p>

                    {/* Grid */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-3 gap-2.5"
                    >
                        {locationIntelligenceData.items.map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={gridItem}
                                whileHover={{ y: -2, scale: 1.02 }}
                                className="relative rounded-xl border border-gray-100 bg-gray-50/50 backdrop-blur-sm p-3 flex flex-col justify-between min-h-[90px] overflow-hidden opacity-65 cursor-default hover:opacity-85 hover:border-[#7c3aed]/20 hover:bg-[#7c3aed]/[0.02] transition-all duration-300 group shadow-sm"
                            >
                                <motion.div
                                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3, ease: "easeInOut" }}
                                    className="absolute top-2.5 right-2.5"
                                >
                                    <Lock size={10} className="text-gray-300 group-hover:text-[#7c3aed]/40 transition-colors duration-300" />
                                </motion.div>
                                <div className="w-6 h-6 rounded-lg bg-[#7c3aed]/8 flex items-center justify-center text-[#7c3aed] mb-2 border border-[#7c3aed]/12">
                                    <item.icon size={12} />
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-[0.6rem] font-semibold text-gray-700 truncate pr-4 leading-tight">{item.label}</span>
                                    <div className="flex items-center gap-1">
                                        <motion.span
                                            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.9, 0.4] }}
                                            transition={{ duration: 1.5, repeat: Infinity, delay: idx * 0.2 }}
                                            className="w-1.5 h-1.5 rounded-full bg-[#7c3aed]"
                                        />
                                        <span className="text-[0.52rem] text-gray-400 font-medium">{item.status}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Footer */}
                <div className="bg-gray-50/60 backdrop-blur-sm p-3 px-4 border-t border-gray-100/80 flex items-center gap-2.5 relative z-10">
                    <div className="w-1 h-4 rounded-full bg-gradient-to-b from-[#d4af37] to-[#b38728] shrink-0" />
                    <MapPin size={13} className="text-[#7c3aed] shrink-0" />
                    <span className="text-[0.68rem] text-gray-500 font-medium truncate">{locationIntelligenceData.footer}</span>
                </div>
            </motion.div>
        </motion.div>
    );
}
