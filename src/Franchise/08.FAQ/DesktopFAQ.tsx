import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '../../components/layout'
import { faqData } from './data'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function DesktopFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="w-full bg-gray-50 dark:bg-[#050C17] pt-24 pb-24 relative overflow-hidden">
      <Container className="relative z-10 flex flex-col items-center">
        
        <motion.div 
           initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
           className="flex items-center gap-4 mb-6"
        >
           <div className="w-8 h-[2px] bg-[#B27F1C] dark:bg-[#F6B23B]" />
           <span className="text-[0.7rem] font-bold text-[#C79A17] tracking-widest uppercase">
             {faqData.tag}
           </span>
           <div className="w-8 h-[2px] bg-[#B27F1C] dark:bg-[#F6B23B]" />
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="text-[3.2rem] font-black text-gray-900 dark:text-white leading-[1.1] tracking-tight mb-6 text-center"
        >
          {faqData.title}
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="text-[1.1rem] text-gray-600 dark:text-gray-400 font-medium leading-relaxed mb-16 text-center"
        >
          {faqData.desc}
        </motion.p>

        {/* FAQ Grid */}
        <div className="w-full grid grid-cols-2 gap-x-6 gap-y-4 mb-16">
           {faqData.faqs.map((faq, idx) => {
             const isOpen = openIdx === idx;
             
             return (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 * idx }}
                 className="bg-white border border-[#E2E6EE] rounded-2xl p-6 px-8 shadow-sm cursor-pointer hover:shadow-md transition-shadow relative overflow-hidden"
                 onClick={() => setOpenIdx(isOpen ? null : idx)}
               >
                  <div className="flex items-start gap-6 relative z-10">
                     <div className="w-12 h-12 rounded-full bg-[rgba(199, 154, 23, 0.05)] flex items-center justify-center shrink-0 border border-[rgba(199, 154, 23, 0.15)]">
                        <faq.icon size={22} className="text-gray-900 dark:text-white" strokeWidth={1.5} />
                     </div>
                     <div className="flex flex-col flex-1 pt-1.5">
                        <div className="flex items-start justify-between w-full mb-3">
                           <h4 className="font-bold text-gray-900 dark:text-white text-[1.1rem] leading-tight">
                             {faq.q}
                           </h4>
                           <ChevronDown 
                             size={20} 
                             className={`text-gray-900 dark:text-white transition-transform duration-300 mt-0.5 shrink-0 ml-4 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
                           />
                        </div>
                        
                        <AnimatePresence>
                          {isOpen ? (
                             <motion.div
                               initial={{ height: 0, opacity: 0 }}
                               animate={{ height: 'auto', opacity: 1 }}
                               exit={{ height: 0, opacity: 0 }}
                               transition={{ duration: 0.3 }}
                               className="overflow-hidden"
                             >
                               <p className="text-[0.95rem] text-gray-600 dark:text-gray-400 font-medium leading-relaxed pb-2">
                                 {faq.a}
                               </p>
                             </motion.div>
                          ) : (
                             // Preview text when closed
                             <motion.p
                               initial={{ opacity: 1 }}
                               exit={{ opacity: 0 }}
                               className="text-[0.95rem] text-gray-600 dark:text-gray-400 font-medium leading-relaxed line-clamp-2"
                             >
                               {faq.a}
                             </motion.p>
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
           initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
           className="w-[90%] bg-[rgba(199, 154, 23, 0.05)] border border-[rgba(199, 154, 23, 0.15)] rounded-3xl p-8 px-12 flex items-center justify-between shadow-sm relative overflow-hidden"
        >
           {/* Decorative background element */}
           <div className="absolute right-0 bottom-0 opacity-[0.05] pointer-events-none w-1/3">
             <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
               <circle cx="100" cy="100" r="100" fill="currentColor" className="text-[#B27F1C] dark:text-[#F6B23B]"/>
             </svg>
           </div>

           <div className="flex items-center gap-6 relative z-10">
              <div className="w-20 h-20 rounded-full bg-white dark:bg-[#0C1525] flex flex-col items-center justify-center shrink-0 text-gray-900 dark:text-white relative shadow-lg">
                 <div className="absolute top-3 w-3 h-3 bg-[#B27F1C] dark:bg-[#F6B23B] rotate-45 rounded-[2px]" />
                 <faqData.banner.icon size={36} strokeWidth={1.5} className="mt-2 text-[#B27F1C] dark:text-[#F6B23B]" />
              </div>
              <div className="flex flex-col">
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white leading-tight mb-2 whitespace-pre-line">
                   {faqData.banner.title}
                 </h3>
                 <p className="text-gray-600 dark:text-gray-400 font-medium text-[0.95rem]">
                   {faqData.banner.desc}
                 </p>
              </div>
           </div>

           <div className="flex items-center gap-4 relative z-10">
              <button className="bg-[#B27F1C] dark:bg-[#F6B23B] hover:bg-[#d49924] dark:hover:bg-[#eab308] text-gray-900 dark:text-white px-6 py-3.5 rounded-xl font-bold text-[0.95rem] shadow-md transition-colors flex items-center gap-2">
                 <faqData.banner.btn1.icon size={18} strokeWidth={2} />
                 {faqData.banner.btn1.text}
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-900 dark:text-white px-8 py-3.5 rounded-xl font-bold text-[0.95rem] shadow-sm border border-gray-200 dark:border-gray-800 transition-colors flex items-center gap-2">
                 <faqData.banner.btn2.icon size={18} strokeWidth={2} className="text-gray-500 dark:text-gray-400" />
                 {faqData.banner.btn2.text}
              </button>
           </div>
        </motion.div>

      </Container>
    </div>
  )
}
