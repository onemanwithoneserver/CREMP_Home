import { motion } from "framer-motion";
import { journeyTimelineData } from "./data";
import { SectionHeader } from "../components/SectionHeader";

export default function JourneyTimelineDesktop() {
    return (
        <section className="w-full bg-background px-6 py-10">
            <div className="max-w-7xl mx-auto">
                <SectionHeader 
                    overline={journeyTimelineData.sectionLabel}
                    align="center"
                />

                <div className="relative">
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute left-1/2 top-0 w-[2px] bg-gradient-to-b from-transparent via-[#d4af37]/40 to-transparent -translate-x-1/2"
                    />
                    <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 overflow-hidden pointer-events-none">
                        <motion.div
                            animate={{ top: ["0%", "calc(100% - 40px)"] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#d4af37] shadow-[0_0_10px_2px_rgba(212,175,55,0.8)]"
                        />
                    </div>

                    <div className="space-y-8">
                        {journeyTimelineData.milestones.map((milestone, idx) => (
                            <motion.div
                                key={milestone.year}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`flex items-center gap-6 ${idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
                                    }`}
                            >
                                <div className={`flex-1 ${idx % 2 === 0 ? "text-right" : "text-left"}`}>
                                    <div
                                        className={`inline-block border rounded-lg p-7 max-w-sm cursor-default transition-all duration-500 shadow-elevation-1 hover:-translate-y-1 hover:shadow-elevation-2 relative overflow-hidden ${milestone.isActive
                                                ? "bg-[#0a1128] border-[#d4af37] shadow-glow-accent ring-1 ring-[#d4af37]/20"
                                                : "bg-surface-alt border-white/5 hover:border-white/10"
                                            }`}
                                    >
                                        {milestone.isActive && (
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 to-transparent opacity-50 pointer-events-none" />
                                        )}
                                        <p className={`relative z-10 ${milestone.isActive ? "text-gray-200 text-base leading-relaxed" : "text-gray-700 dark:text-gray-300 text-base leading-relaxed"}`}>
                                            {milestone.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="relative z-10 flex items-center justify-center">
                                    <div className={`absolute top-1/2 -translate-y-1/2 h-[2px] w-6 ${milestone.isActive ? "bg-[#d4af37]" : "bg-[#d4af37]/20"} ${idx % 2 === 0 ? "-left-6" : "-right-6"}`} />
                                    <motion.div
                                        animate={milestone.isActive ? {
                                            scale: [1, 1.05, 1],
                                            boxShadow: [
                                                "0 0 15px rgba(212,175,55,0.3)",
                                                "0 0 30px rgba(212,175,55,0.6)",
                                                "0 0 15px rgba(212,175,55,0.3)"
                                            ]
                                        } : {}}
                                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                        className={`w-16 h-16 rounded-full flex items-center justify-center text-[15px] font-black tracking-wider z-10 ${milestone.isActive
                                                ? "bg-gradient-to-br from-[#bf953f] to-[#b38728] text-white border-none"
                                                : "bg-[#121c33] border border-white/20 text-gray-400"
                                            }`}
                                    >
                                        {milestone.year}
                                    </motion.div>
                                </div>

                                <div className="flex-1" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

