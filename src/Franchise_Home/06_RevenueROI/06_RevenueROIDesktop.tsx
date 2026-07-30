import clsx from "clsx";
import { motion } from "framer-motion";
import { getBadgeStyles, getCardStyles, getIconContainerStyles } from "../utils/theme";
import { revenueROIData } from "./data";
import { SectionHeader } from "../components/SectionHeader";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 400, damping: 30 } },
};

const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function RevenueROIDesktop() {
    return (
        <section className="w-full bg-background px-6 py-10">
            <div className="max-w-7xl mx-auto">
                <SectionHeader 
                    overline={revenueROIData.sectionLabel}
                    align="center"
                />

                {}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={stagger}
                    className="grid grid-cols-3 gap-6 mb-12"
                >
                    {revenueROIData.revenueCards.map((card) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={card.year}
                                variants={fadeInUp}
                                className={clsx(
                                    "rounded-xl border-none p-6",
                                    "bg-white dark:bg-[#0b162c]/40 backdrop-blur-sm",
                                    "hover:-translate-y-1",
                                    "cursor-default transition-all duration-300",
                                    getCardStyles(card.intent)
                                )}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                                        {card.year}
                                    </span>
                                    <span
                                        className={clsx(
                                            "text-[10px] font-bold uppercase px-2.5 py-1 rounded-md shadow-sm",
                                            getBadgeStyles(card.intent)
                                        )}
                                    >
                                        {card.label}
                                    </span>
                                </div>

                                <div className="flex items-center gap-4 mb-5">
                                    <div
                                        className={clsx(
                                            "w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-inner",
                                            getIconContainerStyles(card.intent)
                                        )}
                                    >
                                        <Icon size={20} strokeWidth={1.75} />
                                    </div>
                                    <p className="text-3xl font-black text-[#0b162c] dark:text-white tracking-tight">
                                        {card.range}
                                    </p>
                                </div>

                                <p className="text-slate-600 dark:text-slate-300 text-sm font-medium leading-relaxed">
                                    {card.description}
                                </p>
                                <p className="text-slate-400 dark:text-slate-500 text-xs mt-2 font-medium">
                                    {card.sublabel}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-[#0b162c]/60 border border-slate-200 dark:border-slate-800 rounded-xl p-8 shadow-elevation-2 hover:shadow-elevation-3 transition-shadow duration-300"
                >
                    <div className="mb-8">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-2">
                            {revenueROIData.paybackPeriod.sectionLabel}
                        </p>
                        <h3 className="text-2xl font-black text-[#0b162c] dark:text-white">
                            {revenueROIData.paybackPeriod.title}
                        </h3>
                    </div>

                    <div className="flex items-center gap-4">
                        {revenueROIData.paybackPeriod.milestones.map((milestone, idx) => {
                            const Icon = milestone.icon;
                            return (
                                <div key={idx} className="flex items-center gap-4 flex-1">
                                    <div
                                        className={clsx(
                                            "w-12 h-12 rounded-full flex items-center justify-center shrink-0 border transition-colors duration-300",
                                            milestone.status === "complete"
                                                ? "bg-emerald-50 border-emerald-200 text-emerald-600 dark:bg-emerald-500/10 dark:border-emerald-500/20 dark:text-emerald-400"
                                                : milestone.status === "active"
                                                    ? "bg-[#d4af37]/10 border-[#d4af37]/30 text-[#d4af37] ring-4 ring-[#d4af37]/10 dark:ring-[#d4af37]/20"
                                                    : "bg-slate-50 border-slate-200 text-slate-400 dark:bg-slate-800/50 dark:border-slate-700 dark:text-slate-500"
                                        )}
                                    >
                                        <Icon size={18} strokeWidth={milestone.status === "active" ? 2 : 1.5} />
                                    </div>
                                    <span
                                        className={clsx(
                                            "text-sm font-semibold",
                                            milestone.status === "active"
                                                ? "text-[#0b162c] dark:text-white"
                                                : "text-slate-600 dark:text-slate-400"
                                        )}
                                    >
                                        {milestone.label}
                                    </span>
                                    {idx < revenueROIData.paybackPeriod.milestones.length - 1 && (
                                        <div className="flex-1 h-[2px] rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                                            {}
                                            <div className={clsx(
                                                "h-full transition-all duration-500",
                                                milestone.status === "complete" ? "bg-emerald-400/50 w-full" : "w-0"
                                            )} />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
