import { motion } from "framer-motion";
import { journeyTimelineData } from "./data";

export default function JourneyTimelineMobile() {
  return (
    <section className="w-full bg-background px-4 py-8">
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-800 dark:text-primary mb-8 text-center">
        {journeyTimelineData.sectionLabel}
      </p>

      <div className="relative pl-8">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

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
                className={`absolute -left-8 top-2 w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black z-10 ${
                  milestone.isActive
                    ? "bg-primary text-white dark:bg-accent dark:text-gray-900 ring-2 ring-primary/20 dark:ring-accent/30 shadow-md"
                    : "bg-gray-50 dark:bg-surface-alt border border-border text-gray-500 dark:text-gray-400"
                }`}
              >
                {milestone.year.slice(2)}
              </div>

              <div
                className={`ml-4 bg-white dark:bg-surface border rounded-lg p-5 shadow-sm hover-lift cursor-default transition-colors ${
                  milestone.isActive ? "border-primary/30 dark:border-accent/40 shadow-primary/5 dark:shadow-accent/5 ring-1 ring-primary/10 dark:ring-accent/10" : "border-border"
                }`}
              >
                <p className="text-primary dark:text-accent text-sm font-bold mb-1">{milestone.year}</p>
                <p className="text-gray-600 dark:text-gray-400 text-[13px] leading-relaxed">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
