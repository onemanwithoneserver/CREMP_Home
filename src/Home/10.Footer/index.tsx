import { motion } from 'framer-motion'
import { Container } from '../../components/layout'
import { footerLinks, socialLinks } from './data'

export default function Footer({ isMobile }: { isMobile: boolean }) {
  return (
    <footer className="w-full bg-[#070A13] border-t border-white/5 pt-12 md:pt-20 pb-8 md:pb-10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#D7B73F]/20 to-transparent" />
      
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`${isMobile ? '' : 'flex justify-between'} mb-12 md:mb-20`}
        >
          <div className={`${isMobile ? 'mb-12' : 'w-[30%]'}`}>
            <div className="flex flex-col justify-center cursor-pointer mb-6 md:mb-8">
              <div className="flex items-center leading-none">
                <span className={`${isMobile ? 'text-[2.2rem]' : 'text-[2.5rem]'} font-black text-white tracking-tight drop-shadow-md`}>CRE</span>
                <div className="relative inline-flex items-center justify-center mx-[1.5px]">
                  <div className={`absolute -top-[2px] ${isMobile ? 'w-[16px] h-[3px]' : 'w-[18px] h-[3.5px]'} bg-[#D7B73F] shadow-[0_0_10px_rgba(215,183,63,0.8)]`} />
                  <span className={`${isMobile ? 'text-[2.2rem]' : 'text-[2.5rem]'} font-black text-white tracking-tight drop-shadow-md`}>M</span>
                </div>
                <span className={`${isMobile ? 'text-[2.2rem]' : 'text-[2.5rem]'} font-black text-white tracking-tight drop-shadow-md`}>P</span>
              </div>
            </div>

            <p className={`text-[0.9rem] md:text-[0.95rem] text-white/50 font-medium leading-relaxed mb-8 md:mb-10 ${isMobile ? '' : 'pr-8'}`}>
              India's premier integrated platform connecting property owners, franchisors, brokers, and investors to streamline commercial transactions and accelerate growth.
            </p>

            <div className="flex gap-4 md:gap-5">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-12 h-12 rounded-full bg-[#1A1F2E] border border-white/10 flex items-center justify-center text-white/50 hover:text-[#D7B73F] hover:border-[#D7B73F]/40 hover:shadow-[0_0_15px_rgba(215,183,63,0.2)] hover:-translate-y-1 transition-all duration-300"
                >
                  <social.icon size={20} strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          <div className={`${isMobile ? 'grid grid-cols-2 gap-y-12 gap-x-6' : 'w-[60%] grid grid-cols-4 gap-10'}`}>
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-[0.95rem] font-extrabold text-white mb-6 md:mb-8 capitalize tracking-wide">{category}</h4>
                <ul className="flex flex-col gap-4">
                  {links.map((link, idx) => (
                    <li key={idx}>
                      <a href={link.href} className="text-[0.9rem] text-white/50 hover:text-[#D7B73F] font-medium transition-colors duration-300">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <div className={`border-t border-white/10 pt-8 flex ${isMobile ? 'flex-col gap-5 text-center' : 'items-center justify-between'}`}>
          {isMobile && (
            <div className="flex items-center justify-center gap-8 text-[0.85rem] font-medium text-white/40">
              <a href="#" className="hover:text-[#D7B73F] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#D7B73F] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#D7B73F] transition-colors">Sitemap</a>
            </div>
          )}
          <p className="text-[0.85rem] md:text-[0.9rem] text-white/40 font-medium">
            &copy; {new Date().getFullYear()} CREMP India. All rights reserved.
          </p>
          {!isMobile && (
            <div className="flex items-center gap-8 text-[0.9rem] font-medium text-white/40">
              <a href="#" className="hover:text-[#D7B73F] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#D7B73F] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#D7B73F] transition-colors">Sitemap</a>
            </div>
          )}
        </div>
      </Container>
    </footer>
  )
}
