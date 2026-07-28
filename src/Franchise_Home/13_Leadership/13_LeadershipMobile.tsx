import { motion } from "framer-motion";
import { leadershipData } from "./data";

export default function LeadershipMobile() {
  return (
    <section className="w-full bg-background px-4 py-8">
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-800 dark:text-primary mb-3 text-center">
        {leadershipData.sectionLabel}
      </p>
      <p className="text-gray-600 dark:text-gray-400 text-[13px] text-center mb-6 px-2 leading-relaxed">
        {leadershipData.intro}
      </p>

      <div className="space-y-3">
        {leadershipData.members.map((member) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-surface border border-border rounded-lg overflow-hidden shadow-sm hover-lift"
          >
            <div className="flex gap-4 p-4">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-24 h-24 rounded-lg object-cover shrink-0 shadow-sm border border-border"
              />
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <h4 className="text-gray-900 dark:text-white font-bold text-sm">{member.name}</h4>
                <p className="text-primary dark:text-accent text-xs font-semibold mb-1">{member.role}</p>
                <p className="text-gray-500 dark:text-gray-400 text-[10px] mb-2 font-medium">
                  {member.company} · {member.experience}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-[11px] italic leading-relaxed">
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
