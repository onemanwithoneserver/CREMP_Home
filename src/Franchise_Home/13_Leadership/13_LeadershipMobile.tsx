import clsx from "clsx";
import { motion } from "framer-motion";
import { leadershipData } from "./data";
import { SectionHeader } from "../components/SectionHeader";

const itemVariants = {
    hidden: { opacity: 0, x: 40, scale: 0.9 },
    show: { 
        opacity: 1, 
        x: 0, 
        scale: 1,
        transition: { 
            type: "spring", 
            stiffness: 250, 
            damping: 25 
        } 
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    show: { 
        opacity: 1, 
        transition: { 
            staggerChildren: 0.12,
            delayChildren: 0.1
        } 
    },
};

export default function LeadershipMobile() {
    return (
        <section className="w-full bg-[#FAFAFA] dark:bg-slate-950 py-24 overflow-hidden relative">
            <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-violet-500/15 dark:bg-violet-600/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-emerald-500/10 dark:bg-emerald-600/15 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative z-10">
                <div className="px-6">
                    <SectionHeader 
                        overline={leadershipData.sectionLabel}
                        align="center"
                    />
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                    className="flex flex-row gap-8 mt-20 px-8 pb-12 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                >
                    {leadershipData.members.map((member) => (
                        <motion.div
                            key={member.name}
                            variants={itemVariants}
                            whileTap={{ scale: 0.96 }}
                            className="snap-center shrink-0 w-[75vw] max-w-[280px] flex flex-col items-center text-center"
                        >
                            <div className="relative w-48 h-48 mb-8">
                                <motion.div 
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                    className="absolute -inset-4 rounded-full border border-violet-200 dark:border-violet-500/30 border-t-violet-500 dark:border-t-violet-400 opacity-70"
                                />
                                
                                <motion.div 
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute -inset-1.5 rounded-full border border-emerald-200 dark:border-emerald-500/30 border-b-emerald-500 dark:border-b-emerald-400 opacity-60"
                                />
                                
                                <div className="w-full h-full rounded-full overflow-hidden shadow-2xl shadow-violet-900/10 dark:shadow-black/60 bg-slate-200 dark:bg-slate-800 relative z-10">
                                    <motion.img
                                        initial={{ scale: 1.15 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: 1.2, ease: "easeOut" }}
                                        viewport={{ once: true }}
                                        src={member.avatar}
                                        alt={member.name}
                                        className="w-full h-full object-cover pointer-events-none"
                                    />
                                </div>
                            </div>

                            <h4 className="text-slate-900 dark:text-white font-extrabold text-3xl tracking-tight mb-4">
                                {member.name}
                            </h4>
                            
                            <span className={clsx(
                                "px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase",
                                "bg-violet-100 text-violet-700 dark:bg-violet-500/10 dark:text-violet-300",
                                "border border-violet-200/50 dark:border-violet-500/20",
                                "shadow-sm"
                            )}>
                                {member.role}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}