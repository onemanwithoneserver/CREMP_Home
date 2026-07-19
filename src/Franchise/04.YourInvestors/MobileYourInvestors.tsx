import { motion } from 'framer-motion'
import { investorData } from './data'
import { Filter, Target, CheckCircle2 } from 'lucide-react'

export default function MobileYourInvestors() {
  return (
    <div className="w-full bg-gray-50 dark:bg-[#050C17] pt-12 pb-12 px-5 overflow-hidden relative">
      
      {/* Header Area */}
      <motion.div 
         initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
         className="flex items-center gap-2 mb-4"
      >
         <div className="w-4 h-[2px] bg-[#B27F1C] dark:bg-[#F6B23B]" />
         <span className="text-[0.55rem] font-bold text-[#C79A17] tracking-widest uppercase">
           {investorData.tag}
         </span>
      </motion.div>
      
      <motion.h2 
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
        className="text-[2.2rem] font-black leading-[1.1] tracking-tight mb-5"
      >
        <span className="text-gray-900 dark:text-white block">{investorData.titleBase}</span>
        <span className="text-[#B27F1C] dark:text-[#F6B23B] block">{investorData.titleHighlight}</span>
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
        className="flex flex-col gap-4 mb-10"
      >
        <p className="text-[0.95rem] text-gray-600 dark:text-gray-400 font-medium leading-relaxed">{investorData.desc[0]}</p>
        <p className="text-[0.95rem] text-gray-900 dark:text-white font-bold leading-relaxed">{investorData.desc[1]}</p>
      </motion.div>

      {/* Image & Pills Section */}
      <div className="w-full relative h-[400px] mb-12 flex items-center">
         <motion.div 
           initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
           className="absolute inset-0 right-10 rounded-2xl overflow-hidden shadow-lg border border-[#E2E6EE]"
         >
           <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover object-[center_30%]" alt="Professional at laptop" />
           <div className="absolute inset-0 bg-black/20" />
           
           <div className="absolute top-1/2 left-[45%] -translate-x-1/2 -translate-y-1/2 w-48 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-3 border border-[#E2E6EE] scale-110">
              <div className="flex items-center justify-between mb-2 border-b border-[#E2E6EE] pb-2">
                 <span className="font-bold text-gray-900 dark:text-white text-[0.55rem]">Investor Enquiry</span>
                 <span className="bg-[#166534] text-gray-900 dark:text-white text-[0.45rem] font-bold px-1.5 py-0.5 rounded shadow-sm">High Match</span>
              </div>
              
              <div className="flex gap-2 items-center">
                 <div className="flex flex-col items-center shrink-0">
                    <span className="text-[0.45rem] font-bold text-gray-500 dark:text-gray-400 mb-1">Score</span>
                    <div className="w-10 h-10 rounded-full border-[3px] border-[#E2E6EE] border-t-[#166534] border-r-[#166534] border-b-[#166534] flex items-center justify-center rotate-45 relative">
                       <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center -rotate-45">
                          <span className="text-[#166534] font-black text-xs">92%</span>
                       </div>
                    </div>
                 </div>
                 <div className="flex flex-col flex-1 pl-1">
                    <div className="flex flex-col gap-1">
                       <div className="flex items-center gap-1 text-[0.45rem] font-bold text-gray-900 dark:text-white">
                          <CheckCircle2 size={8} className="text-[#166534]" /> Budget
                       </div>
                       <div className="flex items-center gap-1 text-[0.45rem] font-bold text-gray-900 dark:text-white">
                          <CheckCircle2 size={8} className="text-[#166534]" /> Experience
                       </div>
                       <div className="flex items-center gap-1 text-[0.45rem] font-bold text-gray-900 dark:text-white">
                          <CheckCircle2 size={8} className="text-[#166534]" /> Involvement
                       </div>
                    </div>
                 </div>
              </div>
           </div>
         </motion.div>

         <motion.div 
           initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
           className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-[#E2E6EE] p-3 flex flex-col gap-3 z-20"
         >
            {investorData.pills.map((pill, idx) => (
              <div key={idx} className="flex items-center gap-2">
                 <div className="w-6 h-6 rounded-full bg-[rgba(199, 154, 23, 0.05)] flex items-center justify-center shrink-0 border border-[rgba(199, 154, 23, 0.15)] text-[#B27F1C] dark:text-[#F6B23B]">
                   <pill.icon size={10} strokeWidth={2} />
                 </div>
                 <span className="text-[0.6rem] font-bold text-gray-600 dark:text-gray-400 whitespace-nowrap pr-1">
                   {pill.label}
                 </span>
              </div>
            ))}
         </motion.div>
      </div>

      {/* Grid Section */}
      <div className="w-full bg-[rgba(199, 154, 23, 0.05)] rounded-2xl border border-[rgba(199, 154, 23, 0.15)] p-5 shadow-sm mb-6">
         <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-white dark:bg-[#0C1525] flex items-center justify-center text-gray-900 dark:text-white shrink-0 shadow-md">
               <Filter size={16} strokeWidth={2} />
            </div>
            <h3 className="text-xl font-black text-gray-900 dark:text-white leading-tight">
              {investorData.expectationsTitle}
            </h3>
         </div>

         <div className="flex flex-col gap-6">
            {investorData.expectations.map((item, idx) => (
              <div key={idx} className="flex gap-3">
                 <div className="flex flex-col items-center shrink-0">
                    <div className="w-5 h-5 rounded-full bg-[#B27F1C] dark:bg-[#F6B23B] text-gray-900 dark:text-white flex items-center justify-center text-[0.55rem] font-bold mb-1.5">
                       {idx + 1}
                    </div>
                    {idx < investorData.expectations.length - 1 && (
                      <div className="w-[1.5px] h-full bg-[#E2E6EE]" />
                    )}
                 </div>
                 <div className="flex flex-col pb-2">
                    <div className="flex items-center gap-2 mb-1">
                       <item.icon size={16} className="text-gray-900 dark:text-white" strokeWidth={1.5} />
                       <span className="font-bold text-gray-900 dark:text-white text-[0.85rem]">{item.title}</span>
                    </div>
                    <p className="text-[0.7rem] text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                       {item.desc}
                    </p>
                 </div>
              </div>
            ))}
         </div>
      </div>

      {/* Outcome Section */}
      <motion.div 
         initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
         className="w-full p-6 bg-[#fcf9f2] rounded-2xl border border-[#E2E6EE] relative flex flex-col justify-center items-center text-center shadow-sm"
      >
         <div className="absolute top-2 right-2 grid grid-cols-3 gap-1.5 opacity-20">
            {[...Array(9)].map((_, i) => <div key={i} className="w-1 h-1 rounded-full bg-[#B27F1C] dark:bg-[#F6B23B]" />)}
         </div>

         <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-white dark:bg-[#0C1525] flex items-center justify-center text-gray-900 dark:text-white shrink-0 shadow-md">
               <Target size={14} strokeWidth={2} />
            </div>
            <div className="flex items-center gap-1.5">
               <span className="text-[0.6rem] font-bold text-[#B27F1C] dark:text-[#F6B23B] tracking-widest uppercase">
                 {investorData.outcome.tag}
               </span>
               <div className="w-4 h-[2px] bg-[#B27F1C] dark:bg-[#F6B23B]" />
            </div>
         </div>

         <h3 className="text-[1.3rem] font-black text-gray-900 dark:text-white leading-[1.2] mb-8">
           {investorData.outcome.title}
         </h3>

         <div className="relative h-32 w-full flex items-center justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-10 rounded-[100%] border-[5px] border-[#B27F1C] dark:border-[#F6B23B] shadow-xl bg-[#b45309]/10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-6 rounded-[100%] border-[4px] border-[#f59e0b] shadow-xl bg-[#B27F1C] dark:bg-[#F6B23B]/20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-3 rounded-[100%] border-[3px] border-yellow-500 dark:border-yellow-400 shadow-xl bg-[#f59e0b]/30" />
            
            <div className="absolute bottom-[35%] left-1/2 -translate-x-1/2 z-20">
               <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#B27F1C] dark:from-[#F6B23B] to-[#B27F1C] dark:to-[#FFD17A] shadow-lg mx-auto mb-0.5" />
               <div className="w-9 h-12 rounded-t-xl bg-gradient-to-tr from-[#B27F1C] dark:from-[#F6B23B] to-[#B27F1C] dark:to-[#FFD17A] shadow-lg" />
            </div>

            <div className="absolute bottom-[20%] left-[10%] opacity-60 scale-75">
               <div className="w-4 h-4 rounded-full bg-slate-500 shadow mx-auto mb-0.5" />
               <div className="w-7 h-10 rounded-t-xl bg-slate-500 shadow" />
            </div>
            <div className="absolute bottom-[20%] right-[10%] opacity-60 scale-75">
               <div className="w-4 h-4 rounded-full bg-slate-500 shadow mx-auto mb-0.5" />
               <div className="w-7 h-10 rounded-t-xl bg-slate-500 shadow" />
            </div>
         </div>

      </motion.div>
      
    </div>
  )
}
