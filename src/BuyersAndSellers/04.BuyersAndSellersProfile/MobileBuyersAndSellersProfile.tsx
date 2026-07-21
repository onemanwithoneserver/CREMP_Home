import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { BuyersAndSellersProfileData } from './data';
import { ChevronDown } from 'lucide-react';

const staggerContainer: Variants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
const fadeInUp: Variants = { hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 400, damping: 30 } } };

export default function MobileBuyersAndSellersProfile() {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  return (
    <div className="relative w-full overflow-hidden bg-gray-50 px-4 py-16 transition-colors duration-700 dark:bg-[#030712]">
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative z-10 flex flex-col items-center">
        
        <div className="mb-8 text-center">
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="inline-flex items-center justify-center rounded-[8px] bg-[#B27F1C]/10 px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-[#B27F1C] dark:bg-[#F6B23B]/10 dark:text-[#F6B23B]">
              {BuyersAndSellersProfileData.tag}
            </span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="mb-4 text-[2.2rem] font-black leading-[1.1] text-gray-900 dark:text-white">
            {BuyersAndSellersProfileData.titleBase} <br />
            <span className="bg-gradient-to-r from-[#B27F1C] to-[#d49924] bg-clip-text text-transparent dark:from-[#F6B23B] dark:to-[#f9d08b]">
              {BuyersAndSellersProfileData.titleHighlight}
            </span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-[0.95rem] leading-relaxed text-gray-600 dark:text-gray-400">
            {BuyersAndSellersProfileData.desc[0]}
          </motion.p>
        </div>

        <div className="w-full flex flex-col gap-3">
          <h3 className="text-[0.7rem] font-bold uppercase tracking-widest text-gray-400 mb-2 pl-2">Select Your Profile</h3>
          {BuyersAndSellersProfileData.pills.map((pill, idx) => {
            const isActive = activeIdx === idx;
            return (
              <motion.div key={idx} variants={fadeInUp} className="overflow-hidden rounded-[8px] border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-[#0a101d]">
                <button 
                  onClick={() => setActiveIdx(isActive ? null : idx)}
                  className={`flex w-full items-center justify-between p-4 transition-colors ${isActive ? 'bg-[#B27F1C] text-white dark:bg-[#F6B23B] dark:text-gray-900' : 'text-gray-700 dark:text-gray-300'}`}
                >
                  <div className="flex items-center gap-3">
                    <pill.icon size={20} className={isActive ? 'text-white/80 dark:text-gray-900/80' : 'text-[#B27F1C] dark:text-[#F6B23B]'} />
                    <span className="font-bold text-[0.95rem]">{pill.label}</span>
                  </div>
                  <ChevronDown size={18} className={`transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isActive && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="bg-gray-50 dark:bg-[#050C17]">
                      <div className="p-4 flex flex-col gap-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#B27F1C]/10 text-[#B27F1C] dark:bg-[#F6B23B]/10 dark:text-[#F6B23B]">
                            {(() => {
                              const FirstIcon = BuyersAndSellersProfileData.expectations[0].icon;
                              return <FirstIcon size={14} />;
                            })()}
                          </div>
                          <span className="font-bold text-gray-900 dark:text-white text-[0.85rem] uppercase tracking-wide">{BuyersAndSellersProfileData.expectationsTitle}</span>
                        </div>
                        {BuyersAndSellersProfileData.expectations.map((exp, eIdx) => (
                          <div key={eIdx} className="flex gap-3 items-start">
                            <exp.icon size={16} className="text-[#B27F1C] mt-1 shrink-0 dark:text-[#F6B23B]" />
                            <div className="flex flex-col">
                              <span className="text-[0.85rem] font-bold text-gray-900 dark:text-white mb-0.5">{exp.title}</span>
                              <span className="text-[0.8rem] text-gray-600 dark:text-gray-400 leading-relaxed">{exp.desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </div>
  );
}
