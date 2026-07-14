import { motion } from 'framer-motion'
import { Rocket, ChevronRight } from 'lucide-react'
import { Container } from '../../components/layout'
import { Button } from '../../components/ui'
import { foundingNetwork, vendorBenefits } from "./data"

export default function DesktopHero() {
  return (
    <div className="relative w-full bg-[#fdfdfd] overflow-hidden pt-12">
      {/* Background gradients */}
      <div className="absolute right-0 top-0 w-[55%] h-full bg-gradient-to-l from-[#eef2f7] to-transparent opacity-80 pointer-events-none z-0" />
      <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[50%] bg-[#b38728] blur-[150px] opacity-[0.03] rounded-full pointer-events-none z-0" />
      
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 items-center pb-12">
          
          {/* Left Column */}
          <div className="w-full lg:w-[60%] flex flex-col pt-8">
            
            {/* Top Pill */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-[#e5e7eb] bg-white shadow-sm overflow-hidden mb-8 self-start"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-white">
                <Rocket size={14} className="text-[#0a1128]" />
                <span className="text-[0.7rem] font-bold text-[#0a1128] tracking-wider uppercase">
                  Vendor Onboarding Now Open
                </span>
              </div>
              <div className="h-4 w-px bg-[#e5e7eb]" />
              <div className="px-4 py-2 bg-white">
                <span className="text-[0.7rem] font-bold text-[#6b7280] tracking-wider uppercase">
                  Early Access
                </span>
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-[#fdf8f0] to-[#fcf4e6]">
                <span className="text-[0.7rem] font-bold text-[#b38728] tracking-wider uppercase">
                  Launching First in Telangana
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[3.2rem] lg:text-[3.8rem] font-black text-[#0a1128] leading-[1.1] tracking-tight mb-5"
            >
              India&apos;s 1st Integrated <br />
              <span className="text-[#d97706]">Commercial Real Estate <br /> Marketplace</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3 text-[#111827] font-extrabold text-[0.95rem] mb-6"
            >
              <span>Commercial Properties</span>
              <span className="text-[#b38728]">•</span>
              <span>Franchise Expansion</span>
              <span className="text-[#b38728]">•</span>
              <span>Retail Business Opportunities</span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[0.95rem] text-[#4b5563] leading-relaxed font-medium mb-12 max-w-2xl pr-4"
            >
              CREMP redefines how commercial opportunities are discovered and connected. 
              From commercial properties and retail spaces to franchise expansion and 
              business opportunities, CREMP brings together multiple commercial ecosystems 
              into one integrated marketplace—helping property owners, brokers, franchisors, 
              business owners, investors and tenants connect, collaborate and grow.
            </motion.p>
          </div>

          {/* Right Column (Image) */}
          <div className="w-full lg:w-[40%] relative">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
               className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative"
             >
               <img 
                 src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                 alt="Commercial Buildings" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-[#0a1128]/40 to-transparent" />
             </motion.div>

             {/* Floating Badge */}
             <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -left-12 top-12 bg-white/90 backdrop-blur-md p-5 rounded-full w-40 h-40 flex flex-col items-center justify-center text-center shadow-xl border border-white"
             >
                <div className="text-[0.7rem] font-bold text-[#0a1128] leading-snug mb-1">
                  Launching<br/>First in<br/>
                  <span className="text-[#d97706] text-lg">Telangana</span>
                </div>
                <div className="text-[0.55rem] text-[#6b7280] font-bold uppercase tracking-wider mt-1">Phase 1</div>
             </motion.div>
          </div>

        </div>

        {/* The Widget */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
           className="w-full bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-[#e5e7eb] p-6 relative z-20 mb-8"
        >
          <div className="flex flex-col lg:flex-row items-center gap-6">
            
            {/* Left side of widget */}
            <div className="flex items-start gap-4 lg:w-[25%] shrink-0">
               <div className="w-10 h-10 rounded-full bg-[#fdf8f0] flex items-center justify-center shrink-0 border border-[#f6ead6]">
                 <Rocket size={20} className="text-[#d97706]" />
               </div>
               <div>
                 <h3 className="text-[1.1rem] font-black text-[#0a1128] leading-tight mb-1">
                   Launching First in <br/> <span className="text-[#d97706]">Telangana</span> — Phase 1
                 </h3>
                 <p className="text-[0.7rem] text-[#4b5563] font-medium leading-tight">
                   We&apos;re currently onboarding our founding network of:
                 </p>
               </div>
            </div>

            {/* Icons Grid */}
            <div className="flex-1 flex items-center justify-between px-6 border-l border-r border-[#e5e7eb]">
              {foundingNetwork.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center gap-2">
                  <item.icon size={28} className="text-[#0a1128]" strokeWidth={1.2} />
                  <span className="text-[0.6rem] font-bold text-[#0a1128] leading-[1.2] whitespace-pre-line">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 lg:w-[22%] shrink-0 pl-2">
              <Button variant="primary" className="!bg-[#0a1128] hover:!bg-[#1e293b] !text-white text-[0.8rem] font-bold py-3 w-full justify-between px-5 shadow-md">
                Request Early Access <ChevronRight size={16} />
              </Button>
              <Button variant="outline" className="border-[#e5e7eb] text-[#0a1128] hover:bg-gray-50 text-[0.8rem] font-bold py-3 w-full justify-between px-5 bg-white">
                Explore the Marketplace <ChevronRight size={16} />
              </Button>
            </div>
          </div>
          
          <div className="text-center mt-6 pt-5 border-t border-[#f3f4f6]">
            <p className="text-[0.85rem] font-semibold text-[#0a1128]">
              Join early to establish your presence <span className="text-[#d97706]">before public discovery begins.</span>
            </p>
          </div>
        </motion.div>

      </Container>
      
      {/* Bottom Benefits Bar */}
      <div className="w-full bg-[#fdfcf8] border-t border-b border-[#e5e7eb] py-4">
        <Container>
           <div className="flex items-center justify-between">
              <div className="text-[0.75rem] font-extrabold text-[#0a1128] tracking-widest uppercase">
                 FOUNDING VENDOR BENEFITS
              </div>
              <div className="flex items-center gap-10">
                 {vendorBenefits.map((benefit, idx) => (
                   <div key={idx} className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full border border-[#d1d5db] flex items-center justify-center bg-white">
                        <benefit.icon size={16} className="text-[#d97706]" strokeWidth={2} />
                     </div>
                     <span className="text-[0.75rem] font-bold text-[#0a1128] leading-[1.2] whitespace-pre-line">
                        {benefit.label}
                     </span>
                   </div>
                 ))}
              </div>
           </div>
        </Container>
      </div>

    </div>
  )
}
