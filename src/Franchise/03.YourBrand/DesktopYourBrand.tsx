import { motion } from 'framer-motion';
import { Container } from '../../components/layout';
import { brandData } from './data';
import { Store, MapPin, Users, Star, Play, Pause, CheckCircle2 } from 'lucide-react';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 15 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 300, damping: 24 } 
  },
};

const floatAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
  animate: {
    y: [-4, 4, -4],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export default function DesktopYourBrand() {
  return (
    <div className="relative w-full overflow-hidden bg-gray-50 py-24 transition-colors duration-700 dark:bg-[#030712]">
      
      <div className="pointer-events-none absolute right-0 top-0 h-[800px] w-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#B27F1C]/10 via-transparent to-transparent dark:from-[#F6B23B]/10" />
      <div className="pointer-events-none absolute bottom-0 left-[-10%] h-[600px] w-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#B27F1C]/5 via-transparent to-transparent dark:from-[#F6B23B]/5" />

      <Container className="relative z-10 mx-auto max-w-7xl px-4 xl:px-0">
        <div className="mb-20 flex flex-col items-center gap-16 lg:flex-row lg:items-stretch">
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="flex w-full flex-col justify-center lg:w-[45%]"
          >
            <motion.div variants={fadeInUp}>
              <span className="mb-6 flex w-fit items-center gap-2 rounded-full border border-[#B27F1C]/20 bg-white/60 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#B27F1C] shadow-sm backdrop-blur-md dark:border-[#F6B23B]/20 dark:bg-[#F6B23B]/5 dark:text-[#F6B23B]">
                {brandData.tag}
              </span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="mb-6 text-[3rem] font-black leading-[1.05] tracking-tight xl:text-[3.5rem]"
            >
              <span className="block text-gray-900 dark:text-white">{brandData.titleBase}</span>
              <span className="block bg-gradient-to-r from-[#B27F1C] to-[#d49924] bg-clip-text text-transparent dark:from-[#F6B23B] dark:to-[#f9d08b]">
                {brandData.titleHighlight}
              </span>
            </motion.h2>

            <motion.div variants={fadeInUp} className="mb-10 flex flex-col gap-4">
              <p className="text-[1.05rem] font-medium text-gray-600 dark:text-gray-400">
                {brandData.desc[0]}
              </p>
              
              <div className="my-2 flex flex-col gap-2.5 border-l-2 border-[#B27F1C]/30 pl-4 dark:border-[#F6B23B]/30">
                <p className="text-[1.05rem] font-bold text-gray-900 dark:text-white">{brandData.desc[1]}</p>
                <p className="text-[1.05rem] font-bold text-gray-900 dark:text-white">{brandData.desc[2]}</p>
                <p className="text-[1.05rem] font-bold text-gray-900 dark:text-white">{brandData.desc[3]}</p>
              </div>

              <p className="text-[1.05rem] font-medium leading-relaxed text-gray-600 dark:text-gray-400">
                {brandData.desc[4]}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4 pt-4">
              {brandData.showcaseMenu.map((item, idx) => (
                <div 
                  key={idx} 
                  className="group flex cursor-pointer items-center gap-4 rounded-lg border border-gray-200/60 bg-white/60 p-4 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-[#B27F1C]/30 hover:bg-white hover:shadow-md dark:border-gray-800/60 dark:bg-gray-900/40 dark:hover:border-[#F6B23B]/30 dark:hover:bg-gray-900/80"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#B27F1C]/10 bg-gradient-to-br from-[#fdf6ea] to-white text-[#B27F1C] shadow-sm transition-transform group-hover:scale-110 dark:border-gray-800 dark:from-[#030712] dark:to-[#0a101d] dark:text-[#F6B23B]">
                    <item.icon size={18} strokeWidth={2} />
                  </div>
                  <span className="text-[0.9rem] font-bold text-gray-800 transition-colors group-hover:text-[#B27F1C] dark:text-gray-200 dark:group-hover:text-[#F6B23B]">
                    {item.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <div className="flex w-full items-center justify-center lg:w-[55%]">
            <motion.div 
              variants={floatAnimation}
              initial="hidden"
              whileInView={["show", "animate"]}
              viewport={{ once: true, margin: "-50px" }}
              className="relative mt-8 w-[115%] max-w-[800px] -mr-[60px]"
            >
              <div className="flex h-[500px] w-full flex-col overflow-hidden rounded-xl border border-gray-200/80 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:border-gray-800/80 dark:bg-[#0a101d]">
                
                {/* Browser Mac Header */}
                <div className="relative flex items-center border-b border-gray-100 bg-white px-4 py-3 dark:border-gray-800/60 dark:bg-[#0a101d]">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                    <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                    <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-[0.65rem] font-medium text-gray-500 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400">
                    <Star size={10} className="text-purple-400" /> n4re.com/app/red-expert
                  </div>
                </div>

                {/* Video Carousel Body */}
                <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-[#fafafa] dark:bg-[#030712]">
                  
                  {/* Carousel Container */}
                  <div className="relative flex h-full w-full items-center justify-center">
                    
                    {/* Far Left Card */}
                    <div className="absolute z-10 h-[160px] w-[240px] -translate-x-[280px] scale-[0.75] overflow-hidden rounded-lg bg-gray-200 opacity-40 shadow-sm dark:bg-gray-800">
                      <img src="https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=400&auto=format&fit=crop" className="h-full w-full object-cover mix-blend-luminosity" alt="Video thumbnail" />
                    </div>

                    {/* Far Right Card */}
                    <div className="absolute z-10 h-[160px] w-[240px] translate-x-[280px] scale-[0.75] overflow-hidden rounded-lg bg-gray-200 opacity-40 shadow-sm dark:bg-gray-800"></div>

                    {/* Left Card */}
                    <div className="absolute z-20 flex h-[180px] w-[280px] -translate-x-[170px] scale-[0.85] flex-col justify-end overflow-hidden rounded-lg bg-gray-700 opacity-90 shadow-lg dark:bg-gray-800">
                      <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-overlay" alt="Meeting" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                          <Play className="ml-1 fill-white/70 text-white/70" size={20} />
                        </div>
                      </div>
                      <div className="relative z-10 p-4">
                        <h4 className="mb-0.5 text-sm font-bold leading-tight text-white">Building Trust with Clients</h4>
                        <span className="flex items-center gap-1 text-[0.65rem] text-gray-300">
                          Siddharth Rao <CheckCircle2 size={10} className="text-gray-400" />
                        </span>
                      </div>
                    </div>

                    {/* Right Card */}
                    <div className="absolute z-20 flex h-[180px] w-[280px] translate-x-[170px] scale-[0.85] flex-col justify-end overflow-hidden rounded-lg bg-gray-500 opacity-80 shadow-lg dark:bg-gray-800">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                          <Play className="ml-1 fill-white/70 text-white/70" size={20} />
                        </div>
                      </div>
                      <div className="relative z-10 flex justify-end p-4">
                        <div className="rounded bg-black/50 px-1.5 py-0.5 text-[0.6rem] font-bold text-white backdrop-blur-sm">14:30</div>
                      </div>
                    </div>

                    {/* Center (Active) Card */}
                    <div className="absolute z-30 flex h-[220px] w-[340px] flex-col justify-between overflow-hidden rounded-xl bg-[#0f1423] p-5 shadow-[0_0_60px_rgba(244,114,182,0.15)] ring-1 ring-white/10 dark:bg-[#0B1221]">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-white/20 shadow-sm backdrop-blur-md ring-1 ring-white/10 transition-transform hover:scale-110">
                          <Play className="ml-1 fill-white text-white" size={24} />
                        </div>
                      </div>
                      <div className="relative z-10 mt-auto flex items-end justify-between">
                        <div>
                          <h4 className="mb-1 text-lg font-bold leading-tight text-white drop-shadow-sm">Effective Digital Marketing</h4>
                          <span className="flex items-center gap-1 text-[0.7rem] text-gray-300">
                            Priya Sharma <CheckCircle2 size={12} className="text-blue-400" />
                          </span>
                        </div>
                        <div className="rounded bg-black/80 px-2 py-1 text-[0.65rem] font-bold tracking-wider text-white shadow-sm">10:05</div>
                      </div>
                    </div>

                  </div>

                  {/* Bottom Right Pause Button */}
                  <div className="absolute bottom-6 right-6 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-gray-600/90 text-white shadow-lg backdrop-blur-md transition-colors hover:bg-gray-700 dark:bg-gray-700/90 dark:hover:bg-gray-600">
                    <Pause size={18} className="fill-white" />
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative flex w-full flex-col items-center gap-6 overflow-hidden rounded-lg border border-gray-200/50 bg-white p-6 shadow-xl ring-1 ring-gray-100 dark:border-gray-800 dark:bg-[#0a101d] dark:ring-gray-800 sm:flex-row sm:gap-8 sm:p-8 sm:px-10"
        >
          <div className="pointer-events-none absolute bottom-0 right-0 w-1/2 opacity-10 dark:opacity-20 sm:w-1/3">
            <svg viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
              <path d="M0 80 L 150 50 L 250 60 L 380 10" stroke="#d49924" strokeWidth="3" fill="none"/>
              <path d="M370 10 L 380 10 L 380 20" stroke="#d49924" strokeWidth="3" fill="none"/>
              <rect x="250" y="70" width="10" height="30" stroke="#d49924" strokeWidth="2"/>
              <rect x="270" y="60" width="10" height="40" stroke="#d49924" strokeWidth="2"/>
              <rect x="290" y="45" width="10" height="55" stroke="#d49924" strokeWidth="2"/>
              <circle cx="340" cy="45" r="10" stroke="#d49924" strokeWidth="2"/>
              <path d="M320 80 Q 340 60 360 80" stroke="#d49924" strokeWidth="2" fill="none"/>
              <circle cx="370" cy="55" r="8" stroke="#d49924" strokeWidth="2"/>
              <path d="M355 90 Q 370 75 385 90" stroke="#d49924" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          
          <div className="z-10 flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0f172a] to-[#030712] shadow-lg ring-4 ring-[#B27F1C]/10 dark:from-[#1e293b] dark:to-[#0a101d] dark:ring-[#F6B23B]/10">
            <brandData.outcome.icon size={36} className="text-[#B27F1C] dark:text-[#F6B23B]" strokeWidth={1.5} />
          </div>
          
          <div className="z-10 flex flex-col text-center sm:text-left">
            <span className="mb-2 text-[0.8rem] font-bold uppercase tracking-widest text-[#B27F1C] dark:text-[#F6B23B]">
              {brandData.outcome.tag}
            </span>
            <h3 className="text-2xl font-black text-gray-900 dark:text-white sm:text-3xl">
              {brandData.outcome.text}
            </h3>
          </div>
        </motion.div>

      </Container>
    </div>
  );
}