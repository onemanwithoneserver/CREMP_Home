import { motion } from 'framer-motion'
import { brandData } from './data'
import { Store, MapPin, Users, Star, PlayCircle, Search } from 'lucide-react'

export default function MobileYourBrand() {
  return (
    <div className="w-full bg-[#fdfdfd] pt-12 pb-12 px-5 overflow-hidden relative">
      
      {/* Background radial gradient */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d97706]/5 via-transparent to-transparent pointer-events-none" />

      {/* Header Area */}
      <motion.div 
         initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      >
         <span className="text-[0.65rem] font-bold text-[#b38728] tracking-widest uppercase mb-3 block">
           {brandData.tag}
         </span>
      </motion.div>
      
      <motion.h2 
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
        className="text-[2.5rem] font-black leading-[1.1] tracking-tight mb-5"
      >
        <span className="text-[#0a1128] block">{brandData.titleBase}</span>
        <span className="text-[#d97706] block">{brandData.titleHighlight}</span>
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
        className="mb-10 flex flex-col gap-3"
      >
        <p className="text-[0.9rem] text-[#4b5563] font-medium">{brandData.desc[0]}</p>
        
        <div className="flex flex-col gap-1.5 my-2">
          <p className="text-[1rem] text-[#0a1128] font-bold">{brandData.desc[1]}</p>
          <p className="text-[1rem] text-[#0a1128] font-bold">{brandData.desc[2]}</p>
          <p className="text-[1rem] text-[#0a1128] font-bold">{brandData.desc[3]}</p>
        </div>

        <p className="text-[0.9rem] text-[#4b5563] font-medium leading-relaxed">{brandData.desc[4]}</p>
      </motion.div>

      {/* Vertical Showcase Menu */}
      <motion.div 
         initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
         className="bg-white rounded-xl shadow-md border border-[#e5e7eb] p-5 mb-10"
      >
         <span className="text-[0.65rem] font-bold text-[#d97706] tracking-widest uppercase mb-5 block">
           SHOWCASE
         </span>
         
         <div className="flex flex-col gap-4">
            {brandData.showcaseMenu.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-[#fdf8f0] flex items-center justify-center shrink-0 border border-[#f6ead6] text-[#6b7280]">
                   <item.icon size={14} strokeWidth={1.5} />
                 </div>
                 <span className="text-[0.8rem] font-bold text-[#4b5563]">
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
         <div className="w-full bg-[#0a1128] rounded-[2rem] p-3 shadow-xl relative border-b-[6px] border-r-[3px] border-[#000000]">
            <div className="w-full bg-white rounded-xl overflow-hidden flex flex-col">
               
               <div className="flex items-center justify-between px-4 py-3 border-b border-[#e5e7eb]">
                  <div className="flex items-center gap-1.5">
                     <Store className="text-[#d97706]" size={14} />
                     <span className="font-black text-[#0a1128] text-[0.65rem] tracking-wide">YOUR BRAND</span>
                  </div>
                  <div className="flex items-center gap-3 text-[0.5rem] font-bold text-[#6b7280]">
                     <span className="text-[#0a1128] border-b-2 border-[#d97706] pb-0.5">Overview</span>
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
                     <button className="flex items-center gap-1.5 text-white bg-black/40 w-fit px-3 py-1.5 rounded-full border border-white/20">
                       <PlayCircle size={14} className="text-white" />
                       <span className="text-[0.6rem] font-medium">Watch Story</span>
                     </button>
                  </div>
               </div>

               <div className="grid grid-cols-2 gap-y-3 px-4 py-4 border-b border-[#e5e7eb]">
                  <div className="flex items-center gap-2">
                     <Store className="text-[#6b7280]" size={16} />
                     <div>
                        <div className="font-bold text-[#0a1128] text-sm leading-tight">150+</div>
                        <div className="text-[0.55rem] text-[#6b7280]">Outlets</div>
                     </div>
                  </div>
                  <div className="flex items-center gap-2">
                     <MapPin className="text-[#6b7280]" size={16} />
                     <div>
                        <div className="font-bold text-[#0a1128] text-sm leading-tight">45+</div>
                        <div className="text-[0.55rem] text-[#6b7280]">Cities</div>
                     </div>
                  </div>
                  <div className="flex items-center gap-2">
                     <Users className="text-[#6b7280]" size={16} />
                     <div>
                        <div className="font-bold text-[#0a1128] text-sm leading-tight">10K+</div>
                        <div className="text-[0.55rem] text-[#6b7280]">Investors Engaged</div>
                     </div>
                  </div>
                  <div className="flex items-center gap-2">
                     <Star className="text-[#d97706]" size={16} />
                     <div>
                        <div className="font-bold text-[#0a1128] text-sm leading-tight">4.8/5</div>
                        <div className="text-[0.55rem] text-[#6b7280]">Rating</div>
                     </div>
                  </div>
               </div>

               <div className="p-4 bg-[#fdfdfd]">
                  <div className="flex items-center justify-between mb-3">
                     <span className="font-bold text-[#0a1128] text-[0.7rem]">Featured Videos</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                     <div className="flex flex-col gap-1.5">
                        <div className="w-full h-16 bg-gray-200 rounded relative overflow-hidden">
                           <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" />
                           <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                              <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center">
                                <PlayCircle size={12} className="text-white" />
                              </div>
                           </div>
                           <span className="absolute bottom-1 right-1 text-[0.5rem] text-white bg-black/60 px-1 rounded">2:45</span>
                        </div>
                        <span className="text-[0.6rem] font-bold text-[#0a1128]">Founder Story</span>
                     </div>
                     <div className="flex flex-col gap-1.5">
                        <div className="w-full h-16 bg-[#0a1128] rounded flex flex-col items-center justify-center text-white">
                           <div className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center mb-0.5">
                             <Search size={10} />
                           </div>
                           <span className="text-[0.5rem] font-medium">Video Search</span>
                        </div>
                        <span className="text-[0.6rem] font-bold text-[#0a1128]">Video Search {'>'}</span>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </motion.div>

      {/* Bottom Outcome Banner */}
      <motion.div 
         initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}
         className="w-full bg-[#fdf8f0] rounded-2xl border border-[#f6ead6] p-5 flex flex-col items-center text-center gap-4 shadow-sm relative overflow-hidden"
      >
         <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none w-1/2">
           <svg viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M0 100 V 80 Q 50 80, 100 50 T 200 40 T 300 10 T 400 0 V 100 Z" fill="#d97706"/>
             <path d="M0 80 Q 50 80, 100 50 T 200 40 T 300 10 T 400 0" stroke="#d97706" strokeWidth="4" fill="none"/>
           </svg>
         </div>
         
         <div className="w-14 h-14 rounded-full bg-[#0a1128] flex items-center justify-center z-10 shadow-md">
            <brandData.outcome.icon size={24} className="text-[#d97706]" strokeWidth={1.5} />
         </div>
         
         <div className="flex flex-col z-10">
            <span className="text-[0.6rem] font-bold text-[#d97706] tracking-widest uppercase mb-1.5">
              {brandData.outcome.tag}
            </span>
            <h3 className="text-xl font-black text-[#0a1128] leading-tight">
              {brandData.outcome.text}
            </h3>
         </div>
      </motion.div>
      
    </div>
  )
}
