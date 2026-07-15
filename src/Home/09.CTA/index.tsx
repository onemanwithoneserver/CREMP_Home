import { motion } from 'framer-motion'
import { Container } from '../../components/layout'
import { Button } from '../../components/ui'
import { ArrowRight, PhoneCall } from 'lucide-react'

export default function CTA({ isMobile }: { isMobile: boolean }) {
  return (
    <div className={`w-full bg-[#0B101E] ${isMobile ? 'pt-8 pb-16' : 'pt-12 pb-24'} overflow-hidden relative`}>
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className={`w-full rounded-[2.5rem] ${isMobile ? 'p-10' : 'p-20'} relative overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)] bg-[#1A1F2E]/80 backdrop-blur-3xl border border-white/10 ring-1 ring-white/5`}
        >
          <div className={`absolute top-0 right-0 ${isMobile ? 'w-[400px] h-[400px]' : 'w-[800px] h-[800px]'} bg-gradient-to-br from-[#D7B73F]/15 via-[#D7B73F]/5 to-transparent blur-[${isMobile ? '80' : '120'}px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none`} />
          <div className={`absolute bottom-0 left-0 ${isMobile ? 'w-[300px] h-[300px]' : 'w-[600px] h-[600px]'} bg-gradient-to-tr from-[#1A1F2E]/50 via-[#0B101E]/10 to-transparent blur-[${isMobile ? '60' : '100'}px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none`} />

          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
            <h2 className={`${isMobile ? 'text-[2.5rem]' : 'text-[4.5rem]'} font-black text-white leading-[1.05] mb-6 tracking-tight`}>
              Ready to accelerate <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D7B73F] via-[#F9E596] to-[#D7B73F] drop-shadow-[0_0_20px_rgba(215,183,63,0.3)]">
                your {isMobile ? 'growth' : 'business growth'}?
              </span>
            </h2>
            <p className={`${isMobile ? 'text-[1rem]' : 'text-[1.25rem]'} text-white/60 font-medium leading-relaxed mb-10 md:mb-12 ${isMobile ? '' : 'max-w-2xl'}`}>
              Join the most exclusive commercial real estate and franchise network. Get verified, connect with elite partners, and start closing deals today.
            </p>

            <div className={`flex ${isMobile ? 'flex-col w-full' : 'items-center'} gap-4 md:gap-6`}>
              <Button
                variant="primary"
                className={`!bg-gradient-to-r !from-[#D7B73F] !to-[#F9E596] hover:!from-[#C79A17] hover:!to-[#D7B73F] !text-[#0B101E] font-black rounded-xl shadow-[0_15px_30px_rgba(215,183,63,0.4)] hover:shadow-[0_20px_40px_rgba(215,183,63,0.6)] group transition-all hover:scale-[1.02] overflow-hidden relative ${
                  isMobile ? 'w-full text-[1.1rem] py-5' : 'text-[1.15rem] px-12 py-5'
                }`}
              >
                <span className="relative z-10 flex items-center justify-center tracking-wide">
                  Start Onboarding Now
                  <ArrowRight size={22} className="ml-3 transition-transform group-hover:translate-x-2" />
                </span>
                <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </Button>
              <Button
                variant="outline"
                className={`border-white/20 text-white hover:bg-white/10 font-bold rounded-xl bg-black/20 backdrop-blur-md transition-all hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] ${
                  isMobile ? 'w-full text-[1rem] py-5' : 'text-[1.05rem] px-12 py-5'
                }`}
              >
                <PhoneCall size={20} className="mr-3 text-white/60" />
                Talk to an Expert
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}
