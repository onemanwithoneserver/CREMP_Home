import { motion } from 'framer-motion'
import { Container } from '../../components/layout'
import { investorData } from './data'
import { Filter, Target, CheckCircle2 } from 'lucide-react'

export default function DesktopYourInvestors() {
  return (
    <div className="w-full bg-[#ffffff] pt-20 pb-20 overflow-hidden relative">
      <Container className="relative z-10">
        
        {/* Top Section */}
        <div className="flex items-center justify-between mb-12">
          
          {/* Left Column (Text) */}
          <div className="w-[35%] flex flex-col pt-4">
            <motion.div 
               initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
               className="flex items-center gap-2 mb-6"
            >
               <div className="w-6 h-[2px] bg-[#d97706]" />
               <span className="text-[0.65rem] font-bold text-[#C79A17] tracking-widest uppercase">
                 {investorData.tag}
               </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-[3.2rem] font-black leading-[1.1] tracking-tight mb-8"
            >
              <span className="text-[#2A3A69] block">{investorData.titleBase}</span>
              <span className="text-[#d97706] block">{investorData.titleHighlight}</span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <p className="text-[1.1rem] text-[#3A4566] font-medium leading-relaxed">{investorData.desc[0]}</p>
              <p className="text-[1.1rem] text-[#2A3A69] font-bold leading-relaxed max-w-sm">{investorData.desc[1]}</p>
            </motion.div>
          </div>

          {/* Right Column (Image + Pills) */}
          <div className="w-[60%] relative h-[450px]">
             
             {/* Large Main Image */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
               className="absolute inset-0 right-32 rounded-3xl overflow-hidden shadow-2xl"
             >
               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover object-[center_20%]" alt="Professional at laptop" />
               <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/30" />
               
               {/* Floating UI on Image */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 bg-white rounded-xl shadow-2xl p-5 border border-[#E2E6EE] scale-110">
                  <div className="flex items-center justify-between mb-4 border-b border-[#E2E6EE] pb-3">
                     <span className="font-bold text-[#2A3A69] text-sm">Qualified Investor Enquiry</span>
                     <span className="bg-[#166534] text-white text-[0.6rem] font-bold px-2 py-1 rounded shadow-sm">★ High Match</span>
                  </div>
                  
                  <div className="flex gap-6">
                     <div className="flex flex-col items-center">
                        <span className="text-[0.6rem] font-bold text-[#6B7491] mb-2">Match Score</span>
                        {/* Circular Progress */}
                        <div className="w-16 h-16 rounded-full border-4 border-[#E2E6EE] border-t-[#166534] border-r-[#166534] border-b-[#166534] flex items-center justify-center rotate-45 relative">
                           <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center -rotate-45">
                              <span className="text-[#166534] font-black text-lg">92%</span>
                           </div>
                        </div>
                     </div>
                     <div className="flex flex-col flex-1">
                        <span className="text-[0.6rem] font-bold text-[#6B7491] mb-2">Key Highlights</span>
                        <div className="flex flex-col gap-1.5">
                           <div className="flex items-center gap-1.5 text-[0.65rem] font-bold text-[#2A3A69]">
                              <CheckCircle2 size={12} className="text-[#166534]" /> Budget Match
                           </div>
                           <div className="flex items-center gap-1.5 text-[0.65rem] font-bold text-[#2A3A69]">
                              <CheckCircle2 size={12} className="text-[#166534]" /> Experience Match
                           </div>
                           <div className="flex items-center gap-1.5 text-[0.65rem] font-bold text-[#2A3A69]">
                              <CheckCircle2 size={12} className="text-[#166534]" /> Involvement Match
                           </div>
                           <div className="flex items-center gap-1.5 text-[0.65rem] font-bold text-[#2A3A69]">
                              <CheckCircle2 size={12} className="text-[#166534]" /> Goals Alignment
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
             </motion.div>

             {/* Right Floating Pills List */}
             <motion.div 
               initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
               className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-[#E2E6EE] p-4 flex flex-col gap-4 z-20"
             >
                {investorData.pills.map((pill, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-[rgba(199, 154, 23, 0.05)] flex items-center justify-center shrink-0 border border-[rgba(199, 154, 23, 0.15)] text-[#d97706]">
                       <pill.icon size={14} strokeWidth={2} />
                     </div>
                     <span className="text-[0.75rem] font-bold text-[#3A4566] whitespace-nowrap pr-2">
                       {pill.label}
                     </span>
                  </div>
                ))}
             </motion.div>

          </div>
        </div>

        {/* Bottom Split Section */}
        <div className="w-full bg-[rgba(199, 154, 23, 0.05)] rounded-[2rem] border border-[rgba(199, 154, 23, 0.15)] flex overflow-hidden shadow-sm relative">
           
           {/* Left Half (Grid) */}
           <div className="w-[65%] p-10 pr-16 bg-[#fcf9f2]">
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-12 rounded-full bg-[#2A3A69] flex items-center justify-center text-white shrink-0 shadow-md">
                    <Filter size={20} strokeWidth={2} />
                 </div>
                 <h3 className="text-2xl font-black text-[#2A3A69]">
                   {investorData.expectationsTitle}
                 </h3>
              </div>

              <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                 {investorData.expectations.map((item, idx) => (
                   <div key={idx} className="flex gap-4">
                      <div className="flex flex-col items-center shrink-0">
                         <div className="w-6 h-6 rounded-full bg-[#d97706] text-white flex items-center justify-center text-[0.6rem] font-bold mb-2">
                            {idx + 1}
                         </div>
                         <div className="w-[2px] h-10 bg-[#E2E6EE]" />
                      </div>
                      <div className="flex flex-col pt-0.5">
                         <div className="flex items-center gap-2 mb-2">
                            <item.icon size={20} className="text-[#2A3A69]" strokeWidth={1.5} />
                            <span className="font-bold text-[#2A3A69] text-[0.95rem]">{item.title}</span>
                         </div>
                         <p className="text-[0.75rem] text-[#6B7491] font-medium leading-relaxed">
                            {item.desc}
                         </p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           {/* Divider Line */}
           <div className="absolute left-[65%] top-10 bottom-10 w-[1px] bg-gradient-to-b from-transparent via-[#d97706]/30 to-transparent flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white border border-[#d97706]" />
           </div>

           {/* Right Half (Outcome) */}
           <div className="w-[35%] p-10 bg-[#ffffff] relative flex flex-col justify-center">
              {/* Dots background pattern */}
              <div className="absolute top-4 right-4 grid grid-cols-4 gap-2 opacity-20">
                 {[...Array(16)].map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#d97706]" />)}
              </div>

              <motion.div 
                 initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
              >
                 <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#2A3A69] flex items-center justify-center text-white shrink-0 shadow-md">
                       <Target size={20} strokeWidth={2} />
                    </div>
                    <div className="flex items-center gap-2">
                       <span className="text-[0.7rem] font-bold text-[#d97706] tracking-widest uppercase">
                         {investorData.outcome.tag}
                       </span>
                       <div className="w-8 h-[2px] bg-[#d97706]" />
                    </div>
                 </div>

                 <h3 className="text-[1.8rem] font-black text-[#2A3A69] leading-[1.1] mb-10">
                   {investorData.outcome.title}
                 </h3>

                 {/* 3D Graphic representation */}
                 <div className="relative h-48 w-full flex items-center justify-center">
                    {/* Golden rings */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-16 rounded-[100%] border-[8px] border-[#d97706] shadow-xl bg-[#b45309]/10" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-10 rounded-[100%] border-[6px] border-[#f59e0b] shadow-xl bg-[#d97706]/20" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-5 rounded-[100%] border-[4px] border-[#fbbf24] shadow-xl bg-[#f59e0b]/30" />
                    
                    {/* Central Gold Figure */}
                    <div className="absolute bottom-[40%] left-1/2 -translate-x-1/2 z-20">
                       <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#d97706] to-[#fbbf24] shadow-lg mx-auto mb-1" />
                       <div className="w-12 h-16 rounded-t-xl bg-gradient-to-tr from-[#d97706] to-[#fbbf24] shadow-lg" />
                    </div>

                    {/* Surrounding Gray Figures */}
                    <div className="absolute bottom-[30%] left-[10%] opacity-60 scale-75">
                       <div className="w-6 h-6 rounded-full bg-slate-500 shadow mx-auto mb-1" />
                       <div className="w-10 h-14 rounded-t-xl bg-slate-500 shadow" />
                    </div>
                    <div className="absolute bottom-[25%] left-[25%] opacity-70 scale-75">
                       <div className="w-6 h-6 rounded-full bg-slate-600 shadow mx-auto mb-1" />
                       <div className="w-10 h-14 rounded-t-xl bg-slate-600 shadow" />
                    </div>
                    <div className="absolute bottom-[25%] right-[25%] opacity-70 scale-75">
                       <div className="w-6 h-6 rounded-full bg-slate-600 shadow mx-auto mb-1" />
                       <div className="w-10 h-14 rounded-t-xl bg-slate-600 shadow" />
                    </div>
                    <div className="absolute bottom-[30%] right-[10%] opacity-60 scale-75">
                       <div className="w-6 h-6 rounded-full bg-slate-500 shadow mx-auto mb-1" />
                       <div className="w-10 h-14 rounded-t-xl bg-slate-500 shadow" />
                    </div>
                 </div>

              </motion.div>
           </div>
        </div>

      </Container>
    </div>
  )
}
