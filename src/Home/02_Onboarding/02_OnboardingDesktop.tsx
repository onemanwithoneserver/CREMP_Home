import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, ChevronRight } from 'lucide-react';
import { networkCategories, vendorBenefits } from './data';
import { stakeholdersData } from '../03_StakeHolders/data';
import bgImage from './bg.png';
import telanganaMap from './telangana.png';

export default function Desktop() {
  const [activeTab, setActiveTab] = useState(stakeholdersData[0].id);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((current) => {
        const currentIndex = stakeholdersData.findIndex((s) => s.id === current);
        const nextIndex = (currentIndex + 1) % stakeholdersData.length;
        return stakeholdersData[nextIndex].id;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const bgScale = useTransform(scrollYProgress, [0, 0.5], [1.05, 1]);

  const springAnim = { type: 'spring' as const, stiffness: 100, damping: 20 };

  const iconColorMap: Record<string, string> = {
    emerald: 'text-emerald-700 dark:text-emerald-400',
    blue: 'text-blue-700 dark:text-blue-400',
    purple: 'text-purple-700 dark:text-purple-400',
    rose: 'text-rose-700 dark:text-rose-400',
    amber: 'text-amber-700 dark:text-amber-400',
    cyan: 'text-cyan-700 dark:text-cyan-400',
  };

  const floatingParticles = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    x: 20 + Math.random() * 60,
    y: 15 + Math.random() * 70,
    size: 2 + Math.random() * 3,
    delay: Math.random() * 4,
    duration: 4 + Math.random() * 4,
  }));

  return (
    <div
      ref={sectionRef}
      className="relative flex min-h-screen w-full flex-col overflow-hidden bg-gray-50 px-2 pb-4 pt-4 font-sans text-[#050C17] dark:bg-[#050C17] dark:text-white "
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        style={{ y: bgY, scale: bgScale }}
        className="pointer-events-none absolute right-0 top-0 z-0 h-full w-full opacity-20 mix-blend-multiply dark:opacity-40 dark:mix-blend-screen lg:w-3/5 "
        aria-hidden="true"
      >
        <div
          className="h-full w-full bg-cover bg-right"
          style={{
            backgroundImage: `url(${bgImage})`,
            maskImage:
              'linear-gradient(to right, transparent 0%, black 40%, black 100%), linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, black 40%, black 100%), linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
            WebkitMaskComposite: 'source-in',
            maskComposite: 'intersect',
          }}
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-gray-50 via-gray-50/95 to-transparent dark:from-[#050C17] dark:via-[#050C17]/95 lg:via-gray-50/80 dark:lg:via-[#050C17]/80" />

      {floatingParticles.map((p) => (
        <motion.div
          key={p.id}
          className="pointer-events-none absolute z-0 hidden rounded-full bg-[#F6B23B]/30 dark:block"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [-10, 10, -10], opacity: [0, 0.6, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-6">
        <div className="flex flex-col items-center gap-12 pt-2 lg:flex-row lg:justify-between lg:gap-8 xl:gap-16">
          <div className="z-10 flex w-full flex-col lg:w-[50%] xl:w-[55%]">
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={springAnim}
              className="mb-5 flex w-fit max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-[#B27F1C]/20 bg-gradient-to-r from-[#B27F1C]/10 to-transparent px-3 py-1.5 text-xs shadow-[0_0_15px_rgba(178,127,28,0.1)] backdrop-blur-md sm:gap-3 sm:px-4 sm:text-sm dark:border-[#F6B23B]/20 dark:from-[#F6B23B]/10 dark:shadow-[0_0_15px_rgba(246,178,59,0.1)]"
            >
              <div className="flex items-center gap-1.5 font-bold text-[#050C17] sm:gap-2 dark:text-white">
                <Rocket className="h-3.5 w-3.5 text-[#B27F1C] sm:h-4 sm:w-4 dark:text-[#F6B23B]" />
                <span className="uppercase tracking-wide">Vendor Onboarding Open</span>
              </div>
              <div className="hidden h-3.5 w-[1px] bg-gray-300 sm:block dark:bg-gray-700"></div>
              <div className="flex items-center gap-1.5 font-semibold text-[#B27F1C] sm:gap-2 dark:text-[#F6B23B]">
                <span className="rounded bg-[#B27F1C]/20 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#B27F1C] sm:px-2 sm:text-xs dark:bg-[#F6B23B]/20 dark:text-[#F6B23B]">
                  Phase 1
                </span>
                <span className="uppercase tracking-wide">Launching in Telangana</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springAnim, delay: 0.1 }}
              className="mb-4 text-5xl font-extrabold leading-[1.1] tracking-tight text-[#050C17] dark:text-white lg:text-6xl"
            >
              India's 1st Integrated <br />
              <motion.span
                className="bg-gradient-to-r from-[#d97b29] to-[#F6B23B] bg-clip-text text-transparent"
                style={{ backgroundSize: '200% auto' }}
                animate={{ backgroundPosition: ['0% center', '100% center', '0% center'] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              >
                Commercial Real Estate
              </motion.span>{' '}
              <br />
              Marketplace
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springAnim, delay: 0.2 }}
              className="flex flex-wrap items-center gap-2 text-base font-bold text-[#050C17]/80 dark:text-white/80"
            >
              <span>Commercial Properties</span>
              <span className="text-[#F6B23B]">•</span>
              <span>Franchise Expansion</span>
              <span className="text-[#F6B23B]">•</span>
              <span>Retail Business Opportunities</span>
            </motion.div>
          </div>

          <div className="group/orbit relative mx-auto hidden h-[300px] w-[300px] shrink-0 items-center justify-center lg:flex lg:h-[400px] lg:w-[400px] xl:h-[460px] xl:w-[460px]">
            <div className="pointer-events-none absolute inset-0 rounded-full bg-[#F6B23B]/5 blur-[100px] transition-opacity duration-700 group-hover/orbit:opacity-100" />
            
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 360 }}
              transition={{
                scale: { duration: 1 },
                opacity: { duration: 1 },
                rotate: { repeat: Infinity, duration: 60, ease: "linear" }
              }}
              viewport={{ once: true }}
              className="absolute inset-0 rounded-full border border-dashed border-gray-300/80 dark:border-gray-800/80" 
            />
            
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute inset-[9%] rounded-full border border-gray-200/50 dark:border-gray-700/30"
            />

            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1, rotate: -360 }}
              transition={{
                scale: { duration: 1, delay: 0.4 },
                opacity: { duration: 1, delay: 0.4 },
                rotate: { repeat: Infinity, duration: 30, ease: "linear" }
              }}
              viewport={{ once: true }}
              className="absolute inset-[18%] rounded-full border border-gray-200 dark:border-[#111A2C]"
            >
              <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B27F1C] dark:bg-[#F6B23B] shadow-[0_0_15px_#B27F1C] dark:shadow-[0_0_15px_#F6B23B]" />
              <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#B27F1C] dark:bg-[#F6B23B] shadow-[0_0_15px_#B27F1C] dark:shadow-[0_0_15px_#F6B23B]" />
              <div className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B27F1C] dark:bg-[#F6B23B] shadow-[0_0_15px_#B27F1C] dark:shadow-[0_0_15px_#F6B23B]" />
              <div className="absolute right-0 top-1/2 h-2 w-2 translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B27F1C] dark:bg-[#F6B23B] shadow-[0_0_15px_#B27F1C] dark:shadow-[0_0_15px_#F6B23B]" />
            </motion.div>

            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative z-10 flex h-[40%] w-[40%] flex-col items-center justify-center rounded-full border border-gray-800 bg-[#050C17] shadow-[0_0_40px_rgba(246,178,59,0.15)] transition-shadow duration-700 before:absolute before:inset-[-10px] before:-z-10 before:rounded-full before:bg-gradient-to-b before:from-[#08101E] before:to-transparent group-hover/orbit:shadow-[0_0_60px_rgba(246,178,59,0.25)]"
            >
              <div className="absolute inset-0 animate-ping rounded-full bg-[#F6B23B]/10 opacity-20 duration-[3000ms]" />
              <img
                src={telanganaMap}
                alt="Telangana Map"
                className="z-10 h-[50%] w-[50%] object-contain drop-shadow-[0_0_10px_rgba(246,178,59,0.3)]"
              />
              <span className="mt-2 text-center text-[8px] font-bold leading-tight tracking-wider text-[#F6B23B] lg:text-[10px] xl:text-[12px]">
                PHASE 1
              </span>
            </motion.div>

            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
              className="absolute inset-0 z-20"
            >
              {stakeholdersData.map((stakeholder, index) => {
                const isActive = activeTab === stakeholder.id;
                const positions = [
                  { top: '13%', left: '13%' },
                  { top: '13%', right: '13%' },
                  { bottom: '13%', right: '13%' },
                  { bottom: '13%', left: '13%' },
                ];
                const pos = positions[index];

                return (
                  <motion.div 
                    key={stakeholder.id}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", duration: 0.6, delay: 0.8 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="absolute flex flex-col items-center justify-center"
                    style={{ ...pos, transform: 'translate(0, 0)' }}
                  >
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                      className="flex flex-col items-center justify-center"
                    >
                      <div className="relative">
                        {isActive && (
                          <div className="absolute inset-0 animate-ping rounded-full bg-[#B27F1C] opacity-30 duration-1000 dark:bg-[#F6B23B]" />
                        )}
                        <motion.div 
                          className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border bg-white transition-all duration-500 dark:bg-[#0C1525] lg:h-14 lg:w-14 xl:h-16 xl:w-16 ${
                            isActive 
                              ? 'scale-110 border-[#B27F1C] text-[#B27F1C] shadow-[0_0_30px_rgba(178,127,28,0.2)] dark:border-[#F6B23B] dark:text-[#F6B23B] dark:shadow-[0_0_30px_rgba(246,178,59,0.5)]' 
                              : 'border-gray-200 text-gray-400 hover:border-[#B27F1C]/50 hover:text-[#050C17] dark:border-gray-700 dark:hover:border-[#F6B23B]/50 dark:hover:text-white'
                          }`}
                          whileHover={{ scale: 1.05 }}
                        >
                          <stakeholder.icon className="h-5 w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7" strokeWidth={1.8} />
                        </motion.div>
                      </div>
                      <span className={`mt-2 text-center text-[10px] font-bold transition-all duration-500 lg:text-[11px] xl:mt-3 xl:text-sm ${isActive ? 'text-[#050C17] drop-shadow-[0_0_2px_rgba(0,0,0,0.1)] dark:text-white dark:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]' : 'text-gray-500'}`} style={{ whiteSpace: 'pre-line' }}>
                        {stakeholder.label}
                      </span>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ...springAnim, delay: 0.4 }}
          viewport={{ once: true, margin: '-40px' }}
          className="group/container relative mt-2 overflow-hidden rounded-2xl border border-gray-200 bg-white/95 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-700 hover:border-[#F6B23B]/30 dark:border-gray-800 dark:bg-[#0C1525]/95 dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
        >
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover/container:opacity-100"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(246,178,59,0.1), transparent)', backgroundSize: '200% 100%' }}
            animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />

          <div className="relative z-10 grid grid-cols-1 items-center gap-6 p-6 lg:grid-cols-[1.1fr_2fr_1fr] lg:gap-0 lg:p-8">
            <div className="flex flex-col border-b border-gray-200 pb-6 dark:border-gray-800 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-[#B27F1C]/10 p-2 dark:bg-[#F6B23B]/10">
                  <Rocket className="h-6 w-6 text-[#B27F1C] dark:text-[#F6B23B]" />
                </div>
                <div>
                  <h3 className="leading-tight text-lg font-bold text-[#050C17] dark:text-white">
                    Launching First in
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-[#B27F1C] dark:text-[#F6B23B]">Telangana</span>
                    <span className="text-sm font-bold text-gray-500 dark:text-gray-400">— Phase 1</span>
                  </div>
                </div>
              </div>
              <p className="leading-snug text-sm font-medium text-gray-600 dark:text-gray-400">
                We're currently onboarding our founding network of:
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 px-0 sm:grid-cols-3 lg:px-8">
              {networkCategories.map((cat, idx) => (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ ...springAnim, delay: 0.5 + idx * 0.05 }}
                  viewport={{ once: true }}
                  className="group flex flex-col items-center gap-2 text-center"
                >
                  <motion.div whileHover={{ y: -4, scale: 1.05 }} className="flex h-10 w-10 items-center justify-center transition-transform">
                    <cat.icon
                      className={`h-7 w-7 ${iconColorMap[cat.colorFamily] || 'text-gray-700 dark:text-gray-300'} transition-all duration-300 group-hover:drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)] dark:group-hover:drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)]`}
                      strokeWidth={1.5}
                    />
                  </motion.div>
                  <span className="leading-tight text-[11px] font-bold text-gray-800 transition-colors group-hover:text-[#F6B23B] dark:text-gray-200">
                    {cat.title}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col gap-3 border-t border-gray-200 pt-6 dark:border-gray-800 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="group/btn relative flex w-full items-center justify-between overflow-hidden rounded-lg bg-[#050C17] px-4 py-3 text-sm font-bold text-white transition-all hover:shadow-lg dark:bg-white dark:text-[#050C17] dark:hover:shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full dark:via-black/10" />
                <span className="relative">Request Early Access</span>
                <ChevronRight className="relative h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="group/btn relative flex w-full items-center justify-between overflow-hidden rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-bold text-[#050C17] transition-all hover:border-[#F6B23B]/50 hover:shadow-md dark:border-gray-700 dark:bg-[#111A2C] dark:text-white"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gray-100 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full dark:via-white/5" />
                <span className="relative">Explore Marketplace</span>
                <ChevronRight className="relative h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </motion.button>
            </div>
          </div>

          <div className="border-t border-gray-100 bg-gray-50/50 py-3 text-center dark:border-gray-800 dark:bg-white/[0.02]">
            <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
              Join early to establish your presence{' '}
              <span className="font-bold text-[#B27F1C] dark:text-[#F6B23B]">before public discovery begins.</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ...springAnim, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-4 rounded-xl border border-gray-200/60 bg-white/60 px-6 py-4 backdrop-blur-md dark:border-gray-800/60 dark:bg-[#0C1525]/60 lg:flex-row"
        >
          <div className="flex-shrink-0 text-sm font-bold uppercase tracking-wider text-gray-800 dark:text-gray-200">
            Founding Vendor Benefits
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {vendorBenefits.map((benefit) => (
              <motion.div key={benefit.title} whileHover={{ y: -2 }} className="flex items-center gap-2.5">
                <div className="rounded-full border border-gray-200 bg-white p-1.5 text-[#B27F1C] shadow-sm dark:border-gray-700 dark:bg-[#111A2C] dark:text-[#F6B23B]">
                  <benefit.icon className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{benefit.title}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}