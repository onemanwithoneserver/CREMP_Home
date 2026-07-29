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
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6 w-full">
            <div className="flex items-center gap-1.5">
              <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-[#d4af37] to-transparent"></div>
              <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
            </div>
            <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0b162c] dark:text-white shrink-0 text-center">
              {fullCycleSupportData.sectionLabel}
            </p>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
              <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-[#d4af37] to-transparent"></div>
            </div>
          </div>
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">
            {fullCycleSupportData.title}
          </h2>
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


