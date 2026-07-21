import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Container } from "../../components/layout";
import { faqData } from "./data";
import { Plus, Minus } from "lucide-react";

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

export default function DesktopFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const Btn1Icon = faqData.banner.btn1.icon;
  const Btn2Icon = faqData.banner.btn2.icon;

  return (
    <div className="relative w-full overflow-hidden bg-gray-50 py-24 transition-colors duration-700 dark:bg-[#030712]">
      <Container className="relative z-10 max-w-7xl px-4 xl:px-0">
        <div className="flex gap-16">
          <div className="w-[55%]">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-10"
            >
              <motion.div variants={fadeInUp} className="mb-4">
                <span className="inline-flex items-center justify-center rounded-[8px] bg-[#D4AF37]/10 px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-widest text-[#D4AF37] dark:bg-[#D4AF37]/10 dark:text-[#D4AF37]">
                  {faqData.tag}
                </span>
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="mb-6 text-[3.5rem] font-black leading-[1.05] tracking-tight text-gray-900 dark:text-white"
              >
                <span className="bg-gradient-to-r from-[#D4AF37] to-[#b38728] bg-clip-text text-transparent dark:from-[#D4AF37] dark:to-[#f9d08b]">
                  {faqData.title}
                </span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="max-w-md text-[1.1rem] leading-relaxed text-gray-600 dark:text-gray-400"
              >
                {faqData.desc}
              </motion.p>
            </motion.div>

            <div className="flex flex-col border-t border-gray-200 dark:border-gray-800">
              {faqData.faqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="border-b border-gray-200 dark:border-gray-800"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                      className="group flex w-full items-center justify-between py-6 text-left"
                    >
                      <h4
                        className={`text-[1.1rem] font-bold transition-colors ${isOpen ? "text-[#D4AF37] dark:text-[#D4AF37]" : "text-gray-900 group-hover:text-[#D4AF37] dark:text-gray-300 dark:group-hover:text-[#D4AF37]"}`}
                      >
                        {faq.q}
                      </h4>
                      <div
                        className={`ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all ${isOpen ? "bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] text-white dark:bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] dark:text-gray-900" : "bg-gray-100 text-gray-400 group-hover:bg-[#D4AF37]/10 group-hover:text-[#D4AF37] dark:bg-gray-800 dark:group-hover:bg-[#D4AF37]/10 dark:group-hover:text-[#D4AF37]"}`}
                      >
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 pr-12 text-[0.95rem] leading-relaxed text-gray-600 dark:text-gray-400">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="w-[45%]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-32 flex flex-col items-center justify-center gap-8 rounded-[8px] bg-[#0a1128] p-12 text-center shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
              <div className="absolute -top-[20%] -left-[20%] h-[300px] w-[300px] rounded-full bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] blur-[100px] pointer-events-none opacity-40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(251,191,36,0.25)] active:scale-95"></div>

              <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur-md">
                <faqData.banner.icon size={32} className="text-[#D4AF37]" />
              </div>

              <div className="relative z-10">
                <h3 className="whitespace-pre-line text-[2.2rem] font-black leading-tight text-white mb-4">
                  {faqData.banner.title}
                </h3>
                <p className="text-[1rem] text-gray-400 leading-relaxed">
                  {faqData.banner.desc}
                </p>
              </div>

              <div className="relative z-10 flex w-full flex-col gap-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex w-full items-center justify-center gap-2 rounded-[8px] bg-gradient-to-r from-[#D4AF37] to-[#b38728] py-4 text-[1rem] font-bold text-white shadow-lg dark:from-[#D4AF37] dark:to-[#b38728] dark:text-[#030712]"
                >
                  <Btn1Icon size={18} />
                  {faqData.banner.btn1.text}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex w-full items-center justify-center gap-2 rounded-[8px] border border-white/20 bg-white/5 py-4 text-[1rem] font-bold text-white backdrop-blur-md transition-colors hover:bg-white/10"
                >
                  <Btn2Icon size={18} />
                  {faqData.banner.btn2.text}
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
}
