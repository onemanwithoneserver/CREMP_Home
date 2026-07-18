
import logo from '../../Logo/CREMP.png';
import logoLight from '../../Logo/CREMP_Light.png';
import { ArrowRight, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../ThemeContext';
import CrempTextLogo from '../../components/CrempTextLogo';

export default function Mobile() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full flex items-center justify-between px-5 py-4 bg-transparent absolute top-0 z-50 text-[#050C17] dark:text-white"
    >
      <div className="flex items-center gap-1.5 shrink-0">
        <img src={logo} alt="CREMP Logo" className="hidden dark:block h-10 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(246,178,59,0.3)]" />
        <img src={logoLight} alt="CREMP Logo" className="block dark:hidden h-10 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(178,127,28,0.1)]" />
        <div className="flex flex-col justify-center">
          <CrempTextLogo className="h-[18px] w-auto text-[#050C17] dark:text-white mb-[1px]" />
          <span className="text-[#B27F1C] dark:text-[#F6B23B] text-[5px] font-medium mt-0.5 leading-none tracking-tight">An Integrated CRE Marketplace</span>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <button 
          onClick={toggleTheme}
          className={`flex items-center justify-center h-9 w-9 rounded-full transition-all duration-300 border ${
            theme === 'dark' 
              ? 'border-amber-500/20 bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)]' 
              : 'border-gray-200 bg-white text-[#050C17] hover:bg-gray-100 hover:shadow-[0_4px_10px_rgba(0,0,0,0.05)]'
          }`}
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? <Sun className="h-4 w-4" strokeWidth={2} /> : <Moon className="h-4 w-4" strokeWidth={2} />}
        </button>

        <button className="flex items-center justify-center gap-1.5 bg-[#F6B23B] hover:bg-yellow-500 text-black px-3 py-1.5 rounded-lg transition-all hover:shadow-lg text-xs font-semibold">
          Get Started
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.header>
  );
}
