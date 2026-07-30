import clsx from "clsx";
import { motion } from "framer-motion";
import { getCardStyles } from "../utils/theme";
import { leadershipData } from "./data";

export default function LeadershipMobile() {
    return (
        <section className="w-full bg-background px-4 py-8">
            <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6 w-full">
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
            </div>

            <div className="space-y-3">
                {leadershipData.members.map((member) => (
                    <motion.div
                        key={member.name}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={clsx("overflow-hidden rounded-[4px] border transition-all duration-300", getCardStyles())}
                    >
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={member.avatar}
                                alt={member.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-surface" />
                        </div>
                        <div className="p-5 -mt-6 relative z-10 flex-1 flex flex-col">
                            <h4 className="text-gray-900 dark:text-white font-bold text-base">{member.name}</h4>
                            <p className="text-primary dark:text-accent text-xs font-semibold mb-1">{member.role}</p>
                            <p className="text-gray-500 dark:text-gray-400 text-[10px] mb-3 font-medium">
                                {member.company} · {member.experience}
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 text-[11px] italic leading-relaxed mt-auto">
                                "{member.quote}"
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

