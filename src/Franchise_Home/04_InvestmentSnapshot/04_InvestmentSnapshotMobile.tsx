import clsx from "clsx";
import { motion } from "framer-motion";
import { getCardStyles, getIconContainerStyles } from "../utils/theme";
import { investmentSnapshotData } from "./data";

const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 400, damping: 25 } },
};

export default function InvestmentSnapshotMobile() {
    return (
        <section className="w-full bg-background px-4 py-8">
            <div className="flex items-center justify-center gap-3 mb-6 w-full">
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
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-2 gap-4"
            >
                {investmentSnapshotData.stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <motion.div
                            key={stat.label}
                            variants={item}
                            className={clsx(
                                "flex flex-col relative z-10 p-3.5 rounded-xl border transition-all duration-300",
                                getCardStyles(stat.intent)
                            )}
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className={clsx("w-8 h-8 rounded-full flex items-center justify-center shrink-0", getIconContainerStyles(stat.intent))}>
                                    <Icon size={14} strokeWidth={1.75} />
                                </div>
                                <p className="text-[9px] uppercase font-bold tracking-widest text-gray-500 dark:text-gray-400 line-clamp-2">
                                    {stat.label}
                                </p>
                            </div>
                            <p className="text-[17px] font-black text-gray-900 dark:text-white leading-none mb-1 tracking-tight">
                                {stat.value}
                            </p>
                            <p className="text-[10px] font-medium text-gray-500 dark:text-gray-400 leading-snug line-clamp-2">
                                {stat.sublabel}
                            </p>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
}
