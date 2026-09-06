import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Mail, Phone, ChevronDown } from "lucide-react";
import logoLight from "../../../Logo/CREMP_Light.png";
import CrempTextLogo from "../../CrempTextLogo";
import { brandLinks, quickLinks, resources, legalLinks } from "./data";
export default function FooterMobile() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };
  return (
    <footer className="bg-[#0a1128] border-t border-white/5 pt-8 pb-6 overflow-hidden relative font-sans">
      <div className="pointer-events-none absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-[#d4af37]/10 to-transparent blur-3xl opacity-50" />
      <div className="px-6 relative z-10 flex flex-col gap-6">
        <div className="flex flex-col gap-3 items-center text-center">
          <a href="#" className="flex items-center group w-fit">
            <img src={logoLight} alt="CREMP" className="h-8 w-auto" />
            <CrempTextLogo className="h-3 w-auto text-white ml-2 opacity-90" />
          </a>
          <p className="text-[11px] text-gray-400 leading-relaxed max-w-[280px]">
            The premier Commercial Real Estate Marketplace. Discover, invest, and grow with confidence.
          </p>
          <div className="flex items-center gap-3 mt-1">
            {brandLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <a
                  key={i}
                  href={link.href}
                  className={`w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all shadow-sm ${link.hoverBg} ${link.hoverColor} ${link.hoverBorder}`}
                >
                  <Icon sx={{ fontSize: 16 }} />
                </a>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col mt-2">
        </div>
        <div className="flex flex-col items-center gap-4 mt-2 pt-6 border-t border-white/10 text-center">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[10px] font-semibold text-gray-500">
            {legalLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-[#d4af37] transition-colors uppercase tracking-wider underline underline-offset-4">
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-gray-500 text-[10px] font-medium tracking-wide">
            © {new Date().getFullYear()} CREMP Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
interface AccordionItemProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
}
function AccordionItem({ title, isOpen, onToggle, children }: AccordionItemProps) {
  return (
    <div className="border-b border-white/10 overflow-hidden">
      <button
        className="w-full py-3 flex items-center justify-between text-left focus:outline-none group"
        onClick={onToggle}
      >
        <span className={`text-[12px] font-bold uppercase tracking-widest transition-colors ${isOpen ? "text-[#d4af37]" : "text-white group-hover:text-gray-200"}`}>
          {title}
        </span>
        <ChevronDown size={14} strokeWidth={2.5} className={`text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#d4af37]" : "group-hover:text-gray-300"}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="pb-3">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
