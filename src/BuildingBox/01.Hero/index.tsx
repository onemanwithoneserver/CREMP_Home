import { motion, type Variants } from "framer-motion";
import { Play, Heart, Share2, Flag, MapPin } from "lucide-react";
import { heroData } from "./data";
import { Container } from "../../components/layout";

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 400, damping: 30 },
    },
};

export default function MobileHero() {
    return (
        <div className="relative w-full overflow-hidden min-h-[500px] flex flex-col justify-end bg-gray-900">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80"
                    alt="Retail Space"
                    className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-[#0a1128]/80 to-transparent" />
            </div>

            {/* Top Action Icons */}
            <div className="absolute top-4 right-4 flex flex-col gap-3 z-20">
                {[Heart, Share2, Flag].map((Icon, i) => (
                    <button key={i} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all">
                        <Icon size={18} />
                    </button>
                ))}
            </div>

            {/* Play Button Center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <button className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                    <Play size={24} className="ml-1" fill="currentColor" />
                </button>
            </div>

            <Container className="relative z-10 w-full pb-6 pt-20">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col w-full gap-4"
                >
                    {/* Top Badges */}
                    <motion.div variants={fadeInUp} className="flex flex-wrap gap-2">
                        {heroData.badges.map((badge, idx) => (
                            <span
                                key={idx}
                                className={`px-3 py-1 text-[10px] font-bold rounded-full border shadow-sm backdrop-blur-md ${
                                    idx === 0 
                                        ? "bg-[#0a1128] text-white border-white/20" 
                                        : idx === 1 
                                            ? "bg-[#fce5cd]/90 text-amber-900 border-[#fce5cd]/50" 
                                            : "bg-white/20 text-white border-white/30"
                                }`}
                            >
                                {badge}
                            </span>
                        ))}
                    </motion.div>

                    {/* Title & Location */}
                    <div className="flex flex-col gap-1.5">
                        <motion.h1
                            variants={fadeInUp}
                            className="text-[1.5rem] font-bold leading-tight text-white tracking-tight"
                        >
                            {heroData.title}
                        </motion.h1>
                        <motion.div variants={fadeInUp} className="flex items-center gap-1.5 text-gray-300">
                            <MapPin size={14} className="text-[#D4AF37]" />
                            <span className="text-[0.8rem] font-medium">{heroData.location}</span>
                        </motion.div>
                    </div>
                    
                    {/* Media counts */}
                    <motion.div variants={fadeInUp} className="flex items-center">
                        <span className="bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full text-[0.7rem] font-medium text-white flex items-center gap-1.5">
                            <Play size={12} /> {heroData.mediaInfo.videos} videos • {heroData.mediaInfo.photos} photos
                        </span>
                    </motion.div>

                    {/* Bottom Stats */}
                    <motion.div variants={fadeInUp} className="flex gap-2 w-full mt-2 overflow-x-auto pb-2 scrollbar-hide">
                        {heroData.stats.map((stat, idx) => (
                            <div key={idx} className="flex flex-col gap-1.5 p-2.5 rounded-xl bg-[#17274C]/80 border border-white/10 backdrop-blur-xl shrink-0 min-w-[80px]">
                                <div className="flex items-center gap-1.5">
                                    <div className={`w-5 h-5 rounded-md flex items-center justify-center ${stat.color} ${stat.iconColor}`}>
                                        <stat.icon size={12} strokeWidth={2.5} />
                                    </div>
                                    <span className="text-[0.6rem] font-bold text-gray-400 tracking-wider uppercase">{stat.label}</span>
                                </div>
                                <span className="text-[0.95rem] font-bold text-white">{stat.value}</span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </Container>
        </div>
    );
}
