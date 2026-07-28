import { motion } from "framer-motion";
import { missionVisionData } from "./data";

export default function MissionVisionMobile() {
  return (
    <section className="w-full bg-[#0a1128] px-4 py-6">
      <p className="text-[9px] font-bold uppercase tracking-[3px] text-gray-500 mb-4 text-center">
        {missionVisionData.sectionLabel}
      </p>

      <div className="space-y-3">
        {missionVisionData.cards.map((card) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0d1a3a] border border-gray-800 rounded-xl p-4"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 flex items-center justify-center">
                  <Icon size={14} className="text-[#D4AF37]" />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-[3px] text-[#D4AF37]">
                  {card.label}
                </span>
              </div>
              <p className="text-gray-300 text-xs leading-relaxed">{card.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
