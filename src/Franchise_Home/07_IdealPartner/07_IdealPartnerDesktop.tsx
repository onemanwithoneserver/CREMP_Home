import clsx from "clsx";
import { motion } from "framer-motion";
import { getBadgeStyles, getCardStyles, getIconContainerStyles } from "../utils/theme";
import { idealPartnerData } from "./data";
import { SectionHeader } from "../components/SectionHeader";

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
        <section className="w-full bg-[#FAFAFA] px-6 py-10">
            <div className="max-w-7xl mx-auto">
                <SectionHeader 
                    overline={idealPartnerData.sectionLabel}
                    title={idealPartnerData.title}
                    subtitle={idealPartnerData.subtitle}
                    align="center"
                />

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={stagger}
                    className="grid grid-cols-3 gap-6 mb-6"
                >
                    {idealPartnerData.criteria.map((item) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                variants={fadeInUp}
                                className={clsx("rounded-2xl border p-6 cursor-default transition-all duration-300 flex flex-col bg-white dark:bg-white", getCardStyles(item.intent))}
                            >
                                <div className="flex items-center gap-6 mb-2 pb-2">
                                    <div className={clsx("w-12 h-12 rounded-full flex shrink-0 items-center justify-center shadow-sm", getIconContainerStyles(item.intent))}>
                                        <Icon size={20} strokeWidth={1.5} />
                                    </div>
                                    <h4 className="text-[#0a1128] dark:text-white font-extrabold text-lg tracking-tight leading-tight">{item.title}</h4>
                                </div>

                                <div className="space-y-4 mb-5 flex-1">
                                    {item.items.map((subItem, idx) => (
                                        <div key={idx} className="flex flex-col relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary/40 dark:before:bg-accent/40">
                                            <span className="text-gray-400 dark:text-gray-500 text-xs font-bold uppercase tracking-widest mb-0.5">{subItem.label}</span>
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
                    className="grid grid-cols-3 gap-6"
                >
                    {idealPartnerData.additionalCriteria.map((item) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                variants={fadeInUp}
                                className={clsx("rounded-2xl border p-5 cursor-default transition-all duration-300 flex flex-col bg-white dark:bg-white", getCardStyles(item.intent))}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={clsx("w-10 h-10 rounded-full flex shrink-0 items-center justify-center shadow-sm", getIconContainerStyles(item.intent))}>
                                        <Icon size={16} strokeWidth={1.5} />
                                    </div>
                                    <h4 className="text-[#0a1128] dark:text-white font-bold text-base">{item.title}</h4>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4 flex-1">
                                    {item.items.map((tag, idx) => (
                                        <span key={idx} className={clsx("text-xs px-3 py-1.5 rounded bg-gray-50 dark:bg-white shadow-xs font-semibold border border-gray-100 dark:border-gray-100", getBadgeStyles(item.intent))}>
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

