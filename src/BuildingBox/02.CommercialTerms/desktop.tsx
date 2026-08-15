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
        className="w-full bg-white border-b border-gray-200/60 relative"
      >
        <SectionHeader
          overline="Commercial Details"
          title={currentData.title}
          icon={currentData.headerIcon}
        />

        <div className="flex px-4 py-4 gap-4 items-start w-full">
          <div className="flex flex-col w-[30%] min-w-[120px] bg-slate-50/50 backdrop-blur-2xl rounded-[4px] p-1 border border-gray-200/60 shadow-sm relative gap-1 shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/20 pointer-events-none rounded-[4px]"></div>
            {commercialData.tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative w-full py-2.5 px-3 text-left text-[0.7rem] font-semibold transition-all duration-300 rounded-[2px] z-10 focus-visible:outline-none ${
                  activeTab === tab
                    ? "text-white"
                    : "text-[#0a1128] hover:bg-white/80 border-b border-gray-100 last:border-b-0"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="commercialTabActive_buildingbox"
                    className="absolute inset-0 bg-gradient-to-r from-[#1c2e64] to-[#0b1b42] rounded-[2px] shadow-sm"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                      mass: 0.8,
                    }}
                  />
                )}
                <span className="relative z-10 block">{tab}</span>
              </button>
            ))}
          </div>

          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-4 w-full"
              >
                <div className="flex justify-between items-stretch gap-2">
                  <div className="flex-1 bg-gradient-to-br from-gray-50 to-white border border-gray-200/60 rounded-[4px] p-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#d4af37]/15 to-transparent rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700" />

                    <div className="flex flex-col relative z-10 gap-1.5 w-full">
                      <div className="flex justify-between items-start w-full">
                        <span className="text-[0.55rem] font-semibold text-[#d4af37] tracking-[0.18em] flex items-center gap-1.5 pt-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.6)] shrink-0" />
                          {currentData.primaryAmountLabel}
                        </span>

                        {"secondaryBadge" in currentData &&
                          currentData.secondaryBadge && (
                            <div
                              className={`px-2 py-1 rounded-[4px] border text-[0.6rem] font-semibold tracking-wider shadow-sm ${currentData.secondaryBadge.color}`}
                            >
                              {currentData.secondaryBadge.text}
                            </div>
                          )}
                      </div>

                      {currentData.primarySub && (
                        <span className="text-[0.72rem] text-gray-500 font-medium ml-3 mt-1">
                          {currentData.primarySub}
                        </span>
                      )}

                      <div className="flex items-baseline gap-1 mt-0.5 ml-3">
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

                  {"secondaryDarkCard" in currentData &&
                  currentData.secondaryDarkCard ? (
                    <div className="bg-[#0b1b42] rounded-[4px] p-3 flex flex-col items-center justify-center min-w-[95px] shadow-[0_8px_25px_rgba(11,27,66,0.2)] relative overflow-hidden border border-[#d4af37]/30 group shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="text-[0.5rem] font-semibold text-gray-400 tracking-[0.15em] text-center relative z-10">
                        {currentData.secondaryDarkCard.label}
                      </span>
                      <span className="text-[1.2rem] font-semibold text-white mt-1 tracking-tight relative z-10">
                        {currentData.secondaryDarkCard.value}
                      </span>
                      {"desc" in currentData.secondaryDarkCard &&
                        currentData.secondaryDarkCard.desc && (
                          <span className="text-[0.6rem] text-[#d4af37] font-semibold mt-1 relative z-10 bg-[#d4af37]/10 px-2 py-0.5 rounded-full border border-[#d4af37]/20">
                            {currentData.secondaryDarkCard.desc}
                          </span>
                        )}
                    </div>
                  ) : null}
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
                            whileHover={{
                              scale: 1.15,
                              rotate: [0, -10, 10, 0],
                            }}
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

                {"footer" in currentData && currentData.footer && (
                  <div className="bg-gradient-to-r from-gray-50 to-white p-4 rounded-[8px] border border-gray-100 flex items-center justify-between mt-2 shadow-sm relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#d4af37]" />

                    {currentData.footer.type === "tag-text" && (
                      <div className="flex items-center gap-3 ml-2">
                        <span className="px-2.5 py-1 text-[0.55rem] font-semibold rounded-[4px] bg-[#d4af37] text-white tracking-[0.15em] shadow-[0_2px_8px_rgba(212,175,55,0.4)]">
                          {currentData.footer.tag}
                        </span>
                        <span className="text-[0.72rem] text-gray-600 font-medium italic">
                          {currentData.footer.text}
                        </span>
                      </div>
                    )}
                    {currentData.footer.type === "split" && (
                      <div className="flex justify-between w-full ml-2">
                        <span className="text-[0.72rem] text-gray-600 font-medium">
                          {currentData.footer.left}
                        </span>
                        <span className="text-[0.75rem] text-[#0a1128] font-semibold">
                          {currentData.footer.right}
                        </span>
                      </div>
                    )}
                    {currentData.footer.type === "text-only" && (
                      <span className="text-[0.72rem] text-gray-600 font-medium italic w-full text-left ml-2">
                        {currentData.footer.text}
                      </span>
                    )}
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
