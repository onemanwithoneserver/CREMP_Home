import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronRight, Menu, X, User } from 'lucide-react'
import { Container } from '../../components/layout'
import { Button } from '../../components/ui'

const navLinks = [
  { label: 'Marketplace', href: '#', hasDropdown: true },
  { label: 'Franchise', href: '#', hasDropdown: true, hasActiveState: true },
  { label: 'For Investors', href: '#' },
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
    <div className="h-0 w-full sticky top-0 z-50">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full sticky top-0 z-50 transition-all duration-500 pt-4 px-4 sm:px-6"
    >
      <Container className="!px-0 max-w-[1200px]">
        <div className={`flex items-center justify-between transition-all duration-500 bg-[#0B101E]/85 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.4)] border border-white/15 rounded-[2rem] px-5 sm:px-8 ${isMobile ? 'h-16' : scrolled ? 'h-16' : 'h-20'}`}>
          <div className="flex flex-col justify-center cursor-pointer group">
            <div className="flex items-center leading-none">
              <span className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-black text-white tracking-tighter`}>CRE</span>
              <div className="relative inline-flex items-center justify-center mx-[2px]">
                <motion.div 
                  className={`absolute ${isMobile ? '-top-[2px] w-[14px] h-[3px]' : '-top-[3px] w-[18px] h-[4px]'} bg-gradient-to-r from-[#D7B73F] to-[#C79A17] rounded-full`}
                  layoutId="logo-accent"
                />
                <span className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-black text-white tracking-tighter`}>M</span>
              </div>
              <span className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-black text-white tracking-tighter`}>P</span>
            </div>
          </div>

          {!isMobile && (
            <nav className="flex items-center gap-8 h-full ml-12">
              {navLinks.map((link) => {
                const isActive = link.hasActiveState && activeTab === 'franchise'
                
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="relative group h-full flex items-center"
                  >
                    <span className={`text-sm font-medium tracking-wide transition-colors duration-300 flex items-center gap-1.5 ${
                      isActive ? 'text-white font-semibold' : 'text-white/70 group-hover:text-white'
                    }`}>
                      {link.label}
                      {link.hasDropdown && (
                        <ChevronDown 
                          size={14} 
                          strokeWidth={2} 
                          className="transition-transform duration-300 group-hover:rotate-180 opacity-70" 
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
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left opacity-20" />
                    )}
                  </a>
                )
              })}
            </nav>
          )}

          <div className="flex items-center gap-4 ml-auto">
            {!isMobile && (
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 font-semibold rounded-[4px] shadow-sm bg-transparent px-5 py-2 text-sm"
              >
                <User size={16} className="mr-2 opacity-70" />
                Sign In
              </Button>
            )}
            
            <Button
              variant="primary"
              className={`relative overflow-hidden group bg-gradient-to-r from-[#D7B73F] to-[#D98725] hover:brightness-110 text-white font-semibold rounded-[4px] shadow-lg transition-all duration-300 border-none ${
                isMobile ? 'text-[0.75rem] px-4 py-2 h-9' : 'text-sm px-6 py-2'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              {isMobile ? 'Start' : 'Get Started'}
              <ChevronRight size={16} className="ml-1 opacity-90 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2} />
            </Button>

            {isMobile && (
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="relative z-50 text-white p-2 -mr-2"
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
            className="fixed inset-0 z-40 bg-[#0B101E]/95 backdrop-blur-3xl pt-24 px-6 overflow-y-auto"
          >
            <div className="py-8 flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center justify-between pb-4 border-b border-white/5 text-lg font-medium text-white/90 tracking-wide"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown size={18} strokeWidth={1.5} className="text-[#C79A17]" />}
                </motion.a>
              ))}
              <div className="pt-4 flex flex-col gap-4">
                <Button variant="outline" className="w-full border-white/20 text-white justify-center">
                  <User size={16} className="mr-2" /> Sign In
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
    </div>
  )
}