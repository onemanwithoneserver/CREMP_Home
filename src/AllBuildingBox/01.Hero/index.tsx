import { motion } from "framer-motion";
import { Heart, Share2, MapPin, BadgeCheck } from "lucide-react";
import { heroData } from "./data";
import { fadeInUp, staggerContainer } from "../components/animations";

const actionIcons = [
  {
    Icon: Heart,
    label: "Save",
    hoverBg: "hover:bg-rose-50",
    hoverBorder: "hover:border-rose-200",
    hoverText: "hover:text-rose-500",
  },
  {
    Icon: Share2,
    label: "Share",
    hoverBg: "hover:bg-blue-50",
    hoverBorder: "hover:border-blue-200",
    hoverText: "hover:text-blue-500",
  },
];

export default function Hero() {
  return (
    <div className="relative w-full bg-white pt-6 pb-4 px-4 flex flex-col border-b border-gray-100">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="flex flex-col w-full gap-3"
      >
        <div className="flex justify-between items-start w-full">
          <motion.div variants={fadeInUp} className="flex items-center gap-2">
            {heroData.badges.map((badge, idx) => (
              <span
                key={idx}
                className={`px-3 py-1 text-[0.65rem] font-bold rounded-full tracking-wider ${
                  idx === 0
                    ? "bg-[#d4af37] text-[#0a1128]"
                    : "text-gray-400 uppercase tracking-widest"
                }`}
              >
                {badge}
              </span>
            ))}
          </motion.div>

          <div className="flex items-center gap-2">
            {actionIcons.map(({ Icon, hoverBg, hoverBorder, hoverText }, i) => (
              <motion.button
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-9 h-9 rounded-[6px] bg-white border border-gray-200 flex items-center justify-center text-gray-500 transition-all duration-300 ${hoverBg} ${hoverBorder} ${hoverText} shadow-sm`}
              >
                <Icon size={16} strokeWidth={2} />
              </motion.button>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-end w-full">
          <div className="flex flex-col gap-1">
            <motion.h1
              variants={fadeInUp}
              className="text-[1.6rem] font-semibold tracking-tight text-[#0a1128]"
            >
              {heroData.title}
            </motion.h1>

            <motion.div variants={fadeInUp} className="flex items-center gap-1.5 mt-0.5">
              <MapPin size={14} className="text-[#d4af37]" />
              <span className="text-[0.75rem] font-medium text-gray-500">
                {heroData.location}
              </span>
            </motion.div>
          </div>

          {heroData.verified && (
            <motion.div variants={fadeInUp} className="flex items-center gap-1 mb-1">
              <BadgeCheck size={14} className="text-blue-500" />
              <span className="text-[0.7rem] font-semibold text-blue-500 tracking-wide">
                CREMP Verified
              </span>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
