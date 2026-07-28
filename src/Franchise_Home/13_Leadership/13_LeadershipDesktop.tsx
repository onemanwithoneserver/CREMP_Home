import { motion } from "framer-motion";
import { leadershipData } from "./data";
import { getCardStyles } from "../utils/theme";
import clsx from "clsx";

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
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[12px] font-bold uppercase tracking-[0.2em] text-gray-800 dark:text-primary mb-4 text-center"
        >
          {leadershipData.sectionLabel}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-400 text-base text-center max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {leadershipData.intro}
        </motion.p>

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
              className={clsx("overflow-hidden rounded-lg border shadow-sm hover-lift cursor-default group flex flex-col transition-all duration-300", getCardStyles())}
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
