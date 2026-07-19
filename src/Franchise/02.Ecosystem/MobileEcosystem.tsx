import { motion, type Variants } from 'framer-motion';
import { Container } from '../../components/layout';
import { ecosystemData } from './data';
import { Target, Plus, Equal, Globe2 } from 'lucide-react';

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 400, damping: 30 } },
};

const drawLine: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: { pathLength: 1, opacity: 0.6, transition: { duration: 1.5, ease: "easeInOut", delay: 0.5 } }
};

const pulseGlow: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
  }
};

const floatAnimation: Variants = {
  animate: {
    y: [-8, 8, -8],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  },
};

export default function MobileEcosystem() {
  return (
    <div className="relative w-full overflow-hidden rounded-[8px] bg-gray-50 py-10 shadow-xl transition-colors duration-700 dark:bg-[#030712] dark:shadow-none">
      <motion.div variants={pulseGlow} animate="animate" className="pointer-events-none absolute left-[-10%] top-[10%] h-[300px] w-[300px] rounded-full bg-[#B27F1C]/10 blur-[100px] dark:bg-[#F6B23B]/10" />

      <Container className="relative z-10 max-w-7xl px-4">
        <div className="mb-12 flex flex-col items-center gap-10 text-center">
          
          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="flex w-full flex-col items-center">
            
            <motion.div variants={fadeInUp} className="mb-4">
              <span className="flex items-center justify-center gap-2 rounded-[2px] border border-[#B27F1C]/20 bg-white/60 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#B27F1C] shadow-sm backdrop-blur-xl dark:border-[#F6B23B]/20 dark:bg-[#F6B23B]/5 dark:text-[#F6B23B]">
                {ecosystemData.tag}
              </span>
            </motion.div>
            
            <motion.h2 variants={fadeInUp} className="mb-4 text-[2rem] font-black leading-[1.1] tracking-tight text-gray-900 dark:text-white sm:text-[2.5rem]">
              Why Expansion <br /> Needs More Than a <br />
              <span className="animate-pulse bg-gradient-to-r from-[#B27F1C] to-[#d49924] bg-clip-text text-transparent dark:from-[#F6B23B] dark:to-[#f9d08b]">
                {ecosystemData.titleHighlight}
              </span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="mb-8 px-2 text-[0.95rem] font-medium leading-relaxed text-gray-600 dark:text-gray-400">
              {ecosystemData.subtitle}
            </motion.p>

            <motion.div variants={fadeInUp} className="mb-8 flex w-full flex-col items-center gap-3 px-2">
              {ecosystemData.issues.map((issue, idx) => (
                <div key={idx} className="flex w-full max-w-[320px] items-center gap-4 rounded-[4px] bg-white/50 p-3 text-left shadow-sm dark:bg-gray-800/30">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#B27F1C]/10 bg-gradient-to-br from-[#fdf6ea] to-white text-[#B27F1C] shadow-sm dark:border-gray-700 dark:from-[#0a101d] dark:to-[#0a101d] dark:text-[#F6B23B]">
                    <issue.icon size={16} />
                  </div>
                  <span className="text-[0.85rem] font-bold text-gray-800 dark:text-gray-300">
                    {issue.text}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.p variants={fadeInUp} className="text-[1rem] font-bold tracking-wide text-gray-900 dark:text-white">
              CREMP brings <span className="bg-gradient-to-r from-[#B27F1C] to-[#d49924] bg-clip-text text-transparent dark:from-[#F6B23B] dark:to-[#f9d08b]">{ecosystemData.conclusion}</span>
            </motion.p>
          </motion.div>

          <div className="relative mt-4 flex w-full max-w-[320px] flex-col items-center pt-4">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative flex w-full flex-col items-center">
              
              <div className="relative z-10 flex w-full justify-between">
                {ecosystemData.flowItems.map((item, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative z-20 flex items-center">
                    <div className="flex h-24 w-[75px] flex-col items-center justify-center rounded-[4px] border border-gray-100/80 bg-white/90 p-2 text-center shadow-md backdrop-blur-md dark:border-gray-800/80 dark:bg-[#0a101d]/90">
                      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#fdf6ea] to-white shadow-inner ring-1 ring-[#B27F1C]/10 dark:from-[#0C1525] dark:to-[#030712] dark:ring-[#F6B23B]/10">
                        <item.icon size={18} className="text-[#B27F1C] drop-shadow-sm dark:text-[#F6B23B]" />
                      </div>
                      <span className="text-[0.55rem] font-bold leading-tight text-gray-800 dark:text-gray-200">
                        {item.text}
                      </span>
                    </div>
                    {idx < ecosystemData.flowItems.length - 1 && (
                      <div className="absolute right-[-10px] top-1/2 z-30 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[#B27F1C] to-[#d49924] text-white shadow-md ring-2 ring-gray-50 dark:from-[#F6B23B] dark:to-[#d49924] dark:ring-[#030712]">
                        <Plus size={12} strokeWidth={3} />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="relative z-0 -mt-[10px] h-[60px] w-[90%]">
                <svg className="absolute inset-0 h-full w-full drop-shadow-md" viewBox="0 0 300 60" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="gold-line-grad-mob" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#d49924" />
                      <stop offset="100%" stopColor="#B27F1C" />
                    </linearGradient>
                  </defs>
                  <motion.path variants={drawLine} initial="hidden" whileInView="show" viewport={{ once: true }} d="M 37,0 C 37,30 150,40 150,60" fill="none" stroke="url(#gold-line-grad-mob)" strokeWidth="2" strokeDasharray="4 4" />
                  <motion.path variants={drawLine} initial="hidden" whileInView="show" viewport={{ once: true }} d="M 150,0 C 150,30 150,40 150,60" fill="none" stroke="url(#gold-line-grad-mob)" strokeWidth="2" strokeDasharray="4 4" />
                  <motion.path variants={drawLine} initial="hidden" whileInView="show" viewport={{ once: true }} d="M 263,0 C 263,30 150,40 150,60" fill="none" stroke="url(#gold-line-grad-mob)" strokeWidth="2" strokeDasharray="4 4" />
                </svg>
              </div>

              <div className="z-20 -mt-[10px] flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#B27F1C] to-[#d49924] text-white shadow-lg ring-4 ring-gray-50 dark:from-[#F6B23B] dark:to-[#d49924] dark:ring-[#030712]">
                <Equal size={16} strokeWidth={3} />
              </div>

              <motion.div variants={floatAnimation} animate="animate" className="relative z-10 -mt-[10px] flex w-full items-center justify-center gap-4 rounded-[8px] bg-gradient-to-br from-[#0f172a] to-[#020617] p-5 shadow-2xl ring-1 ring-white/10 dark:from-[#0C1525] dark:to-[#030712]">
                <div className="absolute inset-0 rounded-[8px] bg-gradient-to-br from-[#B27F1C]/20 to-transparent opacity-60 dark:from-[#F6B23B]/20 flex justify-end" />
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/5 shadow-inner backdrop-blur-sm ring-1 ring-white/10">
                  <Globe2 size={28} className="text-[#F6B23B] drop-shadow-lg" strokeWidth={1.5} />
                </div>
                <div className="relative z-10 flex flex-col text-left">
                  <span className="text-[0.9rem] font-bold text-gray-300">One Connected</span>
                  <span className="bg-gradient-to-r from-[#B27F1C] to-[#d49924] bg-clip-text text-[1.1rem] font-black tracking-wide text-transparent dark:from-[#F6B23B] dark:to-[#f9d08b]">
                    Expansion Ecosystem
                  </span>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative flex w-full flex-col items-center gap-4 overflow-hidden rounded-[8px] border border-gray-200 bg-white/60 p-6 text-center shadow-sm backdrop-blur-xl dark:border-gray-800 dark:bg-[#0a101d]/60">
          <div className="absolute left-0 top-0 h-[4px] w-full bg-gradient-to-r from-[#B27F1C] to-[#d49924] dark:from-[#F6B23B] dark:to-[#d49924]" />
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-100 bg-white shadow-sm dark:border-gray-800 dark:bg-[#030712]">
            <Target size={22} className="text-[#B27F1C] dark:text-[#F6B23B]" strokeWidth={1.5} />
          </div>
          <p className="text-[0.95rem] font-medium leading-relaxed text-gray-700 dark:text-gray-300">
            Instead of switching between multiple platforms,{' '}
            <span className="font-bold text-gray-900 dark:text-white">
              manage your expansion journey from{' '}
              <span className="bg-gradient-to-r from-[#B27F1C] to-[#d49924] bg-clip-text text-transparent dark:from-[#F6B23B] dark:to-[#f9d08b]">
                {ecosystemData.bannerTextHighlight}
              </span>
            </span>
          </p>
        </motion.div>

      </Container>
    </div>
  );
}
