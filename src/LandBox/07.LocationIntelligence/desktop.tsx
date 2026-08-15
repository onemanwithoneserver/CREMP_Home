import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Lock, Check } from "lucide-react";
import { locationIntelligenceData } from "./data";
import SectionHeader from "../components/SectionHeader";
import { fadeInUp, staggerContainer, gridItem } from "../components/animations";

export default function Desktop() {
  const [isNotified, setIsNotified] = useState(false);

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
          overline={locationIntelligenceData.subtitle}
          title={locationIntelligenceData.title}
          icon={Cpu}
        />

        <div className="px-4 py-4 relative">
          <div className="absolute inset-0 bg-white/30 backdrop-blur-[0.5px] z-10 flex flex-col items-center justify-center group cursor-pointer hover:bg-white/40 hover:backdrop-blur-sm transition-all duration-500">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white mb-3 shadow-[0_4px_15px_rgba(11,27,66,0.3)] border border-[#1c2e64] bg-[#0b1b42] group-hover:animate-icon-shake origin-center transition-all duration-300"
            >
              <Lock size={20} strokeWidth={2.5} />
            </div>
            <div className="bg-white/95 px-4 py-2 rounded-full shadow-lg border border-gray-100/80 flex items-center justify-center h-8 relative overflow-hidden min-w-[70px] group-hover:min-w-[120px] transition-all duration-300">
              <span className="flex gap-1 absolute transition-all duration-300 opacity-100 group-hover:opacity-0 group-hover:translate-y-4">
                <motion.span
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                  className="w-1.5 h-1.5 rounded-full bg-[#0b1b42]"
                />
                <motion.span
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                  className="w-1.5 h-1.5 rounded-full bg-[#0b1b42]"
                />
                <motion.span
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                  className="w-1.5 h-1.5 rounded-full bg-[#0b1b42]"
                />
              </span>
              <span className="text-[0.6rem] font-semibold text-[#0b1b42] tracking-[0.2em] absolute transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 whitespace-nowrap">
                Coming Soon
              </span>
            </div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2"
          >
            {locationIntelligenceData.items.map((item, idx) => (
              <motion.div
                key={idx}
                variants={gridItem}
                whileHover={{ y: -2, scale: 1.02 }}
                className="bg-[#0b1b42]/[0.02] border border-gray-100 rounded-[4px] p-2.5 flex flex-col gap-1.5 relative transition-all duration-300 group cursor-default"
              >
                <div className="flex justify-between items-start">
                  <div
                    className={`w-7 h-7 rounded-[4px] flex items-center justify-center text-white shrink-0 shadow-sm group-hover:animate-icon-shake origin-center transition-all duration-300 ${item.bgClass}`}
                  >
                    <item.icon size={14} />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 mt-0.5">
                  <span className="text-[0.62rem] font-semibold text-[#0a1128] leading-[1.2] pr-1 tracking-tight">
                    {item.label}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <motion.span
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: idx * 0.2,
                      }}
                      className="w-1.5 h-1.5 rounded-full bg-gray-400"
                    />
                    <span className="text-[0.52rem] text-gray-500 font-semibold tracking-wider">
                      {item.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="w-full relative z-20 overflow-hidden mt-3 border-t border-gray-100 bg-white"
          >
            <div className="bg-gray-50 p-3 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[0.75rem] font-semibold text-[#0a1128]">
                  {locationIntelligenceData.footer.title}
                </span>
                <span className="text-[0.65rem] text-gray-500 font-medium">
                  {locationIntelligenceData.footer.subtitle}
                </span>
              </div>
              <motion.button
                onClick={() => setIsNotified(true)}
                whileHover={!isNotified ? { scale: 1.05 } : {}}
                whileTap={!isNotified ? { scale: 0.95 } : {}}
                className={`text-[0.65rem] font-semibold px-3 py-1.5 rounded-[2px] shadow-sm border tracking-wider flex items-center justify-center transition-all duration-300 min-w-[85px] ${
                  isNotified
                    ? "bg-emerald-50/80 text-emerald-600 border-emerald-200 cursor-default"
                    : "text-[#0b1b42] bg-white border-gray-200 hover:border-[#0b1b42]/30"
                }`}
              >
                <AnimatePresence mode="wait">
                  {isNotified ? (
                    <motion.div
                      key="notified"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="flex items-center gap-1.5"
                    >
                      <Check size={12} strokeWidth={3} />
                      <span>NOTIFIED</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="notify"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      className="flex items-center"
                    >
                      <span>NOTIFY ME</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
