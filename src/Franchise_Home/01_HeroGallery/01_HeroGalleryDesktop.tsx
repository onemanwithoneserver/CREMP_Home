import { heroGalleryData } from "./data";
import { Coffee, Play, ExternalLink, ArrowRight, MapPin } from "lucide-react";
import { TextEffect } from "../../../components/motion-primitives/text-effect";
import { motion } from "framer-motion";
import mainCupImg from "../../assets/main_coffee_cup.png";
import equipmentImg from "../../assets/coffee_equipment.png";
import beansImg from "../../assets/coffee_beans.png";
import interiorImg from "../../assets/cafe_interior.png";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};
const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function HeroGalleryDesktop() {
  return (
    <motion.section 
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-[1440px] mx-auto bg-background transition-colors duration-300 p-4 lg:p-6 flex flex-col gap-4 font-sans"
    >
      <div className="grid grid-cols-12 gap-4 min-h-[480px]">
        <motion.div variants={item} className="col-span-12 lg:col-span-6 bg-surface border border-border rounded-2xl overflow-hidden shadow-sm flex flex-col justify-center p-8 relative group hover:border-accent/30 transition-colors duration-500">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-3xl rounded-full pointer-events-none" />
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
              <Coffee size={28} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
               <h1 className="text-2xl font-serif font-black tracking-widest text-primary uppercase leading-none">
                 <TextEffect per="char" preset="fade">THE URBAN</TextEffect>
               </h1>
               <div className="flex items-center gap-2 mt-1">
                 <div className="h-px bg-accent w-6" />
                 <span className="text-[10px] tracking-widest text-primary/80 font-bold uppercase">BREW CO.</span>
               </div>
            </div>
          </div>
          <p className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">
            {heroGalleryData.category}
          </p>
          <h2 className="text-4xl leading-[1.15] font-serif font-bold text-primary mb-6">
            <TextEffect per="word" preset="blur">Redefining the café experience, </TextEffect>
            <span className="text-accent-dark italic font-medium relative whitespace-nowrap">
              {heroGalleryData.titleHighlight}
              <svg className="absolute -bottom-1 left-0 w-full h-2 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </span> at a time.
          </h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {heroGalleryData.tags.map((tag, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-surface-alt/50 shadow-sm">
                <tag.icon size={14} className="text-accent" />
                <span className="text-xs font-bold text-primary/90">{tag.label}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 dark:bg-accent dark:hover:bg-accent/90 text-white px-5 py-3 rounded-lg text-sm font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
              <heroGalleryData.buttons.primary.icon size={16} />
              {heroGalleryData.buttons.primary.label}
            </button>
            <button className="flex items-center gap-2 bg-transparent hover:bg-surface-alt text-primary border border-border px-5 py-3 rounded-lg text-sm font-bold transition-all hover:-translate-y-0.5">
              <heroGalleryData.buttons.secondary.icon size={16} className="text-accent" />
              {heroGalleryData.buttons.secondary.label}
            </button>
          </div>
        </motion.div>
        <motion.div variants={item} className="col-span-12 lg:col-span-4 relative rounded-2xl overflow-hidden shadow-sm group">
          <img src={mainCupImg} alt="Urban Brew Main" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex flex-col items-center justify-end pb-8 opacity-90 group-hover:opacity-100 transition-opacity">
             <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center shadow-2xl mb-3 border border-white/30 cursor-pointer group-hover:scale-110 group-hover:bg-accent transition-all duration-300">
               <Play size={20} className="text-white ml-1" fill="white" />
             </div>
            <span className="text-white font-semibold text-xs tracking-wide">
              Watch Brand Story
            </span>
          </div>
        </motion.div>
        <motion.div variants={item} className="col-span-12 lg:col-span-2 flex flex-col gap-4">
          <div className="h-1/2 rounded-2xl overflow-hidden relative shadow-sm group">
            <img src={interiorImg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Interior" />
          </div>
          <div className="h-1/2 grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden relative shadow-sm group cursor-pointer">
              <img src={beansImg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Beans" />
            </div>
            <div className="rounded-2xl overflow-hidden relative shadow-sm group cursor-pointer">
              <img src={equipmentImg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Equipment" />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <motion.div variants={item} className="col-span-12 lg:col-span-7 bg-surface rounded-2xl border border-border p-6 shadow-sm flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10 transition-all group-hover:bg-accent/10" />
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-sm font-serif font-black text-primary tracking-widest uppercase">{heroGalleryData.whyPartnerTitle}</h3>
            <div className="h-px bg-border flex-1" />
          </div>
          <div className="flex justify-between items-stretch w-full gap-4 relative z-10">
            {heroGalleryData.partnerFeatures.map((feature, i) => (
              <div key={i} className="flex flex-col items-start flex-1 group/feature cursor-default">
                <div className="w-10 h-10 rounded-lg bg-surface-alt border border-border flex items-center justify-center mb-3 text-primary group-hover/feature:bg-accent group-hover/feature:border-accent group-hover/feature:-translate-y-1 transition-all duration-300">
                  <feature.icon size={18} className="text-accent group-hover/feature:text-white transition-colors" />
                </div>
                <h4 className="text-sm font-bold text-primary mb-1">{feature.title}</h4>
                <p className="text-xs text-primary/60 leading-relaxed pr-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div variants={item} className="col-span-12 lg:col-span-5 bg-surface rounded-2xl border border-border p-6 shadow-sm flex flex-col justify-between hover:border-accent/30 transition-colors">
          <div className="flex items-center gap-3 mb-5">
            <h3 className="text-sm font-serif font-black text-primary tracking-widest uppercase">{heroGalleryData.keyDetailsTitle}</h3>
            <div className="h-px bg-border flex-1" />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {heroGalleryData.keyDetails.map((detail, i) => (
              <div key={i} className="flex gap-3 items-center bg-surface-alt/50 p-2.5 rounded-lg border border-border/50">
                <div className="w-8 h-8 rounded-md bg-background flex items-center justify-center shrink-0 shadow-sm">
                  <detail.icon size={14} className="text-accent" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase font-bold tracking-wider text-primary/50">{detail.label}</span>
                  <span className="text-xs font-bold text-primary leading-tight">{detail.value}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full py-3 bg-primary hover:bg-primary/90 dark:bg-accent dark:hover:bg-accent/90 text-white rounded-lg text-sm font-bold shadow-md flex items-center justify-center gap-2 transition-transform hover:-translate-y-0.5">
            Visit Website <ExternalLink size={14} />
          </button>
        </motion.div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <motion.div variants={item} className="col-span-12 lg:col-span-4 bg-surface rounded-2xl border border-border p-5 shadow-sm flex flex-col justify-between relative overflow-hidden group">
           <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_center,_#000_1px,_transparent_1px)] bg-[length:4px_4px]" />
          <div className="flex items-center justify-between mb-4 relative z-10">
            <div className="flex items-center gap-2">
              <MapPin className="text-accent" size={18} />
              <h3 className="text-sm font-serif font-black text-primary tracking-widest uppercase">{heroGalleryData.locationsTitle}</h3>
            </div>
            <button className="flex items-center gap-1 text-[10px] font-bold text-primary/60 hover:text-accent transition-colors group/btn uppercase tracking-wide">
              View All <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="flex flex-wrap gap-2 relative z-10">
            {heroGalleryData.locations.map((loc) => (
              <span key={loc} className="px-3 py-1.5 rounded-md border border-border bg-background text-xs font-semibold text-primary/80 hover:border-accent hover:text-accent transition-colors cursor-default">
                {loc}
              </span>
            ))}
          </div>
        </motion.div>
        <motion.div variants={item} className="col-span-12 lg:col-span-8 bg-primary rounded-2xl p-6 shadow-md flex items-center justify-between text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.02)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.02)_50%,rgba(255,255,255,0.02)_75%,transparent_75%,transparent)] bg-[length:24px_24px] pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-48 h-48 bg-accent/20 blur-[50px] pointer-events-none rounded-full" />
          <div className="flex w-full justify-around items-center relative z-10">
            {heroGalleryData.stats.map((stat, i) => (
               <div key={i} className="flex flex-col items-center sm:flex-row sm:items-center gap-3 text-center sm:text-left">
                 <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 shadow-inner">
                   <stat.icon size={20} className="text-accent-light" />
                 </div>
                 <div className="flex flex-col">
                   <span className="text-2xl font-black text-white leading-none">{stat.value}</span>
                   <span className="text-[10px] font-bold text-white/60 mt-1 uppercase tracking-widest leading-tight">{stat.label}</span>
                 </div>
               </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}