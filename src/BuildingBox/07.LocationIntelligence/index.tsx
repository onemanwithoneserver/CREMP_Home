import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Cpu, Lock, Sparkles, Check } from "lucide-react";
import { locationIntelligenceData } from "./data";
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
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const gridItem: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 400, damping: 30 },
  },
};

export default function LocationIntelligence() {
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
        className="w-full relative"
      >
        <SectionHeader
          overline={locationIntelligenceData.subtitle}
          title={locationIntelligenceData.title}
          icon={Cpu}
          rightElement={
            <div className="flex items-center gap-1.5 bg-[#d4af37]/10 text-[#d4af37] px-2.5 py-1 rounded-[2px] border border-[#d4af37]/20">
              <Sparkles size={12} />
              <span className="text-[0.62rem] font-semibold uppercase tracking-wider">
                Coming Soon
              </span>
            </div>
          }
        />

        <div className="px-4 py-4 relative">
          <div className="absolute inset-0 bg-white/30 backdrop-blur-[0.5px] z-10 flex flex-col items-center justify-center">
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(11, 27, 66, 0.2)",
                  "0 0 0 15px rgba(11, 27, 66, 0)",
                ],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#0b1b42] mb-3 border border-[#0b1b42]/10"
            >
              <Lock size={20} />
            </motion.div>
            <div className="bg-white/90 px-4 py-2 rounded-full shadow-sm border border-gray-100 flex items-center gap-2">
              <span className="flex gap-1">
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
                    className={`w-7 h-7 rounded-[4px] flex items-center justify-center text-white shrink-0 shadow-sm transition-all duration-300 group-hover:scale-110 ${item.bgClass}`}
                  >
                    <item.icon size={13} strokeWidth={2.5} />
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
                    <span className="text-[0.52rem] text-gray-500 font-semibold uppercase tracking-wider">
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
                className={`text-[0.65rem] font-semibold px-3 py-1.5 rounded-[2px] shadow-sm border uppercase tracking-wider flex items-center justify-center transition-all duration-300 min-w-[85px] ${
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
