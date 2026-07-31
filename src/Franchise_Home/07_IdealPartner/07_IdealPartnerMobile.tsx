import clsx from "clsx";
import { motion } from "framer-motion";
import { getBadgeStyles, getCardStyles, getIconContainerStyles } from "../utils/theme";
import { idealPartnerData } from "./data";
import { SectionHeader } from "../components/SectionHeader";
import { CheckCircle2 } from "lucide-react";

const fadeInUp = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    show: { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        transition: { 
            type: "spring" as const, 
            stiffness: 350, 
            damping: 25,
            mass: 0.8
        } 
    },
};

const stagger = {
    hidden: { opacity: 0 },
    show: { 
        opacity: 1, 
        transition: { 
            staggerChildren: 0.1,
            delayChildren: 0.05
        } 
    },
};

export default function IdealPartnerMobile() {
    return (
        <section className="w-full bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 px-4 py-8">
            <SectionHeader 
                overline={idealPartnerData.sectionLabel}
                title={idealPartnerData.title}
                subtitle={idealPartnerData.subtitle}
                align="center"
            />

            <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-20px" }}
                variants={stagger}
                className="flex flex-col gap-4 mb-4 mt-6"
            >
                {idealPartnerData.multiSelects.map((item) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={item.title}
                            variants={fadeInUp}
                            className={clsx(
                                "rounded-3xl border border-gray-200/80 dark:border-gray-800/80 p-5 flex flex-col bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm active:scale-[0.98] transition-transform", 
                                getCardStyles(item.intent)
                            )}
                        >
                            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100 dark:border-gray-800/60">
                                <div className={clsx("w-12 h-12 rounded-2xl flex shrink-0 items-center justify-center shadow-sm", getIconContainerStyles(item.intent))}>
                                    <Icon size={20} strokeWidth={2.5} />
                                </div>
                                <h4 className="text-gray-900 dark:text-white font-semibold text-[15px] leading-tight">
                                    {item.title}
                                </h4>
                            </div>

                            <div className="flex flex-col gap-2.5">
                                {item.items.map((subItem, i) => (
                                    <div key={i} className="flex items-start gap-2.5">
                                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-slate-800 dark:text-slate-300" />
                                        <span className="text-gray-600 dark:text-gray-300 font-medium text-sm leading-snug">
                                            {subItem}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>

            <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-20px" }}
                variants={stagger}
                className="flex flex-col gap-3 mb-4"
            >
                {idealPartnerData.singleSelects.map((item) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={item.title}
                            variants={fadeInUp}
                            className={clsx(
                                "rounded-2xl border border-gray-200/80 dark:border-gray-800/80 p-4 flex items-center justify-between gap-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm active:scale-[0.98] transition-transform", 
                                getCardStyles(item.intent)
                            )}
                        >
                            <div className="flex flex-col">
                                <span className="text-gray-400 dark:text-gray-500 text-[10px] font-semibold uppercase tracking-widest mb-1">
                                    {item.title}
                                </span>
                                <span className="text-gray-900 dark:text-white font-semibold text-sm tracking-tight">
                                    {item.value}
                                </span>
                            </div>
                            <div className={clsx("w-10 h-10 rounded-xl flex shrink-0 items-center justify-center shadow-sm", getIconContainerStyles(item.intent))}>
                                <Icon size={18} strokeWidth={2.5} />
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
                className="w-full"
            >
                <motion.div
                    variants={fadeInUp}
                    className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/80 dark:border-gray-800/80 rounded-3xl p-5 shadow-sm flex flex-col gap-3 active:scale-[0.98] transition-transform"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gray-900 dark:bg-gray-800 flex items-center justify-center shrink-0 shadow-sm">
                            <idealPartnerData.additionalExpectations.icon size={20} className="text-white" strokeWidth={2.5} />
                        </div>
                        <h4 className="text-gray-900 dark:text-white font-semibold text-[15px] tracking-tight">
                            {idealPartnerData.additionalExpectations.title}
                        </h4>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-medium text-[13px]">
                        {idealPartnerData.additionalExpectations.text}
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}