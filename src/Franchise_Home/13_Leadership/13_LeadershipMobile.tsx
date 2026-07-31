import clsx from "clsx";
import { motion } from "framer-motion";
import { leadershipData } from "./data";
import { SectionHeader } from "../components/SectionHeader";

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 25 } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function LeadershipMobile() {
    return (
        <section className="w-full bg-white dark:bg-[#0b162c] py-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="px-4">
                <SectionHeader 
                    overline={leadershipData.sectionLabel}
                    align="center"
                />
            </div>

            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="flex overflow-x-auto snap-x snap-mandatory gap-6 mt-12 pb-8 px-6 hide-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {leadershipData.members.map((member) => (
                    <motion.div
                        key={member.name}
                        variants={itemVariants}
                        className="flex flex-col items-center text-center shrink-0 w-[200px] snap-center group"
                    >
                        <div className="relative w-40 h-40 mb-5">
                            <div className="absolute inset-0 rounded-full border border-gray-100 dark:border-white/5 scale-[1.08]" />
                            <div className="w-full h-full rounded-full overflow-hidden shadow-lg bg-gray-100">
                                <img
                                    src={member.avatar}
                                    alt={member.name}
                                    className="w-full h-full object-cover filter grayscale-[10%]"
                                    draggable={false}
                                />
                            </div>
                        </div>

                        <h4 className="text-[#0a1128] dark:text-white font-semibold text-lg tracking-tight mb-1">
                            {member.name}
                        </h4>
                        <p className="text-gray-500 dark:text-gray-400 text-[11px] font-semibold tracking-wider uppercase">
                            {member.role}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
            
            <div className="flex justify-center mt-2">
                <div className="flex gap-1.5">
                    {leadershipData.members.map((_, i) => (
                        <div key={i} className={clsx("h-1.5 rounded-full transition-all duration-300", i === 0 ? "w-4 bg-primary" : "w-1.5 bg-gray-200 dark:bg-white/10")} />
                    ))}
                </div>
            </div>
        </section>
    );
}
