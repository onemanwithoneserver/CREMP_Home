import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Share2, MapPin, BadgeCheck, Sparkles, Building2 } from "lucide-react";
import { heroData } from "./data";
import { fadeInUp, staggerContainer } from "../components/animations";

export default function Mobile() {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="relative w-full bg-white pt-5 pb-4 px-4 flex flex-col border-b border-gray-100 shadow-sm">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="flex flex-col w-full gap-3"
      >
        {/* Top Header Row: Badges & Action Buttons */}
        <div className="flex justify-between items-center w-full gap-2">
          <motion.div variants={fadeInUp} className="flex items-center gap-1.5 flex-wrap">
            {/* Grade A Badge */}
            <span className="px-2 py-0.5 text-[0.6rem] font-bold tracking-wider uppercase rounded-[3px] bg-[#d4af37]/10 text-[#b38728] border border-[#d4af37]/30 shadow-sm flex items-center gap-1">
              <Sparkles size={10} className="text-[#d4af37]" />
              {heroData.badges[0] || "GRADE A"}
            </span>

            {/* Comm Complex Badge */}
            {heroData.badges[1] && (
              <span className="px-2 py-0.5 text-[0.6rem] font-bold tracking-wider uppercase rounded-[3px] bg-slate-100/80 text-slate-600 border border-slate-200/80 flex items-center gap-1">
                <Building2 size={10} className="text-slate-400" />
                {heroData.badges[1]}
              </span>
            )}
          </motion.div>

          {/* Action Buttons: Save & Share */}
          <div className="flex items-center gap-1.5 shrink-0">
            <motion.button
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSaved(!isSaved)}
              className={`w-8 h-8 rounded-[4px] border flex items-center justify-center transition-all duration-300 shadow-sm ${
                isSaved
                  ? "bg-rose-500 text-white border-rose-500 shadow-rose-500/20"
                  : "bg-white border-gray-200 text-gray-600 hover:text-rose-500 hover:border-rose-300"
              }`}
            >
              <Heart size={14} className={isSaved ? "fill-white text-white" : ""} />
            </motion.button>

            <motion.button
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 rounded-[4px] bg-[#0b1b42] text-white flex items-center justify-center shrink-0"
            >
              <Share2 size={14} />
            </motion.button>
          </div>
        </div>

        {/* Title */}
        <motion.h1
          variants={fadeInUp}
          className="text-xl font-bold tracking-tight text-[#0a1128] leading-tight"
        >
          {heroData.title}
        </motion.h1>

        {/* Bottom Row: Location & Verification Badge */}
        <div className="flex justify-between items-center w-full gap-2 pt-0.5">
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-1.5 min-w-0"
          >
            <div className="w-4 h-4 rounded-full bg-[#d4af37]/10 flex items-center justify-center shrink-0">
              <MapPin size={11} className="text-[#b38728]" />
            </div>
            <span className="text-[0.72rem] font-medium text-gray-600 truncate">
              {heroData.location}
            </span>
          </motion.div>

          {heroData.verified && (
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-1 px-2 py-1 rounded-[3px] bg-blue-50/80 border border-blue-200/60 text-blue-700 shrink-0 shadow-sm"
            >
              <BadgeCheck size={14} className="text-blue-600 fill-blue-100" />
              <span className="text-[0.62rem] font-bold tracking-wide uppercase text-blue-700 whitespace-nowrap">
                Verified
              </span>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
