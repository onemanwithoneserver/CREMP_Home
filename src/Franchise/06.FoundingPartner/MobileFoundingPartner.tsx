import { motion } from 'framer-motion'
import { foundingData } from './data'
import { Star, Check, Gem, ShieldCheck } from 'lucide-react'

export default function MobileFoundingPartner() {
  const Btn1Icon = foundingData.buttons[0].icon;
  const Btn2Icon = foundingData.buttons[1].icon;

  return (
    <div className="w-full bg-[#fdfdfd] pt-12 pb-12 px-5 relative overflow-hidden">
      
      {/* Main Dark Card Container */}
      <div className="w-full bg-[#0a1128] rounded-[2rem] p-6 flex flex-col shadow-xl relative overflow-hidden border border-[#1e293b]">
         
         {/* Subtle background glows */}
         <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#d97706]/10 rounded-full blur-[80px] pointer-events-none" />

         <motion.div 
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 border border-[#d97706]/40 rounded-full px-3 py-1 mb-5 w-fit bg-[#d97706]/10 backdrop-blur-sm"
         >
            <Star size={12} className="text-[#d97706] fill-transparent" />
            <span className="text-[0.55rem] font-bold text-[#d97706] tracking-widest uppercase">
              {foundingData.tag}
            </span>
         </motion.div>
         
         <motion.h2 
           initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
           className="text-[2.2rem] font-black leading-[1.1] tracking-tight mb-4 text-white whitespace-pre-line"
         >
           {foundingData.title}
         </motion.h2>

         <motion.p 
           initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
           className="text-[0.9rem] text-[#9ca3af] font-medium leading-relaxed mb-10"
         >
           {foundingData.desc}
         </motion.p>

         {/* 3D Rocket Graphic Area (Mobile Adjusted) */}
         <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}
            className="relative w-full h-[280px] flex items-center justify-center mb-10"
         >
            {/* Pedestal */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[220px] h-[60px]">
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-10 rounded-[100%] border border-[#d97706]/30 bg-[#0a1128] shadow-[0_0_20px_rgba(217,119,6,0.15)] flex items-end justify-center pb-1">
                  <span className="text-[0.55rem] font-black tracking-[0.2em] text-[#d97706]">FOUNDING PARTNER</span>
               </div>
               <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[190px] h-8 rounded-[100%] border-t border-[#d97706]/50 bg-[#111827]" />
               <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[160px] h-6 rounded-[100%] bg-gradient-to-t from-[#111827] to-[#1f2937] border border-[#374151]" />
            </div>

            {/* The Rocket */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
               <div className="absolute -bottom-3 w-5 h-10 bg-gradient-to-t from-transparent via-[#f59e0b] to-white rounded-full blur-[2px] opacity-80" />
               <div className="w-12 h-32 bg-gradient-to-tr from-[#b45309] via-[#f59e0b] to-[#fde68a] rounded-t-[100%] rounded-b-lg shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-1/2 h-full bg-white/20" />
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#0a1128] border-[2px] border-[#fbbf24]" />
               </div>
               <div className="absolute bottom-2 -left-5 w-6 h-12 bg-gradient-to-tr from-[#92400e] to-[#d97706] rounded-tl-[100%] rounded-br-md transform -skew-y-12" />
               <div className="absolute bottom-2 -right-5 w-6 h-12 bg-gradient-to-tl from-[#92400e] to-[#d97706] rounded-tr-[100%] rounded-bl-md transform skew-y-12" />
               <div className="absolute bottom-0 w-3 h-8 bg-gradient-to-t from-[#78350f] to-[#b45309] rounded-t-full z-30" />
            </div>

            {/* Connecting Nodes */}
            {foundingData.rocketNodes.map((node, idx) => {
              const isLeft = node.pos.includes('left');
              const isTop = node.pos.includes('top');
              return (
                <div key={idx} className={`absolute z-30 flex flex-col items-center gap-1 ${
                  isLeft ? 'left-[-10px]' : 'right-[-10px]'
                } ${
                  isTop ? 'top-[40px]' : 'top-[150px]'
                }`}>
                   <div className="w-8 h-8 rounded-full border border-[#d97706]/40 bg-[#0a1128]/80 backdrop-blur-md flex items-center justify-center text-[#d97706]">
                      <node.icon size={14} strokeWidth={1.5} />
                   </div>
                   <span className="text-[0.5rem] text-[#9ca3af] font-bold text-center whitespace-pre-line leading-tight">
                     {node.label}
                   </span>
                </div>
              )
            })}
         </motion.div>

         {/* Benefits Box */}
         <motion.div 
           initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
           className="w-full bg-[#0a1128] rounded-xl border border-[#d97706]/40 p-5 flex flex-col relative z-10"
         >
            <div className="flex items-center justify-center gap-3 mb-6 border-b border-[#1e293b] pb-4">
               <div className="w-10 h-10 rounded-full border border-[#d97706]/40 flex items-center justify-center shrink-0">
                  <Gem size={18} className="text-[#d97706]" strokeWidth={1.5} />
               </div>
               <h3 className="text-[1.1rem] font-bold text-[#d97706]">
                 {foundingData.benefitsTitle}
               </h3>
            </div>

            <div className="flex flex-col gap-3 mb-6">
               {foundingData.benefits.map((benefit, idx) => (
                 <div key={idx} className="w-full bg-[#0f172a]/50 rounded-lg border border-[#1e293b] p-3 flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#d97706] flex items-center justify-center shrink-0">
                       <Check size={12} className="text-[#0a1128]" strokeWidth={3} />
                    </div>
                    <div className="w-8 h-8 rounded-full border border-[#334155] flex items-center justify-center shrink-0 text-[#9ca3af]">
                       <benefit.icon size={14} strokeWidth={1.5} />
                    </div>
                    <span className="text-[0.85rem] font-bold text-white">
                       {benefit.text}
                    </span>
                 </div>
               ))}
            </div>

            <div className="flex flex-col gap-3 mb-4">
               <button className="w-full bg-gradient-to-r from-[#fbbf24] to-[#d97706] rounded-xl p-3 flex items-center justify-center gap-3">
                  <Btn1Icon size={20} className="text-[#0a1128]" strokeWidth={2} />
                  <div className="flex flex-col text-left">
                     <span className="text-[#0a1128] font-black text-[0.95rem]">{foundingData.buttons[0].title}</span>
                     <span className="text-[#0a1128]/80 font-bold text-[0.55rem]">{foundingData.buttons[0].subtitle}</span>
                  </div>
               </button>
               
               <button className="w-full bg-transparent rounded-xl border border-[#d97706]/40 p-3 flex items-center justify-center gap-2">
                  <Btn2Icon size={18} className="text-[#d97706]" strokeWidth={1.5} />
                  <span className="text-white font-bold text-[0.8rem]">{foundingData.buttons[1].title.replace('\n', ' ')}</span>
               </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 mt-2">
               <ShieldCheck size={12} className="text-[#d97706]" />
               <span className="text-[0.55rem] text-[#9ca3af]">{foundingData.bottomDisclaimer}</span>
            </div>
         </motion.div>

      </div>
    </div>
  )
}
