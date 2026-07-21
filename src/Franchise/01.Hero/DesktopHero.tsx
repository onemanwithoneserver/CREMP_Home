import { motion, type Variants } from 'framer-motion';
import { Container } from '../../components/layout';
import { heroData } from './data';
import heroImageLight from './Hero_Section_light.png';
import heroImageDark from './Hero_Section_dark.png';

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 400, damping: 30 } 
  },
};

const floatAnimation: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
  animate: {
    y: [-12, 12, -12],
    rotate: [-1, 1, -1],
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const pulseGlow: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.4, 0.7, 0.4],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
  }
};

export default function DesktopHero() {
  const Btn1Icon = heroData.buttons[0].icon;
  const Btn2Icon = heroData.buttons[1].icon;

  return (
    <div className="relative w-full overflow-hidden rounded-[8px] bg-gray-50 pt-24 pb-8 shadow-2xl transition-colors duration-700 dark:bg-[#030712] dark:shadow-none">
      <motion.div 
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute -left-[10%] top-[-20%] h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[120px] dark:bg-[#D4AF37]/15" 
      />
      <motion.div 
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute right-[-5%] top-[20%] h-[600px] w-[600px] rounded-full bg-[#D4AF37]/10 blur-[150px] dark:bg-[#D4AF37]/10" 
      />

      <Container className="relative z-10">
        <div className="flex items-center justify-between gap-6">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex w-[50%] flex-col"
          >
            <motion.div variants={fadeInUp}>
              <span className="mb-4 flex w-fit items-center gap-2 rounded-[2px] border border-[#D4AF37]/20 bg-white/60 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] shadow-sm backdrop-blur-xl dark:border-[#D4AF37]/20 dark:bg-[#D4AF37]/5 dark:text-[#D4AF37]">
                {heroData.tag}
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="mb-4 text-[3.25rem] font-black leading-[1.05] tracking-tight text-gray-900 dark:text-white xl:text-[3.75rem]"
            >
              Take Control of <br />
              Your Franchise <br />
              <span className="animate-pulse bg-gradient-to-r from-[#D4AF37] to-[#b38728] bg-clip-text text-transparent dark:from-[#D4AF37] dark:to-[#f9d08b]">
                {heroData.titleHighlight}
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="mb-8 max-w-lg text-[1rem] leading-relaxed text-gray-600 dark:text-gray-400"
            >
              Powered by India&apos;s <span className="font-bold text-gray-900 dark:text-white">Integrated Commercial Real Estate, Franchise & Retail Business Opportunities Platform</span>, CREMP helps you build your brand, reach investors in your preferred micro markets, define your ideal franchise partner and discover expansion-ready locations—all through one connected ecosystem.
            </motion.p>

            <motion.div variants={fadeInUp} className="mb-10 flex items-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center gap-3 rounded-[4px] bg-gradient-to-r from-[#D4AF37] to-[#b38728] px-6 py-3 text-[0.95rem] font-bold text-white shadow-[0_8px_20px_rgba(178,127,28,0.2)] transition-all hover:shadow-[0_0_30px_rgba(178,127,28,0.4)] dark:from-[#D4AF37] dark:to-[#b38728] dark:text-[#030712] dark:shadow-[0_8px_20px_rgba(246,178,59,0.2)] dark:hover:shadow-[0_0_30px_rgba(246,178,59,0.4)]"
              >
                <Btn1Icon size={18} strokeWidth={2.5} className="transition-transform group-hover:rotate-12 group-hover:scale-110" />
                {heroData.buttons[0].text}
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center gap-3 rounded-[4px] border border-gray-200 bg-white/80 px-6 py-3 text-[0.95rem] font-bold text-gray-900 shadow-sm backdrop-blur-md transition-all hover:border-[#D4AF37]/50 hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900/50 dark:text-white dark:hover:border-[#D4AF37]/50 dark:hover:bg-gray-800/80"
              >
                <Btn2Icon size={18} strokeWidth={2.5} className="text-gray-500 transition-transform group-hover:-rotate-12 group-hover:scale-110 dark:text-gray-400 group-hover:dark:text-[#D4AF37]" />
                {heroData.buttons[1].text}
              </motion.button>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-4">
              {heroData.features.map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ y: -5 }}
                  className="group flex cursor-pointer items-center gap-3 rounded-[4px] p-2 transition-colors hover:bg-white/50 dark:hover:bg-gray-800/50"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-100 bg-white text-[#D4AF37] shadow-sm transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-110 group-hover:shadow-md dark:border-gray-800 dark:bg-[#0a101d] dark:text-[#D4AF37] transition-all duration-300 hover:shadow-lg hover:border-[#D4AF37]/50">
                    <feature.icon size={18} strokeWidth={2} />
                  </div>
                  <span className="text-[0.8rem] font-bold leading-snug text-gray-700 transition-colors group-hover:text-[#D4AF37] dark:text-gray-200 dark:group-hover:text-[#D4AF37]">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <div className="relative flex h-[550px] w-[50%] items-center justify-center">
            <motion.div 
              variants={floatAnimation}
              initial="hidden"
              animate={["show", "animate"]}
              className="relative z-10 flex h-full w-full items-center justify-center"
              style={{ 
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 45%, transparent 80%)', 
                maskImage: 'radial-gradient(ellipse at center, black 45%, transparent 80%)' 
              }}
            >
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                src={heroImageLight} 
                alt="Franchise Ecosystem Map" 
                className="block h-auto w-[105%] max-w-none object-contain drop-shadow-[0_20px_40px_rgba(178,127,28,0.15)] dark:hidden" 
              />
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                src={heroImageDark} 
                alt="Franchise Ecosystem Map" 
                className="hidden h-auto w-[105%] max-w-none object-contain drop-shadow-[0_20px_40px_rgba(246,178,59,0.2)] dark:block" 
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
}