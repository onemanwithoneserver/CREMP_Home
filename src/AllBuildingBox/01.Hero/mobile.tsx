import { motion } from "framer-motion";
import { MapPin, BadgeCheck, Sparkles, Building2 } from "lucide-react";
import { heroData } from "./data";
import { fadeInUp, staggerContainer } from "../components/animations";

export default function Mobile() {
  return (
    <div className="relative w-full bg-[#0b1b42] text-white pt-5 pb-4 px-4 flex flex-col border-b border-[#d4af37]/20 shadow-lg overflow-hidden">

      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent pointer-events-none" />
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-2xl pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="flex flex-col w-full gap-3 relative z-10"
      >

        <div className="flex justify-between items-center w-full gap-2">
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-1.5 flex-wrap"
          >

            <span className="px-2 py-0.5 text-[0.6rem] font-semibold tracking-wider uppercase rounded-[3px] bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/40 shadow-sm flex items-center gap-1 backdrop-blur-md">
              <Sparkles size={10} className="text-[#d4af37]" />
              {heroData.badges[0] || "GRADE A"}
            </span>


            <div className="relative flex items-center">
              <select 
                defaultValue="Entire Building"
                className="px-2 py-0.5 text-[0.6rem] font-semibold tracking-wider uppercase rounded-[3px] bg-white/10 text-gray-300 border border-white/20 shadow-sm backdrop-blur-md appearance-none cursor-pointer outline-none focus:ring-1 focus:ring-[#d4af37]/50 hover:bg-white/20 transition-colors pl-5 pr-2"
              >
                <option value="Land" className="text-gray-900 bg-white">LAND</option>
                <option value="Retail" className="text-gray-900 bg-white">RETAIL</option>
                <option value="Office" className="text-gray-900 bg-white">OFFICE</option>
                <option value="Coworking" className="text-gray-900 bg-white">COWORKING</option>
                <option value="Entire Building" className="text-gray-900 bg-white">ENTIRE BUILDING</option>
              </select>
              <Building2 size={10} className="text-gray-400 absolute left-1.5 pointer-events-none" />
            </div>
          </motion.div>
        </div>


        <motion.h1
          variants={fadeInUp}
          className="text-xl font-semibold tracking-tight text-white leading-tight"
        >
          {heroData.title}
        </motion.h1>


        <div className="flex justify-between items-center w-full gap-2 pt-0.5">
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-1.5 min-w-0"
          >
            <div className="w-4 h-4 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/30 flex items-center justify-center shrink-0">
              <MapPin size={11} className="text-[#d4af37]" />
            </div>
            <span className="text-[0.72rem] font-medium text-gray-300 truncate">
              {heroData.location}
            </span>
          </motion.div>

          {heroData.verified && (
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-1 px-2 py-1 rounded-[3px] bg-blue-500/15 border border-blue-400/40 text-blue-400 shrink-0 shadow-sm backdrop-blur-md"
            >
              <BadgeCheck
                size={14}
                className="text-blue-400 fill-blue-500/20"
              />
              <span className="text-[0.62rem] font-semibold tracking-wide uppercase text-blue-400 whitespace-nowrap">
                Verified
              </span>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
