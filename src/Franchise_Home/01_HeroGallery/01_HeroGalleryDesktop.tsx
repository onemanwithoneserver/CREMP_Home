import { heroGalleryData } from "./data";
import { Coffee, Play, ExternalLink, ArrowRight, MapPin } from "lucide-react";
import { TextEffect } from "../../../components/motion-primitives/text-effect";

import mainCupImg from "../../assets/main_coffee_cup.png";
import equipmentImg from "../../assets/coffee_equipment.png";
import beansImg from "../../assets/coffee_beans.png";
import topDownImg from "../../assets/top_down_cups.png";
import interiorImg from "../../assets/cafe_interior.png";
import seatingImg from "../../assets/cafe_seating.png";

export default function HeroGalleryDesktop() {
  return (
    <section className="w-full bg-background transition-colors duration-300 p-6 flex flex-col gap-6 font-sans">
      
      <div className="grid grid-cols-12 gap-4 lg:gap-6 min-h-[520px]">
        <div className="col-span-12 lg:col-span-8 flex flex-col md:flex-row bg-surface border border-border rounded-lg overflow-hidden shadow-sm">
          <div className="w-full md:w-[55%] p-6 lg:p-8 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-3">
                <Coffee className="text-accent" size={36} strokeWidth={2.5} />
                <div className="flex flex-col">
                   <h1 className="text-2xl font-serif font-black tracking-widest text-primary uppercase leading-none">
                     <TextEffect per="char" preset="fade">THE URBAN</TextEffect>
                   </h1>
                   <div className="flex items-center gap-2 mt-1">
                     <div className="h-px bg-accent-light w-8" />
                     <span className="text-[10px] tracking-widest text-primary text-opacity-90 font-bold uppercase">BREW CO.</span>
                     <div className="h-px bg-accent-light w-8" />
                   </div>
                </div>
              </div>
            </div>

            <p className="text-[15px] font-semibold text-primary text-opacity-80 tracking-wide mb-5">
              {heroGalleryData.category}
            </p>

            <h2 className="text-[42px] leading-[1.1] font-serif font-bold text-primary mb-6">
              <TextEffect per="word" preset="blur">Redefining the café experience, </TextEffect>
              <span className="text-accent-dark italic font-medium">{heroGalleryData.titleHighlight}</span> at a time.
            </h2>

            <div className="flex flex-wrap gap-3 mb-10">
              {heroGalleryData.tags.map((tag, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2.5 rounded border border-accent/30 dark:border-gray-700 bg-surface-alt shadow-sm">
                  <tag.icon size={16} className="text-accent-dark" />
                  <span className="text-sm font-bold text-primary">{tag.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button className="flex items-center gap-2 bg-primary hover:bg-[#152756] dark:bg-[#1e3a8a] dark:hover:bg-[#2546a5] text-white px-6 py-3.5 rounded text-sm font-bold transition-all shadow-md">
                <heroGalleryData.buttons.primary.icon size={18} />
                {heroGalleryData.buttons.primary.label}
              </button>
              <button className="flex items-center gap-2 bg-surface hover:bg-surface-alt text-primary border border-border-light px-6 py-3.5 rounded text-sm font-bold transition-all shadow-sm">
                <heroGalleryData.buttons.secondary.icon size={18} className="text-accent dark:text-accent-light" />
                {heroGalleryData.buttons.secondary.label}
              </button>
            </div>
          </div>

          <div className="w-full md:w-[45%] relative group overflow-hidden">
            <img src={mainCupImg} alt="Urban Brew Main" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300 flex flex-col items-center justify-end pb-8">
               <div className="w-16 h-16 rounded-full bg-[#0b1b42] flex items-center justify-center shadow-2xl mb-4 border-2 border-white/20 cursor-pointer hover:scale-110 transition-transform">
                 <Play size={24} className="text-white ml-1" fill="white" />
               </div>
              <span className="bg-white/95 backdrop-blur-sm text-[#0b1b42] font-bold text-xs px-6 py-2.5 rounded-full shadow-lg">
                Watch Brand Story
              </span>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 flex flex-col gap-3 lg:gap-4">
          <div className="grid grid-cols-2 gap-3 lg:gap-4 h-1/2">
            <div className="rounded-lg overflow-hidden relative shadow-sm group">
              <img src={interiorImg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Interior" />
            </div>
            <div className="rounded-lg overflow-hidden relative shadow-sm group">
              <img src={equipmentImg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Equipment" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 lg:gap-4 h-1/2">
            <div className="rounded-lg overflow-hidden relative shadow-sm group cursor-pointer">
              <img src={beansImg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Beans" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={14} className="text-white ml-0.5" fill="white" />
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden relative shadow-sm group cursor-pointer">
              <img src={seatingImg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Seating" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={14} className="text-white ml-0.5" fill="white" />
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden relative shadow-sm group cursor-pointer">
              <img src={topDownImg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Top Down" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={14} className="text-white ml-0.5" fill="white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="bg-surface rounded-lg border border-border p-8 flex flex-col items-center flex-1 shadow-sm">
            <div className="flex items-center gap-4 w-full justify-center mb-8">
              <div className="h-px bg-gradient-to-r from-transparent to-amber-300 w-16" />
              <h3 className="text-[15px] font-serif font-black text-primary tracking-widest">{heroGalleryData.whyPartnerTitle}</h3>
              <div className="h-px bg-gradient-to-l from-transparent to-amber-300 w-16" />
            </div>

            <div className="flex justify-between items-stretch w-full gap-4 relative">
              {/* Divider lines between items */}
              <div className="absolute top-1/2 left-0 w-full h-px bg-gray-100 dark:bg-gray-800 -translate-y-1/2 hidden md:block z-0" />
              
              {heroGalleryData.partnerFeatures.map((feature, i) => (
                <div key={i} className="flex flex-col items-center text-center flex-1 z-10 px-2 group">
                  <div className="w-16 h-16 rounded-full border border-border-light flex items-center justify-center mb-4 text-primary bg-surface-alt shadow-sm group-hover:scale-110 transition-transform duration-300 group-hover:border-accent/30">
                    <feature.icon size={26} strokeWidth={1.5} className="text-primary dark:text-accent" />
                  </div>
                  <h4 className="text-[13px] font-bold text-primary mb-2 leading-tight">{feature.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-[140px]">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface rounded-lg border border-border p-6 flex items-center justify-between shadow-sm relative overflow-hidden">
             <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_#000_1px,_transparent_1px)] bg-[length:4px_4px]" />
            
            <div className="flex items-center gap-3 shrink-0 relative z-10">
              <MapPin className="text-accent" size={22} fill="currentColor" />
              <h3 className="text-[15px] font-serif font-black text-primary tracking-widest">{heroGalleryData.locationsTitle}</h3>
            </div>
            <div className="flex flex-wrap gap-2 items-center justify-center flex-1 px-8 relative z-10">
              {heroGalleryData.locations.map((loc) => (
                <span key={loc} className="px-4 py-2 rounded-full border border-border-light bg-surface-alt text-[11px] font-bold text-gray-600 dark:text-gray-300 hover:border-accent/30 hover:text-primary transition-colors cursor-default shadow-sm">
                  {loc}
                </span>
              ))}
            </div>
            <button className="flex items-center gap-1 text-[11px] font-bold text-primary hover:gap-2 transition-all relative z-10 group">
              View all locations <ArrowRight size={14} className="group-hover:text-accent transition-colors" />
            </button>
          </div>
        </div>

        <div className="bg-surface rounded-lg border border-border p-8 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-accent/40 w-12" />
            <h3 className="text-xs font-bold text-primary dark:text-accent uppercase tracking-widest">{heroGalleryData.keyDetailsTitle}</h3>
            <div className="h-px bg-accent/40 w-12" />
          </div>

          <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8">
            {heroGalleryData.keyDetails.map((detail, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center shrink-0">
                  <detail.icon size={14} className="text-gray-400 dark:text-accent" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[9px] uppercase font-bold tracking-wider text-gray-400">{detail.label}</span>
                  <span className="text-xs font-bold text-primary leading-tight">{detail.value}</span>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full py-3.5 bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-primary rounded text-[13px] font-black shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 transition-all mt-auto">
            Visit Website <ExternalLink size={16} />
          </button>
        </div>
      </div>

      <div className="w-full bg-primary rounded-lg p-6 shadow-md flex items-center justify-between text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.02)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.02)_50%,rgba(255,255,255,0.02)_75%,transparent_75%,transparent)] bg-[length:24px_24px] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-accent/10 blur-3xl pointer-events-none" />

        <div className="flex w-full justify-between items-center relative z-10 px-8">
          {heroGalleryData.stats.map((stat, i) => (
             <div key={i} className="flex items-center gap-4">
               <div className="w-12 h-12 flex items-center justify-center rounded-full border border-accent-light/30">
                 <stat.icon size={22} className="text-accent-light" />
               </div>
               <div className="flex flex-col">
                 <span className="text-2xl font-black text-accent-light leading-none">{stat.value}</span>
                 <span className="text-[10px] font-bold text-gray-300 mt-1 uppercase tracking-wider max-w-[100px] leading-tight">{stat.label}</span>
               </div>
               {i < heroGalleryData.stats.length - 1 && (
                 <div className="w-px h-12 bg-white/10 ml-8 hidden lg:block" />
               )}
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
