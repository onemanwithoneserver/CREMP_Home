import { motion } from 'framer-motion'
import { Container } from '../../components/layout'
import { discoverCategories, discoverFeatures } from "./data"
import { ArrowRight } from 'lucide-react'

export default function DesktopDiscover() {
  return (
    <div className="w-full bg-[#fdfdfd] pt-16 pb-12 overflow-hidden border-t border-[#e5e7eb]">
      <Container>
        <div className="flex items-center justify-between gap-12">
          
          {/* Left Column */}
          <div className="w-[45%] flex flex-col">
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="inline-block px-3 py-1 rounded-full bg-[#dcfce7] text-[#166534] text-[0.65rem] font-bold tracking-widest uppercase mb-4">
                FOR BUYERS, INVESTORS & TENANTS
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-[3rem] font-black text-[#111827] leading-[1.1] tracking-tight mb-4"
            >
              Discover Opportunities<br/>
              with <span className="text-[#15803d]">Confidence.</span>
            </motion.h2>
            
            <motion.h3 
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="text-[1.2rem] font-extrabold text-[#111827] mb-3"
            >
              Explore. Learn. Decide with Confidence.
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="text-[0.95rem] text-[#4b5563] font-medium leading-relaxed mb-10"
            >
              Discover commercial properties, franchise opportunities and retail business opportunities while learning through expert videos, market insights and business education before making your next move.
            </motion.p>

            <motion.div 
               initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
               className="grid grid-cols-4 gap-3 mb-10"
            >
               {discoverCategories.map((cat, idx) => (
                 <div key={idx} className="bg-white border border-[#e5e7eb] rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:border-[#15803d] hover:shadow-md transition-all cursor-pointer group h-28">
                    <div className="w-10 h-10 rounded-full border border-[#e5e7eb] group-hover:border-[#bbf7d0] group-hover:bg-[#f0fdf4] flex items-center justify-center text-[#15803d] mb-3 transition-colors">
                      <cat.icon size={18} strokeWidth={1.5} />
                    </div>
                    <span className="text-[0.6rem] font-bold text-[#111827] leading-tight whitespace-pre-line">
                      {cat.label}
                    </span>
                 </div>
               ))}
            </motion.div>

            <motion.button 
               initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
               className="bg-[#15803d] hover:bg-[#166534] text-white font-bold text-[0.85rem] py-3.5 px-8 rounded-lg shadow-md transition-colors flex items-center justify-center gap-2 self-start"
            >
               Explore Marketplace <ArrowRight size={16} />
            </motion.button>
          </div>

          {/* Right Column (Image & Badges) */}
          <div className="w-[55%] relative h-[500px]">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
               className="absolute right-8 top-0 bottom-0 w-[85%] rounded-3xl overflow-hidden shadow-2xl"
             >
               <img 
                 src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" 
                 alt="Person looking at laptop" 
                 className="w-full h-full object-cover"
               />
             </motion.div>

             {/* Floating Badges */}
             <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-4">
                {discoverFeatures.map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + (idx * 0.1) }}
                    className="bg-white/95 backdrop-blur-md border border-[#e5e7eb] shadow-lg rounded-xl p-3 flex items-center gap-3 w-48 hover:-translate-x-2 transition-transform cursor-default"
                  >
                     <div className="w-8 h-8 rounded-md bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center shrink-0">
                        <feature.icon size={16} className="text-[#15803d]" strokeWidth={2} />
                     </div>
                     <span className="text-[0.65rem] font-bold text-[#111827] leading-tight whitespace-pre-line">
                        {feature.label}
                     </span>
                  </motion.div>
                ))}
             </div>
          </div>
          
        </div>
      </Container>
    </div>
  )
}
