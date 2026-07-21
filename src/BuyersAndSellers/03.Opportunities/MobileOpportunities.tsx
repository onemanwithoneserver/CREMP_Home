import { motion, type Variants } from 'framer-motion';
import { opportunitiesData } from './data';
import { TrendingUp, ArrowRight } from 'lucide-react';

const staggerContainer: Variants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
const fadeInUp: Variants = { hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 400, damping: 30 } } };

export default function MobileOpportunities() {
  return (
    <div className="relative w-full overflow-hidden bg-white px-4 py-16 transition-colors duration-700 dark:bg-[#050C17]">
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative z-10 flex flex-col">
        
        <div className="mb-8">
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="inline-flex rounded-[8px] border border-[#B27F1C]/20 bg-[#B27F1C]/5 px-3 py-1 text-[0.6rem] font-bold uppercase tracking-widest text-[#B27F1C] dark:border-[#F6B23B]/20 dark:bg-[#F6B23B]/10 dark:text-[#F6B23B]">
              {opportunitiesData.tag}
            </span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="mb-4 text-[2.2rem] font-black leading-[1.1] text-gray-900 dark:text-white">
            {opportunitiesData.titleBase} <br />
            <span className="bg-gradient-to-r from-[#B27F1C] to-[#d49924] bg-clip-text text-transparent dark:from-[#F6B23B] dark:to-[#f9d08b]">
              {opportunitiesData.titleHighlight}
            </span>
          </motion.h2>
          {opportunitiesData.desc.map((line, idx) => (
            <motion.p key={idx} variants={fadeInUp} className="mb-3 text-[0.95rem] leading-relaxed text-gray-600 dark:text-gray-400">
              {line}
            </motion.p>
          ))}
        </div>

        <motion.div variants={fadeInUp} className="mb-8 grid grid-cols-2 gap-3">
          {opportunitiesData.tabletStats.map((stat, idx) => (
            <div key={idx} className="flex flex-col justify-center rounded-[8px] border border-gray-100 bg-gray-50 p-5 shadow-sm dark:border-gray-800 dark:bg-[#0a101d]">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#B27F1C]/10 text-[#B27F1C] dark:bg-[#F6B23B]/10 dark:text-[#F6B23B]">
                <TrendingUp size={18} />
              </div>
              <span className="mb-1 text-2xl font-black tracking-tight text-gray-900 dark:text-white">{stat.value}</span>
              <span className="text-[0.65rem] font-bold uppercase tracking-wider text-gray-500">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-3">
          {opportunitiesData.showcaseMenu.map((item, idx) => (
            <div key={idx} className="group flex flex-col justify-between rounded-[8px] bg-gray-50 p-4 border border-gray-100 dark:border-gray-800 dark:bg-[#0a101d]">
              <div className="flex items-center justify-between mb-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-white text-[#B27F1C] shadow-sm dark:bg-[#050C17] dark:text-[#F6B23B]">
                  <item.icon size={20} strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="text-[0.9rem] font-bold leading-tight text-gray-900 dark:text-white mb-1">{item.text}</h3>
                <div className="flex items-center text-[0.7rem] font-bold text-[#B27F1C] dark:text-[#F6B23B]">
                  Explore <ArrowRight size={12} className="ml-1" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </motion.div>
    </div>
  );
}
