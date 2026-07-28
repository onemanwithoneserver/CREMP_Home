import { motion } from "framer-motion";
import { journeyTimelineData } from "./data";

export default function JourneyTimelineDesktop() {
  return (
    <section className="w-full bg-background px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] font-bold uppercase tracking-[3px] text-gray-500 mb-8 text-center"
        >
          {journeyTimelineData.sectionLabel}
        </motion.p>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-800 -translate-x-1/2" />

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
                    className={`inline-block bg-[#0d1a3a] border rounded p-4 max-w-sm ${
                      milestone.isActive
                        ? "border-[#D4AF37]/30 shadow-lg shadow-[#D4AF37]/10"
                        : "border-gray-800"
                    }`}
                  >
                    <p className="text-gray-400 text-[15px]">{milestone.description}</p>
                  </div>
                </div>
                <div className="relative z-10 flex items-center justify-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold ${
                      milestone.isActive
                        ? "bg-[#D4AF37] text-[#0a1128] ring-4 ring-[#D4AF37]/20"
                        : "bg-[#0d1a3a] border-2 border-gray-700 text-gray-400"
                    }`}
                  >
                    {milestone.year}
                  </div>
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
