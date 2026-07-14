import { motion } from 'framer-motion'
import { brokerData, consultantData } from "./data"

export default function MobileEnable() {
  return (
    <div className="w-full bg-[#f8fafc] pt-12 pb-8 overflow-hidden px-5 border-t border-[#e5e7eb]">
      
      {/* Header */}
      <div className="mb-8 text-left">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block px-2.5 py-1 rounded-full bg-[#e0e7ff] text-[#3730a3] text-[0.55rem] font-bold tracking-widest uppercase mb-3">
            FOR GROWTH PARTNERS
          </span>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="text-[2rem] font-black text-[#111827] leading-tight tracking-tight mb-3"
        >
          Enable <span className="text-[#2563eb]">Growth.</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="text-[0.75rem] text-[#4b5563] font-medium leading-relaxed max-w-xs"
        >
          Share expertise. Build credibility. Connect the right opportunities.
        </motion.p>
      </div>

      <div className="flex flex-col gap-6">
        
        {/* Brokers Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="w-full bg-white border border-[#e5e7eb] rounded-xl overflow-hidden shadow-sm flex flex-col"
        >
           <div className="p-5 pb-4">
              <div className="flex items-center gap-3 mb-4">
                 <div className="w-12 h-12 rounded-full bg-[#eff6ff] flex items-center justify-center shrink-0 border border-[#bfdbfe]">
                    <brokerData.icon size={22} className="text-[#2563eb]" strokeWidth={1.5} />
                 </div>
                 <div>
                    <h3 className="text-[1.1rem] font-black text-[#111827] leading-tight mb-0.5 whitespace-pre-line">
                      {brokerData.title}
                    </h3>
                    <h4 className="text-[0.65rem] font-bold text-[#2563eb]">{brokerData.subtitle}</h4>
                 </div>
              </div>
              <p className="text-[0.7rem] text-[#4b5563] font-medium leading-relaxed">
                {brokerData.desc}
              </p>
           </div>
           
           <div className="w-full h-32 overflow-hidden border-y border-[#e5e7eb]">
             <img 
               src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" 
               alt="Broker working on tablet" 
               className="w-full h-full object-cover" 
             />
           </div>

           <div className="grid grid-cols-4 gap-2 px-4 py-5 bg-white">
              {brokerData.items.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center gap-1.5">
                   <div className="w-8 h-8 rounded-full border border-[#e5e7eb] flex items-center justify-center text-[#2563eb]">
                      <item.icon size={14} strokeWidth={1.5} />
                   </div>
                   <span className="text-[0.55rem] font-bold text-[#111827] leading-tight whitespace-pre-line">
                     {item.label}
                   </span>
                </div>
              ))}
           </div>

           <div className="px-5 pb-5">
             <button className="w-full bg-[#1e40af] text-white font-bold text-[0.75rem] py-3 rounded-lg shadow-sm">
               {brokerData.buttonText}
             </button>
           </div>
        </motion.div>

        {/* Consultants Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full bg-white border border-[#e5e7eb] rounded-xl overflow-hidden shadow-sm flex flex-col"
        >
           <div className="p-5 pb-4">
              <div className="flex items-center gap-3 mb-4">
                 <div className="w-12 h-12 rounded-full bg-[#eff6ff] flex items-center justify-center shrink-0 border border-[#bfdbfe]">
                    <consultantData.icon size={22} className="text-[#2563eb]" strokeWidth={1.5} />
                 </div>
                 <div>
                    <h3 className="text-[1.1rem] font-black text-[#111827] leading-tight mb-0.5 whitespace-pre-line">
                      {consultantData.title}
                    </h3>
                    <h4 className="text-[0.65rem] font-bold text-[#2563eb] whitespace-pre-line leading-tight">{consultantData.subtitle}</h4>
                 </div>
              </div>
              <p className="text-[0.7rem] text-[#4b5563] font-medium leading-relaxed">
                {consultantData.desc}
              </p>
           </div>
           
           <div className="w-full h-32 overflow-hidden border-y border-[#e5e7eb]">
             <img 
               src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=800&auto=format&fit=crop" 
               alt="Chess pieces" 
               className="w-full h-full object-cover" 
             />
           </div>

           <div className="grid grid-cols-4 gap-2 px-4 py-5 bg-white">
              {consultantData.items.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center gap-1.5">
                   <div className="w-8 h-8 rounded-full border border-[#e5e7eb] flex items-center justify-center text-[#2563eb]">
                      <item.icon size={14} strokeWidth={1.5} />
                   </div>
                   <span className="text-[0.55rem] font-bold text-[#111827] leading-tight whitespace-pre-line">
                     {item.label}
                   </span>
                </div>
              ))}
           </div>

           <div className="px-5 pb-5">
             <button className="w-full bg-[#1e40af] text-white font-bold text-[0.75rem] py-3 rounded-lg shadow-sm">
               {consultantData.buttonText}
             </button>
           </div>
        </motion.div>

      </div>
    </div>
  )
}
