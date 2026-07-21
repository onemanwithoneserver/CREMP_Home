import { motion, type Variants } from 'framer-motion';
import { Container } from '../../components/layout';
import { YourBrandLogo } from '../../components/YourBrandLogo';
import { Sparkles, ArrowRight, LayoutDashboard, Users, BarChart3, Settings, Bell, Search, TrendingUp, Activity } from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const floatAnimation: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  animate: {
    y: [-4, 4, -4],
    transition: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
  },
};

const floatSubtle: Variants = {
  animate: {
    y: [-3, 3, -3],
    transition: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 },
  },
};

const pulseGlow: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.4, 0.7, 0.4],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
  }
};

export default function MobileYourBrand() {
  return (
    <section className="relative w-full overflow-hidden bg-gray-50 py-4 transition-colors duration-700 dark:bg-[#030712]">
      <motion.div variants={pulseGlow} animate="animate" className="pointer-events-none absolute left-[-10%] top-[10%] h-[300px] w-[300px] rounded-full bg-[#B27F1C]/10 blur-[80px] dark:bg-[#F6B23B]/15" />

      <Container className="relative z-10">
        <div className="flex flex-col items-center gap-6">
          
          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="flex w-full flex-col items-center text-center">
            <motion.div variants={fadeInUp}>
              <div className="mb-4 flex w-fit items-center gap-2 rounded-[2px] border border-[#B27F1C]/20 bg-white/60 px-4 py-1.5 shadow-sm backdrop-blur-md dark:border-[#F6B23B]/20 dark:bg-[#F6B23B]/5">
                <Sparkles size={14} className="text-[#B27F1C] dark:text-[#F6B23B]" />
                <span className="text-[0.65rem] font-bold font-sans uppercase tracking-widest text-[#B27F1C] dark:text-[#F6B23B]">Unify Your Workspace</span>
              </div>
            </motion.div>
            
            <motion.h2 variants={fadeInUp} className="mb-4 text-[2.5rem] font-black font-sans leading-[1.1] tracking-tight sm:text-[3rem]">
              <span className="block text-gray-900 dark:text-white">Your Brand.</span>
              <span className="block animate-pulse bg-gradient-to-r from-[#B27F1C] to-[#d49924] bg-clip-text text-transparent dark:from-[#F6B23B] dark:to-[#f9d08b]">Your Story.</span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="mb-6 px-2 text-[0.95rem] font-medium font-sans leading-relaxed text-gray-600 dark:text-gray-400">
              Take full control of your narrative. Manage your digital presence, track audience engagement, and scale your growth intuitively—all from one powerful dashboard designed for modern creators.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex w-full flex-col items-center justify-center gap-3">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group flex w-full max-w-[280px] items-center justify-center gap-2 rounded-[4px] bg-gradient-to-r from-[#B27F1C] to-[#d49924] px-7 py-3.5 text-sm font-bold font-sans text-white shadow-md dark:from-[#F6B23B] dark:to-[#f9d08b] dark:text-gray-900">
                Explore Dashboard
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex w-full max-w-[280px] items-center justify-center gap-2 rounded-[4px] border border-gray-200 bg-white px-7 py-3.5 text-sm font-bold font-sans text-gray-900 shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:text-white">
                View Live Demo
              </motion.button>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 flex items-center justify-center gap-8 border-t border-gray-200/60 pt-8 dark:border-gray-800/60">
              <div className="flex flex-col items-center">
                <h4 className="text-2xl font-black text-gray-900 dark:text-white">98%</h4>
                <p className="text-[0.65rem] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Client Retention</p>
              </div>
              <div className="h-10 w-px bg-gray-200 dark:bg-gray-800" />
              <div className="flex flex-col items-center">
                <h4 className="text-2xl font-black text-gray-900 dark:text-white">2.4x</h4>
                <p className="text-[0.65rem] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Growth Rate</p>
              </div>
            </motion.div>
          </motion.div>

          <div className="relative mt-8 flex w-full justify-center pb-4">
            <motion.div variants={floatAnimation} initial="hidden" whileInView={["show", "animate"]} viewport={{ once: true }} className="relative w-full max-w-[320px]">
              
              <motion.div variants={floatSubtle} initial="animate" className="absolute -left-2 top-8 z-30 flex scale-90 items-center gap-3 rounded-[8px] border border-gray-200/50 bg-white/95 p-3 shadow-xl backdrop-blur-md dark:border-gray-700/50 dark:bg-gray-800/95">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#10B981]/10 text-[#10B981]">
                  <TrendingUp size={18} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-[0.6rem] font-bold uppercase text-gray-500 dark:text-gray-400">Conversion</p>
                  <p className="text-base font-black text-gray-900 dark:text-white">+24.8%</p>
                </div>
              </motion.div>

              <motion.div variants={floatSubtle} initial="animate" className="absolute -bottom-6 -right-2 z-30 flex scale-90 items-center gap-3 rounded-[8px] border border-gray-200/50 bg-white/95 p-3 shadow-xl backdrop-blur-md dark:border-gray-700/50 dark:bg-gray-800/95">
                <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
                  <Activity size={16} strokeWidth={2.5} />
                  <span className="absolute right-0 top-0 h-2 w-2 animate-ping rounded-full bg-blue-500 opacity-75" />
                  <span className="absolute right-0 top-0 h-2 w-2 rounded-full border-2 border-white bg-blue-500 dark:border-gray-800" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900 dark:text-white">System Active</p>
                  <p className="text-[0.55rem] font-medium text-gray-500 dark:text-gray-400">All services operational</p>
                </div>
              </motion.div>

              <div className="relative flex h-[460px] w-full flex-col overflow-hidden rounded-[8px] border border-gray-200/80 bg-white shadow-2xl dark:border-gray-800/80 dark:bg-[#0a101d]">
                <div className="relative flex items-center border-b border-gray-100 bg-white/80 px-4 py-2.5 backdrop-blur-md dark:border-gray-800/60 dark:bg-[#0a101d]/80">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
                    <div className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
                  </div>
                  <div className="absolute left-1/2 flex w-[60%] -translate-x-1/2 items-center justify-center gap-2 rounded-[4px] border border-gray-200 bg-gray-50/50 py-1 text-[0.6rem] font-medium text-gray-500 dark:border-gray-700/80 dark:bg-gray-900/50">
                    <span className="text-gray-400">🔒</span> yourbrand.com
                  </div>
                </div>

                <div className="flex flex-1 overflow-hidden">
                  <div className="flex w-14 flex-col items-center border-r border-gray-100 bg-gray-50/50 py-4 dark:border-gray-800/60 dark:bg-gray-900/20">
                    <div className="mb-6 scale-75 origin-top"><YourBrandLogo size="sm" showText={false} /></div>
                    <div className="flex flex-col gap-6 text-gray-400 dark:text-gray-500">
                      <div className="rounded-[4px] bg-white p-2 text-[#B27F1C] shadow-sm dark:bg-gray-800 dark:text-[#F6B23B]"><LayoutDashboard size={18} /></div>
                      <div className="p-2"><BarChart3 size={18} /></div>
                      <div className="p-2"><Users size={18} /></div>
                      <div className="p-2"><Settings size={18} /></div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col bg-white p-4 dark:bg-[#030712]">
                    <div className="mb-5 flex items-center justify-between">
                      <div>
                        <h3 className="text-base font-bold text-gray-900 dark:text-white">Overview</h3>
                        <p className="text-[0.6rem] text-gray-500">Welcome back</p>
                      </div>
                      <div className="flex items-center gap-3 text-gray-400">
                        <Search size={16} />
                        <div className="relative">
                          <Bell size={16} />
                          <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-red-500 ring-2 ring-white dark:ring-[#030712]" />
                        </div>
                        <div className="h-6 w-6 overflow-hidden rounded-full bg-gray-200"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" className="h-full w-full object-cover" alt="User" /></div>
                      </div>
                    </div>

                    <div className="mb-5 flex flex-col gap-3">
                      <div className="rounded-[8px] border border-gray-100 bg-gray-50/50 p-3 dark:border-gray-800/60 dark:bg-gray-900/30">
                        <p className="mb-1 text-[0.65rem] font-medium text-gray-500">Total Revenue</p>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">$84,590</h4>
                        <p className="mt-1 flex items-center text-[0.6rem] font-bold text-emerald-500"><TrendingUp size={10} className="mr-1" /> +12.5%</p>
                      </div>
                      <div className="rounded-[8px] border border-gray-100 bg-gray-50/50 p-3 dark:border-gray-800/60 dark:bg-gray-900/30">
                        <p className="mb-1 text-[0.65rem] font-medium text-gray-500">Active Users</p>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">12,405</h4>
                        <p className="mt-1 flex items-center text-[0.6rem] font-bold text-emerald-500"><TrendingUp size={10} className="mr-1" /> +8.2%</p>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col rounded-[8px] border border-gray-100 bg-white p-3 shadow-sm dark:border-gray-800/60 dark:bg-[#0a101d]">
                      <div className="mb-3 flex items-center justify-between">
                        <h4 className="text-[0.75rem] font-bold text-gray-900 dark:text-white">Performance</h4>
                      </div>
                      <div className="relative flex-1">
                        <div className="absolute inset-0 flex items-end justify-between gap-1.5 pt-2 opacity-80">
                          {[40, 70, 45, 90, 65, 85, 100].map((height, i) => (
                            <div key={i} className="flex w-full flex-col justify-end h-full">
                              <motion.div initial={{ height: 0 }} whileInView={{ height: `${height}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }} className="w-full rounded-t-[2px] bg-[#B27F1C]/20 dark:bg-[#F6B23B]/20" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
