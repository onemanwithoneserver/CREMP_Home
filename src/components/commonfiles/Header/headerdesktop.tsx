import { useState, useEffect } from "react";
import {
  Search,
  SlidersHorizontal,
  LocateFixed,
  MapPin,
  ChevronDown,
  Menu,
  UserPlus,
  LogIn,
  User,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../../Logo/CREMP.png";
import logoLight from "../../../Logo/CREMP_Light.png";
import CrempTextLogo from "../../CrempTextLogo";
import HeaderMobile from "./headermobile";
import { navLinks, cities } from "./data";

interface SiteHeaderProps {
  currentPage?: string;
  isMobile?: boolean;
}

export default function SiteHeader({ currentPage = "/", isMobile }: SiteHeaderProps) {
  const [activeNav, setActiveNav] = useState("Home");
  const [selectedCity, setSelectedCity] = useState("All cities");
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 dark:bg-[#0b1b42]/80 backdrop-blur-xl border-b border-gray-200/60 dark:border-[#d4af37]/20 shadow-[0_4px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.2)]"
            : "bg-white dark:bg-[#0a1128] border-b border-transparent"
        }`}
      >
        {/* Desktop Header (xl and up) */}
        {!isMobile && (
        <div className="hidden xl:flex items-center justify-between gap-x-4 px-10 py-4 w-full mx-auto">
          <div className="flex min-w-0 shrink-0 items-center gap-8">
            <a
              className="flex h-12 items-center overflow-visible group"
              aria-label="CREMP home"
              href="#"
            >
              <img
                src={logoLight}
                alt="CREMP"
                className="block h-14 w-auto max-w-none object-contain dark:hidden transition-transform group-hover:scale-105"
              />
              <img
                src={logo}
                alt="CREMP"
                className="hidden h-14 w-auto max-w-none object-contain dark:block transition-transform group-hover:scale-105"
              />
              <CrempTextLogo className="h-6 w-auto text-[#0a1128] dark:text-white ml-2 opacity-90 group-hover:opacity-100 transition-opacity" />
            </a>

            <nav className="flex items-center gap-6 2xl:gap-8">
              {navLinks.map((link) => {
                const isActive = activeNav === link.label;
                return (
                  <div key={link.label} className="relative group">
                    <a
                      onClick={(e) => {
                        if (!link.href) e.preventDefault();
                        setActiveNav(link.label);
                      }}
                      className={`flex items-center gap-1.5 relative text-[14px] font-semibold tracking-wide transition-colors py-2 cursor-pointer ${
                        isActive
                          ? "text-[#d4af37]"
                          : "text-gray-600 dark:text-gray-300 hover:text-[#0a1128] dark:hover:text-white"
                      }`}
                      href={link.href || "#"}
                    >
                      {link.label}
                      {link.subItems && <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute bottom-0 left-0 h-[3px] w-full rounded-t-full bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728]"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                    </a>
                    
                    {link.subItems && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <div className="min-w-[160px] bg-white/95 dark:bg-[#0b1b42]/95 backdrop-blur-xl border border-gray-200 dark:border-[#d4af37]/20 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.3)] overflow-hidden py-1">
                          {link.subItems.map(subItem => (
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              className="block px-4 py-2.5 text-[13px] font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-[#d4af37] dark:hover:text-[#d4af37] transition-colors"
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          <div className="flex-1 min-w-[240px] max-w-[420px] 2xl:max-w-[320px]">
            <div className="relative w-full z-40 group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#d4af37]/0 via-[#d4af37]/20 to-[#d4af37]/0 rounded-[12px] opacity-0 group-focus-within:opacity-100 transition duration-500 blur-sm" />
              <div className="relative flex w-full min-w-0 items-center bg-gray-50/50 dark:bg-[#121c33]/50 backdrop-blur-sm border border-gray-200 dark:border-white/10 h-11 rounded-[10px] px-2 shadow-sm hover:border-[#d4af37]/40 dark:hover:border-[#d4af37]/40 transition-colors focus-within:border-[#d4af37]/60 focus-within:bg-white dark:focus-within:bg-[#121c33]">
                <button
                  type="button"
                  className="flex shrink-0 items-center justify-center bg-white dark:bg-[#1a294d] shadow-sm transition hover:bg-gray-100 dark:hover:bg-[#233560] h-8 w-8 rounded-lg"
                  aria-label="Use current location"
                >
                  <LocateFixed className="h-4 w-4 text-[#0a1128] dark:text-[#d4af37]" />
                </button>

                <div className="mx-3 flex min-w-0 flex-1 items-center rounded-lg bg-transparent px-2 h-8">
                  <input
                    type="text"
                    placeholder="Search properties..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-full w-full min-w-0 bg-transparent text-[13px] text-[#0a1128] dark:text-white outline-none placeholder:text-gray-400 font-medium"
                  />
                </div>

                <button
                  type="button"
                  className="mr-3 inline-flex shrink-0 items-center justify-center rounded-full text-gray-500 dark:text-gray-400 transition hover:bg-gray-100 dark:hover:bg-white/10 h-8 w-8"
                  aria-label="Open filters"
                >
                  <SlidersHorizontal className="h-5 w-5" strokeWidth={2.2} />
                </button>

                <button
                  type="button"
                  className="inline-flex shrink-0 items-center justify-center rounded-[8px] bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] text-white shadow-[0_2px_10px_rgba(212,175,55,0.3)] transition hover:shadow-[0_4px_15px_rgba(212,175,55,0.5)] hover:scale-105 h-9 w-10"
                  aria-label="Search"
                >
                  <Search className="h-5 w-5" strokeWidth={2.4} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-4">
            <div className="flex items-center bg-gray-50 dark:bg-[#121c33]/80 border border-gray-200 dark:border-white/10 p-1 rounded-xl shadow-sm hover:shadow-md hover:border-[#d4af37]/30 transition-all duration-300 relative z-50">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowCityDropdown(!showCityDropdown)}
                  className="flex h-9 items-center gap-2 rounded-lg px-4 text-[#0a1128] dark:text-white transition-all hover:bg-white dark:hover:bg-[#1a294d] focus-visible:outline-none"
                >
                  <MapPin className="h-3.5 w-3.5 text-[#d4af37]" />
                  <span className="text-[13px] font-semibold">{selectedCity}</span>
                  <ChevronDown className={`h-3 w-3 text-gray-400 transition-transform ${showCityDropdown ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {showCityDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full left-0 mt-2 w-[180px] bg-white/95 dark:bg-[#0b1b42]/95 backdrop-blur-xl border border-gray-200 dark:border-[#d4af37]/20 rounded-xl shadow-xl z-50 py-2 overflow-hidden"
                    >
                      {cities.map((city) => (
                        <button
                          key={city}
                          type="button"
                          onClick={() => {
                            setSelectedCity(city);
                            setShowCityDropdown(false);
                          }}
                          className={`w-full text-left px-4 py-2.5 text-[13px] font-medium transition-colors flex items-center justify-between ${
                            selectedCity === city
                              ? "text-[#d4af37] bg-[#d4af37]/10 font-bold"
                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5"
                          }`}
                        >
                          {city}
                          {selectedCity === city && <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="w-px h-5 bg-gray-200 dark:bg-white/10 mx-1" />
              
              <div className="relative ml-1">
                <button
                  type="button"
                  onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                  className="w-9 h-9 rounded-full bg-gray-100 dark:bg-[#121c33] border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-[#d4af37] hover:text-white dark:hover:bg-[#d4af37] dark:hover:text-white hover:border-[#d4af37] dark:hover:border-[#d4af37] shadow-sm transition-all"
                >
                  <User size={16} />
                </button>

                <AnimatePresence>
                  {showProfileDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full right-0 mt-2 w-[220px] bg-white/95 dark:bg-[#0b1b42]/95 backdrop-blur-xl border border-gray-200 dark:border-[#d4af37]/20 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.3)] z-50 py-2 overflow-hidden"
                    >
                      <div className="px-4 py-2 border-b border-gray-100 dark:border-white/10 mb-1">
                        <p className="text-sm font-bold text-[#0a1128] dark:text-white">Welcome, Guest</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Please login to continue</p>
                      </div>
                      <a href="#" className="flex items-center gap-2 px-4 py-2 text-[13px] font-semibold text-gray-700 dark:text-gray-300 hover:text-[#d4af37] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                        <LogIn size={14} /> Login
                      </a>
                      <a href="#" className="flex items-center gap-2 px-4 py-2 text-[13px] font-semibold text-gray-700 dark:text-gray-300 hover:text-[#d4af37] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                        <UserPlus size={14} /> Register
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
        )}

        {/* Mobile Header (below xl) */}
        <div className={`${isMobile ? "flex" : "flex xl:hidden"} flex-col w-full bg-white dark:bg-[#0a1128] border-b border-gray-200 dark:border-white/10 shadow-sm`}>
          {/* Mobile Top Row */}
          <div className="flex items-center justify-between px-3 py-2.5 w-full">
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Menu"
                onClick={() => setMobileMenuOpen(true)}
                className="text-slate-500 hover:text-[#0a1128] dark:text-gray-400 dark:hover:text-white transition-colors p-1"
              >
                <Menu className="h-6 w-6" strokeWidth={2} />
              </button>
              <a
                className="flex h-8 items-center group ml-1"
                aria-label="CREMP home"
                href="#"
              >
                <img
                  src={logoLight}
                  alt="CREMP"
                  className="block h-8 w-auto object-contain dark:hidden"
                />
                <img
                  src={logo}
                  alt="CREMP"
                  className="hidden h-8 w-auto object-contain dark:block"
                />
              </a>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="relative z-50">
                <button
                  type="button"
                  onClick={() => setShowCityDropdown(!showCityDropdown)}
                  className="flex items-center gap-2 px-2.5 py-1.5 rounded-[6px] border border-gray-200/80 dark:border-white/10 bg-white dark:bg-[#121c33] text-[#334155] dark:text-gray-200 transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                >
                  <div className="w-5 h-5 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center shrink-0">
                    <MapPin className="h-3 w-3 text-slate-400" strokeWidth={2.5} />
                  </div>
                  <span className="text-[13px] font-semibold tracking-wide hidden sm:inline-block max-w-[90px] truncate">{selectedCity}</span>
                  <ChevronDown className="h-3.5 w-3.5 text-slate-400" strokeWidth={2} />
                </button>

                <AnimatePresence>
                  {showCityDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full right-0 mt-2 w-[160px] bg-white/95 dark:bg-[#0b1b42]/95 backdrop-blur-xl border border-gray-200 dark:border-[#d4af37]/20 rounded-xl shadow-xl z-50 py-2 overflow-hidden"
                    >
                      {cities.map((city) => (
                        <button
                          key={city}
                          type="button"
                          onClick={() => {
                            setSelectedCity(city);
                            setShowCityDropdown(false);
                          }}
                          className={`w-full text-left px-4 py-2.5 text-[13px] font-medium transition-colors flex items-center justify-between ${
                            selectedCity === city
                              ? "text-[#d4af37] bg-[#d4af37]/10 font-bold"
                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5"
                          }`}
                        >
                          {city}
                          {selectedCity === city && <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="relative z-50">
                <button
                  type="button"
                  onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                  className="flex items-center gap-1.5 p-1 rounded-md hover:bg-gray-50 dark:hover:bg-white/5 transition-colors focus:outline-none"
                >
                  <div className="relative">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-100 dark:bg-[#121c33] border border-gray-200/80 dark:border-white/10 flex items-center justify-center text-gray-500 overflow-hidden shadow-sm">
                      <User size={16} />
                    </div>
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white dark:border-[#0a1128]" />
                  </div>
                  <ChevronDown className="h-3.5 w-3.5 text-slate-400" strokeWidth={2} />
                </button>

                <AnimatePresence>
                  {showProfileDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full right-0 mt-2 w-[220px] bg-white/95 dark:bg-[#0b1b42]/95 backdrop-blur-xl border border-gray-200 dark:border-[#d4af37]/20 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.3)] z-50 py-2 overflow-hidden"
                    >
                      <div className="px-4 py-2 border-b border-gray-100 dark:border-white/10 mb-1">
                        <p className="text-sm font-bold text-[#0a1128] dark:text-white">Welcome, Guest</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Please login to continue</p>
                      </div>
                      <a href="#" className="flex items-center gap-2 px-4 py-2 text-[13px] font-semibold text-gray-700 dark:text-gray-300 hover:text-[#d4af37] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                        <LogIn size={14} /> Login
                      </a>
                      <a href="#" className="flex items-center gap-2 px-4 py-2 text-[13px] font-semibold text-gray-700 dark:text-gray-300 hover:text-[#d4af37] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                        <UserPlus size={14} /> Register
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <HeaderMobile 
            mobileMenuOpen={mobileMenuOpen} 
            setMobileMenuOpen={setMobileMenuOpen} 
            currentPage={currentPage}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
          />
        )}
      </AnimatePresence>
    </>
  );
}
