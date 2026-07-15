import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '../../components/layout'
import { Button } from '../../components/ui'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import { roles } from './data'

export default function Roles({ isMobile }: { isMobile: boolean }) {
  const [activeRole, setActiveRole] = useState(roles[0])

  return (
    <div className={`w-full bg-[#0B101E] ${isMobile ? 'pt-16 pb-16' : 'pt-24 pb-24'} overflow-hidden relative`}>
      {/* Background ambient glows */}
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-[#D7B73F]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#2A3A69]/10 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <div className={`${isMobile ? 'text-left' : 'text-center max-w-4xl mx-auto'} ${isMobile ? 'mb-12' : 'mb-20'}`}>
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center rounded-full border border-[#D7B73F]/40 shadow-[0_0_15px_rgba(215,183,63,0.15)] bg-[#1A1F2E]/80 backdrop-blur-sm overflow-hidden mb-6 self-center px-4 py-1.5">
              <Sparkles size={14} className="text-[#D7B73F] mr-2 animate-pulse" />
              <span className={`${isMobile ? 'text-[0.65rem]' : 'text-xs'} font-bold text-[#D7B73F] tracking-wider uppercase`}>
                WHO IS CREMP FOR
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
            A Place for Every <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D7B73F] to-[#F9E596] drop-shadow-[0_0_15px_rgba(215,183,63,0.2)]">
              {isMobile ? 'Professional' : 'Industry Professional'}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`${isMobile ? 'text-[0.95rem]' : 'text-[1.1rem]'} text-white/60 font-medium leading-relaxed ${isMobile ? '' : 'max-w-2xl mx-auto'}`}
          >
            Select your role below to see how CREMP can accelerate your business growth and connect you with the right opportunities.
          </motion.p>
        </div>

        {isMobile ? (
          <>
            <div className="mb-10 -mx-5 px-5 overflow-x-auto scrollbar-hide">
              <div className="flex gap-3 pb-2 min-w-max">
                {roles.map((role) => {
                  const isActive = activeRole.id === role.id
                  return (
                    <button
                      key={role.id}
                      onClick={() => setActiveRole(role)}
                      className={`flex flex-col items-center justify-center p-3 w-28 h-28 rounded-2xl border transition-all ${
                        isActive ? 'bg-[#1A1F2E]/80 backdrop-blur-md border-[#D7B73F]/40 shadow-[0_10px_20px_rgba(215,183,63,0.15)]' : 'bg-[#1A1F2E]/30 border-white/5 hover:border-white/10'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-colors ${
                        isActive ? 'bg-[#D7B73F] text-[#0B101E]' : 'bg-[#0B101E] text-white/50'
                      }`}>
                        <role.icon size={18} strokeWidth={2} />
                      </div>
                      <span className={`text-[0.65rem] font-bold text-center leading-tight transition-colors ${
                        isActive ? 'text-[#D7B73F]' : 'text-white/50'
                      }`}>
                        {role.title}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="relative min-h-[380px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeRole.id}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="bg-white/95 backdrop-blur-2xl rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/40 ring-1 ring-white/30"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-full bg-[#0B101E] border border-[#D7B73F]/40 flex items-center justify-center text-[#D7B73F] shrink-0 shadow-[0_0_15px_rgba(215,183,63,0.2)]">
                      <activeRole.icon size={22} strokeWidth={2} />
                    </div>
                    <h3 className="text-[1.3rem] font-extrabold text-[#0B101E] leading-tight">{activeRole.title}</h3>
                  </div>
                  <p className="text-[0.9rem] text-[#3A4566] font-medium leading-relaxed mb-6 border-b border-[#E2E6EE] pb-6">
                    {activeRole.desc}
                  </p>
                  <h4 className="text-[0.7rem] font-bold text-[#C79A17] uppercase tracking-[0.15em] mb-4">Key Benefits</h4>
                  <div className="flex flex-col gap-4 mb-8">
                    {activeRole.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-[#C79A17] shrink-0 mt-0.5 drop-shadow-sm" strokeWidth={2.5} />
                        <span className="text-[0.85rem] font-bold text-[#3A4566] leading-snug">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="primary" className="w-full !bg-gradient-to-r !from-[#D7B73F] !to-[#F9E596] hover:!from-[#C79A17] hover:!to-[#D7B73F] !text-[#0B101E] text-[0.85rem] font-black py-4 rounded-xl shadow-[0_10px_25px_rgba(215,183,63,0.4)] group overflow-hidden relative">
                    <span className="relative z-10 flex items-center justify-center">
                      Join as {activeRole.title.split(' ')[0]}
                      <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  </Button>
                </motion.div>
              </AnimatePresence>
            </div>
          </>
        ) : (
          <div className="flex gap-10 relative z-10 max-w-[1100px] mx-auto">
            <div className="w-1/3 flex flex-col gap-3">
              {roles.map((role, idx) => {
                const isActive = activeRole.id === role.id
                return (
                  <motion.button
                    key={role.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05, type: 'spring', stiffness: 100 }}
                    onClick={() => setActiveRole(role)}
                    className={`flex items-center gap-5 p-5 rounded-2xl text-left transition-all border ${
                      isActive ? 'bg-[#1A1F2E]/80 backdrop-blur-md border-[#D7B73F]/40 shadow-[0_15px_30px_rgba(215,183,63,0.15)] scale-[1.02]' : 'bg-[#1A1F2E]/20 border-white/5 hover:bg-[#1A1F2E]/50 hover:border-white/10'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isActive ? 'bg-[#D7B73F] text-[#0B101E] shadow-[0_0_15px_rgba(215,183,63,0.4)]' : 'bg-[#0B101E] text-white/50 border border-white/10'
                    }`}>
                      <role.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                    </div>
                    <span className={`text-[1rem] font-bold transition-colors ${
                      isActive ? 'text-white' : 'text-white/50'
                    }`}>
                      {role.title}
                    </span>
                  </motion.button>
                )
              })}
            </div>

            <div className="w-2/3 relative h-full min-h-[450px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeRole.id}
                  initial={{ opacity: 0, y: 30, scale: 0.95, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -20, scale: 0.98, filter: 'blur(5px)' }}
                  transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                  className="bg-white/95 backdrop-blur-3xl rounded-[2.5rem] p-12 shadow-[0_30px_60px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,1)] h-full flex flex-col justify-center border border-white/40 ring-1 ring-white/50"
                >
                  <div className="flex items-center gap-5 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-[#0B101E] border border-[#D7B73F]/40 flex items-center justify-center text-[#D7B73F] shadow-[0_0_20px_rgba(215,183,63,0.2)]">
                      <activeRole.icon size={28} strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-[2.2rem] font-extrabold text-[#0B101E] leading-tight">{activeRole.title}</h3>
                    </div>
                  </div>
                  <p className="text-[1.1rem] text-[#3A4566] font-medium leading-relaxed mb-8 border-b border-[#E2E6EE] pb-8">
                    {activeRole.desc}
                  </p>
                  <h4 className="text-[0.8rem] font-bold text-[#C79A17] uppercase tracking-[0.2em] mb-6">Key Benefits</h4>
                  <div className="flex flex-col gap-5 mb-12">
                    {activeRole.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <CheckCircle2 size={22} className="text-[#C79A17] shrink-0 drop-shadow-sm" strokeWidth={2.5} />
                        <span className="text-[1.05rem] font-bold text-[#3A4566]">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="primary" className="self-start !bg-gradient-to-r !from-[#D7B73F] !to-[#F9E596] hover:!from-[#C79A17] hover:!to-[#D7B73F] !text-[#0B101E] text-[1rem] font-black px-10 py-5 rounded-xl shadow-[0_10px_25px_rgba(215,183,63,0.4)] hover:shadow-[0_15px_35px_rgba(215,183,63,0.6)] group overflow-hidden relative">
                    <span className="relative z-10 flex items-center justify-center tracking-wide">
                      Join as {activeRole.title.split(' ')[0]}
                      <ArrowRight size={20} className="ml-3 transition-transform group-hover:translate-x-2" />
                    </span>
                    <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  </Button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}
      </Container>
    </div>
  )
}
