import { motion, type Variants } from 'framer-motion';
import { Container } from '../../components/layout';
import { investorData } from './data';
import { Target, CheckCircle2, Star, Activity, User } from 'lucide-react';
import { YourBrandLogo } from '../../components/YourBrandLogo';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 25 } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const pulseRing: Variants = {
  animate: {
    scale: [1, 1.15, 1],
    opacity: [0.4, 0.1, 0.4],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
};

const floatGlow: Variants = {
  animate: {
    y: [-6, 6, -6],
    boxShadow: ['0 5px 15px rgba(178,127,28,0.1)', '0 10px 20px rgba(178,127,28,0.2)', '0 5px 15px rgba(178,127,28,0.1)'],
    transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
  }
};

const drawLine: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: { pathLength: 1, opacity: 1, transition: { duration: 2, ease: "easeInOut", delay: 0.5 } }
};

export default function MobileYourInvestors() {
  return (
    <div className="relative w-full overflow-hidden rounded-[8px] bg-white py-6 shadow-xl transition-colors duration-700 dark:bg-[#030712] dark:shadow-none">
      
      <motion.div animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 8, repeat: Infinity }} className="pointer-events-none absolute right-[-10%] top-0 h-[400px] w-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#B27F1C]/10 via-transparent to-transparent dark:from-[#F6B23B]/10" />

      <Container className="relative z-10 mx-auto px-4">
        <div className="mb-8 flex flex-col items-center gap-6 text-center">
          
          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="flex w-full flex-col items-center">
            <motion.div variants={fadeInUp} className="mb-4 flex items-center justify-center gap-3">
              <div className="flex h-8 items-center justify-center rounded-[4px] bg-[#B27F1C]/10 px-4 dark:bg-[#F6B23B]/10">
                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#B27F1C] dark:text-[#F6B23B]">
                  {investorData.tag}
                </span>
              </div>
            </motion.div>
            
            <motion.h2 variants={fadeInUp} className="mb-6 text-[2.5rem] font-black leading-[1.1] tracking-tight sm:text-[3rem]">
              <span className="block text-gray-900 dark:text-white">{investorData.titleBase}</span>
              <span className="block animate-pulse bg-gradient-to-r from-[#B27F1C] to-[#d49924] bg-clip-text text-transparent dark:from-[#F6B23B] dark:to-[#f9d08b]">
                {investorData.titleHighlight}
              </span>
            </motion.h2>

            <motion.div variants={fadeInUp} className="flex flex-col items-center gap-4 px-2">
              <p className="text-[0.95rem] font-medium leading-relaxed text-gray-600 dark:text-gray-400">
                {investorData.desc[0]}
              </p>
              <div className="mt-2 border-t-2 border-[#B27F1C] pt-4 dark:border-[#F6B23B]">
                <p className="text-[0.95rem] font-bold leading-relaxed text-gray-900 dark:text-white">
                  {investorData.desc[1]}
                </p>
              </div>
            </motion.div>
          </motion.div>

          <div className="relative mt-4 flex h-[400px] w-full items-center justify-center scale-90 sm:scale-100">
            <div className="pointer-events-none absolute inset-0 z-10">
              {investorData.pills.map((pill, idx) => {
                const positions = [
                  { top: '0%', left: '10%' },
                  { top: '25%', right: '0%' },
                  { bottom: '5%', left: '25%' },
                  { top: '40%', left: '0%' },
                  { bottom: '20%', right: '0%' },
                  { top: '10%', left: '45%' },
                ];
                return (
                  <motion.div key={idx} animate={{ y: [-8, 8, -8] }} transition={{ duration: 4 + idx, repeat: Infinity, ease: 'easeInOut' }} className="absolute flex items-center gap-1.5 rounded-full border border-gray-200/60 bg-white/70 px-2 py-1 shadow-sm backdrop-blur-md dark:border-gray-800/60 dark:bg-gray-900/70" style={positions[idx]}>
                    <div className="flex items-center justify-center rounded-full bg-[#B27F1C]/10 p-1 dark:bg-[#F6B23B]/10">
                      <pill.icon size={10} className="text-[#B27F1C] dark:text-[#F6B23B]" />
                    </div>
                    <span className="text-[0.5rem] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">{pill.label}</span>
                  </motion.div>
                );
              })}
            </div>

            <svg className="pointer-events-none absolute inset-0 z-20 h-full w-full">
               <motion.line x1="50%" y1="50%" x2="80%" y2="20%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-[#B27F1C]/40 dark:text-[#F6B23B]/40" variants={drawLine} initial="hidden" whileInView="show" viewport={{ once: true }} />
               <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 2.2 }} cx="80%" cy="20%" r="3" className="fill-[#B27F1C] dark:fill-[#F6B23B]" />
               
               <motion.line x1="50%" y1="50%" x2="75%" y2="75%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-[#B27F1C]/40 dark:text-[#F6B23B]/40" variants={drawLine} initial="hidden" whileInView="show" viewport={{ once: true }} />
               <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 2.2 }} cx="75%" cy="75%" r="3" className="fill-[#B27F1C] dark:fill-[#F6B23B]" />
               
               <motion.line x1="50%" y1="50%" x2="20%" y2="70%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-[#B27F1C]/40 dark:text-[#F6B23B]/40" variants={drawLine} initial="hidden" whileInView="show" viewport={{ once: true }} />
               <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 2.2 }} cx="20%" cy="70%" r="3" className="fill-[#B27F1C] dark:fill-[#F6B23B]" />
            </svg>

            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: 'spring', bounce: 0.5, delay: 0.2 }} className="relative z-30 flex h-24 w-24 flex-col items-center justify-center rounded-[2rem] border border-[#B27F1C]/30 bg-white/90 shadow-[0_0_40px_rgba(178,127,28,0.2)] backdrop-blur-md dark:border-[#F6B23B]/30 dark:bg-[#0a101d]/90">
              <YourBrandLogo size="md" stacked={true} />
              <motion.div variants={pulseRing} initial="animate" className="absolute -inset-3 -z-10 rounded-[2.5rem] border border-[#B27F1C]/30 dark:border-[#F6B23B]/30" />
              <motion.div variants={pulseRing} initial="animate" transition={{ delay: 1 }} className="absolute -inset-6 -z-10 rounded-[3rem] border border-[#B27F1C]/15 dark:border-[#F6B23B]/15" />
            </motion.div>

            <motion.div variants={floatGlow} initial="hidden" whileInView="animate" viewport={{ once: true }} className="absolute right-[5%] top-[10%] z-30 flex w-[180px] flex-col rounded-[8px] border border-gray-200/80 bg-white/95 p-3 backdrop-blur-md dark:border-gray-700/80 dark:bg-[#111827]/95">
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400"><User size={12} /></div>
                  <div><div className="text-[0.55rem] font-bold uppercase text-gray-500 dark:text-gray-400">Verified</div><div className="text-[0.65rem] font-black text-gray-900 dark:text-white">Inv-8842</div></div>
                </div>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-[0.55rem] font-black text-emerald-600 ring-1 ring-emerald-500/20 dark:bg-emerald-900/40 dark:text-emerald-400">98%</div>
              </div>
              <div className="flex flex-wrap gap-1"><span className="rounded-[2px] border border-gray-100 bg-gray-50 px-1.5 py-0.5 text-[0.55rem] font-bold text-gray-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">₹5Cr+ Budget</span></div>
            </motion.div>

            <motion.div variants={floatGlow} initial="hidden" whileInView="animate" viewport={{ once: true }} className="absolute bottom-[10%] right-[5%] z-30 flex w-[180px] flex-col rounded-[8px] border border-gray-200/80 bg-white/95 p-3 backdrop-blur-md dark:border-gray-700/80 dark:bg-[#111827]/95">
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400"><User size={12} /></div>
                  <div><div className="text-[0.55rem] font-bold uppercase text-gray-500 dark:text-gray-400">Verified</div><div className="text-[0.65rem] font-black text-gray-900 dark:text-white">Inv-4091</div></div>
                </div>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-[0.55rem] font-black text-emerald-600 ring-1 ring-emerald-500/20 dark:bg-emerald-900/40 dark:text-emerald-400">94%</div>
              </div>
              <div className="flex flex-wrap gap-1"><span className="rounded-[2px] border border-gray-100 bg-gray-50 px-1.5 py-0.5 text-[0.55rem] font-bold text-gray-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">Commercial</span></div>
            </motion.div>

            <motion.div variants={floatGlow} initial="hidden" whileInView="animate" viewport={{ once: true }} className="absolute bottom-[15%] left-[0%] z-30 flex w-[180px] flex-col rounded-[8px] border border-[#B27F1C]/40 bg-gradient-to-b from-white to-[#B27F1C]/10 p-3 backdrop-blur-md dark:border-[#F6B23B]/40 dark:from-gray-800 dark:to-[#F6B23B]/15">
              <div className="absolute -top-2 left-1/2 flex -translate-x-1/2 items-center justify-center rounded-[4px] bg-[#B27F1C] px-2 py-0.5 text-[0.5rem] font-black tracking-widest text-white shadow-md dark:bg-[#F6B23B] dark:text-gray-900">NEW</div>
              <div className="mb-2 mt-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-400"><User size={12} /></div>
                  <div className="text-[0.65rem] font-black text-gray-900 dark:text-white">Inv-7723</div>
                </div>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#B27F1C]/20 text-[0.55rem] font-black text-[#B27F1C] ring-1 ring-[#B27F1C]/40 dark:bg-[#F6B23B]/20 dark:text-[#F6B23B] dark:ring-[#F6B23B]/40">88%</div>
              </div>
              <div className="flex flex-wrap gap-1"><span className="rounded-[2px] border border-[#B27F1C]/20 bg-white/50 px-1.5 py-0.5 text-[0.55rem] font-bold text-gray-700 dark:border-[#F6B23B]/20 dark:bg-gray-900/50 dark:text-gray-300">Multi-Unit</span></div>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 250, damping: 25 }} className="flex flex-col items-center rounded-[8px] border border-gray-200/50 bg-gray-50 p-6 text-center shadow-md dark:border-gray-800/50 dark:bg-[#0a101d]">
            <div className="mb-8 flex flex-col items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-gray-200/80 dark:bg-gray-900 dark:ring-gray-800">
                <Activity size={20} className="text-[#B27F1C] dark:text-[#F6B23B]" />
              </div>
              <h3 className="text-xl font-black text-gray-900 dark:text-white">{investorData.expectationsTitle}</h3>
            </div>

            <div className="flex flex-col gap-6">
              {investorData.expectations.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-3 rounded-[4px] bg-white p-4 shadow-sm dark:bg-[#030712]/50 text-center border border-gray-100 dark:border-gray-800">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 text-sm font-black text-gray-900 ring-1 ring-gray-200 dark:bg-gray-900 dark:text-white dark:ring-gray-800">
                    {idx + 1}
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="mb-2 flex items-center justify-center gap-2">
                      <item.icon size={16} className="text-[#B27F1C] dark:text-[#F6B23B]" strokeWidth={2.5} />
                      <span className="text-[0.95rem] font-bold text-gray-900 dark:text-white">{item.title}</span>
                    </div>
                    <p className="text-[0.8rem] font-medium leading-relaxed text-gray-600 dark:text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 250, damping: 25, delay: 0.2 }} className="relative flex flex-col items-center justify-center overflow-hidden rounded-[8px] bg-gradient-to-b from-[#0f172a] to-[#030712] p-8 text-center shadow-xl ring-1 ring-white/10 dark:from-[#1e293b] dark:to-[#0a101d]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#B27F1C]/30 via-transparent to-transparent opacity-60 dark:from-[#F6B23B]/30" />
            
            <div className="relative z-10 mb-8 flex flex-col items-center">
              <span className="mb-4 rounded-[4px] border border-[#B27F1C]/40 bg-[#B27F1C]/20 px-3 py-1 text-[0.6rem] font-bold uppercase tracking-widest text-[#F6B23B] backdrop-blur-md">
                {investorData.outcome.tag}
              </span>
              <h3 className="text-xl font-black leading-tight text-white">{investorData.outcome.title}</h3>
            </div>

            <div className="relative flex h-36 w-36 items-center justify-center">
              <motion.div variants={pulseRing} initial="animate" className="absolute h-full w-full rounded-full border-2 border-[#B27F1C]/50 dark:border-[#F6B23B]/50" />
              <motion.div variants={pulseRing} initial="animate" transition={{ delay: 1 }} className="absolute h-[75%] w-[75%] rounded-full border border-[#B27F1C]/70 dark:border-[#F6B23B]/70" />
              <motion.div variants={pulseRing} initial="animate" transition={{ delay: 2 }} className="absolute h-[50%] w-[50%] rounded-full border border-[#B27F1C]/90 dark:border-[#F6B23B]/90" />
              
              <div className="relative z-20 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-[#B27F1C] to-[#d49924] shadow-[0_0_30px_rgba(178,127,28,0.6)] dark:from-[#F6B23B] dark:to-[#f9d08b]">
                <Target size={24} className="text-white dark:text-gray-900" strokeWidth={2.5} />
              </div>

              <motion.div animate={{ y: [-3, 3, -3], rotate: [0, 10, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -right-1 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/30">
                <Star size={10} className="text-[#F6B23B]" fill="currentColor" />
              </motion.div>
              <motion.div animate={{ y: [3, -3, 3], scale: [1, 1.1, 1] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-2 left-0 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/30">
                <CheckCircle2 size={14} className="text-emerald-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
