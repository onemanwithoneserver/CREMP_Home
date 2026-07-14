import { motion } from 'framer-motion'
import { Container } from '../../components/layout'
import { marketData } from './data'
import { Star, Goal, ArrowUpRight } from 'lucide-react'

export default function DesktopYourMarkets() {
  return (
    <div className="w-full bg-[#ffffff] pt-20 pb-20 overflow-hidden relative">
      <Container className="relative z-10">
        
        {/* Top Section */}
        <div className="flex items-center justify-between mb-12">
          
          {/* Left Column (Text) */}
          <div className="w-[35%] flex flex-col">
            <motion.div 
               initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
               className="flex items-center gap-2 mb-6"
            >
               <div className="w-6 h-[2px] bg-[#d97706]" />
               <span className="text-[0.65rem] font-bold text-[#C79A17] tracking-widest uppercase">
                 {marketData.tag}
               </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-[3.2rem] font-black leading-[1.1] tracking-tight mb-8"
            >
              <span className="text-[#2A3A69] block">{marketData.titleBase}</span>
              <span className="text-[#d97706] block">{marketData.titleHighlight}</span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <p className="text-[1.1rem] text-[#2A3A69] font-bold leading-relaxed">{marketData.desc[0]}</p>
              <p className="text-[1.1rem] text-[#3A4566] font-medium leading-relaxed max-w-sm">{marketData.desc[1]}</p>
            </motion.div>
          </div>

          {/* Right Column (Hexagon Map) */}
          <div className="w-[65%] relative h-[450px]">
             
             {/* Faint Map Background */}
             <motion.div 
               initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
               className="absolute inset-0 right-[-100px] top-[-50px]"
             >
               <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" className="w-full h-full object-cover opacity-[0.08] grayscale" alt="Map Background" />
             </motion.div>

             {/* Connecting Lines */}
             <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
               {/* Just a representative dashed network connecting the centers */}
               <path d="M 180 180 L 370 120" stroke="#6B7491" strokeWidth="2" strokeDasharray="6 6" fill="none" />
               <path d="M 370 120 L 560 100" stroke="#6B7491" strokeWidth="2" strokeDasharray="6 6" fill="none" />
               <path d="M 370 120 L 580 180" stroke="#6B7491" strokeWidth="2" strokeDasharray="6 6" fill="none" />
               <path d="M 370 120 L 450 280" stroke="#6B7491" strokeWidth="2" strokeDasharray="6 6" fill="none" />
             </svg>

             {/* Hexagons */}
             {marketData.hexagons.map((hex, idx) => {
               
               let bgColor = '';
               let borderColor = '';
               let iconBg = '';
               let badgeBg = '';
               let badgeText = '';

               if (hex.color === 'blue') {
                 bgColor = 'bg-[#eff6ff]';
                 borderColor = 'border-[#bfdbfe]';
                 iconBg = 'bg-[#2A3A69] text-white';
                 badgeBg = 'bg-[#2A3A69]';
                 badgeText = 'text-white';
               } else if (hex.color === 'gold') {
                 bgColor = 'bg-[#fffbeb]';
                 borderColor = 'border-[#fde68a]';
                 iconBg = 'bg-[#d97706] text-white';
                 badgeBg = 'bg-[#d97706]';
                 badgeText = 'text-white';
               } else {
                 bgColor = 'bg-[#F5F7FA]';
                 borderColor = 'border-[#d1d5db]';
                 iconBg = 'bg-[#6B7491] text-white';
                 badgeBg = 'bg-[#E2E6EE]';
                 badgeText = 'text-[#3A4566]';
               }

               return (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1), type: 'spring' }}
                   className="absolute z-10 flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
                   style={hex.position}
                 >
                    {/* Hexagon Shape (Approximated with a rotated square or explicit clip-path for perfection. Using explicit clip-path) */}
                    <div className={`w-40 h-24 ${bgColor} border ${borderColor} flex flex-col items-center justify-center relative hover:scale-105 transition-transform cursor-pointer`}
                         style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
                       
                       {/* Icon overlapping top */}
                       <div className={`absolute -top-4 w-8 h-8 rounded-md ${iconBg} flex items-center justify-center shadow-md`}>
                          <hex.icon size={16} />
                       </div>

                       <span className="font-bold text-[#2A3A69] text-[0.8rem] mt-2 whitespace-nowrap">{hex.title}</span>
                       <div className={`mt-1 px-2 py-0.5 rounded-[0.25rem] ${badgeBg} ${badgeText} text-[0.55rem] font-bold shadow-sm`}>
                         {hex.status}
                       </div>
                    </div>
                 </motion.div>
               )
             })}
          </div>
        </div>

        {/* Bottom Split Section */}
        <div className="w-full bg-[#ffffff] rounded-[2rem] border border-[#E2E6EE] flex overflow-hidden shadow-sm relative">
           
           {/* Left Half (Benefits List) */}
           <div className="w-[45%] p-10 pr-12 bg-white">
              <div className="inline-flex items-center gap-2 bg-[#2A3A69] text-white px-4 py-2 rounded-full mb-8 shadow-sm">
                 <Star size={16} className="text-[#d97706] fill-[#d97706]" />
                 <span className="text-[0.75rem] font-bold tracking-widest">{marketData.benefitsTitle}</span>
              </div>

              <div className="flex flex-col gap-5">
                 {marketData.benefits.map((benefit, idx) => (
                   <div key={idx} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[rgba(199, 154, 23, 0.05)] flex items-center justify-center text-[#d97706] shrink-0 border border-[rgba(199, 154, 23, 0.15)]">
                         <benefit.icon size={18} strokeWidth={2} />
                      </div>
                      <span className="text-[0.95rem] font-bold text-[#3A4566] leading-snug">
                         {benefit.text}
                      </span>
                   </div>
                 ))}
              </div>
           </div>

           {/* Divider Line */}
           <div className="absolute left-[45%] top-10 bottom-10 w-[1px] bg-gradient-to-b from-transparent via-[#E2E6EE] to-transparent" />

           {/* Right Half (Outcome 3D Graphic) */}
           <div className="w-[55%] p-10 bg-[rgba(199, 154, 23, 0.05)] relative flex items-center justify-between pl-16">
              
              <div className="flex flex-col">
                 <div className="inline-flex items-center gap-2 bg-[#d97706] text-white px-4 py-1.5 rounded-full mb-6 shadow-sm w-fit">
                    <Goal size={16} />
                    <span className="text-[0.7rem] font-bold tracking-widest">{marketData.outcome.tag}</span>
                 </div>

                 <h3 className="text-[2.2rem] font-black leading-[1.2]">
                   <span className="text-[#2A3A69] block">{marketData.outcome.lines[0]}</span>
                   <span className="text-[#2A3A69] block">{marketData.outcome.lines[1]}</span>
                   <span className="text-[#d97706] block">{marketData.outcome.lines[2]}</span>
                 </h3>
              </div>

              {/* Graphic Representation */}
              <div className="relative w-72 h-64">
                 {/* Map Base */}
                 <div className="absolute bottom-4 right-4 w-56 h-32 bg-white rounded-xl shadow-xl border border-[#E2E6EE] transform rotate-[-15deg] skew-x-[20deg] flex overflow-hidden">
                    {/* Fake map grid */}
                    <div className="w-full h-full bg-[linear-gradient(to_right,#E2E6EE_1px,transparent_1px),linear-gradient(to_bottom,#E2E6EE_1px,transparent_1px)] bg-[size:20px_20px]" />
                 </div>

                 {/* Bar Chart Rising */}
                 <div className="absolute bottom-16 right-6 flex items-end gap-2 z-10">
                    <div className="w-8 h-12 bg-blue-500 rounded-t-sm shadow-md" />
                    <div className="w-8 h-20 bg-blue-600 rounded-t-sm shadow-md" />
                    <div className="w-8 h-28 bg-blue-700 rounded-t-sm shadow-md" />
                    <div className="w-8 h-36 bg-[#2A3A69] rounded-t-sm shadow-md" />
                 </div>
                 
                 {/* Upward Arrow */}
                 <div className="absolute top-10 right-4 z-20">
                    <ArrowUpRight size={80} className="text-[#d97706]" strokeWidth={2} />
                 </div>

                 {/* Giant Map Pin */}
                 <div className="absolute top-16 left-8 z-20 flex flex-col items-center drop-shadow-2xl">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#d97706] to-[#fcd34d] shadow-lg flex items-center justify-center border-4 border-white">
                       <div className="w-8 h-8 rounded-full bg-white shadow-inner" />
                    </div>
                    {/* Pin tail */}
                    <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[25px] border-t-[#d97706] -mt-2 drop-shadow-md" />
                 </div>

                 {/* 3 User Icons */}
                 <div className="absolute bottom-0 left-0 z-30 flex items-end gap-1">
                    <div className="w-12 h-16 rounded-t-3xl bg-blue-600 shadow-xl flex items-end justify-center pb-2">
                       <div className="w-6 h-6 rounded-full bg-blue-200" />
                    </div>
                    <div className="w-14 h-20 rounded-t-3xl bg-[#d97706] shadow-xl flex items-end justify-center pb-3 z-10">
                       <div className="w-7 h-7 rounded-full bg-amber-200" />
                    </div>
                    <div className="w-12 h-16 rounded-t-3xl bg-blue-800 shadow-xl flex items-end justify-center pb-2">
                       <div className="w-6 h-6 rounded-full bg-blue-200" />
                    </div>
                 </div>

              </div>

           </div>
        </div>

      </Container>
    </div>
  )
}
