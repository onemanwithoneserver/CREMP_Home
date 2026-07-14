import { motion } from 'framer-motion'
import { Container } from '../../components/layout'
import { footerLinks, socialLinks } from './data'

export default function Footer({ isMobile }: { isMobile: boolean }) {
  return (
    <footer className="w-full bg-white border-t border-[#E2E6EE] pt-8 md:pt-12 pb-6 md:pb-8">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`${isMobile ? '' : 'flex justify-between'} mb-10 md:mb-16`}
        >
          <div className={`${isMobile ? 'mb-10' : 'w-[30%]'}`}>
            <div className="flex flex-col justify-center cursor-pointer mb-5 md:mb-6">
              <div className="flex items-center leading-none">
                <span className={`${isMobile ? 'text-[2rem]' : 'text-[2.2rem]'} font-black text-[#2A3A69] tracking-tight`}>CRE</span>
                <div className="relative inline-flex items-center justify-center mx-[1px]">
                  <div className={`absolute -top-[2px] ${isMobile ? 'w-[14px] h-[3px]' : 'w-[16px] h-[3.5px]'} bg-[#C79A17]`} />
                  <span className={`${isMobile ? 'text-[2rem]' : 'text-[2.2rem]'} font-black text-[#2A3A69] tracking-tight`}>M</span>
                </div>
                <span className={`${isMobile ? 'text-[2rem]' : 'text-[2.2rem]'} font-black text-[#2A3A69] tracking-tight`}>P</span>
              </div>
              <div className={`${isMobile ? 'text-[0.4rem]' : 'text-[0.45rem]'} font-extrabold tracking-[0.15em] mt-1.5 leading-[1.3] uppercase`}>
                <span className="text-[#2A3A69]">Commercial Real Estate</span><br />
                <span className="text-[#C79A17]">&amp; Business Opportunities</span>
              </div>
            </div>

            <p className={`text-[0.85rem] md:text-[0.9rem] text-[#6B7491] leading-relaxed mb-6 md:mb-8 ${isMobile ? '' : 'pr-8'}`}>
              India's first integrated platform connecting property owners, franchisors, brokers, and investors to streamline commercial transactions and accelerate growth.
            </p>

            <div className="flex gap-3 md:gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-[#F5F7FA] border border-[#E2E6EE] flex items-center justify-center text-[#3A4566] hover:text-[#C79A17] hover:border-[#C79A17] hover:bg-[rgba(199, 154, 23, 0.05)] transition-colors"
                >
                  <social.icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div className={`${isMobile ? 'grid grid-cols-2 gap-y-10 gap-x-4' : 'w-[60%] grid grid-cols-4 gap-8'}`}>
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-[0.9rem] font-extrabold text-[#2A3A69] mb-5 md:mb-6 capitalize">{category}</h4>
                <ul className="flex flex-col gap-3">
                  {links.map((link, idx) => (
                    <li key={idx}>
                      <a href={link.href} className="text-[0.85rem] text-[#6B7491] hover:text-[#C79A17] font-medium transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <div className={`border-t border-[#E2E6EE] pt-6 md:pt-8 flex ${isMobile ? 'flex-col gap-4 text-center' : 'items-center justify-between'}`}>
          {isMobile && (
            <div className="flex items-center justify-center gap-6 text-[0.8rem] font-medium text-[#6B7491]">
              <a href="#" className="hover:text-[#C79A17] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#C79A17] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#C79A17] transition-colors">Sitemap</a>
            </div>
          )}
          <p className="text-[0.8rem] md:text-[0.85rem] text-[#6B7491] font-medium">
            &copy; {new Date().getFullYear()} CREMP India. All rights reserved.
          </p>
          {!isMobile && (
            <div className="flex items-center gap-6 text-[0.85rem] font-medium text-[#6B7491]">
              <a href="#" className="hover:text-[#C79A17] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#C79A17] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#C79A17] transition-colors">Sitemap</a>
            </div>
          )}
        </div>
      </Container>
    </footer>
  )
}
