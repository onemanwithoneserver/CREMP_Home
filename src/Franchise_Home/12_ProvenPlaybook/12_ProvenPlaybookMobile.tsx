import { motion } from "framer-motion";
import { provenPlaybookData } from "./data";

export default function ProvenPlaybookMobile() {
  return (
    <section className="w-full bg-[#0a1128] px-4 py-6">
      <p className="text-[9px] font-bold uppercase tracking-[3px] text-gray-500 mb-4 text-center">
        {provenPlaybookData.sectionLabel}
      </p>

      <div className="space-y-3">
        {provenPlaybookData.cards.map((card) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0d1a3a] border border-gray-800 rounded-xl p-4 flex items-start gap-3"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${card.color}15` }}
              >
                <Icon size={18} style={{ color: card.color }} />
              </div>
              <div>
                <h4 className="text-white font-bold text-xs mb-1">{card.title}</h4>
                <p className="text-gray-400 text-[10px] leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
