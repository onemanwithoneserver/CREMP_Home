import { heroDetailsData } from "./data";
import { ExternalLink, MapPin } from "lucide-react";
import clsx from "clsx";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { type: "spring", stiffness: 200, damping: 20 } 
  }
};

const innerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const innerItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function HeroBottomDetailsMobile() {
  return (
    <motion.section 
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full bg-background p-4 flex flex-col gap-4 relative overflow-hidden"
    >
      <div className="absolute top-10 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <motion.div 
        variants={item} 
        className="relative bg-white/90 dark:bg-surface/90 backdrop-blur-sm rounded-xl border border-gray-100 dark:border-white/5 p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] flex flex-col overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 opacity-50 pointer-events-none" />
        
        <div className="flex items-center gap-3 mb-5 relative z-10">
          <h3 className="text-[11px] font-bold text-cremp-primary dark:text-primary tracking-[0.2em] uppercase">
            {heroDetailsData.whyPartnerTitle}
          </h3>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-gradient-to-r from-cremp-accent to-transparent dark:from-primary/50 flex-1 origin-left" 
          />
        </div>
        
        <motion.div 
          variants={innerContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 gap-4 relative z-10"
        >
          {heroDetailsData.partnerFeatures.map((feature, i) => (
            <motion.div variants={innerItem} key={i} className="flex flex-col items-start gap-2.5 group">
              <motion.div 
                whileTap={{ scale: 0.9 }}
                className={clsx(
                  "w-10 h-10 rounded-full border border-gray-100 dark:border-white/10 flex items-center justify-center shadow-sm relative overflow-hidden", 
                  feature.colorClass
                )}
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-active:translate-y-0 transition-transform duration-300" />
                <feature.icon size={18} strokeWidth={1.5} className="relative z-10" />
              </motion.div>
              <h4 className="text-[11px] font-bold text-gray-900 dark:text-gray-100 leading-tight pr-1">
                {feature.title}
              </h4>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div 
        variants={item} 
        className="relative bg-white/90 dark:bg-surface/90 backdrop-blur-sm rounded-xl border border-gray-100 dark:border-white/5 p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] flex flex-col overflow-hidden"
      >
        <div className="flex items-center gap-3 mb-4 relative z-10">
          <h3 className="text-[11px] font-bold text-cremp-primary dark:text-primary tracking-[0.2em] uppercase">
            {heroDetailsData.keyDetailsTitle}
          </h3>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-gradient-to-r from-cremp-accent to-transparent dark:from-primary/50 flex-1 origin-left" 
          />
        </div>
        
        <motion.div 
          variants={innerContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-2.5 mb-5 relative z-10"
        >
          {heroDetailsData.keyDetails.map((detail, i) => (
            <motion.div 
              variants={innerItem}
              whileTap={{ scale: 0.98, x: 2 }}
              key={i} 
              className="flex gap-3 items-center bg-gray-50/80 dark:bg-surface-alt/50 p-3 rounded-lg border border-gray-100 dark:border-white/5 shadow-[0_2px_10px_rgb(0,0,0,0.02)] transition-colors active:border-primary/30"
            >
              <div className={clsx(
                "w-9 h-9 rounded-full flex items-center justify-center shrink-0 border border-white/50 dark:border-white/10 shadow-sm", 
                detail.colorClass
              )}>
                <detail.icon size={14} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] uppercase font-bold tracking-widest text-gray-500 dark:text-gray-400 mb-0.5">
                  {detail.label}
                </span>
                <span className="text-xs font-bold text-gray-900 dark:text-white leading-tight">
                  {detail.value}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.button 
          whileTap={{ scale: 0.96 }}
          className="w-full py-3.5 bg-primary text-white rounded-lg text-[13px] font-bold shadow-lg shadow-primary/25 flex items-center justify-center gap-2 relative overflow-hidden group z-10"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite] skew-x-12" />
          <span className="relative z-10 flex items-center gap-2">
            Visit Website 
            <ExternalLink size={14} className="text-accent" />
          </span>
        </motion.button>
      </motion.div>

      <motion.div 
        variants={item} 
        className="relative bg-white/90 dark:bg-surface/90 backdrop-blur-sm rounded-xl border border-gray-100 dark:border-white/5 p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] flex flex-col overflow-hidden"
      >
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] bg-[radial-gradient(circle_at_center,_#000_1px,_transparent_1px)] dark:bg-[radial-gradient(circle_at_center,_#fff_1px,_transparent_1px)] bg-[length:4px_4px]" />
        
        <div className="flex items-center justify-between mb-4 relative z-10">
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <MapPin className="text-accent" size={16} strokeWidth={1.5} />
            </motion.div>
            <h3 className="text-[11px] font-bold text-cremp-primary dark:text-primary tracking-[0.2em] uppercase">
              {heroDetailsData.locationsTitle}
            </h3>
          </div>
        </div>
        
        <motion.div 
          variants={innerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-wrap gap-2 relative z-10"
        >
          {heroDetailsData.locations.map((loc) => (
            <motion.div 
              variants={innerItem}
              whileTap={{ scale: 0.92 }}
              key={loc} 
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50/80 dark:bg-surface-alt/80 shadow-xs transition-colors active:border-accent/40 active:bg-white dark:active:bg-surface"
            >
              <span className="text-[10px] font-bold text-gray-700 dark:text-gray-200">{loc}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div 
        variants={item} 
        className="w-full bg-gradient-to-br from-primary via-primary-light to-primary rounded-xl p-6 shadow-xl shadow-primary/10 flex flex-col gap-5 text-white border-none mt-1 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent w-[200%]"
        />

        <motion.div 
          variants={innerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 relative z-10"
        >
          {heroDetailsData.stats.map((stat, i) => (
             <motion.div 
               variants={innerItem}
               key={i} 
               className="flex items-center gap-3"
             >
               <motion.div 
                 whileTap={{ scale: 1.1 }}
                 className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 shadow-inner backdrop-blur-md shrink-0"
               >
                 <stat.icon size={18} className={stat.color || "text-accent-highlight"} strokeWidth={1.5} />
               </motion.div>
               <div className="flex flex-col">
                 <motion.span 
                   initial={{ opacity: 0, scale: 0.5 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: i * 0.1 + 0.3, type: "spring" }}
                   className="text-[20px] font-black text-white leading-none mb-1 drop-shadow-sm"
                 >
                   {stat.value}
                 </motion.span>
                 <span className="text-[8px] font-bold text-accent-highlight uppercase tracking-[0.15em] leading-tight opacity-90">
                   {stat.label}
                 </span>
               </div>
             </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}