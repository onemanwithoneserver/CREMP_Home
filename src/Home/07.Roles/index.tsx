import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '../../components/layout'
import { Button } from '../../components/ui'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { roles } from './data'

export default function Roles({ isMobile }: { isMobile: boolean }) {
  const [activeRole, setActiveRole] = useState(roles[0])

  return (
    <div className={`w-full bg-[#2A3A69] ${isMobile ? 'pt-10 pb-10' : 'pt-10 pb-10'} overflow-hidden`}>
      <Container>
        <div className={`${isMobile ? 'text-left' : 'text-center max-w-4xl mx-auto'} ${isMobile ? 'mb-10' : 'mb-16'}`}>
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className={`inline-block px-3 md:px-4 py-1.5 rounded-full bg-[#1F2A4A] text-[#d97706] ${isMobile ? 'text-[0.6rem]' : 'text-[0.65rem]'} font-bold tracking-widest uppercase mb-4 border border-[rgba(255, 255, 255, 0.1)]`}>
              WHO IS CREMP FOR
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`${isMobile ? 'text-[2.2rem]' : 'text-[2.8rem]'} font-extrabold text-white leading-[1.1] tracking-tight mb-4 md:mb-5`}
          >
            A Place for Every <br /><span className="text-[#C79A17]">{isMobile ? 'Professional' : 'Industry Professional'}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`${isMobile ? 'text-[0.95rem]' : 'text-[1.05rem]'} text-[#6B7491] font-medium leading-relaxed ${isMobile ? '' : 'max-w-2xl mx-auto'}`}
          >
            Select your role below to see how CREMP can accelerate your business growth and connect you with the right opportunities.
          </motion.p>
        </div>

        {isMobile ? (
          <>
            <div className="mb-8 -mx-5 px-5 overflow-x-auto scrollbar-hide">
              <div className="flex gap-3 pb-2 min-w-max">
                {roles.map((role) => {
                  const isActive = activeRole.id === role.id
                  return (
                    <button
                      key={role.id}
                      onClick={() => setActiveRole(role)}
                      className={`flex flex-col items-center justify-center p-3 w-28 h-28 rounded-md border transition-all ${
                        isActive ? 'bg-[#1F2A4A] border-[rgba(255, 255, 255, 0.2)] shadow-lg' : 'bg-[#2A3A69] border-[#1F2A4A]'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-colors ${
                        isActive ? 'bg-[#C79A17] text-white' : 'bg-[#1F2A4A] text-[#6B7491]'
                      }`}>
                        <role.icon size={18} strokeWidth={2} />
                      </div>
                      <span className={`text-[0.65rem] font-bold text-center leading-tight transition-colors ${
                        isActive ? 'text-white' : 'text-[#6B7491]'
                      }`}>
                        {role.title}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="relative min-h-[350px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeRole.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-sm p-6 shadow-xl border border-[#E2E6EE]"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-full bg-[rgba(199, 154, 23, 0.05)] border border-[rgba(199, 154, 23, 0.15)] flex items-center justify-center text-[#C79A17] shrink-0">
                      <activeRole.icon size={22} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-[1.3rem] font-extrabold text-[#2A3A69] leading-tight">{activeRole.title}</h3>
                  </div>
                  <p className="text-[0.9rem] text-[#3A4566] font-medium leading-relaxed mb-6 border-b border-[#E2E6EE] pb-6">
                    {activeRole.desc}
                  </p>
                  <h4 className="text-[0.7rem] font-bold text-[#2A3A69] uppercase tracking-wider mb-4">Key Benefits</h4>
                  <div className="flex flex-col gap-3 mb-8">
                    {activeRole.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-[#C79A17] shrink-0 mt-0.5" strokeWidth={2} />
                        <span className="text-[0.85rem] font-medium text-[#3A4566] leading-snug">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="primary" className="w-full !bg-[#2A3A69] hover:!bg-[#1F2A4A] !text-white text-[0.85rem] font-bold py-3.5 rounded-sm">
                    Join as {activeRole.title.split(' ')[0]}
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </motion.div>
              </AnimatePresence>
            </div>
          </>
        ) : (
          <div className="flex gap-8 relative z-10 max-w-[1100px] mx-auto">
            <div className="w-1/3 flex flex-col gap-2">
              {roles.map((role, idx) => {
                const isActive = activeRole.id === role.id
                return (
                  <motion.button
                    key={role.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    onClick={() => setActiveRole(role)}
                    className={`flex items-center gap-4 p-4 rounded-sm text-left transition-all border ${
                      isActive ? 'bg-[#1F2A4A] border-[rgba(255, 255, 255, 0.1)] shadow-lg' : 'bg-transparent border-transparent hover:bg-[#1F2A4A]/50'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isActive ? 'bg-[#C79A17] text-white' : 'bg-[#1F2A4A] text-[#6B7491]'
                    }`}>
                      <role.icon size={18} strokeWidth={2} />
                    </div>
                    <span className={`text-[0.95rem] font-bold transition-colors ${
                      isActive ? 'text-white' : 'text-[#6B7491]'
                    }`}>
                      {role.title}
                    </span>
                  </motion.button>
                )
              })}
            </div>

            <div className="w-2/3 relative h-full min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeRole.id}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="bg-white rounded-sm p-10 shadow-2xl h-full flex flex-col justify-center border border-[#E2E6EE]"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-[rgba(199, 154, 23, 0.05)] border border-[rgba(199, 154, 23, 0.15)] flex items-center justify-center text-[#C79A17]">
                      <activeRole.icon size={30} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-[2rem] font-extrabold text-[#2A3A69] leading-tight">{activeRole.title}</h3>
                    </div>
                  </div>
                  <p className="text-[1.1rem] text-[#3A4566] font-medium leading-relaxed mb-8 border-b border-[#E2E6EE] pb-8">
                    {activeRole.desc}
                  </p>
                  <h4 className="text-[0.85rem] font-bold text-[#2A3A69] uppercase tracking-wider mb-5">Key Benefits</h4>
                  <div className="flex flex-col gap-4 mb-10">
                    {activeRole.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle2 size={20} className="text-[#C79A17] shrink-0" strokeWidth={2} />
                        <span className="text-[1rem] font-medium text-[#3A4566]">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="primary" className="self-start !bg-[#2A3A69] hover:!bg-[#1F2A4A] !text-white text-[0.95rem] font-bold px-8 py-3.5 rounded-sm group">
                    Join as {activeRole.title.split(' ')[0]}
                    <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
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
