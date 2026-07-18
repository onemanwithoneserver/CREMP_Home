import { useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { ArrowRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import CrempTextLogo from '../../components/CrempTextLogo';
import logo from '../../Logo/CREMP.png';
import logoLight from '../../Logo/CREMP_Light.png';

export default function Mobile() {
  const { theme, toggleTheme } = useTheme();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 30);
  });

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 z-50 flex w-full items-center justify-between px-5 py-3.5 text-[#050C17] transition-all duration-500 dark:text-white ${
        scrolled
          ? 'bg-white/85 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur-xl dark:bg-[#050C17]/90 dark:shadow-[0_1px_0_rgba(255,255,255,0.04)]'
          : 'bg-transparent'
      }`}
    >
      <motion.a
        href="/"
        aria-label="CREMP Home"
        className="flex shrink-0 items-center gap-1.5"
        whileTap={{ scale: 0.97 }}
      >
        <motion.img
          src={logo}
          alt="CREMP Logo"
          className="hidden h-10 w-auto object-contain dark:block"
          animate={{
            filter: [
              'drop-shadow(0 0 4px rgba(246,178,59,0.2))',
              'drop-shadow(0 0 10px rgba(246,178,59,0.35))',
              'drop-shadow(0 0 4px rgba(246,178,59,0.2))',
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <img
          src={logoLight}
          alt="CREMP Logo"
          className="block h-10 w-auto object-contain drop-shadow-[0_0_8px_rgba(178,127,28,0.1)] dark:hidden"
        />
        <div className="flex flex-col justify-center">
          <CrempTextLogo className="mb-[1px] h-[18px] w-auto text-[#050C17] dark:text-white" />
          <motion.span
            className="mt-0.5 text-[5px] font-medium leading-none tracking-tight text-[#B27F1C] dark:text-[#F6B23B]"
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            An Integrated CRE Marketplace
          </motion.span>
        </div>
      </motion.a>

      <div className="flex items-center gap-3">
        <motion.button
          onClick={toggleTheme}
          whileTap={{ scale: 0.88, rotate: 20 }}
          className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 ${
            theme === 'dark'
              ? 'border-amber-500/20 bg-amber-500/10 text-amber-400 active:bg-amber-500/25'
              : 'border-gray-200 bg-white text-[#050C17] active:bg-gray-100'
          }`}
          aria-label="Toggle Theme"
        >
          <motion.div
            key={theme}
            initial={{ rotate: -90, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4" strokeWidth={2} />
            ) : (
              <Moon className="h-4 w-4" strokeWidth={2} />
            )}
          </motion.div>
        </motion.button>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.35 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex items-center justify-center gap-1.5 overflow-hidden rounded-lg bg-[#F6B23B] px-3.5 py-1.5 text-xs font-semibold text-black transition-all active:shadow-lg"
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 ease-out group-active:translate-x-full" />
          <span className="relative">Get Started</span>
          <ArrowRight className="relative h-3.5 w-3.5 transition-transform group-active:translate-x-0.5" />
        </motion.button>
      </div>
    </motion.header>
  );
}