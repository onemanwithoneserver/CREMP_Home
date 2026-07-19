import { motion } from 'framer-motion'
import { ecosystemData } from './data'
import { Target, Plus, Equal, Globe2 } from 'lucide-react'

export default function MobileEcosystem() {
  return (
    <div className="w-full bg-gray-50 dark:bg-[#050C17] pt-12 pb-10 px-5">
      
      {/* Header Area */}
      <motion.div 
         initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
         className="flex items-center gap-2 mb-4"
      >
         <div className="w-4 h-[2px] bg-[#B27F1C] dark:bg-[#F6B23B]" />
         <span className="text-[0.55rem] font-bold text-gray-500 dark:text-gray-400 tracking-widest uppercase">
           {ecosystemData.tag}
         </span>
      </motion.div>
      
      <motion.h2 
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
        className="text-[2.2rem] font-black text-gray-900 dark:text-white leading-[1.05] tracking-tight mb-4"
      >
        Why Expansion <br/>
        Needs More Than a <br/>
        <span className="text-[#B27F1C] dark:text-[#F6B23B]">{ecosystemData.titleHighlight}</span>
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
        className="text-[0.95rem] text-gray-600 dark:text-gray-400 font-medium leading-relaxed mb-8"
      >
        {ecosystemData.subtitle}
      </motion.p>

      {/* Issues List */}
      <motion.div 
         initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
         className="flex flex-col gap-4 mb-8"
      >
          {ecosystemData.issues.map((issue, idx) => (
            <div key={idx} className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#fdf6ea] to-[#fef2dc] dark:from-gray-800 dark:to-gray-800 flex items-center justify-center shrink-0 shadow-[0_2px_10px_rgba(217,119,6,0.1)] text-[#0f172a] dark:text-gray-300">
                 <issue.icon size={18} />
               </div>
               <span className="text-[0.85rem] font-bold text-[#0f172a] dark:text-gray-200 leading-snug">
                 {issue.text}
               </span>
            </div>
          ))}
      </motion.div>

      <motion.p 
         initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
         className="text-[1rem] font-black text-gray-900 dark:text-white mb-12"
      >
         CREMP brings <span className="text-[#B27F1C] dark:text-[#F6B23B]">{ecosystemData.conclusion}</span>
      </motion.p>

      {/* Flow Diagram (Vertical on Mobile) */}
      <motion.div 
         initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
         className="relative flex flex-col items-center mb-10"
      >
         {ecosystemData.flowItems.map((item, idx) => (
           <div key={idx} className="flex flex-col items-center w-full">
              <div className="w-[80%] max-w-[200px] bg-white rounded-xl shadow-md border border-[#E2E6EE] flex items-center gap-4 p-4 z-10">
                 <item.icon size={24} className="text-gray-900 dark:text-white" />
                 <span className="text-[0.7rem] font-bold text-gray-900 dark:text-white leading-tight whitespace-pre-line text-left">
                   {item.text}
                 </span>
              </div>
               {idx < ecosystemData.flowItems.length - 1 && (
                 <div className="flex flex-col items-center my-1 z-0">
                    <div className="w-[2px] h-4 border-l-2 border-dashed border-[#f59e0b]/50" />
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#fbbf24] to-[#d97706] flex items-center justify-center text-white shadow-md z-20">
                       <Plus size={12} strokeWidth={3} />
                    </div>
                    <div className="w-[2px] h-4 border-l-2 border-dashed border-[#f59e0b]/50" />
                 </div>
               )}
           </div>
         ))}

         <div className="flex flex-col items-center my-1 z-0">
            <div className="w-[2px] h-6 border-l-2 border-dashed border-[#f59e0b]/50" />
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#fbbf24] to-[#d97706] flex items-center justify-center text-white shadow-lg z-20">
               <Equal size={16} strokeWidth={3} />
            </div>
            <div className="w-[2px] h-4 border-l-2 border-dashed border-[#f59e0b]/50" />
         </div>

         <div className="w-full max-w-[280px] bg-[#0f172a] dark:bg-[#0C1525] rounded-xl shadow-[0_15px_30px_rgba(0,0,0,0.15)] p-5 flex items-center gap-4 z-10 relative">
            <svg width="0" height="0" className="absolute">
              <defs>
                <linearGradient id="globe-grad-mobile" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="50%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#b45309" />
                </linearGradient>
              </defs>
            </svg>
            <Globe2 size={36} stroke="url(#globe-grad-mobile)" className="shrink-0" strokeWidth={1} />
            <div className="flex flex-col">
              <span className="text-white text-[0.7rem] font-bold">One Connected</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-[0.95rem] font-black">Expansion Ecosystem</span>
            </div>
         </div>

      </motion.div>

      {/* Bottom Banner */}
      <motion.div 
         initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}
         className="w-full bg-[#f8fafc] dark:bg-[#0C1525] rounded-xl border border-gray-200 dark:border-gray-800 p-5 flex flex-col items-center text-center gap-4 shadow-sm"
      >
         <div className="w-12 h-12 rounded-full bg-white dark:bg-[#050C17] shadow flex items-center justify-center shrink-0 border border-gray-100 dark:border-gray-800">
            <Target size={24} className="text-[#0f172a] dark:text-white" strokeWidth={1.5} />
         </div>
         <p className="text-[0.85rem] font-medium text-gray-700 dark:text-gray-300 leading-relaxed">
           Instead of switching between multiple platforms, <br/>
           <span className="font-bold text-[#0f172a] dark:text-white">manage your expansion journey from <br/><span className="text-[#B27F1C] dark:text-[#F6B23B]">{ecosystemData.bannerTextHighlight}</span></span>
         </p>
      </motion.div>
      
    </div>
  )
}
