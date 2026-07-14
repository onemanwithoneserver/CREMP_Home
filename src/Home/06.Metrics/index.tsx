import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Container } from '../../components/layout'
import { metrics } from './data'
import { Star } from 'lucide-react'

import heroBuilding from '../images/hero_building.png'

function Counter({ from, to, suffix, isFormatted }: { from: number; to: number; suffix: string; isFormatted?: boolean }) {
  const [count, setCount] = useState(from)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (isInView) {
      let start = from
      const duration = 2000
      const increment = (to - from) / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= to) {
          setCount(to)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, from, to])

  const displayCount = isFormatted && count === to ? '10K' : count

  return (
    <span ref={ref}>
      {displayCount}{suffix}
    </span>
  )
}

export default function Metrics({ isMobile }: { isMobile: boolean }) {
  return (
    <div className={`w-full bg-[#ffffff] ${isMobile ? 'pb-10' : 'pb-10'} overflow-hidden`}>
      <Container>
        <div className={`bg-[#F5F7FA] border border-[#E2E6EE] ${isMobile ? 'rounded-md p-6' : 'rounded-md p-10'} ${isMobile ? '' : 'flex items-center justify-between'} shadow-sm relative overflow-hidden`}>
          <div
            className={`absolute left-0 bottom-0 ${isMobile ? 'w-full h-1/2' : 'w-[45%] h-[150%]'} opacity-10 bg-cover bg-bottom mix-blend-luminosity`}
            style={{ WebkitMaskImage: 'linear-gradient(to top, black, transparent)', backgroundImage: `url(${heroBuilding})` }}
          />

          <div className={`${isMobile ? 'flex flex-col items-center text-center mb-8 border-b border-[#E2E6EE] pb-6' : 'flex items-center gap-8 w-[45%] pr-8'} relative z-10`}>
            <div className={`${isMobile ? 'w-16 h-20 mb-4' : 'w-20 h-24'} relative shrink-0`}>
              <div className="absolute inset-0 bg-[#2A3A69]" style={{ clipPath: 'polygon(50% 100%, 100% 80%, 100% 0, 0 0, 0 80%)' }} />
              <div className="absolute inset-[1.5px] bg-gradient-to-br from-[#2A3A69] to-[#1F2A4A] border border-white/10" style={{ clipPath: 'polygon(50% 100%, 100% 80%, 100% 0, 0 0, 0 80%)' }} />
              <div className="absolute inset-0 flex items-center justify-center pt-2">
                <Star size={isMobile ? 20 : 26} className="text-[#C79A17]" fill="currentColor" />
              </div>
            </div>
            <div>
              <h3 className={`${isMobile ? 'text-[1.3rem]' : 'text-[1.6rem]'} font-extrabold text-[#2A3A69] leading-tight mb-1`}>Trusted by Thousands.</h3>
              <h3 className={`${isMobile ? 'text-[1.3rem]' : 'text-[1.6rem]'} font-extrabold text-[#C79A17] leading-tight ${isMobile ? 'mb-2' : 'mb-3'}`}>Chosen for Results.</h3>
              {!isMobile && (
                <p className="text-[0.85rem] text-[#3A4566] font-medium leading-relaxed max-w-sm">
                  Join a growing community of businesses who trust CREMP.
                </p>
              )}
            </div>
          </div>

          {!isMobile && <div className="w-px h-24 bg-[#E2E6EE] relative z-10" />}

          <div className={`${isMobile ? 'grid grid-cols-2 gap-y-8 gap-x-4' : 'flex items-center justify-between flex-1 pl-12'} relative z-10`}>
            {metrics.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: isMobile ? 15 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: isMobile ? 0.4 : 0.5, delay: 0.1 * idx }}
                className="text-center flex flex-col items-center group"
              >
                <div className={`${isMobile ? 'w-10 h-10' : 'w-12 h-12'} rounded-full bg-white border border-[#E2E6EE] flex items-center justify-center ${isMobile ? 'text-[#C79A17]' : 'text-[#3A4566]'} mb-3 md:mb-4 shadow-sm group-hover:text-[#C79A17] group-hover:border-[rgba(199, 154, 23, 0.15)] transition-colors`}>
                  <m.icon size={isMobile ? 16 : 20} strokeWidth={1.5} />
                </div>
                <span className={`block ${isMobile ? 'text-[1.4rem]' : 'text-[1.6rem]'} font-black text-[#2A3A69] leading-none mb-1.5`}>
                  <Counter from={0} to={m.value} suffix={m.suffix} isFormatted={m.isFormatted} />
                </span>
                <span className={`${isMobile ? 'text-[0.6rem]' : 'text-[0.7rem]'} font-bold text-[#6B7491] uppercase tracking-wider`}>{m.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
