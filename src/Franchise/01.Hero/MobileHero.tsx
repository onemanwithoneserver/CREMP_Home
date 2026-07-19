import { motion } from 'framer-motion';
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
    y: [-6, 6, -6],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export default function MobileHero() {
  const Btn1Icon = heroData.buttons[0].icon;
  const Btn2Icon = heroData.buttons[1].icon;

  return (
    <div className="relative w-full overflow-hidden bg-gray-50 px-5 pb-16 pt-24 transition-colors duration-700 dark:bg-[#030712] sm:px-8 sm:pt-28">
      <div className="pointer-events-none absolute -left-[20%] top-[-10%] h-[300px] w-[300px] rounded-full bg-[#B27F1C]/10 blur-[90px] dark:bg-[#F6B23B]/15" />
      <div className="pointer-events-none absolute right-[-20%] top-[40%] h-[350px] w-[350px] rounded-full bg-[#B27F1C]/5 blur-[100px] dark:bg-[#F6B23B]/10" />

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex max-w-md flex-col"
      >
        <motion.div variants={fadeInUp}>
          <span className="mb-6 flex w-fit items-center gap-2 rounded-full border border-[#B27F1C]/20 bg-white/60 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#B27F1C] shadow-sm backdrop-blur-xl dark:border-[#F6B23B]/20 dark:bg-[#F6B23B]/5 dark:text-[#F6B23B]">
            {heroData.tag}
          </span>
        </motion.div>
        
        <motion.h1 
          variants={fadeInUp}
          className="mb-5 text-[2.5rem] font-black leading-[1.1] tracking-tight text-gray-900 dark:text-white"
        >
          Take Control of <br />
          Your Franchise <br />
          <span className="bg-gradient-to-r from-[#B27F1C] to-[#d49924] bg-clip-text text-transparent dark:from-[#F6B23B] dark:to-[#f9d08b]">
            {heroData.titleHighlight}
          </span>
        </motion.h1>
        
        <motion.p 
          variants={fadeInUp}
          className="mb-8 text-[0.95rem] leading-relaxed text-gray-600 dark:text-gray-400"
        >
          Powered by India&apos;s <span className="font-bold text-gray-900 dark:text-white">Integrated Commercial Real Estate, Franchise & Retail Business Opportunities Platform</span>, CREMP helps you build your brand, reach investors in your preferred micro markets, define your ideal franchise partner and discover expansion-ready locations.
        </motion.p>

        <motion.div variants={fadeInUp} className="mb-12 flex w-full flex-row items-stretch gap-3">
          <button className="group flex flex-1 flex-col items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-[#B27F1C] to-[#d49924] p-4 text-center shadow-[0_8px_20px_rgba(178,127,28,0.2)] transition-all active:scale-[0.96] dark:from-[#F6B23B] dark:to-[#d49924] dark:shadow-[0_8px_20px_rgba(246,178,59,0.2)]">
            <Btn1Icon size={20} strokeWidth={2.5} className="text-white transition-transform group-active:scale-110 dark:text-[#030712]" />
            <span className="text-[0.8rem] font-bold leading-snug text-white dark:text-[#030712]">
              {heroData.buttons[0].text}
            </span>
          </button>
          
          <button className="group flex flex-1 flex-col items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white/80 p-4 text-center shadow-sm backdrop-blur-md transition-all active:scale-[0.96] dark:border-gray-800 dark:bg-[#0a101d]/80">
            <Btn2Icon size={20} strokeWidth={2.5} className="text-[#B27F1C] transition-transform group-active:scale-110 dark:text-[#F6B23B]" />
            <span className="text-[0.8rem] font-bold leading-snug text-gray-900 dark:text-white">
              {heroData.buttons[1].text}
            </span>
          </button>
        </motion.div>

        <div className="relative mb-12 flex h-[340px] w-full items-center justify-center overflow-visible">
          <motion.div 
            variants={floatAnimation}
            initial="hidden"
            animate={["show", "animate"]}
            className="relative flex h-full w-[115%] items-center justify-center"
            style={{ 
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 45%, transparent 80%)', 
              maskImage: 'radial-gradient(ellipse at center, black 45%, transparent 80%)' 
            }}
          >
            <img 
              src={heroImageLight} 
              alt="Franchise Ecosystem Map" 
              className="block h-auto w-full max-w-none object-contain drop-shadow-[0_15px_30px_rgba(178,127,28,0.15)] dark:hidden" 
            />
            <img 
              src={heroImageDark} 
              alt="Franchise Ecosystem Map" 
              className="hidden h-auto w-full max-w-none object-contain drop-shadow-[0_15px_30px_rgba(246,178,59,0.2)] dark:block" 
            />
          </motion.div>
        </div>

        <motion.div 
          variants={fadeInUp}
          className="flex flex-col gap-3.5"
        >
          {heroData.features.map((feature, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white/60 p-4 shadow-sm backdrop-blur-md dark:border-gray-800/80 dark:bg-[#0a101d]/60"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-100 bg-white text-[#B27F1C] shadow-sm dark:border-gray-800 dark:bg-[#030712] dark:text-[#F6B23B]">
                <feature.icon size={20} strokeWidth={2} />
              </div>
              <span className="text-[0.95rem] font-bold leading-snug text-gray-800 dark:text-gray-100">
                {feature.text}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}