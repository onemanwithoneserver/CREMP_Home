import { heroDetailsData } from "./data";
import { ExternalLink, MapPin } from "lucide-react";
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

export default function HeroBottomDetailsDesktop() {
  return (
    <motion.section 
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-[1440px] mx-auto bg-background p-4 lg:p-6 flex flex-col gap-4 font-sans"
    >
      <div className="grid grid-cols-12 gap-4">
        {/* LEFT COLUMN: Why Partner & Where We Brew */}
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-4">
          
          {/* WHY PARTNER WITH US */}
          <motion.div variants={item} className="bg-white dark:bg-surface rounded-lg border border-gray-100 dark:border-border p-8 shadow-sm flex flex-col justify-center flex-1 hover-lift">
            <div className="flex items-center gap-3 mb-10 justify-center">
              <div className="h-px bg-gradient-to-r from-transparent to-cremp-accent w-12 relative">
                <div className="absolute right-0 -top-[3px] w-1.5 h-1.5 rotate-45 bg-cremp-accent"></div>
              </div>
              <h3 className="text-[16px] font-bold text-cremp-primary dark:text-primary tracking-[0.1em] uppercase">{heroDetailsData.whyPartnerTitle}</h3>
              <div className="h-px bg-gradient-to-l from-transparent to-cremp-accent w-12 relative">
                <div className="absolute left-0 -top-[3px] w-1.5 h-1.5 rotate-45 bg-cremp-accent"></div>
              </div>
            </div>
            
            <div className="flex w-full divide-x divide-gray-100 dark:divide-border flex-1 items-stretch">
              {heroDetailsData.partnerFeatures.map((feature, i) => (
                <div key={i} className="flex flex-col items-center flex-1 px-4 text-center group cursor-default">
                  <div className={clsx("w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 shadow-sm", getIconContainerStyles(feature.intent))}>
                      <feature.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-[13px] font-bold text-gray-900 dark:text-white leading-snug mb-3">{feature.title}</h4>
                  <div className="w-6 h-0.5 bg-accent opacity-50 group-hover:opacity-100 transition-opacity duration-300 mx-auto"></div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* WHERE WE BREW */}
          <motion.div variants={item} className="bg-white dark:bg-surface rounded-lg border border-gray-100 dark:border-border p-8 shadow-sm flex flex-col relative overflow-hidden hover-lift">
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <MapPin className="text-accent" size={20} strokeWidth={2} />
              <h3 className="text-[14px] font-bold text-gray-900 dark:text-white tracking-[0.1em] uppercase">{heroDetailsData.locationsTitle}</h3>
            </div>
            <div className="w-24 h-0.5 bg-accent mb-6 opacity-80"></div>
            <div className="flex flex-wrap gap-2.5 relative z-10">
              {heroDetailsData.locations.map((loc) => (
                <div key={loc} className="flex items-center gap-2 px-3 py-2 rounded border border-border bg-gray-50 dark:bg-surface-alt shadow-sm shrink-0 transition-colors hover:bg-white hover:border-accent/30 dark:hover:bg-surface cursor-default">
                  <MapPin size={14} className="text-accent" />
                  <span className="text-[13px] font-semibold text-gray-700 dark:text-gray-300">
                    {loc}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: KEY DETAILS */}
        <motion.div variants={item} className="col-span-12 lg:col-span-5 bg-white dark:bg-surface rounded-lg border border-gray-100 dark:border-border p-8 shadow-sm flex flex-col justify-between h-full hover-lift">
          <div className="grid grid-cols-2 gap-3 mb-6">
            {heroDetailsData.keyDetails.map((detail, i) => (
              <div key={i} className="flex gap-3 items-center bg-gray-50/50 dark:bg-surface-alt/30 p-3 rounded-lg border border-border shadow-xs hover:shadow-sm transition-all duration-300">
                <div className={clsx("w-9 h-9 rounded-full flex items-center justify-center shrink-0 border border-white/50 dark:border-border shadow-sm", getIconContainerStyles(detail.intent))}>
                  <detail.icon size={16} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500 dark:text-gray-400">{detail.label}</span>
                  <span className="text-[13px] font-bold text-gray-900 dark:text-white leading-tight">{detail.value}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full py-3 bg-primary hover:bg-primary-light text-white rounded-[4px] text-[14px] font-bold shadow-sm flex items-center justify-center gap-2 transition-all duration-300 hover-lift mt-auto">
            Visit Website <ExternalLink size={16} className="text-accent" />
          </button>
        </motion.div>
      </div>

      {/* STATS STRIP (Full Width Bottom) */}
      <motion.div variants={item} className="w-full gradient-primary rounded-lg py-6 px-6 shadow-md flex items-center justify-between text-white mt-2">
        <div className="flex w-full justify-between items-center px-4 divide-x divide-white/20">
          {heroDetailsData.stats.map((stat, i) => (
             <div key={i} className="flex items-center gap-4 flex-1 justify-center px-4">
               <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/20 shrink-0 shadow-inner">
                 <stat.icon size={22} className="text-accent-highlight" strokeWidth={1.5} />
               </div>
               <div className="flex flex-col">
                 <span className="text-[28px] font-black text-white leading-none mb-0.5">{stat.value}</span>
                 <span className="text-[11px] font-bold text-accent-highlight uppercase tracking-wider leading-tight">{stat.label}</span>
               </div>
             </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
