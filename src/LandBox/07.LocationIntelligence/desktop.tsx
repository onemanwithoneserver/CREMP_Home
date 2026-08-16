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
        className="w-full bg-white border-b border-gray-100 relative pb-6"
      >
        <SectionHeader
          overline={locationIntelligenceData.subtitle}
          title={locationIntelligenceData.title}
          icon={Cpu}
        />

        <div className="px-6 py-6 relative">
          <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px] z-10 flex flex-col items-center justify-center group cursor-pointer hover:bg-white/40 hover:backdrop-blur-sm transition-all duration-500">
            <div className="w-12 h-12 rounded-[4px] flex items-center justify-center text-white mb-3 shadow-[0_4px_15px_rgba(11,27,66,0.2)] border border-[#1c2e64] bg-[#17274c] group-hover:animate-icon-shake origin-center transition-all duration-300">
              <Lock size={20} strokeWidth={2.5} />
            </div>
            <div className="bg-white/95 px-4 py-2 rounded-[4px] shadow-sm border border-gray-100/80 flex items-center justify-center h-8 relative overflow-hidden min-w-[70px] group-hover:min-w-[120px] transition-all duration-300">
              <span className="flex gap-1 absolute transition-all duration-300 opacity-100 group-hover:opacity-0 group-hover:translate-y-4">
                <motion.span
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                  className="w-1.5 h-1.5 rounded-full bg-[#17274c]"
                />
                <motion.span
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                  className="w-1.5 h-1.5 rounded-full bg-[#17274c]"
                />
                <motion.span
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                  className="w-1.5 h-1.5 rounded-full bg-[#17274c]"
                />
              </span>
              <span className="text-[0.65rem] font-semibold text-[#17274c] tracking-[0.2em] absolute transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 whitespace-nowrap uppercase">
                Coming Soon
              </span>
            </div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2"
          >
            {locationIntelligenceData.items.map((item, idx) => (
              <motion.div
                key={idx}
                variants={gridItem}
                whileHover={{ y: -2, scale: 1.01 }}
                className="bg-gray-50/50 border border-transparent rounded-[4px] p-3 flex flex-col gap-2 relative transition-all duration-300 group cursor-default hover:bg-white hover:border-gray-100 hover:shadow-sm"
              >
                <div className="flex justify-between items-start">
                  <div
                    className={`w-8 h-8 rounded-[4px] flex items-center justify-center text-white shrink-0 shadow-sm group-hover:animate-icon-shake origin-center transition-all duration-300 ${item.bgClass}`}
                  >
                    <item.icon size={15} />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 mt-0.5">
                  <span className="text-[0.7rem] font-semibold text-[#17274c] leading-[1.2] pr-1 tracking-tight">
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
                    <span className="text-[0.6rem] text-gray-500 font-semibold tracking-wider">
                      {item.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="w-full relative z-20 overflow-hidden mt-4 border border-gray-100 bg-white rounded-[4px] shadow-sm"
          >
            <div className="bg-gray-50/50 p-4 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[0.8rem] font-semibold text-[#17274c]">
                  {locationIntelligenceData.footer.title}
                </span>
                <span className="text-[0.7rem] text-gray-500 font-medium">
                  {locationIntelligenceData.footer.subtitle}
                </span>
              </div>
              <motion.button
                onClick={() => setIsNotified(true)}
                whileHover={!isNotified ? { scale: 1.02 } : {}}
                whileTap={!isNotified ? { scale: 0.98 } : {}}
                className={`text-[0.7rem] font-semibold px-4 py-2 rounded-[4px] shadow-sm border tracking-wider flex items-center justify-center transition-all duration-300 min-w-[90px] ${
                  isNotified
                    ? "bg-emerald-50/80 text-emerald-600 border-emerald-200 cursor-default"
                    : "text-[#17274c] bg-white border-gray-200 hover:border-[#17274c]/30 hover:bg-gray-50"
                }`}
              >
                <AnimatePresence mode="wait">
                  {isNotified ? (
                    <motion.div
                      key="notified"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                      className="flex items-center gap-1.5"
                    >
                      <Check size={14} strokeWidth={3} />
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
