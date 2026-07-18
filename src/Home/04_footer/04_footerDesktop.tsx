import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { footerLinks, socialLinks } from './data';
import logo from '../../Logo/CREMP.png';
import logoLight from '../../Logo/CREMP_Light.png';
import CrempTextLogo from '../../components/CrempTextLogo';

export default function Desktop() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full font-sans flex flex-col">
      
      {/* CTA Section */}
      <div className="w-full bg-gradient-to-b from-gray-50 to-gray-200 dark:from-[#050C17] dark:to-[#08101E] py-24 px-8 lg:px-16 flex flex-col items-center justify-center relative overflow-hidden border-t border-gray-200 dark:border-gray-800/50">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#B27F1C]/10 dark:bg-[#F6B23B]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#050C17] dark:text-white mb-6 tracking-tight"
          >
            Join India's Real Estate<br />Ecosystem
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mb-10 max-w-3xl leading-relaxed"
          >
            Learn from experts. Connect with professionals. Discover opportunities. Grow with the ecosystem.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <button className="flex items-center justify-center gap-2 bg-[#F6B23B] hover:bg-[#ffc15e] text-black px-8 py-3.5 rounded-lg font-bold transition-all hover:shadow-[0_0_25px_rgba(246,178,59,0.4)] hover:scale-105 active:scale-95 w-full sm:w-auto">
              Join CREMP Today
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="flex items-center justify-center gap-2 bg-white dark:bg-[#111A2C] hover:bg-gray-50 dark:hover:bg-[#1A253A] border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 text-[#050C17] dark:text-white px-8 py-3.5 rounded-lg font-semibold transition-all hover:scale-105 active:scale-95 w-full sm:w-auto">
              Create Your Profile
            </button>
          </motion.div>
        </div>
      </div>

      {/* Footer Base */}
      <div className="w-full bg-white dark:bg-[#050C17] border-t border-gray-200 dark:border-gray-800 py-10 px-8 lg:px-16 flex flex-col items-center">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo & Copyright */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="CREMP Logo" className="hidden dark:block h-10 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(246,178,59,0.3)]" />
              <img src={logoLight} alt="CREMP Logo" className="block dark:hidden h-10 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(178,127,28,0.1)]" />
              <div className="flex flex-col justify-center">
                <CrempTextLogo className="h-5 w-auto text-[#050C17] dark:text-white mb-[2px]" />
                <span className="text-[#B27F1C] dark:text-[#F6B23B] text-[11px] font-medium mt-0.5 leading-none">An Integrated CRE Marketplace</span>
              </div>
            </div>
            <div className="h-8 w-px bg-gray-300 dark:bg-gray-800 hidden md:block" />
            <span className="text-gray-500 dark:text-gray-500 text-sm">
              © {currentYear} CREMP. All rights reserved.
            </span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8">
            {footerLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-gray-500 dark:text-gray-400 hover:text-[#050C17] dark:hover:text-white text-sm font-medium transition-colors border-b border-dotted border-gray-400 dark:border-gray-600 hover:border-[#B27F1C] dark:hover:border-[#F6B23B] pb-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a 
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className={`w-10 h-10 rounded-lg bg-gray-100 dark:bg-[#0C1525] border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 transition-all duration-300 hover:scale-110 ${social.hoverClass || 'hover:border-[#B27F1C]/50 dark:hover:border-[#F6B23B]/50 hover:bg-gray-200 dark:hover:bg-[#111A2C] hover:text-[#B27F1C] dark:hover:text-[#F6B23B]'}`}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}
