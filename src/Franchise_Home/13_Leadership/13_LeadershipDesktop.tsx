import { motion } from "framer-motion";
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
    <section className="w-full bg-[#0a1128] px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] font-bold uppercase tracking-[3px] text-gray-500 mb-2 text-center"
        >
          {leadershipData.sectionLabel}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-400 text-sm text-center max-w-2xl mx-auto mb-8"
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
              whileHover={{ y: -6 }}
              className="bg-[#0d1a3a] border border-gray-800 rounded-xl overflow-hidden hover:border-[#D4AF37]/30 transition-all cursor-pointer group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a3a] via-transparent to-transparent" />
              </div>

              <div className="p-5 -mt-8 relative z-10">
                <h4 className="text-white font-bold text-base">{member.name}</h4>
                <p className="text-[#D4AF37] text-xs font-semibold mb-1">{member.role}</p>
                <p className="text-gray-500 text-[10px] mb-3">
                  {member.company} · {member.experience}
                </p>
                <p className="text-gray-400 text-xs italic leading-relaxed">
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
