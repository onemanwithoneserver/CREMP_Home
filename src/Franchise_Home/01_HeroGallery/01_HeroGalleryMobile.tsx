import { heroGalleryData } from "./data";
import { Coffee, Play } from "lucide-react";
import { TextEffect } from "../../../components/motion-primitives/text-effect";

import mainCupImg from "../../assets/main_coffee_cup.png";

export default function HeroGalleryMobile() {
    <section className="w-full bg-background transition-colors duration-300 p-3 flex flex-col gap-3 font-sans">
      <div className="bg-[#f9f9f9] rounded-2xl overflow-hidden shadow-sm flex flex-row border border-gray-100 relative min-h-[320px]">
        {/* Glow Effect */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#0b162c]/80 blur-[40px] rounded-full pointer-events-none" />
        
        {/* Text Section */}
        <div className="w-[55%] p-4 flex flex-col justify-center relative z-10">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-10 h-10 rounded-xl bg-[#f4ebd0] flex items-center justify-center text-[#c69a54] shadow-sm shrink-0">
              <Coffee size={20} strokeWidth={2} />
            </div>
            <div className="flex flex-col">
               <h1 className="text-[13px] font-serif font-black tracking-widest text-[#0b162c] uppercase leading-none">
                 THE URBAN
               </h1>
               <div className="flex items-center gap-1.5 mt-1">
                 <div className="h-px bg-[#c69a54] w-4" />
                 <span className="text-[7px] tracking-widest text-[#0b162c]/80 font-bold uppercase">BREW CO.</span>
               </div>
            </div>
          </div>
          
          <h2 className="text-[20px] leading-[1.1] font-serif font-bold text-[#0b162c] mb-5 relative z-10">
            Redefining the café experience, <br />
            <span className="text-[#c69a54] italic font-medium relative inline-block mt-1">
              one cup
              <svg className="absolute -bottom-1 left-0 w-full h-1.5 text-[#c69a54]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 12.5 0 25 5 T 50 5 T 75 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="3" />
              </svg>
            </span> at a time.
          </h2>
          
          <div className="flex flex-wrap gap-1.5 mb-6 relative z-10">
            {heroGalleryData.tags.map((tag, i) => (
              <div key={i} className={`flex items-center gap-1 px-2 py-1 rounded-md border ${i === 0 ? 'bg-[#f4ebd0] border-transparent' : 'bg-white border-gray-200'} shadow-sm`}>
                <tag.icon size={10} className={i === 0 ? "text-[#8a6831]" : "text-[#c69a54]"} />
                <span className="text-[9px] font-bold text-[#0b162c]">{tag.label}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col gap-2 relative z-10">
            <button 
              className="w-full flex items-center justify-center gap-1.5 bg-[#0b162c] active:bg-[#122244] text-white px-3 py-2.5 rounded-lg text-[11px] font-bold shadow-md transition-colors"
              aria-label={heroGalleryData.buttons.primary.label}
            >
              <heroGalleryData.buttons.primary.icon size={12} />
              {heroGalleryData.buttons.primary.label}
            </button>
            <button 
              className="w-full flex items-center justify-center gap-1.5 bg-white active:bg-gray-50 text-[#0b162c] border border-[#0b162c] px-3 py-2.5 rounded-lg text-[11px] font-bold shadow-sm transition-colors"
              aria-label={heroGalleryData.buttons.secondary.label}
            >
              <heroGalleryData.buttons.secondary.icon size={12} className="text-[#0b162c]" />
              {heroGalleryData.buttons.secondary.label}
            </button>
          </div>
        </div>
        
        {/* Cup Image Section */}
        <div className="w-[45%] relative">
          <img src={mainCupImg} alt="Urban Brew Main Cup" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <button 
              className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/30 pointer-events-auto active:scale-95 active:bg-white/30 transition-all duration-200"
              aria-label="Play Brand Story Video"
            >
               <Play size={20} className="text-white ml-1 opacity-90" fill="white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  
}