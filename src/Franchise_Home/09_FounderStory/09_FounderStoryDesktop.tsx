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
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
};
const getStatIcon = (label: string) => {
  const lower = (label || "").toLowerCase();
  if (lower.includes("outlet") || lower.includes("store"))
    return <Store size={22} strokeWidth={2.5} />;
  if (
    lower.includes("user") ||
    lower.includes("customer") ||
    lower.includes("client")
  )
    return <Users size={22} strokeWidth={2.5} />;
  if (lower.includes("award") || lower.includes("win"))
    return <Award size={22} strokeWidth={2.5} />;
  if (lower.includes("revenue") || lower.includes("sales"))
    return <IndianRupee size={22} strokeWidth={2.5} />;
  return <TrendingUp size={22} strokeWidth={2.5} />;
};
const getIconBgColor = (idx: number) => {
  const colors = [
    "bg-amber-600",
    "bg-blue-500",
    "bg-emerald-500",
    "bg-pink-500",
  ];
  return colors[idx % colors.length];
};
export default function FounderStoryDesktop() {
  return (
    <section className="w-full px-6 py-16 relative overflow-hidden rounded-[8px] dark:bg-[#050b14] bg-white">
      <motion.div
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute -left-[10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[120px] dark:bg-[#D4AF37]/15"
      />
      <motion.div
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute right-[-5%] bottom-[-10%] h-[400px] w-[400px] rounded-full bg-[#D4AF37]/10 blur-[120px] dark:bg-[#D4AF37]/10"
      />
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        <div className="mb-12">
          <SectionHeader
            overline={founderStoryData.sectionLabel}
            title={founderStoryData.title}
            subtitle={founderStoryData.subtitle}
            align="center"
          />
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch dark">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-50px" }}
            className="lg:col-span-3 relative rounded-[8px] overflow-hidden group shadow-xl bg-[#0b1b42] border border-white/5 h-full hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative z-10 p-10 flex flex-col gap-6 h-full min-h-[400px]">
              <div className="flex items-start justify-between">
                <Quote
                  size={64}
                  className="text-[#d4af37]/30 -translate-x-2 -translate-y-2 group-hover:text-[#d4af37]/50 transition-colors duration-500"
                />
              </div>
              <div className="flex-1 flex items-center">
                <p className="text-gray-900 dark:text-white text-xl md:text-2xl leading-relaxed tracking-wide font-medium italic">
                  "{founderStoryData.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200/50 dark:border-white/10 mt-auto">
                <img
                  src={founderStoryData.founder.avatar}
                  alt={founderStoryData.founder.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#d4af37]/60 shadow-lg shrink-0"
                />
                <div>
                  <h4 className="text-gray-900 dark:text-white font-bold text-xl tracking-tight">
                    {founderStoryData.founder.name}
                  </h4>
                  <p className="text-[#d4af37] text-sm font-bold uppercase tracking-widest mt-0.5">
                    {founderStoryData.founder.title}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="lg:col-span-1 flex flex-col gap-6 h-full">
            {founderStoryData.stats.map((stat, idx) => {
              return (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.15 + 0.3,
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  key={stat.label}
                  className="flex-1 bg-[#0b1b42] border border-white/5 rounded-[8px] p-6 lg:p-8 flex flex-col justify-center shadow-lg group hover:border-white/10 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/5 rounded-full blur-xl group-hover:bg-[#d4af37]/10 transition-colors duration-500" />
                  <div className="relative z-10 flex flex-row items-center justify-between gap-4 w-full">
                    <div className="flex flex-col items-start">
                      <p
                        className={clsx(
                          "text-4xl lg:text-5xl tracking-tight font-bold mb-1",
                          getTextStyles(stat.intent),
                        )}
                      >
                        {stat.value}
                      </p>
                      <p className="text-gray-400 text-sm font-bold uppercase tracking-widest group-hover:text-gray-200 transition-colors duration-300">
                        {stat.label}
                      </p>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: [0, -8, 8, 0] }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className={clsx(
                        "w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center text-white shadow-lg shrink-0",
                        getIconBgColor(idx),
                      )}
                    >
                      {getStatIcon(stat.label)}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
