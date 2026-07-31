import clsx from "clsx";
import { motion } from "framer-motion";
import { getBadgeStyles, getCardStyles, getIconContainerStyles } from "../utils/theme";
import { idealPartnerData } from "./data";
import { SectionHeader } from "../components/SectionHeader";
import { CheckCircle2 } from "lucide-react";

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
        <section className="w-full bg-[#FAFAFA] px-6 py-12">
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
                    {idealPartnerData.multiSelects.map((item) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                variants={fadeInUp}
                                className={clsx("rounded-2xl border p-6 transition-all duration-300 flex flex-col bg-white shadow-sm hover:shadow-md hover:-translate-y-1", getCardStyles(item.intent))}
                            >
                                <div className="flex items-center gap-4 mb-5 pb-4 border-b border-gray-100 dark:border-gray-800">
                                    <div className={clsx("w-12 h-12 rounded-full flex shrink-0 items-center justify-center shadow-sm", getIconContainerStyles(item.intent))}>
                                        <Icon size={20} strokeWidth={2} />
                                    </div>
                                    <h4 className="text-[#0a1128] dark:text-white font-extrabold text-lg tracking-tight leading-tight">{item.title}</h4>
                                </div>

                                <div className="flex flex-col gap-3 flex-1">
                                    {item.items.map((subItem, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <CheckCircle2 size={16} className={clsx("mt-0.5 shrink-0", getBadgeStyles(item.intent).split(' ')[0])} />
                                            <span className="text-gray-700 dark:text-gray-300 font-semibold">{subItem}</span>
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
                    viewport={{ once: true }}
                    variants={stagger}
                    className="grid grid-cols-3 gap-6 mb-6"
                >
                    {idealPartnerData.singleSelects.map((item) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                variants={fadeInUp}
                                className={clsx("rounded-2xl border p-5 transition-all duration-300 flex items-center gap-4 bg-white shadow-sm hover:shadow-md hover:-translate-y-1", getCardStyles(item.intent))}
                            >
                                <div className={clsx("w-10 h-10 rounded-full flex shrink-0 items-center justify-center shadow-sm", getIconContainerStyles(item.intent))}>
                                    <Icon size={16} strokeWidth={2} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-gray-400 dark:text-gray-500 text-[11px] font-bold uppercase tracking-widest mb-1">{item.title}</span>
                                    <span className="text-[#0b1b42] dark:text-white font-black text-base">{item.value}</span>
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
                    <motion.div variants={fadeInUp} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                            <idealPartnerData.additionalExpectations.icon size={20} className="text-slate-600 dark:text-slate-300" />
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-[#0a1128] dark:text-white font-extrabold text-lg tracking-tight mb-2">{idealPartnerData.additionalExpectations.title}</h4>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                                {idealPartnerData.additionalExpectations.text}
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
