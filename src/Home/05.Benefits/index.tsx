import { motion } from 'framer-motion'
import { Container } from '../../components/layout'
import { benefits } from './data'

export default function Benefits({ isMobile }: { isMobile: boolean }) {
  const largeBenefits = benefits.slice(0, 2)
  const smallBenefits = benefits.slice(2)

  return (
    <div className={`w-full bg-[#ffffff] ${isMobile ? 'pt-10 pb-10' : 'pt-10 pb-10'} border-t border-[#E2E6EE] overflow-hidden`}>
      <Container>
        <div className={`${isMobile ? 'text-left' : 'text-center max-w-4xl mx-auto'} ${isMobile ? 'mb-10' : 'mb-16'}`}>
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className={`inline-block px-3 md:px-4 py-1.5 rounded-full bg-[rgba(199, 154, 23, 0.05)] text-[#C79A17] ${isMobile ? 'text-[0.6rem]' : 'text-[0.65rem]'} font-bold tracking-widest uppercase mb-4 border border-[rgba(199, 154, 23, 0.15)]`}>
              WHY CHOOSE CREMP
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`${isMobile ? 'text-[2.2rem]' : 'text-[2.8rem]'} font-extrabold text-[#2A3A69] leading-[1.1] tracking-tight mb-4 md:mb-5`}
          >
            Powerful Features.<br /><span className="text-[#C79A17]">Real Growth.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`${isMobile ? 'text-[0.95rem]' : 'text-[1.05rem]'} text-[#3A4566] font-medium leading-relaxed ${isMobile ? '' : 'max-w-2xl mx-auto'}`}
          >
            Everything you need to showcase your business, connect with verified professionals, and close deals faster.
          </motion.p>
        </div>

        {isMobile ? (
          <div className="grid grid-cols-1 gap-4">
            {benefits.map((b, idx) => {
              const isLarge = idx < 2
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * idx }}
                  className={`${isLarge ? b.bg : 'bg-white'} border ${isLarge ? b.border : 'border-[#E2E6EE]'} rounded-sm p-6 relative overflow-hidden`}
                >
                  <div className="absolute top-4 right-4 text-[0.6rem] font-bold text-[#C79A17] opacity-70">
                    {b.num}
                  </div>
                  <div className={`w-12 h-12 rounded-full ${isLarge ? 'bg-white' : 'bg-[#F5F7FA] border border-[#E2E6EE]'} flex items-center justify-center shadow-sm mb-4 ${isLarge ? b.color : 'text-[#3A4566]'}`}>
                    <b.icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className={`${isLarge ? 'text-[1.3rem]' : 'text-[1.1rem]'} font-extrabold text-[#2A3A69] mb-2`}>{b.title}</h3>
                  <p className="text-[0.85rem] text-[#3A4566] font-medium leading-relaxed">{b.desc}</p>
                </motion.div>
              )
            })}
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-4">
            {largeBenefits.map((b, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className={`col-span-2 ${b.bg} border ${b.border} rounded-sm p-8 flex flex-col justify-between group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 p-6 text-[4rem] font-black opacity-5 pointer-events-none text-gray-900 group-hover:opacity-10 transition-opacity">
                  {b.num}
                </div>
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm mb-6 ${b.color}`}>
                    <b.icon size={26} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[1.6rem] font-extrabold text-[#2A3A69] mb-3">{b.title}</h3>
                  <p className="text-[1rem] text-[#3A4566] font-medium leading-relaxed max-w-md">{b.desc}</p>
                </div>
              </motion.div>
            ))}
            {smallBenefits.map((b, idx) => (
              <motion.div
                key={idx + 2}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + 0.05 * idx }}
                className="col-span-1 bg-white border border-[#E2E6EE] rounded-sm p-6 group hover:shadow-md hover:border-[#C79A17]/50 hover:-translate-y-1 transition-all duration-300 relative"
              >
                <div className="absolute top-4 right-4 text-[0.6rem] font-bold text-[#C79A17] opacity-0 group-hover:opacity-100 transition-opacity">
                  {b.num}
                </div>
                <div className="w-10 h-10 rounded-full bg-[#F5F7FA] border border-[#E2E6EE] flex items-center justify-center text-[#3A4566] mb-4 group-hover:text-[#C79A17] group-hover:bg-[rgba(199, 154, 23, 0.05)] group-hover:border-[rgba(199, 154, 23, 0.15)] transition-colors">
                  <b.icon size={18} strokeWidth={1.5} />
                </div>
                <h4 className="text-[1.05rem] font-bold text-[#2A3A69] mb-2">{b.title}</h4>
                <p className="text-[0.8rem] text-[#6B7491] font-medium leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        )}
      </Container>
    </div>
  )
}
