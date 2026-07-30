import clsx from "clsx";
import { motion } from "framer-motion";
import { getCardStyles } from "../utils/theme";
import { leadershipData } from "./data";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 400, damping: 30 } },
};

const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function LeadershipDesktop() {
    return (
        <section className="w-full bg-background px-6 py-10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center gap-3 mb-4 sm:mb-6 w-full"
                >
                    <div className="flex items-center gap-1.5">
                        <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-[#d4af37] to-transparent"></div>
                        <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
                    </div>
                    <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0b162c] dark:text-white shrink-0 text-center">
                        {leadershipData.sectionLabel}
                    </p>
                    <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
                        <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-[#d4af37] to-transparent"></div>
                    </div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={stagger}
                    className="grid grid-cols-3 gap-6"
                >
                    {leadershipData.members.map((member) => (
                        <motion.div
                            key={member.name}
                            variants={fadeInUp}
                            className={clsx("overflow-hidden rounded-lg border cursor-default group flex flex-col transition-all duration-300", getCardStyles())}
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={member.avatar}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-surface" />
                            </div>

                            <div className="p-6 -mt-8 relative z-10 flex-1 flex flex-col">
                                <h4 className="text-gray-900 dark:text-white font-bold text-lg">{member.name}</h4>
                                <p className="text-primary dark:text-accent text-sm font-semibold mb-1">{member.role}</p>
                                <p className="text-gray-500 dark:text-gray-400 text-xs font-medium mb-4">
                                    {member.company} · {member.experience}
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 text-sm italic leading-relaxed mt-auto">
                                    "{member.quote}"
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

