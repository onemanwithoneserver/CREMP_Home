import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../../components/layout";
import { categoriesData } from "./data";

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

export default function DesktopCategories() {
  return (
    <div className="relative w-full overflow-hidden bg-gray-50 py-16 transition-colors duration-700 dark:bg-[#0b1b42]">
      <Container className="relative z-10 max-w-7xl px-4 xl:px-0">
        <div className="mb-10 flex items-end justify-between">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="flex flex-col"
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <span className="inline-flex items-center justify-center rounded-[8px] bg-[#D4AF37]/10 px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-widest text-[#D4AF37] dark:bg-[#D4AF37]/10 dark:text-[#D4AF37]">
                {categoriesData.tag}
              </span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="mb-4 text-[3rem] font-black leading-tight text-gray-900 dark:text-white"
            >
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#b38728] bg-clip-text text-transparent dark:from-[#D4AF37] dark:to-[#f9d08b]">
                {categoriesData.title}
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="max-w-xl text-[1.05rem] leading-relaxed text-gray-600 dark:text-gray-400"
            >
              {categoriesData.desc}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
          >
            <motion.button
              whileHover={{ scale: 1.05, paddingRight: "2.5rem" }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-2 rounded-[8px] bg-gray-900 px-8 py-4 text-[0.95rem] font-bold text-white transition-all hover:bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] dark:bg-white dark:text-gray-900 dark:hover:bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(251,191,36,0.25)] active:scale-95"
            >
              {categoriesData.button.text}
              <ArrowUpRight
                size={18}
                className="absolute right-6 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1"
              />
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-50px" }}
          className="grid grid-cols-5 gap-6"
        >
          {categoriesData.categories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-[8px] bg-white p-8 shadow-sm transition-all hover:shadow-2xl hover:shadow-[#D4AF37]/10 dark:bg-[#121c33] dark:hover:shadow-[#D4AF37]/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] to-[#b38728] opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-[#2d2008] dark:to-[#121c33]" />

              <div className="relative z-10 flex justify-between items-start mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-gray-50 text-[#D4AF37] transition-all group-hover:bg-white/10 group-hover:text-white dark:bg-[#0b1b42] dark:text-[#D4AF37]">
                  <cat.icon size={24} />
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1 dark:border-gray-700 dark:bg-gray-800">
                  <ArrowUpRight
                    size={16}
                    className="text-[#D4AF37] dark:text-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="whitespace-pre-line text-lg font-black text-gray-900 transition-colors group-hover:text-white dark:text-white">
                  {cat.label}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center text-[0.85rem] font-medium text-gray-400"
        >
          {categoriesData.bottomDisclaimer}
        </motion.p>
      </Container>
    </div>
  );
}
