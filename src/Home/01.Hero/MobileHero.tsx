import { motion } from 'framer-motion'
import { Rocket, ChevronRight } from 'lucide-react'
import { Button } from '../../components/ui'
import { foundingNetwork, vendorBenefits } from "./data"

export default function MobileHero() {
  return (
    <div className="relative w-full bg-[#fdfdfd] overflow-hidden pt-6">
      
      <div className="px-5 relative z-10">
        
        {/* Top Pill */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="flex flex-col rounded-lg border border-[#e5e7eb] bg-white shadow-sm overflow-hidden mb-6"
        >
          <div className="flex items-center justify-between border-b border-[#e5e7eb]">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white">
              <Rocket size={12} className="text-[#0a1128]" />
              <span className="text-[0.55rem] font-bold text-[#0a1128] tracking-wider uppercase">
                VENDOR ONBOARDING
              </span>
            </div>
            <div className="px-3 py-1.5 bg-white border-l border-[#e5e7eb]">
              <span className="text-[0.55rem] font-bold text-[#6b7280] tracking-wider uppercase">
                EARLY ACCESS
              </span>
            </div>
          </div>
          <div className="px-3 py-1.5 bg-gradient-to-r from-[#fdf8f0] to-[#fcf4e6] text-center">
            <span className="text-[0.55rem] font-bold text-[#b38728] tracking-wider uppercase">
              LAUNCHING FIRST IN TELANGANA
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[2.2rem] font-black text-[#0a1128] leading-[1.1] tracking-tight mb-4"
        >
          India&apos;s 1st Integrated <br />
          <span className="text-[#d97706]">Commercial Real Estate Marketplace</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-1 text-[#111827] font-extrabold text-[0.7rem] mb-4"
        >
          <div className="flex items-center gap-2">
            <span>Commercial Properties</span>
            <span className="text-[#b38728]">•</span>
            <span>Franchise Expansion</span>
          </div>
          <span>Retail Business Opportunities</span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
          className="text-[0.8rem] text-[#4b5563] leading-relaxed font-medium mb-8"
        >
          CREMP redefines how commercial opportunities are discovered and connected. 
          From commercial properties to franchise expansion, CREMP brings together 
          multiple ecosystems into one marketplace.
        </motion.p>
        
        {/* Right Column (Image) */}
        <div className="w-full relative mb-8">
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
             className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg relative"
           >
             <img 
               src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" 
               alt="Commercial Buildings" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-tr from-[#0a1128]/40 to-transparent" />
           </motion.div>

           {/* Floating Badge */}
           <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -right-2 -bottom-6 bg-white/95 backdrop-blur-md p-3 rounded-full w-28 h-28 flex flex-col items-center justify-center text-center shadow-xl border border-white"
           >
              <div className="text-[0.55rem] font-bold text-[#0a1128] leading-tight mb-1">
                Launching<br/>First in<br/>
                <span className="text-[#d97706] text-[0.8rem]">Telangana</span>
              </div>
           </motion.div>
        </div>

        {/* The Widget */}
        <motion.div 
           initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
           className="w-full bg-white rounded-xl shadow-lg border border-[#e5e7eb] p-5 relative z-20 mb-8 mt-12"
        >
          <div className="flex items-start gap-3 mb-6">
             <div className="w-8 h-8 rounded-full bg-[#fdf8f0] flex items-center justify-center shrink-0 border border-[#f6ead6]">
               <Rocket size={16} className="text-[#d97706]" />
             </div>
             <div>
               <h3 className="text-[0.95rem] font-black text-[#0a1128] leading-tight mb-1">
                 Launching First in <br/> <span className="text-[#d97706]">Telangana</span>
               </h3>
               <p className="text-[0.6rem] text-[#4b5563] font-medium leading-tight mt-1">
                 We&apos;re onboarding our founding network:
               </p>
             </div>
          </div>

          {/* Icons Grid */}
          <div className="grid grid-cols-3 gap-y-5 gap-x-2 mb-6">
            {foundingNetwork.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-1.5">
                <item.icon size={22} className="text-[#0a1128]" strokeWidth={1.2} />
                <span className="text-[0.55rem] font-bold text-[#0a1128] leading-[1.1] whitespace-pre-line">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mb-5 pb-5 border-b border-[#f3f4f6]">
            <p className="text-[0.7rem] font-bold text-[#0a1128] px-2">
              Join early to establish your presence <span className="text-[#d97706]">before public discovery begins.</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3">
            <Button variant="primary" size="sm" className="!bg-[#0a1128] hover:!bg-[#1e293b] !text-white text-[0.75rem] font-bold py-2.5 w-full justify-between px-4 shadow-md">
              Request Early Access <ChevronRight size={14} />
            </Button>
            <Button variant="outline" size="sm" className="border-[#e5e7eb] text-[#0a1128] text-[0.75rem] font-bold py-2.5 w-full justify-between px-4 bg-white">
              Explore the Marketplace <ChevronRight size={14} />
            </Button>
          </div>
        </motion.div>

      </div>
      
      {/* Bottom Benefits Bar */}
      <div className="w-full bg-[#fdfcf8] border-t border-b border-[#e5e7eb] py-4 px-5">
         <div className="text-[0.65rem] font-extrabold text-[#0a1128] tracking-widest uppercase mb-4 text-center">
            FOUNDING VENDOR BENEFITS
         </div>
         <div className="grid grid-cols-2 gap-4">
            {vendorBenefits.map((benefit, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-2">
                <div className="w-7 h-7 rounded-full border border-[#d1d5db] flex items-center justify-center bg-white">
                   <benefit.icon size={14} className="text-[#d97706]" strokeWidth={2} />
                </div>
                <span className="text-[0.6rem] font-bold text-[#0a1128] leading-[1.2] whitespace-pre-line">
                   {benefit.label}
                </span>
              </div>
            ))}
         </div>
      </div>

    </div>
  )
}
