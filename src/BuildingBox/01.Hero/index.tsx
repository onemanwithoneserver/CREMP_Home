import { motion, type Variants } from "framer-motion";
import { Play, Heart, Share2, Flag, MapPin } from "lucide-react";
import { heroData } from "./data";

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
};

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 400, damping: 30 },
    },
};

const actionIcons = [
    { Icon: Heart, hoverColor: "hover:bg-rose-500/20 hover:border-rose-400/50 hover:text-rose-400 hover:shadow-[0_0_15px_rgba(244,63,94,0.2)]" },
    { Icon: Share2, hoverColor: "hover:bg-emerald-500/20 hover:border-emerald-400/50 hover:text-emerald-400 hover:shadow-[0_0_15px_rgba(52,211,153,0.2)]" },
    { Icon: Flag, hoverColor: "hover:bg-amber-500/20 hover:border-amber-400/50 hover:text-amber-400 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]" },
];

export default function MobileHero() {
    return (
        <div className="relative w-full overflow-hidden min-h-[520px] flex flex-col justify-end bg-[#0a1128]">
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 z-0"
            >
                <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80"
                    alt="Retail Space"
                    className="w-full h-full object-cover opacity-60"
                />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-[#0a1128]/70 to-[#0a1128]/20 z-[1]" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent z-20" />

            <div className="absolute top-4 right-4 flex flex-col gap-2.5 z-20">
                {actionIcons.map(({ Icon, hoverColor }, i) => (
                    <motion.button
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 300, damping: 25 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-10 h-10 rounded-[4px] bg-white/10 backdrop-blur-xl border border-white/15 flex items-center justify-center text-white transition-all duration-300 ${hoverColor}`}
                    >
                        <Icon size={17} strokeWidth={2} />
                    </motion.button>
                ))}
            </div>

            <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 300, damping: 20 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white shadow-[0_0_40px_rgba(212,175,55,0.15)] hover:bg-[#d4af37]/20 hover:border-[#d4af37]/40 hover:shadow-[0_0_50px_rgba(212,175,55,0.3)] transition-all duration-500"
            >
                <Play size={22} className="ml-1" fill="currentColor" />
            </motion.button>

            <div className="relative z-10 w-full pb-6 pt-20">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col w-full gap-4"
                >
                    <motion.div variants={fadeInUp} className="flex flex-wrap gap-2">
                        {heroData.badges.map((badge, idx) => (
                            <span
                                key={idx}
                                className={`px-3 py-1 text-[10px] font-bold rounded-[2px] border shadow-sm backdrop-blur-xl uppercase tracking-widest ${
                                    idx === 0
                                        ? "bg-[#0b1b42]/90 text-[#d4af37] border-[#d4af37]/30 shadow-[0_0_10px_rgba(212,175,55,0.1)]"
                                        : idx === 1
                                            ? "bg-[#fce5cd]/90 text-amber-900 border-[#fce5cd]/50"
                                            : "bg-white/15 text-white border-white/20"
                                }`}
                            >
                                {badge}
                            </span>
                        ))}
                    </motion.div>

                    <div className="flex flex-col gap-1.5">
                        <motion.h1
                            variants={fadeInUp}
                            className="text-[1.6rem] font-semibold leading-tight text-white tracking-tight"
                        >
                            {heroData.title}
                        </motion.h1>
                        <motion.div variants={fadeInUp} className="flex items-center gap-1.5">
                            <MapPin size={14} className="text-[#D4AF37]" />
                            <span className="text-[0.8rem] font-medium text-gray-300">{heroData.location}</span>
                        </motion.div>
                    </div>

                    <motion.div variants={fadeInUp} className="flex items-center">
                        <span className="bg-[#0b1b42]/80 backdrop-blur-xl border border-[#d4af37]/20 px-3 py-1.5 rounded-[2px] text-[0.7rem] font-semibold text-white flex items-center gap-1.5 shadow-sm">
                            <Play size={11} className="text-[#d4af37]" /> {heroData.mediaInfo.videos} videos • {heroData.mediaInfo.photos} photos
                        </span>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="flex gap-2 w-full mt-1 overflow-x-auto pb-2 scrollbar-hide">
                        {heroData.stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -2, borderColor: "rgba(212,175,55,0.3)" }}
                                className="flex flex-col gap-1.5 p-2.5 rounded-[4px] bg-[#0b1b42]/80 border border-white/10 backdrop-blur-xl shrink-0 min-w-[85px] transition-all duration-300 hover:shadow-[0_4px_15px_rgba(0,0,0,0.3)]"
                            >
                                <div className="flex items-center gap-1.5">
                                    <div className={`w-5 h-5 rounded-[3px] flex items-center justify-center shadow-md ${stat.color} ${stat.iconColor}`}>
                                        <stat.icon size={11} strokeWidth={2.5} />
                                    </div>
                                    <span className="text-[0.55rem] font-bold text-gray-400 tracking-widest uppercase">{stat.label}</span>
                                </div>
                                <span className="text-[0.95rem] font-bold text-white tracking-tight">{stat.value}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
