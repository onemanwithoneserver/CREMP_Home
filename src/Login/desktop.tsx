import { useState } from 'react';
import { Mail, Phone, Lock, Eye, EyeOff, Globe, ChevronDown, Shield, Clock, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBg from '../assets/commercial_building_hero.png';

export default function LoginDesktop() {
  const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex font-sans relative overflow-hidden bg-white dark:bg-[#0a1128] transition-colors duration-300">
      
      {/* Left side: Hero Image & Text */}
      <div className="hidden lg:flex w-[55%] xl:w-[60%] relative flex-col justify-between p-12 xl:p-16 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] hover:scale-105"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Gradient Overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1128]/90 via-[#0a1128]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/90 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-xl pt-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-block mb-8"
          >
            <span className="text-[13px] font-bold text-[#d4af37] tracking-[0.2em] uppercase">Welcome Back</span>
            <div className="h-0.5 w-12 bg-gradient-to-r from-[#bf953f] to-[#b38728] mt-2 rounded-full" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl xl:text-5xl font-extrabold text-white mb-6 leading-[1.15]"
          >
            India's Most Intelligent Real Estate Platform
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg xl:text-xl text-gray-300 font-medium leading-relaxed max-w-md"
          >
            Real-time insights. Smarter decisions.<br/>Billionaire-grade experience.
          </motion.p>
        </div>

        {/* Bottom Glass Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
          className="relative z-10 mt-auto max-w-md"
        >
          <div className="glass border border-white/20 p-6 rounded-2xl flex gap-5 items-start bg-black/40 backdrop-blur-md shadow-2xl hover:bg-black/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#bf953f] via-[#d4af37] to-[#b38728] flex items-center justify-center shrink-0 shadow-lg">
              <Shield className="text-white" size={24} strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-1.5">Enterprise Grade Security</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Your data is protected with bank-level encryption and advanced security protocols.</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right side: Login Form */}
      <div className="w-full lg:w-[45%] xl:w-[40%] flex flex-col relative z-20 shadow-[-20px_0_50px_rgba(0,0,0,0.1)] dark:shadow-none dark:border-l border-white/5 bg-white dark:bg-[#0b1b42]">
        
        {/* Language Selector */}
        <div className="absolute top-6 right-6 z-30">
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#121c33] border border-gray-200 dark:border-white/10 rounded-[8px] text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 transition-all shadow-sm">
            <Globe size={16} />
            English
            <ChevronDown size={14} className="text-gray-400" />
          </button>
        </div>

        {/* Form Container */}
        <div className="flex-1 flex flex-col justify-center px-8 sm:px-16 lg:px-12 xl:px-20 pt-20 pb-10 overflow-y-auto">
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, type: 'spring' }}
            className="w-full max-w-[420px] mx-auto"
          >
            {/* Segmented Control */}
            <div className="flex p-1 bg-gray-100 dark:bg-[#121c33] rounded-[10px] mb-8 border border-gray-200/50 dark:border-transparent">
              <button
                onClick={() => setLoginMethod('email')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-[13px] font-bold rounded-[8px] transition-all ${
                  loginMethod === 'email' 
                    ? 'bg-white dark:bg-[#0b1b42] text-[#0a1128] dark:text-white shadow-[0_2px_8px_rgba(0,0,0,0.06)]' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                }`}
              >
                <Mail size={16} strokeWidth={2.5} />
                Email & Password
              </button>
              <button
                onClick={() => setLoginMethod('phone')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-[13px] font-bold rounded-[8px] transition-all ${
                  loginMethod === 'phone' 
                    ? 'bg-white dark:bg-[#0b1b42] text-[#0a1128] dark:text-white shadow-[0_2px_8px_rgba(0,0,0,0.06)]' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                }`}
              >
                <Phone size={16} strokeWidth={2.5} />
                Phone & OTP
              </button>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              {loginMethod === 'email' ? (
                <>
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-[#0a1128] dark:text-white ml-1">Email Address</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#d4af37] transition-colors">
                        <Mail size={18} strokeWidth={2.5} />
                      </div>
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full pl-11 pr-4 py-3.5 bg-white dark:bg-[#121c33] border border-gray-200 dark:border-white/10 rounded-[8px] text-[14px] text-[#0a1128] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37]/50 transition-all shadow-sm font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-[#0a1128] dark:text-white ml-1">Password</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#d4af37] transition-colors">
                        <Lock size={18} strokeWidth={2.5} />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="w-full pl-11 pr-11 py-3.5 bg-white dark:bg-[#121c33] border border-gray-200 dark:border-white/10 rounded-[8px] text-[14px] text-[#0a1128] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37]/50 transition-all shadow-sm font-medium"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors outline-none"
                      >
                        {showPassword ? <EyeOff size={18} strokeWidth={2.5} /> : <Eye size={18} strokeWidth={2.5} />}
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-[#0a1128] dark:text-white ml-1">Phone Number</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#d4af37] transition-colors">
                        <Phone size={18} strokeWidth={2.5} />
                      </div>
                      <input
                        type="tel"
                        placeholder="Enter your phone number"
                        className="w-full pl-11 pr-4 py-3.5 bg-white dark:bg-[#121c33] border border-gray-200 dark:border-white/10 rounded-[8px] text-[14px] text-[#0a1128] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37]/50 transition-all shadow-sm font-medium"
                      />
                    </div>
                  </div>
                </>
              )}

              <div className="flex items-center justify-between pt-2">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className="relative w-4 h-4 rounded-[4px] border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#121c33] group-hover:border-[#d4af37] transition-colors flex items-center justify-center">
                    <input type="checkbox" className="opacity-0 absolute inset-0 cursor-pointer peer" />
                    <div className="opacity-0 peer-checked:opacity-100 w-2.5 h-2.5 bg-[#d4af37] rounded-[2px] transition-opacity" />
                  </div>
                  <span className="text-[13px] font-semibold text-gray-600 dark:text-gray-400 group-hover:text-[#0a1128] dark:group-hover:text-white transition-colors">Remember me</span>
                </label>
                <a href="#" className="text-[13px] font-bold text-[#d4af37] hover:text-[#b38728] transition-colors underline-offset-4 hover:underline">
                  Forgot Password?
                </a>
              </div>

              <button className="w-full py-4 mt-4 bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] text-white rounded-[8px] font-bold text-[15px] shadow-[0_8px_20px_rgba(212,175,55,0.3)] hover:shadow-[0_10px_25px_rgba(212,175,55,0.4)] transition-all hover:-translate-y-0.5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                <span className="relative z-10">Login</span>
              </button>
            </form>

            <div className="relative mt-8 mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-[11px] font-bold uppercase tracking-widest">
                <span className="bg-white dark:bg-[#0b1b42] px-4 text-gray-400">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 dark:border-white/10 rounded-[8px] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group shadow-sm text-[13px] font-bold text-[#0a1128] dark:text-white">
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google
              </button>
              <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 dark:border-white/10 rounded-[8px] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group shadow-sm text-[13px] font-bold text-[#0a1128] dark:text-white">
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" viewBox="0 0 21 21">
                  <path fill="#f25022" d="M1 1h9v9H1z"/>
                  <path fill="#00a4ef" d="M1 11h9v9H1z"/>
                  <path fill="#7fba00" d="M11 1h9v9h-9z"/>
                  <path fill="#ffb900" d="M11 11h9v9h-9z"/>
                </svg>
                Microsoft
              </button>
              <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 dark:border-white/10 rounded-[8px] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group shadow-sm text-[13px] font-bold text-[#0a1128] dark:text-white">
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform fill-[#0a1128] dark:fill-white" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.19 2.31-.88 3.5-.84 1.54.07 2.85.74 3.69 1.95-3.04 1.77-2.53 5.92.51 7.15-.65 1.6-1.57 3.03-2.78 3.91zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                Apple
              </button>
            </div>

            <p className="text-center mt-10 text-[13px] font-medium text-gray-500 dark:text-gray-400">
              Don't have an account?{' '}
              <a href="#" className="font-bold text-[#d4af37] hover:text-[#b38728] transition-colors hover:underline underline-offset-4">
                Create Account
              </a>
            </p>
          </motion.div>
        </div>

        {/* Footer Badges */}
        <div className="mt-auto bg-gray-50 dark:bg-[#121c33]/50 border-t border-gray-100 dark:border-white/5 p-4 sm:p-6 flex justify-center gap-6 sm:gap-12">
          <div className="flex flex-col items-center text-center gap-2 group cursor-default">
            <Shield className="text-[#64748b] dark:text-gray-400 group-hover:text-[#d4af37] transition-colors" size={20} strokeWidth={1.5} />
            <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 uppercase tracking-wider leading-tight transition-colors">Bank-Level<br/>Security</span>
          </div>
          <div className="w-px bg-gray-200 dark:bg-white/10" />
          <div className="flex flex-col items-center text-center gap-2 group cursor-default">
            <Clock className="text-[#64748b] dark:text-gray-400 group-hover:text-[#d4af37] transition-colors" size={20} strokeWidth={1.5} />
            <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 uppercase tracking-wider leading-tight transition-colors">99.9%<br/>Uptime</span>
          </div>
          <div className="w-px bg-gray-200 dark:bg-white/10" />
          <div className="flex flex-col items-center text-center gap-2 group cursor-default">
            <Star className="text-[#64748b] dark:text-gray-400 group-hover:text-[#d4af37] transition-colors" size={20} strokeWidth={1.5} />
            <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 uppercase tracking-wider leading-tight transition-colors">Trusted by Top<br/>Developers</span>
          </div>
        </div>
      </div>
    </div>
  );
}
