import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { heroData } from "./data";

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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
const popIn: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring", stiffness: 400, damping: 25 },
    },
};

export default function MobileHero() {
    const PrimaryIcon = heroData.buttons[0].icon;
    const SecondaryIcon = heroData.buttons[1].icon;

    return (
        <div className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b1b42] flex flex-col justify-center px-4 py-24 pt-32">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 2 }}
                className="absolute -top-[10%] -left-[20%] h-[300px] w-[300px] rounded-full bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] blur-[100px] pointer-events-none transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(251,191,36,0.25)] active:scale-95"
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 2, delay: 0.5 }}
                className="absolute bottom-[10%] -right-[20%] h-[300px] w-[300px] rounded-full bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] blur-[100px] pointer-events-none transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(251,191,36,0.25)] active:scale-95"
            />

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="relative z-10 flex flex-col items-center text-center mt-4"
            >
                <motion.div variants={fadeInUp} className="mb-6">
                    <span className="inline-flex items-center gap-2 rounded-[8px] border border-white/10 bg-white/5 px-3 py-1.5 text-[0.55rem] font-bold uppercase tracking-widest text-[#D4AF37] backdrop-blur-md shadow-[0_0_15px_rgba(52,211,153,0.1)]">
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] opacity-75 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(251,191,36,0.25)] active:scale-95"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(251,191,36,0.25)] active:scale-95"></span>
                        </span>
                        {heroData.tag}
                    </span>
                </motion.div>

                <motion.h1
                    variants={fadeInUp}
                    className="mb-4 text-[2.5rem] font-black leading-[1.1] tracking-tight text-white"
                >
                    Make Informed <br /> Decisions. Secure <br /> Your{" "}
                    <span className="bg-gradient-to-r from-[#D4AF37] to-[#b38728] bg-clip-text text-transparent drop-shadow-md">
                        {heroData.titleHighlight}
                    </span>
                </motion.h1>

                <motion.p
                    variants={fadeInUp}
                    className="mb-8 text-[0.95rem] font-medium leading-relaxed text-gray-400"
                >
                    {heroData.desc}
                </motion.p>

                <motion.div
                    variants={fadeInUp}
                    className="flex w-full flex-col gap-3 mb-10"
                >
                    <button className="flex w-full items-center justify-center gap-2 rounded-[8px] bg-gradient-to-r from-[#D4AF37] to-[#D4AF37] py-3.5 text-[0.9rem] font-bold text-white shadow-lg">
                        <PrimaryIcon size={18} />
                        {heroData.buttons[0].text}
                    </button>
                    <button className="flex w-full items-center justify-center gap-2 rounded-[8px] border border-white/20 bg-white/5 py-3.5 text-[0.9rem] font-bold text-white backdrop-blur-md">
                        <SecondaryIcon size={18} className="text-gray-300" />
                        {heroData.buttons[1].text}
                        <ArrowRight size={14} className="ml-1" />
                    </button>
                </motion.div>

                <motion.div
                    variants={popIn}
                    className="w-full rounded-[8px] border border-white/10 bg-white/5 p-4 backdrop-blur-md shadow-xl"
                >
                    <div className="flex flex-col gap-4 divide-y divide-white/10">
                        {heroData.features.map((feature, idx) => (
                            <div
                                key={idx}
                                className={`flex items-center gap-4 ${idx !== 0 ? "pt-4" : ""}`}
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37]">
                                    <feature.icon size={20} />
                                </div>
                                <span className="text-left text-[0.8rem] font-bold tracking-wide text-gray-200">
                                    {feature.text.replace("\n", " ")}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}
