import { motion } from 'framer-motion'
import { Container } from '../../components/layout'
import { logos } from './data'

export default function LogoStrip({ isMobile }: { isMobile: boolean }) {
  const duplicatedLogos = [...logos, ...logos]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full bg-[#ffffff] border-t border-[#E2E6EE] py-6 md:py-8 overflow-hidden relative"
    >
      <Container>
        <p className={`text-center ${isMobile ? 'text-[0.65rem]' : 'text-[0.8rem]'} font-bold text-[#6B7491] uppercase tracking-wider mb-6 md:mb-8`}>
          Trusted by 500+ businesses across India
        </p>
      </Container>

      <div className="flex whitespace-nowrap overflow-hidden relative">
        <div className={`absolute left-0 top-0 bottom-0 ${isMobile ? 'w-16' : 'w-32'} bg-gradient-to-r from-[#ffffff] to-transparent z-10`} />
        <div className={`absolute right-0 top-0 bottom-0 ${isMobile ? 'w-16' : 'w-32'} bg-gradient-to-l from-[#ffffff] to-transparent z-10`} />

        <div className={`flex items-center ${isMobile ? 'gap-10' : 'gap-16'} px-8 min-w-max animate-marquee`}>
          {duplicatedLogos.map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-default"
            >
              <span className={`${isMobile ? 'text-lg' : 'text-xl'} font-black tracking-tight text-[#2A3A69] select-none`}>
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
