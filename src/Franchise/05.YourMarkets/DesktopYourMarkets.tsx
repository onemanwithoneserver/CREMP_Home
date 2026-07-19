import { motion, type Variants } from 'framer-motion';
import { Container } from '../../components/layout';
import { marketData } from './data';
import { Star, Goal, TrendingUp, Globe, ArrowRight } from 'lucide-react';
import mapBg from '../../assets/map_bg.png';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 300, damping: 25 } 
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const pulseNode: Variants = {
  animate: {
    boxShadow: [
      "0 0 0 0 rgba(246, 178, 59, 0.5)",
      "0 0 0 20px rgba(246, 178, 59, 0)",
    ],
    transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
  },
};

const floatChart: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.4, type: "spring" } },
  animate: {
    y: [-6, 6, -6],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  },
};

const pulseBackground: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.4, 0.7, 0.4],
    transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
  }
};

export default function DesktopYourMarkets() {
  return (
    <div className="relative w-full overflow-hidden rounded-[8px] bg-gray-50 py-12 shadow-2xl transition-colors duration-700 dark:bg-[#030712] dark:shadow-none">
      
      <motion.div 
        variants={pulseBackground}
        animate="animate"
        className="pointer-events-none absolute left-0 top-0 h-[800px] w-[800px] -translate-x-1/3 -translate-y-1/4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#B27F1C]/15 via-transparent to-transparent dark:from-[#F6B23B]/15" 
      />
      <motion.div 
        variants={pulseBackground}
        animate="animate"
        className="pointer-events-none absolute bottom-0 right-0 h-[600px] w-[600px] translate-x-1/3 translate-y-1/3 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#B27F1C]/10 via-transparent to-transparent dark:from-[#F6B23B]/10" 
      />

      <Container className="relative z-10 mx-auto max-w-7xl px-4 xl:px-0">
        
        <div className="mb-24 flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:justify-between">
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="flex w-full flex-col justify-center lg:w-[40%]"
          >
            <motion.div variants={fadeInUp} className="mb-6 flex items-center gap-3">
              <div className="flex h-8 cursor-pointer items-center justify-center rounded-[2px] bg-[#B27F1C]/10 px-4 transition-colors hover:bg-[#B27F1C]/20 dark:bg-[#F6B23B]/10 dark:hover:bg-[#F6B23B]/20">
                <Globe size={14} className="mr-2 text-[#B27F1C] dark:text-[#F6B23B]" />
                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#B27F1C] dark:text-[#F6B23B]">
                  {marketData.tag}
                </span>
              </div>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="mb-8 text-[3.5rem] font-black leading-[1.05] tracking-tight xl:text-[4rem]"
            >
              <span className="block text-gray-900 transition-transform hover:translate-x-2 dark:text-white">{marketData.titleBase}</span>
              <span className="block animate-pulse bg-gradient-to-r from-[#B27F1C] to-[#d49924] bg-clip-text text-transparent dark:from-[#F6B23B] dark:to-[#f9d08b]">
                {marketData.titleHighlight}
              </span>
            </motion.h2>

            <motion.div variants={fadeInUp} className="flex flex-col gap-6">
              <p className="text-xl font-bold leading-relaxed text-gray-900 dark:text-white">
                {marketData.desc[0]}
              </p>
              <p className="text-lg font-medium leading-relaxed text-gray-600 dark:text-gray-400">
                {marketData.desc[1]}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-10 flex items-center gap-6">
              <motion.div whileHover={{ scale: 1.05 }} className="flex cursor-default flex-col">
                <span className="text-3xl font-black text-gray-900 dark:text-white">24+</span>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Global Regions</span>
              </motion.div>
              <div className="h-10 w-px bg-gray-200 dark:bg-gray-800" />
              <motion.div whileHover={{ scale: 1.05 }} className="flex cursor-default flex-col">
                <span className="text-3xl font-black text-gray-900 dark:text-white">150M</span>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Target Reach</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="relative flex h-[550px] w-full items-center justify-center lg:w-[55%]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-full w-full overflow-hidden rounded-[8px] bg-[#0A0F1C] shadow-2xl ring-1 ring-white/10 transition-shadow hover:shadow-[0_20px_50px_rgba(246,178,59,0.15)]"
            >
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 8, ease: "linear" }}
                src={mapBg} 
                className="absolute inset-0 h-full w-full object-cover opacity-60 mix-blend-screen" 
                alt="Local Market Network" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-transparent to-[#0A0F1C]/50" />

              {marketData.hexagons.map((hex, idx) => {
                const isGold = hex.color === 'gold';
                const isBlue = hex.color === 'blue';
                const isTopNode = parseInt(hex.position?.top as string || '0') < 30;
                
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 0.8, delay: 0.5 + (idx * 0.15), type: "spring", bounce: 0.4 }}
                    className={`group absolute z-10 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 ${isTopNode ? 'flex-col-reverse' : 'flex-col'}`}
                    style={hex.position}
                  >
                    <div className={`flex items-center transition-transform duration-300 group-hover:${isTopNode ? 'translate-y-1' : '-translate-y-1'} ${isTopNode ? 'flex-col-reverse' : 'flex-col'}`}>
                      <div className={`flex flex-col items-center rounded-[4px] px-3 py-1.5 text-xs font-bold shadow-xl backdrop-blur-md ${
                        isGold ? 'bg-[#F6B23B]/90 text-gray-900' : 
                        isBlue ? 'bg-blue-500/90 text-white' : 
                        'bg-white/90 text-gray-900 dark:bg-gray-800/90 dark:text-white'
                      }`}>
                        <span className="whitespace-nowrap">{hex.title}</span>
                        <span className="whitespace-nowrap text-[0.65rem] opacity-70">{hex.status}</span>
                      </div>
                      <div className={`${isTopNode ? 'mb-0.5' : 'mt-0.5'} h-1.5 w-1.5 rotate-45 ${
                        isGold ? 'bg-[#F6B23B]/90' : isBlue ? 'bg-blue-500/90' : 'bg-white/90 dark:bg-gray-800/90'
                      }`} />
                    </div>

                    <motion.div 
                      variants={isGold ? pulseNode : {}} 
                      initial="animate"
                      className={`group relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border shadow-lg backdrop-blur-md transition-transform duration-300 hover:rotate-12 hover:scale-125 ${
                        isGold ? 'border-[#F6B23B]/50 bg-[#F6B23B]/20 text-[#F6B23B]' : 
                        isBlue ? 'border-blue-400/50 bg-blue-500/20 text-blue-400' : 
                        'border-white/20 bg-white/10 text-white'
                      }`}
                    >
                      <hex.icon size={16} />
                      <div className={`absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-[#0A0F1C] ${
                        isGold ? 'bg-[#F6B23B]' : isBlue ? 'bg-blue-400' : 'bg-white'
                      }`} />
                    </motion.div>
                  </motion.div>
                );
              })}

              <svg className="absolute inset-0 h-full w-full opacity-50" style={{ zIndex: 0 }}>
                <path d="M 55% 55% Q 40% 60% 20% 35%" stroke="url(#blueGradient)" strokeWidth="2" strokeDasharray="4 6" fill="none" />
                <path d="M 55% 55% Q 45% 40% 48% 20%" stroke="url(#blueGradient)" strokeWidth="2" strokeDasharray="4 6" fill="none" />
                <path d="M 55% 55% Q 65% 35% 75% 15%" stroke="url(#blueGradient)" strokeWidth="2" strokeDasharray="4 6" fill="none" />
                <path d="M 55% 55% Q 75% 60% 90% 35%" stroke="url(#goldGradient)" strokeWidth="2" strokeDasharray="4 6" fill="none" />
                <defs>
                  <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F6B23B" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#F6B23B" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#60A5FA" stopOpacity="1" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="col-span-1 flex flex-col justify-center rounded-[8px] border border-gray-200/50 bg-white p-10 shadow-xl transition-shadow hover:shadow-2xl dark:border-gray-800/50 dark:bg-[#0a101d] lg:col-span-3"
          >
            <div className="mb-10 flex items-center gap-3">
              <motion.div 
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#B27F1C]/10 text-[#B27F1C] dark:bg-[#F6B23B]/10 dark:text-[#F6B23B]"
              >
                <Star size={18} className="fill-current" />
              </motion.div>
              <h3 className="text-xl font-black uppercase tracking-wide text-gray-900 dark:text-white">
                {marketData.benefitsTitle}
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {marketData.benefits.map((benefit, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="group flex cursor-pointer items-start gap-4 rounded-[4px] border border-transparent p-4 transition-all hover:border-gray-100 hover:bg-gray-50 hover:shadow-sm dark:hover:border-gray-800/60 dark:hover:bg-gray-900/50"
                >
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-all duration-300 group-hover:bg-[#B27F1C] group-hover:text-white group-hover:shadow-md dark:bg-gray-800 dark:text-gray-400 dark:group-hover:bg-[#F6B23B] dark:group-hover:text-gray-900">
                    <benefit.icon size={14} strokeWidth={2.5} />
                  </div>
                  <p className="text-sm font-bold leading-relaxed text-gray-700 transition-colors group-hover:text-[#B27F1C] dark:text-gray-300 dark:group-hover:text-[#F6B23B]">
                    {benefit.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ type: "spring", stiffness: 200, damping: 25, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="relative col-span-1 flex flex-col overflow-hidden rounded-[8px] bg-gradient-to-b from-[#0B1221] to-[#030712] p-10 text-center shadow-2xl ring-1 ring-white/10 transition-all hover:shadow-[0_20px_50px_rgba(246,178,59,0.15)] lg:col-span-2"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#B27F1C]/30 via-transparent to-transparent opacity-60 dark:from-[#F6B23B]/30" />
            
            <div className="relative z-10 flex flex-col items-start text-left">
              <div className="mb-6 flex cursor-pointer items-center gap-2 rounded-[2px] border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 shadow-sm backdrop-blur-md transition-colors hover:bg-emerald-500/20">
                <Goal size={14} className="text-emerald-400" />
                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-emerald-400">
                  {marketData.outcome.tag}
                </span>
              </div>

              <h3 className="mb-8 text-[2rem] font-black leading-tight text-white">
                <span className="block opacity-90">{marketData.outcome.lines[0]}</span>
                <span className="block opacity-90">{marketData.outcome.lines[1]}</span>
                <span className="block bg-gradient-to-r from-[#F6B23B] to-[#f9d08b] bg-clip-text text-transparent">
                  {marketData.outcome.lines[2]}
                </span>
              </h3>
            </div>

            <motion.div 
              variants={floatChart}
              initial="hidden"
              whileInView={["show", "animate"]}
              viewport={{ once: true }}
              className="relative mt-auto h-40 w-full"
            >
              <div className="absolute inset-0 flex flex-col justify-between opacity-10">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-px w-full bg-white" />
                ))}
              </div>
              
              <svg className="absolute inset-0 h-full w-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F6B23B" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#F6B23B" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path 
                  d="M0,100 C20,80 30,90 50,50 C70,10 85,20 100,5" 
                  fill="url(#chartGrad)" 
                />
                <motion.path 
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeInOut", delay: 0.6 }}
                  d="M0,100 C20,80 30,90 50,50 C70,10 85,20 100,5" 
                  fill="none" 
                  stroke="#F6B23B" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  className="drop-shadow-[0_0_8px_rgba(246,178,59,0.8)]"
                />
              </svg>

              <div className="absolute right-0 top-1 -translate-y-1/2 translate-x-1/4">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#F6B23B]/20 backdrop-blur-md"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F6B23B] shadow-[0_0_20px_rgba(246,178,59,0.8)]">
                    <ArrowRight size={12} className="rotate-[-45deg] text-gray-900" strokeWidth={3} />
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="absolute -left-20 top-14 cursor-pointer whitespace-nowrap rounded-[4px] border border-white/10 bg-white/5 px-3 py-1.5 shadow-xl backdrop-blur-xl transition-colors hover:bg-white/10"
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                    <TrendingUp size={12} className="text-emerald-400" />
                    +342% ROI
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </motion.div>
        </div>

      </Container>
    </div>
  );
}