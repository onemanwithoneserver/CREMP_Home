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

  const listItemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    }),
    exit: { 
      opacity: 0, 
      y: -10, 
      transition: { duration: 0.15 } 
    }
  };

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
          <div className={`flex gap-1.5 mx-auto bg-white/40 backdrop-blur-2xl rounded-[6px] p-1.5 border border-white/60 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_8px_32px_rgba(0,0,0,0.05)] relative ${commercialData.tabs.length < 3 ? 'w-3/4' : 'w-full'}`}>
            {commercialData.tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative flex-1 flex items-center justify-center gap-1 py-2 px-1 lg:px-2 text-[0.7rem] lg:text-[0.8rem] font-bold tracking-wide uppercase whitespace-nowrap transition-all duration-300 rounded-[4px] z-10 focus-visible:outline-none ${
                  activeTab === tab
                    ? "text-white"
                    : "text-gray-600 hover:text-[#0a1128] bg-white/50 border border-white/40 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:bg-white/80 hover:shadow-md"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="commercialTabActiveDesktop"
                    className="absolute inset-0 bg-[#0b1b42] rounded-[4px] shadow-[0_4px_20px_rgba(212,175,55,0.3)] border border-[#d4af37]/50"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 28,
                    }}
                  >
                    <div className="absolute top-0 inset-x-1 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-80" />
                    <div className="absolute bottom-0 inset-x-1 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-30" />
                  </motion.div>
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
              {/* Primary Price Card */}
              <div className="relative w-full rounded-[4px] bg-gradient-to-br from-[#0a1128] via-[#0d1e47] to-[#0a1128] p-6 shadow-[0_8px_20px_rgba(11,27,66,0.15)] overflow-hidden group border border-[#0b1b42]/20">
                {/* Animated Background Orbs */}
                <motion.div 
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3] 
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-br from-[#d4af37]/20 to-transparent rounded-full blur-3xl pointer-events-none" 
                />
                <motion.div 
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2] 
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -bottom-16 -left-16 w-48 h-48 bg-gradient-to-tr from-blue-500/15 to-transparent rounded-full blur-2xl pointer-events-none" 
                />

                <div className="flex justify-between items-center relative z-10 w-full gap-4">
                  <div className="flex flex-col gap-1.5">
                    <motion.span 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                      className="inline-flex items-center gap-2 text-[0.65rem] font-bold text-[#d4af37] tracking-[0.2em] uppercase"
                    >
                      <span className="w-1.5 h-1.5 rounded-[2px] bg-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                      {currentData.primaryAmountLabel}
                    </motion.span>

                    {currentData.primarySub && (
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                        className="text-blue-100/70 text-[0.8rem] font-medium"
                      >
                        {currentData.primarySub}
                      </motion.p>
                    )}
                  </div>

                  <div className="flex flex-col gap-0.5 text-right items-end pl-2">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95, originX: 1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", bounce: 0.4, duration: 0.6, delay: 0.1 }}
                      className="text-[2.5rem] font-bold tracking-tight leading-none text-white"
                    >
                      {currentData.primaryAmount}
                    </motion.div>
                    
                    {currentData.primaryDesc && (
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className="text-blue-100/90 text-[0.95rem] font-medium tracking-wide mt-1"
                      >
                        {currentData.primaryDesc}
                      </motion.p>
                    )}
                  </div>
                </div>
              </div>

              {/* Details List */}
              <div className="flex flex-wrap gap-4">
                {currentData.details.map((detail, idx) => (
                  <motion.div
                    key={`${activeTab}-detail-${idx}`}
                    custom={idx}
                    variants={listItemVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    whileHover={{ scale: 1.02 }}
                    className="flex-1 min-w-[200px] basis-[calc(33.333%-0.5rem)] flex flex-col gap-3 p-4 rounded-[4px] bg-gray-50/50 hover:bg-white border border-transparent hover:border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group cursor-default"
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
                      className={`text-[1rem] font-bold tracking-tight leading-snug ${"valueColor" in detail ? detail.valueColor : "text-[#0a1128]"}`}
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
