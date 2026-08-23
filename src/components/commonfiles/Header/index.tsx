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
import HeaderMobile from "./mobile";
import { navLinks, cities } from "./data";

interface SiteHeaderProps {
  currentPage?: string;
}

export default function SiteHeader({ currentPage = "/" }: SiteHeaderProps) {
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
        <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-4 px-6 py-4 sm:gap-x-4 md:flex-nowrap md:px-10 w-full mx-auto">
          <div className="flex min-w-0 shrink-0 items-center gap-5 xl:gap-8">
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
              <CrempTextLogo className="h-6 w-auto text-[#0a1128] dark:text-white ml-2 hidden sm:block opacity-90 group-hover:opacity-100 transition-opacity" />
            </a>

            <nav className="hidden items-center gap-6 2xl:flex 2xl:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href + link.label}
                  className={`relative text-[14px] font-semibold tracking-wide transition-colors py-2 ${
                    currentPage === link.href
                      ? "text-[#d4af37]"
                      : "text-gray-600 dark:text-gray-300 hover:text-[#0a1128] dark:hover:text-white"
                  }`}
                  href={link.href}
                >
                  {link.label}
                  {currentPage === link.href && (
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
              ))}
            </nav>
          </div>

          <div className="order-3 min-w-[180px] flex-1 md:order-none md:min-w-0 xl:min-w-[240px] xl:max-w-[420px] 2xl:max-w-[320px]">
            <div className="relative w-full z-50 group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#d4af37]/0 via-[#d4af37]/20 to-[#d4af37]/0 rounded-[12px] opacity-0 group-focus-within:opacity-100 transition duration-500 blur-sm" />
              <div className="relative flex w-full min-w-0 items-center bg-gray-50/50 dark:bg-[#121c33]/50 backdrop-blur-sm border border-gray-200 dark:border-white/10 h-11 rounded-[10px] px-2 shadow-sm sm:h-12 hover:border-[#d4af37]/40 dark:hover:border-[#d4af37]/40 transition-colors focus-within:border-[#d4af37]/60 focus-within:bg-white dark:focus-within:bg-[#121c33]">
                <button
                  type="button"
                  className="flex shrink-0 items-center justify-center bg-white dark:bg-[#1a294d] shadow-sm transition hover:bg-gray-100 dark:hover:bg-[#233560] h-8 w-8 rounded-lg sm:h-9 sm:w-9"
                  aria-label="Use current location"
                >
                  <LocateFixed className="h-4 w-4 text-[#0a1128] dark:text-[#d4af37] sm:h-5 sm:w-5" />
                </button>

                <div className="mx-2 sm:mx-3 flex min-w-0 flex-1 items-center rounded-lg bg-transparent px-2 h-8">
                  <input
                    type="text"
                    placeholder="Search properties..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-full w-full min-w-0 bg-transparent text-[13px] text-[#0a1128] dark:text-white outline-none placeholder:text-gray-400 sm:text-[14px] font-medium"
                  />
                </div>

                <button
                  type="button"
                  className="mr-2 inline-flex shrink-0 items-center justify-center rounded-full text-gray-500 dark:text-gray-400 transition hover:bg-gray-100 dark:hover:bg-white/10 sm:mr-3 h-8 w-8"
                  aria-label="Open filters"
                >
                  <SlidersHorizontal className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.2} />
                </button>

                <button
                  type="button"
                  className="inline-flex shrink-0 items-center justify-center rounded-[8px] bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] text-white shadow-[0_2px_10px_rgba(212,175,55,0.3)] transition hover:shadow-[0_4px_15px_rgba(212,175,55,0.5)] hover:scale-105 h-8 w-9 sm:h-9 sm:w-10"
                  aria-label="Search"
                >
                  <Search className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.4} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-3 sm:gap-4">
            <div className="hidden xl:flex items-center bg-gray-50 dark:bg-[#121c33]/80 border border-gray-200 dark:border-white/10 p-1 rounded-xl shadow-sm hover:shadow-md hover:border-[#d4af37]/30 transition-all duration-300 relative z-50">
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

            <button
              type="button"
              aria-label="Menu"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 bg-white/50 dark:bg-[#121c33]/50 xl:hidden hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            >
              <Menu className="h-5 w-5" />
            </button>
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
