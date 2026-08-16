import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { commercialData } from "./data";
import SectionHeader from "../components/SectionHeader";
import { fadeInUp, staggerContainer } from "../components/animations";

export default function Mobile() {
  const [activeTab, setActiveTab] = useState<
    (typeof commercialData.tabs)[number]
  >(commercialData.tabs[0]);
  const currentData =
    commercialData.tabData[activeTab as keyof typeof commercialData.tabData];

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      variants={staggerContainer}
      className="w-full relative z-10"
    >
      <motion.div
        variants={fadeInUp}
        className="w-full bg-white border-b border-gray-200/60 relative pb-4"
      >
        <SectionHeader
          overline="Commercial Listing Specifications"
          title={currentData.title}
          icon={currentData.headerIcon}
        />

        <div className="px-3 mt-3 mb-1 flex justify-center w-full">
          <div className="flex gap-1 bg-white/70 backdrop-blur-xl rounded-[4px] p-1 shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative overflow-x-auto scrollbar-hide w-full">
            {commercialData.tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 min-w-[70px] relative flex flex-col items-center justify-center py-2 px-1.5 rounded-[4px] transition-all duration-300 z-10 group focus-visible:outline-none border ${
                  activeTab === tab
                    ? "border-transparent"
                    : "bg-white/30 backdrop-blur-md border-white/40 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:bg-white/50"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="allCommercialTabActiveMobile"
                    className="absolute inset-0 bg-[#0b1b42] border border-[#d4af37]/50 rounded-[4px] shadow-[0_4px_20px_rgba(212,175,55,0.3)] backdrop-blur-md"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 28,
                    }}
                  >
                    <div className="absolute top-0 inset-x-2 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-80" />
                    <div className="absolute bottom-0 inset-x-2 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-30" />
                  </motion.div>
                )}

                <span
                  className={`relative z-10 font-semibold text-[0.68rem] tracking-tight whitespace-nowrap transition-colors duration-300 ${
                    activeTab === tab ? "text-white" : "text-[#0a1128]"
                  }`}
                >
                  {tab}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="px-3 py-3 w-full">
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-3 w-full"
              >
                <div className="flex flex-col gap-2">
                  <div className="w-full bg-gradient-to-br from-gray-50 to-white rounded-[4px] p-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative overflow-hidden">
                    <div className="flex justify-between items-start w-full">
                      <span className="text-[0.55rem] font-semibold text-[#d4af37] tracking-[0.18em] flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.6)] shrink-0" />
                        {currentData.primaryAmountLabel}
                      </span>

                      {"secondaryBadge" in currentData &&
                        currentData.secondaryBadge && (
                          <div
                            className={`px-2 py-0.5 rounded-[4px] border text-[0.58rem] font-semibold tracking-wider shadow-sm ${currentData.secondaryBadge.color}`}
                          >
                            {currentData.secondaryBadge.text}
                          </div>
                        )}
                    </div>

                    <div className="flex items-baseline gap-1 mt-1">
                      <span
                        className={`text-lg font-bold tracking-tight ${currentData.primaryAmountColor}`}
                      >
                        {currentData.primaryAmount}
                      </span>
                      {currentData.primaryDesc && (
                        <span className="text-gray-400 font-semibold text-xs">
                          {currentData.primaryDesc}
                        </span>
                      )}
                    </div>

                    {currentData.primarySub && (
                      <span className="text-[0.62rem] text-gray-500 font-semibold tracking-wide">
                        {currentData.primarySub}
                      </span>
                    )}
                  </div>

                  {"secondaryDarkCard" in currentData &&
                    currentData.secondaryDarkCard && (
                      <div className="w-full bg-gradient-to-br from-[#0b1b42] to-[#040817] text-white rounded-[4px] p-3 flex justify-between items-center shadow-[0_8px_24px_rgba(11,27,66,0.15)] border border-[#d4af37]/30">
                        <div className="flex flex-col">
                          <div className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                            <span className="text-[0.55rem] font-bold text-[#d4af37] tracking-[0.18em]">
                              {currentData.secondaryDarkCard.label}
                            </span>
                          </div>
                          <span className="text-sm font-bold text-white tracking-tight mt-0.5">
                            {currentData.secondaryDarkCard.value}
                          </span>
                        </div>
                        {"desc" in currentData.secondaryDarkCard &&
                          Boolean(currentData.secondaryDarkCard.desc) && (
                            <span className="text-[0.6rem] text-gray-300 font-medium">
                              {currentData.secondaryDarkCard.desc}
                            </span>
                          )}
                      </div>
                    )}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {currentData.details.map((detail, idx) => {
                    const Icon = detail.icon;
                    return (
                      <motion.div
                        key={idx}
                        variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                        className="flex items-center gap-2 p-2.5 rounded-[4px] bg-gray-50/50 border border-transparent hover:border-gray-100 hover:bg-white hover:shadow-sm transition-all duration-300"
                      >
                        <div
                          className={`w-7 h-7 rounded-[4px] flex items-center justify-center text-white shrink-0 shadow-sm ${detail.bgClass}`}
                        >
                          <Icon size={14} strokeWidth={2} />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-[0.55rem] font-bold uppercase tracking-wider text-gray-400 truncate">
                            {detail.label}
                          </span>
                          <span
                            className={`text-[0.68rem] font-bold text-[#0a1128] truncate mt-0.5 ${"valueColor" in detail ? (detail as { valueColor?: string }).valueColor : ""}`}
                          >
                            {detail.value}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {currentData.footer && (
                  <div className="mt-1 p-2 bg-gray-50/80 rounded-[4px] shadow-sm text-[0.62rem] text-gray-600 flex items-center justify-between">
                    {"left" in currentData.footer && (
                      <span className="font-bold text-[#0b1b42] uppercase tracking-wider text-[0.58rem]">
                        {currentData.footer.left}:
                      </span>
                    )}
                    <span className="font-medium text-gray-600 truncate ml-1">
                      {"right" in currentData.footer
                        ? currentData.footer.right
                        : "text" in currentData.footer
                          ? currentData.footer.text
                          : ""}
                    </span>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
