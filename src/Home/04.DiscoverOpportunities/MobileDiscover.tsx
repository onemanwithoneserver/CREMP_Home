import { motion } from 'framer-motion'
import { discoverCategories, discoverFeatures } from "./data"
import { ArrowRight } from 'lucide-react'

export default function MobileDiscover() {
  return (
    <div className="w-full bg-[#fdfdfd] pt-12 pb-8 overflow-hidden px-5 border-t border-[#e5e7eb]">
      
      {/* Header */}
      <div className="mb-8">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block px-2.5 py-1 rounded-full bg-[#dcfce7] text-[#166534] text-[0.55rem] font-bold tracking-widest uppercase mb-3">
            FOR BUYERS, INVESTORS & TENANTS
          </span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="text-[2rem] font-black text-[#111827] leading-[1.1] tracking-tight mb-3"
        >
          Discover Opportunities <br/>
          with <span className="text-[#15803d]">Confidence.</span>
        </motion.h2>
        
        <motion.h3 
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="text-[0.95rem] font-extrabold text-[#111827] mb-2"
        >
          Explore. Learn. Decide with Confidence.
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="text-[0.75rem] text-[#4b5563] font-medium leading-relaxed mb-6"
        >
          Discover commercial properties, franchise opportunities and retail business opportunities while learning through expert videos, market insights and business education before making your next move.
        </motion.p>
      </div>

      {/* Image & Badges */}
      <div className="w-full relative h-[300px] mb-8">
         <motion.div 
           initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
           className="absolute left-0 top-0 bottom-0 w-[75%] rounded-2xl overflow-hidden shadow-lg"
         >
           <img 
             src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop" 
             alt="Person looking at laptop" 
             className="w-full h-full object-cover"
           />
         </motion.div>

         {/* Floating Badges */}
         <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-3">
            {discoverFeatures.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + (idx * 0.1) }}
                className="bg-white/95 backdrop-blur-md border border-[#e5e7eb] shadow-md rounded-lg p-2.5 flex items-center gap-2.5 w-36"
              >
                 <div className="w-6 h-6 rounded bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center shrink-0">
                    <feature.icon size={12} className="text-[#15803d]" strokeWidth={2} />
                 </div>
                 <span className="text-[0.55rem] font-bold text-[#111827] leading-tight whitespace-pre-line">
                    {feature.label}
                 </span>
              </motion.div>
            ))}
         </div>
      </div>

      {/* Categories */}
      <motion.div 
         initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
         className="grid grid-cols-2 gap-3 mb-6"
      >
         {discoverCategories.map((cat, idx) => (
           <div key={idx} className="bg-white border border-[#e5e7eb] rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-sm h-24">
              <div className="w-8 h-8 rounded-full border border-[#e5e7eb] flex items-center justify-center text-[#15803d] mb-2">
                <cat.icon size={14} strokeWidth={1.5} />
              </div>
              <span className="text-[0.6rem] font-bold text-[#111827] leading-tight whitespace-pre-line">
                {cat.label}
              </span>
           </div>
         ))}
      </motion.div>

      <motion.button 
         initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
         className="w-full bg-[#15803d] text-white font-bold text-[0.75rem] py-3 rounded-lg shadow-sm flex items-center justify-center gap-2"
      >
         Explore Marketplace <ArrowRight size={14} />
      </motion.button>
      
    </div>
  )
}
