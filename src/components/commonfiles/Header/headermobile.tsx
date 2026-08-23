import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogIn, UserPlus, Plus, Minus, X, Search, SlidersHorizontal } from "lucide-react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from "../../../Logo/CREMP.png";
import logoLight from "../../../Logo/CREMP_Light.png";
import { navLinks } from "./data";

interface HeaderMobileProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  currentPage: string;
}

export default function HeaderMobile({
  mobileMenuOpen,
  setMobileMenuOpen,
  currentPage,
}: HeaderMobileProps) {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  if (!mobileMenuOpen) return null;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-[#0a1128]/40 dark:bg-black/60 backdrop-blur-md z-[60] xl:hidden"
        onClick={() => setMobileMenuOpen(false)}
      />
      
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 28, stiffness: 250 }}
        className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[380px] bg-white/80 dark:bg-[#0a1128]/85 backdrop-blur-2xl border-l border-white/60 dark:border-white/10 shadow-[-10px_0_40px_rgba(0,0,0,0.1)] z-[70] xl:hidden flex flex-col overflow-y-auto"
      >
        <div className="flex items-center justify-between p-6 border-b border-white/50 dark:border-white/10">
          <img src={logo} alt="CREMP" className="h-8 w-auto dark:block hidden drop-shadow-md" />
          <img src={logoLight} alt="CREMP" className="h-8 w-auto dark:hidden block drop-shadow-sm" />
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-[4px] bg-white/60 dark:bg-white/5 border border-white/50 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:text-[#d4af37] dark:hover:text-[#d4af37] hover:bg-white/90 dark:hover:bg-white/10 transition-all shadow-[inset_0_1px_2px_rgba(255,255,255,0.6)] dark:shadow-none"
          >
            <X className="h-5 w-5" strokeWidth={2.5} />
          </button>
        </div>

        <div className="p-6 pb-2 grid grid-cols-2 gap-3">
          <a
            href="#"
            className="flex items-center justify-center gap-2 py-3 rounded-[4px] bg-[#d4af37] hover:bg-[#c29f32] text-[#0a1128] font-bold text-[13px] shadow-[0_4px_12px_rgba(212,175,55,0.3)] transition-all duration-300"
          >
            <LogIn size={16} strokeWidth={2.5} /> Login
          </a>
          <a
            href="#"
            className="flex items-center justify-center gap-2 py-3 rounded-[4px] border border-white/60 dark:border-white/10 bg-white/50 dark:bg-white/5 text-[#0a1128] dark:text-white font-bold text-[13px] hover:bg-white/80 dark:hover:bg-white/10 shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] transition-all duration-300"
          >
            <UserPlus size={16} className="text-[#d4af37]" strokeWidth={2.5} /> Register
          </a>
        </div>

        <div className="px-6 py-3">
          <div className="flex items-center bg-white/60 dark:bg-white/5 border border-white/60 dark:border-white/10 rounded h-11 px-3 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] focus-within:bg-white/90 dark:focus-within:bg-[#0b1b42]/80 focus-within:border-[#d4af37]/50 focus-within:shadow-[0_0_0_3px_rgba(212,175,55,0.15)] transition-all duration-300">
            <Search size={15} className="text-gray-500/80 shrink-0 focus-within:text-[#d4af37]" strokeWidth={2.5} />
            <input
              type="text"
              placeholder="Search properties, builders..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent px-3 text-[13px] font-bold text-[#0a1128] dark:text-white outline-none placeholder:text-gray-500/70"
            />
            <button type="button" className="text-gray-400 hover:text-[#d4af37] shrink-0 p-1.5 bg-white/50 dark:bg-white/10 rounded shadow-sm transition-colors">
              <SlidersHorizontal size={14} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        <div className="flex-1 px-4 py-2 mt-2">
          <p className="px-3 text-[10px] font-extrabold uppercase tracking-widest text-gray-400/80 mb-3">Navigation</p>
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = currentPage === link.href;
              const isSubOpen = openSubMenu === link.label;
              
              return (
                <div key={link.label} className="flex flex-col">
                  <button
                    type="button"
                    onClick={() => {
                      if (link.subItems) {
                        setOpenSubMenu(isSubOpen ? null : link.label);
                      } else if (link.href) {
                        window.location.href = link.href;
                        setMobileMenuOpen(false);
                      }
                    }}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-[4px] text-[14px] font-bold transition-all border border-transparent ${
                      isActive || isSubOpen
                        ? "bg-white/60 dark:bg-white/10 text-[#d4af37] border-white/80 dark:border-white/5 shadow-sm"
                        : "text-gray-800 dark:text-gray-200 hover:bg-white/40 dark:hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                    {link.subItems && (
                      <span className="flex items-center justify-center w-6 h-6 rounded-[4px] bg-white/50 dark:bg-white/5">
                        {isSubOpen ? (
                          <Minus size={14} className="text-[#d4af37]" strokeWidth={3} />
                        ) : (
                          <Plus size={14} className="text-gray-500 dark:text-gray-400" strokeWidth={3} />
                        )}
                      </span>
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {link.subItems && isSubOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-1 pl-6 py-2 pr-2 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-200/50 dark:before:bg-white/10 before:rounded-[4px]">
                          {link.subItems.map((sub) => (
                            <a
                              key={sub.label}
                              href={sub.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block px-4 py-2.5 rounded-[4px] text-[13px] font-bold text-gray-600 dark:text-gray-400 hover:text-[#d4af37] dark:hover:text-[#d4af37] hover:bg-white/50 dark:hover:bg-white/5 transition-all"
                            >
                              {sub.label}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>
        </div>

        <div className="p-6 border-t border-white/50 dark:border-white/10 flex flex-col items-center gap-5 mt-auto">
          <div className="flex items-center gap-4">
            {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-[4px] bg-white/60 dark:bg-white/5 border border-white/60 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-[#d4af37] hover:text-white dark:hover:bg-[#d4af37] dark:hover:text-white transition-all duration-300 shadow-sm"
              >
                <Icon sx={{ fontSize: 18 }} />
              </a>
            ))}
          </div>
          <p className="text-[10px] uppercase tracking-widest font-extrabold text-gray-400/80">
            © {new Date().getFullYear()} CREMP Group
          </p>
        </div>
      </motion.div>
    </>
  );
}