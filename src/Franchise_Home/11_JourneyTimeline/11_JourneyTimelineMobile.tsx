import { motion } from "framer-motion";
import { journeyTimelineData } from "./data";

export default function JourneyTimelineMobile() {
  return (
    <section className="w-full bg-[#0a1128] px-4 py-6">
      <p className="text-[9px] font-bold uppercase tracking-[3px] text-gray-500 mb-6 text-center">
        {journeyTimelineData.sectionLabel}
      </p>

      <div className="relative pl-6">
        <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-800" />

        <div className="space-y-5">
          {journeyTimelineData.milestones.map((milestone, idx) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              <div
                className={`absolute -left-6 top-1 w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-bold z-10 ${
                  milestone.isActive
                    ? "bg-[#D4AF37] text-[#0a1128] ring-2 ring-[#D4AF37]/30"
                    : "bg-[#0d1a3a] border border-gray-700 text-gray-500"
                }`}
              >
                {milestone.year.slice(2)}
              </div>

              <div
                className={`ml-4 bg-[#0d1a3a] border rounded-lg p-3 ${
                  milestone.isActive ? "border-[#D4AF37]/30" : "border-gray-800"
                }`}
              >
                <p className="text-[#D4AF37] text-[10px] font-bold mb-0.5">{milestone.year}</p>
                <p className="text-gray-400 text-[10px]">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
