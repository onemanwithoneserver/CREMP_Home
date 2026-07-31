import clsx from "clsx";
import { motion } from "framer-motion";
import { getBadgeStyles, getCardStyles, getIconContainerStyles } from "../utils/theme";
import { idealPartnerData } from "./data";
import { SectionHeader } from "../components/SectionHeader";
import { CheckCircle2 } from "lucide-react";

const fadeInUp = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
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
            staggerChildren: 0.12,
            delayChildren: 0.1
        } 
    },
};

export default function IdealPartnerDesktop() {
    return (
        <section className="w-full bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 px-6 py-10">
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
                    viewport={{ once: true, margin: "-50px" }}
                    variants={stagger}
                    className="grid grid-cols-3 gap-4 mb-5 mt-6"
                >
                    {idealPartnerData.multiSelects.map((item) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                variants={fadeInUp}
                                className={clsx(
                                    "rounded-3xl border border-gray-200/80 dark:border-gray-800/80 p-5 transition-all duration-500 flex flex-col bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-black/50 hover:-translate-y-1.5 group", 
                                    getCardStyles(item.intent)
                                )}
                            >
                                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100 dark:border-gray-800/60 transition-colors group-hover:border-gray-200 dark:group-hover:border-gray-700">
                                    <div className={clsx("w-12 h-12 rounded-2xl flex shrink-0 items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110", getIconContainerStyles(item.intent))}>
                                        <Icon size={22} strokeWidth={2.5} />
                                    </div>
                                    <h4 className="text-gray-900 dark:text-white font-semibold text-lg tracking-tight leading-tight">
                                        {item.title}
                                    </h4>
                                </div>

                                <div className="flex flex-col gap-2 flex-1">
                                    {item.items.map((subItem, idx) => (
                                        <div key={idx} className="flex items-start gap-2.5">
                                            <CheckCircle2 size={16} className={clsx("mt-0.5 shrink-0 transition-colors", getBadgeStyles(item.intent).split(' ')[0])} />
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
                    viewport={{ once: true, margin: "-50px" }}
                    variants={stagger}
                    className="grid grid-cols-3 gap-4 mb-6"
                >
                    {idealPartnerData.singleSelects.map((item) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                variants={fadeInUp}
                                className={clsx(
                                    "rounded-2xl border border-gray-200/80 dark:border-gray-800/80 p-4 transition-all duration-500 flex items-center gap-3.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm hover:shadow-lg hover:shadow-gray-200/40 dark:hover:shadow-black/40 hover:-translate-y-1 group", 
                                    getCardStyles(item.intent)
                                )}
                            >
                                <div className={clsx("w-10 h-10 rounded-xl flex shrink-0 items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110", getIconContainerStyles(item.intent))}>
                                    <Icon size={18} strokeWidth={2.5} />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <span className="text-gray-400 dark:text-gray-500 text-[10px] font-semibold uppercase tracking-[0.2em] mb-0.5">
                                        {item.title}
                                    </span>
                                    <span className="text-gray-900 dark:text-white font-semibold text-sm tracking-tight">
                                        {item.value}
                                    </span>
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
                    className="w-full flex justify-center"
                >
                    <motion.div 
                        variants={fadeInUp} 
                        className="w-1/2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-6 shadow-md hover:shadow-xl transition-shadow duration-500 flex items-start gap-4 group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-gray-900 dark:bg-gray-800 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-sm">
                            <idealPartnerData.additionalExpectations.icon size={20} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div className="flex flex-col pt-0.5">
                            <h4 className="text-gray-900 dark:text-white font-semibold text-lg tracking-tight mb-1.5">
                                {idealPartnerData.additionalExpectations.title}
                            </h4>
                            <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-medium text-sm">
                                {idealPartnerData.additionalExpectations.text}
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}