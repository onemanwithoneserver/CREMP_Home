import { motion } from "framer-motion";
import { Play, CalendarDays, Banknote, Clock, Coffee, Utensils, Mail, Phone, Globe, MapPin } from "lucide-react";
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

export default function HeroGalleryMobile() {
    return (
        <motion.section
            variants={container}
            initial="hidden"
            animate="show"
            className="w-full bg-[#FAFAFA] flex flex-col pt-0 pb-10"
        >
            {/* Top Image / Video */}
            <motion.div variants={item} className="w-full relative h-[350px]">
                <img src={mainCupImg} alt="Hero Media" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b162c]/60 via-transparent to-transparent" />
                
                <button
                    className="absolute inset-0 w-full h-full flex items-center justify-center focus:outline-none"
                    aria-label="Watch Brand Story Video"
                >
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-2xl border border-white/40 active:scale-95 transition-all">
                        <Play size={24} className="text-white ml-1" fill="currentColor" />
                    </div>
                </button>
            </motion.div>

            <div className="px-5 -mt-6 relative z-10 flex flex-col gap-6">
                {/* Brand Info Card */}
                <motion.div variants={item} className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 p-6 flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-wrap gap-2">
                            <div className="flex items-center gap-1.5 px-3 py-1 bg-white border border-gray-100 rounded-md text-[#c69a54] text-[10px] font-bold uppercase tracking-wider shadow-sm">
                                <Utensils size={12} strokeWidth={2.5} />
                                {heroData.category}
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1 bg-white border border-gray-100 rounded-md text-gray-500 text-[10px] font-bold uppercase tracking-wider shadow-sm">
                                <Coffee size={12} strokeWidth={2.5} />
                                {heroData.subCategory}
                            </div>
                        </div>
                        
                        <h1 className="text-4xl tracking-tight font-serif font-black uppercase leading-[1.1] text-[#0b162c]">
                            {heroData.brandName}
                        </h1>
                    </div>
                    
                    <p className="text-[14px] text-gray-500 leading-[1.8] font-light">
                        {heroData.shortDescription}
                    </p>

                    {/* Unified Contact Info */}
                    <div className="flex flex-col gap-2 mt-2 pt-6 border-t border-gray-200/60">
                        {[
                            { icon: Mail, label: heroData.contactInfo.email, href: `mailto:${heroData.contactInfo.email}` },
                            { icon: Phone, label: heroData.contactInfo.phone, href: `tel:${heroData.contactInfo.phone}` },
                            { icon: Globe, label: heroData.contactInfo.website, href: `https://${heroData.contactInfo.website}` },
                            { icon: MapPin, label: heroData.contactInfo.headquarters, href: "#" },
                        ].map((item, idx) => (
                            <a key={idx} href={item.href} target={item.icon === Globe ? "_blank" : undefined} rel={item.icon === Globe ? "noopener noreferrer" : undefined} className={`flex items-center gap-3 px-3 py-2 rounded-md text-gray-500 hover:text-[#0b162c] text-[12px] font-medium transition-all hover:bg-gray-100 active:scale-[0.98] ${item.href === "#" ? "cursor-default pointer-events-none" : ""}`}>
                                <item.icon size={14} className="text-[#c69a54] shrink-0" />
                                <span className="truncate">{item.label}</span>
                            </a>
                        ))}
                        
                        {/* Social Icons Row */}
                        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-200/60 justify-center">
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md text-gray-400 hover:text-[#ff0000] hover:bg-red-50 active:bg-red-100 transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"></polygon></svg>
                            </a>
                            <a href={heroData.contactInfo.instagram ? `https://instagram.com/${heroData.contactInfo.instagram.replace('@', '')}` : '#'} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-md text-gray-400 hover:text-pink-600 hover:bg-pink-50 active:bg-pink-100 transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                            </a>
                            <a href={heroData.contactInfo.linkedin ? `https://linkedin.com/company/${heroData.contactInfo.linkedin}` : '#'} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-md text-gray-400 hover:text-blue-600 hover:bg-blue-50 active:bg-blue-100 transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                            </a>
                        </div>
                    </div>
                </motion.div>


                {/* Why Choose Us */}
                <motion.div variants={item} className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 p-6 flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <div className="h-px bg-gradient-to-r from-transparent to-[#c69a54] w-8" />
                        <h3 className="text-[13px] font-semibold text-[#0b162c] tracking-[0.2em] uppercase">Why Choose Us</h3>
                        <div className="h-px bg-gradient-to-l from-transparent to-[#c69a54] flex-1" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {heroData.whyChooseUs.map((feature, i) => (
                            <div key={i} className="flex flex-col gap-2 group">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-sm ${feature.colorClass}`}>
                                    <feature.icon size={16} strokeWidth={1.5} className="text-white" />
                                </div>
                                <h4 className="text-[13px] font-semibold text-[#0b162c] leading-tight">
                                    {feature.title}
                                </h4>
                                <p className="text-[11px] text-gray-500 leading-snug">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
