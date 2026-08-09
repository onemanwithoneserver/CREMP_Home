import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ShieldCheck, Sparkles, Users } from "lucide-react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { stakeholderData } from "./data";

const smoothEasing: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUpScale = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: smoothEasing },
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
};

const fadeUpItem = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: smoothEasing } },
};

const buttonHover = {
    rest: { scale: 1 },
    hover: { scale: 1.02, transition: { duration: 0.2, ease: smoothEasing } },
    tap: { scale: 0.98 },
};

const b1Themes = [
    {
        mainBorder: "border-blue-100 dark:border-white/10",
        mainShadow: "shadow-lg hover:shadow-xl dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
        iconWrapper: "bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-md group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] dark:from-blue-400 dark:to-blue-600 dark:text-[#17274C]",
        titleText: "text-blue-950 dark:text-white",
        titleHover: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
        subtitle: "text-blue-600 dark:text-blue-400",
        descText: "text-slate-600 dark:text-slate-400 font-medium",
        cardBg: "bg-white dark:bg-white/5 backdrop-blur-md",
        featureBg: "bg-slate-50 border-slate-200 group-hover/feature:bg-gradient-to-r group-hover/feature:from-blue-500 group-hover/feature:to-blue-700 group-hover/feature:border-transparent dark:bg-white/5 dark:border-white/10 dark:group-hover/feature:from-blue-400 dark:group-hover/feature:to-blue-600 transition-all",
        featureIcon: "text-blue-500 group-hover/feature:text-white dark:text-blue-400 dark:group-hover/feature:text-[#17274C] transition-colors",
        featureText: "text-slate-700 font-semibold group-hover/feature:text-white dark:text-slate-300 dark:group-hover/feature:text-[#17274C] transition-colors",
        buttonBg: "bg-gradient-to-r from-blue-500 to-blue-700 font-semibold text-white shadow-md hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] dark:from-blue-400 dark:to-blue-600 dark:text-[#17274C]",
        imageBg: "bg-blue-50/40 dark:bg-transparent",
        imageGlow: "hidden",
    },
    {
        mainBorder: "border-violet-100 dark:border-white/10",
        mainShadow: "shadow-lg hover:shadow-xl dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
        iconWrapper: "bg-gradient-to-br from-violet-500 to-violet-700 text-white shadow-md group-hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] dark:from-violet-400 dark:to-violet-600 dark:text-[#17274C]",
        titleText: "text-violet-950 dark:text-white",
        titleHover: "group-hover:text-violet-600 dark:group-hover:text-violet-400",
        subtitle: "text-violet-600 dark:text-violet-400",
        descText: "text-slate-600 dark:text-slate-400 font-medium",
        cardBg: "bg-white dark:bg-white/5 backdrop-blur-md",
        featureBg: "bg-slate-50 border-slate-200 group-hover/feature:bg-gradient-to-r group-hover/feature:from-violet-500 group-hover/feature:to-violet-700 group-hover/feature:border-transparent dark:bg-white/5 dark:border-white/10 dark:group-hover/feature:from-violet-400 dark:group-hover/feature:to-violet-600 transition-all",
        featureIcon: "text-violet-500 group-hover/feature:text-white dark:text-violet-400 dark:group-hover/feature:text-[#17274C] transition-colors",
        featureText: "text-slate-700 font-semibold group-hover/feature:text-white dark:text-slate-300 dark:group-hover/feature:text-[#17274C] transition-colors",
        buttonBg: "bg-gradient-to-r from-violet-500 to-violet-700 font-semibold text-white shadow-md hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] dark:from-violet-400 dark:to-violet-600 dark:text-[#17274C]",
        imageBg: "bg-violet-50/40 dark:bg-transparent",
        imageGlow: "hidden",
    },
];

