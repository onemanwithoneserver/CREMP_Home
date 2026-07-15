import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, PlayCircle, Sparkles } from 'lucide-react'
import { Container } from '../../components/layout'
import { Button } from '../../components/ui'
import { vendorBenefits, floatingCards, searchTabs, searchFilters, trustedLogos } from './data'
import homeBg from './HomeBg.png'

interface HeroProps {
  isMobile: boolean
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export default function Hero({ isMobile }: HeroProps) {
  const [activeTab, setActiveTab] = useState<keyof typeof searchFilters>('buy')

  return (
    <div className="relative w-full bg-[#0B101E] overflow-hidden min-h-screen pt-12 md:pt-20 lg:pt-32 pb-16">
      <div 
        className="absolute inset-0 z-0 bg-no-repeat opacity-100 bg-[length:100%_100%]"
        style={{ backgroundImage: `url(${homeBg})`, backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0B101E]/50 to-transparent pointer-events-none" />
      
      <Container className="relative z-10 h-full flex flex-col">
        <div className={`flex flex-col ${isMobile ? '' : 'lg:flex-row'} gap-12 items-center flex-1`}>
          
          <div className={`w-full ${isMobile ? '' : 'lg:w-1/2'} flex flex-col z-20`}>
            <motion.div 
              initial="hidden" animate="visible" variants={fadeUp}
              className="inline-flex items-center rounded-full border border-[#D7B73F] shadow-[0_0_15px_rgba(215,183,63,0.3)] bg-[#1A1F2E]/80 backdrop-blur-sm overflow-hidden mb-6 md:mb-8 self-start px-4 py-1.5 hover:shadow-[0_0_25px_rgba(215,183,63,0.5)] transition-shadow"
            >
              <Sparkles size={14} className="text-[#D7B73F] mr-2 animate-pulse" />
              <span className={`${isMobile ? 'text-[0.65rem]' : 'text-xs'} font-bold text-[#D7B73F] tracking-wider uppercase`}>
                India's 1st Integrated Platform
              </span>
            </motion.div>

            <motion.h1
              initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1 }}
              className={`${isMobile ? 'text-[2.5rem]' : 'text-[3.5rem] lg:text-[4rem]'} font-black text-white leading-[1.05] tracking-tight mb-4 md:mb-6`}
            >
              The Future of <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D7B73F] to-[#ED8B55]">Commercial Real Estate</span>
            </motion.h1>

            <motion.p
              initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }}
              className={`${isMobile ? 'text-[0.9rem]' : 'text-base'} text-white/70 leading-relaxed font-medium mb-8 md:mb-10 max-w-lg`}
            >
              CREMP connects property owners, brokers, franchisors, and investors in one unified marketplace. Discover commercial properties, expand your franchise, and grow your business with confidence.
            </motion.p>

            <motion.div
              initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.3 }}
              className={`flex ${isMobile ? 'flex-col' : 'items-center'} gap-4 mb-10 md:mb-12`}
            >
              <Button
                variant="primary"
                iconRight={<ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />}
                className={`!bg-gradient-to-r from-[#D7B73F] to-[#D98725] border-none !text-white font-bold rounded-[4px] shadow-lg group hover:brightness-110 transition-all ${
                  isMobile ? 'w-full py-3.5' : 'px-8 py-3.5'
                }`}
              >
                Explore Marketplace
              </Button>
              <Button
                variant="outline"
                icon={<PlayCircle size={18} />}
                className={`border-white/20 text-white hover:bg-white/5 font-bold rounded-[4px] bg-transparent ${
                  isMobile ? 'w-full py-3.5' : 'px-8 py-3.5'
                }`}
              >
                How It Works
              </Button>
            </motion.div>

            <motion.div 
              initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.4 }}
              className="flex items-center gap-4 bg-[#1A1F2E]/80 backdrop-blur-md shadow-[0_0_20px_rgba(215,183,63,0.15)] rounded-full border border-[#D7B73F]/40 p-2 pr-6 self-start group cursor-pointer hover:shadow-[0_0_30px_rgba(215,183,63,0.3)] transition-all"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#1A1F2E] bg-gray-600 overflow-hidden shadow-sm group-hover:border-[#D7B73F] transition-colors">
                    <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm font-bold text-white flex items-center gap-1">
                  500+ <Sparkles size={14} className="text-[#D7B73F] animate-pulse" />
                </div>
                <div className="text-xs text-white/60">Verified Partners</div>
              </div>
            </motion.div>
          </div>

          <div className={`w-full ${isMobile ? 'mt-8' : 'lg:w-1/2'} flex flex-col lg:items-center justify-center relative z-20`}>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-[#151B2B]/95 backdrop-blur-xl rounded-[2px] border border-white/5 w-full max-w-[500px] p-6 shadow-2xl relative"
            >
              <div className="flex w-full border-b border-white/10 relative">
                {searchTabs.map((tab) => {
                  const isActive = activeTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex-1 py-4 px-2 flex items-center justify-center gap-2 text-[0.85rem] font-bold transition-colors relative ${
                        isActive ? 'text-[#D7B73F]' : 'text-white/50 hover:text-white/80'
                      }`}
                    >
                      <tab.icon size={16} className={isActive ? 'text-white' : ''} />
                      <span className="hidden sm:block text-center leading-tight whitespace-pre-wrap">{tab.label}</span>
                      {isActive && (
                        <motion.div 
                          layoutId="search-tab-indicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D7B73F] shadow-[0_0_10px_#D7B73F]" 
                        />
                      )}
                    </button>
                  )
                })}
              </div>

              <div className="pt-8 pb-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-2 gap-4"
                  >
                    {searchFilters[activeTab].map((filter: any, idx) => {
                      const isActive = idx === 0;
                      return (
                        <button
                          key={filter.id}
                          className={`flex items-center justify-center gap-2 bg-white rounded-[4px] px-4 py-3 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all border-2 ${isActive ? filter.borderColor : 'border-transparent'} hover:scale-105 group whitespace-nowrap`}
                        >
                          <filter.icon size={18} className={`${filter.color} group-hover:scale-110 transition-transform`} />
                          <span className={`text-[0.85rem] font-bold leading-tight ${isActive ? filter.color : 'text-[#2A3A69]'}`}>{filter.label}</span>
                        </button>
                      )
                    })}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            <div className="hidden lg:flex flex-col gap-4 mt-8 w-full max-w-[500px] z-10">
              {floatingCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.15 }}
                  className="bg-white rounded-[4px] p-4 w-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center gap-4 border border-white/10 group cursor-pointer hover:-translate-y-1 transition-all"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${card.iconBg} group-hover:scale-110 transition-transform`}>
                    <card.icon size={20} className={card.iconColor} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[0.9rem] font-bold text-[#2A3A69] mb-1">{card.title}</h4>
                    <p className="text-[0.75rem] text-[#6B7491] leading-tight">{card.desc}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#1A1F2E] flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <ArrowRight size={14} className="text-white" />
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
          className="w-full mt-24 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#1A1F2E]/40 backdrop-blur-md rounded-[2px] p-8 border border-white/10 shadow-2xl">
            {vendorBenefits.map((benefit: any, idx) => (
              <div key={idx} className={`flex flex-col gap-3 group cursor-pointer ${idx < vendorBenefits.length - 1 ? 'lg:border-r lg:border-white/10 lg:pr-6' : ''}`}>
                <div className={`w-12 h-12 rounded-full border flex items-center justify-center bg-[#1A1F2E] transition-all group-hover:${benefit.glow} ${benefit.border}`}>
                  <benefit.icon size={20} className={benefit.color} strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1 group-hover:text-white transition-colors">{benefit.label}</h4>
                  <p className="text-[0.75rem] text-white/50 leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center flex flex-col items-center">
            <div className="flex items-center gap-4 mb-6 opacity-60">
              <span className="w-4 h-4 rounded-full border-b-2 border-r-2 border-white/20 rotate-45 transform scale-x-75 -translate-y-1" />
              <h5 className="text-[0.7rem] font-bold text-white tracking-[0.2em] uppercase">Trusted By 500+ Businesses Across India</h5>
              <span className="w-4 h-4 rounded-full border-t-2 border-l-2 border-white/20 rotate-45 transform scale-x-75 translate-y-1" />
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {trustedLogos.map((logo, idx) => (
                <div key={idx} className="text-sm font-black text-white uppercase tracking-wider">{logo}</div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}
