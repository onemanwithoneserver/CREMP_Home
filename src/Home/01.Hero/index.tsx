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
  const [activeTab, setActiveTab] = useState<keyof typeof searchFilters>('lease')

  return (
    <div className="relative w-full bg-[#0B101E] overflow-hidden min-h-screen pt-20 md:pt-28 pb-16">
      <div 
        className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-center opacity-100"
        style={{ backgroundImage: `url(${homeBg})` }}
      />
      
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0B101E]/90 via-[#0B101E]/40 to-transparent pointer-events-none" />

      <Container className="relative z-10 h-full flex flex-col pt-8">
        <div className="flex flex-col lg:flex-row gap-8 items-center flex-1 w-full">
          
          <div className="w-full lg:w-[45%] flex flex-col z-20 pt-10">
            <motion.div 
              initial="hidden" animate="visible" variants={fadeUp}
              className="inline-flex items-center rounded-full border border-[#D7B73F]/60 bg-[#151B2B]/80 backdrop-blur-md mb-8 self-start px-4 py-1.5 shadow-[0_0_15px_rgba(215,183,63,0.15)]"
            >
              <Sparkles size={14} className="text-[#D7B73F] mr-2" />
              <span className="text-[0.65rem] md:text-xs font-bold text-[#D7B73F] tracking-[0.15em] uppercase">
                India's 1st Integrated Platform
              </span>
            </motion.div>

            <motion.h1
              initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1 }}
              className="text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-black text-white leading-[1.05] tracking-tight mb-6"
            >
              The Future of <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F2C94C] to-[#F2994A]">
                Commercial<br/>Real Estate
              </span>
            </motion.h1>

            <motion.p
              initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-white/70 leading-relaxed font-medium mb-10 max-w-lg"
            >
              CREMP connects property owners, brokers, franchisors,
              and investors in one unified marketplace. Discover
              commercial properties, expand your franchise, and
              grow your business with confidence.
            </motion.p>

            <motion.div
              initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-10"
            >
              <Button
                variant="primary"
                iconRight={<ArrowRight size={18} />}
                className="w-full sm:w-auto bg-gradient-to-r from-[#D7B73F] to-[#D98725] border-none text-white font-bold rounded-[4px] shadow-[0_4px_15px_rgba(215,183,63,0.3)] hover:shadow-[0_4px_25px_rgba(215,183,63,0.5)] transition-all px-8 py-3.5"
              >
                Explore Marketplace
              </Button>
              <Button
                variant="outline"
                icon={<PlayCircle size={18} />}
                className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 font-bold rounded-[4px] bg-transparent px-8 py-3.5 backdrop-blur-sm"
              >
                How It Works
              </Button>
            </motion.div>
          </div>

          <div className="w-full lg:w-[55%] relative min-h-[500px] lg:min-h-[700px] flex items-center justify-center z-10">
            
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute top-0 lg:top-[-20px] left-1/2 lg:left-[45%] -translate-x-1/2 w-[95%] max-w-[500px] bg-[#151B2B]/90 backdrop-blur-xl rounded-[12px] border border-white/10 p-4 shadow-2xl z-30"
            >
              <div className="flex w-full border-b border-white/10 relative">
                {searchTabs.map((tab) => {
                  const isActive = activeTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex-1 py-3 px-2 flex items-center justify-center gap-2 text-sm font-bold transition-colors relative ${
                        isActive ? 'text-[#D7B73F]' : 'text-white/60 hover:text-white'
                      }`}
                    >
                      <tab.icon size={16} />
                      <span className="text-center leading-tight whitespace-nowrap">{tab.label}</span>
                      {isActive && (
                        <motion.div 
                          layoutId="hero-search-tab"
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D7B73F] shadow-[0_0_10px_#D7B73F]" 
                        />
                      )}
                    </button>
                  )
                })}
              </div>

              <div className="pt-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="flex justify-center gap-3 overflow-x-auto scrollbar-hide pb-1"
                  >
                    {searchFilters[activeTab].map((filter: any, idx) => {
                      const isActive = idx === 0;
                      return (
                        <button
                          key={filter.id}
                          className={`flex items-center justify-center gap-2 bg-white rounded-[6px] px-4 py-2 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all border-2 ${isActive ? filter.borderColor : 'border-transparent'} hover:scale-105 group whitespace-nowrap`}
                        >
                          <filter.icon size={16} className={`${filter.color}`} />
                          <span className={`text-[0.8rem] font-bold ${isActive ? filter.color : 'text-[#2A3A69]'}`}>{filter.label}</span>
                        </button>
                      )
                    })}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-10 lg:bottom-20 left-0 lg:left-[-5%] flex items-center gap-4 bg-[#1A1F2E]/80 backdrop-blur-md shadow-[0_0_20px_rgba(215,183,63,0.15)] rounded-full border border-[#D7B73F]/30 p-2 pr-6 cursor-pointer hover:border-[#D7B73F]/60 transition-all z-30"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#1A1F2E] overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-[0.95rem] font-bold text-[#D7B73F] flex items-center gap-1 leading-tight">
                  500+ <Sparkles size={12} className="animate-pulse" />
                </div>
                <div className="text-[0.7rem] text-white/80 leading-tight">Verified Partners</div>
              </div>
            </motion.div>

            <div className="absolute right-0 lg:right-[-20px] top-1/2 -translate-y-1/2 flex flex-col gap-5 z-30 hidden sm:flex">
              {floatingCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + idx * 0.15 }}
                  className="bg-white/95 backdrop-blur-sm rounded-[12px] p-4 w-[250px] shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex items-start gap-4 border border-white/20 group cursor-pointer hover:-translate-x-2 transition-transform relative"
                >
                  <div className="absolute top-1/2 -left-12 w-12 h-[1px] bg-gradient-to-l from-white/50 to-transparent hidden lg:block" />
                  <div className="absolute top-1/2 -left-12 w-1.5 h-1.5 rounded-full bg-white/50 hidden lg:block -translate-y-1/2" />

                  <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${card.iconBg}`}>
                    <card.icon size={20} className={card.iconColor} />
                  </div>
                  <div className="flex-1 pt-0.5">
                    <h4 className="text-[0.9rem] font-bold text-[#1A1F2E] mb-1 leading-tight">{card.title}</h4>
                    <p className="text-[0.75rem] text-[#6B7491] leading-[1.3] pr-2">{card.desc}</p>
                  </div>
                  <div className="absolute right-3 bottom-3 w-5 h-5 rounded-full bg-[#1A1F2E] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight size={10} className="text-white" />
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
          className="w-full mt-24 lg:mt-32 mb-8 relative z-20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-[#151B2B]/60 backdrop-blur-lg rounded-[12px] border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-20 pointer-events-none" />
            
            {vendorBenefits.map((benefit: any, idx) => (
              <div key={idx} className={`flex flex-col p-6 lg:p-8 group cursor-pointer relative ${idx < vendorBenefits.length - 1 ? 'lg:border-r border-b lg:border-b-0 border-white/10' : ''}`}>
                <div className={`w-12 h-12 rounded-full border flex items-center justify-center bg-transparent transition-all mb-4 ${benefit.border} group-hover:${benefit.glow}`}>
                  <benefit.icon size={20} className={benefit.color} />
                </div>
                <h4 className="text-[1rem] font-bold text-white mb-2 flex items-center justify-between w-full pr-4">
                  {benefit.label}
                  <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-white/50" />
                </h4>
                <p className="text-[0.8rem] text-white/50 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center flex flex-col items-center">
            <div className="flex items-center gap-6 mb-8">
              <span className="w-8 h-8 flex items-center justify-center opacity-80 text-[#D7B73F]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C7.58172 2 4 5.58172 4 10C4 14.4183 7.58172 18 12 18C16.4183 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2Z"></path><path d="M12 18V22"></path><path d="M8 22H16"></path></svg>
              </span>
              <h5 className="text-[0.85rem] font-bold text-white tracking-[0.25em] uppercase opacity-90">Trusted By 500+ Businesses Across India</h5>
              <span className="w-8 h-8 flex items-center justify-center opacity-80 text-[#D7B73F] scale-x-[-1]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C7.58172 2 4 5.58172 4 10C4 14.4183 7.58172 18 12 18C16.4183 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2Z"></path><path d="M12 18V22"></path><path d="M8 22H16"></path></svg>
              </span>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {trustedLogos.map((logo, idx) => (
                <div key={idx} className="text-[1.2rem] font-black text-white uppercase tracking-wider">{logo}</div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}
