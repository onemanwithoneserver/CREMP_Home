import { motion, type Variants } from 'framer-motion';
import { whyInvestData } from './data';
import { ArrowRight, Globe } from 'lucide-react';

const staggerContainer: Variants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
const fadeInUp: Variants = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 400, damping: 30 } } };

export default function MobileWhyInvest() {
  return (
    <div className="relative w-full overflow-hidden bg-gray-50 px-4 py-16 transition-colors duration-700 dark:bg-[#030712]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]"></div>
      
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="relative z-10 flex flex-col gap-6">
        
        <div className="mb-4 flex flex-col items-center text-center">
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="inline-flex items-center gap-2 rounded-[8px] bg-[#B27F1C]/10 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-widest text-[#B27F1C] dark:bg-[#F6B23B]/10 dark:text-[#F6B23B]">
              {whyInvestData.tag}
            </span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-[2.2rem] font-black leading-[1.1] text-gray-900 dark:text-white">
            Why Investing Needs More Than a <br />
            <span className="bg-gradient-to-r from-[#B27F1C] to-[#d49924] bg-clip-text text-transparent dark:from-[#F6B23B] dark:to-[#f9d08b]">
              {whyInvestData.titleHighlight}
            </span>
          </motion.h2>
        </div>

        
        <motion.div variants={fadeInUp} className="rounded-[8px] border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-[#0a101d]">
          <h3 className="mb-6 text-xl font-black text-gray-900 dark:text-white">{whyInvestData.subtitle}</h3>
          <div className="flex flex-col gap-3">
            {whyInvestData.issues.map((issue, idx) => (
              <div key={idx} className="flex items-center gap-3 rounded-[8px] border border-gray-100 bg-gray-50/50 p-3 dark:border-gray-800/50 dark:bg-gray-800/20">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-white border border-gray-100 text-[#B27F1C] shadow-sm dark:bg-[#050c17] dark:border-gray-700 dark:text-[#F6B23B]">
                  <issue.icon size={18} />
                </div>
                <span className="text-[0.8rem] font-medium leading-tight text-gray-600 dark:text-gray-400">{issue.text}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
            <p className="text-[0.95rem] font-bold text-gray-900 dark:text-white text-center">
              CREMP brings <span className="text-[#B27F1C] dark:text-[#F6B23B]">{whyInvestData.conclusion}</span>
            </p>
          </div>
        </motion.div>

        
        <motion.div variants={fadeInUp} className="rounded-[8px] border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-[#0a101d]">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] bg-[#B27F1C] text-white shadow-lg shadow-[#B27F1C]/30 dark:bg-[#F6B23B] dark:text-[#030712]">
              <Globe size={20} />
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-black text-gray-900 dark:text-white leading-tight">Connected Ecosystem</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {whyInvestData.flowItems.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center gap-2 rounded-[8px] border border-gray-100 bg-gray-50 p-4 dark:border-gray-800 dark:bg-[#050c17]">
                <item.icon size={20} className="text-[#B27F1C] dark:text-[#F6B23B]" />
                <span className="text-center text-[0.65rem] font-bold text-gray-700 dark:text-gray-300">{item.text.replace('\n', ' ')}</span>
              </div>
            ))}
          </div>
        </motion.div>

        
        <motion.div variants={fadeInUp} className="rounded-[8px] bg-gradient-to-br from-[#B27F1C] to-[#d49924] p-8 shadow-xl dark:from-[#0a101d] dark:to-[#050c17] dark:border dark:border-gray-800 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
              <div className="text-2xl font-black text-white">100+</div>
            </div>
            <h3 className="text-lg font-black text-white">Discover verified franchise and retail opportunities instantly.</h3>
            <button className="flex items-center justify-center gap-2 w-full rounded-[8px] bg-white py-3.5 text-[0.85rem] font-bold text-[#B27F1C] dark:bg-[#F6B23B] dark:text-[#030712]">
              Explore Now <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
