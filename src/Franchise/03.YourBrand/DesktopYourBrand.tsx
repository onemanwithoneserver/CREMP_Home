import { motion } from 'framer-motion'
import { Container } from '../../components/layout'
import { brandData } from './data'
import { Store, MapPin, Users, Star, PlayCircle, Search } from 'lucide-react'

export default function DesktopYourBrand() {
  return (
    <div className="w-full bg-[#fdfdfd] pt-20 pb-20 overflow-hidden relative">
      
      {/* Background radial gradient */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d97706]/5 via-transparent to-transparent pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex items-start justify-between gap-12 mb-16">
          
          {/* Left Column (Text & Vertical Menu) */}
          <div className="w-[38%] flex flex-col pt-4">
            <motion.div 
               initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            >
               <span className="text-[0.7rem] font-bold text-[#b38728] tracking-widest uppercase mb-4 block">
                 {brandData.tag}
               </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-[3.8rem] font-black leading-[1.1] tracking-tight mb-8"
            >
              <span className="text-[#0a1128] block">{brandData.titleBase}</span>
              <span className="text-[#d97706] block">{brandData.titleHighlight}</span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="mb-12 flex flex-col gap-4"
            >
              <p className="text-[1.05rem] text-[#4b5563] font-medium">{brandData.desc[0]}</p>
              
              <div className="flex flex-col gap-2 my-2">
                <p className="text-[1.1rem] text-[#0a1128] font-bold">{brandData.desc[1]}</p>
                <p className="text-[1.1rem] text-[#0a1128] font-bold">{brandData.desc[2]}</p>
                <p className="text-[1.1rem] text-[#0a1128] font-bold">{brandData.desc[3]}</p>
              </div>

              <p className="text-[1.05rem] text-[#4b5563] font-medium leading-relaxed mt-2">{brandData.desc[4]}</p>
            </motion.div>
          </div>

          {/* Middle Column (Vertical Showcase Menu) */}
          <div className="w-[20%] pt-16">
             <motion.div 
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-2xl shadow-xl border border-[#e5e7eb] p-6 pr-8"
             >
                <span className="text-[0.75rem] font-bold text-[#d97706] tracking-widest uppercase mb-6 block">
                  SHOWCASE
                </span>
                
                <div className="flex flex-col gap-5">
                   {brandData.showcaseMenu.map((item, idx) => (
                     <div key={idx} className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-10 h-10 rounded-full bg-[#fdf8f0] flex items-center justify-center shrink-0 border border-[#f6ead6] group-hover:bg-[#d97706] group-hover:text-white transition-colors text-[#6b7280]">
                          <item.icon size={18} strokeWidth={1.5} />
                        </div>
                        <span className="text-[0.85rem] font-bold text-[#4b5563] group-hover:text-[#0a1128] transition-colors whitespace-nowrap">
                          {item.text}
                        </span>
                     </div>
                   ))}
                </div>
             </motion.div>
          </div>

          {/* Right Column (Tablet Mockup) */}
          <div className="w-[50%] flex justify-end">
             <motion.div 
               initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
               className="w-[120%] max-w-[700px] mr-[-100px] relative mt-10"
             >
                {/* Tablet Frame */}
                <div className="w-full bg-[#0a1128] rounded-[2.5rem] p-4 shadow-2xl relative border-b-[8px] border-r-[4px] border-[#000000]">
                   {/* Tablet Screen */}
                   <div className="w-full bg-white rounded-2xl overflow-hidden flex flex-col h-[520px]">
                      
                      {/* Tablet Header */}
                      <div className="flex items-center justify-between px-6 py-4 border-b border-[#e5e7eb]">
                         <div className="flex items-center gap-2">
                            <Store className="text-[#d97706]" size={18} />
                            <span className="font-black text-[#0a1128] text-sm tracking-wide">YOUR BRAND</span>
                         </div>
                         <div className="flex items-center gap-6 text-[0.65rem] font-bold text-[#6b7280]">
                            <span className="text-[#0a1128] border-b-2 border-[#d97706] pb-1">Overview</span>
                            <span>About Us</span>
                            <span>Investor Info</span>
                            <span>FAQs</span>
                            <span>Videos</span>
                         </div>
                      </div>

                      {/* Tablet Hero Image */}
                      <div className="w-full h-[220px] relative">
                         <img src="https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover" alt="Store" />
                         <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex flex-col justify-center px-8">
                            <h3 className="text-white text-xl font-medium mb-1">Building a brand.</h3>
                            <h3 className="text-white text-xl font-medium mb-1">Creating opportunities.</h3>
                            <h3 className="text-white text-xl font-medium mb-4">Expanding together.</h3>
                            
                            <button className="flex items-center gap-2 text-white bg-black/40 hover:bg-black/60 w-fit px-4 py-2 rounded-full backdrop-blur-md transition-colors border border-white/20">
                              <PlayCircle size={18} className="text-white" />
                              <span className="text-[0.7rem] font-medium">Watch Our Story</span>
                            </button>
                         </div>
                         <div className="absolute top-6 right-8 bg-[#0a1128] px-6 py-2 rounded">
                            <span className="text-white font-black tracking-widest text-sm">YOUR BRAND</span>
                         </div>
                      </div>

                      {/* Tablet Stats */}
                      <div className="flex items-center justify-between px-8 py-5 border-b border-[#e5e7eb]">
                         <div className="flex items-center gap-3">
                            <Store className="text-[#6b7280]" size={20} />
                            <div>
                               <div className="font-bold text-[#0a1128] text-lg leading-tight">150+</div>
                               <div className="text-[0.6rem] text-[#6b7280]">Outlets</div>
                            </div>
                         </div>
                         <div className="flex items-center gap-3">
                            <MapPin className="text-[#6b7280]" size={20} />
                            <div>
                               <div className="font-bold text-[#0a1128] text-lg leading-tight">45+</div>
                               <div className="text-[0.6rem] text-[#6b7280]">Cities</div>
                            </div>
                         </div>
                         <div className="flex items-center gap-3">
                            <Users className="text-[#6b7280]" size={20} />
                            <div>
                               <div className="font-bold text-[#0a1128] text-lg leading-tight">10K+</div>
                               <div className="text-[0.6rem] text-[#6b7280]">Investors Engaged</div>
                            </div>
                         </div>
                         <div className="flex items-center gap-3">
                            <Star className="text-[#d97706]" size={20} />
                            <div>
                               <div className="font-bold text-[#0a1128] text-lg leading-tight">4.8/5</div>
                               <div className="text-[0.6rem] text-[#6b7280]">Investor Rating</div>
                            </div>
                         </div>
                      </div>

                      {/* Tablet Videos */}
                      <div className="p-6 flex-1 bg-[#fdfdfd]">
                         <div className="flex items-center justify-between mb-4">
                            <span className="font-bold text-[#0a1128] text-sm">Featured Videos</span>
                            <span className="text-[0.65rem] text-[#d97706] font-bold">View all videos {'>'}</span>
                         </div>
                         <div className="grid grid-cols-4 gap-3">
                            <div className="flex flex-col gap-2">
                               <div className="w-full h-20 bg-gray-200 rounded-lg relative overflow-hidden group cursor-pointer">
                                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" />
                                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                     <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center backdrop-blur-sm group-hover:bg-white/20 transition-colors">
                                       <PlayCircle size={14} className="text-white" />
                                     </div>
                                  </div>
                                  <span className="absolute bottom-1 right-1 text-[0.55rem] text-white bg-black/60 px-1 rounded">2:45</span>
                               </div>
                               <span className="text-[0.65rem] font-bold text-[#0a1128]">Founder Story</span>
                            </div>
                            <div className="flex flex-col gap-2">
                               <div className="w-full h-20 bg-gray-200 rounded-lg relative overflow-hidden group cursor-pointer">
                                  <img src="https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" />
                                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                     <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center backdrop-blur-sm group-hover:bg-white/20 transition-colors">
                                       <PlayCircle size={14} className="text-white" />
                                     </div>
                                  </div>
                                  <span className="absolute bottom-1 right-1 text-[0.55rem] text-white bg-black/60 px-1 rounded">3:12</span>
                               </div>
                               <span className="text-[0.65rem] font-bold text-[#0a1128]">Store Walkthrough</span>
                            </div>
                            <div className="flex flex-col gap-2">
                               <div className="w-full h-20 bg-gray-200 rounded-lg relative overflow-hidden group cursor-pointer">
                                  <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" />
                                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                     <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center backdrop-blur-sm group-hover:bg-white/20 transition-colors">
                                       <PlayCircle size={14} className="text-white" />
                                     </div>
                                  </div>
                                  <span className="absolute bottom-1 right-1 text-[0.55rem] text-white bg-black/60 px-1 rounded">2:28</span>
                               </div>
                               <span className="text-[0.65rem] font-bold text-[#0a1128]">Success Story</span>
                            </div>
                            <div className="flex flex-col gap-2">
                               <div className="w-full h-20 bg-[#0a1128] rounded-lg flex flex-col items-center justify-center text-white cursor-pointer hover:bg-[#111827] transition-colors">
                                  <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center mb-1">
                                    <Search size={14} />
                                  </div>
                                  <span className="text-[0.55rem] font-medium">Video Search</span>
                               </div>
                               <span className="text-[0.65rem] font-bold text-[#0a1128]">Video Search {'>'}</span>
                            </div>
                         </div>
                      </div>

                   </div>
                </div>
             </motion.div>
          </div>
        </div>

        {/* Bottom Outcome Banner */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}
           className="w-full bg-[#fdf8f0] rounded-3xl border border-[#f6ead6] p-6 px-10 flex items-center gap-8 shadow-sm relative overflow-hidden"
        >
           {/* Chart Graphic Background */}
           <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none w-1/3">
             <svg viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M0 100 V 80 Q 50 80, 100 50 T 200 40 T 300 10 T 400 0 V 100 Z" fill="#d97706"/>
               <path d="M0 80 Q 50 80, 100 50 T 200 40 T 300 10 T 400 0" stroke="#d97706" strokeWidth="4" fill="none"/>
             </svg>
           </div>
           
           <div className="w-20 h-20 rounded-full bg-[#0a1128] flex items-center justify-center shrink-0 z-10 shadow-lg">
              <brandData.outcome.icon size={36} className="text-[#d97706]" strokeWidth={1.5} />
           </div>
           
           <div className="flex flex-col z-10">
              <span className="text-[0.7rem] font-bold text-[#d97706] tracking-widest uppercase mb-2">
                {brandData.outcome.tag}
              </span>
              <h3 className="text-2xl font-black text-[#0a1128]">
                {brandData.outcome.text}
              </h3>
           </div>
        </motion.div>

      </Container>
    </div>
  )
}
