import { motion } from "framer-motion";
import { Coffee, Play } from "lucide-react";
import interiorImg from "../../assets/cafe_interior.png";
import beansImg from "../../assets/coffee_beans.png";
import equipmentImg from "../../assets/coffee_equipment.png";
import mainCupImg from "../../assets/main_coffee_cup.png";
import { heroGalleryData } from "./data";

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

export default function HeroGalleryDesktop() {
    return (
        <motion.section
            variants={container}
            initial="hidden"
            animate="show"
            className="w-full max-w-[1440px] mx-auto bg-[#FAFAFA] transition-colors duration-300 p-6 lg:p-6 flex flex-col gap-6"
        >
            <div className="grid grid-cols-12 gap-6 min-h-[480px]">
                <motion.div
                    variants={item}
                    className="col-span-12 lg:col-span-9 flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-sm border border-gray-100 group/main"
                >
                    <div className="w-full lg:w-[55.55%] bg-[#f9f9f9] flex flex-col justify-center p-12 relative transition-colors duration-500 overflow-hidden">
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#0b162c]/80 blur-[80px] rounded-full pointer-events-none" />
                        <div className="flex items-center gap-6 mb-8 relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-[#f4ebd0] flex items-center justify-center text-[#c69a54] shadow-sm">
                                <Coffee size={32} strokeWidth={2} />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-2xl tracking-tight font-serif font-semibold tracking-widest text-[#0b162c] uppercase leading-none">
                                    THE URBAN
                                </h1>
                                <div className="flex items-center gap-2 mt-1.5">
                                    <div className="h-[2px] bg-[#c69a54] w-8" />
                                    <span className="text-sm tracking-widest text-[#0b162c]/80 font-semibold uppercase">BREW CO.</span>
                                </div>
                            </div>
                        </div>
                        <h2 className="text-[44px] leading-[1.1] font-serif font-semibold text-[#0b162c] mb-8 relative z-10 max-w-xl">
                            Redefining the café experience, <br />
                            <span className="text-[#c69a54] italic font-medium relative inline-block mt-2">
                                one cup
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#c69a54]" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 12.5 0 25 5 T 50 5 T 75 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2.5" />
                                </svg>
                            </span> at a time.
                        </h2>
                        <div className="flex flex-wrap gap-3 mb-10 relative z-10">
                            {heroGalleryData.tags.map((tag, i) => (
                                <div key={i} className={`flex items-center gap-2 px-4 py-2 rounded-2xl border ${i === 0 ? 'bg-[#f4ebd0] border-transparent' : 'bg-white border-gray-100'} shadow-sm`}>
                                    <tag.icon size={16} className={i === 0 ? "text-[#8a6831]" : "text-[#c69a54]"} />
                                    <span className="text-sm font-semibold text-[#0b162c]">{tag.label}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap items-center gap-5 relative z-10">
                            <button
                                className="flex items-center gap-2.5 bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] text-white px-8 py-4 rounded-2xl text-[15px] font-semibold transition-all duration-300 shadow-[0_2px_8px_rgba(212,175,55,0.3)] hover:shadow-[0_4px_12px_rgba(212,175,55,0.5)] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#bf953f] focus:ring-offset-2 hover-lift"
                                aria-label={heroGalleryData.buttons.primary.label}
                            >
                                <heroGalleryData.buttons.primary.icon size={18} />
                                {heroGalleryData.buttons.primary.label}
                            </button>
                            <button
                                className="flex items-center gap-2.5 bg-[#121c33] hover:bg-[#1a2542] text-white border border-[#d4af37]/40 hover:border-[#d4af37] px-8 py-4 rounded-2xl text-[15px] font-semibold transition-all duration-300 shadow-md hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#121c33] focus:ring-offset-2"
                                aria-label={heroGalleryData.buttons.secondary.label}
                            >
                                <heroGalleryData.buttons.secondary.icon size={18} className="text-white" />
                                {heroGalleryData.buttons.secondary.label}
                            </button>
                        </div>
                    </div>

                    <div className="w-full lg:w-[44.45%] relative group/cup overflow-hidden">
                        <img src={mainCupImg} alt="Urban Brew Main Cup" className="w-full h-full object-cover group-hover/cup:scale-105 transition-transform duration-700 ease-out" />
                        <button
                            className="absolute inset-0 w-full h-full bg-black/10 group-hover/cup:bg-black/30 flex items-center justify-center transition-all duration-500 focus:outline-none focus:ring-inset focus:ring-2 focus:ring-accent"
                            aria-label="Watch Brand Story Video"
                        >
                            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-2xl border border-white/40 group-hover/cup:scale-110 group-hover/cup:bg-accent transition-all duration-300">
                                <Play size={20} className="text-white ml-1" fill="white" />
                            </div>
                        </button>
                    </div>
                </motion.div>

                <motion.div variants={item} className="col-span-12 lg:col-span-3 flex flex-col gap-6">
                    <div className="h-1/2 rounded-2xl overflow-hidden relative shadow-sm group cursor-pointer focus-within:ring-2 focus-within:ring-accent">
                        <img src={interiorImg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" alt="Cafe Interior View" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-lg group-hover:scale-110 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                                <Play size={16} className="text-white ml-0.5" fill="white" />
                            </div>
                        </div>
                    </div>

                    <div className="h-1/2 grid grid-cols-2 gap-6">
                        <div className="rounded-2xl overflow-hidden relative shadow-sm group cursor-pointer focus-within:ring-2 focus-within:ring-accent">
                            <img src={beansImg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" alt="Fresh Coffee Beans" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-lg group-hover:scale-110 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                                    <Play size={14} className="text-white ml-0.5" fill="white" />
                                </div>
                            </div>
                        </div>
                        <div className="rounded-2xl overflow-hidden relative shadow-sm group cursor-pointer focus-within:ring-2 focus-within:ring-accent">
                            <img src={equipmentImg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" alt="Brewing Equipment" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-lg group-hover:scale-110 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                                    <Play size={14} className="text-white ml-0.5" fill="white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
