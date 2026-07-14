import { motion } from 'framer-motion'
import { Container } from '../../components/layout'
import { heroData } from './data'
import { UserPlus, MapPin, PlaySquare } from 'lucide-react'

export default function DesktopHero() {
  const Btn1Icon = heroData.buttons[0].icon;
  const Btn2Icon = heroData.buttons[1].icon;

  return (
    <div className="relative w-full bg-[#ffffff] overflow-hidden pt-16 pb-20">
      <Container className="relative z-10">
        <div className="flex items-center justify-between gap-12">
          
          {/* Left Column */}
          <div className="w-[45%] flex flex-col">
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block px-3 py-1 rounded bg-[rgba(199, 154, 23, 0.05)] text-[#C79A17] text-[0.65rem] font-bold tracking-widest uppercase mb-6 border border-[rgba(199, 154, 23, 0.15)]">
                {heroData.tag}
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[3.5rem] font-black text-[#2A3A69] leading-[1.05] tracking-tight mb-6"
            >
              Take Control of <br/>
              Your Franchise <br/>
              <span className="text-[#d97706]">{heroData.titleHighlight}</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[0.95rem] text-[#3A4566] font-medium leading-relaxed mb-10 max-w-lg"
            >
              Powered by India&apos;s <span className="font-bold text-[#2A3A69]">Integrated Commercial Real Estate, Franchise & Retail Business Opportunities Platform</span>, CREMP helps you build your brand, reach investors in your preferred micro markets, define your ideal franchise partner and discover expansion-ready locations—all through one connected ecosystem.
            </motion.p>

            <motion.div 
               initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
               className="flex items-center gap-4 mb-14"
            >
               <button className="bg-[#d97706] hover:bg-[#b45309] text-white font-bold text-[0.85rem] py-3.5 px-6 rounded-lg shadow-md transition-colors flex items-center justify-center gap-2">
                 <Btn1Icon size={16} strokeWidth={2.5} />
                 {heroData.buttons[0].text}
               </button>
               <button className="bg-white hover:bg-gray-50 text-[#2A3A69] font-bold text-[0.85rem] py-3.5 px-6 rounded-lg shadow-sm border border-[#2A3A69] transition-colors flex items-center justify-center gap-2">
                 <Btn2Icon size={16} strokeWidth={2} />
                 {heroData.buttons[1].text}
               </button>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
               className="flex items-center gap-10"
            >
               {heroData.features.map((feature, idx) => (
                 <div key={idx} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-[#E2E6EE] flex items-center justify-center text-[#d97706] shrink-0 bg-[#fdfcf8]">
                      <feature.icon size={18} strokeWidth={1.5} />
                    </div>
                    <span className="text-[0.7rem] font-bold text-[#2A3A69] leading-tight whitespace-pre-line">
                      {feature.text}
                    </span>
                 </div>
               ))}
            </motion.div>
          </div>

          {/* Right Column (Map Graphic) */}
          <div className="w-[55%] relative h-[550px] flex items-center justify-center">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
               className="w-full h-full relative"
             >
               {/* Base Map Graphic */}
               <img 
                 src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
                 alt="Map Background" 
                 className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-xl opacity-20 grayscale sepia-[.3]"
               />
               
               {/* Isometric Store Mockup */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                 <div className="w-64 h-48 bg-white rounded-lg shadow-2xl border-4 border-[#2A3A69] overflow-hidden relative rotate-[-5deg] skew-x-[10deg] scale-110">
                    <img src="https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Storefront" />
                    <div className="absolute inset-x-0 top-0 h-10 bg-[#2A3A69] flex items-center justify-center">
                       <span className="text-white font-black tracking-widest text-sm">YOUR BRAND</span>
                    </div>
                 </div>
               </div>

               {/* Map Hexagon Grid / Overlay */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-[2px] border-dashed border-[#d97706]/40 rounded-[100%] skew-x-[20deg] rotate-[-10deg] pointer-events-none z-0"></div>

               {/* Map Pins */}
               <div className="absolute top-[15%] right-[25%] bg-white p-2.5 rounded-lg shadow-xl border border-[#E2E6EE] flex items-center gap-3 z-20 animate-bounce" style={{animationDuration: '3s'}}>
                  <div className="w-8 h-8 rounded bg-[rgba(199, 154, 23, 0.05)] text-[#d97706] flex items-center justify-center">
                    <UserPlus size={16} />
                  </div>
                  <div>
                    <div className="text-[0.65rem] font-bold text-[#2A3A69]">New Micro Market</div>
                    <div className="text-[0.55rem] text-[#6B7491] font-medium">Campaign Active</div>
                  </div>
               </div>

               <div className="absolute bottom-[20%] right-[10%] bg-white p-2.5 rounded-lg shadow-xl border border-[#E2E6EE] flex items-center gap-3 z-20 animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}>
                  <div className="w-8 h-8 rounded bg-[#F5F7FA] text-[#3A4566] flex items-center justify-center">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <div className="text-[0.65rem] font-bold text-[#2A3A69]">Existing Outlet</div>
                    <div className="text-[0.55rem] text-[#6B7491] font-medium">Strengthen Presence</div>
                  </div>
               </div>

               <div className="absolute top-[40%] left-[5%] bg-white p-2.5 rounded-lg shadow-xl border border-[#E2E6EE] flex items-center gap-3 z-20 animate-bounce" style={{animationDuration: '3.5s', animationDelay: '0.5s'}}>
                  <div className="w-8 h-8 rounded bg-[#2A3A69] text-white flex items-center justify-center">
                    <PlaySquare size={16} />
                  </div>
                  <div>
                    <div className="text-[0.65rem] font-bold text-[#2A3A69]">Video Showcase</div>
                    <div className="text-[0.55rem] text-[#6B7491] font-medium">Watch Brand Story</div>
                  </div>
               </div>

             </motion.div>
          </div>
          
        </div>
      </Container>
    </div>
  )
}
