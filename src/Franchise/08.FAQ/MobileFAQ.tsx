import { motion, AnimatePresence } from 'framer-motion'
import { faqData } from './data'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function MobileFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="w-full bg-gray-50 dark:bg-[#050C17] pt-16 pb-16 px-5 relative overflow-hidden">
      
      <div className="flex flex-col items-center text-center relative z-10">
        
        <motion.div 
           initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
           className="flex items-center gap-3 mb-4"
        >
           <div className="w-6 h-[2px] bg-[#B27F1C] dark:bg-[#F6B23B]" />
           <span className="text-[0.55rem] font-bold text-[#C79A17] tracking-widest uppercase">
             {faqData.tag}
           </span>
           <div className="w-6 h-[2px] bg-[#B27F1C] dark:bg-[#F6B23B]" />
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="text-[2.2rem] font-black text-gray-900 dark:text-white leading-[1.1] tracking-tight mb-4 text-center"
        >
          {faqData.title}
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="text-[0.95rem] text-gray-600 dark:text-gray-400 font-medium leading-relaxed mb-10 text-center"
        >
          {faqData.desc}
        </motion.p>

        {/* FAQ List */}
        <div className="w-full flex flex-col gap-3 mb-12">
           {faqData.faqs.map((faq, idx) => {
             const isOpen = openIdx === idx;
             
             return (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 * idx }}
                 className="bg-white border border-[#E2E6EE] rounded-xl p-4 px-5 shadow-sm cursor-pointer relative overflow-hidden text-left"
                 onClick={() => setOpenIdx(isOpen ? null : idx)}
               >
                  <div className="flex items-start gap-4 relative z-10">
                     <div className="w-10 h-10 rounded-full bg-[rgba(199, 154, 23, 0.05)] flex items-center justify-center shrink-0 border border-[rgba(199, 154, 23, 0.15)] mt-1">
                        <faq.icon size={18} className="text-gray-900 dark:text-white" strokeWidth={1.5} />
                     </div>
                     <div className="flex flex-col flex-1 pt-1.5">
                        <div className="flex items-start justify-between w-full mb-2">
                           <h4 className="font-bold text-gray-900 dark:text-white text-[0.9rem] leading-tight pr-2">
                             {faq.q}
                           </h4>
                           <ChevronDown 
                             size={18} 
                             className={`text-gray-900 dark:text-white transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
                           />
                        </div>
                        
                        <AnimatePresence>
                          {isOpen && (
                             <motion.div
                               initial={{ height: 0, opacity: 0 }}
                               animate={{ height: 'auto', opacity: 1 }}
                               exit={{ height: 0, opacity: 0 }}
                               transition={{ duration: 0.3 }}
                               className="overflow-hidden"
                             >
                               <p className="text-[0.8rem] text-gray-600 dark:text-gray-400 font-medium leading-relaxed pt-1 pb-1">
                                 {faq.a}
                               </p>
                             </motion.div>
                          )}
                        </AnimatePresence>
                     </div>
                  </div>
               </motion.div>
             )
           })}
        </div>

        {/* Bottom Banner */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
           className="w-full bg-[rgba(199, 154, 23, 0.05)] border border-[rgba(199, 154, 23, 0.15)] rounded-[1.5rem] p-6 flex flex-col items-center text-center shadow-sm relative overflow-hidden"
        >
           <div className="w-16 h-16 rounded-full bg-white dark:bg-[#0C1525] flex flex-col items-center justify-center text-gray-900 dark:text-white relative shadow-md mb-5">
              <div className="absolute top-2.5 w-2 h-2 bg-[#B27F1C] dark:bg-[#F6B23B] rotate-45 rounded-[1px]" />
              <faqData.banner.icon size={28} strokeWidth={1.5} className="mt-2 text-[#B27F1C] dark:text-[#F6B23B]" />
           </div>
           
           <h3 className="text-xl font-black text-gray-900 dark:text-white leading-tight mb-3">
             {faqData.banner.title.replace('\n', ' ')}
           </h3>
           <p className="text-gray-600 dark:text-gray-400 font-medium text-[0.8rem] mb-8">
             {faqData.banner.desc}
           </p>

           <div className="flex flex-col gap-3 w-full relative z-10">
              <button className="w-full bg-[#B27F1C] dark:bg-[#F6B23B] text-gray-900 dark:text-white py-3.5 rounded-xl font-bold text-[0.85rem] shadow-sm flex items-center justify-center gap-2">
                 <faqData.banner.btn1.icon size={16} strokeWidth={2.5} />
                 {faqData.banner.btn1.text}
              </button>
              <button className="w-full bg-white text-gray-900 dark:text-white py-3.5 rounded-xl font-bold text-[0.85rem] shadow-sm border border-gray-200 dark:border-gray-800 flex items-center justify-center gap-2">
                 <faqData.banner.btn2.icon size={16} strokeWidth={2.5} className="text-gray-500 dark:text-gray-400" />
                 {faqData.banner.btn2.text}
              </button>
           </div>
        </motion.div>

      </div>
    </div>
  )
}
