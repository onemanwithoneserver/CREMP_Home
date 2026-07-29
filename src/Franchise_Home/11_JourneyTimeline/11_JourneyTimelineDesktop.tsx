import { motion } from "framer-motion";
import { journeyTimelineData } from "./data";

export default function JourneyTimelineDesktop() {
  return (
    <section className="w-full bg-background px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4 sm:mb-6 w-full"
          >
            <div className="flex items-center gap-1.5">
              <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-[#d4af37] to-transparent"></div>
              <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
            </div>
            <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0b162c] dark:text-white shrink-0 text-center">
              {journeyTimelineData.sectionLabel}
            </p>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
              <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-[#d4af37] to-transparent"></div>
            </div>
          </motion.div>

        <div className="relative">
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-1/2 top-0 w-[2px] bg-gradient-to-b from-transparent via-[#d4af37]/40 to-transparent -translate-x-1/2" 
          />

          <div className="space-y-8">
            {journeyTimelineData.milestones.map((milestone, idx) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`flex items-center gap-6 ${
                  idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${idx % 2 === 0 ? "text-right" : "text-left"}`}>
                  <div
                    className={`inline-block border rounded-lg p-7 max-w-sm hover-lift cursor-default transition-all duration-500 shadow-sm relative overflow-hidden ${
                      milestone.isActive
                        ? "bg-[#0a1128] border-[#d4af37] shadow-lg shadow-[#d4af37]/10 ring-1 ring-[#d4af37]/20"
                        : "bg-surface-alt border-white/5 hover:border-white/10"
                    }`}
                  >
                    {milestone.isActive && (
                      <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 to-transparent opacity-50 pointer-events-none" />
                    )}
                    <p className={`text-base leading-relaxed relative z-10 ${milestone.isActive ? "text-gray-200" : "text-gray-400"}`}>
                      {milestone.description}
                    </p>
                  </div>
                </div>
                <div className="relative z-10 flex items-center justify-center">
                  <motion.div
                    animate={milestone.isActive ? { 
                      scale: [1, 1.05, 1],
                      boxShadow: [
                        "0 0 15px rgba(212,175,55,0.3)", 
                        "0 0 30px rgba(212,175,55,0.6)", 
                        "0 0 15px rgba(212,175,55,0.3)"
                      ] 
                    } : {}}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-[15px] font-black tracking-wider z-10 ${
                      milestone.isActive
                        ? "bg-gradient-to-br from-[#bf953f] to-[#b38728] text-white border-none"
                        : "bg-[#121c33] border border-white/20 text-gray-400"
                    }`}
                  >
                    {milestone.year}
                  </motion.div>
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


