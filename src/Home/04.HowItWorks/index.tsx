import { motion } from 'framer-motion'
import { Container } from '../../components/layout'
import { steps } from './data'

export default function HowItWorks({ isMobile }: { isMobile: boolean }) {
  return (
    <div className={`w-full bg-[#F5F7FA] ${isMobile ? 'pt-10 pb-10' : 'pt-10 pb-10'} border-t border-[#E2E6EE] overflow-hidden`}>
      <Container>
        <div className={`${isMobile ? 'text-left' : 'text-center max-w-4xl mx-auto'} ${isMobile ? 'mb-12' : 'mb-20'} relative z-10`}>
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className={`inline-block px-3 md:px-4 py-1.5 rounded-full bg-[rgba(199, 154, 23, 0.05)] text-[#C79A17] ${isMobile ? 'text-[0.6rem]' : 'text-[0.65rem]'} font-bold tracking-widest uppercase mb-4 border border-[rgba(199, 154, 23, 0.15)]`}>
              HOW IT WORKS
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`${isMobile ? 'text-[2.2rem]' : 'text-[2.8rem]'} font-extrabold text-[#2A3A69] leading-[1.1] tracking-tight mb-4 md:mb-5`}
          >
            Your Growth Journey <br /><span className="text-[#C79A17]">Step by Step</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`${isMobile ? 'text-[0.95rem]' : 'text-[1.05rem]'} text-[#3A4566] font-medium leading-relaxed ${isMobile ? '' : 'max-w-2xl mx-auto'}`}
          >
            Once you join CREMP, we make it easy for you to get discovered, connect with the right people and grow your business.
          </motion.p>
        </div>

        {isMobile ? (
          <div className="relative pl-6">
            <div className="absolute left-6 top-4 bottom-4 w-px bg-gradient-to-b from-[#C79A17]/10 via-[#C79A17]/30 to-[#C79A17]/10" />
            <div className="flex flex-col gap-8">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="relative pl-8"
                >
                  <div className="absolute left-[-1.1rem] top-2 w-8 h-8 bg-white rounded-full border-4 border-[#F5F7FA] shadow-[0_0_0_1px_rgba(229,231,235,1)] flex items-center justify-center z-10">
                    <step.icon size={12} className="text-[#C79A17]" strokeWidth={2} />
                  </div>
                  <div className="bg-white border border-[#E2E6EE] rounded-sm p-5 shadow-sm relative overflow-hidden">
                    <div className="absolute -right-2 -top-2 text-[3rem] font-black text-[#F5F7FA] leading-none pointer-events-none">
                      {step.num}
                    </div>
                    <div className="relative z-10">
                      <h4 className="text-[1.05rem] font-extrabold text-[#2A3A69] mb-1.5">{step.title}</h4>
                      <p className="text-[0.8rem] text-[#3A4566] font-medium leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-[1000px] mx-auto relative px-4">
            <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-[#C79A17]/10 via-[#C79A17]/30 to-[#C79A17]/10 -translate-x-1/2 hidden md:block" />
            <div className="flex flex-col gap-16 relative">
              {steps.map((step, idx) => {
                const isEven = idx % 2 === 0
                return (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={`flex items-center w-full relative ${isEven ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`w-[calc(50%-3rem)] bg-white border border-[#E2E6EE] rounded-sm p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all group relative z-10 ${isEven ? 'text-right pr-12' : 'text-left pl-12'}`}>
                      <div className={`absolute top-4 text-[4rem] font-black text-[#F5F7FA] leading-none pointer-events-none group-hover:text-[rgba(199, 154, 23, 0.05)] transition-colors ${isEven ? 'right-6' : 'left-6'}`}>
                        {step.num}
                      </div>
                      <div className="relative z-10 flex flex-col h-full justify-center">
                        <h4 className="text-[1.2rem] font-extrabold text-[#2A3A69] mb-2">{step.title}</h4>
                        <p className="text-[0.9rem] text-[#3A4566] font-medium leading-relaxed">{step.desc}</p>
                      </div>
                      <div className={`absolute top-1/2 -translate-y-1/2 w-12 border-t border-dashed border-[#C79A17]/30 hidden md:block ${isEven ? '-right-12' : '-left-12'}`} />
                    </div>
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border-4 border-[#F5F7FA] shadow-[0_0_0_1px_rgba(229,231,235,1)] flex items-center justify-center z-20 group-hover:border-[rgba(199, 154, 23, 0.05)] group-hover:shadow-[0_0_0_1px_rgba(179,135,40,0.5)] transition-colors hidden md:flex">
                      <step.icon size={20} className="text-[#C79A17]" strokeWidth={2} />
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
