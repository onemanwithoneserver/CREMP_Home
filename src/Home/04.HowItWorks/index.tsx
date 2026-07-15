import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { Container } from '../../components/layout'
import { steps } from './data'

export default function HowItWorks({ isMobile }: { isMobile: boolean }) {
  return (
    <div className={`w-full bg-[#0B101E] ${isMobile ? 'pt-16 pb-16' : 'pt-24 pb-24'} overflow-hidden relative`}>
      {/* Background ambient glows */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#D7B73F]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#2A3A69]/10 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <div className={`${isMobile ? 'text-left' : 'text-center max-w-4xl mx-auto'} ${isMobile ? 'mb-16' : 'mb-24'} relative z-10`}>
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center rounded-full border border-[#D7B73F]/40 shadow-[0_0_15px_rgba(215,183,63,0.15)] bg-[#1A1F2E]/80 backdrop-blur-sm overflow-hidden mb-6 self-center px-4 py-1.5">
              <Sparkles size={14} className="text-[#D7B73F] mr-2 animate-pulse" />
              <span className={`${isMobile ? 'text-[0.65rem]' : 'text-xs'} font-bold text-[#D7B73F] tracking-wider uppercase`}>
                HOW IT WORKS
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
            Your Growth Journey <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D7B73F] to-[#F9E596] drop-shadow-[0_0_15px_rgba(215,183,63,0.2)]">Step by Step</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`${isMobile ? 'text-[0.95rem]' : 'text-[1.1rem]'} text-white/60 font-medium leading-relaxed ${isMobile ? '' : 'max-w-2xl mx-auto'}`}
          >
            Once you join CREMP, we make it easy for you to get discovered, connect with the right people and grow your business.
          </motion.p>
        </div>

        {isMobile ? (
          <div className="relative pl-6">
            <div className="absolute left-6 top-4 bottom-4 w-px bg-gradient-to-b from-[#D7B73F]/0 via-[#D7B73F]/40 to-[#D7B73F]/0" />
            <div className="flex flex-col gap-10">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1, type: 'spring', stiffness: 100 }}
                  className="relative pl-8 group"
                >
                  <div className="absolute left-[-1.1rem] top-4 w-9 h-9 bg-[#0B101E] rounded-full border border-[#D7B73F]/40 shadow-[0_0_15px_rgba(215,183,63,0.3)] flex items-center justify-center z-10 group-hover:border-[#D7B73F] group-hover:shadow-[0_0_20px_rgba(215,183,63,0.6)] transition-all">
                    <step.icon size={14} className="text-[#D7B73F]" strokeWidth={2.5} />
                  </div>
                  <div className="bg-[#1A1F2E]/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl relative overflow-hidden group-hover:border-[#D7B73F]/30 transition-all">
                    <div className="absolute -right-4 -top-6 text-[4.5rem] font-black text-white/5 leading-none pointer-events-none group-hover:text-[#D7B73F]/5 transition-colors">
                      {step.num}
                    </div>
                    <div className="relative z-10">
                      <h4 className="text-[1.1rem] font-extrabold text-white mb-2 group-hover:text-[#D7B73F] transition-colors">{step.title}</h4>
                      <p className="text-[0.85rem] text-white/60 font-medium leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-[1000px] mx-auto relative px-4">
            {/* Center glowing timeline line */}
            <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-[#D7B73F]/0 via-[#D7B73F]/40 to-[#D7B73F]/0 -translate-x-1/2 hidden md:block shadow-[0_0_15px_rgba(215,183,63,0.3)]" />
            <div className="flex flex-col gap-24 relative">
              {steps.map((step, idx) => {
                const isEven = idx % 2 === 0
                return (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: 0.1, type: 'spring', stiffness: 100 }}
                    className={`flex items-center w-full relative group ${isEven ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`w-[calc(50%-4rem)] bg-[#1A1F2E]/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(215,183,63,0.15)] hover:border-[#D7B73F]/40 hover:-translate-y-2 transition-all relative z-10 ${isEven ? 'text-right pr-14' : 'text-left pl-14'}`}>
                      <div className={`absolute top-6 text-[5rem] font-black text-white/5 leading-none pointer-events-none group-hover:text-[#D7B73F]/5 transition-colors ${isEven ? 'right-6' : 'left-6'}`}>
                        {step.num}
                      </div>
                      <div className="relative z-10 flex flex-col h-full justify-center">
                        <h4 className="text-[1.3rem] font-extrabold text-white mb-3 group-hover:text-[#D7B73F] transition-colors">{step.title}</h4>
                        <p className="text-[0.95rem] text-white/60 font-medium leading-relaxed">{step.desc}</p>
                      </div>
                      
                      {/* Connecting dashed line to center */}
                      <div className={`absolute top-1/2 -translate-y-1/2 w-16 border-t border-dashed border-[#D7B73F]/30 hidden md:block group-hover:border-[#D7B73F]/60 transition-colors ${isEven ? '-right-16' : '-left-16'}`} />
                    </div>

                    {/* Center Icon Node */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#0B101E] rounded-full border border-[#D7B73F]/30 shadow-[0_0_20px_rgba(215,183,63,0.2)] flex items-center justify-center z-20 group-hover:border-[#D7B73F] group-hover:shadow-[0_0_30px_rgba(215,183,63,0.6)] group-hover:scale-110 transition-all hidden md:flex">
                      <step.icon size={22} className="text-[#D7B73F]" strokeWidth={2.5} />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        )}
      </Container>
    </div>
  )
}
