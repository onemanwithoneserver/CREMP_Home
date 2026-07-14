import { motion } from 'framer-motion'
import { Container } from '../../components/layout'
import { foundingData } from './data'
import { Star, Check, Gem, ShieldCheck } from 'lucide-react'

export default function DesktopFoundingPartner() {
  const Btn1Icon = foundingData.buttons[0].icon;
  const Btn2Icon = foundingData.buttons[1].icon;

  return (
    <div className="w-full bg-[#ffffff] pt-20 pb-20 relative overflow-hidden">
      <Container className="relative z-10">
        
        {/* Main Dark Card Container */}
        <div className="w-full bg-[#2A3A69] rounded-[2.5rem] p-12 pr-12 flex items-stretch gap-10 shadow-2xl relative overflow-hidden border border-[#1F2A4A]">
           
           {/* Subtle background glows */}
           <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#d97706]/10 rounded-full blur-[120px] pointer-events-none" />
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

           {/* Left Column (Content & 3D Rocket) */}
           <div className="w-[45%] flex flex-col relative z-10 pl-4 pt-6">
              <motion.div 
                 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                 className="inline-flex items-center gap-2 border border-[#d97706]/40 rounded-full px-4 py-1.5 mb-8 w-fit bg-[#d97706]/10 backdrop-blur-sm"
              >
                 <Star size={14} className="text-[#d97706] fill-transparent" />
                 <span className="text-[0.65rem] font-bold text-[#d97706] tracking-widest uppercase">
                   {foundingData.tag}
                 </span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="text-[3.2rem] font-black leading-[1.1] tracking-tight mb-6 text-white whitespace-pre-line"
              >
                {foundingData.title}
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                className="text-[1rem] text-[#6B7491] font-medium leading-relaxed max-w-sm mb-16"
              >
                {foundingData.desc}
              </motion.p>

              {/* 3D Rocket Graphic Area */}
              <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}
                 className="relative w-full h-[320px] flex items-center justify-center mt-auto"
              >
                 {/* Pedestal */}
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[80px]">
                    {/* Ring 1 (Bottom) */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-12 rounded-[100%] border border-[#d97706]/30 bg-[#2A3A69] shadow-[0_0_30px_rgba(217,119,6,0.15)] flex items-end justify-center pb-1">
                       <span className="text-[0.65rem] font-black tracking-[0.2em] text-[#d97706]">FOUNDING PARTNER</span>
                    </div>
                    {/* Ring 2 (Middle) */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[270px] h-10 rounded-[100%] border-t border-[#d97706]/50 bg-[#2A3A69] flex items-center justify-center">
                    </div>
                    {/* Ring 3 (Top) */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[230px] h-8 rounded-[100%] bg-gradient-to-t from-[#2A3A69] to-[#1f2937] shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] flex items-center justify-center border border-[#374151]" />
                    
                    {/* Glow beneath pedestal */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[400px] h-8 rounded-[100%] bg-[#d97706]/20 blur-[15px]" />
                 </div>

                 {/* The Rocket */}
                 <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                    {/* Flames */}
                    <div className="absolute -bottom-4 w-6 h-12 bg-gradient-to-t from-transparent via-[#f59e0b] to-white rounded-full blur-[2px] opacity-80" />
                    
                    {/* Rocket Body */}
                    <div className="w-16 h-40 bg-gradient-to-tr from-[#b45309] via-[#f59e0b] to-[#fde68a] rounded-t-[100%] rounded-b-xl shadow-2xl relative overflow-hidden">
                       <div className="absolute top-0 right-0 w-1/2 h-full bg-white/20" />
                       {/* Window */}
                       <div className="absolute top-12 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#2A3A69] border-[3px] border-[#fbbf24] shadow-inner" />
                    </div>
                    
                    {/* Fins */}
                    <div className="absolute bottom-2 -left-6 w-8 h-16 bg-gradient-to-tr from-[#92400e] to-[#d97706] rounded-tl-[100%] rounded-br-md transform -skew-y-12" />
                    <div className="absolute bottom-2 -right-6 w-8 h-16 bg-gradient-to-tl from-[#92400e] to-[#d97706] rounded-tr-[100%] rounded-bl-md transform skew-y-12" />
                    <div className="absolute bottom-0 w-4 h-12 bg-gradient-to-t from-[#78350f] to-[#b45309] rounded-t-full z-30" />
                 </div>

                 {/* Connecting Nodes */}
                 {foundingData.rocketNodes.map((node, idx) => {
                   const isLeft = node.pos.includes('left');
                   const isTop = node.pos.includes('top');
                   
                   return (
                     <div key={idx} className={`absolute z-30 flex flex-col items-center gap-2 ${
                       isLeft ? 'left-[-20px]' : 'right-[-20px]'
                     } ${
                       isTop ? 'top-[40px]' : 'top-[160px]'
                     }`}>
                        <div className="w-12 h-12 rounded-full border border-[#d97706]/40 bg-[#2A3A69]/80 backdrop-blur-md flex items-center justify-center text-[#d97706] relative shadow-[0_0_15px_rgba(217,119,6,0.2)]">
                           <node.icon size={20} strokeWidth={1.5} />
                           {/* Connecting dashed line (simplified) */}
                           <svg className={`absolute ${isLeft ? 'left-12' : 'right-12'} top-1/2 w-16 h-[2px] pointer-events-none`} style={{ transform: `translateY(-50%) ${isTop ? 'rotate(15deg)' : 'rotate(-15deg)'}` }}>
                             <line x1="0" y1="1" x2="64" y2="1" stroke="#d97706" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                           </svg>
                           {/* Dot on the rocket side */}
                           <div className={`absolute ${isLeft ? 'right-[-70px]' : 'left-[-70px]'} ${isTop ? 'top-8' : '-top-2'} w-1.5 h-1.5 rounded-full bg-[#d97706] shadow-[0_0_5px_#d97706]`} />
                        </div>
                        <span className="text-[0.6rem] text-[#6B7491] font-bold text-center whitespace-pre-line leading-tight">
                          {node.label}
                        </span>
                     </div>
                   )
                 })}
              </motion.div>
           </div>

           {/* Right Column (Benefits Box) */}
           <motion.div 
             initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
             className="w-[55%] bg-[#2A3A69] rounded-[2rem] border border-[#d97706]/40 p-8 shadow-[0_0_30px_rgba(217,119,6,0.05)] flex flex-col relative z-10 h-full"
           >
              {/* Header */}
              <div className="flex items-center gap-4 mb-8 border-b border-[#1F2A4A] pb-6">
                 <div className="w-14 h-14 rounded-full border border-[#d97706]/40 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(217,119,6,0.15)]">
                    <Gem size={24} className="text-[#d97706]" strokeWidth={1.5} />
                 </div>
                 <h3 className="text-2xl font-bold text-[#d97706]">
                   {foundingData.benefitsTitle}
                 </h3>
              </div>

              {/* Benefits List */}
              <div className="flex flex-col gap-4 flex-1 mb-8">
                 {foundingData.benefits.map((benefit, idx) => (
                   <div key={idx} className="w-full bg-[#2A3A69]/50 rounded-xl border border-[#1F2A4A] p-4 px-5 flex items-center gap-5 group hover:border-[#d97706]/30 transition-colors">
                      <div className="w-6 h-6 rounded-full bg-[#d97706] flex items-center justify-center shrink-0">
                         <Check size={14} className="text-[#2A3A69]" strokeWidth={3} />
                      </div>
                      <div className="w-10 h-10 rounded-full border border-[rgba(255, 255, 255, 0.1)] flex items-center justify-center shrink-0 text-[#6B7491] group-hover:text-[#d97706] transition-colors">
                         <benefit.icon size={18} strokeWidth={1.5} />
                      </div>
                      <span className="text-[1.05rem] font-bold text-white">
                         {benefit.text}
                      </span>
                   </div>
                 ))}
              </div>

              {/* Buttons Area */}
              <div className="flex items-stretch gap-4 mb-5">
                 <button className="flex-1 bg-gradient-to-r from-[#fbbf24] to-[#d97706] hover:from-[#f59e0b] hover:to-[#b45309] rounded-xl p-4 flex items-center gap-4 transition-all shadow-lg transform hover:scale-[1.02]">
                    <div className="w-10 h-10 flex items-center justify-center">
                       <Btn1Icon size={28} className="text-[#2A3A69]" strokeWidth={2} />
                    </div>
                    <div className="flex flex-col text-left">
                       <span className="text-[#2A3A69] font-black text-lg">{foundingData.buttons[0].title}</span>
                       <span className="text-[#2A3A69]/80 font-bold text-[0.65rem]">{foundingData.buttons[0].subtitle}</span>
                    </div>
                 </button>
                 
                 <button className="w-[30%] bg-transparent rounded-xl border border-[#d97706]/40 hover:bg-[#d97706]/10 transition-colors flex items-center justify-center gap-3 px-4">
                    <Btn2Icon size={24} className="text-[#d97706]" strokeWidth={1.5} />
                    <span className="text-white font-bold text-[0.75rem] text-left leading-tight whitespace-pre-line">{foundingData.buttons[1].title}</span>
                 </button>
              </div>

              {/* Disclaimer */}
              <div className="flex items-center justify-center gap-2 mt-auto">
                 <ShieldCheck size={14} className="text-[#d97706]" />
                 <span className="text-[0.7rem] text-[#6B7491]">{foundingData.bottomDisclaimer}</span>
              </div>
           </motion.div>

        </div>
      </Container>
    </div>
  )
}
