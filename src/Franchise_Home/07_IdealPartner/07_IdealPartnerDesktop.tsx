import clsx from "clsx";
import { motion } from "framer-motion";
import { getBadgeStyles, getCardStyles, getIconContainerStyles } from "../utils/theme";
import { idealPartnerData } from "./data";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 400, damping: 30 } },
};

const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function IdealPartnerDesktop() {
    return (
        <section className="w-full bg-background px-6 py-10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-primary/5 dark:bg-accent/5 border border-primary/10 dark:border-accent/10 rounded-lg p-8 mb-10 text-center max-w-3xl mx-auto shadow-sm"
                >
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
                    <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-3">
                        {idealPartnerData.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed">{idealPartnerData.subtitle}</p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={stagger}
                    className="grid grid-cols-3 gap-4 mb-6"
                >
                    {idealPartnerData.criteria.map((item) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                variants={fadeInUp}
                                className={clsx("rounded-xl border p-4 cursor-default transition-all duration-300 flex flex-col bg-white dark:bg-surface", getCardStyles(item.intent))}
                            >
                                <div className="flex items-center gap-4 mb-2 pb-2">
                                    <div className={clsx("w-12 h-12 rounded-full flex shrink-0 items-center justify-center shadow-sm", getIconContainerStyles(item.intent))}>
                                        <Icon size={20} strokeWidth={1.5} />
                                    </div>
                                    <h4 className="text-gray-900 dark:text-white font-extrabold text-lg leading-tight">{item.title}</h4>
                                </div>

                                <div className="space-y-4 mb-5 flex-1">
                                    {item.items.map((subItem, idx) => (
                                        <div key={idx} className="flex flex-col relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary/40 dark:before:bg-accent/40">
                                            <span className="text-gray-400 dark:text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-0.5">{subItem.label}</span>
                                            {subItem.value && (
                                                <span className="text-gray-800 dark:text-gray-200 text-sm font-semibold">{subItem.value}</span>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-2 mt-auto">
                                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={stagger}
                    className="grid grid-cols-3 gap-4"
                >
                    {idealPartnerData.additionalCriteria.map((item) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                variants={fadeInUp}
                                className={clsx("bg-white dark:bg-surface border border-gray-200 dark:border-border p-5 rounded-xl shadow-elevation-1 cursor-default transition-shadow duration-300 flex flex-col hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-elevation-2")}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={clsx("w-10 h-10 rounded-full flex shrink-0 items-center justify-center shadow-sm", getIconContainerStyles(item.intent))}>
                                        <Icon size={16} strokeWidth={1.5} />
                                    </div>
                                    <h4 className="text-gray-900 dark:text-white font-bold text-base">{item.title}</h4>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4 flex-1">
                                    {item.items.map((tag, idx) => (
                                        <span key={idx} className={clsx("text-xs px-3 py-1.5 rounded bg-gray-50 dark:bg-surface-alt shadow-xs font-semibold border border-gray-100 dark:border-border", getBadgeStyles(item.intent))}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">{item.description}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}

