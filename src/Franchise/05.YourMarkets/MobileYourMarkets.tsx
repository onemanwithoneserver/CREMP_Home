import { motion } from 'framer-motion'
import { marketData } from './data'
import { Star, Goal, ArrowUpRight } from 'lucide-react'

export default function MobileYourMarkets() {
  return (
    <div className="w-full bg-[#ffffff] pt-12 pb-12 px-5 overflow-hidden relative">
      
      {/* Header Area */}
      <motion.div 
         initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
         className="flex items-center gap-2 mb-4"
      >
         <div className="w-4 h-[2px] bg-[#d97706]" />
         <span className="text-[0.55rem] font-bold text-[#C79A17] tracking-widest uppercase">
           {marketData.tag}
         </span>
      </motion.div>
      
      <motion.h2 
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
        className="text-[2.2rem] font-black leading-[1.1] tracking-tight mb-5"
      >
        <span className="text-[#2A3A69] block">{marketData.titleBase}</span>
        <span className="text-[#d97706] block">{marketData.titleHighlight}</span>
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
        className="flex flex-col gap-4 mb-10"
      >
        <p className="text-[0.95rem] text-[#2A3A69] font-bold leading-relaxed">{marketData.desc[0]}</p>
        <p className="text-[0.9rem] text-[#3A4566] font-medium leading-relaxed">{marketData.desc[1]}</p>
      </motion.div>

      {/* Hexagon Map (Mobile friendly stack) */}
      <div className="w-full relative py-6 mb-10 flex flex-col items-center justify-center bg-gray-50 rounded-2xl border border-[#E2E6EE] overflow-hidden">
         {/* Map Background */}
         <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-[0.08] grayscale" alt="Map" />
         
         {/* Connecting Line */}
         <div className="absolute top-10 bottom-10 w-[2px] border-l-[2px] border-dashed border-[#6B7491]" />

         <div className="flex flex-col gap-6 z-10 w-full px-8">
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
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 * idx }}
                  className={`w-full ${bgColor} border ${borderColor} rounded-xl p-3 flex items-center justify-between shadow-sm`}
                >
                   <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg ${iconBg} flex items-center justify-center shadow-sm shrink-0`}>
                         <hex.icon size={14} />
                      </div>
                      <span className="font-bold text-[#2A3A69] text-[0.8rem]">{hex.title}</span>
                   </div>
                   <div className={`px-2 py-1 rounded-[0.25rem] ${badgeBg} ${badgeText} text-[0.55rem] font-bold shadow-sm whitespace-nowrap`}>
                     {hex.status}
                   </div>
                </motion.div>
              )
            })}
         </div>
      </div>

      {/* Benefits Section */}
      <div className="w-full bg-white rounded-[1.5rem] border border-[#E2E6EE] p-6 shadow-sm mb-6">
         <div className="inline-flex items-center gap-2 bg-[#2A3A69] text-white px-3 py-1.5 rounded-full mb-6 shadow-sm">
            <Star size={14} className="text-[#d97706] fill-[#d97706]" />
            <span className="text-[0.65rem] font-bold tracking-widest">{marketData.benefitsTitle}</span>
         </div>

         <div className="flex flex-col gap-4">
            {marketData.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-[rgba(199, 154, 23, 0.05)] flex items-center justify-center text-[#d97706] shrink-0 border border-[rgba(199, 154, 23, 0.15)]">
                    <benefit.icon size={14} strokeWidth={2} />
                 </div>
                 <span className="text-[0.8rem] font-bold text-[#3A4566] leading-snug">
                    {benefit.text}
                 </span>
              </div>
            ))}
         </div>
      </div>

      {/* Outcome Section */}
      <motion.div 
         initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
         className="w-full p-6 bg-[rgba(199, 154, 23, 0.05)] rounded-2xl border border-[rgba(199, 154, 23, 0.15)] relative flex flex-col justify-center items-center text-center shadow-sm overflow-hidden"
      >
         <div className="inline-flex items-center gap-1.5 bg-[#d97706] text-white px-3 py-1 rounded-full mb-4 shadow-sm z-10">
            <Goal size={14} />
            <span className="text-[0.6rem] font-bold tracking-widest">{marketData.outcome.tag}</span>
         </div>

         <h3 className="text-[1.6rem] font-black leading-[1.2] mb-8 z-10">
           <span className="text-[#2A3A69] block">{marketData.outcome.lines[0]}</span>
           <span className="text-[#2A3A69] block">{marketData.outcome.lines[1]}</span>
           <span className="text-[#d97706] block">{marketData.outcome.lines[2]}</span>
         </h3>

         <div className="relative w-full h-48 flex items-center justify-center">
            {/* Map Base */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-white rounded-xl shadow-md border border-[#E2E6EE] transform rotate-[-15deg] skew-x-[20deg] flex overflow-hidden">
               <div className="w-full h-full bg-[linear-gradient(to_right,#E2E6EE_1px,transparent_1px),linear-gradient(to_bottom,#E2E6EE_1px,transparent_1px)] bg-[size:15px_15px]" />
            </div>

            {/* Bar Chart Rising */}
            <div className="absolute bottom-8 right-[10%] flex items-end gap-1.5 z-10">
               <div className="w-6 h-8 bg-blue-500 rounded-t-sm shadow-sm" />
               <div className="w-6 h-14 bg-blue-600 rounded-t-sm shadow-sm" />
               <div className="w-6 h-20 bg-blue-700 rounded-t-sm shadow-sm" />
               <div className="w-6 h-24 bg-[#2A3A69] rounded-t-sm shadow-sm" />
            </div>
            
            <div className="absolute top-2 right-4 z-20">
               <ArrowUpRight size={50} className="text-[#d97706]" strokeWidth={2.5} />
            </div>

            {/* Giant Map Pin */}
            <div className="absolute top-8 left-[20%] z-20 flex flex-col items-center drop-shadow-xl scale-75">
               <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#d97706] to-[#fcd34d] shadow-lg flex items-center justify-center border-[3px] border-white">
                  <div className="w-6 h-6 rounded-full bg-white shadow-inner" />
               </div>
               <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[20px] border-t-[#d97706] -mt-1 drop-shadow-sm" />
            </div>
         </div>

      </motion.div>
      
    </div>
  )
}
