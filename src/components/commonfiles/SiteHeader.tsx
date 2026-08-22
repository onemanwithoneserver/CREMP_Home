import { useState } from 'react';
import { Search, SlidersHorizontal, LocateFixed, MapPin, ChevronDown, Menu, UserPlus, LogIn, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../Logo/CREMP.png';
import logoLight from '../../Logo/CREMP_Light.png';
import CrempTextLogo from '../CrempTextLogo';

interface SiteHeaderProps {
  currentPage?: string;
}

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Invest', href: '/buy-rent?mode=buy' },
  { label: 'Lease', href: '/buy-rent?mode=lease' },
  { label: 'Business Opportunity', href: '/franchise' },
  { label: 'Videos', href: '/videos' },
  { label: 'Saved', href: '/wishlist' },
  { label: 'Hand Picked', href: '/handpick' },
];

const cities = [
  'All cities', 'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Kolkata', 'Ahmedabad',
];

export default function SiteHeader({ currentPage = '/' }: SiteHeaderProps) {
  const [selectedCity, setSelectedCity] = useState('All cities');
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <header className="border-b border-[#E5E7EB] bg-white sticky top-0 z-50">
        <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-4 px-6 py-5 sm:gap-x-4 md:flex-nowrap md:px-10">
          
          {/* Logo & Nav */}
          <div className="flex min-w-0 shrink-0 items-center gap-5 xl:gap-7">
            <a className="flex h-12 items-center overflow-visible" aria-label="CREMP home" href="/">
              <img
                src={logoLight}
                alt="CREMP"
                className="block h-16 w-auto max-w-none object-contain dark:hidden"
              />
              <img
                src={logo}
                alt="CREMP"
                className="hidden h-16 w-auto max-w-none object-contain dark:block"
              />
              <CrempTextLogo className="h-7 w-auto text-[#0a1128] dark:text-white ml-2 hidden sm:block" />
            </a>
            
            {/* Desktop Nav */}
            <nav className="hidden items-center gap-5 2xl:flex 2xl:gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  className={`relative text-[16px] font-medium transition-colors ${
                    currentPage === link.href
                      ? 'text-[#C99A2E]'
                      : 'text-slate-800 hover:text-[#0F2A56]'
                  }`}
                  href={link.href}
                >
                  {link.label}
                  {currentPage === link.href && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-[#C99A2E]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </nav>
          </div>

          {/* Search Bar */}
          <div className="order-3 min-w-[180px] flex-1 md:order-none md:min-w-0 xl:min-w-[240px] xl:max-w-[420px] 2xl:max-w-[260px]">
            <div className="relative w-full z-50">
              <div className="flex w-full min-w-0 items-center border border-[#cfd5dd] bg-white h-11 rounded-xl px-2 shadow-none sm:h-12 hover:border-[#C99A2E]/40 transition-colors focus-within:border-[#C99A2E]/60 focus-within:shadow-[0_0_0_3px_rgba(201,154,46,0.1)]">
                {/* Location Button */}
                <button
                  type="button"
                  className="flex shrink-0 items-center justify-center bg-[#f1f2f4] transition hover:bg-[#e8ebef] h-8 w-8 rounded-lg sm:h-9 sm:w-9"
                  aria-label="Use current location"
                >
                  <LocateFixed className="h-4 w-4 text-[#223456] sm:h-5 sm:w-5" />
                </button>

                {/* Search Input */}
                <div className="mx-2 sm:mx-3 flex min-w-0 flex-1 items-center rounded-[10px] border border-[#d3d8df] bg-white px-2.5 sm:px-3 h-8">
                  <input
                    type="text"
                    placeholder="Search properties"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-full w-full min-w-0 bg-transparent text-[13px] text-[#223456] outline-none placeholder:text-[#8e98a8] sm:text-[14px] cursor-text font-sans"
                  />
                </div>

                {/* Filter Button */}
                <button
                  type="button"
                  className="mr-2 inline-flex shrink-0 items-center justify-center rounded-full text-[#223456] transition hover:bg-[#f3f4f6] sm:mr-3 h-8 w-8"
                  aria-label="Open filters"
                >
                  <SlidersHorizontal className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.2} />
                </button>

                {/* Search Button */}
                <button
                  type="button"
                  className="inline-flex shrink-0 items-center justify-center rounded-[10px] bg-[#223456] text-white transition hover:bg-[#1b2d4a] h-8 w-9 sm:h-9 sm:w-10"
                  aria-label="Search"
                >
                  <Search className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.4} />
                </button>
              </div>
            </div>
          </div>

          {/* City Selector */}
          <div className="relative w-[124px] shrink-0 sm:w-[170px]">
            <button
              type="button"
              aria-label={`City: ${selectedCity}`}
              aria-haspopup="listbox"
              aria-expanded={showCityDropdown}
              onClick={() => setShowCityDropdown(!showCityDropdown)}
              className="flex h-12 w-full items-center gap-1.5 rounded-xl border border-[#E5E7EB] bg-white px-2.5 text-left text-[#102B57] transition-colors hover:border-[#C99A2E]/60 focus-visible:border-[#C99A2E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/20 sm:gap-2 sm:px-3"
            >
              <MapPin className="h-4 w-4 shrink-0 text-[#C99A2E]" />
              <span className="min-w-0 flex-1 truncate text-[13px] font-semibold">{selectedCity}</span>
              <ChevronDown className={`h-3.5 w-3.5 shrink-0 text-slate-500 transition-transform ${showCityDropdown ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {showCityDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-1.5 w-full bg-white border border-[#E5E7EB] rounded-xl shadow-lg z-50 py-1 overflow-hidden"
                >
                  {cities.map((city) => (
                    <button
                      key={city}
                      type="button"
                      onClick={() => { setSelectedCity(city); setShowCityDropdown(false); }}
                      className={`w-full text-left px-3.5 py-2 text-[13px] font-medium hover:bg-[#fffaf0] transition-colors ${
                        selectedCity === city ? 'text-[#C99A2E] bg-[#C99A2E]/5 font-semibold' : 'text-[#102B57]'
                      }`}
                    >
                      {city}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Action Buttons */}
          <div className="flex shrink-0 items-center gap-3">
            {/* Mobile Menu Toggle */}
            <button
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-site-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#E5E7EB] text-slate-600 2xl:hidden hover:bg-gray-50 transition-colors"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            {/* Register & Login */}
            <div className="flex items-center gap-2">
              <a
                aria-label="Register"
                title="Register"
                className="hidden h-11 w-11 items-center justify-center rounded-xl border border-[#E5E7EB] bg-white text-[#102B57] transition-colors hover:border-[#C99A2E]/50 hover:bg-[#fffaf0] sm:inline-flex"
                href="/register"
              >
                <UserPlus className="h-5 w-5" />
              </a>
              <a
                aria-label="Login"
                title="Login"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#102B57] text-white transition-colors hover:bg-[#0F2A56]"
                href="/login"
              >
                <LogIn className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-site-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[85px] z-40 2xl:hidden"
          >
            <div className="bg-white border-b border-[#E5E7EB] shadow-xl px-6 py-4">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg text-[15px] font-medium transition-colors ${
                      currentPage === link.href
                        ? 'text-[#C99A2E] bg-[#C99A2E]/5'
                        : 'text-slate-700 hover:bg-gray-50 hover:text-[#0F2A56]'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
            <div className="fixed inset-0 bg-black/20 -z-10" onClick={() => setMobileMenuOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
