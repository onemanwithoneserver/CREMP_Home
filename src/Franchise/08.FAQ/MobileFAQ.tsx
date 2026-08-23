import { AnimatePresence, motion, type Variants } from "framer-motion";
import { Minus, Plus, Sparkles } from "lucide-react";
import { useState } from "react";
import { Container } from "../../components/layout";
import { faqData } from "./data";
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
const pulseGlow: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};
export default function MobileFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const renderFaqCard = (faq: any, index: number) => {
    const isOpen = openIdx === index;
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className={`group relative overflow-hidden rounded-[4px] border bg-white/30 p-3.5 shadow-[0_4px_16px_rgba(0,0,0,0.05)] backdrop-blur-md transition-all dark:bg-black/20 ${
          isOpen
            ? "border-[#D4AF37]/50 bg-white/50 dark:border-[#D4AF37]/50 dark:bg-black/40"
            : "border-white/40 dark:border-white/10"
        }`}
      >
        <div
          className="flex cursor-pointer items-start gap-3"
          onClick={() => setOpenIdx(isOpen ? null : index)}
        >
          <div
            className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-200 ${
              isOpen
                ? "border-transparent bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] text-white shadow-md dark:bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] dark:text-gray-900"
                : "border-[#D4AF37]/20 bg-[#D4AF37]/5 text-[#D4AF37] dark:border-[#D4AF37]/20 dark:bg-[#D4AF37]/5 dark:text-[#D4AF37]"
            }`}
          >
            <motion.div
              whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer"
            >
              <faq.icon
                size={16}
                strokeWidth={isOpen ? 2.5 : 1.5}
                className="transition-all duration-200"
              />
            </motion.div>
          </div>
          <div className="flex flex-1 flex-col pt-1">
            <div className="flex items-center justify-between gap-3">
              <h4
                className={`text-[0.95rem] font-semibold leading-tight transition-colors duration-300 ${
                  isOpen
                    ? "text-[#D4AF37] dark:text-[#D4AF37]"
                    : "text-gray-900 dark:text-white"
                }`}
              >
                {faq.q}
              </h4>
              <div
                className={`relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${isOpen ? "bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-[#D4AF37] shadow-inner" : "bg-white/50 border border-white/50 text-gray-400 dark:bg-black/40 dark:border-white/10"}`}
              >
                <Plus
                  size={14}
                  strokeWidth={2.5}
                  className={`absolute transition-all duration-200 ${isOpen ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
                />
                <Minus
                  size={14}
                  strokeWidth={2.5}
                  className={`absolute transition-all duration-200 ${isOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"}`}
                />
              </div>
            </div>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="mt-3 text-[0.9rem] font-medium leading-relaxed text-gray-600 dark:text-gray-400">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    );
  };
  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-white/40 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.05)] backdrop-blur-xl border border-white/40 transition-colors duration-700 dark:bg-[#0b1b42]/60 dark:border-white/10 dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
      <motion.div
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute left-[-10%] top-[10%] h-[300px] w-[300px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-transparent to-transparent dark:from-[#D4AF37]/10"
      />
      <Container className="relative z-10 flex flex-col items-center px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-50px" }}
          className="mb-8 flex flex-col items-center text-center"
        >
          <motion.div className="mb-4 flex items-center gap-2 rounded-[2px] border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-1.5 backdrop-blur-xl dark:border-[#D4AF37]/30 dark:bg-[#D4AF37]/10">
            <motion.div
              whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer"
            >
              <Sparkles
                size={12}
                className="text-[#D4AF37] dark:text-[#D4AF37]"
                fill="currentColor"
              />
            </motion.div>
            <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-[#D4AF37] dark:text-[#D4AF37]">
              {faqData.tag}
            </span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="mb-4 text-[2.5rem] font-semibold leading-[1.1] tracking-tight text-gray-900 dark:text-white sm:text-[3rem]"
          >
            {faqData.title}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-[0.95rem] font-medium leading-relaxed text-gray-600 dark:text-gray-400"
          >
            {faqData.desc}
          </motion.p>
        </motion.div>
        <div className="mb-10 flex w-full flex-col gap-4">
          {faqData.faqs.map((faq, index) => renderFaqCard(faq, index))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="relative flex w-full flex-col items-center justify-between overflow-hidden rounded-xl border border-white/10 bg-[#17274C] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-xl text-center dark:bg-[#17274C]"
        >
          <div className="absolute right-0 top-0 h-full w-full opacity-[0.03]">
            <svg
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
            >
              <circle cx="100" cy="100" r="100" fill="url(#banner-grad-mob)" />
              <defs>
                <linearGradient
                  id="banner-grad-mob"
                  x1="0"
                  y1="0"
                  x2="200"
                  y2="200"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="relative z-10 mb-8 flex flex-col items-center gap-6">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-xl backdrop-blur-xl"
            >
              <div className="absolute -top-2 right-1 h-3 w-3 rotate-45 rounded-[2px] bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] shadow-[0_0_10px_rgba(178,127,28,0.6)] dark:bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] dark:shadow-[0_0_10px_rgba(246,178,59,0.6)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(251,191,36,0.25)] active:scale-95" />
              <faqData.banner.icon
                size={28}
                strokeWidth={1.5}
                className="text-[#D4AF37] dark:text-[#D4AF37]"
              />
            </motion.div>
            <div className="flex flex-col">
              <h3 className="mb-3 whitespace-pre-line text-2xl font-semibold leading-tight text-white">
                {faqData.banner.title}
              </h3>
              <p className="text-[0.95rem] font-medium text-gray-400">
                {faqData.banner.desc}
              </p>
            </div>
          </div>
          <div className="relative z-10 flex w-full flex-col">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-[4px] bg-gradient-to-r from-[#D4AF37] to-[#b38728] px-6 py-4 text-[1rem] font-semibold text-gray-900 shadow-md dark:from-[#D4AF37] dark:to-[#f9d08b]"
            >
              <faqData.banner.btn1.icon
                size={18}
                strokeWidth={2}
                className="relative z-10"
              />
              <span className="relative z-10">{faqData.banner.btn1.text}</span>
            </motion.button>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
