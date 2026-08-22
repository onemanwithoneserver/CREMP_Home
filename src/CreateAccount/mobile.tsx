import { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff, Globe, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { socialProviders, countryCodes } from './data';

export default function CreateAccountMobile() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eef2f6] via-[#e8edf4] to-[#dfe5ee] dark:from-[#0a1128] dark:via-[#0d1730] dark:to-[#0a1128] flex flex-col font-sans relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-white/40 to-transparent dark:from-[#121c33]/30 pointer-events-none" />
      
      {/* Language Selector */}
      <div className="absolute top-4 right-4 z-20">
        <button className="flex items-center gap-2 px-3 py-1.5 bg-white/80 dark:bg-[#121c33]/80 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[8px] text-[13px] font-medium text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-white/10 transition-all shadow-sm">
          <Globe size={14} />
          English
          <ChevronDown size={14} className="text-gray-400" />
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center p-4 relative z-10 pt-16 pb-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
          className="w-full max-w-[460px] bg-white/95 dark:bg-[#0b1b42]/95 backdrop-blur-2xl p-6 rounded-[16px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-white/60 dark:border-white/10 relative overflow-hidden"
        >
          {/* Gold accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728]" />
          
          {/* Header */}
          <div className="mb-5 text-center">
            <h1 className="text-xl font-extrabold text-[#0a1128] dark:text-white mb-1.5">Create Account</h1>
            <p className="text-[12px] font-medium text-gray-500 dark:text-gray-400">Join thousands of professionals making smarter real estate decisions.</p>
          </div>

          <form className="space-y-3.5" onSubmit={(e) => e.preventDefault()}>
            {/* Full Name + Email stacked on mobile */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-[#0a1128] dark:text-white ml-1">Full Name</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#d4af37] transition-colors">
                    <User size={14} strokeWidth={2.5} />
                  </div>
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full pl-9 pr-3 py-2.5 bg-white dark:bg-[#121c33] border border-gray-200 dark:border-white/10 rounded-[8px] text-[12px] text-[#0a1128] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37]/50 transition-all shadow-sm font-medium"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-[#0a1128] dark:text-white ml-1">Email Address</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#d4af37] transition-colors">
                    <Mail size={14} strokeWidth={2.5} />
                  </div>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full pl-9 pr-3 py-2.5 bg-white dark:bg-[#121c33] border border-gray-200 dark:border-white/10 rounded-[8px] text-[12px] text-[#0a1128] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37]/50 transition-all shadow-sm font-medium"
                  />
                </div>
              </div>
            </div>

            {/* Phone Number */}
            <div className="space-y-1.5">
              <label className="text-[12px] font-bold text-[#0a1128] dark:text-white ml-1">Phone Number</label>
              <div className="relative group flex">
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                    className="flex items-center gap-1 px-2.5 py-2.5 bg-gray-50 dark:bg-[#0d1730] border border-gray-200 dark:border-white/10 border-r-0 rounded-l-[8px] text-[12px] font-semibold text-[#0a1128] dark:text-white hover:bg-gray-100 dark:hover:bg-[#121c33] transition-all min-w-[75px]"
                  >
                    <span className="text-sm">{selectedCountry.flag}</span>
                    <span>{selectedCountry.code}</span>
                    <ChevronDown size={10} className="text-gray-400" />
                  </button>
                  <AnimatePresence>
                    {showCountryDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: -5, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -5, scale: 0.97 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 bg-white dark:bg-[#121c33] border border-gray-200 dark:border-white/10 rounded-[8px] shadow-xl z-50 min-w-[160px] py-1 overflow-hidden"
                      >
                        {countryCodes.map((c) => (
                          <button
                            key={c.code}
                            type="button"
                            onClick={() => { setSelectedCountry(c); setShowCountryDropdown(false); }}
                            className={`w-full flex items-center gap-2 px-3 py-1.5 text-[12px] font-medium hover:bg-gray-50 dark:hover:bg-white/5 transition-colors ${
                              selectedCountry.code === c.code ? 'text-[#d4af37] bg-[#d4af37]/5' : 'text-[#0a1128] dark:text-white'
                            }`}
                          >
                            <span className="text-sm">{c.flag}</span>
                            <span>{c.country}</span>
                            <span className="text-gray-400 ml-auto">{c.code}</span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <input
                  type="tel"
                  placeholder="Enter your 10-digit mobile number"
                  className="flex-1 pl-3.5 pr-3 py-2.5 bg-white dark:bg-[#121c33] border border-gray-200 dark:border-white/10 rounded-r-[8px] text-[12px] text-[#0a1128] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37]/50 transition-all shadow-sm font-medium"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-[12px] font-bold text-[#0a1128] dark:text-white ml-1">Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#d4af37] transition-colors">
                  <Lock size={14} strokeWidth={2.5} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  className="w-full pl-9 pr-10 py-2.5 bg-white dark:bg-[#121c33] border border-gray-200 dark:border-white/10 rounded-[8px] text-[12px] text-[#0a1128] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37]/50 transition-all shadow-sm font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors outline-none"
                >
                  {showPassword ? <EyeOff size={14} strokeWidth={2.5} /> : <Eye size={14} strokeWidth={2.5} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-1.5">
              <label className="text-[12px] font-bold text-[#0a1128] dark:text-white ml-1">Confirm Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#d4af37] transition-colors">
                  <Lock size={14} strokeWidth={2.5} />
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  className="w-full pl-9 pr-10 py-2.5 bg-white dark:bg-[#121c33] border border-gray-200 dark:border-white/10 rounded-[8px] text-[12px] text-[#0a1128] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37]/50 transition-all shadow-sm font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors outline-none"
                >
                  {showConfirmPassword ? <EyeOff size={14} strokeWidth={2.5} /> : <Eye size={14} strokeWidth={2.5} />}
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="pt-0.5">
              <label className="flex items-start gap-2 cursor-pointer group">
                <div className="relative w-3.5 h-3.5 mt-0.5 rounded-[3px] border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#121c33] group-hover:border-[#d4af37] transition-colors flex items-center justify-center shrink-0">
                  <input
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={() => setAgreedToTerms(!agreedToTerms)}
                    className="opacity-0 absolute inset-0 cursor-pointer peer"
                  />
                  <div className="opacity-0 peer-checked:opacity-100 w-2 h-2 bg-[#d4af37] rounded-[1px] transition-opacity" />
                </div>
                <span className="text-[11px] font-medium text-gray-500 dark:text-gray-400 leading-relaxed">
                  I agree to the{' '}
                  <a href="#" className="font-bold text-[#d4af37] hover:text-[#b38728] transition-colors">Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" className="font-bold text-[#d4af37] hover:text-[#b38728] transition-colors">Privacy Policy</a>
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button className="w-full py-3 mt-2 bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] text-white rounded-[8px] font-bold text-[13px] shadow-[0_8px_20px_rgba(212,175,55,0.3)] hover:shadow-[0_10px_25px_rgba(212,175,55,0.4)] transition-all hover:-translate-y-0.5 relative overflow-hidden group flex items-center justify-center gap-2">
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              <span className="relative z-10">Create Account</span>
              <ArrowRight size={14} strokeWidth={2.5} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Divider */}
          <div className="relative mt-5 mb-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-[10px] font-bold uppercase tracking-widest">
              <span className="bg-white dark:bg-[#0b1b42] px-3 text-gray-400">Or sign up with</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-3 gap-2">
            {socialProviders.map((provider) => (
              <button
                key={provider.name}
                className="flex items-center justify-center gap-1.5 py-2.5 border border-gray-200 dark:border-white/10 rounded-[8px] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group shadow-sm text-[12px] font-bold text-[#0a1128] dark:text-white"
              >
                <span
                  className="w-3.5 h-3.5 group-hover:scale-110 transition-transform [&>svg]:w-full [&>svg]:h-full"
                  style={provider.name === 'Apple' ? { fill: 'currentColor' } : undefined}
                  dangerouslySetInnerHTML={{ __html: provider.svg }}
                />
                {provider.name}
              </button>
            ))}
          </div>

          {/* Already have account */}
          <p className="text-center mt-5 text-[12px] font-medium text-gray-500 dark:text-gray-400">
            Already have an account?{' '}
            <a href="#" onClick={(e) => { e.preventDefault(); window.location.hash = ''; window.history.pushState({}, '', window.location.pathname.replace('create-account', 'login')); window.location.reload(); }} className="font-bold text-[#d4af37] hover:text-[#b38728] transition-colors hover:underline underline-offset-4">
              Login
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
