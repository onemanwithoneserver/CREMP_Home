import { heroDetailsData } from "./data";
import { ExternalLink, MapPin, ArrowRight } from "lucide-react";
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

export default function HeroBottomDetailsMobile() {
  return (
    <motion.section 
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full bg-background p-4 flex flex-col gap-4 font-sans"
    >
      {/* WHY PARTNER WITH US */}
      <motion.div variants={item} className="bg-white dark:bg-surface rounded-2xl border border-gray-100 dark:border-border p-6 shadow-sm flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <h3 className="text-[12px] font-bold text-gray-800 dark:text-primary tracking-[0.2em] uppercase">{heroDetailsData.whyPartnerTitle}</h3>
          <div className="h-px bg-gray-100 dark:bg-border flex-1" />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {heroDetailsData.partnerFeatures.map((feature, i) => (
            <div key={i} className="flex flex-col items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-surface-alt border border-gray-100 dark:border-border flex items-center justify-center shadow-sm">
                <feature.icon size={18} className="text-[#c69a54] dark:text-accent" strokeWidth={1.5} />
              </div>
              <h4 className="text-[12px] font-bold text-gray-900 dark:text-primary leading-tight pr-2">{feature.title}</h4>
            </div>
          ))}
        </div>
      </motion.div>

      {/* KEY DETAILS */}
      <motion.div variants={item} className="bg-white dark:bg-surface rounded-2xl border border-gray-100 dark:border-border p-6 shadow-sm flex flex-col">
        <div className="flex items-center gap-3 mb-5">
          <h3 className="text-[12px] font-bold text-gray-800 dark:text-primary tracking-[0.2em] uppercase">{heroDetailsData.keyDetailsTitle}</h3>
          <div className="h-px bg-gray-100 dark:bg-border flex-1" />
        </div>
        <div className="grid grid-cols-1 gap-3 mb-6">
          {heroDetailsData.keyDetails.map((detail, i) => (
            <div key={i} className="flex gap-3 items-center bg-[#fafafa] dark:bg-surface-alt/50 p-3 rounded-xl border border-gray-100 dark:border-border/50">
              <div className="w-9 h-9 rounded-lg bg-white dark:bg-background flex items-center justify-center shrink-0 border border-gray-50 dark:border-border/20 shadow-sm">
                <detail.icon size={14} className="text-[#c69a54] dark:text-accent" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[9px] uppercase font-bold tracking-widest text-gray-500 dark:text-primary/50">{detail.label}</span>
                <span className="text-xs font-bold text-gray-900 dark:text-primary leading-tight">{detail.value}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full py-3.5 bg-[#0b162c] dark:bg-accent hover:bg-[#122244] dark:hover:bg-accent/90 text-white rounded-lg text-sm font-bold shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95">
          Visit Website <ExternalLink size={14} />
        </button>
      </motion.div>

      {/* WHERE WE BREW */}
      <motion.div variants={item} className="bg-white dark:bg-surface rounded-2xl border border-gray-100 dark:border-border p-5 shadow-sm flex flex-col relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_#000_1px,_transparent_1px)] bg-[length:4px_4px]" />
        <div className="flex items-center justify-between mb-5 relative z-10">
          <div className="flex items-center gap-2">
            <MapPin className="text-[#c69a54] dark:text-accent" size={18} strokeWidth={1.5} />
            <h3 className="text-[12px] font-bold text-gray-800 dark:text-primary tracking-[0.2em] uppercase">{heroDetailsData.locationsTitle}</h3>
          </div>
          <button className="flex items-center gap-1 text-[9px] font-bold text-gray-400 dark:text-primary/60 hover:text-[#c69a54] dark:hover:text-accent transition-colors uppercase tracking-widest">
            View All <ArrowRight size={10} />
          </button>
        </div>
        <div className="flex flex-wrap gap-2 relative z-10">
          {heroDetailsData.locations.map((loc) => (
            <span key={loc} className="px-3 py-1.5 rounded-lg border border-gray-100 dark:border-border bg-white dark:bg-background text-[10px] font-bold text-gray-700 dark:text-primary/80 shadow-sm">
              {loc}
            </span>
          ))}
        </div>
      </motion.div>

      {/* STATS STRIP */}
      <motion.div variants={item} className="bg-[#0b162c] dark:bg-primary rounded-2xl p-5 shadow-md flex flex-col gap-4 text-white relative overflow-hidden border border-[#1a2b52] dark:border-border">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.03)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.03)_50%,rgba(255,255,255,0.03)_75%,transparent_75%,transparent)] bg-[length:32px_32px] pointer-events-none opacity-50" />
        <div className="grid grid-cols-2 gap-4 relative z-10">
          {heroDetailsData.stats.map((stat, i) => (
             <div key={i} className="flex items-center gap-3">
               <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 shadow-inner">
                 <stat.icon size={18} className="text-[#c69a54] dark:text-accent-light" strokeWidth={1.5} />
               </div>
               <div className="flex flex-col">
                 <span className="text-[20px] font-black text-white leading-none">{stat.value}</span>
                 <span className="text-[8px] font-bold text-gray-400 mt-1 uppercase tracking-widest leading-tight">{stat.label}</span>
               </div>
             </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
