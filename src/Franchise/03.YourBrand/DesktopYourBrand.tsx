import { motion, type Variants } from 'framer-motion';
import { Container } from '../../components/layout';
import { YourBrandLogo } from '../../components/YourBrandLogo';
import { 
  Sparkles, 
  ArrowRight, 
  LayoutDashboard, 
  Users, 
  BarChart3, 
  Settings, 
  Bell, 
  Search,
  TrendingUp,
  Activity
} from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 200, damping: 20 } 
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const floatAnimation: Variants = {
  hidden: { opacity: 0, x: 20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
  animate: {
    y: [-8, 8, -8],
    transition: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
  },
};

const floatSubtle: Variants = {
  animate: {
    y: [-4, 4, -4],
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

export default function DashboardShowcase() {
  return (
    <section className="relative w-full overflow-hidden bg-gray-50 py-12 transition-colors duration-700 dark:bg-[#030712]">
      
      <motion.div 
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute left-0 top-0 h-[800px] w-[800px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/15 via-transparent to-transparent dark:from-[#D4AF37]/15" 
      />
      <motion.div 
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute bottom-0 right-0 h-[600px] w-[600px] translate-x-1/3 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-transparent to-transparent dark:from-[#D4AF37]/10" 
      />

      <Container className="relative z-10 mx-auto max-w-7xl px-4 xl:px-0">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:justify-between">
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="flex w-full flex-col justify-center lg:w-[45%]"
          >
            <motion.div variants={fadeInUp}>
              <div className="mb-6 flex w-fit items-center gap-2 rounded-[2px] border border-[#D4AF37]/20 bg-white/60 px-4 py-1.5 shadow-sm backdrop-blur-md dark:border-[#D4AF37]/20 dark:bg-[#D4AF37]/5">
                <Sparkles size={14} className="text-[#D4AF37] dark:text-[#D4AF37]" />
                <span className="text-[0.7rem] font-bold uppercase tracking-widest text-[#D4AF37] dark:text-[#D4AF37]">
                  Unify Your Workspace
                </span>
              </div>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="mb-6 text-[3.5rem] font-black leading-[1.1] tracking-tight xl:text-[4.5rem]"
            >
              <span className="block text-gray-900 dark:text-white">Your Brand.</span>
              <span className="block animate-pulse bg-gradient-to-r from-[#D4AF37] to-[#b38728] bg-clip-text text-transparent dark:from-[#D4AF37] dark:to-[#f9d08b]">
                Your Story.
              </span>
            </motion.h2>

            <motion.p 
              variants={fadeInUp}
              className="mb-8 text-lg font-medium leading-relaxed text-gray-600 dark:text-gray-400"
            >
              Take full control of your narrative. Manage your digital presence, track audience engagement, and scale your growth intuitively—all from one powerful dashboard designed for modern creators.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-2 rounded-[4px] bg-gradient-to-r from-[#D4AF37] to-[#b38728] px-7 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(178,127,28,0.2)] transition-all hover:shadow-[0_0_30px_rgba(178,127,28,0.4)] dark:from-[#D4AF37] dark:to-[#f9d08b] dark:text-gray-900 dark:shadow-[0_8px_20px_rgba(246,178,59,0.2)] dark:hover:shadow-[0_0_30px_rgba(246,178,59,0.4)]"
              >
                Explore Dashboard
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-[4px] border border-gray-200 bg-white px-7 py-3.5 text-sm font-bold text-gray-900 shadow-sm transition-all hover:border-[#D4AF37]/50 hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:hover:border-[#D4AF37]/50 dark:hover:bg-gray-800"
              >
                View Live Demo
              </motion.button>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-12 flex items-center gap-8 border-t border-gray-200/60 pt-8 dark:border-gray-800/60">
              <motion.div whileHover={{ y: -2 }} className="cursor-default">
                <h4 className="text-2xl font-black text-gray-900 dark:text-white">98%</h4>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Client Retention</p>
              </motion.div>
              <div className="h-10 w-px bg-gray-200 dark:bg-gray-800" />
              <motion.div whileHover={{ y: -2 }} className="cursor-default">
                <h4 className="text-2xl font-black text-gray-900 dark:text-white">2.4x</h4>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Growth Rate</p>
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="relative flex w-full items-center justify-center lg:w-[55%]">
            <motion.div 
              variants={floatAnimation}
              initial="hidden"
              whileInView={["show", "animate"]}
              viewport={{ once: true, margin: "-50px" }}
              className="relative w-full max-w-[700px] lg:translate-x-8 xl:translate-x-12"
            >
              <motion.div 
                variants={floatSubtle}
                initial="animate"
                whileHover={{ scale: 1.05, zIndex: 40 }}
                className="absolute -left-12 top-20 z-30 flex cursor-pointer items-center gap-4 rounded-[8px] border border-gray-200/50 bg-white/90 p-4 shadow-xl backdrop-blur-md transition-shadow hover:shadow-2xl dark:border-gray-700/50 dark:bg-gray-800/90 sm:-left-16"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#10B981]/10 text-[#10B981]">
                  <TrendingUp size={20} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-[0.65rem] font-bold uppercase text-gray-500 dark:text-gray-400">Conversion</p>
                  <p className="text-lg font-black text-gray-900 dark:text-white">+24.8%</p>
                </div>
              </motion.div>

              <motion.div 
                variants={floatSubtle}
                initial="animate"
                whileHover={{ scale: 1.05, zIndex: 40 }}
                className="absolute -bottom-8 -right-4 z-30 flex cursor-pointer items-center gap-3 rounded-[8px] border border-gray-200/50 bg-white/90 p-4 shadow-xl backdrop-blur-md transition-shadow hover:shadow-2xl dark:border-gray-700/50 dark:bg-gray-800/90 sm:-right-8"
              >
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
                  <Activity size={18} strokeWidth={2.5} />
                  <span className="absolute right-0 top-0 h-2.5 w-2.5 animate-ping rounded-full bg-blue-500 opacity-75" />
                  <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-blue-500 dark:border-gray-800" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">System Active</p>
                  <p className="text-[0.65rem] font-medium text-gray-500 dark:text-gray-400">All services operational</p>
                </div>
              </motion.div>

              <div className="relative flex h-[520px] w-full flex-col overflow-hidden rounded-[8px] border border-gray-200/80 bg-white shadow-2xl dark:border-gray-800/80 dark:bg-[#0a101d]">
                
                <div className="relative flex items-center border-b border-gray-100 bg-white/80 px-4 py-3 backdrop-blur-md dark:border-gray-800/60 dark:bg-[#0a101d]/80">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400/90 shadow-inner hover:bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-amber-400/90 shadow-inner hover:bg-amber-500" />
                    <div className="h-3 w-3 rounded-full bg-emerald-400/90 shadow-inner hover:bg-emerald-500" />
                  </div>
                  <div className="absolute left-1/2 flex w-1/2 -translate-x-1/2 items-center justify-center gap-2 rounded-[4px] border border-gray-200 bg-gray-50/50 py-1.5 text-[0.7rem] font-medium text-gray-500 shadow-sm backdrop-blur-sm dark:border-gray-700/80 dark:bg-gray-900/50 dark:text-gray-400">
                    <span className="text-gray-400">🔒</span> yourbrand.com/dashboard
                  </div>
                </div>

                <div className="flex flex-1 overflow-hidden">
                  
                  <div className="flex w-16 flex-col items-center border-r border-gray-100 bg-gray-50/50 py-6 dark:border-gray-800/60 dark:bg-gray-900/20 sm:w-20">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                      className="mb-8 cursor-pointer" 
                    >
                      <YourBrandLogo size="md" showText={false} />
                    </motion.div>
                    <div className="flex flex-col gap-6 text-gray-400 dark:text-gray-500">
                      <div className="cursor-pointer rounded-[4px] bg-white p-2.5 text-[#D4AF37] shadow-sm transition-transform hover:scale-110 dark:bg-gray-800 dark:text-[#D4AF37]">
                        <LayoutDashboard size={20} />
                      </div>
                      <div className="cursor-pointer p-2.5 transition-all hover:scale-110 hover:text-gray-600 dark:hover:text-gray-300"><BarChart3 size={20} /></div>
                      <div className="cursor-pointer p-2.5 transition-all hover:scale-110 hover:text-gray-600 dark:hover:text-gray-300"><Users size={20} /></div>
                      <div className="cursor-pointer p-2.5 transition-all hover:scale-110 hover:text-gray-600 dark:hover:text-gray-300"><Settings size={20} /></div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col bg-white p-6 dark:bg-[#030712]">
                    
                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Overview</h3>
                        <p className="text-xs text-gray-500">Welcome back to your dashboard</p>
                      </div>
                      <div className="flex items-center gap-4 text-gray-400">
                        <Search size={18} className="cursor-pointer transition-colors hover:text-gray-600 dark:hover:text-gray-300" />
                        <div className="relative cursor-pointer transition-colors hover:text-gray-600 dark:hover:text-gray-300">
                          <Bell size={18} />
                          <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-[#030712]" />
                        </div>
                        <div className="ml-2 h-8 w-8 cursor-pointer overflow-hidden rounded-full bg-gray-200 ring-2 ring-transparent transition-all hover:ring-[#D4AF37] dark:bg-gray-800 dark:hover:ring-[#D4AF37]">
                          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" className="h-full w-full object-cover" alt="User" />
                        </div>
                      </div>
                    </div>

                    <div className="mb-6 grid grid-cols-2 gap-4">
                      <motion.div 
                        whileHover={{ y: -4 }}
                        className="cursor-pointer rounded-[8px] border border-gray-100 bg-gray-50/50 p-4 transition-shadow hover:shadow-md dark:border-gray-800/60 dark:bg-gray-900/30 transition-all duration-300 hover:shadow-lg hover:border-[#D4AF37]/50"
                      >
                        <p className="mb-1 text-xs font-medium text-gray-500">Total Revenue</p>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">$84,590</h4>
                        <p className="mt-1 flex items-center text-[0.65rem] font-bold text-emerald-500">
                          <TrendingUp size={10} className="mr-1" /> +12.5%
                        </p>
                      </motion.div>
                      <motion.div 
                        whileHover={{ y: -4 }}
                        className="cursor-pointer rounded-[8px] border border-gray-100 bg-gray-50/50 p-4 transition-shadow hover:shadow-md dark:border-gray-800/60 dark:bg-gray-900/30 transition-all duration-300 hover:shadow-lg hover:border-[#D4AF37]/50"
                      >
                        <p className="mb-1 text-xs font-medium text-gray-500">Active Users</p>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">12,405</h4>
                        <p className="mt-1 flex items-center text-[0.65rem] font-bold text-emerald-500">
                          <TrendingUp size={10} className="mr-1" /> +8.2%
                        </p>
                      </motion.div>
                    </div>

                    <div className="flex flex-1 flex-col rounded-[8px] border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-800/60 dark:bg-[#0a101d] transition-all duration-300 hover:shadow-lg hover:border-[#D4AF37]/50">
                      <div className="mb-4 flex items-center justify-between">
                        <h4 className="text-sm font-bold text-gray-900 dark:text-white">Performance</h4>
                        <select className="cursor-pointer rounded-[2px] border border-gray-200 bg-transparent px-2 py-1 text-xs text-gray-500 outline-none transition-colors hover:border-gray-300 focus:border-[#D4AF37] dark:border-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:focus:border-[#D4AF37]">
                          <option>This Week</option>
                          <option>Last Week</option>
                          <option>This Month</option>
                        </select>
                      </div>
                      <div className="relative flex-1">
                        <div className="absolute inset-0 flex items-end justify-between gap-2 pt-4 opacity-80">
                          {[40, 70, 45, 90, 65, 85, 100].map((height, i) => (
                            <div key={i} className="group relative flex w-full flex-col justify-end">
                              <motion.div 
                                initial={{ height: 0 }}
                                whileInView={{ height: `${height}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 + i * 0.1, type: "spring", bounce: 0.3 }}
                                className="w-full cursor-pointer rounded-t-[2px] bg-[#D4AF37]/20 transition-colors group-hover:bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] dark:bg-[#D4AF37]/20 dark:group-hover:bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(251,191,36,0.25)] active:scale-95" 
                              />
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