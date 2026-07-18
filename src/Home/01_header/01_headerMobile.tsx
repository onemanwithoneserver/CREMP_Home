import { navLinks } from './data';
import logo from '../../Logo/CREMP.png';
import { ArrowRight, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Mobile() {
  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full flex items-center justify-between px-4 py-4 bg-transparent absolute top-0 z-50 text-white"
    >
      <div className="flex items-center gap-2">
        <img src={logo} alt="CREMP Logo" className="h-8 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(246,178,59,0.3)]" />
        <div className="flex flex-col justify-center">
          <span className="text-lg font-bold tracking-tight text-white leading-none">CREMP</span>
          <span className="text-gray-400 text-[8px] tracking-widest uppercase mt-0.5 leading-none">An Integrated CRE Marketplace</span>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <button className="flex items-center justify-center bg-[#F6B23B] hover:bg-yellow-500 text-black p-2 rounded-lg transition-all hover:shadow-lg">
          <ArrowRight className="w-4 h-4" />
        </button>
        <button className="text-white p-2">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </motion.header>
  );
}
