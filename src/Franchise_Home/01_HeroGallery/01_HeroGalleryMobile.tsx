import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Play,
  Pause,
  Coffee,
  Utensils,
  Calendar,
  Wallet,
  TrendingUp,
  MapPin,
} from "lucide-react";
import mainCupImg from "../../assets/main_coffee_cup.png";
import { heroData } from "./data";
import AppsIcon from "@mui/icons-material/Apps";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 24 },
  },
};

export default function HeroGalleryMobile() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full flex flex-col pt-0 pb-10 relative overflow-hidden bg-white dark:bg-[#0a1128]"
    >
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute top-[-5%] left-[-10%] w-64 h-64 bg-[#d4af37]/5 dark:bg-[#d4af37]/10 rounded-full blur-2xl animate-float"
          style={{ animationDuration: "10s" }}
        />
        <div
          className="absolute bottom-[20%] right-[-10%] w-72 h-72 bg-[#c69a54]/5 dark:bg-[#c69a54]/10 rounded-full blur-2xl animate-float"
          style={{ animationDuration: "14s", animationDelay: "2s" }}
        />
      </div>

      <motion.div variants={item} className="w-full relative h-[350px] z-10">
        <img
          src={mainCupImg}
          alt="Hero Media"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/80 via-transparent to-transparent" />

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute inset-0 w-full h-full flex items-center justify-center focus:outline-none"
          aria-label={
            isPlaying ? "Pause Brand Story Video" : "Watch Brand Story Video"
          }
        >
          <motion.div
            className="w-16 h-16 rounded-full bg-[#0a1128]/80 flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-white/20 active:scale-95 transition-colors duration-300 hover:bg-[#0a1128]"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isPlaying ? (
                <motion.div
                  key="pause"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Pause
                    size={24}
                    className="text-white transition-colors"
                    fill="currentColor"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="play"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Play
                    size={24}
                    className="text-white ml-1 transition-colors"
                    fill="currentColor"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </button>
      </motion.div>

      <div className="px-2 -mt-6 relative z-10 flex flex-col gap-6">
        <motion.div
          variants={item}
          className="bg-white/95 dark:bg-[#121c33] backdrop-blur-md rounded-[4px] shadow-sm border border-gray-200 dark:border-gray-800 p-5 flex flex-col gap-5"
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 dark:bg-[#0a1128] border border-gray-200 dark:border-gray-700 rounded-[2px] text-[#c69a54] text-[10px] font-bold uppercase tracking-wider shadow-sm">
                <Utensils size={12} strokeWidth={2.5} />
                {heroData.category}
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 dark:bg-[#0a1128] border border-gray-200 dark:border-gray-700 rounded-[2px] text-[#0a1128] dark:text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                <Coffee size={12} strokeWidth={2.5} />
                {heroData.subCategory}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center p-2.5 bg-[#0a1128] text-white rounded-[4px] shadow-lg border border-[#d4af37]/30 shrink-0">
                <AppsIcon style={{ fontSize: 36 }} />
              </div>
              <h1 className="text-3xl tracking-tight font-black uppercase leading-[1.1] text-[#0a1128] dark:text-white">
                {heroData.brandName}
              </h1>
            </div>
          </div>

          <div className="relative pl-5">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#bf953f] via-[#d4af37] to-transparent rounded-full" />
            <p className="text-[14px] text-gray-700 dark:text-gray-200 leading-[1.8] font-normal">
              {heroData.shortDescription}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 bg-gray-50 dark:bg-[#0a1128] rounded-[4px] p-3 w-full mx-auto">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-[4px] bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-sm shadow-blue-500/20 shrink-0">
                <Calendar size={16} className="text-white" />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-[9px] font-bold text-gray-500 dark:text-gray-400 uppercase">
                  Since
                </span>
                <span className="text-[#0a1128] dark:text-white font-bold text-[14px] truncate">
                  {heroData.yearEstablished}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-[4px] bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-sm shadow-orange-500/20 shrink-0">
                <Wallet size={16} className="text-white" />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-[9px] font-bold text-gray-500 dark:text-gray-400 uppercase">
                  Starts From
                </span>
                <span className="text-[#0a1128] dark:text-white font-bold text-[14px] truncate">
                  {heroData.investmentRange.split(" - ")[0]}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-[4px] bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-sm shadow-emerald-500/20 shrink-0">
                <TrendingUp size={16} className="text-white" />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-[9px] font-bold text-gray-500 dark:text-gray-400 uppercase">
                  Break-Even
                </span>
                <span className="text-[#0a1128] dark:text-white font-bold text-[14px] truncate">
                  {heroData.breakevenTimeframe.replace(" Months", " Mo")}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-[4px] bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shadow-sm shadow-red-500/20 shrink-0">
                <MapPin size={16} className="text-white" />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-[9px] font-bold text-gray-500 dark:text-gray-400 uppercase">
                  Head Quarters
                </span>
                <span className="text-[#0a1128] dark:text-white font-bold text-[14px] truncate">
                  {heroData.contactInfo.headquarters.split(",")[0]}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="bg-white/95 dark:bg-[#121c33] backdrop-blur-md rounded-[4px] p-5 flex flex-col gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="h-px bg-gradient-to-r from-transparent to-[#d4af37] w-8" />
            <h3 className="text-xs font-bold text-[#0a1128] dark:text-white tracking-[0.2em] uppercase">
              Why Choose Us
            </h3>
            <div className="h-px bg-gradient-to-l from-transparent to-[#d4af37] flex-1" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            {heroData.whyChooseUs.map((feature, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-3 bg-gray-50 dark:bg-[#0a1128] rounded-[4px] border border-gray-200 dark:border-gray-800 shadow-sm group"
              >
                <div
                  className={`w-10 h-10 rounded-[4px] flex items-center justify-center mb-2 shadow-sm ${feature.colorClass}`}
                >
                  <feature.icon
                    size={18}
                    strokeWidth={2}
                    className="text-white"
                  />
                </div>
                <h4 className="text-xs font-bold text-[#0a1128] dark:text-white leading-tight">
                  {feature.title}
                </h4>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
