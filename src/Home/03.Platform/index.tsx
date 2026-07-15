import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Container } from '../../components/layout'
import { Button } from '../../components/ui'
import { platformTabs, platformContent } from './data'

// Animation variants for staggering children
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
}

export default function Platform({ isMobile }: { isMobile: boolean }) {
  const [activeTab, setActiveTab] = useState(platformTabs[0].id)
  const activeContent = platformContent[activeTab as keyof typeof platformContent]
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  // Subtle parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="w-full bg-[#0B101E] pt-10 md:pt-20 pb-12 md:pb-32 overflow-hidden relative">
      {/* Background ambient glows */}
      <motion.div 
        animate={{ x: mousePos.x * 2, y: mousePos.y * 2 }}
        transition={{ type: 'spring', stiffness: 50, damping: 30 }}
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#D7B73F]/10 rounded-full blur-[150px] pointer-events-none" 
      />
      <motion.div 
        animate={{ x: -mousePos.x * 2, y: -mousePos.y * 2 }}
        transition={{ type: 'spring', stiffness: 50, damping: 30 }}
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#2A3A69]/20 rounded-full blur-[150px] pointer-events-none" 
      />

      <Container className="relative z-10">
        {/* Header Section */}
        <div className={`${isMobile ? 'text-left' : 'text-center max-w-3xl mx-auto'} mb-10 md:mb-16 relative`}>
          <motion.div initial={{ opacity: 0, y: 15, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }}>
            <div className="inline-flex items-center rounded-full border border-[#D7B73F]/50 shadow-[0_0_20px_rgba(215,183,63,0.2)] bg-gradient-to-r from-[#1A1F2E]/90 to-[#0B101E]/90 backdrop-blur-md overflow-hidden mb-8 self-center px-5 py-2">
              <Sparkles size={16} className="text-[#D7B73F] mr-3 animate-[pulse_2s_ease-in-out_infinite]" />
              <span className={`${isMobile ? 'text-[0.65rem]' : 'text-xs'} font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D7B73F] to-[#F9E596] tracking-[0.25em] uppercase`}>
                ONE INTEGRATED ECOSYSTEM
              </span>
            </div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 200, damping: 20 }}
            className={`${isMobile ? 'text-[2.2rem]' : 'text-[3.5rem]'} font-extrabold text-white leading-[1.1] tracking-tight mb-5`}
          >
            Built for Everyone in the <br /> 
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#D7B73F] via-[#F9E596] to-[#D7B73F] drop-shadow-[0_0_25px_rgba(215,183,63,0.4)]">Commercial Ecosystem</span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D7B73F] to-transparent opacity-50 blur-sm" />
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`${isMobile ? 'text-[0.95rem]' : 'text-[1.15rem]'} text-white/60 font-medium leading-relaxed max-w-2xl mx-auto`}
          >
            Whether you're looking to showcase properties, expand your franchise, or discover verified investment opportunities—we have the tools you need.
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className={`${isMobile ? '-mx-5 px-5 overflow-x-auto scrollbar-hide' : 'flex items-center justify-center'} mb-10 md:mb-20`}
        >
          <div className={`inline-flex p-1.5 bg-[#1A1F2E]/40 backdrop-blur-2xl border border-white/5 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] ${isMobile ? 'min-w-max' : 'overflow-x-auto max-w-full'} ring-1 ring-white/10`}>
            {platformTabs.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3.5 rounded-xl ${isMobile ? 'text-[0.75rem]' : 'text-[0.85rem]'} font-bold transition-all relative ${
                    isActive ? 'text-[#0B101E]' : 'text-white/50 hover:text-white/90 hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="platform-tab-bg"
                      className="absolute inset-0 bg-gradient-to-br from-white to-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.3)] rounded-xl"
                      transition={{ type: 'spring', bounce: 0.25, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                    <tab.icon size={isMobile ? 16 : 18} className={`${isActive ? 'text-[#C79A17]' : 'text-white/40 group-hover:text-white/70'} transition-colors duration-300`} />
                    {tab.label}
                  </span>
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Premium White Glassmorphic Card (Light/Dark Contrast) */}
        <div className={`relative ${isMobile ? '' : 'min-h-[550px]'}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 40, scale: 0.95, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -30, scale: 0.98, filter: 'blur(5px)' }}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }} // Custom easing for premium feel
              className={`bg-white/95 backdrop-blur-3xl border border-white/40 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,1)] flex ${isMobile ? 'flex-col' : ''} ring-1 ring-white/50`}
            >
              {isMobile && (
                <div className="w-full h-64 relative bg-gradient-to-b from-[#F5F7FA] to-white overflow-hidden">
                  <motion.img 
                    initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }}
                    src={activeContent.image} alt={activeContent.title} className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-95" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent mix-blend-overlay" />
                </div>
              )}

              {/* Left Content (Staggered Animations) */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={`${isMobile ? 'p-8' : 'w-1/2 p-14 lg:p-20 border-r border-[#E2E6EE]/50'} flex flex-col justify-center relative z-10 bg-gradient-to-br from-white/60 to-white/10`}
              >
                <motion.div variants={itemVariants} className="mb-6">
                  <span className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#0B101E] to-[#1A1F2E] text-[#D7B73F] ${isMobile ? 'text-[0.6rem]' : 'text-[0.7rem]'} font-black tracking-[0.25em] uppercase shadow-[0_5px_15px_rgba(215,183,63,0.25)] border border-[#D7B73F]/20 relative overflow-hidden group`}>
                    <span className="relative z-10">{activeContent.tag}</span>
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                  </span>
                </motion.div>
                
                <motion.h3 variants={itemVariants} className={`${isMobile ? 'text-[2rem]' : 'text-[2.8rem]'} font-extrabold text-[#0B101E] leading-[1.1] mb-4 tracking-tight`}>
                  {activeContent.title}
                </motion.h3>
                
                <motion.h4 variants={itemVariants} className={`${isMobile ? 'text-[1rem]' : 'text-[1.2rem]'} font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C79A17] to-[#D7B73F] mb-6`}>
                  {activeContent.subtitle}
                </motion.h4>
                
                <motion.p variants={itemVariants} className={`${isMobile ? 'text-[0.95rem]' : 'text-[1.1rem]'} text-[#3A4566] font-medium leading-relaxed mb-10`}>
                  {activeContent.desc}
                </motion.p>

                <motion.div variants={itemVariants} className={`grid grid-cols-2 ${isMobile ? 'gap-y-5 gap-x-3 mb-10' : 'gap-y-8 gap-x-8 mb-14'}`}>
                  {activeContent.items.map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      className={`group flex ${isMobile ? 'flex-col gap-3 text-center items-center' : 'items-center gap-5'} p-4 rounded-2xl hover:bg-gradient-to-br hover:from-[#0B101E] hover:to-[#1A1F2E] hover:shadow-[0_15px_30px_rgba(11,16,30,0.3)] transition-all cursor-pointer border border-[#E2E6EE] hover:border-[#D7B73F]/40`}
                    >
                      <div className={`${isMobile ? 'w-12 h-12' : 'w-14 h-14'} rounded-full bg-white group-hover:bg-[#1A1F2E] flex items-center justify-center border border-[#E2E6EE] group-hover:border-[#D7B73F]/50 shadow-sm shrink-0 transition-all duration-300 relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-[#D7B73F]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <item.icon size={isMobile ? 20 : 24} className="text-[#2A3A69] group-hover:text-[#D7B73F] transition-colors relative z-10" strokeWidth={2} />
                      </div>
                      <span className={`${isMobile ? 'text-[0.8rem]' : 'text-[0.95rem]'} font-bold text-[#2A3A69] group-hover:text-white leading-tight transition-colors duration-300`}>
                        {item.label}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Button
                    variant="primary"
                    className={`!bg-gradient-to-r !from-[#D7B73F] !to-[#F9E596] hover:!from-[#C79A17] hover:!to-[#D7B73F] !text-[#0B101E] font-black rounded-xl shadow-[0_10px_25px_rgba(215,183,63,0.4)] hover:shadow-[0_15px_35px_rgba(215,183,63,0.6)] group overflow-hidden relative ${
                      isMobile ? 'w-full text-[0.9rem] py-4' : 'self-start text-[1rem] px-10 py-5'
                    }`}
                  >
                    <span className="relative z-10 flex items-center justify-center tracking-wide">
                      {activeContent.buttonText}
                      <ArrowRight size={20} className="ml-3 transition-transform group-hover:translate-x-2" />
                    </span>
                    <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right Content (Image with Parallax & Floating Effects) */}
              {!isMobile && (
                <div className="w-1/2 relative bg-[#F5F7FA] overflow-hidden group">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0)_100%)] opacity-80 mix-blend-overlay z-10 pointer-events-none" />
                  
                  <motion.div 
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1.1, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <motion.img 
                      animate={{ 
                        scale: [1, 1.03, 1],
                        x: mousePos.x * 0.5,
                        y: mousePos.y * 0.5
                      }}
                      transition={{ 
                        scale: { duration: 20, ease: "linear", repeat: Infinity },
                        x: { type: 'spring', stiffness: 50, damping: 30 },
                        y: { type: 'spring', stiffness: 50, damping: 30 }
                      }}
                      src={activeContent.image} 
                      alt={activeContent.title} 
                      className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-[0.85] origin-center" 
                    />
                  </motion.div>

                  {/* Decorative Glassmorphic Floating Elements overlaying the image */}
                  <motion.div 
                    animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
                    className="absolute top-20 right-20 w-24 h-24 bg-white/40 backdrop-blur-md rounded-2xl border border-white/60 shadow-[0_10px_30px_rgba(0,0,0,0.1)] -rotate-12 z-20"
                  />
                  <motion.div 
                    animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                    transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, delay: 1 }}
                    className="absolute bottom-32 left-12 w-32 h-32 bg-[#D7B73F]/20 backdrop-blur-xl rounded-full border border-white/50 shadow-[0_10px_40px_rgba(215,183,63,0.2)] z-20"
                  />

                  {/* Subtle inner shadow to blend edges */}
                  <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.15)] pointer-events-none z-30" />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </div>
  )
}
