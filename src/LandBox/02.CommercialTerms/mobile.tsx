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
      viewport={{ once: true, margin: "-60px" }}
      variants={staggerContainer}
      className="w-full relative z-10"
    >
      <motion.div
        variants={fadeInUp}
        className="w-full bg-white border-b border-gray-100 relative pb-6"
      >
        <SectionHeader
          overline="Commercial Details"
          title={currentData.title}
          icon={currentData.headerIcon}
        />

        <div className="px-5 mt-4">
          <div className="flex w-full bg-[#0b1b42] rounded-[4px] p-1 border border-[#0b1b42]/10 relative overflow-x-auto scrollbar-hide">
            {commercialData.tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative flex-1 py-2.5 px-4 text-[0.75rem] font-semibold whitespace-nowrap transition-all duration-300 rounded-[2px] z-10 focus-visible:outline-none min-w-max ${
                  activeTab === tab
                    ? "text-[#0a1128]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="commercialTabActiveMobile"
                    className="absolute inset-0 bg-white rounded-[2px] shadow-sm border border-white/20"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="px-5 py-5 flex flex-col gap-4"
          >
            <div className="flex-1 bg-white rounded-[4px] border border-gray-100 p-4 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#d4af37]/10 to-transparent rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700" />

              <div className="flex justify-between items-center relative z-10 w-full">
                <div className="flex flex-col gap-1.5">
                  <span className="text-[0.6rem] font-semibold text-[#d4af37] tracking-[0.18em] uppercase flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.4)] shrink-0" />
                    {currentData.primaryAmountLabel}
                  </span>

                  {currentData.primarySub && (
                    <span className="text-[0.75rem] text-gray-500 font-medium ml-3">
                      {currentData.primarySub}
                    </span>
                  )}
                </div>

                <div className="flex flex-col items-end gap-0.5 text-right flex-wrap pl-2">
                  <span
                    className={`text-[1.8rem] sm:text-[2rem] font-semibold leading-tight tracking-tight pr-1 ${currentData.primaryAmountColor || "text-[#0a1128]"}`}
                  >
                    {currentData.primaryAmount}
                  </span>
                  {currentData.primaryDesc && (
                    <span className="text-[0.85rem] text-gray-500 font-medium tracking-wide">
                      {currentData.primaryDesc}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              {currentData.details.map((detail, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.01 }}
                  className="flex items-center justify-between gap-3 p-3.5 rounded-[4px] bg-gray-50/50 border border-transparent hover:border-gray-100 hover:bg-white hover:shadow-sm transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3.5 text-gray-600 shrink-0">
                    <div className="relative w-8 h-8 rounded-[4px] flex items-center justify-center text-white shrink-0 shadow-sm overflow-hidden">
                      <motion.div
                        className={`absolute inset-0 ${"bgClass" in detail ? detail.bgClass : "bg-[#0a1128]"}`}
                      />
                      <detail.icon
                        size={15}
                        strokeWidth={2}
                        className="relative z-10 pointer-events-none"
                      />
                    </div>
                    <span className="text-[0.8rem] font-semibold text-gray-600 group-hover:text-[#0a1128] transition-colors">
                      {detail.label}
                    </span>
                  </div>
                  <span
                    className={`text-[0.85rem] font-semibold tracking-tight text-right leading-snug ${"valueColor" in detail ? detail.valueColor : "text-[#0a1128]"}`}
                  >
                    {detail.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
