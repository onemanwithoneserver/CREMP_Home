import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Plus, Minus, X } from "lucide-react";
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => setMobileMenuOpen(false)}
        className="fixed inset-0 bg-black/60 z-[90]"
        style={{ top: "var(--top-bar-height, 0px)" }}
      />
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 250 }}
        className="fixed left-0 w-full h-auto max-h-[100dvh] rounded-b-[8px] bg-white dark:bg-[#0a1128] z-[100] flex flex-col overflow-hidden shadow-2xl border-b border-gray-100 dark:border-white/10"
        style={{ top: "var(--top-bar-height, 0px)", maxHeight: "calc(100dvh - var(--top-bar-height, 0px))" }}
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
          <div className="px-5 flex flex-col min-h-full pt-4">
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
                          isSubOpen ? "bg-white text-[#0a1128] shadow-md" : "bg-gray-50 dark:bg-white/5 text-gray-400 dark:text-gray-500"
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
          </div>
        </div>
      </motion.div>
    </>
  );
}