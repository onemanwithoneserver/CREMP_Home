import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle } from 'lucide-react'
import { Container } from '../../components/layout'
import { Button } from '../../components/ui'
import { vendorBenefits } from './data'
import ParticleField from './ParticleField'
import heroBuilding from '../images/hero_building.png'

interface HeroProps {
  isMobile: boolean
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export default function Hero({ isMobile }: HeroProps) {
  return (
    <div className="relative w-full bg-[#ffffff] overflow-hidden">
      <ParticleField />

      <div className="absolute right-0 top-0 w-[55%] h-full bg-gradient-to-l from-[#F5F7FA] to-transparent opacity-80 pointer-events-none z-0" />
      <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[50%] bg-[#C79A17] blur-[150px] opacity-[0.03] rounded-full pointer-events-none z-0" />

      <Container className="relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className={`flex flex-col ${isMobile ? '' : 'lg:flex-row'} gap-12 items-center ${isMobile ? 'pt-8 pb-12 px-1' : 'pt-20 pb-10'}`}
        >
          <div className={`w-full ${isMobile ? '' : 'lg:w-[55%]'} flex flex-col ${isMobile ? '' : 'pt-4'}`}>
            <motion.div variants={fadeUp} className="inline-flex items-center rounded-full border border-[#E2E6EE] bg-white shadow-sm overflow-hidden mb-6 md:mb-8 self-start">
              <div className="px-3 md:px-4 py-1.5 bg-gradient-to-r from-[rgba(199, 154, 23, 0.05)] to-[#fcf4e6]">
                <span className={`${isMobile ? 'text-[0.55rem]' : 'text-[0.7rem]'} font-bold text-[#C79A17] tracking-wider uppercase`}>
                  India's 1st Integrated Platform
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className={`${isMobile ? 'text-[2.5rem]' : 'text-[3.5rem] lg:text-[4rem]'} font-black text-[#2A3A69] leading-[1.05] tracking-tight mb-4 md:mb-6`}
            >
              The Future of <br />
              <span className="text-[#C79A17]">Commercial Real Estate</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className={`${isMobile ? 'text-[0.9rem]' : 'text-[1.05rem]'} text-[#3A4566] leading-relaxed font-medium mb-8 md:mb-10 max-w-xl ${isMobile ? '' : 'pr-4'}`}
            >
              CREMP connects property owners, brokers, franchisors, and investors in one unified marketplace. Discover commercial properties, expand your franchise, and grow your business with confidence.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className={`flex ${isMobile ? 'flex-col' : 'items-center'} gap-3 md:gap-4 mb-10 md:mb-12`}
            >
              <Button
                variant="primary"
                className={`!bg-[#2A3A69] hover:!bg-[#1F2A4A] !text-white font-bold rounded-sm shadow-md group ${
                  isMobile ? 'w-full text-[0.9rem] py-3.5' : 'text-[0.95rem] px-8 py-3.5'
                }`}
              >
                Explore Marketplace
                <ArrowRight size={isMobile ? 16 : 18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                className={`border-[#E2E6EE] text-[#2A3A69] hover:bg-gray-50 font-bold rounded-sm shadow-sm bg-white ${
                  isMobile ? 'w-full text-[0.9rem] py-3.5' : 'text-[0.95rem] px-8 py-3.5'
                }`}
              >
                <PlayCircle size={isMobile ? 16 : 18} className="mr-2" />
                How it Works
              </Button>
            </motion.div>
          </div>

          {!isMobile && (
            <div className="w-full lg:w-[45%] relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="w-full aspect-[4/3] rounded-md overflow-hidden shadow-2xl relative"
              >
                <img
                  src={heroBuilding}
                  alt="Commercial Buildings"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#2A3A69]/20 to-transparent" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -left-10 bottom-10 bg-white/95 backdrop-blur-md px-6 py-4 rounded-md flex items-center gap-4 shadow-xl border border-[#E2E6EE]"
              >
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-[0.8rem] font-extrabold text-[#2A3A69] leading-tight">500+ Verified<br />Partners</div>
                </div>
              </motion.div>
            </div>
          )}

          {isMobile && (
            <div className="w-full relative mb-10 px-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="w-full aspect-[4/3] rounded-md overflow-hidden shadow-lg relative"
              >
                <img
                  src={heroBuilding}
                  alt="Commercial Buildings"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#2A3A69]/20 to-transparent" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-4 py-3 rounded-md flex items-center gap-3 shadow-xl border border-[#E2E6EE] w-[90%]"
              >
                <div className="flex -space-x-2 shrink-0">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-[0.7rem] font-extrabold text-[#2A3A69] leading-tight">500+ Verified Partners</div>
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className={`w-full border-t border-[#E2E6EE] ${isMobile ? 'pt-6 px-1' : 'pt-8'} ${isMobile ? 'pb-8' : 'pb-10'}`}
        >
          <div className={`${isMobile ? 'grid grid-cols-2 gap-4' : 'flex items-center justify-between'} opacity-80`}>
            {vendorBenefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.08 }}
                className="flex items-center gap-2.5 md:gap-3"
              >
                <div className={`${isMobile ? 'w-7 h-7' : 'w-8 h-8'} rounded-full border border-[#d1d5db] flex items-center justify-center bg-[#F5F7FA] shrink-0`}>
                  <benefit.icon size={isMobile ? 12 : 16} className="text-[#3A4566]" strokeWidth={2} />
                </div>
                <span className={`${isMobile ? 'text-[0.7rem]' : 'text-[0.85rem]'} font-bold text-[#3A4566] leading-tight`}>
                  {benefit.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  )
}
