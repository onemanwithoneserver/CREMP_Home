import clsx from "clsx";
import { motion } from "framer-motion";
import { getCardStyles } from "../utils/theme";
import { leadershipData } from "./data";
import { SectionHeader } from "../components/SectionHeader";

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
        <section className="w-full bg-[#FAFAFA] px-6 py-10">
            <div className="max-w-7xl mx-auto">
                <SectionHeader 
                    overline={leadershipData.sectionLabel}
                    align="center"
                />

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
                            className={clsx("overflow-hidden rounded-3xl border bg-white dark:bg-surface cursor-default group flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:border-primary/30", getCardStyles())}
                        >
                            <div className="relative h-72 overflow-hidden">
                                <img
                                    src={member.avatar}
                                    alt={member.name}
                                    className="w-full h-full object-cover filter grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/90 via-[#0a1128]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <p className="text-white text-sm font-medium italic translate-y-4 group-hover:translate-y-0 transition-transform duration-300 leading-relaxed">
                                        "{member.quote}"
                                    </p>
                                </div>
                            </div>

                            <div className="p-6 relative z-10 flex-1 flex flex-col bg-white dark:bg-surface border-t border-gray-100 dark:border-white/5">
                                <h4 className="text-[#0a1128] dark:text-white font-bold text-xl tracking-tight">{member.name}</h4>
                                <p className="text-[#0a1128] dark:text-accent text-sm font-semibold mb-1">{member.role}</p>
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

