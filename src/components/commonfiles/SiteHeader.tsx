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
  X,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../Logo/CREMP.png";
import logoLight from "../../Logo/CREMP_Light.png";
import CrempTextLogo from "../CrempTextLogo";

interface SiteHeaderProps {
  currentPage?: string;
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Invest", href: "/buy-rent?mode=buy" },
  { label: "Lease", href: "/buy-rent?mode=lease" },
  { label: "Business Opportunity", href: "/franchise" },
  { label: "Videos", href: "/videos" },
  { label: "Saved", href: "/wishlist" },
  { label: "Hand Picked", href: "/handpick" },
];

const cities = [
  "All cities",
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Pune",
  "Kolkata",
  "Ahmedabad",
];

export default function SiteHeader({ currentPage = "/" }: SiteHeaderProps) {
  const [selectedCity, setSelectedCity] = useState("All cities");
  const [showCityDropdown, setShowCityDropdown] = useState(false);
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

  // Prevent scroll when mobile menu is open
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
        <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-4 px-6 py-4 sm:gap-x-4 md:flex-nowrap md:px-10 max-w-[1920px] mx-auto">
          {/* Logo & Navigation */}
          <div className="flex min-w-0 shrink-0 items-center gap-5 xl:gap-8">
            <a
              className="flex h-12 items-center overflow-visible group"
              aria-label="CREMP home"
              href="/"
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
                  key={link.href}
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

          {/* Search Bar */}
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

          {/* Right Actions */}
          <div className="flex shrink-0 items-center gap-3 sm:gap-4">
            <div className="relative hidden sm:block w-[140px] xl:w-[170px]">
              <button
                type="button"
                aria-label={`City: ${selectedCity}`}
                onClick={() => setShowCityDropdown(!showCityDropdown)}
                className="flex h-11 w-full items-center gap-1.5 rounded-[10px] border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-[#121c33]/50 backdrop-blur-sm px-3 text-left text-[#0a1128] dark:text-white transition-all hover:border-[#d4af37]/50 focus-visible:border-[#d4af37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]/20"
              >
                <MapPin className="h-4 w-4 shrink-0 text-[#d4af37]" />
                <span className="min-w-0 flex-1 truncate text-[13px] font-semibold">
                  {selectedCity}
                </span>
                <ChevronDown
                  className={`h-3.5 w-3.5 shrink-0 text-gray-400 transition-transform duration-300 ${showCityDropdown ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {showCityDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute top-full right-0 mt-2 w-[200px] bg-white/95 dark:bg-[#0b1b42]/95 backdrop-blur-xl border border-gray-200 dark:border-[#d4af37]/20 rounded-[12px] shadow-[0_10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.3)] z-50 py-2 overflow-hidden"
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

            <div className="h-6 w-px bg-gray-200 dark:bg-white/10 hidden sm:block mx-1" />

            <div className="flex items-center gap-2 sm:gap-2.5">
              <a
                aria-label="Register"
                title="Register"
                className="hidden h-11 px-4 items-center justify-center gap-2 rounded-[10px] border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-[#121c33]/50 text-[#0a1128] dark:text-white text-sm font-semibold transition-all hover:border-[#d4af37]/50 hover:bg-[#d4af37]/5 xl:inline-flex"
                href="/desktop/create-account"
              >
                <UserPlus className="h-4 w-4 text-[#d4af37]" />
                <span>Register</span>
              </a>
              <a
                aria-label="Login"
                title="Login"
                className="inline-flex h-11 w-11 xl:w-auto xl:px-5 items-center justify-center gap-2 rounded-[10px] bg-[#0b1b42] dark:bg-[#d4af37] text-white dark:text-[#0a1128] transition-all hover:shadow-[0_4px_15px_rgba(11,27,66,0.3)] dark:hover:shadow-[0_4px_15px_rgba(212,175,55,0.3)] hover:-translate-y-0.5"
                href="/desktop/login"
              >
                <LogIn className="h-4 w-4 xl:hidden" />
                <span className="hidden xl:block text-sm font-bold">Login</span>
              </a>
            </div>

            <button
              type="button"
              aria-label="Menu"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 bg-white/50 dark:bg-[#121c33]/50 2xl:hidden hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
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
              {/* Menu Header */}
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

              {/* User Actions */}
              <div className="p-6 pb-2 grid grid-cols-2 gap-3">
                <a
                  href="/mobile/login"
                  className="flex items-center justify-center gap-2 py-3 rounded-lg bg-[#0b1b42] dark:bg-[#d4af37] text-white dark:text-[#0a1128] font-bold text-sm shadow-md"
                >
                  <LogIn size={16} /> Login
                </a>
                <a
                  href="/mobile/create-account"
                  className="flex items-center justify-center gap-2 py-3 rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#121c33] text-[#0a1128] dark:text-white font-bold text-sm"
                >
                  <UserPlus size={16} className="text-[#d4af37]" /> Register
                </a>
              </div>

              {/* City Selector */}
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

              {/* Navigation */}
              <div className="flex-1 px-4 py-2">
                <p className="px-2 text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Menu</p>
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-lg text-sm font-semibold transition-all ${
                        currentPage === link.href
                          ? "bg-gradient-to-r from-[#d4af37]/10 to-transparent text-[#d4af37] border-l-2 border-[#d4af37]"
                          : "text-[#0a1128] dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 border-l-2 border-transparent"
                      }`}
                    >
                      {link.label}
                      <ChevronRight size={16} className="text-gray-300 dark:text-gray-600" />
                    </a>
                  ))}
                </nav>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-100 dark:border-white/10 text-center">
                <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
                  © {new Date().getFullYear()} CREMP Group
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
