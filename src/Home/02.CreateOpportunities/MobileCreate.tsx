import { motion } from 'framer-motion'
import { developerData, franchisorData } from "./data"

export default function MobileCreate() {
  return (
    <div className="w-full bg-[#fdfdfd] pt-12 pb-8 overflow-hidden px-5">
      
      {/* Header */}
      <div className="mb-8 text-left">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block px-2.5 py-1 rounded-full bg-[#fef3c7] text-[#92400e] text-[0.55rem] font-bold tracking-widest uppercase mb-3">
            FOR BUILDERS, OWNERS & FRANCHISORS
          </span>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="text-[2rem] font-black text-[#111827] leading-tight tracking-tight mb-3"
        >
          Create <span className="text-[#d97706]">Opportunities.</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="text-[0.75rem] text-[#4b5563] font-medium leading-relaxed max-w-xs"
        >
          Build your brand. Showcase with impact. Generate quality leads and expand your reach.
        </motion.p>
      </div>

      <div className="flex flex-col gap-6">
        
        {/* Developers Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="w-full bg-white border border-[#e5e7eb] rounded-xl overflow-hidden shadow-sm flex flex-col"
        >
           <div className="p-5 pb-4">
              <div className="flex items-center gap-3 mb-4">
                 <div className="w-12 h-12 rounded-full bg-[#fffbeb] flex items-center justify-center shrink-0 border border-[#fde68a]">
                    <developerData.icon size={22} className="text-[#d97706]" strokeWidth={1.5} />
                 </div>
                 <div>
                    <h3 className="text-[1.1rem] font-black text-[#111827] leading-tight mb-0.5 whitespace-pre-line">
                      {developerData.title.replace('\n', ' ')}
                    </h3>
                    <h4 className="text-[0.65rem] font-bold text-[#d97706]">{developerData.subtitle}</h4>
                 </div>
              </div>
              <p className="text-[0.7rem] text-[#4b5563] font-medium leading-relaxed">
                {developerData.desc}
              </p>
           </div>
           
           <div className="w-full h-32 overflow-hidden border-y border-[#e5e7eb]">
             <img 
               src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" 
               alt="Commercial Building" 
               className="w-full h-full object-cover" 
             />
           </div>

           <div className="grid grid-cols-4 gap-2 px-4 py-5 bg-white">
              {developerData.items.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center gap-1.5">
                   <div className="w-8 h-8 rounded-full border border-[#e5e7eb] flex items-center justify-center text-[#d97706]">
                      <item.icon size={14} strokeWidth={1.5} />
                   </div>
                   <span className="text-[0.55rem] font-bold text-[#111827] leading-tight whitespace-pre-line">
                     {item.label}
                   </span>
                </div>
              ))}
           </div>

           <div className="px-5 pb-5">
             <button className="w-full bg-[#b45309] text-white font-bold text-[0.75rem] py-3 rounded-lg shadow-sm">
               {developerData.buttonText}
             </button>
           </div>
        </motion.div>

        {/* Franchisors Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full bg-white border border-[#e5e7eb] rounded-xl overflow-hidden shadow-sm flex flex-col"
        >
           <div className="p-5 pb-4">
              <div className="flex items-center gap-3 mb-4">
                 <div className="w-12 h-12 rounded-full bg-[#fffbeb] flex items-center justify-center shrink-0 border border-[#fde68a]">
                    <franchisorData.icon size={22} className="text-[#d97706]" strokeWidth={1.5} />
                 </div>
                 <div>
                    <h3 className="text-[1.1rem] font-black text-[#111827] leading-tight mb-0.5 whitespace-pre-line">
                      {franchisorData.title}
                    </h3>
                    <h4 className="text-[0.65rem] font-bold text-[#d97706] whitespace-pre-line leading-tight">{franchisorData.subtitle.replace('\n', ' ')}</h4>
                 </div>
              </div>
              <p className="text-[0.7rem] text-[#4b5563] font-medium leading-relaxed">
                {franchisorData.desc}
              </p>
           </div>
           
           <div className="w-full h-32 overflow-hidden border-y border-[#e5e7eb] relative">
             <img 
               src="https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=800&auto=format&fit=crop" 
               alt="Franchise Storefront" 
               className="w-full h-full object-cover" 
             />
             <div className="absolute top-3 right-3 bg-black/80 text-white text-[0.6rem] font-black px-2 py-1 rounded border border-white/20 tracking-widest uppercase shadow-md">
               FRANCHISE
             </div>
           </div>

           <div className="grid grid-cols-4 gap-2 px-4 py-5 bg-white">
              {franchisorData.items.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center gap-1.5">
                   <div className="w-8 h-8 rounded-full border border-[#e5e7eb] flex items-center justify-center text-[#d97706]">
                      <item.icon size={14} strokeWidth={1.5} />
                   </div>
                   <span className="text-[0.55rem] font-bold text-[#111827] leading-tight whitespace-pre-line">
                     {item.label}
                   </span>
                </div>
              ))}
           </div>

           <div className="px-5 pb-5">
             <button className="w-full bg-[#b45309] text-white font-bold text-[0.75rem] py-3 rounded-lg shadow-sm">
               {franchisorData.buttonText}
             </button>
           </div>
        </motion.div>

      </div>
    </div>
  )
}
