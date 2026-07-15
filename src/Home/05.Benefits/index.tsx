import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { Container } from '../../components/layout'
import { benefits } from './data'

export default function Benefits({ isMobile }: { isMobile: boolean }) {
  const largeBenefits = benefits.slice(0, 2)
  const smallBenefits = benefits.slice(2)

  return (
    <div className={`w-full bg-[#0B101E] ${isMobile ? 'pt-16 pb-16' : 'pt-24 pb-24'} overflow-hidden relative`}>
      <Container className="relative z-10">
        <div className={`${isMobile ? 'text-left' : 'text-center max-w-4xl mx-auto'} ${isMobile ? 'mb-12' : 'mb-20'}`}>
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center rounded-full border border-[#D7B73F]/40 shadow-[0_0_15px_rgba(215,183,63,0.15)] bg-[#1A1F2E]/80 backdrop-blur-sm overflow-hidden mb-6 self-center px-4 py-1.5">
              <Sparkles size={14} className="text-[#D7B73F] mr-2 animate-pulse" />
              <span className={`${isMobile ? 'text-[0.65rem]' : 'text-xs'} font-bold text-[#D7B73F] tracking-wider uppercase`}>
                WHY CHOOSE CREMP
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
            Powerful Features.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D7B73F] to-[#F9E596] drop-shadow-[0_0_15px_rgba(215,183,63,0.2)]">Real Growth.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`${isMobile ? 'text-[0.95rem]' : 'text-[1.1rem]'} text-white/60 font-medium leading-relaxed ${isMobile ? '' : 'max-w-2xl mx-auto'}`}
          >
            Everything you need to showcase your business, connect with verified professionals, and close deals faster.
          </motion.p>
        </div>

        {isMobile ? (
          <div className="grid grid-cols-1 gap-5">
            {benefits.map((b, idx) => {
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * idx, type: 'spring', stiffness: 100 }}
                  className="bg-[#1A1F2E]/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-[#D7B73F]/40 transition-all"
                >
                  <div className="absolute top-4 right-4 text-[0.8rem] font-black text-white/10 group-hover:text-[#D7B73F]/30 transition-colors">
                    {b.num}
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[#0B101E] border border-[#D7B73F]/30 flex items-center justify-center shadow-[0_0_15px_rgba(215,183,63,0.15)] mb-4 group-hover:border-[#D7B73F] transition-all">
                    <b.icon size={20} className="text-[#D7B73F]" strokeWidth={2} />
                  </div>
                  <h3 className="text-[1.2rem] font-extrabold text-white mb-2 group-hover:text-[#D7B73F] transition-colors">{b.title}</h3>
                  <p className="text-[0.85rem] text-white/60 font-medium leading-relaxed">{b.desc}</p>
                </motion.div>
              )
            })}
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-6">
            {largeBenefits.map((b, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * idx, type: 'spring', stiffness: 100 }}
                className="col-span-2 bg-[#1A1F2E]/40 backdrop-blur-xl border border-white/10 rounded-3xl p-10 flex flex-col justify-between group hover:shadow-[0_20px_50px_rgba(215,183,63,0.15)] hover:border-[#D7B73F]/40 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute -top-4 -right-4 p-6 text-[8rem] font-black opacity-5 pointer-events-none text-white group-hover:text-[#D7B73F] group-hover:opacity-10 transition-colors duration-500">
                  {b.num}
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#D7B73F]/0 via-[#D7B73F]/0 to-[#D7B73F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-[#0B101E] border border-[#D7B73F]/30 flex items-center justify-center shadow-[0_0_20px_rgba(215,183,63,0.2)] mb-8 group-hover:border-[#D7B73F] group-hover:scale-110 transition-all duration-300">
                    <b.icon size={28} className="text-[#D7B73F]" strokeWidth={2} />
                  </div>
                  <h3 className="text-[1.8rem] font-extrabold text-white mb-4 group-hover:text-[#D7B73F] transition-colors">{b.title}</h3>
                  <p className="text-[1.05rem] text-white/60 font-medium leading-relaxed max-w-md">{b.desc}</p>
                </div>
              </motion.div>
            ))}
            {smallBenefits.map((b, idx) => (
              <motion.div
                key={idx + 2}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + 0.1 * idx, type: 'spring', stiffness: 100 }}
                className="col-span-1 bg-[#1A1F2E]/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 group hover:shadow-[0_15px_30px_rgba(215,183,63,0.1)] hover:border-[#D7B73F]/40 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-[0.8rem] font-black text-white/10 group-hover:text-[#D7B73F]/40 transition-colors duration-300">
                  {b.num}
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#D7B73F]/0 to-[#D7B73F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#0B101E] border border-white/10 flex items-center justify-center text-white/50 mb-6 group-hover:text-[#D7B73F] group-hover:border-[#D7B73F]/40 group-hover:shadow-[0_0_15px_rgba(215,183,63,0.2)] transition-all duration-300">
                    <b.icon size={22} strokeWidth={2} />
                  </div>
                  <h4 className="text-[1.1rem] font-bold text-white mb-3 group-hover:text-[#D7B73F] transition-colors">{b.title}</h4>
                  <p className="text-[0.9rem] text-white/50 font-medium leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </Container>
    </div>
  )
}
