import { motion, type Variants } from "framer-motion";
import { categoriesData } from "./data";
import { ArrowUpRight } from "lucide-react";

const categoryColors = [
  "#7C3AED",
  "#059669",
  "#D97706",
  "#2563EB",
  "#DB2777",
  "#0891B2",
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 400, damping: 30 },
  },
};

export default function MobileCategories() {
  return (
    <div className="relative w-full overflow-hidden bg-gray-50 px-4 py-16 transition-colors duration-700 dark:bg-[#0a1128]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 flex flex-col"
      >
        <div className="mb-10 text-center">
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="inline-flex items-center justify-center rounded-[8px] bg-[#D4AF37]/10 px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-[#D4AF37] dark:bg-[#D4AF37]/10 dark:text-[#D4AF37]">
              {categoriesData.tag}
            </span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="mb-4 text-[2.2rem] font-black leading-[1.1] text-gray-900 dark:text-white"
          >
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#b38728] bg-clip-text text-transparent dark:from-[#D4AF37] dark:to-[#f9d08b]">
              {categoriesData.title}
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-[0.95rem] leading-relaxed text-gray-600 dark:text-gray-400"
          >
            {categoriesData.desc}
          </motion.p>
        </div>

        <motion.div variants={fadeInUp} className="mb-8 grid grid-cols-2 gap-3">
          {categoriesData.categories.map((cat, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between overflow-hidden rounded-[8px] bg-white p-5 shadow-sm border border-gray-100 dark:border-gray-800 dark:bg-[#121c33] transition-all duration-300 hover:shadow-lg hover:border-[#D4AF37]/50"
            >
              <div
                className="mb-6 flex h-12 w-12 items-center justify-center rounded-[8px] transition-colors"
                style={{
                  color: categoryColors[idx % 6],
                  backgroundColor: categoryColors[idx % 6] + "1A",
                }}
              >
                <cat.icon size={22} />
              </div>
              <h3 className="whitespace-pre-line text-lg font-black text-gray-900 dark:text-white">
                {cat.label}
              </h3>
            </div>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp} className="flex flex-col gap-4">
          <button className="flex w-full items-center justify-center gap-2 rounded-[8px] bg-gray-900 py-3.5 text-[0.9rem] font-bold text-white shadow-lg dark:bg-white dark:text-gray-900">
            {categoriesData.button.text}
            <ArrowUpRight size={16} />
          </button>
          <p className="text-center text-[0.7rem] font-medium text-gray-400">
            {categoriesData.bottomDisclaimer}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
