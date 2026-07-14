import { motion } from 'framer-motion'
import { ecosystemData } from './data'
import { Target, Plus, Equal, Globe2 } from 'lucide-react'

export default function MobileEcosystem() {
  return (
    <div className="w-full bg-[#ffffff] pt-12 pb-10 px-5">
      
      {/* Header Area */}
      <motion.div 
         initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
         className="flex items-center gap-2 mb-4"
      >
         <div className="w-4 h-[2px] bg-[#d97706]" />
         <span className="text-[0.55rem] font-bold text-[#6B7491] tracking-widest uppercase">
           {ecosystemData.tag}
         </span>
      </motion.div>
      
      <motion.h2 
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
        className="text-[2.2rem] font-black text-[#2A3A69] leading-[1.05] tracking-tight mb-4"
      >
        Why Expansion <br/>
        Needs More Than a <br/>
        <span className="text-[#d97706]">{ecosystemData.titleHighlight}</span>
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
        className="text-[0.95rem] text-[#3A4566] font-medium leading-relaxed mb-8"
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
              <div className="w-10 h-10 rounded bg-[rgba(199, 154, 23, 0.05)] flex items-center justify-center shrink-0 border border-[rgba(199, 154, 23, 0.15)] text-[#2A3A69]">
                <issue.icon size={18} strokeWidth={1.5} />
              </div>
              <span className="text-[0.8rem] font-bold text-[#3A4566] leading-snug">
                {issue.text}
              </span>
           </div>
         ))}
      </motion.div>

      <motion.p 
         initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
         className="text-[1rem] font-black text-[#2A3A69] mb-12"
      >
         CREMP brings <span className="text-[#d97706]">{ecosystemData.conclusion}</span>
      </motion.p>

      {/* Flow Diagram (Vertical on Mobile) */}
      <motion.div 
         initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
         className="relative flex flex-col items-center mb-10"
      >
         {ecosystemData.flowItems.map((item, idx) => (
           <div key={idx} className="flex flex-col items-center w-full">
              <div className="w-[80%] max-w-[200px] bg-white rounded-xl shadow-md border border-[#E2E6EE] flex items-center gap-4 p-4 z-10">
                 <item.icon size={24} className="text-[#2A3A69]" strokeWidth={1.5} />
                 <span className="text-[0.7rem] font-bold text-[#2A3A69] leading-tight whitespace-pre-line text-left">
                   {item.text}
                 </span>
              </div>
              {idx < ecosystemData.flowItems.length - 1 && (
                <div className="flex flex-col items-center my-1 z-0">
                   <div className="w-[2px] h-4 border-l-2 border-dashed border-[#d97706]/40" />
                   <div className="w-5 h-5 rounded-full bg-[#d97706] flex items-center justify-center text-white z-20">
                      <Plus size={12} strokeWidth={3} />
                   </div>
                   <div className="w-[2px] h-4 border-l-2 border-dashed border-[#d97706]/40" />
                </div>
              )}
           </div>
         ))}

         <div className="flex flex-col items-center my-1 z-0">
            <div className="w-[2px] h-6 border-l-2 border-dashed border-[#d97706]/40" />
            <div className="w-8 h-8 rounded-full bg-[#d97706] flex items-center justify-center text-white z-20">
               <Equal size={16} strokeWidth={3} />
            </div>
            <div className="w-[2px] h-4 border-l-2 border-dashed border-[#d97706]/40" />
         </div>

         <div className="w-full max-w-[280px] bg-[#2A3A69] rounded-xl shadow-xl p-5 flex items-center gap-4 z-10">
            <Globe2 size={36} className="text-[#d97706]" strokeWidth={1} />
            <div className="flex flex-col">
              <span className="text-white text-[0.7rem] font-bold">One Connected</span>
              <span className="text-[#d97706] text-[0.95rem] font-black">Expansion Ecosystem</span>
            </div>
         </div>

      </motion.div>

      {/* Bottom Banner */}
      <motion.div 
         initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}
         className="w-full bg-[#F5F7FA] rounded-xl border border-[#E2E6EE] p-5 flex flex-col items-center text-center gap-4 shadow-sm"
      >
         <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center shrink-0">
            <Target size={24} className="text-[#2A3A69]" strokeWidth={1.5} />
         </div>
         <p className="text-[0.8rem] font-medium text-[#3A4566] leading-relaxed">
           Instead of switching between multiple platforms, <br/>
           <span className="font-bold text-[#2A3A69]">manage your expansion journey from <br/><span className="text-[#d97706]">{ecosystemData.bannerTextHighlight}</span></span>
         </p>
      </motion.div>
      
    </div>
  )
}
