import clsx from "clsx";
import { motion } from "framer-motion";
import { getCardStyles, getIconContainerStyles } from "../utils/theme";
import { investmentSnapshotData } from "./data";
import { SectionHeader } from "../components/SectionHeader";

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
        <section className="w-full bg-[#FAFAFA] px-6 py-10">
            <div className="max-w-7xl mx-auto">
                <SectionHeader 
                    overline={investmentSnapshotData.sectionLabel}
                    align="center"
                />

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={stagger}
                    className="grid grid-cols-3 gap-6"
                >
                    {investmentSnapshotData.stats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={stat.label}
                                variants={fadeInUp}
                                whileHover={{ y: -4, scale: 1.01 }}
                                className={clsx(
                                    "relative overflow-hidden rounded-2xl border p-6 cursor-default transition-all duration-300 group z-10",
                                    getCardStyles(stat.intent)
                                )}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                <div className="flex items-start gap-6 relative z-10">
                                    <div
                                        className={clsx(
                                            "w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110",
                                            getIconContainerStyles(stat.intent)
                                        )}
                                    >
                                        <Icon size={20} strokeWidth={1.75} />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className="text-xs uppercase font-semibold tracking-[0.15em] text-gray-500 dark:text-gray-400 mb-1 transition-colors group-hover:text-gray-700 dark:group-hover:text-gray-300">
                                            {stat.label}
                                        </p>
                                        <p className="text-2xl tracking-tight font-semibold text-[#0a1128] dark:text-white leading-tight tracking-tight">
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