const b2Themes = [
    {
        mainBorder: "border-cyan-100 dark:border-white/10",
        mainShadow: "shadow-lg hover:shadow-xl dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
        iconWrapper: "bg-gradient-to-br from-cyan-500 to-cyan-700 text-white shadow-md group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] dark:from-cyan-400 dark:to-cyan-600 dark:text-[#17274C]",
        titleText: "text-slate-900 dark:text-white",
        titleHover: "group-hover:text-cyan-600 dark:group-hover:text-cyan-400",
        subtitle: "text-cyan-600 dark:text-cyan-400",
        descText: "text-slate-600 dark:text-slate-400 font-medium",
        cardBg: "bg-white dark:bg-white/5 backdrop-blur-md",
        featureBg: "bg-slate-50 border-slate-200 group-hover/feature:bg-gradient-to-r group-hover/feature:from-cyan-500 group-hover/feature:to-cyan-700 group-hover/feature:border-transparent dark:bg-white/5 dark:border-white/10 dark:group-hover/feature:from-cyan-400 dark:group-hover/feature:to-cyan-600 transition-all",
        featureIcon: "text-cyan-600 group-hover/feature:text-white dark:text-cyan-400 dark:group-hover/feature:text-[#17274C] transition-colors",
        featureText: "text-slate-700 font-semibold group-hover/feature:text-white dark:text-slate-300 dark:group-hover/feature:text-[#17274C] transition-colors",
        buttonBg: "bg-gradient-to-r from-cyan-500 to-cyan-700 font-semibold text-white shadow-md hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] dark:from-cyan-400 dark:to-cyan-600 dark:text-[#17274C]",
        imageBg: "bg-cyan-50 dark:bg-transparent",
        imageGlow: "hidden",
    },
    {
        mainBorder: "border-orange-100 dark:border-white/10",
        mainShadow: "shadow-lg hover:shadow-xl dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
        iconWrapper: "bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-md group-hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] dark:from-orange-400 dark:to-orange-500 dark:text-[#17274C]",
        titleText: "text-slate-900 dark:text-white",
        titleHover: "group-hover:text-orange-500 dark:group-hover:text-orange-400",
        subtitle: "text-orange-600 dark:text-orange-400",
        descText: "text-slate-600 dark:text-slate-400 font-medium",
        cardBg: "bg-white dark:bg-white/5 backdrop-blur-md",
        featureBg: "bg-slate-50 border-slate-200 group-hover/feature:bg-gradient-to-r group-hover/feature:from-orange-400 group-hover/feature:to-orange-600 group-hover/feature:border-transparent dark:bg-white/5 dark:border-white/10 dark:group-hover/feature:from-orange-400 dark:group-hover/feature:to-orange-500 transition-all",
        featureIcon: "text-orange-500 group-hover/feature:text-white dark:text-orange-400 dark:group-hover/feature:text-[#17274C] transition-colors",
        featureText: "text-slate-700 font-semibold group-hover/feature:text-white dark:text-slate-300 dark:group-hover/feature:text-[#17274C] transition-colors",
        buttonBg: "bg-gradient-to-r from-orange-400 to-orange-600 font-semibold text-white shadow-md hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] dark:from-orange-400 dark:to-orange-500 dark:text-[#17274C]",
        imageBg: "bg-orange-50 dark:bg-transparent",
        imageGlow: "hidden",
    },
];

