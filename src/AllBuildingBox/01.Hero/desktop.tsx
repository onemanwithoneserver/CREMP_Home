import { motion } from "framer-motion";
import { MapPin, BadgeCheck, Sparkles, Building2 } from "lucide-react";
import { heroData } from "./data";
import { fadeInUp, staggerContainer } from "../components/animations";

export default function Desktop() {
  return (
    <div className="relative w-full bg-[#0b1b42] text-white pt-6 pb-5 px-[var(--panel-px,1rem)] flex flex-col border-b border-[#d4af37]/20 shadow-lg overflow-hidden">
      {/* Top subtle gold glow accent line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent pointer-events-none" />
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="flex flex-col w-full gap-3.5 max-w-7xl mx-auto relative z-10"
      >
        {/* Top Badges Row */}
        <div className="flex justify-between items-center w-full">
          <motion.div variants={fadeInUp} className="flex items-center gap-2 flex-wrap">
            {/* Grade A Badge */}
            <span className="px-2.5 py-1 text-[0.62rem] font-semibold tracking-wider uppercase rounded-[3px] bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/40 shadow-sm flex items-center gap-1.5 backdrop-blur-md">
              <Sparkles size={11} className="text-[#d4af37]" />
              {heroData.badges[0] || "GRADE A"}
            </span>

            {/* Comm Complex Badge */}
            {heroData.badges[1] && (
              <span className="px-2.5 py-1 text-[0.62rem] font-semibold tracking-wider uppercase rounded-[3px] bg-white/10 text-gray-300 border border-white/20 shadow-sm flex items-center gap-1.5 backdrop-blur-md">
                <Building2 size={11} className="text-gray-400" />
                {heroData.badges[1]}
              </span>
            )}
          </motion.div>
        </div>

        {/* Bottom Row: Title, Location & Verification Badge */}
        <div className="flex justify-between items-end w-full gap-4 pt-1">
          <div className="flex flex-col gap-1.5 min-w-0">
            <motion.h1
              variants={fadeInUp}
              className="text-2xl sm:text-[1.85rem] font-semibold tracking-tight text-white leading-tight"
            >
              {heroData.title}
            </motion.h1>

            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/30 flex items-center justify-center shrink-0">
                <MapPin size={12} className="text-[#d4af37]" />
              </div>
              <span className="text-[0.78rem] font-medium text-gray-300 truncate">
                {heroData.location}
              </span>
            </motion.div>
          </div>

          {heroData.verified && (
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-blue-500/15 border border-blue-400/40 text-blue-400 shrink-0 shadow-sm backdrop-blur-md"
            >
              <BadgeCheck size={16} className="text-blue-400 fill-blue-500/20" />
              <div className="flex flex-col leading-none">
                <span className="text-[0.72rem] font-semibold text-blue-400">
                  Verified
                </span>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
