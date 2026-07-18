import { navLinks } from './data';
import logo from '../../Logo/CREMP.png';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Desktop() {
  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="absolute top-0 z-50 flex w-full items-center justify-between bg-gradient-to-b from-black/60 to-transparent px-8 py-4 text-white"
    >
      <a href="/" className="flex items-center gap-3 transition-opacity hover:opacity-90">
        <img 
          src={logo} 
          alt="CREMP Logo" 
          className="h-10 w-auto object-contain drop-shadow-[0_0_8px_rgba(246,178,59,0.3)]" 
        />
        <div className="flex flex-col justify-center">
          <span className="text-xl font-bold leading-none tracking-tight text-white">
            CREMP
          </span>
          <span className="mt-1 text-[10px] leading-none tracking-widest text-gray-400 uppercase">
            An Integrated CRE Marketplace
          </span>
        </div>
      </a>
      
      <nav className="hidden items-center gap-8 md:flex">
        {navLinks?.map((link, index) => (
          <a 
            key={index} 
            href={link.href || '#'}
            className="text-sm font-medium text-gray-200 transition-colors hover:text-[#F6B23B]"
          >
            {link.title || link.name}
          </a>
        ))}
      </nav>

      <button className="group flex items-center gap-2 rounded-lg bg-[#F6B23B] px-6 py-2.5 text-sm font-medium text-black transition-all hover:bg-[#ffc15e] hover:shadow-[0_4px_14px_rgba(246,178,59,0.4)]">
        Get Started
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </motion.header>
  );
}