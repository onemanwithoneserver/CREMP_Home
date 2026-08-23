import { useState } from "react";
import { Mail, Phone, Lock, Eye, EyeOff, Globe, ChevronDown, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import mobileBg from "../assets/mobileBg.jpg";

const countryCodes = [
  { code: "+91", flag: "IN", country: "India" },
  { code: "+1", flag: "US", country: "USA" },
  { code: "+44", flag: "GB", country: "UK" },
  { code: "+971", flag: "AE", country: "UAE" },
  { code: "+65", flag: "SG", country: "Singapore" },
];

export default function LoginMobile() {
  const [loginMethod, setLoginMethod] = useState<"email" | "phone">("phone");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (loginMethod === "email") {
      if (!formData.email.trim()) {
        newErrors.email = "Email address is required";
      } else if (!validateEmail(formData.email)) {
        newErrors.email = "Enter a valid email address";
      }
      if (!formData.password) newErrors.password = "Password is required";
    } else {
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
      else if (formData.phone.length < 10) newErrors.phone = "Enter a valid 10-digit number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans relative overflow-hidden transition-colors duration-300">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s]"
        style={{ backgroundImage: `url(${mobileBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-[#0a1128]/60 to-[#0a1128]/30 dark:from-[#0a1128] dark:via-[#0a1128]/80 dark:to-[#0a1128]/60" />
      <div className="absolute top-4 right-4 z-20">
        <button className="flex items-center gap-2 px-3 py-1.5 bg-white/80 dark:bg-[#121c33]/80 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[8px] text-[13px] font-medium text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-white/10 transition-all shadow-sm">
          <Globe size={14} />
          English
          <ChevronDown size={14} className="text-gray-400" />
        </button>
      </div>
      <div className="flex-1 flex items-center justify-center p-4 relative z-10 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          className="w-full max-w-[460px] bg-white/95 dark:bg-[#0b1b42]/95 backdrop-blur-2xl p-2 rounded-[4px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-white/60 dark:border-white/10 relative overflow-hidden"
        >
          <motion.div 
            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] bg-[length:200%_auto]"
            animate={{ backgroundPosition: ["0% center", "200% center"] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          />

          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center justify-center py-10 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 12, delay: 0.2 }}
                  className="w-16 h-16 bg-[#d4af37]/20 rounded-full flex items-center justify-center mb-5"
                >
                  <CheckCircle2 className="w-8 h-8 text-[#d4af37]" strokeWidth={2.5} />
                </motion.div>
                <h2 className="text-2xl font-semibold text-[#0a1128] dark:text-white mb-2">Welcome Back!</h2>
                <p className="text-[13px] text-gray-500 dark:text-gray-400 max-w-[80%] mb-8 leading-relaxed">
                  Successfully logged in. Taking you to your dashboard...
                </p>
                <Loader2 className="w-6 h-6 text-[#d4af37] animate-spin" />
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="mb-5 text-center">
                  <h1 className="text-[24px] font-semibold text-[#0a1128] dark:text-white mb-1">
                    Welcome Back!
                  </h1>
                  <p className="text-[12px] font-medium text-gray-500 dark:text-gray-400">
                    Sign in to your account to continue
                  </p>
                </div>

                <div className="w-[85%] mx-auto flex p-1 bg-gray-100 dark:bg-[#121c33] rounded-[4px] mb-6 border border-gray-200/50 dark:border-transparent">
                  <button
                    onClick={() => {
                      setLoginMethod("email");
                      setErrors({});
                    }}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 text-[12px] font-semibold rounded-[8px] transition-all ${
                      loginMethod === "email"
                        ? "bg-white dark:bg-[#0b1b42] text-[#0a1128] dark:text-white shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                    }`}
                  >
                    <Mail size={14} strokeWidth={2.5} />
                    Email & Password
                  </button>
                  <button
                    onClick={() => {
                      setLoginMethod("phone");
                      setErrors({});
                    }}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 text-[12px] font-semibold rounded-[8px] transition-all ${
                      loginMethod === "phone"
                        ? "bg-white dark:bg-[#0b1b42] text-[#0a1128] dark:text-white shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                    }`}
                  >
                    <Phone size={14} strokeWidth={2.5} />
                    Phone & OTP
                  </button>
                </div>

                <form className="w-[85%] mx-auto space-y-4" onSubmit={handleSubmit} noValidate>
                  <AnimatePresence mode="wait">
                    {loginMethod === "email" ? (
                      <motion.div
                        key="email-form"
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 15 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
                        <div className="space-y-1.5">
                          <label className="text-[12px] font-semibold text-[#0a1128] dark:text-white ml-1">
                            Email Address
                          </label>
                          <div className="relative group">
                            <div className={`absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-colors ${errors.email ? 'text-red-400' : 'text-gray-400 group-focus-within:text-[#d4af37]'}`}>
                              <Mail size={15} strokeWidth={2.5} />
                            </div>
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange("email", e.target.value)}
                              placeholder="Enter your email address"
                              className={`w-full pl-10 pr-4 py-2.5 bg-white dark:bg-[#121c33] border rounded-[8px] text-[12px] text-[#0a1128] dark:text-white placeholder-gray-400 focus:outline-none transition-all shadow-sm font-medium ${
                                errors.email 
                                  ? 'border-red-500/60 focus:border-red-500/60 focus:ring-2 focus:ring-red-500/20' 
                                  : 'border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37]/50'
                              }`}
                            />
                          </div>
                          <AnimatePresence>
                            {errors.email && (
                              <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-[11px] text-red-500 font-medium ml-1">
                                {errors.email}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[12px] font-semibold text-[#0a1128] dark:text-white ml-1">
                            Password
                          </label>
                          <div className="relative group">
                            <div className={`absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-colors ${errors.password ? 'text-red-400' : 'text-gray-400 group-focus-within:text-[#d4af37]'}`}>
                              <Lock size={15} strokeWidth={2.5} />
                            </div>
                            <input
                              type={showPassword ? "text" : "password"}
                              value={formData.password}
                              onChange={(e) => handleInputChange("password", e.target.value)}
                              placeholder="Enter your password"
                              className={`w-full pl-10 pr-10 py-2.5 bg-white dark:bg-[#121c33] border rounded-[8px] text-[12px] text-[#0a1128] dark:text-white placeholder-gray-400 focus:outline-none transition-all shadow-sm font-medium ${
                                errors.password 
                                  ? 'border-red-500/60 focus:border-red-500/60 focus:ring-2 focus:ring-red-500/20' 
                                  : 'border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37]/50'
                              }`}
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors outline-none"
                            >
                              {showPassword ? (
                                <EyeOff size={15} strokeWidth={2.5} />
                              ) : (
                                <Eye size={15} strokeWidth={2.5} />
                              )}
                            </button>
                          </div>
                          <AnimatePresence>
                            {errors.password && (
                              <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-[11px] text-red-500 font-medium ml-1">
                                {errors.password}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="phone-form"
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -15 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
                        <div className="space-y-1.5">
                          <label className="text-[12px] font-semibold text-[#0a1128] dark:text-white ml-1">
                            Phone Number
                          </label>
                          <div className="relative group flex">
                            <div className="relative">
                              <button
                                type="button"
                                onClick={() =>
                                  setShowCountryDropdown(!showCountryDropdown)
                                }
                                className={`flex items-center gap-1 px-2.5 py-2.5 bg-gray-50 dark:bg-[#0d1730] border border-r-0 rounded-l-[8px] text-[12px] font-semibold text-[#0a1128] dark:text-white hover:bg-gray-100 dark:hover:bg-[#121c33] transition-all min-w-[65px] ${errors.phone ? 'border-red-500/60' : 'border-gray-200 dark:border-white/10'}`}
                              >
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
                                        onClick={() => {
                                          setSelectedCountry(c);
                                          setShowCountryDropdown(false);
                                        }}
                                        className={`w-full flex items-center gap-2 px-3 py-1.5 text-[12px] font-medium hover:bg-gray-50 dark:hover:bg-white/5 transition-colors ${
                                          selectedCountry.code === c.code
                                            ? "text-[#d4af37] bg-[#d4af37]/5"
                                            : "text-[#0a1128] dark:text-white"
                                        }`}
                                      >
                                        <span className="font-semibold text-sm">{c.flag}</span>
                                        <span>{c.country}</span>
                                        <span className="text-gray-400 ml-auto">
                                          {c.code}
                                        </span>
                                      </button>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => handleInputChange("phone", e.target.value.replace(/\D/g, ''))}
                              maxLength={10}
                              placeholder="10-digit mobile number"
                              className={`flex-1 pl-3.5 pr-4 py-2.5 bg-white dark:bg-[#121c33] border rounded-r-[8px] text-[12px] text-[#0a1128] dark:text-white placeholder-gray-400 focus:outline-none transition-all shadow-sm font-medium ${
                                errors.phone 
                                  ? 'border-red-500/60 focus:border-red-500/60 focus:ring-2 focus:ring-red-500/20' 
                                  : 'border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37]/50'
                              }`}
                            />
                          </div>
                          <AnimatePresence>
                            {errors.phone && (
                              <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-[11px] text-red-500 font-medium ml-1">
                                {errors.phone}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex items-center justify-between pt-1">
                    <label className="flex items-center gap-1.5 cursor-pointer group">
                      <div className="relative w-3.5 h-3.5 rounded-[3px] border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#121c33] group-hover:border-[#d4af37] transition-colors flex items-center justify-center">
                        <input
                          type="checkbox"
                          className="opacity-0 absolute inset-0 cursor-pointer peer"
                        />
                        <div className="opacity-0 peer-checked:opacity-100 w-2 h-2 bg-[#d4af37] rounded-[1px] transition-opacity" />
                      </div>
                      <span className="text-[12px] font-semibold text-gray-600 dark:text-gray-400 group-hover:text-[#0a1128] dark:group-hover:text-white transition-colors">
                        Remember me
                      </span>
                    </label>
                    <a
                      href="#"
                      className="text-[12px] font-semibold text-[#d4af37] underline transition-colors underline-offset-4 hover:underline"
                    >
                      Forgot Password?
                    </a>
                  </div>

                  <motion.div className="flex justify-center pt-2">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-[85%] py-3 bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] text-white rounded-[8px] font-semibold text-[13px] shadow-[0_8px_20px_rgba(212,175,55,0.3)] hover:shadow-[0_12px_28px_rgba(212,175,55,0.45)] transition-all hover:-translate-y-0.5 disabled:opacity-80 disabled:hover:translate-y-0 relative overflow-hidden group flex items-center justify-center gap-2"
                    >
                      <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                      {isSubmitting ? (
                        <Loader2 className="w-4 h-4 animate-spin relative z-10" />
                      ) : (
                        <>
                          <span className="relative z-10">
                            {loginMethod === "phone" ? "Send OTP" : "Login"}
                          </span>
                          <ArrowRight
                            size={14}
                            strokeWidth={2.5}
                            className="relative z-10 group-hover:translate-x-1 transition-transform"
                          />
                        </>
                      )}
                    </button>
                  </motion.div>
                </form>

                <div className="relative mt-7 mb-6 w-[85%] mx-auto">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200 dark:border-white/10"></div>
                  </div>
                  <div className="relative flex justify-center text-[10px] font-semibold uppercase tracking-widest">
                    <span className="bg-white/95 dark:bg-[#0b1b42]/95 px-3 text-gray-400">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 w-[85%] mx-auto">
                  <button className="flex items-center justify-center gap-1.5 py-2.5 border border-gray-200 dark:border-white/10 rounded-[8px] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group shadow-sm text-[12px] font-semibold text-[#0a1128] dark:text-white">
                    <svg
                      className="w-3.5 h-3.5 group-hover:scale-110 transition-transform"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    Google
                  </button>
                  <button className="flex items-center justify-center gap-1.5 py-2.5 border border-gray-200 dark:border-white/10 rounded-[8px] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group shadow-sm text-[12px] font-semibold text-[#0a1128] dark:text-white">
                    <svg
                      className="w-3.5 h-3.5 group-hover:scale-110 transition-transform"
                      viewBox="0 0 21 21"
                    >
                      <path fill="#f25022" d="M1 1h9v9H1z" />
                      <path fill="#00a4ef" d="M1 11h9v9H1z" />
                      <path fill="#7fba00" d="M11 1h9v9h-9z" />
                      <path fill="#ffb900" d="M11 11h9v9h-9z" />
                    </svg>
                    Microsoft
                  </button>
                  <button className="flex items-center justify-center gap-1.5 py-2.5 border border-gray-200 dark:border-white/10 rounded-[8px] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group shadow-sm text-[12px] font-semibold text-[#0a1128] dark:text-white">
                    <svg
                      className="w-3.5 h-3.5 group-hover:scale-110 transition-transform fill-[#0a1128] dark:fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.19 2.31-.88 3.5-.84 1.54.07 2.85.74 3.69 1.95-3.04 1.77-2.53 5.92.51 7.15-.65 1.6-1.57 3.03-2.78 3.91zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                    </svg>
                    Apple
                  </button>
                </div>

                <p className="text-center mt-6 text-[12px] font-medium text-gray-500 dark:text-gray-400">
                  Don't have an account?{" "}
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      window.history.pushState(
                        {},
                        "",
                        window.location.pathname.replace("login", "create-account"),
                      );
                      window.location.reload();
                    }}
                    className="font-semibold text-[#d4af37] underline transition-colors hover:underline underline-offset-4"
                  >
                    Create Account
                  </a>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