export default function DesktopStakeHolder1() {
    const { block1, block2, block3 } = stakeholderData;
    const containerRef = useRef(null);
    const navigate = useNavigate();
    const viewMode = window.location.pathname.startsWith("/mobile") ? "mobile" : "desktop";

    return (
        <div ref={containerRef} className="flex flex-col gap-8 py-8 px-4 md:px-6 w-full max-w-[1300px] mx-auto dark:bg-[#17274C]">

            <div className="flex flex-col items-center text-center gap-3 mt-2">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    className="flex items-center gap-2 bg-[#17274C] dark:bg-white/10 text-white dark:text-white text-[11px] font-semibold px-4 py-1.5 rounded-[4px] shadow-sm tracking-wider uppercase border border-transparent dark:border-white/20 backdrop-blur-md"
                >
                    <Users size={14} strokeWidth={2.5} />
                    {block1.tag}
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.1, duration: 0.5, ease: smoothEasing }}
                    className="text-3xl lg:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight leading-[1.1] max-w-3xl"
                >
                    {block1.title}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.2, duration: 0.5, ease: smoothEasing }}
                    className="text-base text-slate-600 dark:text-slate-400 font-medium max-w-2xl whitespace-pre-line leading-relaxed"
                >
                    {block1.subtitle}
                </motion.p>
            </div>

            <div className="flex flex-col gap-6 w-full mt-2">
                {block1.cards.map((card, idx) => {
                    const isEven = idx % 2 === 1;
                    const theme = b1Themes[idx % b1Themes.length];
                    return (
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, margin: "-20px" }}
                            variants={fadeUpScale}
                            key={card.id}
                            className={`w-full ${theme.cardBg} overflow-hidden ${theme.mainShadow} flex flex-col ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"} relative group transition-colors duration-300`}
                        >
                            <div className="p-6 lg:p-10 flex-1 flex flex-col justify-center relative z-10 w-full lg:w-1/2">
                                <div className="flex flex-col items-start gap-3 mb-4">
                                    <motion.div initial={{ scale: 1, rotate: 0 }} animate={{ scale: 1, rotate: 0 }} whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }} transition={{ duration: 0.3 }} className={`w-12 h-12 shrink-0 rounded-[4px] flex items-center justify-center transition-colors duration-300 ${theme.iconWrapper}`}>
                                        <card.icon size={22} strokeWidth={1.5} />
                                    </motion.div>
                                    <div>
                                        <h3 className={`text-2xl font-bold leading-tight transition-colors duration-300 ${theme.titleText} ${theme.titleHover}`}>
                                            {card.title}
                                        </h3>
                                        <p className={`${theme.subtitle} font-bold uppercase tracking-widest text-[11px] mt-1`}>
                                            {card.desktopSubtitle}
                                        </p>
                                    </div>
                                </div>

                                <p className={`${theme.descText} text-[15px] leading-relaxed mb-5 max-w-xl`}>
                                    {card.description}
                                </p>

                                <motion.div
                                    variants={staggerContainer}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false }}
                                    className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6"
                                >
                                    {card.features.map((feature, fIdx) => (
                                        <motion.div variants={fadeUpItem} key={fIdx} className="flex flex-col items-center text-center gap-2 group/feature">
                                            <motion.div initial={{ scale: 1, rotate: 0 }} animate={{ scale: 1, rotate: 0 }} whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }} transition={{ duration: 0.3 }} className={`w-10 h-10 flex items-center justify-center rounded-[4px] border transition-colors duration-300 ${theme.featureBg}`}>
                                                <feature.icon size={18} strokeWidth={1.5} className={theme.featureIcon} />
                                            </motion.div>
                                            <span className={`text-[12px] font-semibold leading-snug transition-colors duration-300 ${theme.featureText}`}>
                                                {feature.labelDesktop}
                                            </span>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                <motion.button
                                    variants={buttonHover}
                                    initial="rest"
                                    whileHover="hover"
                                    whileTap="tap"
                                    onClick={() => navigate(`/${viewMode}${card.route}`)}
                                    className={`w-full sm:w-fit font-bold py-3 px-6 rounded-[4px] flex items-center justify-center gap-2 transition-colors duration-300 relative group/btn ${theme.buttonBg}`}
                                >
                                    <span className="relative z-10 text-[14px]">{card.buttonText}</span>
                                    <ArrowRight size={16} className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                </motion.button>
                            </div>

                            <div className={`flex-1 w-full lg:w-1/2 relative ${theme.imageBg} flex items-center justify-center overflow-hidden`}>
                                <div className="w-full h-full relative z-10">
                                    <img src={card.image} alt={card.title} className="w-full h-full object-cover mix-blend-overlay opacity-90 transition-opacity duration-300" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-transparent dark:from-slate-900/50 to-transparent pointer-events-none"></div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <div className="flex flex-col items-center text-center gap-3 mt-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 text-cyan-600 dark:text-cyan-300 text-[11px] font-bold px-4 py-1.5 rounded-[4px] border border-cyan-200 dark:border-cyan-500/30 uppercase tracking-wider shadow-sm"
                >
                    <Sparkles size={14} strokeWidth={2.5} />
                    {block2.tag}
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.1, duration: 0.5, ease: smoothEasing }}
                    className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] max-w-3xl"
                >
                    {block2.title}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.2, duration: 0.5, ease: smoothEasing }}
                    className="text-base text-slate-600 dark:text-slate-400 font-medium max-w-2xl"
                >
                    {block2.subtitle}
                </motion.p>
            </div>

            <div className="flex flex-col gap-6 w-full relative mt-2">
                <div className="w-full h-full lg:p-2 flex flex-col gap-6">
                    {block2.cards.map((card, idx) => {
                        const isEven = idx % 2 === 1;
                        const theme = b2Themes[idx % b2Themes.length];
                        return (
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, margin: "-20px" }}
                                variants={fadeUpScale}
                                key={card.id}
                                className={`w-full ${theme.cardBg} overflow-hidden ${theme.mainShadow} flex flex-col ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"} relative group transition-colors duration-300`}
                            >
                                <div className="p-6 lg:p-10 flex-1 flex flex-col justify-center relative z-10 w-full lg:w-1/2">
                                    <div className="flex flex-col items-start gap-3 mb-4">
                                        <div className={`w-12 h-12 shrink-0 rounded-[6px] flex items-center justify-center transition-colors duration-300 ${theme.iconWrapper}`}>
                                            <card.icon size={22} strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <h3 className={`text-2xl font-bold leading-tight transition-colors duration-300 ${theme.titleText} ${theme.titleHover}`}>
                                                {card.title}
                                            </h3>
                                            <p className={`${theme.subtitle} font-bold uppercase tracking-widest text-[11px] mt-1`}>
                                                {card.desktopSubtitle}
                                            </p>
                                        </div>
                                    </div>

                                    <p className={`${theme.descText} text-[15px] leading-relaxed mb-5 max-w-xl`}>
                                        {card.description}
                                    </p>

                                    <motion.div
                                        variants={staggerContainer}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: false }}
                                        className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6"
                                    >
                                        {card.features.map((feature, fIdx) => (
                                            <motion.div variants={fadeUpItem} key={fIdx} className="flex flex-col items-center text-center gap-2 group/feature">
                                                <div className={`w-10 h-10 flex items-center justify-center rounded-[6px] border transition-colors duration-300 ${theme.featureBg}`}>
                                                    <feature.icon size={18} strokeWidth={1.5} className={theme.featureIcon} />
                                                </div>
                                                <span className={`text-[12px] font-semibold leading-snug transition-colors duration-300 ${theme.featureText}`}>
                                                    {feature.labelDesktop}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </motion.div>

                                    <motion.button
                                        variants={buttonHover}
                                        initial="rest"
                                        whileHover="hover"
                                        whileTap="tap"
                                        onClick={() => navigate(`/${viewMode}${card.route}`)}
                                        className={`w-full sm:w-fit font-bold py-3 px-6 rounded-[4px] flex items-center justify-center gap-2 transition-colors duration-300 relative group/btn ${theme.buttonBg}`}
                                    >
                                        <span className="relative z-10 text-[14px]">{card.buttonText}</span>
                                        <ArrowRight size={16} className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                    </motion.button>
                                </div>

                                <div className={`flex-1 w-full lg:w-1/2 relative flex items-center justify-center overflow-hidden ${theme.imageBg}`}>
                                    <div className="w-full h-full relative z-10">
                                        <img src={card.image} alt={card.title} className="w-full h-full object-cover opacity-90 transition-opacity duration-300" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-transparent dark:from-slate-900/40 to-transparent pointer-events-none"></div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <motion.section
                variants={fadeUpScale}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-20px" }}
                className="relative w-full overflow-hidden bg-white dark:bg-slate-900 shadow-md flex flex-col lg:flex-row mt-6 transition-colors duration-300"
            >
                <div className="p-6 lg:p-10 flex-1 flex flex-col justify-center gap-5 z-10 w-full lg:w-3/5 bg-slate-50 dark:bg-slate-900">
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-[11px] font-bold px-4 py-1.5 rounded-[4px] w-fit tracking-widest uppercase border border-emerald-200 dark:border-emerald-700/50 shadow-sm">
                            <ShieldCheck size={14} strokeWidth={2.5} />
                            {block3.tag}
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#022c22] dark:text-white leading-[1.1] tracking-tight">
                            {block3.title}
                        </h2>
                        <p className="text-lg lg:text-xl font-bold text-emerald-600 dark:text-emerald-400">
                            {block3.subtitleBold}
                        </p>
                        <p className="text-[15px] text-slate-700 dark:text-slate-400 font-medium leading-relaxed max-w-xl">
                            {block3.subtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
                        {block3.categories.map((category, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="group bg-white dark:bg-slate-800 rounded-[6px] p-3 flex items-center gap-3 shadow-sm border border-emerald-50 dark:border-slate-700 hover:border-emerald-200 dark:hover:border-emerald-700/50 transition-colors duration-200 cursor-pointer"
                            >
                                <motion.div initial={{ scale: 1, rotate: 0 }} animate={{ scale: 1, rotate: 0 }} whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }} transition={{ duration: 0.3 }} className="w-10 h-10 rounded-[4px] bg-emerald-50 dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-100 dark:border-slate-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-200 group-hover:border-transparent">
                                    <category.icon size={20} strokeWidth={1.5} />
                                </motion.div>
                                <span className="text-[13px] font-bold text-slate-800 dark:text-slate-200 group-hover:text-emerald-800 dark:group-hover:text-emerald-300 transition-colors">
                                    {category.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-2 w-full">
                        <motion.button
                            variants={buttonHover}
                            initial="rest"
                            whileHover="hover"
                            whileTap="tap"
                            onClick={() => navigate(`/${viewMode}${block3.route}`)}
                            className="w-full sm:w-fit bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-6 rounded-[4px] flex items-center justify-center gap-2 shadow-sm text-[14px] transition-colors relative group/btn3"
                        >
                            <span className="relative z-10 tracking-wide">{block3.buttonText}</span>
                            <ArrowUpRight size={16} className="relative z-10 transition-transform duration-300 group-hover/btn3:translate-x-1 group-hover/btn3:-translate-y-1" />
                        </motion.button>
                    </div>
                </div>

                <div className="flex-1 w-full lg:w-2/5 relative min-h-[350px] lg:min-h-full overflow-hidden bg-slate-900 group">
                    <img
                        src={block3.mainImage}
                        alt="Opportunities"
                        className="absolute inset-0 w-full h-full object-cover opacity-90 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-50 dark:from-slate-900 via-transparent to-transparent z-10 w-full lg:w-24 hidden lg:block pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 dark:from-slate-900/80 via-transparent to-transparent pointer-events-none"></div>

                    <div className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
                        {block3.floaters.map((floater, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 + idx * 0.1, duration: 0.4 }}
                                whileHover={{ x: -2 }}
                                className="group bg-white dark:bg-slate-800 rounded-[6px] p-2.5 pr-5 shadow-sm border border-slate-100 dark:border-slate-700 hover:border-emerald-300 flex items-center gap-3 w-52 cursor-pointer transition-colors duration-200"
                            >
                                <motion.div initial={{ scale: 1, rotate: 0 }} animate={{ scale: 1, rotate: 0 }} whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }} transition={{ duration: 0.3 }} className="w-8 h-8 rounded-[4px] bg-emerald-50 dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shadow-sm border border-emerald-100 dark:border-slate-600 transition-colors duration-200">
                                    <floater.icon size={16} strokeWidth={2} />
                                </motion.div>
                                <span className="text-[12px] font-bold text-slate-800 dark:text-slate-200 transition-colors">
                                    {floater.labelDesktop}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>
        </div>
    );
}
