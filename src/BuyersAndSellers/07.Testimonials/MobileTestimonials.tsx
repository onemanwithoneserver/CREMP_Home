import { motion, type Variants } from 'framer-motion';
import { testimonialsData } from './data';
import { ShieldCheck } from 'lucide-react';

const staggerContainer: Variants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
const fadeInUp: Variants = { hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 400, damping: 30 } } };

export default function MobileTestimonials() {
  const Btn1Icon = testimonialsData.buttons[0].icon;
  const Btn2Icon = testimonialsData.buttons[1].icon;

  return (
    <div className="relative w-full overflow-hidden bg-white px-4 py-16 transition-colors duration-700 dark:bg-[#050C17]">
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative z-10 flex flex-col items-center">
        
        <div className="mb-10 text-center">
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="inline-flex rounded-[8px] border border-[#B27F1C]/20 bg-[#B27F1C]/5 px-3 py-1 text-[0.6rem] font-bold uppercase tracking-widest text-[#B27F1C] dark:border-[#F6B23B]/20 dark:bg-[#F6B23B]/10 dark:text-[#F6B23B]">
              {testimonialsData.tag}
            </span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="mb-4 whitespace-pre-line text-[2.2rem] font-black leading-[1.1] text-gray-900 dark:text-white">
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
          <motion.p variants={fadeInUp} className="text-[0.95rem] leading-relaxed text-gray-600 dark:text-gray-400">
            {testimonialsData.desc}
          </motion.p>
        </div>

        <motion.div variants={fadeInUp} className="w-full rounded-[8px] bg-gray-50 p-6 shadow-inner dark:bg-[#0a101d] border border-gray-100 dark:border-gray-800 mb-8">
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-[#B27F1C] text-white shadow-lg shadow-[#B27F1C]/30 dark:bg-[#F6B23B] dark:text-[#030712] dark:shadow-[#F6B23B]/20">
              <ShieldCheck size={20} />
            </div>
            <h3 className="text-xl font-black text-gray-900 dark:text-white">{testimonialsData.benefitsTitle}</h3>
          </div>
          
          <div className="flex flex-col gap-3">
            {testimonialsData.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-3 rounded-[8px] bg-white p-4 shadow-sm dark:bg-[#050C17] border border-gray-100 dark:border-gray-800">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#B27F1C]/10 text-[#B27F1C] dark:bg-[#F6B23B]/10 dark:text-[#F6B23B]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span className="text-[0.9rem] font-bold text-gray-800 dark:text-gray-200">{benefit.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex w-full flex-col gap-3">
          <button className="flex w-full items-center justify-center gap-2 rounded-[8px] bg-gradient-to-r from-[#B27F1C] to-[#d49924] py-4 text-[0.9rem] font-bold text-white shadow-lg dark:from-[#F6B23B] dark:to-[#d49924] dark:text-[#030712]">
            <Btn1Icon size={18} />
            {testimonialsData.buttons[0].title}
          </button>
          <button className="flex w-full items-center justify-center gap-2 rounded-[8px] border border-gray-200 bg-white py-4 text-[0.9rem] font-bold text-gray-900 shadow-sm dark:border-gray-800 dark:bg-gray-900/50 dark:text-white">
            <Btn2Icon size={18} className="text-[#B27F1C] dark:text-[#F6B23B]" />
            {testimonialsData.buttons[1].title}
          </button>
        </motion.div>

        <motion.p variants={fadeInUp} className="mt-6 text-center text-[0.7rem] font-medium text-gray-400">
          {testimonialsData.bottomDisclaimer}
        </motion.p>
      </motion.div>
    </div>
  );
}
