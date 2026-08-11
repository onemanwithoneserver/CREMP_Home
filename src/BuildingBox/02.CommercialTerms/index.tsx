import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { commercialData } from "./data";
import SectionHeader from "../components/SectionHeader";
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 400, damping: 30 },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

export default function CommercialTerms() {
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
        className="w-full"
      >
        <SectionHeader
          overline="Commercial Details"
          title={currentData.title}
          icon={currentData.headerIcon}
        />

        <div className="px-4 mt-2">
          <div className="flex w-full bg-white/70 backdrop-blur-xl rounded-[4px] p-1.5 border border-gray-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative gap-1.5 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none opacity-60"></div>
            {commercialData.tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative flex-1 py-2 text-[0.62rem] font-semibold whitespace-nowrap transition-all duration-300 rounded-[4px] z-10 uppercase tracking-[0.1em] focus-visible:outline-none border ${
                  activeTab === tab
                    ? "border-transparent text-white"
                    : "bg-white/30 backdrop-blur-md border-white/40 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:bg-white/50 text-[#0a1128]"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="commercialTabActive"
                    className="absolute inset-0 bg-[#0b1b42] border border-[#d4af37]/50 rounded-[4px] shadow-[0_4px_20px_rgba(212,175,55,0.3)] backdrop-blur-md"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                      mass: 0.8,
                    }}
                  >
                    <div className="absolute top-0 inset-x-2 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-80" />
                    <div className="absolute bottom-0 inset-x-2 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-30" />
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-8 bg-[#d4af37]/20 rounded-full blur-lg pointer-events-none" />
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
            <div className="flex justify-between items-stretch gap-3">
              <div className="flex-1 bg-gradient-to-br from-gray-50 to-white border border-gray-200/60 rounded-[8px] p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#d4af37]/15 to-transparent rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700" />
                
                <span className="text-[0.55rem] font-bold text-[#d4af37] tracking-[0.18em] uppercase flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                  {currentData.primaryAmountLabel}
                </span>
                
                <div className="flex items-baseline gap-1 mt-2.5 relative z-10">
                  <span className={`text-[2.2rem] font-bold leading-none tracking-tight ${currentData.primaryAmountColor || "text-[#0a1128]"}`}>
                    {currentData.primaryAmount}
                  </span>
                  {currentData.primaryDesc && (
                    <span className="text-[0.85rem] text-gray-500 font-semibold tracking-wide ml-1">
                      {currentData.primaryDesc}
                    </span>
                  )}
                </div>
                
                {currentData.primarySub && (
                  <span className="text-[0.7rem] text-gray-500 mt-2.5 font-medium block relative z-10">
                    {currentData.primarySub}
                  </span>
                )}
              </div>

              {("secondaryDarkCard" in currentData && currentData.secondaryDarkCard) ? (
                <div className="bg-[#0b1b42] rounded-[8px] p-4 flex flex-col items-center justify-center min-w-[115px] shadow-[0_8px_25px_rgba(11,27,66,0.2)] relative overflow-hidden border border-[#d4af37]/30 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="text-[0.52rem] font-bold text-gray-400 tracking-[0.15em] uppercase text-center relative z-10">
                    {currentData.secondaryDarkCard.label}
                  </span>
                  <span className="text-[1.4rem] font-bold text-white mt-1.5 tracking-tight relative z-10">
                    {currentData.secondaryDarkCard.value}
                  </span>
                  {"desc" in currentData.secondaryDarkCard && currentData.secondaryDarkCard.desc && (
                    <span className="text-[0.6rem] text-[#d4af37] font-semibold mt-1 relative z-10 bg-[#d4af37]/10 px-2 py-0.5 rounded-full border border-[#d4af37]/20">
                      {currentData.secondaryDarkCard.desc}
                    </span>
                  )}
                </div>
              ) : null}
            </div>

            {("secondaryBadge" in currentData && currentData.secondaryBadge) && (
              <div className={`px-3.5 py-2.5 rounded-[6px] border text-[0.72rem] font-semibold shadow-sm w-full text-center ${currentData.secondaryBadge.color}`}>
                {currentData.secondaryBadge.text}
              </div>
            )}

            <div className="flex flex-col gap-2.5 mt-1">
              {currentData.details.map((detail, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.015, y: -1 }}
                  className="flex items-center justify-between p-3.5 rounded-[8px] border border-gray-100 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:border-gray-200 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3.5 text-gray-600">
                    <div className={`w-8 h-8 rounded-[6px] flex items-center justify-center text-white shrink-0 shadow-sm transition-transform duration-400 group-hover:scale-110 group-hover:rotate-3 ${"bgClass" in detail ? detail.bgClass : "bg-gradient-to-br from-gray-700 to-gray-900"}`}>
                      <detail.icon size={15} strokeWidth={2.2} />
                    </div>
                    <span className="text-[0.78rem] font-semibold tracking-wide text-gray-700 group-hover:text-[#0a1128] transition-colors">
                      {detail.label}
                    </span>
                  </div>
                  <span
                    className={`text-[0.82rem] font-bold tracking-tight ${"valueColor" in detail ? detail.valueColor : "text-[#0a1128]"}`}
                  >
                    {detail.value}
                  </span>
                </motion.div>
              ))}
            </div>

            {("footer" in currentData && currentData.footer) && (
              <div className="bg-gradient-to-r from-gray-50 to-white p-4 rounded-[8px] border border-gray-100 flex items-center justify-between mt-2 shadow-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#d4af37]" />
                
                {currentData.footer.type === "tag-text" && (
                  <div className="flex items-center gap-3 ml-2">
                    <span className="px-2.5 py-1 text-[0.55rem] font-bold rounded-[4px] bg-[#d4af37] text-white tracking-[0.15em] uppercase shadow-[0_2px_8px_rgba(212,175,55,0.4)]">
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
                    <span className="text-[0.75rem] text-[#0a1128] font-bold">
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
      </motion.div>
    </motion.div>
  );
}
