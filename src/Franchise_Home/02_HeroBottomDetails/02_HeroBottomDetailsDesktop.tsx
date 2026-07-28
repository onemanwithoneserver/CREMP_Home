import { heroDetailsData } from "./data";
import { ExternalLink, MapPin } from "lucide-react";
import { motion } from "framer-motion";

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
          <motion.div variants={item} className="bg-white dark:bg-surface rounded-2xl border border-gray-100 dark:border-border p-8 shadow-sm flex flex-col justify-center flex-1">
            <div className="flex items-center gap-3 mb-10 justify-center">
              <div className="h-px bg-gradient-to-r from-transparent to-[#c69a54] w-12 relative">
                <div className="absolute right-0 -top-[3px] w-1.5 h-1.5 rotate-45 bg-[#c69a54]"></div>
              </div>
              <h3 className="text-[16px] font-bold text-[#0b162c] dark:text-primary tracking-[0.1em] uppercase">{heroDetailsData.whyPartnerTitle}</h3>
              <div className="h-px bg-gradient-to-l from-transparent to-[#c69a54] w-12 relative">
                <div className="absolute left-0 -top-[3px] w-1.5 h-1.5 rotate-45 bg-[#c69a54]"></div>
              </div>
            </div>
            
            <div className="flex w-full divide-x divide-gray-100 dark:divide-gray-800 flex-1 items-stretch">
              {heroDetailsData.partnerFeatures.map((feature, i) => (
                <div key={i} className="flex flex-col items-center flex-1 px-4 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#c69a54]/10 to-transparent p-[1px] mb-5">
                    <div className="w-full h-full rounded-full border-2 border-[#c69a54] flex items-center justify-center bg-white dark:bg-surface-alt">
                      <feature.icon size={32} className="text-[#c69a54]" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h4 className="text-[13px] font-bold text-[#0b162c] dark:text-primary leading-snug mb-3">{feature.title}</h4>
                  <div className="w-6 h-0.5 bg-[#c69a54] mx-auto"></div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* WHERE WE BREW */}
          <motion.div variants={item} className="bg-white dark:bg-surface rounded-2xl border border-gray-100 dark:border-border p-8 shadow-sm flex flex-col relative overflow-hidden">
            <div className="flex items-center gap-3 mb-3 relative z-10">
              <MapPin className="text-[#c69a54] dark:text-accent" size={22} strokeWidth={2} />
              <h3 className="text-[16px] font-bold text-[#0b162c] dark:text-primary tracking-[0.1em] uppercase">{heroDetailsData.locationsTitle}</h3>
            </div>
            <div className="w-32 h-0.5 bg-[#c69a54] mb-8"></div>
            <div className="flex flex-wrap gap-3 relative z-10">
              {heroDetailsData.locations.map((loc) => (
                <div key={loc} className="flex items-center gap-2.5 px-4 py-3 rounded-lg border border-gray-100 dark:border-border bg-white dark:bg-background shadow-sm shrink-0">
                  <MapPin size={14} className="text-[#c69a54]" />
                  <span className="text-[12px] font-bold text-[#0b162c] dark:text-primary/80">
                    {loc}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: KEY DETAILS */}
        <motion.div variants={item} className="col-span-12 lg:col-span-5 bg-white dark:bg-surface rounded-2xl border border-gray-100 dark:border-border p-8 shadow-sm flex flex-col justify-between h-full">
          <div className="grid grid-cols-2 gap-3 mb-3">
            {heroDetailsData.keyDetails.map((detail, i) => (
              <div key={i} className="flex gap-4 items-center bg-white dark:bg-surface-alt/50 p-4 rounded-xl border border-gray-100 dark:border-border/50 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#0b162c] dark:bg-background flex items-center justify-center shrink-0 shadow-sm">
                  <detail.icon size={18} className="text-white dark:text-accent" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-gray-500 dark:text-primary/50">{detail.label}</span>
                  <span className="text-[13px] font-bold text-[#0b162c] dark:text-primary leading-tight">{detail.value}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full py-4 bg-[#0b162c] dark:bg-accent hover:bg-[#122244] dark:hover:bg-accent/90 text-white rounded-xl text-[15px] font-bold shadow-md flex items-center justify-center gap-2 transition-transform hover:-translate-y-0.5 mt-auto">
            Visit Website <ExternalLink size={18} className="text-[#c69a54]" />
          </button>
        </motion.div>
      </div>

      {/* STATS STRIP (Full Width Bottom) */}
      <motion.div variants={item} className="w-full bg-[#0b162c] dark:bg-primary rounded-2xl py-8 px-6 shadow-md flex items-center justify-between text-white border-none mt-2">
        <div className="flex w-full justify-between items-center px-4 divide-x divide-white/10">
          {heroDetailsData.stats.map((stat, i) => (
             <div key={i} className="flex items-center gap-5 flex-1 justify-center px-4">
               <div className="w-14 h-14 flex items-center justify-center rounded-full border border-[#c69a54] shrink-0">
                 <stat.icon size={26} className="text-[#c69a54]" strokeWidth={1.5} />
               </div>
               <div className="flex flex-col">
                 <span className="text-[32px] font-bold text-[#c69a54] leading-none mb-1">{stat.value}</span>
                 <span className="text-[10px] font-bold text-white uppercase tracking-widest leading-tight">{stat.label}</span>
               </div>
             </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
