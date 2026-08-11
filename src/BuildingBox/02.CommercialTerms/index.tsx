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
                className={`relative flex-1 py-2 text-[0.62rem] font-bold whitespace-nowrap transition-all duration-300 rounded-[4px] z-10 uppercase tracking-[0.1em] focus-visible:outline-none border ${
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
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="px-4 py-4 flex flex-col gap-4"
          >
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <span className="text-[0.58rem] font-bold text-gray-400 tracking-[0.15em] uppercase">
                  {currentData.primaryAmountLabel}
                </span>
                <div className="flex items-baseline gap-1.5 mt-1.5">
                  <span
                    className={`text-[2.2rem] font-light leading-none tracking-tight ${currentData.primaryAmountColor}`}
                  >
                    {currentData.primaryAmount}
                  </span>
                  {currentData.primaryDesc && (
                    <span className="text-[0.95rem] text-gray-400 font-medium">
                      {currentData.primaryDesc}
                    </span>
                  )}
                </div>
                {currentData.primarySub && (
                  <span className="text-[0.72rem] text-gray-500 mt-1.5 font-medium">
                    {currentData.primarySub}
                  </span>
                )}
              </div>

              {"secondaryCard" in currentData && currentData.secondaryCard && (
                <div className="flex flex-col items-end justify-center min-w-[85px]">
                  <span className="text-[0.52rem] font-bold text-gray-400 tracking-[0.15em] uppercase">
                    {currentData.secondaryCard.label}
                  </span>
                  <span className="text-[1.15rem] font-bold text-[#0a1128] mt-0.5 tracking-tight">
                    {currentData.secondaryCard.value}
                  </span>
                  <span className="text-[0.62rem] text-gray-400 font-medium">
                    {currentData.secondaryCard.desc}
                  </span>
                </div>
              )}

              {"secondaryBadge" in currentData &&
                currentData.secondaryBadge && (
                  <div
                    className={`px-3.5 py-2 rounded-[4px] border text-[0.72rem] font-semibold mt-1 ${currentData.secondaryBadge.color}`}
                  >
                    {currentData.secondaryBadge.text}
                  </div>
                )}

              {"secondaryDarkCard" in currentData &&
                currentData.secondaryDarkCard && (
                  <div className="bg-white border border-gray-200 rounded-[4px] p-3.5 flex flex-col items-center justify-center min-w-[105px] mt-1 shadow-sm">
                    <span className="text-[0.48rem] font-bold text-gray-400 tracking-[0.15em] uppercase">
                      {currentData.secondaryDarkCard.label}
                    </span>
                    <span className="text-[1.3rem] font-bold text-[#0a1128] mt-0.5 tracking-tight">
                      {currentData.secondaryDarkCard.value}
                    </span>
                    {"desc" in currentData.secondaryDarkCard &&
                      currentData.secondaryDarkCard.desc && (
                        <span className="text-[0.58rem] text-[#d4af37] font-medium">
                          {currentData.secondaryDarkCard.desc}
                        </span>
                      )}
                  </div>
                )}
            </div>

            <div className="flex flex-col gap-0 border-t border-gray-100 pt-2 mt-2">
              {currentData.details.map((detail, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 3 }}
                  className="flex items-center justify-between py-2.5 border-b border-gray-50 last:border-0 transition-all duration-300 cursor-default group"
                >
                  <div className="flex items-center gap-2 text-gray-500">
                    <div className={`w-5 h-5 rounded-[4px] flex items-center justify-center text-white shrink-0 shadow-sm transition-all duration-300 group-hover:scale-110 ${"bgClass" in detail ? detail.bgClass : ""}`}>
                      <detail.icon size={11} strokeWidth={2.5} />
                    </div>
                    <span className="text-[0.75rem] font-medium">
                      {detail.label}
                    </span>
                  </div>
                  <span
                    className={`text-[0.75rem] font-semibold ${"valueColor" in detail ? detail.valueColor : "text-[#0a1128]"}`}
                  >
                    {detail.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {"footer" in currentData && currentData.footer && (
          <div className="bg-gray-50 p-4 border-t border-gray-100 flex items-center justify-between mt-2">
            {currentData.footer.type === "tag-text" && (
              <>
                <span className="px-2.5 py-1 text-[0.58rem] font-bold rounded-[2px] border border-[#D4AF37]/25 bg-[#d4af37]/[0.06] text-[#D4AF37] tracking-[0.12em] uppercase">
                  {currentData.footer.tag}
                </span>
                <span className="text-[0.72rem] text-gray-500 font-medium">
                  {currentData.footer.text}
                </span>
              </>
            )}
            {currentData.footer.type === "split" && (
              <>
                <span className="text-[0.72rem] text-gray-500 font-medium">
                  {currentData.footer.left}
                </span>
                <span className="text-[0.72rem] text-[#0a1128] font-semibold">
                  {currentData.footer.right}
                </span>
              </>
            )}
            {currentData.footer.type === "text-only" && (
              <span className="text-[0.68rem] text-gray-500 font-medium w-full text-left italic">
                {currentData.footer.text}
              </span>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
