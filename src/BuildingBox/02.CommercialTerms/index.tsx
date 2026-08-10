import { useState } from "react";
import { motion } from "framer-motion";
import { commercialData } from "./data";
import { Container } from "../../components/layout";

export default function CommercialTerms() {
    const [activeTab, setActiveTab] = useState<(typeof commercialData.tabs)[number]>(commercialData.tabs[0]);

    // Ensure we always have a valid tab data object
    const currentData = commercialData.tabData[activeTab as keyof typeof commercialData.tabData];

    return (
        <div className="w-full py-4 bg-transparent relative z-10 -mt-4">
            <Container>
                <div className="w-full bg-white dark:bg-[#11224d] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] border border-gray-100 dark:border-white/10 overflow-hidden">
                    <div className="flex items-center gap-2 p-4 border-b border-gray-100 dark:border-white/5">
                        <div className={`w-8 h-8 rounded-lg ${currentData.headerIconBg} flex items-center justify-center text-white shrink-0`}>
                            <currentData.headerIcon size={16} fill="currentColor" />
                        </div>
                        <h2 className="text-[1.05rem] font-medium text-gray-800 dark:text-gray-100">{currentData.title}</h2>
                    </div>

                    <div className="flex w-full border-b border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-black/20 overflow-x-auto scrollbar-hide">
                        {commercialData.tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`relative px-4 py-3 text-[0.8rem] font-medium whitespace-nowrap transition-colors ${
                                    activeTab === tab 
                                        ? "text-gray-900 dark:text-white" 
                                        : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                                }`}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <motion.div
                                        layoutId="activeTabIndicator"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37]"
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="p-4 flex flex-col gap-5">
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col">
                                <span className="text-[0.65rem] font-bold text-gray-400 tracking-widest uppercase">{currentData.primaryAmountLabel}</span>
                                <div className="flex items-baseline gap-1 mt-1">
                                    <span className={`text-[2.5rem] font-light leading-none ${currentData.primaryAmountColor}`}>{currentData.primaryAmount}</span>
                                    {currentData.primaryDesc && <span className="text-[1.1rem] text-gray-400 font-medium">{currentData.primaryDesc}</span>}
                                </div>
                                {currentData.primarySub && <span className="text-[0.75rem] text-gray-500 dark:text-gray-400 mt-1">{currentData.primarySub}</span>}
                            </div>
                            
                            {/* Secondary right-side component based on currentData */}
                            {'secondaryCard' in currentData && currentData.secondaryCard && (
                                <div className="border border-gray-200 dark:border-white/10 rounded-2xl p-3 flex flex-col items-center justify-center min-w-[80px]">
                                    <span className="text-[0.6rem] font-bold text-gray-400 tracking-widest uppercase">{currentData.secondaryCard.label}</span>
                                    <span className="text-[1.1rem] font-medium text-gray-900 dark:text-white mt-0.5">{currentData.secondaryCard.value}</span>
                                    <span className="text-[0.7rem] text-gray-400">{currentData.secondaryCard.desc}</span>
                                </div>
                            )}

                            {'secondaryBadge' in currentData && currentData.secondaryBadge && (
                                <div className={`px-3 py-1.5 rounded-lg border text-[0.8rem] font-medium mt-1 ${currentData.secondaryBadge.color}`}>
                                    {currentData.secondaryBadge.text}
                                </div>
                            )}

                            {'secondaryDarkCard' in currentData && currentData.secondaryDarkCard && (
                                <div className="bg-[#0a1128] border border-white/10 rounded-xl p-3 flex flex-col items-center justify-center min-w-[100px] mt-1 shadow-lg">
                                    <span className="text-[0.55rem] font-bold text-gray-400 tracking-widest uppercase">{currentData.secondaryDarkCard.label}</span>
                                    <span className={`text-[1.3rem] font-semibold mt-0.5 ${currentData.secondaryDarkCard.valueColor}`}>{currentData.secondaryDarkCard.value}</span>
                                    {'desc' in currentData.secondaryDarkCard && currentData.secondaryDarkCard.desc && <span className="text-[0.65rem] text-gray-500">{currentData.secondaryDarkCard.desc}</span>}
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col gap-3 pt-2">
                            {currentData.details.map((detail, idx) => (
                                <div key={idx} className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                                        <detail.icon size={14} />
                                        <span className="text-[0.85rem] font-medium">{detail.label}</span>
                                    </div>
                                    <span className={`text-[0.85rem] font-medium ${'valueColor' in detail ? detail.valueColor : 'text-gray-800 dark:text-gray-200'}`}>{detail.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {'footer' in currentData && currentData.footer && (
                        <div className="bg-gray-50 dark:bg-black/20 p-3 px-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                            {currentData.footer.type === "tag-text" && (
                                <>
                                    <span className="px-2.5 py-1 text-[0.65rem] font-bold rounded-full border border-[#D4AF37] text-[#D4AF37]">{currentData.footer.tag}</span>
                                    <span className="text-[0.75rem] text-gray-500 dark:text-gray-400 font-medium">{currentData.footer.text}</span>
                                </>
                            )}
                            {currentData.footer.type === "split" && (
                                <>
                                    <span className="text-[0.75rem] text-gray-500 dark:text-gray-400 font-medium">{currentData.footer.left}</span>
                                    <span className="text-[0.75rem] text-gray-800 dark:text-gray-300 font-medium">{currentData.footer.right}</span>
                                </>
                            )}
                            {currentData.footer.type === "text-only" && (
                                <span className="text-[0.7rem] text-gray-500 dark:text-gray-400 font-medium w-full text-left">{currentData.footer.text}</span>
                            )}
                        </div>
                    )}
                </div>
            </Container>
        </div>
    );
}
