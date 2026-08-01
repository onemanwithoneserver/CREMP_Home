import clsx from "clsx";
import { motion } from "framer-motion";
import { getBadgeStyles, getCardStyles, getIconContainerStyles } from "../utils/theme";
import { idealPartnerData } from "./data";
import { SectionHeader } from "../components/SectionHeader";
import { Check } from "lucide-react";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 400, damping: 30 } },
};

const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function IdealPartnerMobile() {
    return (
        <section className="w-full bg-[#fafafa] dark:bg-surface px-4 py-12">
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
                className="flex flex-col gap-5 mt-2 mb-2"
            >
                {idealPartnerData.multiSelects.map((item) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={item.title}
                            variants={fadeInUp}
                            className={clsx(
                                "rounded-lg border border-gray-100 dark:border-white/5 p-5 bg-white dark:bg-[#0b162c] shadow-[0_4px_20px_rgb(0,0,0,0.03)]", 
                                getCardStyles(item.intent)
                            )}
                        >
                            <div className="flex items-center gap-4 mb-5 pb-4 border-b border-gray-50 dark:border-white/5">
                                <div className={clsx("w-12 h-12 rounded flex shrink-0 items-center justify-center shadow-sm", getIconContainerStyles(item.intent))}>
                                    <Icon size={20} strokeWidth={2.5} />
                                </div>
                                <h4 className="text-[#0a1128] dark:text-white font-semibold text-lg tracking-tight">
                                    {item.title}
                                </h4>
                            </div>

                            <div className="flex flex-col gap-4">
                                {item.items.map((subItem, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <div className="mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-gray-50 dark:bg-white/5">
                                            <Check size={12} className={clsx(getBadgeStyles(item.intent).split(' ')[0])} />
                                        </div>
                                        <span className="text-gray-600 dark:text-gray-300 font-medium text-[15px] leading-relaxed">
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
                viewport={{ once: true }}
                variants={stagger}
                className="flex flex-col gap-4 mb-4"
            >
                {idealPartnerData.singleSelects.map((item) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={item.title}
                            variants={fadeInUp}
                            className={clsx(
                                "rounded-lg border border-gray-100 dark:border-white/5 p-3 flex items-center gap-4 bg-white dark:bg-[#0b162c] shadow-[0_2px_10px_rgb(0,0,0,0.02)]", 
                                getCardStyles(item.intent)
                            )}
                        >
                            <div className={clsx("w-12 h-12 rounded flex shrink-0 items-center justify-center shadow-sm", getIconContainerStyles(item.intent))}>
                                <Icon size={20} strokeWidth={2} />
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="text-gray-400 dark:text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">
                                    {item.title}
                                </span>
                                <span className="text-[#0a1128] dark:text-white font-semibold text-sm tracking-tight">
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
            >
                <motion.div 
                    variants={fadeInUp} 
                    className="w-full bg-[#0a1128] rounded-lg p-5 shadow-xl flex flex-col gap-4"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded bg-white/10 flex items-center justify-center shrink-0">
                            <idealPartnerData.additionalExpectations.icon size={22} className="text-white" strokeWidth={1.5} />
                        </div>
                        <h4 className="text-white font-semibold text-lg tracking-wide">
                            {idealPartnerData.additionalExpectations.title}
                        </h4>
                    </div>
                    <p className="text-gray-300 font-medium text-[15px] leading-relaxed">
                        {idealPartnerData.additionalExpectations.text}
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}
