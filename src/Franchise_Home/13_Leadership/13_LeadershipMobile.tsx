import { motion } from "framer-motion";
import { leadershipData } from "./data";
import { getCardStyles } from "../utils/theme";
import clsx from "clsx";

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
              className={clsx("overflow-hidden rounded-[4px] border shadow-sm hover-lift transition-all duration-300", getCardStyles())}
            >
              <div className="flex gap-4 p-4">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 rounded-[4px] object-cover shrink-0 shadow-sm border border-border"
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


