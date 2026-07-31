import clsx from "clsx";
import { motion } from "framer-motion";
import { getCardStyles } from "../utils/theme";
import { leadershipData } from "./data";
import { SectionHeader } from "../components/SectionHeader";

export default function LeadershipMobile() {
    return (
        <section className="w-full bg-[#FAFAFA] px-4 py-8">
            <SectionHeader 
                overline={leadershipData.sectionLabel}
                align="center"
            />

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
                            <h4 className="text-[#0a1128] dark:text-white font-bold text-base">{member.name}</h4>
                            <p className="text-[#0a1128] dark:text-accent text-xs font-semibold mb-1">{member.role}</p>
                            <p className="text-gray-500 dark:text-gray-400 text-xs mb-3 font-medium">
                                {member.company} · {member.experience}
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 text-sm italic leading-relaxed mt-auto">
                                "{member.quote}"
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

