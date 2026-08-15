import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { commercialData } from "./data";
import SectionHeader from "../components/SectionHeader";
import { fadeInUp, staggerContainer } from "../components/animations";

export default function Desktop() {
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

        <div className="px-6 mt-5 mb-1 flex justify-center w-full">
          <div className="flex w-fit min-w-[300px] bg-[#0b1b42] rounded-[6px] p-1 border border-[#0b1b42]/10 relative overflow-hidden">
            {commercialData.tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative flex-1 py-2.5 px-4 text-[0.8rem] font-semibold whitespace-nowrap transition-all duration-300 rounded-[2px] z-10 focus-visible:outline-none ${
                  activeTab === tab
                    ? "text-[#0a1128]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="commercialTabActiveDesktop"
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

        <div className="px-6 py-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4 w-full"
            >
              <div className="w-full bg-white rounded-[4px] border border-gray-100 p-6 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#d4af37]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700" />

                <div className="flex justify-between items-center relative z-10 w-full">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[0.65rem] font-bold text-[#d4af37] tracking-[0.2em] uppercase flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.5)] shrink-0" />
                      {currentData.primaryAmountLabel}
                    </span>

                    {currentData.primarySub && (
                      <span className="text-[0.8rem] text-gray-500 font-medium">
                        {currentData.primarySub}
                      </span>
                    )}
                  </div>

                  <div className="flex items-baseline gap-1.5 text-right flex-wrap justify-end pl-2">
                    <span
                      className={`text-[2.5rem] font-bold leading-tight tracking-tight pr-1 ${currentData.primaryAmountColor || "text-[#0a1128]"}`}
                    >
                      {currentData.primaryAmount}
                    </span>
                    {currentData.primaryDesc && (
                      <span className="text-[0.95rem] text-gray-500 font-medium tracking-wide">
                        {currentData.primaryDesc}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {currentData.details.map((detail, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="flex-1 min-w-[200px] basis-[calc(33.333%-0.5rem)] flex flex-col gap-3 p-4 rounded-[4px] bg-gray-50/50 border border-transparent hover:border-gray-100 hover:bg-white hover:shadow-sm transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-2.5 text-gray-600">
                      <div className="relative w-8 h-8 rounded-[4px] flex items-center justify-center text-white shrink-0 shadow-sm overflow-hidden">
                        <motion.div
                          whileHover={{
                            scale: 1.15,
                            rotate: [0, -5, 5, 0],
                          }}
                          transition={{ duration: 0.3 }}
                          className={`absolute inset-0 ${"bgClass" in detail ? detail.bgClass : "bg-[#0a1128]"}`}
                        />
                        <detail.icon
                          size={15}
                          strokeWidth={2}
                          className="relative z-10 pointer-events-none"
                        />
                      </div>
                      <span className="text-[0.75rem] font-semibold text-gray-500 group-hover:text-[#0a1128] transition-colors">
                        {detail.label}
                      </span>
                    </div>
                    <span
                      className={`text-[1rem] font-semibold tracking-tight leading-snug ${"valueColor" in detail ? detail.valueColor : "text-[#0a1128]"}`}
                    >
                      {detail.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}
