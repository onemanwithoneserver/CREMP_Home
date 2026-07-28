import { motion } from "framer-motion";
import { founderStoryData } from "./data";
import { Quote } from "lucide-react";

export default function FounderStoryMobile() {
  return (
    <section className="w-full bg-background px-4 py-6">
      <p className="text-[9px] font-bold uppercase tracking-[3px] text-gray-500 mb-4 text-center">
        {founderStoryData.sectionLabel}
      </p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#0d1a3a] border border-gray-800 rounded-xl p-4"
      >
        <Quote size={24} className="text-accent mb-3" />
        <p className="text-gray-300 text-xs leading-relaxed mb-4 italic">
          {founderStoryData.quote}
        </p>
        <div className="flex items-center gap-3 mb-4">
          <img
            src={founderStoryData.founder.avatar}
            alt={founderStoryData.founder.name}
            className="w-10 h-10 rounded-full object-cover border-2 border-[#D4AF37]/30"
          />
          <div>
            <p className="text-white font-bold text-xs">{founderStoryData.founder.name}</p>
            <p className="text-gray-400 text-[10px]">{founderStoryData.founder.title}</p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {founderStoryData.stats.map((stat) => (
            <div key={stat.label} className="bg-background border border-gray-800/50 rounded-lg p-2 text-center">
              <p className="text-lg font-black" style={{ color: stat.color }}>{stat.value}</p>
              <p className="text-gray-500 text-[7px] uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
