import clsx from "clsx";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { ExternalLink, MapPin } from "lucide-react";
import { heroDetailsData } from "./data";

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
};

const item: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 200, damping: 20 }
    }
};

const innerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const innerItem: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function HeroBottomDetailsDesktop() {
    return (
        <motion.section
            variants={container}
            initial="hidden"
            animate="show"
            className="w-full max-w-[1440px] mx-auto bg-[#FAFAFA] p-6 lg:p-6 flex flex-col gap-6 relative"
        >
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-7 flex flex-col gap-6">

                    <motion.div
                        variants={item}
                        className="group relative bg-white/90 dark:bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-100 dark:border-white/5 p-8 shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_16px_50px_rgb(0,0,0,0.12)] dark:hover:shadow-glow-primary hover:-translate-y-1 flex flex-col justify-center flex-1 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="flex items-center gap-3 mb-10 justify-center relative z-10">
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="h-px bg-gradient-to-r from-transparent to-cremp-accent w-12 relative origin-right"
                            >
                                <div className="absolute right-0 -top-[3px] w-1.5 h-1.5 rotate-45 bg-cremp-accent animate-pulse"></div>
                            </motion.div>
                            <h3 className="text-[16px] font-bold text-cremp-primary dark:text-[#0a1128] tracking-[0.1em] uppercase">
                                {heroDetailsData.whyPartnerTitle}
                            </h3>
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="h-px bg-gradient-to-l from-transparent to-cremp-accent w-12 relative origin-left"
                            >
                                <div className="absolute left-0 -top-[3px] w-1.5 h-1.5 rotate-45 bg-cremp-accent animate-pulse"></div>
                            </motion.div>
                        </div>

                        <motion.div
                            variants={innerContainer}
                            initial="hidden"
                            animate="show"
                            className="flex w-full divide-x divide-gray-100 dark:divide-white/10 flex-1 items-stretch relative z-10"
                        >
                            {heroDetailsData.partnerFeatures.map((feature, i) => (
                                <motion.div
                                    variants={innerItem}
                                    key={i}
                                    className="flex flex-col items-center flex-1 px-4 text-center group/feature cursor-default"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                                        transition={{ duration: 0.4 }}
                                        className={clsx(
                                            "w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-sm relative overflow-hidden",
                                            feature.colorClass
                                        )}
                                    >
                                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/feature:translate-y-0 transition-transform duration-300" />
                                        <feature.icon size={24} strokeWidth={1.5} className="relative z-10" />
                                    </motion.div>
                                    <h4 className="text-[13px] font-bold text-[#0a1128] dark:text-white leading-snug mb-3 transition-colors duration-300 group-hover/feature:text-[#0a1128]">
                                        {feature.title}
                                    </h4>
                                    <div className="w-0 group-hover/feature:w-8 h-0.5 bg-accent transition-all duration-300 mx-auto rounded-full"></div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={item}
                        className="group relative bg-white/90 dark:bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-100 dark:border-white/5 p-8 shadow-[0_12px_40px_rgb(0,0,0,0.08)] flex flex-col overflow-hidden transition-all duration-500 hover:shadow-[0_16px_50px_rgb(0,0,0,0.12)] dark:hover:shadow-glow-primary hover:-translate-y-1"
                    >
                        <div className="absolute -right-10 -top-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors duration-500" />

                        <div className="flex items-center gap-3 mb-4 relative z-10">
                            <motion.div
                                animate={{ y: [0, -3, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <MapPin className="text-accent" size={20} strokeWidth={2} />
                            </motion.div>
                            <h3 className="text-[14px] font-bold text-[#0a1128] dark:text-white tracking-[0.1em] uppercase">
                                {heroDetailsData.locationsTitle}
                            </h3>
                        </div>

                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 96 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="h-0.5 bg-accent mb-6 opacity-80 relative z-10 rounded-full"
                        />

                        <motion.div
                            variants={innerContainer}
                            initial="hidden"
                            animate="show"
                            className="flex flex-wrap gap-2.5 relative z-10"
                        >
                            {heroDetailsData.locations.map((loc) => (
                                <motion.div
                                    variants={innerItem}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    key={loc}
                                    className="flex items-center gap-2 px-3.5 py-2.5 rounded-2xl border border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-white shadow-sm shrink-0 transition-all duration-300 hover:bg-white hover:border-accent/40 hover:shadow-[0_0_15px_rgba(var(--accent-rgb),0.15)] dark:hover:bg-white cursor-default"
                                >
                                    <span className="text-[13px] font-semibold text-gray-700 dark:text-gray-200">
                                        {loc}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    variants={item}
                    className="col-span-12 lg:col-span-5 bg-white/90 dark:bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-100 dark:border-white/5 p-8 shadow-[0_12px_40px_rgb(0,0,0,0.08)] flex flex-col justify-between h-full transition-all duration-500 hover:shadow-[0_16px_50px_rgb(0,0,0,0.12)] dark:hover:shadow-glow-primary hover:-translate-y-1 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <motion.div
                        variants={innerContainer}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-2 gap-6 mb-6 relative z-10"
                    >
                        {heroDetailsData.keyDetails.map((detail, i) => (
                            <motion.div
                                variants={innerItem}
                                whileHover={{ scale: 1.03, x: 2 }}
                                key={i}
                                className="flex gap-3 items-center bg-gray-50/80 dark:bg-white/50 p-3.5 rounded-2xl border border-gray-100 dark:border-white/5 shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-md hover:border-primary/20 transition-all duration-300 cursor-default"
                            >
                                <div className={clsx(
                                    "w-10 h-10 rounded-full flex items-center justify-center shrink-0 border border-white/50 dark:border-white/10 shadow-sm",
                                    detail.colorClass
                                )}>
                                    <detail.icon size={18} strokeWidth={1.5} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs uppercase font-bold tracking-widest text-gray-500 dark:text-gray-400 mb-0.5">
                                        {detail.label}
                                    </span>
                                    <span className="text-[13px] font-bold text-[#0a1128] dark:text-white leading-tight">
                                        {detail.value}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-2/5 mx-auto py-3.5 bg-primary hover:bg-primary-light text-white dark:text-[#0b162c] rounded-2xl text-[14px] font-bold shadow-glow-primary flex items-center justify-center gap-2 transition-all duration-300 relative overflow-hidden group mt-auto z-10"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-[#0b162c]/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] skew-x-12" />
                        <span className="relative z-10 flex items-center gap-2">
                            Visit Website
                            <motion.div
                                className="relative"
                                whileHover={{ x: 3, y: -3 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                <ExternalLink size={16} className="text-accent dark:text-[#0b162c]" />
                            </motion.div>
                        </span>
                    </motion.button>
                </motion.div>
            </div>

            <motion.div
                variants={item}
                className="w-full bg-gradient-to-r from-primary via-primary-light to-primary rounded-2xl py-7 px-6 shadow-glow-primary flex items-center justify-between text-white mt-2 relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent w-[200%]"
                />

                <motion.div
                    variants={innerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex w-full justify-between items-center px-4 divide-x divide-white/20 relative z-10"
                >
                    {heroDetailsData.stats.map((stat, i) => (
                        <motion.div
                            variants={innerItem}
                            whileHover={{ y: -4 }}
                            key={i}
                            className="flex items-center gap-6 flex-1 justify-center px-4 group/stat"
                        >
                            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10 border border-white/20 shrink-0 shadow-inner backdrop-blur-md transition-all duration-300 group-hover/stat:bg-white/20 group-hover/stat:scale-110">
                                <stat.icon size={24} className={stat.color || "text-accent-highlight"} strokeWidth={1.5} />
                            </div>
                            <div className="flex flex-col">
                                <motion.span
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 + 0.3, type: "spring" }}
                                    className="text-[32px] font-black text-white dark:text-[#0b162c] leading-none mb-1 drop-shadow-sm"
                                >
                                    {stat.value}
                                </motion.span>
                                <span className="text-sm font-bold text-accent-highlight dark:text-[#0b162c]/90 uppercase tracking-[0.15em] leading-tight opacity-90">
                                    {stat.label}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
