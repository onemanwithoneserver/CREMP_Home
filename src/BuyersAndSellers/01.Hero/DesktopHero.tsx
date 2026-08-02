import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "../../components/layout";
import { heroData } from "./data";

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
};
const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 400, damping: 30 },
    },
};
const popIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring", stiffness: 400, damping: 25 },
    },
};

export default function DesktopHero() {
    const PrimaryIcon = heroData.buttons[0].icon;
    const SecondaryIcon = heroData.buttons[1].icon;

    return (
        <div className="relative min-h-[85vh] w-full overflow-hidden bg-[#0b1b42] flex flex-col items-center justify-center pt-24 pb-12">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.4, scale: 1 }}
                transition={{ duration: 3, ease: "easeOut" }}
                className="absolute -top-[20%] left-[20%] h-[600px] w-[600px] rounded-full bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] blur-[140px] pointer-events-none transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(251,191,36,0.25)] active:scale-95"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.3, scale: 1 }}
                transition={{ duration: 3, ease: "easeOut", delay: 0.5 }}
                className="absolute -bottom-[20%] right-[10%] h-[500px] w-[500px] rounded-full bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] blur-[120px] pointer-events-none transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(251,191,36,0.25)] active:scale-95"
            />

            <Container className="relative z-10 max-w-7xl px-4 xl:px-0">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col items-center text-center mt-4"
                >
                    <motion.div variants={fadeInUp} className="mb-6">
                        <span className="inline-flex items-center gap-2 rounded-[8px] border border-white/10 bg-white/5 px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#D4AF37] backdrop-blur-md shadow-[0_0_20px_rgba(52,211,153,0.1)]">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] opacity-75 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(251,191,36,0.25)] active:scale-95"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(251,191,36,0.25)] active:scale-95"></span>
                            </span>
                            {heroData.tag}
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={fadeInUp}
                        className="max-w-5xl text-[4rem] font-black leading-[1.05] tracking-tight text-white xl:text-[4.5rem] mb-4"
                    >
                        Make Informed Decisions. <br />
                        Secure Your{" "}
                        <span className="bg-gradient-to-r from-[#D4AF37] to-[#b38728] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(52,211,153,0.4)]">
                            {heroData.titleHighlight}
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeInUp}
                        className="max-w-2xl text-[1.1rem] font-medium leading-relaxed text-gray-400 mb-8"
                    >
                        {heroData.desc}
                    </motion.p>

                    <motion.div variants={fadeInUp} className="flex items-center gap-5">
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 30px rgba(52,211,153,0.3)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="group flex items-center gap-3 rounded-[8px] bg-gradient-to-r from-[#D4AF37] to-[#D4AF37] px-8 py-4 text-[0.95rem] font-bold text-white shadow-xl transition-all"
                        >
                            <PrimaryIcon
                                size={20}
                                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                            {heroData.buttons[0].text}
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group flex items-center gap-3 rounded-[8px] border border-white/20 bg-white/5 px-8 py-4 text-[0.95rem] font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/30"
                        >
                            <SecondaryIcon
                                size={20}
                                className="text-gray-300 transition-colors group-hover:text-white"
                            />
                            {heroData.buttons[1].text}
                            <ArrowRight
                                size={16}
                                className="ml-2 opacity-0 -translate-x-4 transition-all group-hover:opacity-100 group-hover:translate-x-0"
                            />
                        </motion.button>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={popIn}
                    initial="hidden"
                    animate="show"
                    transition={{ delay: 1 }}
                    className="mx-auto mt-16 w-full max-w-4xl rounded-[8px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl"
                >
                    <div className="grid grid-cols-3 divide-x divide-white/10">
                        {heroData.features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col items-center justify-center gap-3 px-6 text-center group cursor-default"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#D4AF37]/20">
                                    <feature.icon size={24} />
                                </div>
                                <span className="whitespace-pre-line text-[0.85rem] font-bold tracking-wide text-gray-300 transition-colors group-hover:text-white">
                                    {feature.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </Container>
        </div>
    );
}
