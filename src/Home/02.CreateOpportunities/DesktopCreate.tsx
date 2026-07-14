import { motion } from 'framer-motion'
import { Container } from '../../components/layout'
import { developerData, franchisorData } from "./data"

export default function DesktopCreate() {
  return (
    <div className="w-full bg-[#fdfdfd] pt-16 pb-12 overflow-hidden">
      <Container>
        
        {/* Header */}
        <div className="mb-10 text-left">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-block px-3 py-1 rounded-full bg-[#fef3c7] text-[#92400e] text-[0.65rem] font-bold tracking-widest uppercase mb-4">
              FOR BUILDERS, OWNERS & FRANCHISORS
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-[3rem] font-black text-[#111827] leading-none tracking-tight mb-4"
          >
            Create <span className="text-[#d97706]">Opportunities.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-[0.95rem] text-[#4b5563] font-medium leading-relaxed max-w-lg"
          >
            Build your brand. Showcase with impact.<br/>
            Generate quality leads and expand your reach.
          </motion.p>
        </div>

        {/* 2-Card Grid */}
        <div className="flex items-stretch gap-6">
          
          {/* Developers Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="flex-1 bg-white border border-[#e5e7eb] rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow flex flex-col relative group"
          >
             <div className="p-8 pb-6 flex flex-col flex-1">
                <div className="flex items-start gap-4 mb-5">
                   <div className="w-14 h-14 rounded-full bg-[#fffbeb] flex items-center justify-center shrink-0 border border-[#fde68a]">
                      <developerData.icon size={26} className="text-[#d97706]" strokeWidth={1.5} />
                   </div>
                   <div>
                      <h3 className="text-[1.3rem] font-black text-[#111827] leading-[1.1] whitespace-pre-line mb-1">
                        {developerData.title}
                      </h3>
                      <h4 className="text-[0.8rem] font-bold text-[#d97706] mb-3">{developerData.subtitle}</h4>
                   </div>
                </div>
                <p className="text-[0.8rem] text-[#4b5563] font-medium leading-relaxed mb-6">
                  {developerData.desc}
                </p>
             </div>
             
             {/* Image span */}
             <div className="w-full h-44 overflow-hidden border-y border-[#e5e7eb]">
               <img 
                 src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" 
                 alt="Commercial Building" 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
               />
             </div>

             {/* Icons Grid */}
             <div className="flex items-center justify-between px-8 py-6 bg-white">
                {developerData.items.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center gap-2">
                     <div className="w-10 h-10 rounded-full border border-[#e5e7eb] flex items-center justify-center text-[#d97706]">
                        <item.icon size={18} strokeWidth={1.5} />
                     </div>
                     <span className="text-[0.6rem] font-bold text-[#111827] leading-tight whitespace-pre-line">
                       {item.label}
                     </span>
                  </div>
                ))}
             </div>

             {/* Button */}
             <div className="px-8 pb-8">
               <button className="w-full bg-[#b45309] hover:bg-[#92400e] text-white font-bold text-[0.85rem] py-3.5 rounded-lg shadow-md transition-colors">
                 {developerData.buttonText}
               </button>
             </div>
          </motion.div>

          {/* Franchisors Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1 bg-white border border-[#e5e7eb] rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow flex flex-col relative group"
          >
             <div className="p-8 pb-6 flex flex-col flex-1">
                <div className="flex items-start gap-4 mb-5">
                   <div className="w-14 h-14 rounded-full bg-[#fffbeb] flex items-center justify-center shrink-0 border border-[#fde68a]">
                      <franchisorData.icon size={26} className="text-[#d97706]" strokeWidth={1.5} />
                   </div>
                   <div>
                      <h3 className="text-[1.3rem] font-black text-[#111827] leading-[1.1] whitespace-pre-line mb-1">
                        {franchisorData.title}
                      </h3>
                      <h4 className="text-[0.8rem] font-bold text-[#d97706] mb-3 whitespace-pre-line leading-snug">{franchisorData.subtitle}</h4>
                   </div>
                </div>
                <p className="text-[0.8rem] text-[#4b5563] font-medium leading-relaxed mb-6">
                  {franchisorData.desc}
                </p>
             </div>
             
             {/* Image span */}
             <div className="w-full h-44 overflow-hidden border-y border-[#e5e7eb] relative">
               <img 
                 src="https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=800&auto=format&fit=crop" 
                 alt="Franchise Storefront" 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
               />
               <div className="absolute top-4 right-4 bg-black/80 text-white text-xs font-black px-3 py-1 rounded border border-white/20 tracking-widest uppercase shadow-lg">
                 FRANCHISE
               </div>
             </div>

             {/* Icons Grid */}
             <div className="flex items-center justify-between px-8 py-6 bg-white">
                {franchisorData.items.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center gap-2">
                     <div className="w-10 h-10 rounded-full border border-[#e5e7eb] flex items-center justify-center text-[#d97706]">
                        <item.icon size={18} strokeWidth={1.5} />
                     </div>
                     <span className="text-[0.6rem] font-bold text-[#111827] leading-tight whitespace-pre-line">
                       {item.label}
                     </span>
                  </div>
                ))}
             </div>

             {/* Button */}
             <div className="px-8 pb-8">
               <button className="w-full bg-[#b45309] hover:bg-[#92400e] text-white font-bold text-[0.85rem] py-3.5 rounded-lg shadow-md transition-colors">
                 {franchisorData.buttonText}
               </button>
             </div>
          </motion.div>

        </div>
      </Container>
    </div>
  )
}
