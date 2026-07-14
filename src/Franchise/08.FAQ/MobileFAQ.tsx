import { motion, AnimatePresence } from 'framer-motion'
import { faqData } from './data'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function MobileFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="w-full bg-[#fdfdfd] pt-16 pb-16 px-5 relative overflow-hidden">
      
      <div className="flex flex-col items-center text-center relative z-10">
        
        <motion.div 
           initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
           className="flex items-center gap-3 mb-4"
        >
           <div className="w-6 h-[2px] bg-[#d97706]" />
           <span className="text-[0.55rem] font-bold text-[#b38728] tracking-widest uppercase">
             {faqData.tag}
           </span>
           <div className="w-6 h-[2px] bg-[#d97706]" />
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="text-[2.2rem] font-black text-[#0a1128] leading-[1.1] tracking-tight mb-4 text-center"
        >
          {faqData.title}
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="text-[0.95rem] text-[#4b5563] font-medium leading-relaxed mb-10 text-center"
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
                 className="bg-white border border-[#e5e7eb] rounded-xl p-4 px-5 shadow-sm cursor-pointer relative overflow-hidden text-left"
                 onClick={() => setOpenIdx(isOpen ? null : idx)}
               >
                  <div className="flex items-start gap-4 relative z-10">
                     <div className="w-10 h-10 rounded-full bg-[#fdf8f0] flex items-center justify-center shrink-0 border border-[#f6ead6] mt-1">
                        <faq.icon size={18} className="text-[#0a1128]" strokeWidth={1.5} />
                     </div>
                     <div className="flex flex-col flex-1 pt-1.5">
                        <div className="flex items-start justify-between w-full mb-2">
                           <h4 className="font-bold text-[#0a1128] text-[0.9rem] leading-tight pr-2">
                             {faq.q}
                           </h4>
                           <ChevronDown 
                             size={18} 
                             className={`text-[#0a1128] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
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
                               <p className="text-[0.8rem] text-[#4b5563] font-medium leading-relaxed pt-1 pb-1">
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
           className="w-full bg-[#fdf8f0] border border-[#f6ead6] rounded-[1.5rem] p-6 flex flex-col items-center text-center shadow-sm relative overflow-hidden"
        >
           <div className="w-16 h-16 rounded-full bg-[#0a1128] flex flex-col items-center justify-center text-white relative shadow-md mb-5">
              <div className="absolute top-2.5 w-2 h-2 bg-[#d97706] rotate-45 rounded-[1px]" />
              <faqData.banner.icon size={28} strokeWidth={1.5} className="mt-2 text-[#d97706]" />
           </div>
           
           <h3 className="text-xl font-black text-[#0a1128] leading-tight mb-3">
             {faqData.banner.title.replace('\n', ' ')}
           </h3>
           <p className="text-[#4b5563] font-medium text-[0.8rem] mb-8">
             {faqData.banner.desc}
           </p>

           <div className="flex flex-col gap-3 w-full relative z-10">
              <button className="w-full bg-[#d97706] text-white py-3.5 rounded-xl font-bold text-[0.85rem] shadow-sm flex items-center justify-center gap-2">
                 <faqData.banner.btn1.icon size={16} strokeWidth={2.5} />
                 {faqData.banner.btn1.text}
              </button>
              <button className="w-full bg-white text-[#0a1128] py-3.5 rounded-xl font-bold text-[0.85rem] shadow-sm border border-[#0a1128] flex items-center justify-center gap-2">
                 <faqData.banner.btn2.icon size={16} strokeWidth={2.5} className="text-[#6b7280]" />
                 {faqData.banner.btn2.text}
              </button>
           </div>
        </motion.div>

      </div>
    </div>
  )
}
