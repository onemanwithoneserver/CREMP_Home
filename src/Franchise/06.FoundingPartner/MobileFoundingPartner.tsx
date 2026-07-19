import { motion } from 'framer-motion'
import { foundingData } from './data'
import { Star, Check, Gem, ShieldCheck } from 'lucide-react'

export default function MobileFoundingPartner() {
  const Btn1Icon = foundingData.buttons[0].icon;
  const Btn2Icon = foundingData.buttons[1].icon;

  return (
    <div className="w-full bg-gray-50 dark:bg-[#050C17] pt-12 pb-12 px-5 relative overflow-hidden">
      
      {/* Main Dark Card Container */}
      <div className="w-full bg-white dark:bg-[#0C1525] rounded-3xl p-6 flex flex-col shadow-xl relative overflow-hidden border border-gray-200 dark:border-gray-800/80">
         
         {/* Subtle background glows */}
         <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#B27F1C] dark:bg-[#F6B23B]/10 rounded-full blur-[80px] pointer-events-none" />

         <motion.div 
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 border border-[#B27F1C]/40 dark:border-[#F6B23B]/40 rounded-full px-3 py-1 mb-5 w-fit bg-[#B27F1C] dark:bg-[#F6B23B]/10 backdrop-blur-sm"
         >
            <Star size={12} className="text-[#B27F1C] dark:text-[#F6B23B] fill-transparent" />
            <span className="text-[0.55rem] font-bold text-[#B27F1C] dark:text-[#F6B23B] tracking-widest uppercase">
              {foundingData.tag}
            </span>
         </motion.div>
         
         <motion.h2 
           initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
           className="text-[2.2rem] font-black leading-[1.1] tracking-tight mb-4 text-gray-900 dark:text-white whitespace-pre-line"
         >
           {foundingData.title}
         </motion.h2>

         <motion.p 
           initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
           className="text-[0.9rem] text-gray-500 dark:text-gray-400 font-medium leading-relaxed mb-10"
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
               <div className="absolute bottom-0 w-full h-12 bg-white dark:bg-[#0a101d] rounded-[100%] border border-[#B27F1C]/30 dark:border-[#F6B23B]/30 z-30 shadow-[0_10px_20px_rgba(178,127,28,0.15)] flex items-end justify-center pb-1.5">
                  <span className="-translate-x-[0.4em] text-[0.6rem] font-black tracking-[0.25em] text-[#B27F1C] dark:text-[#F6B23B] pl-[0.25em]">
                     FOUNDING PARTNER
                  </span>
               </div>
               <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[190px] h-8 rounded-[100%] border-t border-[#B27F1C]/50 dark:border-[#F6B23B]/50 bg-white dark:bg-[#0C1525]" />
               <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[160px] h-6 rounded-[100%] bg-gradient-to-t from-white dark:from-[#0C1525] to-gray-100 dark:to-gray-800 border border-gray-200 dark:border-gray-800" />
            </div>

            {/* The Rocket */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
               <div className="absolute -bottom-3 w-5 h-10 bg-gradient-to-t from-transparent via-[#f59e0b] to-white rounded-full blur-[2px] opacity-80" />
               <div className="w-12 h-32 bg-gradient-to-tr from-[#b45309] via-[#f59e0b] to-[#fde68a] rounded-t-[100%] rounded-b-lg shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-1/2 h-full bg-white/20" />
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white dark:bg-[#0C1525] border-[2px] border-yellow-500 dark:border-yellow-400" />
               </div>
               <div className="absolute bottom-2 -left-5 w-6 h-12 bg-gradient-to-tr from-[#B27F1C] dark:from-[#F6B23B] to-[#B27F1C] dark:to-[#F6B23B] rounded-tl-[100%] rounded-br-md transform -skew-y-12" />
               <div className="absolute bottom-2 -right-5 w-6 h-12 bg-gradient-to-tl from-[#B27F1C] dark:from-[#F6B23B] to-[#B27F1C] dark:to-[#F6B23B] rounded-tr-[100%] rounded-bl-md transform skew-y-12" />
               <div className="absolute bottom-0 w-3 h-8 bg-gradient-to-t from-[#78350f] to-[#b45309] rounded-t-full z-30" />
            </div>

            {/* Connecting Nodes */}
            {foundingData.rocketNodes.map((node, idx) => {
              const isLeft = node.pos.includes('left');
              const isTop = node.pos.includes('top');
              return (
                <div key={idx} className={`absolute z-30 flex flex-col items-center gap-1 left-[50%] -translate-x-1/2 ${
                  isLeft ? '-ml-[110px]' : 'ml-[110px]'
                } ${
                  isTop ? 'top-[96px]' : 'top-[208px]'
                }`}>
                   <div className="relative w-8 h-8 rounded-full border border-[#B27F1C]/40 dark:border-[#F6B23B]/40 bg-white dark:bg-[#0C1525]/80 backdrop-blur-md flex items-center justify-center text-[#B27F1C] dark:text-[#F6B23B]">
                      <node.icon size={14} strokeWidth={1.5} />
                      
                      {/* Straight Connection Line with dots */}
                      <svg 
                        className={`pointer-events-none absolute ${isLeft ? 'left-full' : 'right-full'} ${isTop ? 'top-1/2' : 'bottom-1/2'}`}
                        style={{ width: '69px', height: '56px' }}
                        viewBox="0 0 69 56"
                        preserveAspectRatio="none"
                      >
                        {(() => {
                          const iconX = isLeft ? 0 : 69;
                          const iconY = isTop ? 0 : 56;
                          const rocketX = isLeft ? 69 : 0;
                          const rocketY = isTop ? 56 : 0;
                          
                          const getPoint = (t: number) => ({
                            cx: iconX + (rocketX - iconX) * t,
                            cy: iconY + (rocketY - iconY) * t
                          });
                          
                          const dots = [0.15, 0.5, 1.0].map(getPoint);
                          
                          return (
                            <>
                              <line 
                                x1={iconX} y1={iconY} 
                                x2={rocketX} y2={rocketY} 
                                stroke="currentColor" 
                                className="text-[#B27F1C]/40 dark:text-[#F6B23B]/40" 
                                strokeWidth="1" 
                                strokeDasharray="2 3" 
                              />
                              {dots.map((pt, i) => (
                                <circle 
                                  key={i}
                                  cx={pt.cx} 
                                  cy={pt.cy} 
                                  r={i === 2 ? "1.5" : "1"} 
                                  className="fill-[#B27F1C] dark:fill-[#F6B23B]"
                                />
                              ))}
                            </>
                          );
                        })()}
                      </svg>
                   </div>
                   <span className="text-[0.5rem] text-gray-500 dark:text-gray-400 font-bold text-center whitespace-pre-line leading-tight">
                     {node.label}
                   </span>
                </div>
              )
            })}
         </motion.div>

         {/* Benefits Box */}
         <motion.div 
           initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
           className="w-full bg-white dark:bg-[#0C1525] rounded-xl border border-[#B27F1C]/40 dark:border-[#F6B23B]/40 p-5 flex flex-col relative z-10"
         >
            <div className="flex items-center justify-center gap-3 mb-6 border-b border-gray-200 dark:border-gray-800/80 pb-4">
               <div className="w-10 h-10 rounded-full border border-[#B27F1C]/40 dark:border-[#F6B23B]/40 flex items-center justify-center shrink-0">
                  <Gem size={18} className="text-[#B27F1C] dark:text-[#F6B23B]" strokeWidth={1.5} />
               </div>
               <h3 className="text-[1.1rem] font-bold text-[#B27F1C] dark:text-[#F6B23B]">
                 {foundingData.benefitsTitle}
               </h3>
            </div>

            <div className="flex flex-col gap-3 mb-6">
               {foundingData.benefits.map((benefit, idx) => (
                 <div key={idx} className="w-full bg-white dark:bg-[#0C1525]/50 rounded-lg border border-gray-200 dark:border-gray-800/80 p-3 flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#B27F1C] dark:bg-[#F6B23B] flex items-center justify-center shrink-0">
                       <Check size={12} className="text-gray-900 dark:text-white" strokeWidth={3} />
                    </div>
                    <div className="w-8 h-8 rounded-full border border-[rgba(255, 255, 255, 0.1)] flex items-center justify-center shrink-0 text-gray-500 dark:text-gray-400">
                       <benefit.icon size={14} strokeWidth={1.5} />
                    </div>
                    <span className="text-[0.85rem] font-bold text-gray-900 dark:text-white">
                       {benefit.text}
                    </span>
                 </div>
               ))}
            </div>

            <div className="flex flex-col gap-3 mb-4">
               <button className="w-full bg-gradient-to-r from-[#FFD17A] dark:from-[#F6B23B] to-[#B27F1C] dark:to-[#F6B23B] rounded-xl p-3 flex items-center justify-center gap-3">
                  <Btn1Icon size={20} className="text-gray-900 dark:text-white" strokeWidth={2} />
                  <div className="flex flex-col text-left">
                     <span className="text-gray-900 dark:text-white font-black text-[0.95rem]">{foundingData.buttons[0].title}</span>
                     <span className="text-gray-900 dark:text-white/80 font-bold text-[0.55rem]">{foundingData.buttons[0].subtitle}</span>
                  </div>
               </button>
               
               <button className="w-full bg-transparent rounded-xl border border-[#B27F1C]/40 dark:border-[#F6B23B]/40 p-3 flex items-center justify-center gap-2">
                  <Btn2Icon size={18} className="text-[#B27F1C] dark:text-[#F6B23B]" strokeWidth={1.5} />
                  <span className="text-gray-900 dark:text-white font-bold text-[0.8rem]">{foundingData.buttons[1].title.replace('\n', ' ')}</span>
               </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 mt-2">
               <ShieldCheck size={12} className="text-[#B27F1C] dark:text-[#F6B23B]" />
               <span className="text-[0.55rem] text-gray-500 dark:text-gray-400">{foundingData.bottomDisclaimer}</span>
            </div>
         </motion.div>

      </div>
    </div>
  )
}
