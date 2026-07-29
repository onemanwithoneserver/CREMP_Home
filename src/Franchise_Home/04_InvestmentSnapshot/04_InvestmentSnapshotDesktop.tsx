import clsx from "clsx";
import { motion } from "framer-motion";
import { getCardStyles, getIconContainerStyles } from "../utils/theme";
import { investmentSnapshotData } from "./data";

const fadeInUp = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 300, damping: 24, mass: 0.8 } },
};

const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export default function InvestmentSnapshotDesktop() {
    return (
        <section className="w-full bg-background px-6 py-10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex items-center justify-center gap-3 mb-8 w-full"
                >
                    <div className="flex items-center gap-1.5">
                        <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-[#d4af37] to-transparent"></div>
                        <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
                    </div>
                    <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0b162c] dark:text-white shrink-0 text-center">
                        {investmentSnapshotData.sectionLabel}
                    </p>
                    <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
                        <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-[#d4af37] to-transparent"></div>
                    </div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={stagger}
                    className="grid grid-cols-3 gap-4"
                >
                    {investmentSnapshotData.stats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={stat.label}
                                variants={fadeInUp}
                                whileHover={{ y: -4, scale: 1.01 }}
                                className={clsx(
                                    "relative overflow-hidden rounded-lg border p-6 shadow-sm hover:shadow-md cursor-default transition-all duration-300 group z-10",
                                    getCardStyles(stat.intent)
                                )}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                <div className="flex items-start gap-4 relative z-10">
                                    <div
                                        className={clsx(
                                            "w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110",
                                            getIconContainerStyles(stat.intent)
                                        )}
                                    >
                                        <Icon size={20} strokeWidth={1.75} />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className="text-xs uppercase font-bold tracking-[0.15em] text-gray-500 dark:text-gray-400 mb-1 transition-colors group-hover:text-gray-700 dark:group-hover:text-gray-300">
                                            {stat.label}
                                        </p>
                                        <p className="text-2xl font-black text-gray-900 dark:text-white leading-tight tracking-tight">
                                            {stat.value}
                                        </p>
                                        <p className="text-[13px] font-medium text-gray-600 dark:text-gray-400 mt-1 leading-snug">
                                            {stat.sublabel}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
