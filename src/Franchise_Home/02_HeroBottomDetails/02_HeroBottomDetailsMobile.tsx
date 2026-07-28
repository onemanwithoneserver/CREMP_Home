import { heroDetailsData } from "./data";
import { ExternalLink, MapPin, ArrowRight } from "lucide-react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { getIconContainerStyles } from "../utils/theme";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};
const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
};

export default function HeroBottomDetailsMobile() {
  return (
    <motion.section 
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full bg-background p-4 flex flex-col gap-4 font-sans"
    >
      {/* WHY PARTNER WITH US */}
      <motion.div variants={item} className="bg-white dark:bg-surface rounded border border-border p-5 shadow-sm flex flex-col hover-lift">
        <div className="flex items-center gap-3 mb-5">
          <h3 className="text-[11px] font-bold text-gray-800 dark:text-white tracking-[0.2em] uppercase">{heroDetailsData.whyPartnerTitle}</h3>
          <div className="h-px bg-border flex-1" />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {heroDetailsData.partnerFeatures.map((feature, i) => (
            <div key={i} className="flex flex-col items-start gap-2.5">
              <div className={clsx("w-9 h-9 rounded-full border flex items-center justify-center shadow-xs transition-transform hover:scale-105", getIconContainerStyles(feature.intent))}>
                <feature.icon size={16} strokeWidth={1.5} />
              </div>
              <h4 className="text-[11px] font-bold text-gray-900 dark:text-gray-100 leading-tight pr-1">{feature.title}</h4>
            </div>
          ))}
        </div>
      </motion.div>

      {/* KEY DETAILS */}
      <motion.div variants={item} className="bg-white dark:bg-surface rounded border border-border p-5 shadow-sm flex flex-col hover-lift">
        <div className="flex items-center gap-3 mb-4">
          <h3 className="text-[11px] font-bold text-gray-800 dark:text-white tracking-[0.2em] uppercase">{heroDetailsData.keyDetailsTitle}</h3>
          <div className="h-px bg-border flex-1" />
        </div>
        <div className="grid grid-cols-1 gap-2.5 mb-5">
          {heroDetailsData.keyDetails.map((detail, i) => (
            <div key={i} className="flex gap-3 items-center bg-gray-50/50 dark:bg-surface-alt/30 p-2.5 rounded border border-border shadow-xs hover:border-gray-200 dark:hover:border-gray-700 transition-colors">
              <div className={clsx("w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-white/50 dark:border-border shadow-sm", getIconContainerStyles(detail.intent))}>
                <detail.icon size={14} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] uppercase font-bold tracking-widest text-gray-500 dark:text-gray-400">{detail.label}</span>
                <span className="text-xs font-bold text-gray-900 dark:text-white leading-tight">{detail.value}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full py-3 bg-primary hover:bg-primary-light text-white rounded-[4px] text-[13px] font-bold shadow-sm flex items-center justify-center gap-2 transition-transform active:scale-95">
          Visit Website <ExternalLink size={14} className="text-accent" />
        </button>
      </motion.div>

      {/* WHERE WE BREW */}
      <motion.div variants={item} className="bg-white dark:bg-surface rounded border border-border p-5 shadow-sm flex flex-col relative overflow-hidden hover-lift">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_#000_1px,_transparent_1px)] bg-[length:4px_4px]" />
        <div className="flex items-center justify-between mb-4 relative z-10">
          <div className="flex items-center gap-2">
            <MapPin className="text-accent" size={16} strokeWidth={1.5} />
            <h3 className="text-[11px] font-bold text-gray-800 dark:text-white tracking-[0.2em] uppercase">{heroDetailsData.locationsTitle}</h3>
          </div>
          <button className="flex items-center gap-1 text-[9px] font-bold text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-accent transition-colors uppercase tracking-widest">
            View All <ArrowRight size={10} />
          </button>
        </div>
        <div className="flex flex-wrap gap-2 relative z-10">
          {heroDetailsData.locations.map((loc) => (
            <div key={loc} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded border border-border bg-gray-50 dark:bg-surface-alt shadow-xs transition-colors">
              <MapPin size={10} className="text-accent" />
              <span className="text-[10px] font-bold text-gray-700 dark:text-gray-300">{loc}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* STATS STRIP */}
      <motion.div variants={item} className="w-full gradient-primary rounded p-5 shadow-md flex flex-col gap-5 text-white border-none mt-1">
        <div className="grid grid-cols-2 gap-4 relative z-10">
          {heroDetailsData.stats.map((stat, i) => (
             <div key={i} className="flex items-center gap-2.5">
               <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 border border-white/20 shadow-inner shrink-0">
                 <stat.icon size={16} className="text-accent-highlight" strokeWidth={1.5} />
               </div>
               <div className="flex flex-col">
                 <span className="text-[18px] font-black text-white leading-none mb-0.5">{stat.value}</span>
                 <span className="text-[8px] font-bold text-accent-highlight uppercase tracking-widest leading-tight">{stat.label}</span>
               </div>
             </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
