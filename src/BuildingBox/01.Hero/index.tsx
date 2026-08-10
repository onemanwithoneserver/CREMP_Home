import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { Play, Heart, Share2, Flag, MapPin } from "lucide-react";
import { heroData } from "./data";
import { useRef } from "react";

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.25 },
    },
};

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 350, damping: 28 },
    },
};

const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.85 },
    show: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring", stiffness: 300, damping: 25 },
    },
};

const actionIcons = [
    { Icon: Heart, label: "Save", hoverBg: "hover:bg-rose-500/90 hover:border-rose-500", hoverShadow: "hover:shadow-[0_4px_15px_rgba(244,63,94,0.3)]" },
    { Icon: Share2, label: "Share", hoverBg: "hover:bg-emerald-500/90 hover:border-emerald-500", hoverShadow: "hover:shadow-[0_4px_15px_rgba(52,211,153,0.3)]" },
    { Icon: Flag, label: "Report", hoverBg: "hover:bg-amber-500/90 hover:border-amber-500", hoverShadow: "hover:shadow-[0_4px_15px_rgba(245,158,11,0.3)]" },
];

export default function MobileHero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });
    const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
    const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <div
            ref={heroRef}
            className="relative w-full h-[100dvh] min-h-[620px] max-h-[860px] overflow-hidden flex flex-col justify-end bg-[#0a1128] text-white"
        >
            {/* Parallax background image */}
            <motion.div
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ y: imageY, scale: imageScale }}
                className="absolute inset-0 z-0"
            >
                <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80"
                    alt="Retail Space"
                    className="w-full h-full object-cover opacity-65"
                />
            </motion.div>

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128]/50 via-transparent to-transparent z-[1]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-[#0a1128]/85 to-transparent z-[1]" style={{ top: '45%' }} />

            {/* Bottom gradient that transitions to white content area */}
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-[#f8f9fc] z-[2]" />

            {/* Action icons — top right */}
            <div className="absolute top-6 right-5 flex flex-col gap-2.5 z-20">
                {actionIcons.map(({ Icon, hoverBg, hoverShadow }, i) => (
                    <motion.button
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.08, type: "spring", stiffness: 300, damping: 25 }}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.92 }}
                        className={`w-11 h-11 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white transition-all duration-300 ${hoverBg} ${hoverShadow} hover:text-white`}
                    >
                        <Icon size={17} strokeWidth={2.5} />
                    </motion.button>
                ))}
            </div>

            {/* Play button — center */}
            <motion.button
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 280, damping: 20 }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full bg-[#d4af37]/90 backdrop-blur-xl border-2 border-[#f9df9f]/50 flex items-center justify-center text-[#0a1128] shadow-[0_0_50px_rgba(212,175,55,0.4)] transition-all duration-300 group"
            >
                <div className="absolute inset-0 rounded-full animate-ping bg-[#d4af37] opacity-15" />
                <Play size={24} className="ml-1 transition-transform group-hover:scale-110" fill="currentColor" />
            </motion.button>

            {/* Content area */}
            <div className="relative z-10 w-full px-5 pb-8 pt-16 flex flex-col gap-3.5">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col w-full gap-3"
                >
                    {/* Badges */}
                    <motion.div variants={fadeInUp} className="flex flex-wrap gap-2">
                        {heroData.badges.map((badge, idx) => (
                            <span
                                key={idx}
                                className={`px-3 py-1.5 text-[0.6rem] font-bold rounded-lg border backdrop-blur-xl uppercase tracking-[0.12em] ${
                                    idx === 0
                                        ? "bg-[#d4af37]/15 text-[#f9df9f] border-[#d4af37]/40 shadow-[0_0_20px_rgba(212,175,55,0.12)]"
                                        : "bg-white/8 text-white/90 border-white/15"
                                }`}
                            >
                                {badge}
                            </span>
                        ))}
                    </motion.div>

                    {/* Title + Location */}
                    <div className="flex flex-col gap-2">
                        <motion.h1
                            variants={fadeInUp}
                            className="text-[1.75rem] font-bold leading-[1.15] tracking-tight text-white drop-shadow-lg"
                        >
                            {heroData.title}
                        </motion.h1>

                        <motion.div variants={fadeInUp} className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-md bg-[#d4af37]/15 flex items-center justify-center">
                                <MapPin size={12} className="text-[#d4af37]" />
                            </div>
                            <span className="text-[0.82rem] font-medium text-white/75 tracking-tight">{heroData.location}</span>
                        </motion.div>
                    </div>

                    {/* Media info pill */}
                    <motion.div variants={fadeInUp} className="flex items-center">
                        <span className="inline-flex items-center gap-2 bg-white/6 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full text-xs font-semibold text-white/85">
                            <Play size={11} className="text-[#d4af37]" />
                            {heroData.mediaInfo.videos} Videos
                            <span className="text-white/25 mx-0.5">•</span>
                            {heroData.mediaInfo.photos} Photos
                        </span>
                    </motion.div>

                    {/* Stats cards — horizontal scroll */}
                    <motion.div
                        variants={fadeInUp}
                        className="flex gap-2 w-full mt-0.5 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-hide snap-x snap-mandatory"
                    >
                        {heroData.stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                variants={scaleIn}
                                whileHover={{ y: -3, scale: 1.02 }}
                                className="flex flex-col gap-1.5 p-3 rounded-xl bg-white/[0.07] border border-white/[0.1] backdrop-blur-xl shrink-0 min-w-[100px] snap-start transition-all duration-300 hover:bg-white/[0.12] hover:border-white/20 hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)]"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-lg flex items-center justify-center bg-white/8 border border-white/10">
                                        <stat.icon size={12} strokeWidth={2.5} className="text-white/80" />
                                    </div>
                                    <span className="text-[0.55rem] font-bold text-white/50 tracking-[0.15em] uppercase">
                                        {stat.label}
                                    </span>
                                </div>
                                <span className="text-[1.05rem] font-bold text-white tracking-tight">
                                    {stat.value}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}