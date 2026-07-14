import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '../../components/layout'
import { testimonials } from './data'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

export default function Testimonials({ isMobile }: { isMobile: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const next = useCallback(() => {
    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const current = testimonials[activeIndex]

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  }

  return (
    <div className={`w-full bg-[#F5F7FA] ${isMobile ? 'pt-10 pb-10' : 'pt-10 pb-10'} border-t border-[#E2E6EE] overflow-hidden`}>
      <Container>
        <div className={`${isMobile ? 'text-left' : 'text-center max-w-4xl mx-auto'} ${isMobile ? 'mb-10' : 'mb-16'}`}>
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className={`inline-block px-3 md:px-4 py-1.5 rounded-full bg-[rgba(199, 154, 23, 0.05)] text-[#C79A17] ${isMobile ? 'text-[0.6rem]' : 'text-[0.65rem]'} font-bold tracking-widest uppercase mb-4 border border-[rgba(199, 154, 23, 0.15)]`}>
              WHAT OUR PARTNERS SAY
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`${isMobile ? 'text-[2.2rem]' : 'text-[2.8rem]'} font-extrabold text-[#2A3A69] leading-[1.1] tracking-tight mb-4 md:mb-5`}
          >
            Trusted by Industry <span className="text-[#C79A17]">Leaders</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`${isMobile ? 'text-[0.95rem]' : 'text-[1.05rem]'} text-[#3A4566] font-medium leading-relaxed ${isMobile ? '' : 'max-w-2xl mx-auto'}`}
          >
            See how businesses across India are growing with CREMP.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className={`relative max-w-4xl mx-auto ${isMobile ? 'min-h-[340px]' : 'min-h-[280px]'}`}
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={`bg-white border border-[#E2E6EE] rounded-sm ${isMobile ? 'p-6' : 'p-10 md:p-12'} shadow-lg relative`}
            >
              <Quote size={isMobile ? 28 : 40} className="text-[#C79A17]/10 absolute top-4 md:top-6 right-4 md:right-6" strokeWidth={1} />

              <div className="flex gap-1 mb-4 md:mb-6">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} size={isMobile ? 14 : 16} className="text-[#C79A17]" fill="currentColor" />
                ))}
              </div>

              <blockquote className={`${isMobile ? 'text-[1rem]' : 'text-[1.2rem]'} font-medium text-[#2A3A69] leading-relaxed mb-6 md:mb-8`}>
                "{current.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden border-2 border-[rgba(199, 154, 23, 0.15)] shadow-sm">
                  <img
                    src={`https://i.pravatar.cc/100?img=${current.avatarIndex}`}
                    alt={current.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className={`${isMobile ? 'text-[0.9rem]' : 'text-[1rem]'} font-extrabold text-[#2A3A69]`}>{current.name}</div>
                  <div className={`${isMobile ? 'text-[0.75rem]' : 'text-[0.85rem]'} text-[#3A4566] font-medium`}>
                    {current.role}, <span className="text-[#C79A17]">{current.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className={`flex items-center ${isMobile ? 'justify-between' : 'justify-center gap-4'} mt-8`}>
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[#E2E6EE] bg-white flex items-center justify-center text-[#3A4566] hover:text-[#C79A17] hover:border-[#C79A17] transition-colors shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => { setDirection(idx > activeIndex ? 1 : -1); setActiveIndex(idx) }}
                  className={`rounded-full transition-all duration-300 ${
                    idx === activeIndex ? 'w-6 h-2 bg-[#C79A17]' : 'w-2 h-2 bg-[#d1d5db] hover:bg-[#6B7491]'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[#E2E6EE] bg-white flex items-center justify-center text-[#3A4566] hover:text-[#C79A17] hover:border-[#C79A17] transition-colors shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}
