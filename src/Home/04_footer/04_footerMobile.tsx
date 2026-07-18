import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { footerLinks, socialLinks } from './data';
import logo from '../../Logo/CREMP.png';

export default function Mobile() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full font-sans flex flex-col">
      
      {/* CTA Section */}
      <div className="w-full bg-gradient-to-b from-[#050C17] to-[#08101E] py-16 px-6 flex flex-col items-center justify-center relative overflow-hidden border-t border-gray-800/50">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-[#F6B23B]/5 blur-[80px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center text-center w-full">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-4 tracking-tight"
          >
            Join India's Real Estate Ecosystem
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-300 text-sm mb-8 leading-relaxed"
          >
            Learn from experts. Connect with professionals. Discover opportunities. Grow with the ecosystem.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col w-full gap-4"
          >
            <button className="flex items-center justify-center gap-2 bg-[#F6B23B] text-black px-6 py-3.5 rounded-lg font-bold transition-all shadow-[0_0_15px_rgba(246,178,59,0.3)] w-full">
              Join CREMP Today
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="flex items-center justify-center gap-2 bg-[#111A2C] border border-gray-700 text-white px-6 py-3.5 rounded-lg font-semibold transition-all w-full">
              Create Your Profile
            </button>
          </motion.div>
        </div>
      </div>

      {/* Footer Base */}
      <div className="w-full bg-[#050C17] border-t border-gray-800 py-8 px-6 flex flex-col items-center text-center gap-7">
        
        {/* Logo */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            <img src={logo} alt="CREMP Logo" className="h-7 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(246,178,59,0.3)]" />
            <div className="flex flex-col justify-center text-left">
              <span className="text-base font-bold tracking-tight text-white leading-none">CREMP</span>
              <span className="text-gray-400 text-[8px] tracking-widest uppercase mt-0.5 leading-none">An Integrated CRE Marketplace</span>
            </div>
          </div>
          <span className="text-gray-500 text-xs mt-1">
            © {currentYear} CREMP. All rights reserved.
          </span>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-4 w-full max-w-[280px]">
          {footerLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="text-gray-400 hover:text-white text-xs font-medium transition-colors border-b border-dotted border-gray-600 hover:border-[#F6B23B] pb-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex items-center gap-4 mt-1">
          {socialLinks.map((social) => (
            <a 
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="w-10 h-10 rounded-lg bg-[#0C1525] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-[#F6B23B] transition-colors"
            >
              <social.icon className="w-4 h-4" />
            </a>
          ))}
        </div>

      </div>

    </div>
  );
}
