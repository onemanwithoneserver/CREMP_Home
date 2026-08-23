import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogIn, UserPlus, ChevronDown, ChevronRight, X } from "lucide-react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from "../../../Logo/CREMP.png";
import logoLight from "../../../Logo/CREMP_Light.png";
import { navLinks, cities } from "./data";

interface HeaderMobileProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  currentPage: string;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
}

export default function HeaderMobile({
  mobileMenuOpen,
  setMobileMenuOpen,
  currentPage,
  selectedCity,
  setSelectedCity,
}: HeaderMobileProps) {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  if (!mobileMenuOpen) return null;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] 2xl:hidden"
        onClick={() => setMobileMenuOpen(false)}
      />
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[360px] bg-white dark:bg-[#0b1b42] shadow-2xl z-[70] 2xl:hidden flex flex-col overflow-y-auto"
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-white/10">
          <img src={logo} alt="CREMP" className="h-10 w-auto dark:block hidden" />
          <img src={logoLight} alt="CREMP" className="h-10 w-auto dark:hidden block" />
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-[#121c33] text-gray-600 dark:text-gray-300 hover:text-[#d4af37] transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 pb-2 grid grid-cols-2 gap-3">
          <a
            href="#"
            className="flex items-center justify-center gap-2 py-3 rounded-lg bg-[#0b1b42] dark:bg-[#d4af37] text-white dark:text-[#0a1128] font-bold text-sm shadow-md"
          >
            <LogIn size={16} /> Login
          </a>
          <a
            href="#"
            className="flex items-center justify-center gap-2 py-3 rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#121c33] text-[#0a1128] dark:text-white font-bold text-sm"
          >
            <UserPlus size={16} className="text-[#d4af37]" /> Register
          </a>
        </div>

        <div className="px-6 py-4">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Location</p>
          <div className="relative">
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full appearance-none bg-gray-50 dark:bg-[#121c33] border border-gray-200 dark:border-white/10 rounded-lg py-3 px-4 text-sm font-semibold text-[#0a1128] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50"
            >
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
          </div>
        </div>

        <div className="flex-1 px-4 py-2">
          <p className="px-2 text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Menu</p>
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="flex flex-col">
                <button
                  type="button"
                  onClick={() => {
                    if (link.subItems) {
                      setOpenSubMenu(openSubMenu === link.label ? null : link.label);
                    } else if (link.href) {
                      window.location.href = link.href;
                      setMobileMenuOpen(false);
                    }
                  }}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-lg text-sm font-semibold transition-all ${
                    currentPage === link.href || openSubMenu === link.label
                      ? "bg-gradient-to-r from-[#d4af37]/10 to-transparent text-[#d4af37] border-l-2 border-[#d4af37]"
                      : "text-[#0a1128] dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 border-l-2 border-transparent"
                  }`}
                >
                  {link.label}
                  {link.subItems ? (
                    <ChevronDown size={16} className={`transition-transform duration-300 ${openSubMenu === link.label ? "rotate-180 text-[#d4af37]" : "text-gray-400"}`} />
                  ) : (
                    <ChevronRight size={16} className="text-gray-300 dark:text-gray-600" />
                  )}
                </button>
                
                <AnimatePresence>
                  {link.subItems && openSubMenu === link.label && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-1 pl-4 py-1 pr-2">
                        {link.subItems.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-2.5 rounded-lg text-[13px] font-semibold text-gray-600 dark:text-gray-400 hover:text-[#d4af37] dark:hover:text-[#d4af37] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>
        </div>

        <div className="p-6 border-t border-gray-100 dark:border-white/10 flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-gray-100 dark:bg-[#121c33] flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-[#d4af37] hover:text-white dark:hover:bg-[#d4af37] dark:hover:text-white transition-all duration-300 shadow-sm"
              >
                <Icon sx={{ fontSize: 18 }} />
              </a>
            ))}
          </div>
          <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
            © {new Date().getFullYear()} CREMP Group
          </p>
        </div>
      </motion.div>
    </>
  );
}
