import { motion } from "framer-motion";
import { Play, CalendarDays, Banknote, Clock, Coffee, Utensils, Mail, Phone, MapPin, Globe } from "lucide-react";
import mainCupImg from "../../assets/main_coffee_cup.png";
import { heroData } from "./data";

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
            <div className="grid grid-cols-12 gap-6 min-h-[500px]">
                {/* Left Column - Brand Info */}
                <motion.div
                    variants={item}
                    className="col-span-12 lg:col-span-7 flex flex-col justify-center relative overflow-hidden group/main"
                >
                    <div className="flex flex-col gap-8 relative z-10 p-4 lg:p-8">
                        {/* Title and Badges */}
                        <div className="flex flex-col gap-6">
                            <div className="flex gap-3">
                                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-md text-[#c69a54] text-[10px] font-bold uppercase tracking-widest shadow-sm border border-gray-100">
                                    <Utensils size={13} strokeWidth={2.5} />
                                    {heroData.category}
                                </div>
                                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-md text-gray-500 text-[10px] font-bold uppercase tracking-widest shadow-sm border border-gray-100">
                                    <Coffee size={13} strokeWidth={2.5} />
                                    {heroData.subCategory}
                                </div>
                            </div>
                            
                            <h1 className="text-5xl lg:text-[64px] tracking-tight font-serif font-bold text-[#0b162c] uppercase leading-[1.05]">
                                {heroData.brandName}
                            </h1>
                        </div>

                        {/* Description */}
                        <p className="text-lg text-gray-500 leading-[1.8] max-w-xl font-light">
                            {heroData.shortDescription}
                        </p>

                        {/* Unified Contact Info */}
                        <div className="flex flex-wrap items-center gap-3 mt-4 pt-6 border-t border-gray-200/60">
                            {[
                                { icon: Mail, label: heroData.contactInfo.email, href: `mailto:${heroData.contactInfo.email}` },
                                { icon: Phone, label: heroData.contactInfo.phone, href: `tel:${heroData.contactInfo.phone}` },
                                { icon: Globe, label: heroData.contactInfo.website, href: `https://${heroData.contactInfo.website}` },
                                { icon: MapPin, label: heroData.contactInfo.headquarters, href: "#" },
                            ].map((item, idx) => (
                                <a key={idx} href={item.href} target={item.icon === Globe ? "_blank" : undefined} rel={item.icon === Globe ? "noopener noreferrer" : undefined} className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-gray-500 hover:text-[#0b162c] text-[12px] font-medium transition-all hover:bg-gray-100 ${item.href === "#" ? "cursor-default pointer-events-none" : ""}`}>
                                    <item.icon size={14} className="text-[#c69a54]" />
                                    {item.label}
                                </a>
                            ))}
                            
                            {/* Social Icons (Icons Only) */}
                            <div className="flex items-center gap-1 ml-auto pl-4 border-l border-gray-200/60">
                                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-md text-gray-400 hover:text-[#ff0000] hover:bg-red-50 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"></polygon></svg>
                                </a>
                                <a href={heroData.contactInfo.instagram ? `https://instagram.com/${heroData.contactInfo.instagram.replace('@', '')}` : '#'} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-md text-gray-400 hover:text-pink-600 hover:bg-pink-50 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                                </a>
                                <a href={heroData.contactInfo.linkedin ? `https://linkedin.com/company/${heroData.contactInfo.linkedin}` : '#'} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-md text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column - Hero Video/Image */}
                <motion.div variants={item} className="col-span-12 lg:col-span-5 relative group/cup overflow-hidden rounded-2xl shadow-sm border border-gray-100 h-full min-h-[400px]">
                    <img src={mainCupImg} alt="Hero Media" className="absolute inset-0 w-full h-full object-cover group-hover/cup:scale-105 transition-transform duration-700 ease-out" />
                    <button
                        className="absolute inset-0 w-full h-full bg-black/10 group-hover/cup:bg-black/30 flex items-center justify-center transition-all duration-500 focus:outline-none focus:ring-inset focus:ring-2 focus:ring-accent"
                        aria-label="Watch Brand Story Video"
                    >
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-2xl border border-white/40 group-hover/cup:scale-110 group-hover/cup:bg-white group-hover/cup:border-white transition-all duration-300 group/btn">
                            <Play size={24} className="text-white group-hover/btn:text-[#0b162c] ml-1 transition-colors" fill="currentColor" />
                        </div>
                    </button>
                </motion.div>
            </div>

            {/* Bottom Row - Why Choose Us */}
            <motion.div variants={item} className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 p-8 relative overflow-hidden mt-2">
                <div className="flex flex-col gap-6 relative z-10">
                    <div className="flex items-center gap-3">
                        <div className="h-px bg-gradient-to-r from-transparent to-[#c69a54] w-12" />
                        <h3 className="text-sm font-semibold text-[#0b162c] tracking-[0.2em] uppercase">Why Choose Us</h3>
                        <div className="h-px bg-gradient-to-l from-transparent to-[#c69a54] w-12" />
                    </div>

                    <div className="grid grid-cols-4 divide-x divide-gray-100">
                        {heroData.whyChooseUs.map((feature, i) => (
                            <div key={i} className="flex flex-col items-center text-center px-6 group/feature cursor-default">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-sm relative overflow-hidden transition-transform duration-300 group-hover/feature:scale-110 ${feature.colorClass}`}>
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/feature:translate-y-0 transition-transform duration-300" />
                                    <feature.icon size={20} strokeWidth={1.5} className="relative z-10" />
                                </div>
                                <h4 className="text-[14px] font-semibold text-[#0b162c] leading-snug mb-2">
                                    {feature.title}
                                </h4>
                                <p className="text-[12px] text-gray-500 leading-relaxed max-w-[200px]">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
}
