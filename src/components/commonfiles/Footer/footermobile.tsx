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
    <footer className="bg-[#0a1128] border-t border-white/5 pt-12 pb-8 overflow-hidden relative font-sans">
      <div className="pointer-events-none absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-[#d4af37]/10 to-transparent blur-3xl opacity-50" />
      
      <div className="px-6 relative z-10 flex flex-col gap-10">
        <div className="flex flex-col gap-5 items-center text-center">
          <a href="#" className="flex items-center group w-fit">
            <img src={logoLight} alt="CREMP" className="h-10 w-auto" />
            <CrempTextLogo className="h-4 w-auto text-white ml-2 opacity-90" />
          </a>
          <p className="text-[13px] text-gray-400 leading-relaxed max-w-[280px]">
            The premier Commercial Real Estate Marketplace. Discover, invest, and grow with confidence.
          </p>
          <div className="flex items-center gap-4 mt-2">
            {brandLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <a
                  key={i}
                  href={link.href}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37] transition-all shadow-sm"
                >
                  <Icon sx={{ fontSize: 20 }} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col mt-4">
          <AccordionItem 
            title="Quick Links" 
            isOpen={openSection === "quick"} 
            onToggle={() => toggleSection("quick")}
          >
            <div className="flex flex-col gap-4 py-2 pl-2">
              {quickLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-[14px] text-gray-400 hover:text-[#d4af37] transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </AccordionItem>

          <AccordionItem 
            title="Resources" 
            isOpen={openSection === "resources"} 
            onToggle={() => toggleSection("resources")}
          >
            <div className="flex flex-col gap-4 py-2 pl-2">
              {resources.map((link) => (
                <a key={link.label} href={link.href} className="text-[14px] text-gray-400 hover:text-[#d4af37] transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </AccordionItem>

          <AccordionItem 
            title="Contact Us" 
            isOpen={openSection === "contact"} 
            onToggle={() => toggleSection("contact")}
          >
            <div className="flex flex-col gap-4 py-2 pl-2">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#d4af37] shrink-0 mt-0.5" />
                <p className="text-[13px] text-gray-400 leading-relaxed text-left">
                  123 Business Avenue, Suite 500<br />Mumbai, Maharashtra 400001<br />India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#d4af37] shrink-0" />
                <p className="text-[13px] text-gray-400 text-left">+91 98765 43210</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#d4af37] shrink-0" />
                <p className="text-[13px] text-gray-400 text-left">contact@cremp.com</p>
              </div>
            </div>
          </AccordionItem>
        </div>

        <div className="flex flex-col items-center gap-6 mt-4 pt-8 border-t border-white/10 text-center">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-[12px] font-semibold text-gray-500">
            {legalLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-[#d4af37] transition-colors uppercase tracking-wider">
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-gray-500 text-[11px] font-medium tracking-wide">
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
        className="w-full py-4 flex items-center justify-between text-left focus:outline-none group"
        onClick={onToggle}
      >
        <span className={`text-[14px] font-bold uppercase tracking-widest transition-colors ${isOpen ? "text-[#d4af37]" : "text-white group-hover:text-gray-200"}`}>
          {title}
        </span>
        <ChevronDown size={16} strokeWidth={2.5} className={`text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#d4af37]" : "group-hover:text-gray-300"}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="pb-5">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
