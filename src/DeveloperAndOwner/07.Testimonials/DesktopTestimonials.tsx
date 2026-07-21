import { motion, type Variants } from 'framer-motion';
import { Container } from '../../components/layout';
import { testimonialsData } from './data';
import { ShieldCheck } from 'lucide-react';

const staggerContainer: Variants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
const fadeInUp: Variants = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 400, damping: 30 } } };

export default function DesktopTestimonials() {
  const Btn1Icon = testimonialsData.buttons[0].icon;
  const Btn2Icon = testimonialsData.buttons[1].icon;

  return (
    <div className="relative w-full overflow-hidden bg-white py-24 transition-colors duration-700 dark:bg-[#050C17]">
      <Container className="relative z-10 max-w-7xl px-4 xl:px-0">
        
        <div className="flex items-center justify-between gap-16">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="w-1/2">
            <motion.div variants={fadeInUp} className="mb-4">
              <span className="inline-flex items-center justify-center rounded-[8px] border border-[#B27F1C]/20 bg-[#B27F1C]/5 px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-widest text-[#B27F1C] dark:border-[#F6B23B]/20 dark:bg-[#F6B23B]/10 dark:text-[#F6B23B]">
                {testimonialsData.tag}
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="mb-6 whitespace-pre-line text-[3.5rem] font-black leading-[1.05] tracking-tight text-gray-900 dark:text-white">
              {testimonialsData.title.split('\n').map((line, idx) => (
                <span key={idx}>
                  {idx === testimonialsData.title.split('\n').length - 1 ? (
                    <span className="bg-gradient-to-r from-[#B27F1C] to-[#d49924] bg-clip-text text-transparent dark:from-[#F6B23B] dark:to-[#f9d08b]">{line}</span>
                  ) : (
                    <>{line}<br /></>
                  )}
                </span>
              ))}
            </motion.h2>
            <motion.p variants={fadeInUp} className="mb-10 max-w-md text-[1.1rem] leading-relaxed text-gray-600 dark:text-gray-400">
              {testimonialsData.desc}
            </motion.p>
            <motion.div variants={fadeInUp} className="flex items-center gap-4">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-3 rounded-[8px] bg-gradient-to-r from-[#B27F1C] to-[#d49924] px-8 py-4 text-[0.95rem] font-bold text-white shadow-lg dark:from-[#F6B23B] dark:to-[#d49924] dark:text-[#030712]">
                <Btn1Icon size={20} />
                {testimonialsData.buttons[0].title}
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-3 rounded-[8px] border border-gray-200 bg-white px-8 py-4 text-[0.95rem] font-bold text-gray-900 shadow-sm transition-all hover:bg-gray-50 dark:border-gray-800 dark:bg-[#0a101d] dark:text-white dark:hover:bg-gray-900/50">
                <Btn2Icon size={20} className="text-[#B27F1C] dark:text-[#F6B23B]" />
                {testimonialsData.buttons[1].title}
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="w-1/2">
            <div className="relative rounded-[8px] bg-gray-50 p-10 shadow-inner dark:bg-[#0a101d] border border-gray-100 dark:border-gray-800">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-[#B27F1C] text-white shadow-lg shadow-[#B27F1C]/30 dark:bg-[#F6B23B] dark:text-[#030712] dark:shadow-[#F6B23B]/20">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white">{testimonialsData.benefitsTitle}</h3>
              </div>
              
              <div className="flex flex-col gap-4">
                {testimonialsData.benefits.map((benefit, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + idx * 0.1 }} className="flex items-center gap-4 rounded-[8px] bg-white p-5 shadow-sm dark:bg-[#050C17] border border-gray-100 dark:border-gray-800">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#B27F1C]/10 text-[#B27F1C] dark:bg-[#F6B23B]/10 dark:text-[#F6B23B]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span className="text-[1.05rem] font-bold text-gray-800 dark:text-gray-200">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }} className="mt-12 text-center text-[0.8rem] font-medium text-gray-400">
          {testimonialsData.bottomDisclaimer}
        </motion.p>
      </Container>
    </div>
  );
}
