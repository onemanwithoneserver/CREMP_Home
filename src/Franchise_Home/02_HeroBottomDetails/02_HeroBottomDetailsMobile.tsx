import { heroDetailsData } from "./data";
import { ExternalLink, MapPin, ArrowRight } from "lucide-react";
import clsx from "clsx";
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

const getIntentStyles = (intent?: string) => {
  switch(intent) {
    case 'success': return 'text-success bg-success-surface border-success-light dark:bg-success/10 dark:border-success/20';
    case 'info': return 'text-info bg-info-surface border-info-light dark:bg-info/10 dark:border-info/20';
    case 'warning': return 'text-warning bg-warning-surface border-warning-light dark:bg-warning/10 dark:border-warning/20';
    case 'danger': return 'text-error bg-error-surface border-error-light dark:bg-error/10 dark:border-error/20';
    case 'primary': return 'text-primary bg-primary/5 border-primary/10 dark:text-accent dark:bg-accent/10 dark:border-accent/20';
    default: return 'text-gray-600 bg-gray-50 border-gray-200 dark:text-gray-300 dark:bg-surface-alt dark:border-border';
  }
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
      <motion.div variants={item} className="bg-white dark:bg-surface rounded-lg border border-gray-100 dark:border-border p-6 shadow-sm flex flex-col hover-lift">
        <div className="flex items-center gap-3 mb-6">
          <h3 className="text-[12px] font-bold text-gray-800 dark:text-primary tracking-[0.2em] uppercase">{heroDetailsData.whyPartnerTitle}</h3>
          <div className="h-px bg-gray-100 dark:bg-border flex-1" />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {heroDetailsData.partnerFeatures.map((feature, i) => (
            <div key={i} className="flex flex-col items-start gap-3">
              <div className={clsx("w-10 h-10 rounded-full border flex items-center justify-center shadow-xs transition-transform hover:scale-110", getIntentStyles(feature.intent))}>
                <feature.icon size={18} strokeWidth={1.5} />
              </div>
              <h4 className="text-[12px] font-bold text-gray-900 dark:text-primary leading-tight pr-2">{feature.title}</h4>
            </div>
          ))}
        </div>
      </motion.div>

      {/* KEY DETAILS */}
      <motion.div variants={item} className="bg-white dark:bg-surface rounded-lg border border-gray-100 dark:border-border p-6 shadow-sm flex flex-col hover-lift">
        <div className="flex items-center gap-3 mb-5">
          <h3 className="text-[12px] font-bold text-gray-800 dark:text-primary tracking-[0.2em] uppercase">{heroDetailsData.keyDetailsTitle}</h3>
          <div className="h-px bg-gray-100 dark:bg-border flex-1" />
        </div>
        <div className="grid grid-cols-1 gap-3 mb-6">
          {heroDetailsData.keyDetails.map((detail, i) => (
            <div key={i} className="flex gap-3 items-center bg-white dark:bg-surface p-3 rounded-lg border border-gray-100 dark:border-border shadow-xs hover:border-gray-200 dark:hover:border-gray-700 transition-colors">
              <div className={clsx("w-8 h-8 rounded-full flex items-center justify-center shrink-0 border", getIntentStyles(detail.intent))}>
                <detail.icon size={14} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[9px] uppercase font-bold tracking-widest text-gray-500 dark:text-primary/50">{detail.label}</span>
                <span className="text-xs font-bold text-gray-900 dark:text-primary leading-tight">{detail.value}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full mt-2 py-3 bg-[#0b162c] dark:bg-accent hover:bg-[#122244] dark:hover:bg-accent/90 text-white rounded-lg text-[13px] font-bold shadow-sm flex items-center justify-center gap-2 transition-transform hover:-translate-y-0.5">
          Visit Website <ExternalLink size={14} />
        </button>
      </motion.div>

      {/* WHERE WE BREW */}
      <motion.div variants={item} className="bg-white dark:bg-surface rounded-lg border border-gray-100 dark:border-border p-6 shadow-sm flex flex-col relative overflow-hidden hover-lift">
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
            <div key={loc} className="flex items-center gap-2 px-3 py-2 rounded border border-gray-100 dark:border-border bg-gray-50 dark:bg-surface-alt shadow-xs transition-colors hover:bg-white dark:hover:bg-surface">
              <MapPin size={12} className="text-[#c69a54]" />
              <span className="text-[10px] font-bold text-gray-700 dark:text-primary/80">{loc}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* STATS STRIP */}
      <motion.div variants={item} className="w-full bg-[#0b162c] dark:bg-surface-alt rounded-lg p-6 shadow-md flex flex-col gap-6 text-white border-none mt-2">
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
