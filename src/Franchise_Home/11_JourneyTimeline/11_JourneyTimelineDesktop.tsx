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
          className="text-[12px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-primary mb-12 text-center"
        >
          {journeyTimelineData.sectionLabel}
        </motion.p>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

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
                    className={`inline-block bg-white dark:bg-surface border rounded-lg p-6 max-w-sm hover-lift cursor-default transition-colors shadow-sm ${
                      milestone.isActive
                        ? "border-primary/30 dark:border-accent/40 shadow-primary/5 dark:shadow-accent/5 ring-1 ring-primary/10 dark:ring-accent/10"
                        : "border-border"
                    }`}
                  >
                    <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
                <div className="relative z-10 flex items-center justify-center">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center text-[13px] font-black ${
                      milestone.isActive
                        ? "bg-primary text-white dark:bg-accent dark:text-gray-900 ring-4 ring-primary/20 dark:ring-accent/30 shadow-md"
                        : "bg-gray-50 dark:bg-surface-alt border-2 border-border text-gray-500 dark:text-gray-400"
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
