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
    <div className={`w-full bg-[#0B101E] ${isMobile ? 'pb-16' : 'pb-24'} overflow-hidden relative`}>
      <Container className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className={`bg-white/95 backdrop-blur-3xl border border-white/40 ${isMobile ? 'rounded-2xl p-8' : 'rounded-3xl p-14'} ${isMobile ? '' : 'flex items-center justify-between'} shadow-[0_30px_60px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,1)] ring-1 ring-white/50 relative overflow-hidden`}
        >
          {/* Subtle architectural building overlay */}
          <div
            className={`absolute left-0 bottom-0 ${isMobile ? 'w-full h-[60%]' : 'w-[45%] h-[150%]'} opacity-[0.03] bg-cover bg-bottom pointer-events-none mix-blend-multiply`}
            style={{ WebkitMaskImage: 'linear-gradient(to top, black, transparent)', backgroundImage: `url(${heroBuilding})` }}
          />

          <div className={`${isMobile ? 'flex flex-col items-center text-center mb-10 border-b border-[#E2E6EE] pb-8' : 'flex items-center gap-8 w-[45%] pr-10'} relative z-10`}>
            <motion.div 
              initial={{ rotate: -15, scale: 0 }}
              whileInView={{ rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              className={`${isMobile ? 'w-16 h-20 mb-5' : 'w-20 h-24'} relative shrink-0`}
            >
              <div className="absolute inset-0 bg-[#0B101E] shadow-[0_10px_20px_rgba(11,16,30,0.4)]" style={{ clipPath: 'polygon(50% 100%, 100% 80%, 100% 0, 0 0, 0 80%)' }} />
              <div className="absolute inset-[1.5px] bg-gradient-to-br from-[#0B101E] to-[#1A1F2E] border border-white/10" style={{ clipPath: 'polygon(50% 100%, 100% 80%, 100% 0, 0 0, 0 80%)' }} />
              <div className="absolute inset-0 flex items-center justify-center pt-2">
                <Star size={isMobile ? 22 : 28} className="text-[#D7B73F] drop-shadow-[0_0_10px_rgba(215,183,63,0.5)]" fill="currentColor" />
              </div>
            </motion.div>
            
            <div className="flex flex-col justify-center">
              <h3 className={`${isMobile ? 'text-[1.6rem]' : 'text-[2.2rem]'} font-extrabold text-[#0B101E] leading-[1.1] mb-2 tracking-tight`}>Trusted by Thousands.</h3>
              <h3 className={`${isMobile ? 'text-[1.4rem]' : 'text-[1.8rem]'} font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#C79A17] to-[#D7B73F] leading-tight ${isMobile ? 'mb-3' : 'mb-4'}`}>Chosen for Results.</h3>
              {!isMobile && (
                <p className="text-[1rem] text-[#3A4566] font-medium leading-relaxed max-w-sm">
                  Join a growing community of businesses who trust CREMP to accelerate their growth.
                </p>
              )}
            </div>
          </div>

          {!isMobile && <div className="w-px h-32 bg-gradient-to-b from-transparent via-[#E2E6EE] to-transparent relative z-10" />}

          <div className={`${isMobile ? 'grid grid-cols-2 gap-y-10 gap-x-6' : 'flex items-center justify-between flex-1 pl-16'} relative z-10`}>
            {metrics.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + (0.1 * idx), type: 'spring' }}
                className="text-center flex flex-col items-center group"
              >
                <div className={`${isMobile ? 'w-12 h-12' : 'w-14 h-14'} rounded-full bg-[#F5F7FA] border border-[#E2E6EE] flex items-center justify-center text-[#2A3A69] mb-4 md:mb-5 shadow-inner group-hover:bg-[#0B101E] group-hover:text-[#D7B73F] group-hover:border-[#D7B73F]/40 group-hover:shadow-[0_0_15px_rgba(215,183,63,0.2)] transition-all duration-300`}>
                  <m.icon size={isMobile ? 18 : 22} strokeWidth={2} className="relative z-10" />
                </div>
                <span className={`block ${isMobile ? 'text-[1.8rem]' : 'text-[2.2rem]'} font-black text-[#0B101E] leading-none mb-2 tracking-tight`}>
                  <Counter from={0} to={m.value} suffix={m.suffix} isFormatted={m.isFormatted} />
                </span>
                <span className={`${isMobile ? 'text-[0.65rem]' : 'text-[0.8rem]'} font-bold text-[#6B7491] uppercase tracking-[0.15em]`}>{m.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  )
}
