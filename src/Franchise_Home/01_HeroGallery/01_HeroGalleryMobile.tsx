
import { heroGalleryData } from "./data";
import { Coffee, Play, ExternalLink, ArrowRight, MapPin } from "lucide-react";
import { TextEffect } from "../../../components/motion-primitives/text-effect";

import mainCupImg from "../../assets/main_coffee_cup.png";

export default function HeroGalleryMobile() {
  return (
    <section className="w-full bg-background transition-colors duration-300 p-4 flex flex-col gap-4 font-sans">
      <div className="bg-surface border border-border rounded-3xl p-6 shadow-sm flex flex-col">
        <div className="flex items-center gap-3 mb-5">
          <Coffee className="text-accent" size={28} strokeWidth={2.5} />
          <div className="flex flex-col">
             <h1 className="text-[22px] font-serif font-black tracking-widest text-primary uppercase leading-none">
               <TextEffect per="char" preset="fade">THE URBAN</TextEffect>
             </h1>
             <div className="flex items-center gap-1.5 mt-1">
               <div className="h-px bg-accent-light w-4" />
               <span className="text-[8px] tracking-widest text-primary text-opacity-90 font-bold uppercase">BREW CO.</span>
               <div className="h-px bg-accent-light w-4" />
             </div>
          </div>
        </div>

        <p className="text-xs font-semibold text-primary text-opacity-80 tracking-wide mb-3">
          {heroGalleryData.category}
        </p>

        <h2 className="text-[32px] leading-[1.15] font-serif font-bold text-primary mb-4">
          <TextEffect per="word" preset="blur">Redefining the café experience, </TextEffect>
          <span className="text-accent-dark italic font-medium">{heroGalleryData.titleHighlight}</span> at a time.
        </h2>

        <p className="text-[13px] text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          {heroGalleryData.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {heroGalleryData.tags.map((tag, i) => (
            <div key={i} className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-accent/30 dark:border-gray-700 bg-surface-alt shadow-sm">
              <tag.icon size={14} className="text-accent-dark" />
              <span className="text-[10px] font-bold text-primary">{tag.label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <button className="w-full flex items-center justify-center gap-2 bg-primary text-white px-5 py-3.5 rounded-xl text-[13px] font-bold shadow-md">
            <heroGalleryData.buttons.primary.icon size={16} />
            {heroGalleryData.buttons.primary.label}
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-surface hover:bg-surface-alt text-primary border border-border-light px-5 py-3.5 rounded-xl text-[13px] font-bold shadow-sm">
            <heroGalleryData.buttons.secondary.icon size={16} className="text-accent dark:text-accent-light" />
            {heroGalleryData.buttons.secondary.label}
          </button>
        </div>
      </div>
      <div className="relative rounded-3xl overflow-hidden shadow-sm bg-white aspect-square">
        <img src={mainCupImg} alt="Urban Brew Main" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/10 flex flex-col items-center justify-end pb-6">
           <div className="w-14 h-14 rounded-full bg-[#0b1b42] flex items-center justify-center shadow-xl mb-3 border-2 border-white/20">
             <Play size={20} className="text-white ml-1" fill="white" />
           </div>
          <span className="bg-white/95 backdrop-blur-sm text-[#0b1b42] font-bold text-[10px] px-5 py-2 rounded-full shadow-lg">
            Watch Brand Story
          </span>
        </div>
      </div>
      <div className="bg-surface rounded-3xl border border-border p-6 flex flex-col items-center shadow-sm">
        <div className="flex items-center gap-3 w-full justify-center mb-6">
          <div className="h-px bg-gradient-to-r from-transparent to-amber-300 w-12" />
          <h3 className="text-[13px] font-serif font-black text-primary tracking-widest">{heroGalleryData.whyPartnerTitle}</h3>
          <div className="h-px bg-gradient-to-l from-transparent to-amber-300 w-12" />
        </div>

        <div className="grid grid-cols-2 gap-y-6 gap-x-2 w-full">
          {heroGalleryData.partnerFeatures.map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center px-1">
              <div className="w-12 h-12 rounded-full border border-border-light flex items-center justify-center mb-3 text-primary bg-surface-alt shadow-sm">
                <feature.icon size={20} strokeWidth={1.5} className="text-primary dark:text-accent" />
              </div>
              <h4 className="text-[11px] font-bold text-primary mb-1.5 leading-tight">{feature.title}</h4>
              <p className="text-[9px] text-gray-500 dark:text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-surface rounded-3xl border border-border p-5 flex flex-col gap-4 shadow-sm relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_#000_1px,_transparent_1px)] bg-[length:4px_4px]" />
        <div className="flex items-center gap-2 relative z-10">
          <MapPin className="text-accent" size={18} fill="currentColor" />
          <h3 className="text-[13px] font-serif font-black text-primary tracking-widest">{heroGalleryData.locationsTitle}</h3>
        </div>
        <div className="flex flex-wrap gap-2 relative z-10">
          {heroGalleryData.locations.map((loc) => (
            <span key={loc} className="px-3 py-1.5 rounded-full border border-border-light bg-surface-alt text-[10px] font-bold text-gray-600 dark:text-gray-300 shadow-sm">
              {loc}
            </span>
          ))}
        </div>
        <button className="flex items-center justify-center gap-1.5 w-full text-[11px] font-bold text-primary hover:gap-2 transition-all mt-1 group">
          View all locations <ArrowRight size={12} className="group-hover:text-accent transition-colors" />
        </button>
      </div>
      <div className="bg-surface rounded-3xl border border-border p-6 shadow-sm flex flex-col">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px bg-accent/40 w-10" />
          <h3 className="text-[11px] font-bold text-primary dark:text-accent uppercase tracking-widest">{heroGalleryData.keyDetailsTitle}</h3>
          <div className="h-px bg-accent/40 w-10" />
        </div>

        <div className="grid grid-cols-2 gap-y-5 gap-x-3 mb-6">
          {heroGalleryData.keyDetails.map((detail, i) => (
            <div key={i} className="flex gap-2.5 items-start">
              <div className="w-7 h-7 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center shrink-0">
                <detail.icon size={12} className="text-gray-400 dark:text-accent" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[8px] uppercase font-bold tracking-wider text-gray-400">{detail.label}</span>
                <span className="text-[10px] font-bold text-primary leading-tight pr-1">{detail.value}</span>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-primary rounded-xl text-xs font-black shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 mt-2">
          Visit Website <ExternalLink size={14} />
        </button>
      </div>
      <div className="w-full bg-primary rounded-3xl p-5 shadow-md flex flex-col gap-5 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.02)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.02)_50%,rgba(255,255,255,0.02)_75%,transparent_75%,transparent)] bg-[length:24px_24px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 blur-2xl pointer-events-none" />

        <div className="grid grid-cols-2 gap-4 relative z-10">
          {heroGalleryData.stats.map((stat, i) => (
             <div key={i} className="flex items-center gap-3">
               <div className="w-10 h-10 flex items-center justify-center rounded-full border border-accent-light/30 shrink-0">
                 <stat.icon size={18} className="text-accent-light" />
               </div>
               <div className="flex flex-col">
                 <span className="text-xl font-black text-accent-light leading-none">{stat.value}</span>
                 <span className="text-[8px] font-bold text-gray-300 mt-1 uppercase tracking-wider leading-tight">{stat.label}</span>
               </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
