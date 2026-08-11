import { motion } from "framer-motion";
import CrempTextLogo from "../../components/CrempTextLogo";
import { footerLinks, socialLinks } from "./data";

export default function Mobile(_props: { hideCTA?: boolean }) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full flex flex-col">
      {}

      <div className="w-full bg-white dark:bg-[#17274C] border-t border-gray-200 dark:border-white/10 py-8 px-6 flex flex-col items-center text-center gap-7">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center">
            <CrempTextLogo className="h-[16px] w-auto text-[#0a1128] dark:text-white" />
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
            <motion.a
              initial={{ scale: 1, rotate: 0 }}
              animate={{ scale: 1, rotate: 0 }}
              whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.3 }}
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className={`w-10 h-10 rounded-[4px] bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 transition-colors active:scale-95 ${social.hoverClass || "hover:border-[#D4AF37]/50 dark:hover:border-[#D4AF37]/50 hover:bg-gray-200 dark:hover:bg-white/10 hover:text-[#D4AF37] dark:hover:text-[#D4AF37]"}`}
            >
              <social.icon className="w-4 h-4" />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
