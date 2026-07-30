import clsx from "clsx";
import { motion } from "framer-motion";
import { getBadgeStyles, getCardStyles, getIconContainerStyles } from "../utils/theme";
import { idealPartnerData } from "./data";

export default function IdealPartnerMobile() {
    return (
        <section className="w-full bg-background px-4 py-8">
            <div className="bg-primary/5 dark:bg-accent/5 border border-primary/10 dark:border-accent/10 rounded p-6 mb-6 text-center shadow-elevation-1">
                <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6 w-full">
                    <div className="flex items-center gap-1.5">
                        <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-[#d4af37] to-transparent"></div>
                        <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
                    </div>
                    <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0b162c] dark:text-white shrink-0 text-center">
                        {idealPartnerData.sectionLabel}
                    </p>
                    <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
                        <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-[#d4af37] to-transparent"></div>
                    </div>
                </div>
                <h2 className="text-xl font-black text-gray-900 dark:text-white mb-2">{idealPartnerData.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{idealPartnerData.subtitle}</p>
            </div>

            <div className="space-y-3 mb-4">
                {idealPartnerData.criteria.map((item) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={clsx("rounded-xl border p-5 cursor-default transition-all duration-300 flex flex-col bg-white dark:bg-surface", getCardStyles(item.intent))}
                        >
                            <div className="flex items-center gap-4 mb-4 border-b border-gray-100 dark:border-border pb-3">
                                <div className={clsx("w-10 h-10 rounded-full flex shrink-0 items-center justify-center shadow-sm", getIconContainerStyles(item.intent))}>
                                    <Icon size={18} strokeWidth={1.5} />
                                </div>
                                <h4 className="text-gray-900 dark:text-white font-extrabold text-base leading-tight">{item.title}</h4>
                            </div>

                            <div className="space-y-3 mb-4 flex-1">
                                {item.items.map((subItem, idx) => (
                                    <div key={idx} className="flex flex-col relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary/40 dark:before:bg-accent/40">
                                        <span className="text-gray-400 dark:text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-0.5">{subItem.label}</span>
                                        {subItem.value && (
                                            <span className="text-gray-800 dark:text-gray-200 text-sm font-semibold">{subItem.value}</span>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="pt-3 border-t border-gray-100 dark:border-border mt-auto">
                                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <div className="flex flex-col gap-3">
                {idealPartnerData.additionalCriteria.map((item) => {
                    const Icon = item.icon;
                    return (
                        <div key={item.title} className={clsx("rounded-xl border p-4 cursor-default transition-all duration-300 flex flex-col bg-white dark:bg-surface", getCardStyles(item.intent))}>
                            <div className="flex items-center gap-3 mb-3">
                                <div className={clsx("w-8 h-8 rounded-full flex shrink-0 items-center justify-center shadow-sm", getIconContainerStyles(item.intent))}>
                                    <Icon size={14} strokeWidth={1.5} />
                                </div>
                                <h4 className="text-gray-900 dark:text-white font-bold text-sm leading-tight">{item.title}</h4>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-3 mt-auto">
                                {item.items.map((tag, idx) => (
                                    <span key={idx} className={clsx("text-[10px] font-semibold py-1 px-2 rounded bg-gray-50 dark:bg-surface-alt border border-gray-100 dark:border-border shadow-xs", getBadgeStyles(item.intent))}>{tag}</span>
                                ))}
                            </div>
                            <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">{item.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

