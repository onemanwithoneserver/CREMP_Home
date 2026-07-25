
import { footerLinks, socialLinks} from "./data";
import CrempTextLogo from "../../components/CrempTextLogo";

export default function Mobile(_props: { hideCTA?: boolean}) {
 const currentYear = new Date().getFullYear();

 return (
 <div className="w-full flex flex-col">
 {/*
 {!hideCTA && (
 <div className="w-full bg-gradient-to-b from-gray-50 to-gray-200 dark:from-[#0a1128] dark:to-[#0a0f25] py-16 px-6 flex flex-col items-center justify-center relative overflow-hidden border-t border-gray-200 dark:border-gray-800/50">
 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-[#D4AF37]/10 dark:bg-[#D4AF37]/5 blur-[80px] rounded-full pointer-events-none"/>

 <div className="relative z-10 flex flex-col items-center text-center w-full">
 <motion.h2
 initial={{ opacity: 0, y: 20}}
 whileInView={{ opacity: 1, y: 0}}
 viewport={{ once: true}}
 className="text-3xl font-bold text-[#0a1128] dark:text-white mb-4 tracking-tight"
 >
 Join Telangana's Real Estate Ecosystem
 </motion.h2>

 <motion.p
 initial={{ opacity: 0, y: 20}}
 whileInView={{ opacity: 1, y: 0}}
 transition={{ delay: 0.1}}
 viewport={{ once: true}}
 className="text-gray-600 dark:text-gray-300 text-sm mb-8 leading-relaxed"
 >
 Learn from experts. Connect with professionals. Discover
 opportunities. Grow with the ecosystem.
 </motion.p>

 <motion.div
 initial={{ opacity: 0, y: 20}}
 whileInView={{ opacity: 1, y: 0}}
 transition={{ delay: 0.2}}
 viewport={{ once: true}}
 className="flex flex-col w-full gap-4"
 >
 <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] text-black px-6 py-3.5 rounded-lg font-bold transition-all shadow-[0_0_15px_rgba(246,178,59,0.3)] w-full active:scale-95 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(251,191,36,0.25)] active:scale-95">
 Join CREMP Today
 <ArrowRight className="w-5 h-5"/>
 </button>
 <button className="flex items-center justify-center gap-2 bg-white dark:bg-[#121c33] border border-gray-300 dark:border-gray-700 text-[#0a1128] dark:text-white px-6 py-3.5 rounded-lg font-semibold transition-all w-full active:scale-95">
 Create Your Profile
 </button>
 </motion.div>
 </div>
 </div>
 )}
 */}

 <div className="w-full bg-white dark:bg-[#0a1128] border-t border-gray-200 dark:border-gray-800 py-8 px-6 flex flex-col items-center text-center gap-7">
 <div className="flex flex-col items-center gap-3">
 <div className="flex items-center">
 <CrempTextLogo className="h-[16px] w-auto text-[#0a1128] dark:text-white"/>
 </div>
 <span className="text-gray-500 text-xs mt-1">
 © {currentYear} CREMP. All rights reserved.
 </span>
 </div>

 <nav className="flex flex-wrap justify-center gap-x-6 gap-y-4 w-full max-w-[280px]">
 {footerLinks.map((link) => (
 <a
 key={link.label}
 href={link.href}
 className="text-gray-500 dark:text-gray-400 hover:text-[#0a1128] dark:hover:text-white text-xs font-medium transition-colors border-b border-dotted border-gray-400 dark:border-gray-600 hover:border-[#D4AF37] dark:hover:border-[#D4AF37] pb-1"
 >
 {link.label}
 </a>
 ))}
 </nav>

 <div className="flex items-center gap-4 mt-1">
 {socialLinks.map((social) => (
 <a
 key={social.label}
 href={social.href}
 aria-label={social.label}
 className={`w-10 h-10 rounded-lg bg-gray-100 dark:bg-[#121c33] border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 transition-all duration-300 active:scale-95 ${social.hoverClass || "hover:border-[#D4AF37]/50 dark:hover:border-[#D4AF37]/50 hover:bg-gray-200 dark:hover:bg-[#121c33] hover:text-[#D4AF37] dark:hover:text-[#D4AF37]"}`}
 >
 <social.icon className="w-4 h-4"/>
 </a>
 ))}
 </div>
 </div>
 </div>
 );
}
