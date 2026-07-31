import { Coffee, Play } from "lucide-react";
import { heroGalleryData } from "./data";

import mainCupImg from "../../assets/main_coffee_cup.png";

export default function HeroGalleryMobile() {
    return (
        <section className="w-full bg-[#FAFAFA] transition-colors duration-300 flex flex-col gap-6">
            <div className="bg-[#f9f9f9] rounded-2xl overflow-hidden shadow-sm flex flex-row border border-gray-100 relative min-h-[320px]">

                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#0b162c]/80 blur-[40px] rounded-full pointer-events-none" />

                <div className="w-[55%] p-6 flex flex-col justify-center relative z-10">
                    <div className="flex items-center gap-2.5 mb-5">
                        <div className="w-10 h-10 rounded-2xl bg-[#f4ebd0] flex items-center justify-center text-[#c69a54] shadow-sm shrink-0">
                            <Coffee size={20} strokeWidth={2} />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-[13px] font-serif font-semibold tracking-widest text-[#0b162c] uppercase leading-none">
                                THE URBAN
                            </h1>
                            <div className="flex items-center gap-1.5 mt-1">
                                <div className="h-px bg-[#c69a54] w-4" />
                                <span className="text-[7px] tracking-widest text-[#0b162c]/80 font-semibold uppercase">BREW CO.</span>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-[20px] leading-[1.1] font-serif font-semibold text-[#0b162c] mb-5 relative z-10">
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
                            <div key={i} className={`flex items-center gap-1 px-2 py-1 rounded-md border ${i === 0 ? 'bg-[#f4ebd0] border-transparent' : 'bg-white border-gray-100'} shadow-sm`}>
                                <tag.icon size={10} className={i === 0 ? "text-[#8a6831]" : "text-[#c69a54]"} />
                                <span className="text-xs font-semibold text-[#0b162c]">{tag.label}</span>
                            </div>
                        ))}
                    </div>

                </div>

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

            <div className="flex flex-row gap-2 mt-1 px-2">
                <button
                    className="flex-1 flex flex-row items-center justify-center gap-2 bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] text-white px-5 py-3.5 rounded-[4px] text-[12px] font-semibold shadow-[0_2px_8px_rgba(212,175,55,0.3)] hover:shadow-[0_4px_12px_rgba(212,175,55,0.5)] transition-all text-center hover-lift"
                    aria-label={heroGalleryData.buttons.primary.label}
                >
                    <heroGalleryData.buttons.primary.icon size={14} className="shrink-0" />
                    <span className="truncate">{heroGalleryData.buttons.primary.label}</span>
                </button>
                <button
                    className="shrink-0 flex flex-row items-center justify-center gap-2 bg-[#121c33] active:bg-[#1a2542] text-white border border-[#d4af37]/40 px-5 py-3.5 rounded-2xl text-[12px] font-semibold shadow-sm transition-all text-center"
                    aria-label={heroGalleryData.buttons.secondary.label}
                >
                    <heroGalleryData.buttons.secondary.icon size={14} className="text-white shrink-0" />
                    <span>{heroGalleryData.buttons.secondary.label}</span>
                </button>
            </div>
        </section>
    );
}
