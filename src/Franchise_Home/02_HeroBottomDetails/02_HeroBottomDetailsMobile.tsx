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

export default function HeroBottomDetailsMobile() {
    return (
        <motion.section
            variants={container}
            initial="hidden"
            animate="show"
            className="w-full bg-[#FAFAFA] p-6 flex flex-col gap-6"
        >
            <motion.div variants={item} className="flex flex-col gap-6">
                <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-sm font-semibold text-cremp-primary dark:text-[#0a1128] tracking-[0.2em] uppercase">
                        {heroDetailsData.whyPartnerTitle}
                    </h3>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-px bg-gradient-to-r from-cremp-accent to-transparent dark:from-primary/50 flex-1 origin-left"
                    />
                </div>

                <motion.div
                    variants={innerContainer}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-2 gap-6"
                >
                    {heroDetailsData.partnerFeatures.map((feature, i) => (
                        <motion.div variants={innerItem} key={i} className="flex flex-col items-center text-center gap-2.5 group bg-white dark:bg-white p-3.5 rounded-2xl border border-gray-100 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)]">
                            <motion.div
                                whileTap={{ scale: 0.9 }}
                                className={clsx(
                                    "w-10 h-10 rounded-full border border-gray-100 dark:border-white/10 flex items-center justify-center shadow-sm relative overflow-hidden",
                                    feature.colorClass
                                )}
                            >
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-active:translate-y-0 transition-transform duration-300" />
                                <feature.icon size={18} strokeWidth={1.5} className="relative z-10" />
                            </motion.div>
                            <h4 className="text-sm font-semibold text-[#0a1128] dark:text-gray-100 leading-tight pr-1">
                                {feature.title}
                            </h4>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            <motion.div variants={item} className="flex flex-col gap-6">
                <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-sm font-semibold text-cremp-primary dark:text-[#0a1128] tracking-[0.2em] uppercase">
                        {heroDetailsData.keyDetailsTitle}
                    </h3>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-px bg-gradient-to-r from-cremp-accent to-transparent dark:from-primary/50 flex-1 origin-left"
                    />
                </div>

                <motion.div
                    variants={innerContainer}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 gap-2.5 mb-2"
                >
                    {heroDetailsData.keyDetails.map((detail, i) => (
                        <motion.div
                            variants={innerItem}
                            whileTap={{ scale: 0.98, x: 2 }}
                            key={i}
                            className="flex gap-3 items-center bg-gray-50/80 dark:bg-white/50 p-3 rounded-2xl border border-gray-100 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 active:border-primary/30 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)]"
                        >
                            <div className={clsx(
                                "w-9 h-9 rounded-full flex items-center justify-center shrink-0 border border-white/50 dark:border-white/10 shadow-sm",
                                detail.colorClass
                            )}>
                                <detail.icon size={14} strokeWidth={1.5} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs uppercase font-semibold tracking-widest text-gray-500 dark:text-gray-400 mb-0.5">
                                    {detail.label}
                                </span>
                                <span className="text-xs font-semibold text-[#0a1128] dark:text-white leading-tight">
                                    {detail.value}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.button
                    whileTap={{ scale: 0.96 }}
                    className="w-3/5 mx-auto py-3.5 bg-primary text-white dark:text-[#0b162c] rounded-2xl text-[13px] font-semibold shadow-glow-primary flex items-center justify-center gap-2 relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-[#0b162c]/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite] skew-x-12" />
                    <span className="relative z-10 flex items-center gap-2">
                        Visit Website
                        <ExternalLink size={14} className="text-accent dark:text-[#0b162c]" />
                    </span>
                </motion.button>
            </motion.div>

            <motion.div variants={item} className="flex flex-col gap-6">
                <div className="flex items-center gap-2 mb-1">
                    <motion.div
                        animate={{ y: [0, -2, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <MapPin className="text-accent" size={16} strokeWidth={1.5} />
                    </motion.div>
                    <h3 className="text-sm font-semibold text-cremp-primary dark:text-[#0a1128] tracking-[0.2em] uppercase">
                        {heroDetailsData.locationsTitle}
                    </h3>
                </div>

                <motion.div
                    variants={innerContainer}
                    initial="hidden"
                    animate="show"
                    className="flex flex-wrap gap-2"
                >
                    {heroDetailsData.locations.map((loc) => (
                        <motion.div
                            variants={innerItem}
                            whileTap={{ scale: 0.92 }}
                            key={loc}
                            className="flex items-center gap-1.5 px-3 py-2 rounded-2xl border border-gray-100 dark:border-white/10 bg-gray-50/80 dark:bg-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] active:border-accent/40 active:bg-white dark:active:bg-white"
                        >
                            <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">{loc}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            <motion.div variants={item} className="flex flex-col gap-6 mt-2">
                <motion.div
                    variants={innerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 gap-6"
                >
                    {heroDetailsData.stats.map((stat, i) => (
                        <motion.div
                            variants={innerItem}
                            key={i}
                            className="flex items-center gap-3"
                        >
                            <motion.div
                                whileTap={{ scale: 1.1 }}
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50/80 dark:bg-white/50 border border-gray-100 dark:border-white/5 shadow-sm shrink-0"
                            >
                                <stat.icon size={18} className={stat.color || "text-accent-highlight"} strokeWidth={1.5} />
                            </motion.div>
                            <div className="flex flex-col">
                                <motion.span
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 + 0.3, type: "spring" }}
                                    className="text-[20px] font-semibold text-[#0a1128] dark:text-white leading-none mb-1 drop-shadow-sm"
                                >
                                    {stat.value}
                                </motion.span>
                                <span className="text-[8px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-[0.15em] leading-tight">
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
