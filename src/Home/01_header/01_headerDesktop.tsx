import { navLinks } from './data';
import CrempTextLogo from '../../components/CrempTextLogo';
import logo from '../../Logo/CREMP.png';
import logoLight from '../../Logo/CREMP_Light.png';
import { ArrowRight, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../ThemeContext';

export default function Desktop() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="absolute top-0 z-50 flex w-full items-center justify-center bg-gradient-to-b from-gray-200/60 to-transparent dark:from-black/60 px-6 py-4 text-[#050C17] dark:text-white lg:px-12"
    >
      <div className="flex w-full max-w-7xl items-center justify-between">
        <a href="/" className="flex items-center gap-3 transition-opacity hover:opacity-90">
        <img 
          src={logo} 
          alt="CREMP Logo" 
          className="hidden dark:block h-12 w-auto object-contain drop-shadow-[0_0_8px_rgba(246,178,59,0.3)]" 
        />
        <img 
          src={logoLight} 
          alt="CREMP Logo" 
          className="block dark:hidden h-12 w-auto object-contain drop-shadow-[0_0_8px_rgba(178,127,28,0.1)]" 
        />
        <div className="flex flex-col justify-center">
          <CrempTextLogo className="h-5 sm:h-6 w-auto text-[#050C17] dark:text-white mb-1" />
          <span className="mt-0.5 text-[12.5px] font-medium leading-none text-[#B27F1C] dark:text-[#F6B23B]">
            An Integrated CRE Marketplace
          </span>
        </div>
      </a>
      
      <nav className="hidden items-center gap-8 md:flex">
        {navLinks?.map((link, index) => (
          <a 
            key={index} 
            href={link.href || '#'}
            className="text-sm font-medium text-gray-800 dark:text-gray-200 transition-colors hover:text-[#B27F1C] dark:hover:text-[#F6B23B]"
          >
            {link.title || link.name}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-6">
        <button 
          onClick={toggleTheme}
          className={`flex items-center justify-center h-10 w-10 rounded-full transition-all duration-300 border ${
            theme === 'dark' 
              ? 'border-amber-500/20 bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)]' 
              : 'border-gray-200 bg-white text-[#050C17] hover:bg-gray-100 hover:shadow-[0_4px_10px_rgba(0,0,0,0.05)]'
          }`}
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? <Sun className="h-5 w-5" strokeWidth={2} /> : <Moon className="h-5 w-5" strokeWidth={2} />}
        </button>

        <button className="group flex items-center gap-2 rounded-lg bg-[#F6B23B] px-6 py-2.5 text-sm font-medium text-black transition-all hover:bg-[#ffc15e] hover:shadow-[0_4px_14px_rgba(246,178,59,0.4)]">
          Get Started
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
      </div>
    </motion.header>
  );
}