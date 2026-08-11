import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { commercialData } from "./data";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 24 },
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
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="w-full relative z-10"
        >
            <motion.div
                variants={fadeInUp}
                className="w-full bg-white overflow-hidden border-b border-gray-200/60"
            >
                {/* Section header */}
                <div className="flex items-center gap-3 p-3 border-b border-gray-100/80">
                    <div className={`w-9 h-9 rounded-xl ${currentData.headerIconBg} flex items-center justify-center text-white shrink-0 shadow-lg`}>
                        <currentData.headerIcon size={16} fill="currentColor" />
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-[1.05rem] font-bold text-[#0a1128] tracking-tight leading-tight">{currentData.title}</h2>
                        <span className="text-[0.65rem] text-gray-400 font-medium">Commercial Details</span>
                    </div>
                </div>

                {/* Tab bar */}
                <div className="flex w-full border-b border-gray-100/80 bg-gray-50/60 backdrop-blur-sm p-1.5 gap-1">
                    {commercialData.tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`relative flex-1 py-2.5 text-[0.68rem] font-bold whitespace-nowrap transition-all duration-300 rounded-lg z-10 uppercase tracking-wide ${
                                activeTab === tab
                                    ? "text-white"
                                    : "text-gray-400 hover:text-gray-600 hover:bg-black/[0.03]"
                            }`}
                        >
                            {activeTab === tab && (
                                <motion.div
                                    layoutId="commercialTabActive"
                                    className="absolute inset-0 bg-gradient-to-r from-[#0b1b42] to-[#0a1128] rounded-lg shadow-[0_4px_14px_rgba(10,17,40,0.2)]"
                                    transition={{ type: "spring", stiffness: 400, damping: 30, mass: 0.8 }}
                                >
                                    <div className="absolute top-0 inset-x-2 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />
                                </motion.div>
                            )}
                            <span className="relative z-10">{tab}</span>
                        </button>
                    ))}
                </div>

                {/* Tab content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="p-3 flex flex-col gap-3"
                    >
                        {/* Primary amount + secondary card */}
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col">
                                <span className="text-[0.58rem] font-bold text-gray-400 tracking-[0.15em] uppercase">{currentData.primaryAmountLabel}</span>
                                <div className="flex items-baseline gap-1.5 mt-1.5">
                                    <span className={`text-[2.2rem] font-light leading-none tracking-tight ${currentData.primaryAmountColor}`}>{currentData.primaryAmount}</span>
                                    {currentData.primaryDesc && <span className="text-[0.95rem] text-gray-400 font-medium">{currentData.primaryDesc}</span>}
                                </div>
                                {currentData.primarySub && <span className="text-[0.72rem] text-gray-500 mt-1.5 font-medium">{currentData.primarySub}</span>}
                            </div>

                            {'secondaryCard' in currentData && currentData.secondaryCard && (
                                <div className="flex flex-col items-end justify-center min-w-[85px]">
                                    <span className="text-[0.52rem] font-bold text-gray-400 tracking-[0.15em] uppercase">{currentData.secondaryCard.label}</span>
                                    <span className="text-[1.15rem] font-bold text-[#0a1128] mt-0.5 tracking-tight">{currentData.secondaryCard.value}</span>
                                    <span className="text-[0.62rem] text-gray-400 font-medium">{currentData.secondaryCard.desc}</span>
                                </div>
                            )}

                            {'secondaryBadge' in currentData && currentData.secondaryBadge && (
                                <div className={`px-3.5 py-2 rounded-lg border text-[0.72rem] font-semibold mt-1 ${currentData.secondaryBadge.color}`}>
                                    {currentData.secondaryBadge.text}
                                </div>
                            )}

                            {'secondaryDarkCard' in currentData && currentData.secondaryDarkCard && (
                                <div className="bg-[#0a1128] border border-[#d4af37]/25 rounded-xl p-3.5 flex flex-col items-center justify-center min-w-[105px] mt-1 shadow-[0_4px_20px_rgba(10,17,40,0.15)]">
                                    <span className="text-[0.48rem] font-bold text-gray-400 tracking-[0.15em] uppercase">{currentData.secondaryDarkCard.label}</span>
                                    <span className={`text-[1.3rem] font-bold mt-0.5 tracking-tight ${currentData.secondaryDarkCard.valueColor}`}>{currentData.secondaryDarkCard.value}</span>
                                    {'desc' in currentData.secondaryDarkCard && currentData.secondaryDarkCard.desc && <span className="text-[0.58rem] text-gray-500 font-medium">{currentData.secondaryDarkCard.desc}</span>}
                                </div>
                            )}
                        </div>

                        {/* Detail rows */}
                        <div className="flex flex-col gap-0 border-t border-gray-100/80 pt-1">
                            {currentData.details.map((detail, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ x: 3 }}
                                    className="flex items-center justify-between py-3.5 border-b border-gray-50 last:border-0 px-1 rounded-lg transition-all duration-300 cursor-default group hover:bg-[#d4af37]/[0.03]"
                                >
                                    <div className="flex items-center gap-3 text-gray-500">
                                        <div className="w-7 h-7 flex items-center justify-center transition-all duration-300">
                                            <detail.icon size={15} className="group-hover:text-[#d4af37] transition-colors duration-300" />
                                        </div>
                                        <span className="text-[0.82rem] font-medium">{detail.label}</span>
                                    </div>
                                    <span className={`text-[0.82rem] font-semibold ${'valueColor' in detail ? detail.valueColor : 'text-[#0a1128]'}`}>{detail.value}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Footer */}
                {'footer' in currentData && currentData.footer && (
                    <div className="bg-gray-50/60 backdrop-blur-sm p-3 px-4 border-t border-gray-100/80 flex items-center justify-between">
                        {currentData.footer.type === "tag-text" && (
                            <>
                                <span className="px-2.5 py-1 text-[0.58rem] font-bold rounded-lg border border-[#D4AF37]/25 bg-[#d4af37]/[0.06] text-[#D4AF37] tracking-[0.12em] uppercase">{currentData.footer.tag}</span>
                                <span className="text-[0.72rem] text-gray-500 font-medium">{currentData.footer.text}</span>
                            </>
                        )}
                        {currentData.footer.type === "split" && (
                            <>
                                <span className="text-[0.72rem] text-gray-500 font-medium">{currentData.footer.left}</span>
                                <span className="text-[0.72rem] text-[#0a1128] font-semibold">{currentData.footer.right}</span>
                            </>
                        )}
                        {currentData.footer.type === "text-only" && (
                            <span className="text-[0.68rem] text-gray-500 font-medium w-full text-left italic">{currentData.footer.text}</span>
                        )}
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
}
