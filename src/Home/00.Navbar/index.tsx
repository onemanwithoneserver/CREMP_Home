import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Rocket, Menu, X } from 'lucide-react'
import { Container } from '../../components/layout'
import { Button } from '../../components/ui'

const navLinks = [
  { label: 'For Investors', href: '#' },
  { label: 'For Franchisors', href: '#', hasActiveState: true },
  { label: 'For Brokers', href: '#' },
  { label: 'Resources', href: '#', hasDropdown: true },
  { label: 'About Us', href: '#' },
]

export default function Navbar({ isMobile, activeTab = 'home' }: { isMobile: boolean; activeTab?: 'home' | 'franchise' }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isMobile) setMobileMenuOpen(false)
  }, [isMobile])

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/60 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-white/40'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <Container>
        <div className={`flex items-center justify-between transition-all duration-500 ${isMobile ? 'h-16' : scrolled ? 'h-20' : 'h-24'}`}>
          <div className="flex flex-col justify-center cursor-pointer group">
            <div className="flex items-center leading-none">
              <span className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-black text-[#2A3A69] tracking-tighter`}>CRE</span>
              <div className="relative inline-flex items-center justify-center mx-[2px]">
                <motion.div 
                  className={`absolute ${isMobile ? '-top-[2px] w-[14px] h-[3px]' : '-top-[3px] w-[18px] h-[4px]'} bg-gradient-to-r from-[#D7B73F] to-[#C79A17] rounded-full`}
                  layoutId="logo-accent"
                />
                <span className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-black text-[#2A3A69] tracking-tighter`}>M</span>
              </div>
              <span className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-black text-[#2A3A69] tracking-tighter`}>P</span>
            </div>

          </div>

          {!isMobile && (
            <nav className="flex items-center gap-10 h-full">
              {navLinks.map((link) => {
                const isActive = link.hasActiveState && activeTab === 'franchise'
                
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="relative group h-full flex items-center"
                  >
                    <span className={`text-sm font-semibold tracking-wide transition-colors duration-300 flex items-center gap-1.5 ${
                      isActive ? 'text-[#C79A17]' : 'text-[#2A3A69]/80 group-hover:text-[#2A3A69]'
                    }`}>
                      {link.label}
                      {link.hasDropdown && (
                        <ChevronDown 
                          size={14} 
                          strokeWidth={2} 
                          className="transition-transform duration-300 group-hover:rotate-180" 
                        />
                      )}
                    </span>
                    
                    {isActive && (
                      <motion.div 
                        layoutId="active-nav-indicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D7B73F] to-[#C79A17] shadow-[0_0_8px_rgba(199,154,23,0.5)]" 
                      />
                    )}
                    
                    {!isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2A3A69] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left opacity-10" />
                    )}
                  </a>
                )
              })}
            </nav>
          )}

          <div className="flex items-center gap-4">
            <Button
              variant="primary"
              className={`relative overflow-hidden group bg-[#2A3A69] hover:bg-[#1F2A4A] text-white font-bold rounded-sm shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#2A3A69]/20 ${
                isMobile ? 'text-[0.75rem] px-4 py-2 h-9' : 'text-[0.85rem] px-7 py-3'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <Rocket size={isMobile ? 14 : 16} className="text-[#D7B73F] mr-2 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2.5} />
              {isMobile ? 'Pre-Launch' : 'Pre-Launch Access'}
            </Button>

            {isMobile && (
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="relative z-50 text-[#2A3A69] p-2 -mr-2"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} strokeWidth={1.5} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} strokeWidth={1.5} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            )}
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {isMobile && mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 right-0 z-40 bg-white/95 backdrop-blur-3xl border-b border-[#E2E6EE]/50 shadow-2xl h-[100vh]"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center justify-between pb-4 border-b border-[#2A3A69]/5 text-lg font-bold text-[#2A3A69] tracking-wide"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown size={18} strokeWidth={1.5} className="text-[#C79A17]" />}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}