import { motion } from 'framer-motion'
import { Container } from '../../components/layout'
import { brokerData, consultantData } from "./data"

export default function DesktopEnable() {
  return (
    <div className="w-full bg-[#f8fafc] pt-16 pb-12 overflow-hidden border-t border-[#e5e7eb]">
      <Container>
        
        {/* Header */}
        <div className="mb-10 text-left">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-block px-3 py-1 rounded-full bg-[#e0e7ff] text-[#3730a3] text-[0.65rem] font-bold tracking-widest uppercase mb-4">
              FOR GROWTH PARTNERS
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-[3rem] font-black text-[#111827] leading-none tracking-tight mb-4"
          >
            Enable <span className="text-[#2563eb]">Growth.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-[0.95rem] text-[#4b5563] font-medium leading-relaxed max-w-lg"
          >
            Share expertise. Build credibility.<br/>
            Connect the right opportunities.
          </motion.p>
        </div>

        {/* 2-Card Grid */}
        <div className="flex items-stretch gap-6">
          
          {/* Brokers Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="flex-1 bg-white border border-[#e5e7eb] rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow flex flex-col relative group"
          >
             <div className="p-8 pb-6 flex flex-col flex-1">
                <div className="flex items-start gap-4 mb-5">
                   <div className="w-14 h-14 rounded-full bg-[#eff6ff] flex items-center justify-center shrink-0 border border-[#bfdbfe]">
                      <brokerData.icon size={26} className="text-[#2563eb]" strokeWidth={1.5} />
                   </div>
                   <div>
                      <h3 className="text-[1.3rem] font-black text-[#111827] leading-[1.1] whitespace-pre-line mb-1">
                        {brokerData.title}
                      </h3>
                      <h4 className="text-[0.8rem] font-bold text-[#2563eb] mb-3">{brokerData.subtitle}</h4>
                   </div>
                </div>
                <p className="text-[0.8rem] text-[#4b5563] font-medium leading-relaxed mb-6">
                  {brokerData.desc}
                </p>
             </div>
             
             {/* Image span */}
             <div className="w-full h-44 overflow-hidden border-y border-[#e5e7eb]">
               <img 
                 src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" 
                 alt="Broker working on tablet" 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
               />
             </div>

             {/* Icons Grid */}
             <div className="flex items-center justify-between px-8 py-6 bg-white">
                {brokerData.items.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center gap-2">
                     <div className="w-10 h-10 rounded-full border border-[#e5e7eb] flex items-center justify-center text-[#2563eb]">
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
               <button className="w-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white font-bold text-[0.85rem] py-3.5 rounded-lg shadow-md transition-colors">
                 {brokerData.buttonText}
               </button>
             </div>
          </motion.div>

          {/* Consultants Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1 bg-white border border-[#e5e7eb] rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow flex flex-col relative group"
          >
             <div className="p-8 pb-6 flex flex-col flex-1">
                <div className="flex items-start gap-4 mb-5">
                   <div className="w-14 h-14 rounded-full bg-[#eff6ff] flex items-center justify-center shrink-0 border border-[#bfdbfe]">
                      <consultantData.icon size={26} className="text-[#2563eb]" strokeWidth={1.5} />
                   </div>
                   <div>
                      <h3 className="text-[1.3rem] font-black text-[#111827] leading-[1.1] whitespace-pre-line mb-1">
                        {consultantData.title}
                      </h3>
                      <h4 className="text-[0.8rem] font-bold text-[#2563eb] mb-3 whitespace-pre-line leading-snug">{consultantData.subtitle}</h4>
                   </div>
                </div>
                <p className="text-[0.8rem] text-[#4b5563] font-medium leading-relaxed mb-6">
                  {consultantData.desc}
                </p>
             </div>
             
             {/* Image span */}
             <div className="w-full h-44 overflow-hidden border-y border-[#e5e7eb]">
               <img 
                 src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=800&auto=format&fit=crop" 
                 alt="Chess pieces" 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
               />
             </div>

             {/* Icons Grid */}
             <div className="flex items-center justify-between px-8 py-6 bg-white">
                {consultantData.items.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center gap-2">
                     <div className="w-10 h-10 rounded-full border border-[#e5e7eb] flex items-center justify-center text-[#2563eb]">
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
               <button className="w-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white font-bold text-[0.85rem] py-3.5 rounded-lg shadow-md transition-colors">
                 {consultantData.buttonText}
               </button>
             </div>
          </motion.div>

        </div>
      </Container>
    </div>
  )
}
