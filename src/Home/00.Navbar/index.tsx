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
    const handleScroll = () => setScrolled(window.scrollY > 10)
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
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-elevation-2 border-b border-[#E2E6EE]/60'
          : 'bg-white border-b border-[#E2E6EE]'
      }`}
    >
      <Container>
        <div className={`flex items-center justify-between ${isMobile ? 'h-16' : 'h-20'}`}>
          <div className="flex flex-col justify-center cursor-pointer">
            <div className="flex items-center leading-none">
              <span className={`${isMobile ? 'text-[1.6rem]' : 'text-[2.2rem]'} font-black text-[#2A3A69] tracking-tight`}>CRE</span>
              <div className="relative inline-flex items-center justify-center mx-[1px]">
                <div className={`absolute ${isMobile ? '-top-[1.5px] w-[12px] h-[2.5px]' : '-top-[2px] w-[16px] h-[3.5px]'} bg-[#C79A17]`} />
                <span className={`${isMobile ? 'text-[1.6rem]' : 'text-[2.2rem]'} font-black text-[#2A3A69] tracking-tight`}>M</span>
              </div>
              <span className={`${isMobile ? 'text-[1.6rem]' : 'text-[2.2rem]'} font-black text-[#2A3A69] tracking-tight`}>P</span>
            </div>
            <div className={`${isMobile ? 'text-[0.35rem]' : 'text-[0.45rem]'} font-extrabold tracking-[0.15em] mt-1.5 leading-[1.3] uppercase`}>
              <span className="text-[#2A3A69]">Commercial Real Estate</span><br />
              <span className="text-[#C79A17]">&amp; Business Opportunities</span>
            </div>
          </div>

          {!isMobile && (
            <nav className="flex items-center gap-10 h-full pl-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-[0.85rem] font-bold transition-colors relative h-full flex items-center gap-1.5 ${
                    link.hasActiveState && activeTab === 'franchise'
                      ? 'text-[#C79A17]'
                      : 'text-[#2A3A69] hover:text-[#C79A17]'
                  }`}
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown size={14} strokeWidth={2.5} className="mt-0.5" />}
                  {link.hasActiveState && activeTab === 'franchise' && (
                    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#C79A17] rounded-t-full" />
                  )}
                </a>
              ))}
            </nav>
          )}

          <div className="flex items-center gap-3">
            <Button
              variant="primary"
              className={`!bg-[#2A3A69] hover:!bg-[#1F2A4A] !text-white font-bold rounded-sm border-none shadow-md ${
                isMobile ? 'text-[0.7rem] px-3 py-1.5 h-8' : 'text-[0.85rem] px-6 py-2.5'
              }`}
            >
              <Rocket size={isMobile ? 12 : 16} className="text-[#C79A17] mr-1.5" strokeWidth={2} />
              {isMobile ? 'Pre-Launch' : 'Pre-Launch Access'}
            </Button>
            {isMobile && (
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[#2A3A69] hover:text-[#C79A17] transition-colors p-1"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
              </button>
            )}
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {isMobile && mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 right-0 z-30 bg-white/95 backdrop-blur-xl border-b border-[#E2E6EE] shadow-elevation-3 overflow-hidden"
          >
            <div className="px-5 py-6 flex flex-col gap-1">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center justify-between py-3 text-[0.95rem] font-bold text-[#2A3A69] hover:text-[#C79A17] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown size={16} strokeWidth={2} />}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
