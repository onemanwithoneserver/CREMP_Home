import { motion } from 'framer-motion'
import { Container } from '../../components/layout'
import { Button } from '../../components/ui'
import { ArrowRight, PhoneCall } from 'lucide-react'

export default function CTA({ isMobile }: { isMobile: boolean }) {
  return (
    <div className={`w-full bg-[#ffffff] ${isMobile ? 'pt-8 pb-10' : 'pt-12 pb-10'} overflow-hidden`}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`w-full rounded-md ${isMobile ? 'p-8' : 'p-16'} relative overflow-hidden shadow-2xl bg-[#1F2A4A] border border-[#1f2937]`}
        >
          <div className={`absolute top-0 right-0 ${isMobile ? 'w-[400px] h-[400px]' : 'w-[800px] h-[800px]'} bg-gradient-to-br from-[#6B82B5]/40 via-[#829AC5]/20 to-transparent blur-[${isMobile ? '80' : '120'}px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none`} />
          <div className={`absolute bottom-0 left-0 ${isMobile ? 'w-[300px] h-[300px]' : 'w-[600px] h-[600px]'} bg-gradient-to-tr from-[#3b82f6]/30 via-[#2dd4bf]/10 to-transparent blur-[${isMobile ? '60' : '100'}px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none`} />

          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className={`${isMobile ? 'text-[2.2rem]' : 'text-[3.5rem]'} font-black text-white leading-[1.1] mb-4 md:mb-6 tracking-tight`}>
              Ready to accelerate <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A599FF] via-[#A599FF] to-[#f472b6]">
                your {isMobile ? 'growth' : 'business growth'}?
              </span>
            </h2>
            <p className={`${isMobile ? 'text-[0.95rem]' : 'text-[1.15rem]'} text-[#6B7491] font-medium leading-relaxed mb-8 md:mb-10 ${isMobile ? '' : 'max-w-2xl'}`}>
              Join India's fastest-growing commercial real estate and franchise marketplace. Get verified, connect with trusted partners, and start closing deals today.
            </p>

            <div className={`flex ${isMobile ? 'flex-col w-full' : 'items-center'} gap-3 md:gap-4`}>
              <Button
                variant="primary"
                className={`!bg-white hover:!bg-gray-100 !text-[#2A3A69] font-bold rounded-sm shadow-xl group transition-all hover:scale-[1.02] ${
                  isMobile ? 'w-full text-[1rem] py-4' : 'text-[1.05rem] px-10 py-4'
                }`}
              >
                Start Onboarding Now
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                className={`border-[#374151] text-white hover:bg-[#1f2937] font-bold rounded-sm bg-[#2A3A69]/50 backdrop-blur-sm transition-all hover:border-[#3A4566] ${
                  isMobile ? 'w-full text-[1rem] py-4' : 'text-[1.05rem] px-10 py-4'
                }`}
              >
                <PhoneCall size={18} className="mr-2 text-[#6B7491]" />
                Talk to an Expert
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}
