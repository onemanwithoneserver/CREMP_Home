import { motion } from "framer-motion";
import { fullCycleSupportData } from "./data";
import clsx from "clsx";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 400, damping: 30 } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

export default function FullCycleSupportDesktop() {
  return (
    <section className="w-full bg-background px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 max-w-3xl mx-auto"
        >
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-primary mb-3">
            {fullCycleSupportData.sectionLabel}
          </p>
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">
            {fullCycleSupportData.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
            {fullCycleSupportData.subtitle}
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 px-6 py-2.5 bg-primary text-white text-sm font-bold rounded hover-lift transition-all"
          >
            {fullCycleSupportData.ctaLabel}
          </motion.button>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-5 gap-4"
        >
          {fullCycleSupportData.supportItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="bg-white dark:bg-surface border border-border rounded-lg p-5 text-center hover-lift cursor-pointer group transition-colors shadow-sm"
              >
                <div className={clsx("w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors", item.colorClass)}>
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h4 className="text-gray-900 dark:text-white font-bold text-sm mb-2">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-xs leading-snug">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
