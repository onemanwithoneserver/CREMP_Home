import { motion } from "framer-motion";
import { journeyTimelineData } from "./data";

export default function JourneyTimelineMobile() {
    return (
        <section className="w-full bg-background px-4 py-8">
            <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6 w-full">
                <div className="flex items-center gap-1.5">
                    <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-[#d4af37] to-transparent"></div>
                    <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
                </div>
                <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0b162c] dark:text-white shrink-0 text-center">
                    {journeyTimelineData.sectionLabel}
                </p>
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
                    <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-[#d4af37] to-transparent"></div>
                </div>
            </div>

            <div className="relative pl-10">
                <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute left-5 top-0 w-[2px] bg-gradient-to-b from-transparent via-[#d4af37]/40 to-transparent"
                />
                <div className="absolute left-5 top-0 bottom-0 w-[2px] overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{ top: ["0%", "calc(100% - 20px)"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#d4af37] shadow-[0_0_10px_2px_rgba(212,175,55,0.8)]"
                    />
                </div>

                <div className="space-y-5">
                    {journeyTimelineData.milestones.map((milestone, idx) => (
                        <motion.div
                            key={milestone.year}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative"
                        >
                            <div className={`absolute left-0 top-[27px] w-6 h-[2px] ${milestone.isActive ? "bg-[#d4af37]" : "bg-[#d4af37]/20"}`} />
                            <motion.div
                                animate={milestone.isActive ? {
                                    scale: [1, 1.05, 1],
                                    boxShadow: [
                                        "0 0 10px rgba(212,175,55,0.3)",
                                        "0 0 25px rgba(212,175,55,0.6)",
                                        "0 0 10px rgba(212,175,55,0.3)"
                                    ]
                                } : {}}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                className={`absolute -left-10 top-2 w-10 h-10 rounded-full flex items-center justify-center text-[11px] font-black z-10 ${milestone.isActive
                                        ? "bg-gradient-to-br from-[#bf953f] to-[#b38728] text-white border-none"
                                        : "bg-[#121c33] border border-white/20 text-gray-400"
                                    }`}
                            >
                                {milestone.year.slice(2)}
                            </motion.div>

                            <div
                                className={`ml-6 border rounded-[4px] p-5 shadow-sm hover-lift cursor-default transition-all duration-500 relative overflow-hidden ${milestone.isActive
                                        ? "bg-[#0a1128] border-[#d4af37] shadow-lg shadow-[#d4af37]/10 ring-1 ring-[#d4af37]/20"
                                        : "bg-surface-alt border-white/5"
                                    }`}
                            >
                                {milestone.isActive && (
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 to-transparent opacity-50 pointer-events-none" />
                                )}
                                <p className={`text-sm font-black mb-1.5 relative z-10 tracking-wide ${milestone.isActive ? "text-[#d4af37]" : "text-gray-300"}`}>
                                    {milestone.year}
                                </p>
                                <p className={`relative z-10 ${milestone.isActive ? "text-gray-200 text-[13px] leading-relaxed" : "text-gray-700 dark:text-gray-300 text-[13px] leading-relaxed"}`}>
                                    {milestone.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

