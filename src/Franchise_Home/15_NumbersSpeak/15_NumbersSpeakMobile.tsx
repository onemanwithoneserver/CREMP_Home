import { motion } from "framer-motion";
import { numbersSpeakData } from "./data";

export default function NumbersSpeakMobile() {
  return (
    <section className="w-full bg-background px-4 py-6">
      <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-xl p-4 mb-4">
        <h2 className="text-base font-bold text-white mb-1">{numbersSpeakData.title}</h2>
        <p className="text-gray-400 text-[10px]">{numbersSpeakData.subtitle}</p>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        {numbersSpeakData.stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-[#0d1a3a] border border-gray-800 rounded-xl p-3"
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className="text-[7px] font-bold uppercase px-1.5 py-0.5 rounded-full"
                  style={{ backgroundColor: `${stat.color}15`, color: stat.color }}
                >
                  {stat.sublabel}
                </span>
                <Icon size={12} style={{ color: stat.color }} />
              </div>
              <p className="text-2xl font-black text-white">
                {stat.value}
                <span className="text-accent">{stat.suffix}</span>
              </p>
              <p className="text-gray-500 text-[9px] mt-0.5">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
