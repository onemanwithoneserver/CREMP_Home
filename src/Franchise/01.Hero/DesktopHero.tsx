import { motion } from 'framer-motion';
import { Container } from '../../components/layout';
import { heroData } from './data';
import heroImageLight from './Hero_Section_light.png';
import heroImageDark from './Hero_Section_dark.png';

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
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
  animate: {
    y: [-8, 8, -8],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export default function DesktopHero() {
  const Btn1Icon = heroData.buttons[0].icon;
  const Btn2Icon = heroData.buttons[1].icon;

  return (
    <div className="relative w-full overflow-hidden bg-gray-50 py-16 transition-colors duration-700 dark:bg-[#030712]">
      <div className="pointer-events-none absolute -left-[10%] top-[-20%] h-[500px] w-[500px] rounded-full bg-[#B27F1C]/5 blur-[120px] dark:bg-[#F6B23B]/10" />
      <div className="pointer-events-none absolute right-[-5%] top-[20%] h-[600px] w-[600px] rounded-full bg-[#B27F1C]/5 blur-[150px] dark:bg-[#F6B23B]/5" />

      <Container className="relative z-10">
        <div className="flex items-center justify-between gap-6">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex w-[50%] flex-col"
          >
            <motion.div variants={fadeInUp}>
              <span className="mb-4 flex w-fit items-center gap-2 rounded-full border border-[#B27F1C]/20 bg-white/60 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#B27F1C] shadow-sm backdrop-blur-xl dark:border-[#F6B23B]/20 dark:bg-[#F6B23B]/5 dark:text-[#F6B23B]">
                {heroData.tag}
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="mb-4 text-[3.25rem] font-black leading-[1.05] tracking-tight text-gray-900 dark:text-white xl:text-[3.75rem]"
            >
              Take Control of <br />
              Your Franchise <br />
              <span className="bg-gradient-to-r from-[#B27F1C] to-[#d49924] bg-clip-text text-transparent dark:from-[#F6B23B] dark:to-[#f9d08b]">
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
              <button className="group flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#B27F1C] to-[#d49924] px-6 py-3 text-[0.95rem] font-bold text-white shadow-[0_8px_20px_rgba(178,127,28,0.2)] transition-all hover:scale-[1.02] hover:shadow-[0_10px_25px_rgba(178,127,28,0.3)] active:scale-95 dark:from-[#F6B23B] dark:to-[#d49924] dark:text-[#030712] dark:shadow-[0_8px_20px_rgba(246,178,59,0.2)] dark:hover:shadow-[0_10px_25px_rgba(246,178,59,0.3)]">
                <Btn1Icon size={18} strokeWidth={2.5} className="transition-transform group-hover:scale-110" />
                {heroData.buttons[0].text}
              </button>
              
              <button className="group flex items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white/80 px-6 py-3 text-[0.95rem] font-bold text-gray-900 shadow-sm backdrop-blur-md transition-all hover:border-gray-300 hover:bg-gray-50 active:scale-95 dark:border-gray-800 dark:bg-gray-900/50 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-800/80">
                <Btn2Icon size={18} strokeWidth={2.5} className="text-gray-500 transition-transform group-hover:scale-110 dark:text-gray-400" />
                {heroData.buttons[1].text}
              </button>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-4">
              {heroData.features.map((feature, idx) => (
                <div key={idx} className="group flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-100 bg-white text-[#B27F1C] shadow-sm transition-transform group-hover:scale-110 dark:border-gray-800 dark:bg-[#0a101d] dark:text-[#F6B23B]">
                    <feature.icon size={18} strokeWidth={2} />
                  </div>
                  <span className="text-[0.8rem] font-bold leading-snug text-gray-700 dark:text-gray-200">
                    {feature.text}
                  </span>
                </div>
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
              <img 
                src={heroImageLight} 
                alt="Franchise Ecosystem Map" 
                className="block h-auto w-[105%] max-w-none object-contain drop-shadow-[0_20px_40px_rgba(178,127,28,0.1)] dark:hidden" 
              />
              <img 
                src={heroImageDark} 
                alt="Franchise Ecosystem Map" 
                className="hidden h-auto w-[105%] max-w-none object-contain drop-shadow-[0_20px_40px_rgba(246,178,59,0.15)] dark:block" 
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
}