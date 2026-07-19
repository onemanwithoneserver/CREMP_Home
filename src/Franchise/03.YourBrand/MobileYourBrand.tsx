import { motion } from 'framer-motion'
import { brandData } from './data'
import { Store, MapPin, Users, Star, PlayCircle, Search } from 'lucide-react'

export default function MobileYourBrand() {
  return (
    <div className="w-full bg-gray-50 dark:bg-[#050C17] pt-12 pb-12 px-5 overflow-hidden relative">
      
      {/* Background radial gradient */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#B27F1C] dark:from-[#F6B23B]/5 via-transparent to-transparent pointer-events-none" />

      {/* Header Area */}
      <motion.div 
         initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      >
         <span className="text-[0.65rem] font-bold text-[#C79A17] tracking-widest uppercase mb-3 block">
           {brandData.tag}
         </span>
      </motion.div>
      
      <motion.h2 
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
        className="text-[2.5rem] font-black leading-[1.1] tracking-tight mb-5"
      >
        <span className="text-[#0f172a] dark:text-white block">{brandData.titleBase}</span>
        <span className="text-[#d97706] dark:text-[#F6B23B] block">{brandData.titleHighlight}</span>
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
        className="mb-10 flex flex-col gap-3"
      >
        <p className="text-[0.9rem] text-gray-600 dark:text-gray-400 font-medium">{brandData.desc[0]}</p>
        
        <div className="flex flex-col gap-1.5 my-2">
          <p className="text-[1rem] text-[#0f172a] dark:text-white font-black">{brandData.desc[1]}</p>
          <p className="text-[1rem] text-[#0f172a] dark:text-white font-black">{brandData.desc[2]}</p>
          <p className="text-[1rem] text-[#0f172a] dark:text-white font-black">{brandData.desc[3]}</p>
        </div>

        <p className="text-[0.9rem] text-gray-600 dark:text-gray-400 font-medium leading-relaxed">{brandData.desc[4]}</p>
      </motion.div>

      {/* Vertical Showcase Menu */}
      <motion.div 
         initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
         className="bg-white dark:bg-[#0C1525] rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-gray-100 dark:border-gray-800 p-6 mb-10"
      >
         <span className="text-[0.65rem] font-bold text-[#d97706] dark:text-[#F6B23B] tracking-widest uppercase mb-5 block border-b border-[#d97706]/20 pb-2 w-fit">
           SHOWCASE
         </span>
         
         <div className="flex flex-col gap-4">
            {brandData.showcaseMenu.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-[#FDF8EE] dark:bg-gray-800 flex items-center justify-center shrink-0 border border-[#d97706]/10 text-[#0f172a] dark:text-gray-300 shadow-[0_2px_10px_rgba(217,119,6,0.05)]">
                   <item.icon size={14} strokeWidth={1.5} />
                 </div>
                 <span className="text-[0.8rem] font-bold text-[#0f172a] dark:text-gray-200">
                   {item.text}
                 </span>
              </div>
            ))}
         </div>
      </motion.div>

      {/* Tablet Mockup */}
      <motion.div 
         initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4 }}
         className="w-full relative mb-12"
      >
         <div className="w-full bg-[#0f172a] dark:bg-[#000000] rounded-3xl p-3 shadow-xl relative border-[6px] border-[#0f172a] dark:border-[#1a1a1a]">
            <div className="w-full bg-white dark:bg-[#0C1525] rounded-xl overflow-hidden flex flex-col">
               
               <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-1.5">
                     <div className="w-5 h-5 rounded bg-[#FDF8EE] flex items-center justify-center border border-[#d97706]/20 text-[#d97706]">
                        <Store size={12} />
                     </div>
                     <span className="font-black text-[#0f172a] dark:text-white text-[0.65rem] tracking-wide">YOUR BRAND</span>
                  </div>
                  <div className="flex items-center gap-3 text-[0.5rem] font-bold text-gray-500 dark:text-gray-400">
                     <span className="text-[#0f172a] dark:text-white border-b-2 border-[#0f172a] dark:border-white pb-0.5">Overview</span>
                     <span>Videos</span>
                  </div>
               </div>

               <div className="w-full h-[160px] relative">
                  <img src="https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Store" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex flex-col justify-center px-4">
                     <h3 className="text-white text-[0.9rem] font-medium leading-tight mb-3">
                       Building a brand.<br/>
                       Creating opportunities.<br/>
                       Expanding together.
                     </h3>
                     <button className="flex items-center gap-1.5 text-white bg-transparent w-fit px-3 py-1.5 rounded-full border border-white/40">
                       <div className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center">
                         <PlayCircle size={10} className="fill-black" />
                       </div>
                       <span className="text-[0.6rem] font-bold">Watch Story</span>
                     </button>
                  </div>
               </div>

               <div className="grid grid-cols-2 gap-y-3 px-4 py-4 border-b border-gray-100 dark:border-gray-800 bg-[#fefcf8] dark:bg-transparent">
                  <div className="flex flex-col gap-0.5">
                     <div className="flex items-center gap-2">
                        <Store className="text-[#0f172a] dark:text-gray-400" size={12} />
                        <div className="font-black text-[#0f172a] dark:text-white text-sm leading-tight">150+</div>
                     </div>
                     <div className="text-[0.55rem] font-bold text-gray-500 uppercase">Outlets</div>
                  </div>
                  <div className="flex flex-col gap-0.5">
                     <div className="flex items-center gap-2">
                        <MapPin className="text-[#0f172a] dark:text-gray-400" size={12} />
                        <div className="font-black text-[#0f172a] dark:text-white text-sm leading-tight">45+</div>
                     </div>
                     <div className="text-[0.55rem] font-bold text-gray-500 uppercase">Cities</div>
                  </div>
                  <div className="flex flex-col gap-0.5">
                     <div className="flex items-center gap-2">
                        <Users className="text-[#0f172a] dark:text-gray-400" size={12} />
                        <div className="font-black text-[#0f172a] dark:text-white text-sm leading-tight">10K+</div>
                     </div>
                     <div className="text-[0.55rem] font-bold text-gray-500 uppercase">Investors Engaged</div>
                  </div>
                  <div className="flex flex-col gap-0.5">
                     <div className="flex items-center gap-2">
                        <Star className="text-[#d97706] dark:text-[#F6B23B] fill-[#d97706]" size={12} />
                        <div className="font-black text-[#0f172a] dark:text-white text-sm leading-tight">4.8/5</div>
                     </div>
                     <div className="text-[0.55rem] font-bold text-gray-500 uppercase">Rating</div>
                  </div>
               </div>

               <div className="p-4 bg-white dark:bg-[#050C17]">
                  <div className="flex items-center justify-between mb-3">
                     <span className="font-black text-[#0f172a] dark:text-white text-[0.7rem]">Featured Videos</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                     <div className="flex flex-col gap-1.5">
                        <div className="w-full h-16 bg-gray-200 rounded relative overflow-hidden shadow-sm">
                           <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" />
                           <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-6 h-6 rounded-full bg-white/90 flex items-center justify-center shadow-md">
                                <PlayCircle size={12} className="text-[#0f172a] fill-[#0f172a]" />
                              </div>
                           </div>
                           <span className="absolute bottom-1 right-1 text-[0.5rem] font-bold text-white bg-black/70 px-1 rounded">2:45</span>
                        </div>
                        <span className="text-[0.6rem] font-bold text-[#0f172a] dark:text-white">Founder Story</span>
                     </div>
                     <div className="flex flex-col gap-1.5">
                        <div className="w-full h-16 bg-[#0f172a] dark:bg-[#0C1525] rounded flex flex-col items-center justify-center text-white shadow-sm">
                           <div className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center mb-0.5 bg-white/10">
                             <Search size={10} className="text-white fill-transparent" />
                           </div>
                           <span className="text-[0.5rem] font-bold">Video Search</span>
                        </div>
                        <span className="text-[0.6rem] font-bold text-[#0f172a] dark:text-white flex items-center gap-1">Video Search <span className="text-xs leading-none">›</span></span>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </motion.div>

      {/* Bottom Outcome Banner */}
      <motion.div 
         initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}
         className="w-full bg-[#fdfaf5] dark:bg-gray-800 rounded-2xl p-5 flex flex-col items-center text-center gap-4 shadow-sm relative overflow-hidden"
      >
         <div className="absolute right-0 bottom-0 opacity-[0.15] dark:opacity-20 pointer-events-none w-2/3">
           <svg viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M0 80 L 150 50 L 250 60 L 380 10" stroke="#d97706" strokeWidth="3" fill="none"/>
             <path d="M370 10 L 380 10 L 380 20" stroke="#d97706" strokeWidth="3" fill="none"/>
             <rect x="250" y="70" width="10" height="30" stroke="#d97706" strokeWidth="2"/>
             <rect x="270" y="60" width="10" height="40" stroke="#d97706" strokeWidth="2"/>
             <rect x="290" y="45" width="10" height="55" stroke="#d97706" strokeWidth="2"/>
             <circle cx="340" cy="45" r="10" stroke="#d97706" strokeWidth="2"/>
             <path d="M320 80 Q 340 60 360 80" stroke="#d97706" strokeWidth="2" fill="none"/>
             <circle cx="370" cy="55" r="8" stroke="#d97706" strokeWidth="2"/>
             <path d="M355 90 Q 370 75 385 90" stroke="#d97706" strokeWidth="2" fill="none"/>
           </svg>
         </div>
         
         <div className="w-[60px] h-[60px] rounded-full bg-[#0f172a] dark:bg-gray-900 flex items-center justify-center z-10 shadow-lg border border-[#0f172a]">
            <brandData.outcome.icon size={24} stroke="#d97706" fill="transparent" strokeWidth={1.5} />
         </div>
         
         <div className="flex flex-col z-10">
            <span className="text-[0.65rem] font-bold text-[#d97706] tracking-widest uppercase mb-1.5">
              {brandData.outcome.tag}
            </span>
            <h3 className="text-xl font-black text-[#0f172a] dark:text-white leading-tight">
              {brandData.outcome.text}
            </h3>
         </div>
      </motion.div>
      
    </div>
  )
}
