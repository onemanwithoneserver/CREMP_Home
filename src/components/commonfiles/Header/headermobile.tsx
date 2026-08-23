import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
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
  setMobileMenuOpen,
  currentPage,
}: HeaderMobileProps) {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <>
      {/* Backdrop overlay for clicking outside to close */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => setMobileMenuOpen(false)}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[90]"
      />

      {/* Side Drawer */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 250 }}
        className="fixed top-0 right-0 w-[85vw] max-w-[360px] h-[100dvh] bg-white dark:bg-[#0a1128] z-[100] flex flex-col overflow-hidden shadow-2xl border-l border-gray-100 dark:border-white/10"
      >
        <div className="flex items-center justify-between p-5 shrink-0 relative z-10 border-b border-gray-100 dark:border-white/10">
          <a href="#" className="flex items-center">
            <img src={logo} alt="CREMP" className="h-8 w-auto dark:block hidden drop-shadow-md" />
            <img src={logoLight} alt="CREMP" className="h-8 w-auto dark:hidden block drop-shadow-sm" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-[#d4af37] hover:text-white dark:hover:bg-[#d4af37] dark:hover:text-[#0a1128] transition-all group focus:outline-none"
          >
            <X className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300" strokeWidth={2} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overflow-x-hidden pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="px-5 flex flex-col min-h-full">
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="mt-6 mb-8"
            >
              <div className="relative group">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#d4af37] transition-colors" strokeWidth={2.5} />
                <input
                  type="text"
                  placeholder="Search properties..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-11 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl pl-9 pr-10 text-[13px] font-medium text-[#0a1128] dark:text-white outline-none focus:border-[#d4af37] focus:ring-4 focus:ring-[#d4af37]/10 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500 shadow-sm focus:bg-white dark:focus:bg-[#0b1b42]"
                />
                <button type="button" className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg bg-white dark:bg-white/10 flex items-center justify-center text-gray-500 hover:text-[#d4af37] transition-colors shadow-sm">
                  <SlidersHorizontal size={14} strokeWidth={2.5} />
                </button>
              </div>
            </motion.div>

            <motion.nav 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-1.5 flex-1"
            >
              {navLinks.map((link) => {
                const isActive = currentPage === link.href;
                const isSubOpen = openSubMenu === link.label;
                
                return (
                  <motion.div key={link.label} variants={itemVariants} className="flex flex-col">
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
                      className="group flex items-center justify-between text-left focus:outline-none py-2"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`text-[14px] font-bold tracking-tight transition-colors duration-300 ${
                          isActive || isSubOpen 
                            ? "text-[#d4af37]" 
                            : "text-[#0a1128] dark:text-white hover:text-[#d4af37] dark:hover:text-[#d4af37]"
                        }`}>
                          {link.label}
                        </span>
                        {(isActive || isSubOpen) && (
                          <motion.div 
                            layoutId="mobile-nav-indicator"
                            className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          />
                        )}
                      </div>
                      
                      {link.subItems && (
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isSubOpen ? "bg-[#d4af37]/10 text-[#d4af37]" : "bg-gray-50 dark:bg-white/5 text-gray-400 dark:text-gray-500"
                        }`}>
                          {isSubOpen ? <Minus size={14} strokeWidth={2.5} /> : <Plus size={14} strokeWidth={2.5} />}
                        </div>
                      )}
                    </button>
                    
                    <AnimatePresence>
                      {link.subItems && isSubOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-3 pt-2 pb-3 pl-4 border-l-2 border-gray-100 dark:border-white/10 ml-2 mt-1">
                            {link.subItems.map((sub, j) => (
                              <motion.a
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: j * 0.04, duration: 0.2 }}
                                key={sub.label}
                                href={sub.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-[13px] font-semibold text-gray-500 dark:text-gray-400 hover:text-[#d4af37] dark:hover:text-[#d4af37] transition-colors"
                              >
                                {sub.label}
                              </motion.a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.nav>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-10 pt-6 border-t border-gray-100 dark:border-white/10 flex flex-col gap-6"
            >
              <div className="flex flex-col gap-3">
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-50 dark:bg-white/5 text-[#0a1128] dark:text-white font-bold text-[13px] hover:bg-gray-100 dark:hover:bg-white/10 transition-all border border-gray-200/50 dark:border-transparent"
                >
                  <LogIn size={16} strokeWidth={2.5} /> Sign In
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#d4af37] text-white font-bold text-[13px] hover:bg-[#c4a02e] shadow-lg shadow-[#d4af37]/20 transition-all"
                >
                  <UserPlus size={16} strokeWidth={2.5} /> Register
                </a>
              </div>

              <div className="flex items-center justify-between px-2">
                {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#d4af37] transition-all hover:-translate-y-1"
                  >
                    <Icon sx={{ fontSize: 18 }} />
                  </a>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </>
  );
}