import { motion, type Variants } from 'framer-motion';
import { Container } from '../../components/layout';
import { heroData } from './data';
import heroImageLight from './Hero_Section_light.png';
import heroImageDark from './Hero_Section_dark.png';

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 400, damping: 30 } },
};

const floatAnimation: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  animate: {
    y: [-8, 8, -8],
    rotate: [-1, 1, -1],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  },
};

const pulseGlow: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.4, 0.7, 0.4],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
  }
};

export default function MobileHero() {
  const Btn1Icon = heroData.buttons[0].icon;
  const Btn2Icon = heroData.buttons[1].icon;

  return (
    <div className="relative w-full overflow-hidden rounded-[8px] bg-gray-50 py-4 shadow-2xl transition-colors duration-700 dark:bg-[#030712] dark:shadow-none sm:py-10">
      <motion.div 
        variants={pulseGlow} animate="animate"
        className="pointer-events-none absolute -left-[10%] top-[10%] h-[300px] w-[300px] rounded-full bg-[#B27F1C]/10 blur-[100px] dark:bg-[#F6B23B]/15" 
      />
      
      <Container className="relative z-10">
        <div className="mx-auto flex max-w-lg flex-col items-center gap-4 text-center">
          
          <motion.div variants={staggerContainer} initial="hidden" animate="show" className="flex w-full flex-col items-center">
            
            <motion.div variants={fadeInUp}>
              <span className="mb-3 flex items-center justify-center gap-2 rounded-[2px] border border-[#B27F1C]/20 bg-white/60 px-4 py-1.5 text-[10px] font-bold font-sans uppercase tracking-widest text-[#B27F1C] shadow-sm backdrop-blur-xl dark:border-[#F6B23B]/20 dark:bg-[#F6B23B]/5 dark:text-[#F6B23B]">
                {heroData.tag}
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="mb-4 text-[2.5rem] font-black font-sans leading-[1.1] tracking-tight text-gray-900 dark:text-white sm:text-[3rem]"
            >
              Take Control of <br /> Your Franchise <br />
              <span className="animate-pulse bg-gradient-to-r from-[#B27F1C] to-[#d49924] bg-clip-text text-transparent dark:from-[#F6B23B] dark:to-[#f9d08b]">
                {heroData.titleHighlight}
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="mx-auto mb-5 w-full max-w-[90%] px-2 text-[0.95rem] font-medium font-sans leading-relaxed text-gray-600 dark:text-gray-400">
              Powered by India&apos;s <span className="font-bold text-gray-900 dark:text-white">Integrated Commercial Real Estate, Franchise & Retail Business Opportunities Platform</span>, CREMP helps you build your brand, reach investors in your preferred micro markets, define your ideal franchise partner and discover expansion-ready locations.
            </motion.p>

            {/* Changed from row to strict column (stacked) layout */}
            <motion.div variants={fadeInUp} className="mb-6 flex w-full max-w-[280px] flex-col items-center gap-3">
              <motion.button 
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="group flex w-full items-center justify-center gap-2 rounded-[4px] bg-gradient-to-r from-[#B27F1C] to-[#d49924] px-5 py-3 text-[0.95rem] font-bold text-white shadow-[0_8px_20px_rgba(178,127,28,0.2)] transition-all dark:from-[#F6B23B] dark:to-[#d49924] dark:text-[#030712] dark:shadow-[0_8px_20px_rgba(246,178,59,0.2)]"
              >
                <Btn1Icon size={18} strokeWidth={2.5} className="shrink-0 transition-transform group-hover:rotate-12 group-hover:scale-110" />
                <span className="whitespace-nowrap">{heroData.buttons[0].text}</span>
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="group flex w-full items-center justify-center gap-2 rounded-[4px] border border-gray-200 bg-white/80 px-5 py-3 text-[0.95rem] font-bold text-gray-900 shadow-sm backdrop-blur-md transition-all dark:border-gray-800 dark:bg-gray-900/50 dark:text-white"
              >
                <Btn2Icon size={18} strokeWidth={2.5} className="shrink-0 text-gray-500 transition-transform group-hover:-rotate-12 group-hover:scale-110 dark:text-gray-400 group-hover:dark:text-[#F6B23B]" />
                <span className="whitespace-nowrap">{heroData.buttons[1].text}</span>
              </motion.button>
            </motion.div>

            <motion.div variants={fadeInUp} className="mx-auto flex w-full max-w-[340px] flex-col gap-2.5 px-4">
              {heroData.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 rounded-[4px] bg-white/50 p-2 dark:bg-gray-800/30">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-100 bg-white text-[#B27F1C] shadow-sm dark:border-gray-700 dark:bg-[#0a101d] dark:text-[#F6B23B]">
                    <feature.icon size={16} strokeWidth={2} />
                  </div>
                  <span className="text-left text-[0.8rem] font-bold leading-snug text-gray-700 dark:text-gray-300">
                    {feature.text}
                  </span>
                </div>
              ))}
            </motion.div>

          </motion.div>

          <div className="relative mt-2 flex h-auto min-h-[200px] w-full items-center justify-center sm:h-[350px]">
            <motion.div 
              variants={floatAnimation} initial="hidden" animate={["show", "animate"]}
              className="relative z-10 flex h-full w-full items-center justify-center"
              style={{ WebkitMaskImage: 'radial-gradient(ellipse at center, black 45%, transparent 80%)', maskImage: 'radial-gradient(ellipse at center, black 45%, transparent 80%)' }}
            >
              <img src={heroImageLight} alt="Franchise Ecosystem Map" className="block h-auto w-full max-w-[400px] object-contain drop-shadow-[0_20px_40px_rgba(178,127,28,0.15)] dark:hidden" />
              <img src={heroImageDark} alt="Franchise Ecosystem Map" className="hidden h-auto w-full max-w-[400px] object-contain drop-shadow-[0_20px_40px_rgba(246,178,59,0.2)] dark:block" />
            </motion.div>
          </div>

        </div>
      </Container>
    </div>
  );
}