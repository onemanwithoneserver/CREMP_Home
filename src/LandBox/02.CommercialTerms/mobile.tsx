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
        className="w-full bg-white border-b border-gray-200/60 relative"
      >
        <SectionHeader
          overline="Commercial Details"
          title={currentData.title}
          icon={currentData.headerIcon}
        />

        <div className="px-4 mt-3">
          <div className="flex w-[85%] mx-auto bg-slate-50/50 backdrop-blur-2xl rounded-[2px] p-0 border border-white shadow-[0_4px_24px_rgba(0,0,0,0.06),inset_0_1px_3px_rgba(255,255,255,0.8)] relative gap-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/20 pointer-events-none"></div>
            {commercialData.tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative flex-1 py-2 text-[0.68rem] font-semibold whitespace-nowrap transition-all duration-300 rounded-[2px] z-10 focus-visible:outline-none ${
                  activeTab === tab
                    ? "text-white"
                    : "bg-white/80 hover:bg-white text-[#0a1128] border-r border-gray-200/50 last:border-r-0"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="commercialTabActive"
                    className="absolute inset-0 bg-gradient-to-b from-[#1c2e64] to-[#0b1b42] rounded-[2px] shadow-[0_4px_16px_rgba(11,27,66,0.3),inset_0_1px_2px_rgba(255,255,255,0.3)] ring-1 ring-[#0b1b42]/50"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                      mass: 0.8,
                    }}
                  >
                    <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/15 to-transparent rounded-t-[2px] pointer-events-none" />
                  </motion.div>
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
            className="px-4 py-4 flex flex-col gap-4"
          >
            <div className="flex justify-between items-stretch gap-2">
              <div className="flex-1 bg-gradient-to-br from-gray-50 to-white  rounded-[4px] p-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#d4af37]/15 to-transparent rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700" />

                <div className="flex justify-between items-center relative z-10 w-full">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[0.55rem] font-semibold text-[#d4af37] tracking-[0.18em] flex items-center gap-1.5 pt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.6)] shrink-0" />
                      {currentData.primaryAmountLabel}
                    </span>

                    {currentData.primarySub && (
                      <span className="text-[0.72rem] text-gray-500 font-medium ml-3">
                        {currentData.primarySub}
                      </span>
                    )}
                  </div>

                  <div className="flex items-baseline gap-1 mt-0.5 text-right">
                    <span
                      className={`text-[2.2rem] font-semibold leading-none tracking-tight ${currentData.primaryAmountColor || "text-[#0a1128]"}`}
                    >
                      {currentData.primaryAmount}
                    </span>
                    {currentData.primaryDesc && (
                      <span className="text-[0.85rem] text-gray-500 font-semibold tracking-wide ml-0.5">
                        {currentData.primaryDesc}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2.5 mt-1">
              {currentData.details.map((detail, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.015, y: -1 }}
                  className="flex items-center justify-between p-3.5 rounded-[8px] border border-gray-100 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:border-gray-200 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3.5 text-gray-600">
                    <div className="relative w-8 h-8 rounded-[6px] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.3 }}
                        className={`absolute inset-0 rounded-[6px] ${"bgClass" in detail ? detail.bgClass : "bg-gradient-to-br from-gray-700 to-gray-900"}`}
                      />
                      <detail.icon
                        size={15}
                        strokeWidth={2.2}
                        className="relative z-10 pointer-events-none"
                      />
                    </div>
                    <span className="text-[0.78rem] font-semibold tracking-wide text-gray-700 group-hover:text-[#0a1128] transition-colors">
                      {detail.label}
                    </span>
                  </div>
                  <span
                    className={`text-[0.82rem] font-semibold tracking-tight ${"valueColor" in detail ? detail.valueColor : "text-[#0a1128]"}`}
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
