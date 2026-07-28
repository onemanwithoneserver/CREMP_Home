import { motion } from "framer-motion";
import { leadershipData } from "./data";

export default function LeadershipMobile() {
  return (
    <section className="w-full bg-[#0a1128] px-4 py-6">
      <p className="text-[9px] font-bold uppercase tracking-[3px] text-gray-500 mb-1 text-center">
        {leadershipData.sectionLabel}
      </p>
      <p className="text-gray-400 text-[10px] text-center mb-4 px-4">
        {leadershipData.intro}
      </p>

      <div className="space-y-3">
        {leadershipData.members.map((member) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0d1a3a] border border-gray-800 rounded-xl overflow-hidden"
          >
            <div className="flex gap-3 p-3">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-20 h-20 rounded-lg object-cover shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h4 className="text-white font-bold text-xs">{member.name}</h4>
                <p className="text-[#D4AF37] text-[10px] font-semibold">{member.role}</p>
                <p className="text-gray-500 text-[8px] mb-1">
                  {member.company} · {member.experience}
                </p>
                <p className="text-gray-400 text-[9px] italic leading-relaxed">
                  "{member.quote}"
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
