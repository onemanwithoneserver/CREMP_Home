import { motion } from "framer-motion";
import { leadershipData } from "./data";
import { SectionHeader } from "../components/SectionHeader";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

export default function LeadershipMobile() {
  return (
    <section className="w-full px-4 py-16 relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -right-[5%] w-[300px] h-[300px] bg-[#d4af37]/10 rounded-full blur-[80px] animate-pulse-soft" />
        <div
          className="absolute -bottom-[10%] -left-[5%] w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px] animate-pulse-soft"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-8">
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
          className="flex flex-col gap-6 w-full"
        >
          {leadershipData.members.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="group relative flex flex-col h-[320px] rounded-2xl overflow-hidden shadow-lg bg-white"
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="w-full h-full object-cover filter grayscale-[20%]"
                draggable={false}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/95 via-[#0a1128]/50 to-transparent opacity-90" />

              <div className="absolute bottom-0 left-0 w-full p-5 flex flex-col justify-end">
                <h4 className="text-white font-semibold text-xl tracking-tight mb-1 text-[#d4af37]">
                  {member.name}
                </h4>
                <p className="text-gray-300 text-xs font-semibold tracking-widest uppercase mb-3">
                  {member.role}
                </p>

                <div className="w-6 h-[2px] bg-[#d4af37] mb-3 rounded-full" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
