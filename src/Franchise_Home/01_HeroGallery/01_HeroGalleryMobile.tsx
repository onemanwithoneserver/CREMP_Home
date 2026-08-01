import { Coffee, Play } from "lucide-react";
import { heroGalleryData } from "./data";

import mainCupImg from "../../assets/main_coffee_cup.png";

export default function HeroGalleryMobile() {
    return (
        <section className="w-full bg-[#FAFAFA] transition-colors duration-300 flex flex-col gap-6">
            <div className="bg-[#f9f9f9] rounded-2xl overflow-hidden shadow-sm flex flex-row border border-gray-100 relative min-h-[320px]">

                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#0b162c]/80 blur-[40px] rounded-full pointer-events-none" />

                <div className="w-[60%] p-6 flex flex-col justify-center relative z-10">
                    <div className="flex items-center gap-2.5 mb-5">
                        <div className="w-10 h-10 rounded-2xl bg-[#f4ebd0] flex items-center justify-center text-[#c69a54] shadow-sm shrink-0">
                            <Coffee size={20} strokeWidth={2} />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-[13px] font-serif font-semibold tracking-widest text-[#0b162c] uppercase leading-none">
                                {heroGalleryData.brandName}
                            </h1>
                            <div className="flex items-center gap-1.5 mt-1">
                                <div className="h-px bg-[#c69a54] w-4" />
                                <span className="text-[7px] tracking-widest text-[#0b162c]/80 font-semibold uppercase">FRANCHISE</span>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-[16px] leading-[1.3] font-serif font-semibold text-[#0b162c] mb-3 relative z-10">
                        {heroGalleryData.logoDescription}
                    </h2>



                </div>

                <div className="w-[40%] relative">
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
    );
}
