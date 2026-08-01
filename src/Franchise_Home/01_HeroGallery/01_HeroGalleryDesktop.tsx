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
import cafeInteriorImg from "../../assets/cafe_interior.png";
import coffeeBeansImg from "../../assets/coffee_beans.png";
import coffeeEquipmentImg from "../../assets/coffee_equipment.png";
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

export default function HeroGalleryDesktop() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full px-10 py-2 relative overflow-hidden bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-6 relative">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl animate-float"
            style={{ animationDuration: "12s" }}
          />
          <div
            className="absolute bottom-[-10%] right-[-5%] w-[30rem] h-[30rem] bg-[#c69a54]/5 dark:bg-[#c69a54]/10 rounded-full blur-3xl animate-float"
            style={{ animationDuration: "18s", animationDelay: "2s" }}
          />
        </div>

        <div className="relative z-10 grid grid-cols-12 gap-2 min-h-[520px]">
          <motion.div
            variants={item}
            className="col-span-12 lg:col-span-6 flex flex-col justify-between relative overflow-hidden group/main py-2 lg:py-4 h-full"
          >
            <div className="flex flex-col gap-6 lg:gap-8 relative z-10">
              <div className="flex flex-col gap-6">
                <div className="flex gap-3">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-md text-[#c69a54] text-[10px] font-bold uppercase tracking-widest shadow-sm border border-gray-100">
                    <Utensils size={13} strokeWidth={2.5} />
                    {heroData.category}
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-md text-primary text-[10px] font-bold uppercase tracking-widest shadow-sm border border-gray-100">
                    <Coffee size={13} strokeWidth={2.5} />
                    {heroData.subCategory}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center p-3 bg-[#0b162c] text-white rounded-2xl shadow-lg border border-[#c69a54]/20 shrink-0">
                    <AppsIcon style={{ fontSize: 52 }} />
                  </div>
                  <motion.h1
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="text-5xl lg:text-[64px] tracking-tight font-bold uppercase leading-[1.05] text-[#0b162c]"
                  >
                    {heroData.brandName}
                  </motion.h1>
                </div>
              </div>

              <div className="relative pl-6">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#bf953f] via-[#d4af37] to-transparent rounded-full" />
                <p className="text-lg text-[#161E31] leading-[1.8] max-w-xl font-light">
                  {heroData.shortDescription}
                </p>
              </div>
            </div>

            <div className="flex flex-row w-full mt-4  rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden">
              <div className="flex flex-col xl:flex-row items-center justify-center gap-2 xl:gap-3 py-4 w-1/4">
                <div className="w-8 h-8 xl:w-10 xl:h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-sm shadow-blue-500/20 shrink-0">
                  <Calendar size={16} className="text-white" />
                </div>
                <div className="flex flex-col text-center xl:text-left min-w-0">
                  <span className="text-[9px] font-bold text-gray-800 uppercase">
                    Since
                  </span>
                  <span className="text-[#0b162c] font-bold text-[13px] xl:text-[15px] whitespace-nowrap tracking-tight">
                    {heroData.yearEstablished}
                  </span>
                </div>
              </div>
              <div className="flex flex-col xl:flex-row items-center justify-center gap-2 xl:gap-3 py-4 w-1/4">
                <div className="w-8 h-8 xl:w-10 xl:h-10 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-sm shadow-orange-500/20 shrink-0">
                  <Wallet size={16} className="text-white" />
                </div>
                <div className="flex flex-col text-center xl:text-left min-w-0">
                  <span className="text-[9px] font-bold text-gray-800 uppercase">
                    Starts From
                  </span>
                  <span className="text-[#0b162c] font-bold text-[13px] xl:text-[15px] whitespace-nowrap tracking-tight">
                    {heroData.investmentRange.split(" - ")[0]}
                  </span>
                </div>
              </div>
              <div className="flex flex-col xl:flex-row items-center justify-center gap-2 xl:gap-3 py-4 w-1/4">
                <div className="w-8 h-8 xl:w-10 xl:h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-sm shadow-emerald-500/20 shrink-0">
                  <TrendingUp size={16} className="text-white" />
                </div>
                <div className="flex flex-col text-center xl:text-left min-w-0">
                  <span className="text-[9px] font-bold text-gray-800 uppercase whitespace-nowrap">
                    Break-Even
                  </span>
                  <span className="text-[#0b162c] font-bold text-[13px] xl:text-[15px] whitespace-nowrap tracking-tight">
                    {heroData.breakevenTimeframe.replace(" Months", " Mo")}
                  </span>
                </div>
              </div>
              <div className="flex flex-col xl:flex-row items-center justify-center gap-2 xl:gap-3 py-4 w-1/4">
                <div className="w-8 h-8 xl:w-10 xl:h-10 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shadow-sm shadow-red-500/20 shrink-0">
                  <MapPin size={16} className="text-white" />
                </div>
                <div className="flex flex-col text-center xl:text-left min-w-0">
                  <span className="text-[9px] font-bold text-gray-800 uppercase">
                    Head Quarters
                  </span>
                  <span className="text-[#0b162c] font-bold text-[13px] xl:text-[15px] whitespace-nowrap tracking-tight">
                    {heroData.contactInfo.headquarters.split(",")[0]}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="col-span-12 lg:col-span-6 h-[400px] lg:h-auto min-h-[520px]"
          >
            <div className="flex gap-4 h-full">
              <div className="w-[55%] relative group/cup overflow-hidden rounded-2xl shadow-sm border border-gray-100 h-full">
                <img
                  src={mainCupImg}
                  alt="Main Cup"
                  className="absolute inset-0 w-full h-full object-cover group-hover/cup:scale-105 transition-transform duration-700 ease-out bg-white"
                />
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="absolute inset-0 w-full h-full bg-black/5 hover:bg-black/20 flex items-center justify-center transition-all duration-500 focus:outline-none"
                  aria-label={
                    isPlaying
                      ? "Pause Brand Story Video"
                      : "Watch Brand Story Video"
                  }
                >
                  <motion.div
                    className="w-16 h-16 rounded-full bg-slate-800/70 backdrop-blur-md flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-colors duration-300 hover:bg-slate-900 border border-white/10 group/btn"
                    whileHover={{ scale: 1.1 }}
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
              </div>

              {/* Right side: 45% */}
              <div className="w-[45%] flex flex-col gap-4 h-full">
                {/* Top Image */}
                <div className="h-[50%] relative group overflow-hidden rounded-2xl shadow-sm border border-gray-100">
                  <img
                    src={cafeInteriorImg}
                    alt="Cafe Interior"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out bg-white"
                  />
                  <div className="absolute inset-0 bg-black/10 hover:bg-black/30 flex items-center justify-center transition-all duration-500 cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-slate-800/70 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Play
                        size={20}
                        className="text-white ml-1"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom Images */}
                <div className="h-[50%] flex gap-4">
                  <div className="w-1/2 relative group overflow-hidden rounded-2xl shadow-sm border border-gray-100 h-full">
                    <img
                      src={coffeeBeansImg}
                      alt="Coffee Beans"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out bg-white"
                    />
                    <div className="absolute inset-0 bg-black/10 hover:bg-black/30 flex items-center justify-center transition-all duration-500 cursor-pointer">
                      <div className="w-10 h-10 rounded-full bg-slate-800/70 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Play
                          size={16}
                          className="text-white ml-0.5"
                          fill="currentColor"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 relative group overflow-hidden rounded-2xl shadow-sm border border-gray-100 h-full">
                    <img
                      src={coffeeEquipmentImg}
                      alt="Coffee Equipment"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out bg-white"
                    />
                    <div className="absolute inset-0 bg-black/10 hover:bg-black/30 flex items-center justify-center transition-all duration-500 cursor-pointer">
                      <div className="w-10 h-10 rounded-full bg-slate-800/70 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Play
                          size={16}
                          className="text-white ml-0.5"
                          fill="currentColor"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="relative z-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-[4px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 dark:border-gray-700/50 p-2 overflow-hidden mt-2"
        >
          <div className="flex flex-col gap-6 relative z-10">
            <div className="flex items-center gap-3">
              <div className="h-px bg-gradient-to-r from-transparent to-[#c69a54] w-8" />
              <h3 className="text-sm font-semibold text-[#0b162c] dark:text-white tracking-[0.2em] uppercase">
                Why Choose Us
              </h3>
              <div className="h-px bg-gradient-to-l from-transparent to-[#c69a54] flex-1" />
            </div>

            <div className="grid grid-cols-4 gap-4">
              {heroData.whyChooseUs.map((feature, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center p-2 transition-all duration-300 group/feature cursor-default"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-3 shadow-md relative overflow-hidden transition-transform duration-300 group-hover/feature:scale-110 ${feature.colorClass}`}
                  >
                    <feature.icon
                      size={24}
                      strokeWidth={2}
                      className="relative z-10 text-white"
                    />
                  </div>
                  <h4 className="text-[14px] font-bold text-[#0b162c] dark:text-white leading-snug">
                    {feature.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
