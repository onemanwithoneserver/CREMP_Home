import { motion } from 'framer-motion'
import { Container } from '../../components/layout'
import { ecosystemData } from './data'
import { Target, Plus, Equal, Globe2 } from 'lucide-react'

export default function DesktopEcosystem() {
  return (
    <div className="w-full bg-[#ffffff] pt-16 pb-20">
      <Container>
        <div className="flex justify-between items-start mb-16">
          
          {/* Left Column (Text & List) */}
          <div className="w-[42%] flex flex-col pt-8">
            <motion.div 
               initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
               className="flex items-center gap-2 mb-6"
            >
               <div className="w-6 h-[2px] bg-[#d97706]" />
               <span className="text-[0.65rem] font-bold text-[#6B7491] tracking-widest uppercase">
                 {ecosystemData.tag}
               </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-[3.2rem] font-black text-[#2A3A69] leading-[1.05] tracking-tight mb-6"
            >
              Why Expansion <br/>
              Needs More Than a <br/>
              <span className="text-[#d97706]">{ecosystemData.titleHighlight}</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="text-[1.1rem] text-[#3A4566] font-medium leading-relaxed mb-8"
            >
              {ecosystemData.subtitle}
            </motion.p>

            <motion.div 
               initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
               className="flex flex-col gap-5 mb-10"
            >
               {ecosystemData.issues.map((issue, idx) => (
                 <div key={idx} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-[rgba(199, 154, 23, 0.05)] flex items-center justify-center shrink-0 border border-[rgba(199, 154, 23, 0.15)] text-[#2A3A69]">
                      <issue.icon size={20} strokeWidth={1.5} />
                    </div>
                    <span className="text-[0.95rem] font-bold text-[#3A4566]">
                      {issue.text}
                    </span>
                 </div>
               ))}
            </motion.div>

            <motion.p 
               initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
               className="text-[1.1rem] font-black text-[#2A3A69]"
            >
               CREMP brings <span className="text-[#d97706]">{ecosystemData.conclusion}</span>
            </motion.p>
          </div>

          {/* Right Column (Flow Diagram) */}
          <div className="w-[55%] pt-16 relative">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
               className="relative flex flex-col items-center"
             >
                {/* Top Row: 5 Boxes */}
                <div className="flex items-center justify-between w-full relative z-10">
                   {ecosystemData.flowItems.map((item, idx) => (
                     <div key={idx} className="flex items-center">
                        <div className="w-[100px] h-32 bg-white rounded-xl shadow-lg border border-[#E2E6EE] flex flex-col items-center justify-center text-center p-3">
                           <item.icon size={32} className="text-[#2A3A69] mb-3" strokeWidth={1.2} />
                           <span className="text-[0.6rem] font-bold text-[#2A3A69] leading-tight whitespace-pre-line">
                             {item.text}
                           </span>
                        </div>
                        {idx < ecosystemData.flowItems.length - 1 && (
                          <div className="w-6 h-6 rounded-full bg-[#d97706] flex items-center justify-center text-white mx-1 shrink-0 z-20">
                             <Plus size={14} strokeWidth={3} />
                          </div>
                        )}
                     </div>
                   ))}
                </div>

                {/* Connecting Lines */}
                <div className="w-[85%] h-24 border-b-2 border-l-2 border-r-2 border-dashed border-[#d97706]/40 rounded-b-3xl relative top-[-10px] z-0">
                   {/* Middle line down */}
                   <div className="absolute left-1/2 top-full w-[2px] h-12 bg-dashed border-l-2 border-dashed border-[#d97706]/40" />
                   {/* Vertical lines connecting from boxes to the horizontal bar */}
                   <div className="absolute left-[20%] top-0 w-[2px] h-full border-l-2 border-dashed border-[#d97706]/40" />
                   <div className="absolute left-[40%] top-0 w-[2px] h-full border-l-2 border-dashed border-[#d97706]/40" />
                   <div className="absolute right-[40%] top-0 w-[2px] h-full border-l-2 border-dashed border-[#d97706]/40" />
                   <div className="absolute right-[20%] top-0 w-[2px] h-full border-l-2 border-dashed border-[#d97706]/40" />
                </div>

                {/* Equals Sign */}
                <div className="w-10 h-10 rounded-full bg-[#d97706] flex items-center justify-center text-white z-20 mt-[10px]">
                   <Equal size={20} strokeWidth={3} />
                </div>

                {/* Bottom Main Box */}
                <div className="w-[320px] bg-[#2A3A69] rounded-xl shadow-2xl p-5 flex items-center gap-4 mt-[-10px] z-10 relative">
                   <Globe2 size={48} className="text-[#d97706]" strokeWidth={1} />
                   <div className="flex flex-col">
                     <span className="text-white text-[0.8rem] font-bold">One Connected</span>
                     <span className="text-[#d97706] text-[1.1rem] font-black">Expansion Ecosystem</span>
                   </div>
                </div>

             </motion.div>
          </div>
        </div>

        {/* Bottom Banner */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}
           className="w-full bg-[#F5F7FA] rounded-2xl border border-[#E2E6EE] p-6 flex items-center gap-6 shadow-sm"
        >
           <div className="w-14 h-14 rounded-full bg-white shadow flex items-center justify-center shrink-0">
              <Target size={28} className="text-[#2A3A69]" strokeWidth={1.5} />
           </div>
           <p className="text-[1.1rem] font-medium text-[#3A4566] leading-relaxed max-w-3xl">
             Instead of switching between multiple platforms, <br/>
             <span className="font-bold text-[#2A3A69]">manage your expansion journey from <span className="text-[#d97706]">{ecosystemData.bannerTextHighlight}</span></span>
           </p>
        </motion.div>

      </Container>
    </div>
  )
}
