import { motion } from "framer-motion";
import { founderStoryData } from "./data";
import { Quote } from "lucide-react";

export default function FounderStoryDesktop() {
  return (
    <section className="w-full bg-background px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] font-bold uppercase tracking-[3px] text-gray-500 mb-6 text-center"
        >
          {founderStoryData.sectionLabel}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0d1a3a] border border-gray-800 rounded-xl p-8 flex gap-8"
        >
          <div className="flex-1">
            <Quote size={32} className="text-accent mb-4" />
            <p className="text-gray-300 text-base leading-relaxed mb-6 italic">
              {founderStoryData.quote}
            </p>
            <div className="flex items-center gap-3">
              <img
                src={founderStoryData.founder.avatar}
                alt={founderStoryData.founder.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-[#D4AF37]/30"
              />
              <div>
                <p className="text-white font-bold text-sm">
                  {founderStoryData.founder.name}
                </p>
                <p className="text-gray-400 text-xs">
                  {founderStoryData.founder.title}
                </p>
              </div>
            </div>
          </div>
          <div className="w-[200px] grid grid-cols-1 gap-3">
            {founderStoryData.stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="bg-background border border-gray-800/50 rounded-lg p-3 text-center cursor-pointer hover:border-[#D4AF37]/30 transition-all"
              >
                <p className="text-2xl font-black" style={{ color: stat.color }}>
                  {stat.value}
                </p>
                <p className="text-gray-500 text-[10px] uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
