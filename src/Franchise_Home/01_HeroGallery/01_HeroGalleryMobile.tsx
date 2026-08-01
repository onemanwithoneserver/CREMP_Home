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
      className="w-full bg-gradient-to-br from-[#FAFAFA] via-white to-[#f4f4f9] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 bg-[length:200%_200%] animate-gradient-shift transition-colors duration-300 flex flex-col pt-0 pb-10 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-5%] left-[-10%] w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full blur-2xl animate-float" style={{ animationDuration: '10s' }} />
        <div className="absolute bottom-[20%] right-[-10%] w-72 h-72 bg-[#c69a54]/5 dark:bg-[#c69a54]/10 rounded-full blur-2xl animate-float" style={{ animationDuration: '14s', animationDelay: '2s' }} />
      </div>

      <motion.div variants={item} className="w-full relative h-[350px] z-10">
        <img
          src={mainCupImg}
          alt="Hero Media"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b162c]/60 via-transparent to-transparent" />

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute inset-0 w-full h-full flex items-center justify-center focus:outline-none"
          aria-label={isPlaying ? "Pause Brand Story Video" : "Watch Brand Story Video"}
        >
          <motion.div 
              className="w-16 h-16 rounded-full bg-slate-800/80 flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.3)] active:scale-95 transition-colors duration-300 hover:bg-slate-900"
              whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait" initial={false}>
                {isPlaying ? (
                    <motion.div
                        key="pause"
                        initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
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
                        initial={{ opacity: 0, scale: 0.5, rotate: 90 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.5, rotate: -90 }}
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

      <div className="px-2 -mt-6 relative z-10 flex flex-col gap-6 ">
        <motion.div
          variants={item}
          className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 dark:border-gray-700/50 p-6 flex flex-col gap-6"
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1 bg-white border border-gray-100 rounded-md text-[#c69a54] text-[10px] font-bold uppercase tracking-wider shadow-sm">
                <Utensils size={12} strokeWidth={2.5} />
                {heroData.category}
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-white border border-gray-100 rounded-md text-primary text-[10px] font-bold uppercase tracking-wider shadow-sm">
                <Coffee size={12} strokeWidth={2.5} />
                {heroData.subCategory}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center p-2.5 bg-[#0b162c] text-white rounded-xl shadow-lg border border-[#c69a54]/20 shrink-0">
                <AppsIcon style={{ fontSize: 36 }} />
              </div>
              <motion.h1
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="text-4xl tracking-tight font-serif font-black uppercase leading-[1.1] text-[#0b162c]"
              >
                {heroData.brandName}
              </motion.h1>
            </div>
          </div>

          <div className="relative pl-5">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#bf953f] via-[#d4af37] to-transparent rounded-full" />
            <p className="text-[14px] text-[#161E31] leading-[1.8] font-light">
              {heroData.shortDescription}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4 p-5 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 w-full mx-auto">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/20 shrink-0">
                  <Calendar size={18} className="text-white" />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-[9px] font-bold text-gray-800 uppercase">Since</span>
                  <span className="text-[#0b162c] font-black text-[15px] truncate">{heroData.yearEstablished}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-md shadow-orange-500/20 shrink-0">
                  <Wallet size={18} className="text-white" />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-[9px] font-bold text-gray-800 uppercase">Starts From</span>
                  <span className="text-[#0b162c] font-black text-[15px] truncate">{heroData.investmentRange.split(' - ')[0]}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-md shadow-emerald-500/20 shrink-0">
                  <TrendingUp size={18} className="text-white" />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-[9px] font-bold text-gray-800 uppercase">Break-Even</span>
                  <span className="text-[#0b162c] font-black text-[15px] truncate">{heroData.breakevenTimeframe.replace(' Months', ' Mo')}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-md shadow-purple-500/20 shrink-0">
                  <MapPin size={18} className="text-white" />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-[9px] font-bold text-gray-800 uppercase">HQ Location</span>
                  <span className="text-[#0b162c] font-black text-[15px] truncate">{heroData.contactInfo.headquarters.split(',')[0]}</span>
                </div>
              </div>
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 dark:border-gray-700/50 p-6 flex flex-col gap-6"
        >
          <div className="flex items-center gap-3">
            <div className="h-px bg-gradient-to-r from-transparent to-[#c69a54] w-8" />
            <h3 className="text-[13px] font-semibold text-[#0b162c] tracking-[0.2em] uppercase">
              Why Choose Us
            </h3>
            <div className="h-px bg-gradient-to-l from-transparent to-[#c69a54] flex-1" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {heroData.whyChooseUs.map((feature, i) => (
              <div key={i} className="flex flex-col gap-2 group">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-sm ${feature.colorClass}`}
                >
                  <feature.icon
                    size={16}
                    strokeWidth={1.5}
                    className="text-white"
                  />
                </div>
                <h4 className="text-[13px] font-semibold text-[#0b162c] leading-tight">
                  {feature.title}
                </h4>
                <p className="text-[11px] text-gray-500 leading-snug">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
