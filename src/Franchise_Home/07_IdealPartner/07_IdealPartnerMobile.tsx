import clsx from "clsx";
import { motion } from "framer-motion";
import { getBadgeStyles, getCardStyles, getIconContainerStyles } from "../utils/theme";
import { idealPartnerData } from "./data";
import { SectionHeader } from "../components/SectionHeader";
import { CheckCircle2 } from "lucide-react";

export default function IdealPartnerMobile() {
    return (
        <section className="w-full bg-[#FAFAFA] px-4 py-8">
            <SectionHeader 
                overline={idealPartnerData.sectionLabel}
                title={idealPartnerData.title}
                subtitle={idealPartnerData.subtitle}
                align="center"
            />

            <div className="flex flex-col gap-4 mb-4">
                {idealPartnerData.multiSelects.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={clsx("rounded-2xl border p-5 flex flex-col bg-white shadow-sm", getCardStyles(item.intent))}
                        >
                            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100 dark:border-gray-800">
                                <div className={clsx("w-10 h-10 rounded-full flex shrink-0 items-center justify-center shadow-sm", getIconContainerStyles(item.intent))}>
                                    <Icon size={18} strokeWidth={2} />
                                </div>
                                <h4 className="text-[#0a1128] dark:text-white font-extrabold text-[15px] leading-tight">{item.title}</h4>
                            </div>

                            <div className="flex flex-col gap-2.5">
                                {item.items.map((subItem, i) => (
                                    <div key={i} className="flex items-start gap-2.5">
                                        <CheckCircle2 size={16} className={clsx("mt-0.5 shrink-0", getBadgeStyles(item.intent).split(' ')[0])} />
                                        <span className="text-gray-700 dark:text-gray-300 font-semibold text-[13px]">{subItem}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <div className="flex flex-col gap-3 mb-4">
                {idealPartnerData.singleSelects.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={clsx("rounded-xl border p-4 flex items-center justify-between gap-4 bg-white shadow-sm", getCardStyles(item.intent))}
                        >
                            <div className="flex flex-col">
                                <span className="text-gray-400 dark:text-gray-500 text-[10px] font-extrabold uppercase tracking-widest mb-1">{item.title}</span>
                                <span className="text-[#0b1b42] dark:text-white font-black text-sm">{item.value}</span>
                            </div>
                            <div className={clsx("w-10 h-10 rounded-full flex shrink-0 items-center justify-center shadow-sm", getIconContainerStyles(item.intent))}>
                                <Icon size={16} strokeWidth={2} />
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 shadow-sm flex flex-col gap-3"
            >
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                        <idealPartnerData.additionalExpectations.icon size={16} className="text-slate-600 dark:text-slate-300" />
                    </div>
                    <h4 className="text-[#0a1128] dark:text-white font-extrabold text-[15px]">{idealPartnerData.additionalExpectations.title}</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium text-[13px]">
                    {idealPartnerData.additionalExpectations.text}
                </p>
            </motion.div>
        </section>
    );
}
