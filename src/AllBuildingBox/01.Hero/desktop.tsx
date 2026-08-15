import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Share2, MapPin, BadgeCheck, Sparkles, Building2 } from "lucide-react";
import { heroData } from "./data";
import { fadeInUp, staggerContainer } from "../components/animations";

export default function Desktop() {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="relative w-full bg-white pt-6 pb-5 px-6 flex flex-col border-b border-gray-100 shadow-sm">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="flex flex-col w-full gap-3.5 max-w-7xl mx-auto"
      >
        {/* Top Header Row: Badges & Action Buttons */}
        <div className="flex justify-between items-center w-full">
          <motion.div variants={fadeInUp} className="flex items-center gap-2 flex-wrap">
            {/* Grade A Badge */}
            <span className="px-2.5 py-1 text-[0.62rem] font-bold tracking-wider uppercase rounded-[3px] bg-[#d4af37]/10 text-[#b38728] border border-[#d4af37]/30 shadow-sm flex items-center gap-1.5">
              <Sparkles size={11} className="text-[#d4af37]" />
              {heroData.badges[0] || "GRADE A"}
            </span>

            {/* Comm Complex Badge */}
            {heroData.badges[1] && (
              <span className="px-2.5 py-1 text-[0.62rem] font-bold tracking-wider uppercase rounded-[3px] bg-slate-100/80 text-slate-600 border border-slate-200/80 flex items-center gap-1.5">
                <Building2 size={11} className="text-slate-400" />
                {heroData.badges[1]}
              </span>
            )}
          </motion.div>

          {/* Action Buttons: Save & Share */}
          <div className="flex items-center gap-2">
            <motion.button
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSaved(!isSaved)}
              className={`h-9 px-3 rounded-[4px] border text-[0.75rem] font-semibold flex items-center gap-1.5 transition-all duration-300 shadow-sm ${
                isSaved
                  ? "bg-rose-500 text-white border-rose-500 shadow-rose-500/20"
                  : "bg-white border-gray-200 text-gray-600 hover:text-rose-500 hover:border-rose-300 hover:bg-rose-50/50"
              }`}
            >
              <Heart size={15} className={isSaved ? "fill-white text-white" : ""} />
              <span>{isSaved ? "Saved" : "Save"}</span>
            </motion.button>

            <motion.button
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-9 px-3 rounded-[4px] bg-white border border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50/50 text-[0.75rem] font-semibold flex items-center gap-1.5 transition-all duration-300 shadow-sm"
            >
              <Share2 size={15} />
              <span>Share</span>
            </motion.button>
          </div>
        </div>

        {/* Bottom Row: Title, Location & Verification Badge */}
        <div className="flex justify-between items-end w-full gap-4 pt-1">
          <div className="flex flex-col gap-1.5 min-w-0">
            <motion.h1
              variants={fadeInUp}
              className="text-2xl sm:text-[1.85rem] font-bold tracking-tight text-[#0a1128] leading-tight"
            >
              {heroData.title}
            </motion.h1>

            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-full bg-[#d4af37]/10 flex items-center justify-center shrink-0">
                <MapPin size={12} className="text-[#b38728]" />
              </div>
              <span className="text-[0.78rem] font-medium text-gray-600 truncate">
                {heroData.location}
              </span>
            </motion.div>
          </div>

          {heroData.verified && (
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-blue-50/80 border border-blue-200/60 text-blue-700 shrink-0 shadow-sm"
            >
              <BadgeCheck size={16} className="text-blue-600 fill-blue-100" />
              <div className="flex flex-col leading-none">
                <span className="text-[0.55rem] font-bold uppercase tracking-widest text-blue-500">
                  CREMP
                </span>
                <span className="text-[0.72rem] font-bold text-blue-700">
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
