import clsx from "clsx";
import { motion } from "framer-motion";
import { getIconContainerStyles } from "../utils/theme";
import { revenueROIData } from "./data";
import { SectionHeader } from "../components/SectionHeader";

export default function RevenueROIMobile() {
    return (
        <section className="w-full bg-[#FAFAFA] px-4 py-8">
            <SectionHeader 
                overline={revenueROIData.sectionLabel}
                align="center"
            />
            <div className="flex flex-col gap-6 mb-8">
                {revenueROIData.revenueCards.map((card, idx) => {
                    const Icon = card.icon;
                    return (
                        <motion.div
                            key={card.year}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex flex-col cursor-default pb-6 border-b border-gray-100 dark:border-white/10 last:border-0 last:pb-0"
                        >
                            <div className="mb-3">
                                <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">{card.year}</span>
                            </div>
                            <div className="flex items-center gap-3 mb-3">
                                <div
                                    className={clsx("w-8 h-8 rounded-full flex items-center justify-center shadow-xs", getIconContainerStyles(card.intent))}
                                >
                                    <Icon size={14} strokeWidth={1.5} />
                                </div>
                                <p className="text-2xl tracking-tight font-semibold text-[#0a1128] dark:text-white">{card.range}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
            <div className="pt-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37] mb-2">
                    {revenueROIData.paybackPeriod.sectionLabel}
                </p>
                <h3 className="text-xl font-semibold text-[#0a1128] dark:text-white mb-5">
                    {revenueROIData.paybackPeriod.title}
                </h3>
                <div className="space-y-4">
                    {revenueROIData.paybackPeriod.milestones.map((milestone, idx) => {
                        const Icon = milestone.icon;
                        return (
                            <div key={idx} className="flex items-center gap-3">
                                <div
                                    className={clsx(
                                        "w-8 h-8 rounded-full flex items-center justify-center shrink-0 border",
                                        milestone.status === "complete"
                                            ? "bg-emerald-50 border-emerald-200 text-emerald-600 dark:bg-emerald-500/10 dark:border-emerald-500/20 dark:text-emerald-400"
                                            : milestone.status === "active"
                                                ? "bg-[#d4af37]/10 border-[#d4af37]/30 text-[#d4af37] ring-4 ring-[#d4af37]/10 dark:ring-[#d4af37]/20"
                                                : "bg-slate-50 border-slate-200 text-slate-400 dark:bg-slate-800/50 dark:border-slate-700 dark:text-slate-500"
                                    )}
                                >
                                    <Icon size={14} strokeWidth={1.5} />
                                </div>
                                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{milestone.label}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
