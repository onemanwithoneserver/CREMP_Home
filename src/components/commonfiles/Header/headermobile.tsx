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
        delayChildren: 0.15,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ type: "spring" as const, damping: 32, stiffness: 250 }}
      className="fixed inset-0 w-full h-[100dvh] bg-white dark:bg-[#0a1128] z-[100] flex flex-col overflow-hidden shadow-2xl"
    >
      <div className="flex items-center justify-between p-5 sm:p-8 shrink-0 relative z-10">
        <a href="#" className="flex items-center">
          <img src={logo} alt="CREMP" className="h-9 w-auto dark:block hidden drop-shadow-md" />
          <img src={logoLight} alt="CREMP" className="h-9 w-auto dark:hidden block drop-shadow-sm" />
        </a>
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/5 text-gray-800 dark:text-gray-200 hover:bg-[#d4af37] hover:text-white dark:hover:bg-[#d4af37] dark:hover:text-[#0a1128] transition-all group focus:outline-none"
        >
          <X className="h-6 w-6 group-hover:scale-110 transition-transform" strokeWidth={2} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden pb-10">
        <div className="px-6 sm:px-10 flex flex-col min-h-full">
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="mt-2 mb-8"
          >
            <div className="relative group">
              <Search size={22} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#d4af37] transition-colors" strokeWidth={2.5} />
              <input
                type="text"
                placeholder="Search properties or builders..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl pl-12 pr-14 text-[15px] font-bold text-[#0a1128] dark:text-white outline-none focus:border-[#d4af37] focus:ring-4 focus:ring-[#d4af37]/10 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500 shadow-sm focus:bg-white dark:focus:bg-[#0b1b42]"
              />
              <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-xl bg-gray-100 dark:bg-white/10 flex items-center justify-center text-gray-500 hover:text-[#d4af37] transition-colors">
                <SlidersHorizontal size={18} strokeWidth={2.5} />
              </button>
            </div>
          </motion.div>

          <motion.nav 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6 flex-1"
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
                    className="group flex items-center justify-between text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <span className={`text-[32px] sm:text-[38px] font-extrabold tracking-tight transition-colors duration-300 ${
                        isActive || isSubOpen 
                          ? "text-[#d4af37]" 
                          : "text-[#0a1128] dark:text-white hover:text-gray-500 dark:hover:text-gray-300"
                      }`}>
                        {link.label}
                      </span>
                      {(isActive || isSubOpen) && (
                        <motion.div 
                          layoutId="mobile-nav-indicator"
                          className="w-2.5 h-2.5 rounded-full bg-[#d4af37] mt-3"
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        />
                      )}
                    </div>
                    
                    {link.subItems && (
                      <div className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isSubOpen ? "bg-[#d4af37] text-[#0a1128] shadow-[0_4px_12px_rgba(212,175,55,0.4)]" : "bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-300"
                      }`}>
                        {isSubOpen ? <Minus size={20} strokeWidth={3} /> : <Plus size={20} strokeWidth={3} />}
                      </div>
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {link.subItems && isSubOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-5 pt-6 pb-2 pl-4 border-l-2 border-gray-100 dark:border-white/10 ml-2 mt-2">
                          {link.subItems.map((sub, j) => (
                            <motion.a
                              initial={{ opacity: 0, x: -15 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: j * 0.05, duration: 0.3 }}
                              key={sub.label}
                              href={sub.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-[18px] sm:text-[20px] font-bold text-gray-500 dark:text-gray-400 hover:text-[#d4af37] dark:hover:text-[#d4af37] transition-colors flex items-center"
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="mt-14 pt-8 border-t border-gray-100 dark:border-white/10 flex flex-col gap-8"
          >
            <div className="grid grid-cols-2 gap-4">
              <a
                href="#"
                className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-gray-100 dark:bg-white/5 text-[#0a1128] dark:text-white font-bold text-[16px] hover:bg-gray-200 dark:hover:bg-white/10 transition-all hover:scale-[1.02] border border-gray-200/50 dark:border-transparent"
              >
                <LogIn size={18} strokeWidth={2.5} /> Sign In
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#d4af37] text-white font-bold text-[16px] hover:bg-[#b38728] shadow-[0_4px_15px_rgba(212,175,55,0.3)] hover:shadow-[0_8px_25px_rgba(212,175,55,0.4)] transition-all hover:scale-[1.02]"
              >
                <UserPlus size={18} strokeWidth={2.5} /> Register
              </a>
            </div>

            <div className="flex items-center justify-center gap-5">
              {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37] dark:hover:border-[#d4af37] hover:bg-white dark:hover:bg-[#d4af37]/10 transition-all hover:scale-110 shadow-sm"
                >
                  <Icon sx={{ fontSize: 22 }} />
                </a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}