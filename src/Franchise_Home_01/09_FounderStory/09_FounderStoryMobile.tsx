import clsx from "clsx";
import { motion, type Variants } from "framer-motion";
import {
  Quote,
  Store,
  Users,
  Award,
  TrendingUp,
  IndianRupee,
} from "lucide-react";
import { getTextStyles } from "../utils/theme";
import { founderStoryData } from "./data";
import { SectionHeader } from "../components/SectionHeader";
const pulseGlow: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};
const getStatIcon = (label: string, size = 18) => {
  const lower = (label || "").toLowerCase();
  if (lower.includes("outlet") || lower.includes("store"))
    return <Store size={size} strokeWidth={2.5} />;
  if (
    lower.includes("user") ||
    lower.includes("customer") ||
    lower.includes("client")
  )
    return <Users size={size} strokeWidth={2.5} />;
  if (lower.includes("award") || lower.includes("win"))
    return <Award size={size} strokeWidth={2.5} />;
  if (lower.includes("revenue") || lower.includes("sales"))
    return <IndianRupee size={size} strokeWidth={2.5} />;
  return <TrendingUp size={size} strokeWidth={2.5} />;
};
const getIconBgColor = (idx: number) => {
  const colors = [
    "bg-[#d4af37]",
    "bg-blue-500",
    "bg-emerald-500",
    "bg-pink-500",
  ];
  return colors[idx % colors.length];
};
export default function FounderStoryMobile() {
  return (
    <section className="w-full py-16 px-2 relative overflow-hidden rounded-[8px] dark:bg-[#050b14] bg-white">
      <motion.div
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute -left-[10%] top-[-10%] h-[300px] w-[300px] rounded-full bg-[#D4AF37]/10 blur-[100px] dark:bg-[#D4AF37]/15"
      />
      <motion.div
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute right-[-5%] bottom-[-10%] h-[250px] w-[250px] rounded-full bg-[#D4AF37]/10 blur-[100px] dark:bg-[#D4AF37]/10"
      />
      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="mb-8 w-full">
          <SectionHeader
            overline={founderStoryData.sectionLabel}
            title={founderStoryData.title}
            subtitle={founderStoryData.subtitle}
            align="center"
          />
        </div>
        <div className="w-full flex flex-col gap-4 dark">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="relative rounded-[4px] overflow-hidden group shadow-lg w-full"
          >
            <div className="absolute inset-0 bg-[#0b1b42] border border-white/5" />
            <div className="relative z-10 p-6 flex flex-col gap-6">
              <div className="flex items-start justify-between">
                <Quote
                  size={40}
                  className="text-[#d4af37]/30 -translate-x-1 -translate-y-1"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-gray-900 dark:text-white text-[15px] leading-relaxed tracking-wide font-medium italic">
                  "{founderStoryData.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={founderStoryData.founder.avatar}
                    alt={founderStoryData.founder.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#d4af37]/60 shadow-md shrink-0"
                  />
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-bold text-lg tracking-tight">
                      {founderStoryData.founder.name}
                    </h4>
                    <p className="text-[#d4af37] text-[10px] font-bold uppercase tracking-widest mt-0.5">
                      {founderStoryData.founder.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="flex flex-col gap-3 w-full">
            {founderStoryData.stats.map((stat, idx) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.1,
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  key={stat.label}
                  className="bg-[#0b1b42] border border-white/5 rounded-[8px] p-4 flex flex-row items-center justify-between shadow-sm relative overflow-hidden hover:border-white/10 hover:shadow-md transition-all duration-300"
                >
                  <div className="absolute -right-4 -top-4 w-12 h-12 bg-white/5 rounded-full blur-xl" />
                  <div className="flex flex-col items-start z-10">
                    <p
                      className={clsx(
                        "text-2xl sm:text-3xl tracking-tight font-bold mb-1",
                        getTextStyles(stat.intent),
                      )}
                    >
                      {stat.value}
                    </p>
                    <p className="text-gray-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider leading-tight">
                      {stat.label}
                    </p>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: [0, -8, 8, 0] }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className={clsx(
                      "w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md shrink-0 z-10",
                      getIconBgColor(idx),
                    )}
                  >
                    {getStatIcon(stat.label)}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
