import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '../../components/layout'
import { testimonials } from './data'
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react'

export default function Testimonials({ isMobile }: { isMobile: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const next = useCallback(() => {
    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (isHovered) return
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next, isHovered])

  const current = testimonials[activeIndex]

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 100 : -100, opacity: 0, scale: 0.95, filter: 'blur(10px)' }),
    center: { x: 0, opacity: 1, scale: 1, filter: 'blur(0px)' },
    exit: (d: number) => ({ x: d > 0 ? -100 : 100, opacity: 0, scale: 0.95, filter: 'blur(10px)' }),
  }

  return (
    <div className={`w-full bg-[#0B101E] ${isMobile ? 'pt-16 pb-16' : 'pt-24 pb-24'} overflow-hidden relative`}>
      <Container className="relative z-10">
        <div className={`${isMobile ? 'text-left' : 'text-center max-w-4xl mx-auto'} ${isMobile ? 'mb-12' : 'mb-20'}`}>
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center rounded-full border border-[#D7B73F]/40 shadow-[0_0_15px_rgba(215,183,63,0.15)] bg-[#1A1F2E]/80 backdrop-blur-sm overflow-hidden mb-6 self-center px-4 py-1.5">
              <Sparkles size={14} className="text-[#D7B73F] mr-2 animate-pulse" />
              <span className={`${isMobile ? 'text-[0.65rem]' : 'text-xs'} font-bold text-[#D7B73F] tracking-wider uppercase`}>
                WHAT OUR PARTNERS SAY
              </span>
            </div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 200, damping: 20 }}
            className={`${isMobile ? 'text-[2.2rem]' : 'text-[3rem]'} font-extrabold text-white leading-[1.1] tracking-tight mb-5`}
          >
            Trusted by Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D7B73F] to-[#F9E596] drop-shadow-[0_0_15px_rgba(215,183,63,0.2)]">Leaders</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`${isMobile ? 'text-[0.95rem]' : 'text-[1.1rem]'} text-white/60 font-medium leading-relaxed ${isMobile ? '' : 'max-w-2xl mx-auto'}`}
          >
            See how businesses across the ecosystem are growing with CREMP.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
          className={`relative max-w-4xl mx-auto ${isMobile ? 'min-h-[400px]' : 'min-h-[350px]'}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              className={`bg-[#1A1F2E]/40 backdrop-blur-xl border border-white/10 rounded-3xl ${isMobile ? 'p-8' : 'p-12 md:p-14'} shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-[#D7B73F]/30 transition-colors duration-500`}
            >
              <Quote size={isMobile ? 40 : 60} className="text-[#D7B73F]/10 absolute top-6 md:top-10 right-6 md:right-10 transform -rotate-12 group-hover:scale-110 group-hover:rotate-0 transition-all duration-500" strokeWidth={1.5} />
              <div className="absolute inset-0 bg-gradient-to-br from-[#D7B73F]/0 via-transparent to-[#D7B73F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex gap-1.5 mb-6 md:mb-8">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1, type: 'spring' }}
                    >
                      <Star size={isMobile ? 18 : 22} className="text-[#D7B73F] drop-shadow-[0_0_8px_rgba(215,183,63,0.6)]" fill="currentColor" />
                    </motion.div>
                  ))}
                </div>

                <blockquote className={`${isMobile ? 'text-[1.1rem]' : 'text-[1.4rem]'} font-medium text-white leading-relaxed mb-8 md:mb-10`}>
                  "{current.quote}"
                </blockquote>

                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-full bg-[#0B101E] overflow-hidden border border-[#D7B73F]/40 shadow-[0_0_15px_rgba(215,183,63,0.2)] p-1">
                    <img
                      src={`https://i.pravatar.cc/150?img=${current.avatarIndex}`}
                      alt={current.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <div className={`${isMobile ? 'text-[1rem]' : 'text-[1.1rem]'} font-extrabold text-white mb-1`}>{current.name}</div>
                    <div className={`${isMobile ? 'text-[0.8rem]' : 'text-[0.9rem]'} text-white/50 font-medium`}>
                      {current.role}, <span className="text-[#D7B73F]">{current.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className={`flex items-center ${isMobile ? 'justify-between' : 'justify-center gap-6'} mt-10`}>
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/10 bg-[#1A1F2E]/80 backdrop-blur-sm flex items-center justify-center text-white/50 hover:text-[#D7B73F] hover:border-[#D7B73F]/40 hover:shadow-[0_0_15px_rgba(215,183,63,0.15)] hover:scale-110 transition-all active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => { setDirection(idx > activeIndex ? 1 : -1); setActiveIndex(idx) }}
                  className={`rounded-full transition-all duration-300 ${
                    idx === activeIndex 
                      ? 'w-8 h-2.5 bg-[#D7B73F] shadow-[0_0_10px_rgba(215,183,63,0.5)]' 
                      : 'w-2.5 h-2.5 bg-white/10 hover:bg-white/30'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/10 bg-[#1A1F2E]/80 backdrop-blur-sm flex items-center justify-center text-white/50 hover:text-[#D7B73F] hover:border-[#D7B73F]/40 hover:shadow-[0_0_15px_rgba(215,183,63,0.15)] hover:scale-110 transition-all active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}
