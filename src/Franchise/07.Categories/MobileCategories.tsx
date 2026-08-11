import { motion, type Variants } from "framer-motion";
import { ChevronRight, ShieldCheck, Sparkles, Users } from "lucide-react";
import { Container } from "../../components/layout";
import { categoriesData, iconColors } from "./data";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const staggerGrid: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const pulseGlow: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.5, 0.8, 0.5],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function MobileCategories() {
  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-white/40 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.05)] backdrop-blur-xl border border-white/40 transition-colors duration-700 dark:bg-[#0b1b42]/60 dark:border-white/10 dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(#D4AF37 2px, transparent 2px)",
          backgroundSize: "16px 16px",
        }}
      />
      <motion.div
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/15 via-transparent to-transparent dark:from-[#D4AF37]/15"
      />

      <Container className="relative z-10 flex flex-col items-center px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="mb-8 flex flex-col items-center text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="mb-4 flex items-center gap-2 rounded-[2px] border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-1.5 backdrop-blur-xl dark:border-[#D4AF37]/30 dark:bg-[#D4AF37]/10"
          >
            <motion.div
              whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer"
            >
              <Sparkles
                size={12}
                className="text-[#D4AF37] dark:text-[#D4AF37]"
              />
            </motion.div>
            <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#D4AF37] dark:text-[#D4AF37]">
              {categoriesData.tag}
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="mb-4 text-[2.5rem] font-black leading-[1.1] tracking-tight text-gray-900 dark:text-white sm:text-[3rem]"
          >
            {categoriesData.title}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-[0.95rem] font-medium leading-relaxed text-gray-600 dark:text-gray-400"
          >
            {categoriesData.desc}
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerGrid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="mb-8 grid w-full grid-cols-2 gap-3 sm:grid-cols-3"
        >
          {categoriesData.categories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariant}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative flex h-36 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border border-white/40 bg-white/30 p-4 text-center shadow-[0_4px_16px_rgba(0,0,0,0.05)] backdrop-blur-md transition-all hover:border-[#D4AF37]/50 hover:bg-white/50 hover:shadow-xl dark:border-white/10 dark:bg-black/20 dark:hover:border-[#D4AF37]/30 dark:hover:bg-black/40"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#D4AF37]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:to-[#D4AF37]/10" />

              <motion.div
                animate={{ y: [0, -4, 0] }}
                whileHover={{ scale: 1.15, rotate: [0, -5, 5, -5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.15,
                }}
                className={`relative z-10 mb-3 flex h-12 w-12 items-center justify-center rounded-full shadow-sm ring-1 ${iconColors[idx % iconColors.length]}`}
              >
                <category.icon size={20} strokeWidth={1.5} />
              </motion.div>

              <span className="relative z-10 text-[0.75rem] font-bold leading-tight text-gray-900 dark:text-gray-200">
                {category.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex w-full flex-col items-center gap-6"
        >
          <div className="flex w-full items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-200 dark:to-gray-800" />
            <motion.div
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-full bg-gray-50 ring-1 ring-gray-200 dark:bg-[#121c33] dark:ring-gray-800"
            >
              <Sparkles
                size={12}
                className="text-[#D4AF37] dark:text-[#D4AF37]"
              />
            </motion.div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-200 dark:to-gray-800" />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex w-full items-center justify-center gap-3 rounded-[4px] bg-gray-900 px-6 py-3.5 text-[0.95rem] font-bold text-white shadow-md dark:bg-white dark:text-gray-900"
          >
            <Users size={18} className="text-[#D4AF37] dark:text-[#D4AF37]" />
            {categoriesData.button.text}
            <ChevronRight
              size={18}
              className="opacity-70 transition-transform group-hover:translate-x-1"
            />
          </motion.button>

          <div className="flex w-full items-center justify-center gap-2 rounded-[2px] border border-white/50 bg-white/30 px-3 py-2 backdrop-blur-md transition-all duration-300 hover:border-[#D4AF37]/50 hover:bg-white/50 hover:shadow-lg dark:border-white/10 dark:bg-black/30 dark:hover:bg-black/40">
            <motion.div
              whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer"
            >
              <ShieldCheck
                size={14}
                className="text-[#D4AF37] dark:text-[#D4AF37]"
              />
            </motion.div>
            <span className="text-[0.65rem] font-bold text-gray-500 dark:text-gray-400">
              {categoriesData.bottomDisclaimer}
            </span>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
