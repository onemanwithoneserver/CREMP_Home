import clsx from "clsx";
import { motion } from "framer-motion";
import { leadershipData } from "./data";
import { SectionHeader } from "../components/SectionHeader";

const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        transition: { 
            type: "spring", 
            stiffness: 200, 
            damping: 20 
        } 
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    show: { 
        opacity: 1, 
        transition: { 
            staggerChildren: 0.15, 
            delayChildren: 0.1 
        } 
    },
};

export default function LeadershipDesktop() {
    return (
        <section className="w-full bg-[#FAFAFA] dark:bg-slate-950 px-6 py-32 relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -right-[5%] w-[600px] h-[600px] bg-violet-500/10 dark:bg-violet-600/15 rounded-full blur-[120px]" />
                <div className="absolute -bottom-[10%] -left-[5%] w-[500px] h-[500px] bg-emerald-500/10 dark:bg-emerald-600/15 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <SectionHeader 
                    overline={leadershipData.sectionLabel}
                    align="center"
                />

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 mt-24"
                >
                    {leadershipData.members.map((member) => (
                        <motion.div
                            key={member.name}
                            variants={itemVariants}
                            className={clsx(
                                "group relative flex flex-col items-center p-8 rounded-3xl cursor-pointer",
                                "transition-all duration-500 ease-out",
                                "hover:bg-white/60 dark:hover:bg-white/[0.02]",
                                "hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)]",
                                "hover:-translate-y-2"
                            )}
                        >
                            {/* Avatar Container */}
                            <div className="relative w-56 h-56 mb-10">
                                {/* Outer Counter-Rotating Violet Ring (Appears on Hover) */}
                                <motion.div 
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute -inset-5 rounded-full border border-violet-200/50 dark:border-violet-500/20 border-t-violet-500 dark:border-t-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                />
                                
                                {/* Inner Rotating Emerald Ring (Intensifies on Hover) */}
                                <motion.div 
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                    className="absolute -inset-2 rounded-full border border-emerald-200/50 dark:border-emerald-500/20 border-b-emerald-500 dark:border-b-emerald-400 opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                                />
                                
                                {/* Image Container */}
                                <div className="w-full h-full rounded-full overflow-hidden relative z-10 shadow-xl shadow-slate-200 dark:shadow-black/50 group-hover:shadow-2xl group-hover:shadow-violet-900/20 dark:group-hover:shadow-violet-900/40 transition-shadow duration-500 bg-slate-100 dark:bg-slate-800">
                                    <img
                                        src={member.avatar}
                                        alt={member.name}
                                        className="w-full h-full object-cover filter grayscale-[60%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                                    />
                                    {/* Subtle Overlay */}
                                    <div className="absolute inset-0 bg-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                                </div>
                            </div>

                            {/* Info Container */}
                            <div className="text-center flex flex-col items-center">
                                <h4 className="text-slate-900 dark:text-white font-extrabold text-2xl lg:text-3xl tracking-tight mb-4 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                                    {member.name}
                                </h4>
                                
                                {/* Pill Badge that lights up on hover */}
                                <span className={clsx(
                                    "px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-colors duration-300",
                                    "bg-slate-100 text-slate-500 dark:bg-slate-800/50 dark:text-slate-400",
                                    "group-hover:bg-violet-100 group-hover:text-violet-700 dark:group-hover:bg-violet-500/10 dark:group-hover:text-violet-300",
                                    "border border-transparent group-hover:border-violet-200/50 dark:group-hover:border-violet-500/20"
                                )}>
                                    {member.role}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}