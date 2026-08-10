import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { commercialData } from "./data";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 30 } },
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

export default function CommercialTerms() {
    const [activeTab, setActiveTab] = useState<(typeof commercialData.tabs)[number]>(commercialData.tabs[0]);
    const currentData = commercialData.tabData[activeTab as keyof typeof commercialData.tabData];

    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="w-full relative z-10 -mt-4"
        >
            <motion.div
                variants={fadeInUp}
                className="w-full bg-white/90 dark:bg-[#0b1b42]/90 backdrop-blur-xl rounded-[4px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.45)] border border-gray-200/80 dark:border-white/10 overflow-hidden"
            >
                <div className="flex items-center gap-2.5 p-4 border-b border-gray-100 dark:border-white/5">
                    <div className={`w-8 h-8 rounded-[4px] ${currentData.headerIconBg} flex items-center justify-center text-white shrink-0 shadow-md`}>
                        <currentData.headerIcon size={15} fill="currentColor" />
                    </div>
                    <h2 className="text-[1rem] font-semibold text-[#0a1128] dark:text-white tracking-tight">{currentData.title}</h2>
                </div>

                <div className="flex w-full border-b border-gray-100 dark:border-white/5 bg-gray-50/80 dark:bg-[#0e172f]/60 backdrop-blur-sm p-1.5 gap-1">
                    {commercialData.tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`relative flex-1 py-2.5 text-[0.7rem] font-bold whitespace-nowrap transition-all duration-300 rounded-[2px] z-10 uppercase tracking-wide ${
                                activeTab === tab
                                    ? "text-white"
                                    : "text-gray-500 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/5"
                            }`}
                        >
                            {activeTab === tab && (
                                <motion.div
                                    layoutId="commercialTabActive"
                                    className="absolute inset-0 bg-gradient-to-r from-[#16254c] to-[#0a1128] dark:from-[#d4af37] dark:to-[#aa8922] rounded-[2px] shadow-[0_4px_12px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_12px_rgba(212,175,55,0.2)]"
                                    transition={{ type: "spring", stiffness: 380, damping: 28, mass: 0.8 }}
                                >
                                    <div className="absolute top-0 inset-x-1 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-60" />
                                </motion.div>
                            )}
                            <span className="relative z-10">{tab}</span>
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="p-4 flex flex-col gap-5"
                    >
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col">
                                <span className="text-[0.6rem] font-bold text-gray-400 tracking-widest uppercase">{currentData.primaryAmountLabel}</span>
                                <div className="flex items-baseline gap-1 mt-1">
                                    <span className={`text-[2.4rem] font-light leading-none tracking-tight ${currentData.primaryAmountColor}`}>{currentData.primaryAmount}</span>
                                    {currentData.primaryDesc && <span className="text-[1rem] text-gray-400 font-medium">{currentData.primaryDesc}</span>}
                                </div>
                                {currentData.primarySub && <span className="text-[0.72rem] text-gray-500 dark:text-gray-400 mt-1 font-medium">{currentData.primarySub}</span>}
                            </div>

                            {'secondaryCard' in currentData && currentData.secondaryCard && (
                                <div className="border border-gray-200 dark:border-white/10 rounded-[4px] p-3 flex flex-col items-center justify-center min-w-[80px] bg-gray-50/50 dark:bg-black/20 backdrop-blur-sm">
                                    <span className="text-[0.55rem] font-bold text-gray-400 tracking-widest uppercase">{currentData.secondaryCard.label}</span>
                                    <span className="text-[1.1rem] font-semibold text-[#0a1128] dark:text-white mt-0.5 tracking-tight">{currentData.secondaryCard.value}</span>
                                    <span className="text-[0.65rem] text-gray-400">{currentData.secondaryCard.desc}</span>
                                </div>
                            )}

                            {'secondaryBadge' in currentData && currentData.secondaryBadge && (
                                <div className={`px-3 py-1.5 rounded-[2px] border text-[0.75rem] font-semibold mt-1 ${currentData.secondaryBadge.color}`}>
                                    {currentData.secondaryBadge.text}
                                </div>
                            )}

                            {'secondaryDarkCard' in currentData && currentData.secondaryDarkCard && (
                                <div className="bg-[#0a1128] border border-[#d4af37]/30 rounded-[4px] p-3 flex flex-col items-center justify-center min-w-[100px] mt-1 shadow-[0_4px_20px_rgba(212,175,55,0.1)]">
                                    <span className="text-[0.5rem] font-bold text-gray-400 tracking-widest uppercase">{currentData.secondaryDarkCard.label}</span>
                                    <span className={`text-[1.3rem] font-bold mt-0.5 tracking-tight ${currentData.secondaryDarkCard.valueColor}`}>{currentData.secondaryDarkCard.value}</span>
                                    {'desc' in currentData.secondaryDarkCard && currentData.secondaryDarkCard.desc && <span className="text-[0.6rem] text-gray-500">{currentData.secondaryDarkCard.desc}</span>}
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col gap-0 border-t border-gray-100 dark:border-white/5 pt-1">
                            {currentData.details.map((detail, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ x: 2, backgroundColor: "rgba(212,175,55,0.03)" }}
                                    className="flex items-center justify-between py-3 border-b border-gray-50 dark:border-white/[0.03] last:border-0 px-1 rounded-[2px] transition-colors cursor-default group"
                                >
                                    <div className="flex items-center gap-2.5 text-gray-500 dark:text-gray-400">
                                        <detail.icon size={14} className="group-hover:text-[#d4af37] transition-colors" />
                                        <span className="text-[0.82rem] font-medium">{detail.label}</span>
                                    </div>
                                    <span className={`text-[0.82rem] font-semibold ${'valueColor' in detail ? detail.valueColor : 'text-[#0a1128] dark:text-gray-200'}`}>{detail.value}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>

                {'footer' in currentData && currentData.footer && (
                    <div className="bg-gray-50/80 dark:bg-black/20 backdrop-blur-sm p-3 px-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                        {currentData.footer.type === "tag-text" && (
                            <>
                                <span className="px-2.5 py-1 text-[0.6rem] font-bold rounded-[2px] border border-[#D4AF37]/30 bg-[#d4af37]/5 text-[#D4AF37] tracking-widest uppercase">{currentData.footer.tag}</span>
                                <span className="text-[0.72rem] text-gray-500 dark:text-gray-400 font-medium">{currentData.footer.text}</span>
                            </>
                        )}
                        {currentData.footer.type === "split" && (
                            <>
                                <span className="text-[0.72rem] text-gray-500 dark:text-gray-400 font-medium">{currentData.footer.left}</span>
                                <span className="text-[0.72rem] text-[#0a1128] dark:text-gray-300 font-semibold">{currentData.footer.right}</span>
                            </>
                        )}
                        {currentData.footer.type === "text-only" && (
                            <span className="text-[0.68rem] text-gray-500 dark:text-gray-400 font-medium w-full text-left italic">{currentData.footer.text}</span>
                        )}
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
}
