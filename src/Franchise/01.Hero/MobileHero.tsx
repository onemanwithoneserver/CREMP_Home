import { motion } from 'framer-motion'
import { heroData } from './data'
import { UserPlus, PlaySquare } from 'lucide-react'

export default function MobileHero() {
  const Btn1Icon = heroData.buttons[0].icon;
  const Btn2Icon = heroData.buttons[1].icon;

  return (
    <div className="relative w-full bg-[#fdfdfd] overflow-hidden pt-8 pb-12 px-5">
      
      {/* Header Area */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <span className="inline-block px-2.5 py-1 rounded bg-[#fdf8f0] text-[#b38728] text-[0.55rem] font-bold tracking-widest uppercase mb-4 border border-[#f6ead6]">
          {heroData.tag}
        </span>
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
        className="text-[2.2rem] font-black text-[#0a1128] leading-[1.1] tracking-tight mb-4"
      >
        Take Control of <br/>
        Your Franchise <br/>
        <span className="text-[#d97706]">{heroData.titleHighlight}</span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
        className="text-[0.8rem] text-[#4b5563] font-medium leading-relaxed mb-8"
      >
        Powered by India&apos;s <span className="font-bold text-[#0a1128]">Integrated Commercial Real Estate, Franchise & Retail Business Opportunities Platform</span>, CREMP helps you build your brand, reach investors in your preferred micro markets, define your ideal franchise partner and discover expansion-ready locations.
      </motion.p>

      {/* Action Buttons */}
      <motion.div 
         initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
         className="flex flex-col gap-3 mb-10"
      >
         <button className="w-full bg-[#d97706] text-white font-bold text-[0.8rem] py-3.5 rounded-lg shadow-sm flex items-center justify-center gap-2">
           <Btn1Icon size={16} strokeWidth={2.5} />
           {heroData.buttons[0].text}
         </button>
         <button className="w-full bg-white text-[#0a1128] font-bold text-[0.8rem] py-3.5 rounded-lg shadow-sm border border-[#0a1128] flex items-center justify-center gap-2">
           <Btn2Icon size={16} strokeWidth={2} />
           {heroData.buttons[1].text}
         </button>
      </motion.div>

      {/* Map Graphic */}
      <div className="w-full relative h-[300px] flex items-center justify-center mb-10">
         <motion.div 
           initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
           className="w-full h-full relative rounded-2xl overflow-hidden shadow-lg border border-[#e5e7eb] bg-gray-50"
         >
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-48 h-32 bg-white rounded-lg shadow-2xl border-2 border-[#0a1128] overflow-hidden relative rotate-[-5deg] scale-110">
              <img src="https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Storefront" />
              <div className="absolute inset-x-0 top-0 h-6 bg-[#0a1128] flex items-center justify-center">
                 <span className="text-white font-black tracking-widest text-[0.55rem]">YOUR BRAND</span>
              </div>
           </div>

           <div className="absolute top-[10%] right-[5%] bg-white/95 backdrop-blur-sm p-2 rounded shadow-md border border-[#e5e7eb] flex items-center gap-2 z-20">
              <div className="w-5 h-5 rounded bg-[#fdf8f0] text-[#d97706] flex items-center justify-center">
                <UserPlus size={10} />
              </div>
              <div className="text-[0.5rem] font-bold text-[#0a1128] leading-tight">New Market</div>
           </div>

           <div className="absolute bottom-[10%] left-[5%] bg-white/95 backdrop-blur-sm p-2 rounded shadow-md border border-[#e5e7eb] flex items-center gap-2 z-20">
              <div className="w-5 h-5 rounded bg-[#0a1128] text-white flex items-center justify-center">
                <PlaySquare size={10} />
              </div>
              <div className="text-[0.5rem] font-bold text-[#0a1128] leading-tight">Video Tour</div>
           </div>
         </motion.div>
      </div>

      {/* Features Grid */}
      <motion.div 
         initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
         className="grid grid-cols-3 gap-3"
      >
         {heroData.features.map((feature, idx) => (
           <div key={idx} className="flex flex-col items-center text-center gap-2">
              <div className="w-10 h-10 rounded-full border border-[#e5e7eb] flex items-center justify-center text-[#d97706] bg-[#fdfcf8]">
                <feature.icon size={16} strokeWidth={1.5} />
              </div>
              <span className="text-[0.6rem] font-bold text-[#0a1128] leading-tight whitespace-pre-line">
                {feature.text}
              </span>
           </div>
         ))}
      </motion.div>
      
    </div>
  )
}
