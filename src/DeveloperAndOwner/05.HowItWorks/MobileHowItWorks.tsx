import { motion, type Variants } from 'framer-motion';
import { howItWorksData } from './data';

const staggerContainer: Variants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
const fadeInUp: Variants = { hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 400, damping: 30 } } };

export default function MobileHowItWorks() {
  return (
    <div className="relative w-full overflow-hidden bg-white px-4 py-16 transition-colors duration-700 dark:bg-[#050C17]">
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative z-10 flex flex-col">
        
        <div className="mb-10 text-center">
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="inline-flex rounded-[8px] border border-[#B27F1C]/20 bg-[#B27F1C]/5 px-3 py-1 text-[0.6rem] font-bold uppercase tracking-widest text-[#B27F1C] dark:border-[#F6B23B]/20 dark:bg-[#F6B23B]/10 dark:text-[#F6B23B]">
              {howItWorksData.tag}
            </span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="mb-4 text-[2.2rem] font-black leading-[1.1] text-gray-900 dark:text-white">
            {howItWorksData.titleBase} <br />
            <span className="bg-gradient-to-r from-[#B27F1C] to-[#d49924] bg-clip-text text-transparent dark:from-[#F6B23B] dark:to-[#f9d08b]">
              {howItWorksData.titleHighlight}
            </span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-[0.95rem] leading-relaxed text-gray-600 dark:text-gray-400">
            {howItWorksData.desc[0]}
          </motion.p>
        </div>

        <div className="flex flex-col">
          {howItWorksData.steps.map((step, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="relative flex w-full items-start gap-4">
              <div className="flex flex-col items-center pt-1">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#B27F1C] text-white shadow-md dark:bg-[#F6B23B] dark:text-gray-900">
                  <step.icon size={18} />
                </div>
                {idx < howItWorksData.steps.length - 1 && (
                  <div className="h-full w-[2px] bg-gradient-to-b from-[#B27F1C]/30 to-transparent dark:from-[#F6B23B]/30" style={{ minHeight: '60px' }} />
                )}
              </div>
              <div className="flex flex-col pb-8 pt-1 text-left w-full">
                <div className="rounded-[8px] border border-gray-100 bg-gray-50 p-5 shadow-sm dark:border-gray-800 dark:bg-[#0a101d]">
                  <span className="mb-1 block text-[0.6rem] font-black uppercase tracking-widest text-[#B27F1C] dark:text-[#F6B23B]">{step.step}</span>
                  <h3 className="mb-2 text-[1.1rem] font-black text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="text-[0.85rem] leading-relaxed text-gray-600 dark:text-gray-400">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </div>
  );
}
