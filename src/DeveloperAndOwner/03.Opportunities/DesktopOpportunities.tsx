import { motion, type Variants } from 'framer-motion';
import { Container } from '../../components/layout';
import { opportunitiesData } from './data';
import { TrendingUp, ArrowRight } from 'lucide-react';

const staggerContainer: Variants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
const fadeRight: Variants = { hidden: { opacity: 0, x: -30 }, show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } } };
const popCard: Variants = { hidden: { opacity: 0, y: 30, scale: 0.95 }, show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 25 } } };

export default function DesktopOpportunities() {
  return (
    <div className="relative w-full overflow-hidden bg-white py-24 transition-colors duration-700 dark:bg-[#050C17]">
      <Container className="relative z-10 max-w-7xl px-4 xl:px-0">
        
        <div className="flex items-center justify-between gap-12 mb-16">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="w-1/2">
            <motion.div variants={fadeRight} className="mb-4">
              <span className="inline-flex items-center gap-2 rounded-[8px] border border-[#B27F1C]/20 bg-[#B27F1C]/5 px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-widest text-[#B27F1C] dark:border-[#F6B23B]/20 dark:bg-[#F6B23B]/10 dark:text-[#F6B23B]">
                {opportunitiesData.tag}
              </span>
            </motion.div>
            <motion.h2 variants={fadeRight} className="mb-6 text-[3rem] font-black leading-[1.1] text-gray-900 dark:text-white">
              {opportunitiesData.titleBase} <br />
              <span className="bg-gradient-to-r from-[#B27F1C] to-[#d49924] bg-clip-text text-transparent dark:from-[#F6B23B] dark:to-[#f9d08b]">
                {opportunitiesData.titleHighlight}
              </span>
            </motion.h2>
            {opportunitiesData.desc.map((line, idx) => (
              <motion.p key={idx} variants={fadeRight} className="mb-4 text-[1.05rem] leading-relaxed text-gray-600 dark:text-gray-400">
                {line}
              </motion.p>
            ))}
            
            <motion.div variants={fadeRight} className="mt-8 flex items-center gap-4">
              <button className="flex items-center gap-2 rounded-[8px] bg-gray-900 px-8 py-3.5 text-[0.95rem] font-bold text-white transition-all hover:bg-[#B27F1C] hover:shadow-lg hover:shadow-[#B27F1C]/30 dark:bg-white dark:text-gray-900 dark:hover:bg-[#F6B23B]">
                View Live Portfolio <ArrowRight size={18} />
              </button>
            </motion.div>
          </motion.div>

          
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative w-1/2 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#B27F1C]/10 to-transparent blur-3xl dark:from-[#F6B23B]/10"></div>
            <div className="grid grid-cols-2 gap-6 w-full max-w-lg">
              {opportunitiesData.tabletStats.map((stat, idx) => (
                <div key={idx} className="group flex flex-col items-start justify-center rounded-[8px] border border-gray-100 bg-white p-8 shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl hover:border-[#B27F1C]/30 dark:border-gray-800 dark:bg-[#0a101d] dark:hover:border-[#F6B23B]/30">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#B27F1C]/10 text-[#B27F1C] transition-colors group-hover:bg-[#B27F1C] group-hover:text-white dark:bg-[#F6B23B]/10 dark:text-[#F6B23B] dark:group-hover:bg-[#F6B23B] dark:group-hover:text-gray-900">
                    <TrendingUp size={22} />
                  </div>
                  <span className="mb-1 text-3xl font-black tracking-tight text-gray-900 dark:text-white">{stat.value}</span>
                  <span className="text-[0.8rem] font-bold uppercase tracking-wider text-gray-500">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-4 gap-4 mt-12">
          {opportunitiesData.showcaseMenu.map((item, idx) => (
            <motion.div key={idx} variants={popCard} whileHover={{ y: -10 }} className="group cursor-pointer rounded-[8px] bg-gray-50 p-6 transition-all hover:bg-[#B27F1C] dark:bg-[#0a101d] dark:hover:bg-gradient-to-br dark:hover:from-[#0a101d] dark:hover:to-[#B27F1C]/20 dark:border dark:border-gray-800">
              <div className="flex justify-between items-start mb-12">
                <div className="flex h-14 w-14 items-center justify-center rounded-[8px] bg-white text-[#B27F1C] shadow-sm transition-all group-hover:scale-110 dark:bg-[#050C17] dark:text-[#F6B23B]">
                  <item.icon size={26} strokeWidth={1.5} />
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1 dark:border-gray-700 dark:bg-gray-800">
                  <ArrowRight size={14} className="text-[#B27F1C] dark:text-[#F6B23B]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-white dark:text-white">{item.text}</h3>
              <p className="mt-2 text-[0.8rem] text-gray-500 transition-colors group-hover:text-white/80 dark:text-gray-400">Explore pre-qualified listings.</p>
            </motion.div>
          ))}
        </motion.div>

      </Container>
    </div>
  );
}
