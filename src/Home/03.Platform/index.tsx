import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from '../../components/layout'
import { Button } from '../../components/ui'
import { platformTabs, platformContent } from './data'

export default function Platform({ isMobile }: { isMobile: boolean }) {
  const [activeTab, setActiveTab] = useState(platformTabs[0].id)
  const activeContent = platformContent[activeTab as keyof typeof platformContent]

  return (
    <div className="w-full bg-[#ffffff] pt-10 md:pt-10 pb-12 md:pb-20 overflow-hidden border-t border-[#E2E6EE]">
      <Container>
        <div className={`${isMobile ? 'text-left' : 'text-center max-w-3xl mx-auto'} mb-10 md:mb-16`}>
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className={`inline-block px-3 md:px-4 py-1.5 rounded-full bg-[rgba(199, 154, 23, 0.05)] text-[#C79A17] ${isMobile ? 'text-[0.6rem]' : 'text-[0.7rem]'} font-bold tracking-widest uppercase mb-4 border border-[rgba(199, 154, 23, 0.15)]`}>
              ONE INTEGRATED ECOSYSTEM
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`${isMobile ? 'text-[2.2rem]' : 'text-[2.8rem]'} font-extrabold text-[#2A3A69] leading-[1.15] tracking-tight mb-4 md:mb-5`}
          >
            Built for Everyone in the <br /> <span className="text-[#C79A17]">Commercial Ecosystem</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`${isMobile ? 'text-[0.95rem]' : 'text-[1.05rem]'} text-[#3A4566] font-medium leading-relaxed`}
          >
            Whether you're looking to showcase properties, expand your franchise, or discover verified investment opportunities—we have the tools you need.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className={`${isMobile ? '-mx-5 px-5 overflow-x-auto scrollbar-hide' : 'flex items-center justify-center'} mb-8 md:mb-12`}
        >
          <div className={`inline-flex p-1 md:p-1.5 bg-[#F5F7FA] border border-[#E2E6EE] rounded-md shadow-sm ${isMobile ? 'min-w-max' : 'overflow-x-auto max-w-full'}`}>
            {platformTabs.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 md:gap-2.5 px-4 md:px-6 py-2.5 md:py-3 rounded-sm ${isMobile ? 'text-[0.75rem]' : 'text-[0.85rem]'} font-bold transition-all relative ${
                    isActive ? 'text-[#2A3A69] shadow-sm' : 'text-[#6B7491] hover:text-[#2A3A69] hover:bg-gray-100/50'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="platform-tab"
                      className="absolute inset-0 bg-white border border-[#E2E6EE] rounded-sm"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                    <tab.icon size={isMobile ? 14 : 16} className={isActive ? 'text-[#C79A17]' : ''} />
                    {tab.label}
                  </span>
                </button>
              )
            })}
          </div>
        </motion.div>

        <div className={`relative ${isMobile ? '' : 'min-h-[500px]'}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className={`bg-white border border-[#E2E6EE] rounded-sm overflow-hidden shadow-xl shadow-[#2A3A69]/5 flex ${isMobile ? 'flex-col' : ''}`}
            >
              {isMobile && (
                <div className="w-full h-48 relative bg-[#F5F7FA]">
                  <img src={activeContent.image} alt={activeContent.title} className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#2A3A69]/40 to-transparent mix-blend-overlay" />
                </div>
              )}

              <div className={`${isMobile ? 'p-6' : 'w-1/2 p-12 border-r border-[#E2E6EE]'} flex flex-col justify-center`}>
                <div className="mb-4 md:mb-6">
                  <span className={`inline-block px-2.5 md:px-3 py-1 rounded-sm bg-[#F5F7FA] border border-[#E2E6EE] text-[#3A4566] ${isMobile ? 'text-[0.55rem]' : 'text-[0.65rem]'} font-bold tracking-widest uppercase`}>
                    {activeContent.tag}
                  </span>
                </div>
                <h3 className={`${isMobile ? 'text-[1.5rem]' : 'text-[2.2rem]'} font-extrabold text-[#2A3A69] leading-tight mb-2`}>
                  {activeContent.title}
                </h3>
                <h4 className={`${isMobile ? 'text-[0.85rem]' : 'text-[1rem]'} font-bold text-[#C79A17] mb-4 md:mb-6`}>
                  {activeContent.subtitle}
                </h4>
                <p className={`${isMobile ? 'text-[0.85rem]' : 'text-[1rem]'} text-[#3A4566] font-medium leading-relaxed mb-6 md:mb-10`}>
                  {activeContent.desc}
                </p>

                <div className={`grid grid-cols-2 ${isMobile ? 'gap-y-4 gap-x-2 mb-8' : 'gap-y-6 gap-x-4 mb-12'}`}>
                  {activeContent.items.map((item, idx) => (
                    <div key={idx} className={`flex ${isMobile ? 'flex-col gap-2' : 'items-center gap-3'}`}>
                      <div className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'} rounded-full bg-[rgba(199, 154, 23, 0.05)] flex items-center justify-center border border-[rgba(199, 154, 23, 0.15)] shrink-0`}>
                        <item.icon size={isMobile ? 14 : 18} className="text-[#C79A17]" strokeWidth={2} />
                      </div>
                      <span className={`${isMobile ? 'text-[0.7rem]' : 'text-[0.85rem]'} font-bold text-[#2A3A69] leading-tight`}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="primary"
                  className={`!bg-[#2A3A69] hover:!bg-[#1F2A4A] !text-white font-bold rounded-sm group ${
                    isMobile ? 'w-full text-[0.85rem] py-3.5' : 'self-start text-[0.9rem] px-8 py-3.5'
                  }`}
                >
                  {activeContent.buttonText}
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              {!isMobile && (
                <div className="w-1/2 relative bg-[#F5F7FA]">
                  <img src={activeContent.image} alt={activeContent.title} className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#2A3A69]/40 to-transparent mix-blend-overlay" />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </div>
  )
}
