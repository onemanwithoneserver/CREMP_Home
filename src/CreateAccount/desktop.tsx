import { useState } from 'react';
import { User, Mail, Phone, Lock, Eye, EyeOff, Globe, ChevronDown, Shield, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import heroBg from '../assets/LoginandCreateBG.png';
import { heroFeatures, socialProviders, footerBadges, countryCodes } from './data';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 260, damping: 22 },
  },
};

export default function CreateAccountDesktop() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  return (
    <div className="min-h-screen flex font-sans relative overflow-hidden bg-white dark:bg-[#0a1128] transition-colors duration-300">
      
      {/* Left side: Create Account Form */}
      <div className="w-full lg:w-[45%] xl:w-[40%] flex flex-col relative z-20 shadow-[20px_0_50px_rgba(0,0,0,0.1)] dark:shadow-none dark:border-r border-white/5 bg-white dark:bg-[#0b1b42]">
        
        {/* Language Selector */}
        <div className="absolute top-6 right-6 z-30">
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#121c33] border border-gray-200 dark:border-white/10 rounded-[8px] text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 transition-all shadow-sm">
            <Globe size={16} />
            English
            <ChevronDown size={14} className="text-gray-400" />
          </button>
        </div>

        {/* Form Container */}
        <div className="flex-1 flex flex-col justify-center px-8 sm:px-16 lg:px-10 xl:px-16 pt-20 pb-10 overflow-y-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, type: 'spring' }}
            className="w-full max-w-[460px] mx-auto"
          >
            {/* Header */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-7">
              <h1 className="text-[28px] font-extrabold text-[#0a1128] dark:text-white mb-2">Create Account</h1>
              <p className="text-[14px] font-medium text-gray-500 dark:text-gray-400">Join thousands of professionals making smarter real estate decisions.</p>
            </motion.div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              {/* Full Name + Email side by side */}
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-[#0a1128] dark:text-white ml-1">Full Name</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#d4af37] transition-colors">
                      <User size={16} strokeWidth={2.5} />
                    </div>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full pl-10 pr-4 py-3 bg-white dark:bg-[#121c33] border border-gray-200 dark:border-white/10 rounded-[8px] text-[13px] text-[#0a1128] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37]/50 transition-all shadow-sm font-medium"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-[#0a1128] dark:text-white ml-1">Email Address</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#d4af37] transition-colors">
                      <Mail size={16} strokeWidth={2.5} />
                    </div>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full pl-10 pr-4 py-3 bg-white dark:bg-[#121c33] border border-gray-200 dark:border-white/10 rounded-[8px] text-[13px] text-[#0a1128] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37]/50 transition-all shadow-sm font-medium"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Phone Number */}
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-1.5">
                <label className="text-[13px] font-bold text-[#0a1128] dark:text-white ml-1">Phone Number</label>
                <div className="relative group flex">
                  {/* Country Code Dropdown */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                      className="flex items-center gap-1.5 px-3 py-3 bg-gray-50 dark:bg-[#0d1730] border border-gray-200 dark:border-white/10 border-r-0 rounded-l-[8px] text-[13px] font-semibold text-[#0a1128] dark:text-white hover:bg-gray-100 dark:hover:bg-[#121c33] transition-all min-w-[85px]"
                    >
                      <span className="text-base">{selectedCountry.flag}</span>
                      <span>{selectedCountry.code}</span>
                      <ChevronDown size={12} className="text-gray-400" />
                    </button>
                    <AnimatePresence>
                      {showCountryDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: -5, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -5, scale: 0.97 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-1 bg-white dark:bg-[#121c33] border border-gray-200 dark:border-white/10 rounded-[8px] shadow-xl z-50 min-w-[180px] py-1 overflow-hidden"
                        >
                          {countryCodes.map((c) => (
                            <button
                              key={c.code}
                              type="button"
                              onClick={() => { setSelectedCountry(c); setShowCountryDropdown(false); }}
                              className={`w-full flex items-center gap-2.5 px-3 py-2 text-[13px] font-medium hover:bg-gray-50 dark:hover:bg-white/5 transition-colors ${
                                selectedCountry.code === c.code ? 'text-[#d4af37] bg-[#d4af37]/5' : 'text-[#0a1128] dark:text-white'
                              }`}
                            >
                              <span className="text-base">{c.flag}</span>
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
                    className="flex-1 pl-4 pr-4 py-3 bg-white dark:bg-[#121c33] border border-gray-200 dark:border-white/10 rounded-r-[8px] text-[13px] text-[#0a1128] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37]/50 transition-all shadow-sm font-medium"
                  />
                </div>
              </motion.div>

              {/* Password */}
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="space-y-1.5">
                <label className="text-[13px] font-bold text-[#0a1128] dark:text-white ml-1">Password</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#d4af37] transition-colors">
                    <Lock size={16} strokeWidth={2.5} />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    className="w-full pl-10 pr-11 py-3 bg-white dark:bg-[#121c33] border border-gray-200 dark:border-white/10 rounded-[8px] text-[13px] text-[#0a1128] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37]/50 transition-all shadow-sm font-medium"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors outline-none"
                  >
                    {showPassword ? <EyeOff size={16} strokeWidth={2.5} /> : <Eye size={16} strokeWidth={2.5} />}
                  </button>
                </div>
              </motion.div>

              {/* Confirm Password */}
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="space-y-1.5">
                <label className="text-[13px] font-bold text-[#0a1128] dark:text-white ml-1">Confirm Password</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#d4af37] transition-colors">
                    <Lock size={16} strokeWidth={2.5} />
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    className="w-full pl-10 pr-11 py-3 bg-white dark:bg-[#121c33] border border-gray-200 dark:border-white/10 rounded-[8px] text-[13px] text-[#0a1128] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37]/50 transition-all shadow-sm font-medium"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors outline-none"
                  >
                    {showConfirmPassword ? <EyeOff size={16} strokeWidth={2.5} /> : <Eye size={16} strokeWidth={2.5} />}
                  </button>
                </div>
              </motion.div>

              {/* Terms */}
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer group">
                  <div className="relative w-4 h-4 mt-0.5 rounded-[4px] border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#121c33] group-hover:border-[#d4af37] transition-colors flex items-center justify-center shrink-0">
                    <input
                      type="checkbox"
                      checked={agreedToTerms}
                      onChange={() => setAgreedToTerms(!agreedToTerms)}
                      className="opacity-0 absolute inset-0 cursor-pointer peer"
                    />
                    <div className="opacity-0 peer-checked:opacity-100 w-2.5 h-2.5 bg-[#d4af37] rounded-[2px] transition-opacity" />
                  </div>
                  <span className="text-[12px] font-medium text-gray-500 dark:text-gray-400 leading-relaxed">
                    I agree to the{' '}
                    <a href="#" className="font-bold text-[#d4af37] hover:text-[#b38728] transition-colors hover:underline underline-offset-2">Terms of Service</a>
                    {' '}and{' '}
                    <a href="#" className="font-bold text-[#d4af37] hover:text-[#b38728] transition-colors hover:underline underline-offset-2">Privacy Policy</a>
                  </span>
                </label>
              </motion.div>

              {/* Submit Button */}
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <button className="w-full py-3.5 mt-2 bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] text-white rounded-[8px] font-bold text-[14px] shadow-[0_8px_20px_rgba(212,175,55,0.3)] hover:shadow-[0_12px_28px_rgba(212,175,55,0.45)] transition-all hover:-translate-y-0.5 relative overflow-hidden group flex items-center justify-center gap-2">
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                  <span className="relative z-10">Create Account</span>
                  <ArrowRight size={16} strokeWidth={2.5} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </form>

            {/* Divider */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="relative mt-6 mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-[11px] font-bold uppercase tracking-widest">
                <span className="bg-white dark:bg-[#0b1b42] px-4 text-gray-400">Or sign up with</span>
              </div>
            </motion.div>

            {/* Social Login */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="grid grid-cols-3 gap-3">
              {socialProviders.map((provider) => (
                <button
                  key={provider.name}
                  className="flex items-center justify-center gap-2 py-2.5 border border-gray-200 dark:border-white/10 rounded-[8px] hover:bg-gray-50 dark:hover:bg-white/5 transition-all group shadow-sm text-[13px] font-bold text-[#0a1128] dark:text-white hover:shadow-md hover:-translate-y-0.5"
                >
                  <span
                    className="w-4 h-4 group-hover:scale-110 transition-transform [&>svg]:w-full [&>svg]:h-full"
                    style={provider.name === 'Apple' ? { fill: 'currentColor' } : undefined}
                    dangerouslySetInnerHTML={{ __html: provider.svg }}
                  />
                  {provider.name}
                </button>
              ))}
            </motion.div>

            {/* Already have account */}
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }} className="text-center mt-8 text-[13px] font-medium text-gray-500 dark:text-gray-400">
              Already have an account?{' '}
              <a href="#" onClick={(e) => { e.preventDefault(); window.location.hash = ''; window.history.pushState({}, '', window.location.pathname.replace('create-account', 'login')); window.location.reload(); }} className="font-bold text-[#d4af37] hover:text-[#b38728] transition-colors hover:underline underline-offset-4">
                Login
              </a>
            </motion.p>
          </motion.div>
        </div>

        {/* Footer Badges */}
        <div className="mt-auto bg-gray-50 dark:bg-[#121c33]/50 border-t border-gray-100 dark:border-white/5 p-4 sm:p-5 flex justify-center gap-6 sm:gap-12">
          {footerBadges.map((badge, i) => (
            <div key={i} className="flex items-center gap-3">
              {i > 0 && <div className="w-px h-8 bg-gray-200 dark:bg-white/10 -ml-3 sm:-ml-6 mr-0 sm:mr-0" />}
              <div className="flex flex-col items-center text-center gap-1.5 group cursor-default">
                <badge.icon className="text-[#64748b] dark:text-gray-400 group-hover:text-[#d4af37] transition-colors" size={18} strokeWidth={1.5} />
                <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 uppercase tracking-wider leading-tight transition-colors">
                  {badge.label}<br/>{badge.sublabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right side: Hero Image & Text */}
      <div className="hidden lg:flex w-[55%] xl:w-[60%] relative flex-col justify-between p-12 xl:p-16 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] hover:scale-105"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#0a1128]/90 via-[#0a1128]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/90 via-transparent to-transparent" />

        {/* Language Selector (hero side) */}
        <div className="relative z-10 flex justify-end">
          <button className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-[8px] text-sm font-medium text-white hover:bg-white/20 transition-all shadow-sm">
            <Globe size={16} />
            English
            <ChevronDown size={14} className="text-white/60" />
          </button>
        </div>

        {/* Hero Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-xl"
        >
          <motion.div variants={item} className="inline-block mb-6">
            <span className="text-[12px] font-bold text-[#d4af37] tracking-[0.2em] uppercase">Welcome to Smarter Real Estate</span>
            <div className="h-0.5 w-14 bg-gradient-to-r from-[#bf953f] to-[#b38728] mt-2 rounded-full" />
          </motion.div>
          <motion.h1 variants={item} className="text-4xl xl:text-5xl font-extrabold text-white mb-5 leading-[1.15]">
            India's Most Intelligent{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f0d060] to-[#d4af37]">Real Estate</span>{' '}
            Platform
          </motion.h1>
          <motion.p variants={item} className="text-lg text-gray-300 font-medium leading-relaxed max-w-md mb-10">
            Real-time insights. Smarter decisions.<br/>Billionaire-grade experience.
          </motion.p>

          {/* Feature Grid */}
          <motion.div variants={item} className="grid grid-cols-2 gap-4 max-w-md">
            {heroFeatures.map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03, y: -2 }}
                className="flex items-center gap-3 group cursor-default"
              >
                <div className="w-9 h-9 rounded-lg bg-[#d4af37]/15 flex items-center justify-center shrink-0 group-hover:bg-[#d4af37]/25 transition-colors">
                  <feature.icon size={18} className="text-[#d4af37]" strokeWidth={2} />
                </div>
                <span className="text-[13px] font-semibold text-white/90 group-hover:text-white transition-colors">{feature.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom Glass Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
          className="relative z-10 mt-auto max-w-md"
        >
          <div className="glass border border-white/20 p-5 rounded-2xl flex gap-4 items-start bg-black/40 backdrop-blur-md shadow-2xl hover:bg-black/50 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#bf953f] via-[#d4af37] to-[#b38728] flex items-center justify-center shrink-0 shadow-lg">
              <Shield className="text-white" size={22} strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-white font-bold text-base mb-1">Enterprise Grade Security</h3>
              <p className="text-gray-300 text-[13px] leading-relaxed">Your data is protected with bank-level encryption and advanced security protocols.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
