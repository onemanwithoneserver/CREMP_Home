import { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff, Globe, ChevronDown, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { socialProviders, countryCodes } from "./data";

export default function CreateAccountMobile() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
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
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (formData.phone.length < 10) newErrors.phone = "Enter a valid 10-digit number";
    
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8) newErrors.password = "Must be at least 8 characters";
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    if (!agreedToTerms) newErrors.terms = "Please agree to the Terms of Service";

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
    <div className="min-h-screen bg-gradient-to-br from-[#eef2f6] via-[#e8edf4] to-[#dfe5ee] dark:from-[#0a1128] dark:via-[#0d1730] dark:to-[#0a1128] flex flex-col font-sans relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-white/40 to-transparent dark:from-[#121c33]/30 pointer-events-none" />

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
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          className="w-full max-w-[460px] bg-white/95 dark:bg-[#0b1b42]/95 backdrop-blur-2xl p-6 rounded-[16px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-white/60 dark:border-white/10 relative overflow-hidden"
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
                <h2 className="text-2xl font-semibold text-[#0a1128] dark:text-white mb-2">Account Created!</h2>
                <p className="text-[13px] text-gray-500 dark:text-gray-400 max-w-[80%] mb-8 leading-relaxed">
                  Welcome to smarter real estate. Get ready to experience billionaire-grade insights.
                </p>
                <button
                  onClick={() => {
                    window.history.pushState({}, "", window.location.pathname.replace("create-account", "login"));
                    window.location.reload();
                  }}
                  className="w-[85%] py-3 bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] text-white rounded-[8px] font-semibold text-[13px] shadow-lg hover:-translate-y-0.5 transition-transform"
                >
                  Go to Login
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mb-5 text-center"
                >
                  <h1 className="text-[24px] font-semibold text-[#0a1128] dark:text-white mb-1">
                    Create Account
                  </h1>
                </motion.div>

                {/* Mobile form width is also ~85% inside the card so it fits nicely and centers */}
                <form className="w-[85%] mx-auto space-y-3.5" onSubmit={handleSubmit} noValidate>
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="space-y-3.5"
                  >
                    {/* Name - vertically stacked */}
                    <div className="space-y-1.5">
                      <label className="text-[12px] font-semibold text-[#0a1128] dark:text-white ml-1">
                        Full Name
                      </label>
                      <div className="relative group">
                        <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors ${errors.name ? 'text-red-400' : 'text-gray-400 group-focus-within:text-[#d4af37]'}`}>
                          <User size={14} strokeWidth={2.5} />
                        </div>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Full name"
                          className={`w-full pl-9 pr-3 py-2.5 bg-white dark:bg-[#121c33] border rounded-[8px] text-[12px] text-[#0a1128] dark:text-white placeholder-gray-400 focus:outline-none transition-all shadow-sm font-medium ${
                            errors.name 
                              ? 'border-red-500/60 focus:border-red-500/60 focus:ring-2 focus:ring-red-500/20' 
                              : 'border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37]/50'
                          }`}
                        />
                      </div>
                      <AnimatePresence>
                        {errors.name && (
                          <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-[11px] text-red-500 font-medium ml-1">
                            {errors.name}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Email - vertically stacked */}
                    <div className="space-y-1.5">
                      <label className="text-[12px] font-semibold text-[#0a1128] dark:text-white ml-1">
                        Email Address
                      </label>
                      <div className="relative group">
                        <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors ${errors.email ? 'text-red-400' : 'text-gray-400 group-focus-within:text-[#d4af37]'}`}>
                          <Mail size={14} strokeWidth={2.5} />
                        </div>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="Email address"
                          className={`w-full pl-9 pr-3 py-2.5 bg-white dark:bg-[#121c33] border rounded-[8px] text-[12px] text-[#0a1128] dark:text-white placeholder-gray-400 focus:outline-none transition-all shadow-sm font-medium ${
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
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-1.5"
                  >
                    <label className="text-[12px] font-semibold text-[#0a1128] dark:text-white ml-1">
                      Phone Number
                    </label>
                    <div className="relative group flex">
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                          className={`flex items-center gap-1.5 px-3 py-2.5 bg-gray-50 dark:bg-[#0d1730] border border-r-0 rounded-l-[8px] text-[12px] font-semibold text-[#0a1128] dark:text-white hover:bg-gray-100 dark:hover:bg-[#121c33] transition-all min-w-[65px] ${errors.phone ? 'border-red-500/60' : 'border-gray-200 dark:border-white/10'}`}
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
                        className={`flex-1 pl-3.5 pr-3 py-2.5 bg-white dark:bg-[#121c33] border rounded-r-[8px] text-[12px] text-[#0a1128] dark:text-white placeholder-gray-400 focus:outline-none transition-all shadow-sm font-medium ${
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
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="space-y-1.5"
                  >
                    <label className="text-[12px] font-semibold text-[#0a1128] dark:text-white ml-1">
                      Password
                    </label>
                    <div className="relative group">
                      <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors ${errors.password ? 'text-red-400' : 'text-gray-400 group-focus-within:text-[#d4af37]'}`}>
                        <Lock size={14} strokeWidth={2.5} />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        placeholder="Create a strong password"
                        className={`w-full pl-9 pr-10 py-2.5 bg-white dark:bg-[#121c33] border rounded-[8px] text-[12px] text-[#0a1128] dark:text-white placeholder-gray-400 focus:outline-none transition-all shadow-sm font-medium ${
                          errors.password 
                            ? 'border-red-500/60 focus:border-red-500/60 focus:ring-2 focus:ring-red-500/20' 
                            : 'border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37]/50'
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors outline-none"
                      >
                        {showPassword ? (
                          <EyeOff size={14} strokeWidth={2.5} />
                        ) : (
                          <Eye size={14} strokeWidth={2.5} />
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
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-1.5"
                  >
                    <label className="text-[12px] font-semibold text-[#0a1128] dark:text-white ml-1">
                      Confirm Password
                    </label>
                    <div className="relative group">
                      <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors ${errors.confirmPassword ? 'text-red-400' : 'text-gray-400 group-focus-within:text-[#d4af37]'}`}>
                        <Lock size={14} strokeWidth={2.5} />
                      </div>
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                        placeholder="Confirm your password"
                        className={`w-full pl-9 pr-10 py-2.5 bg-white dark:bg-[#121c33] border rounded-[8px] text-[12px] text-[#0a1128] dark:text-white placeholder-gray-400 focus:outline-none transition-all shadow-sm font-medium ${
                          errors.confirmPassword 
                            ? 'border-red-500/60 focus:border-red-500/60 focus:ring-2 focus:ring-red-500/20' 
                            : 'border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37]/50'
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors outline-none"
                      >
                        {showConfirmPassword ? (
                          <EyeOff size={14} strokeWidth={2.5} />
                        ) : (
                          <Eye size={14} strokeWidth={2.5} />
                        )}
                      </button>
                    </div>
                    <AnimatePresence>
                      {errors.confirmPassword && (
                        <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-[11px] text-red-500 font-medium ml-1">
                          {errors.confirmPassword}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="pt-1 pb-1"
                  >
                    <label className="flex items-start gap-2 cursor-pointer group">
                      <div className={`relative w-3.5 h-3.5 mt-0.5 rounded-[3px] border bg-white dark:bg-[#121c33] transition-colors flex items-center justify-center shrink-0 ${errors.terms ? 'border-red-500/60' : 'border-gray-300 dark:border-gray-600 group-hover:border-[#d4af37]'}`}>
                        <input
                          type="checkbox"
                          checked={agreedToTerms}
                          onChange={() => {
                            setAgreedToTerms(!agreedToTerms);
                            if (errors.terms) handleInputChange("terms", "");
                          }}
                          className="opacity-0 absolute inset-0 cursor-pointer peer"
                        />
                        <div className="opacity-0 peer-checked:opacity-100 w-2 h-2 bg-[#d4af37] rounded-[1px] transition-opacity" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[11px] font-medium text-gray-500 dark:text-gray-400 leading-relaxed">
                          I agree to the{" "}
                          <a href="#" className="font-semibold underline text-[#d4af37] transition-colors hover:underline underline-offset-2">Terms of Service</a>{" "}
                          and{" "}
                          <a href="#" className="font-semibold underline text-[#d4af37] transition-colors hover:underline underline-offset-2">Privacy Policy</a>
                        </span>
                        <AnimatePresence>
                          {errors.terms && (
                            <motion.span initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-[11px] text-red-500 font-medium">
                              {errors.terms}
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </div>
                    </label>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center pt-2"
                  >
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-[85%] py-3 bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] text-white rounded-[8px] font-semibold text-[13px] shadow-[0_8px_20px_rgba(212,175,55,0.3)] hover:shadow-[0_10px_25px_rgba(212,175,55,0.4)] transition-all hover:-translate-y-0.5 disabled:opacity-80 disabled:hover:translate-y-0 relative overflow-hidden group flex items-center justify-center gap-2"
                    >
                      <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                      {isSubmitting ? (
                        <Loader2 className="w-4 h-4 animate-spin relative z-10" />
                      ) : (
                        <>
                          <span className="relative z-10">Create Account</span>
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

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45 }}
                  className="relative mt-5 mb-5 w-[85%] mx-auto"
                >
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200 dark:border-white/10"></div>
                  </div>
                  <div className="relative flex justify-center text-[10px] font-semibold uppercase tracking-widest">
                    <span className="bg-white/95 dark:bg-[#0b1b42]/95 px-3 text-gray-400">
                      Or sign up with
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="grid grid-cols-3 gap-2 w-[85%] mx-auto"
                >
                  {socialProviders.map((provider) => (
                    <button
                      key={provider.name}
                      className="flex items-center justify-center gap-1.5 py-2.5 border border-gray-200 dark:border-white/10 rounded-[8px] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group shadow-sm text-[12px] font-semibold text-[#0a1128] dark:text-white"
                    >
                      <span
                        className="w-3.5 h-3.5 group-hover:scale-110 transition-transform [&>svg]:w-full [&>svg]:h-full"
                        style={
                          provider.name === "Apple"
                            ? { fill: "currentColor" }
                            : undefined
                        }
                        dangerouslySetInnerHTML={{ __html: provider.svg }}
                      />
                      {provider.name}
                    </button>
                  ))}
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.55 }}
                  className="text-center mt-5 mb-2 text-[12px] font-medium text-gray-500 dark:text-gray-400"
                >
                  Already have an account?{" "}
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.hash = "";
                      window.history.pushState(
                        {},
                        "",
                        window.location.pathname.replace("create-account", "login"),
                      );
                      window.location.reload();
                    }}
                    className="font-semibold text-[#d4af37] underline transition-colors hover:underline underline-offset-4"
                  >
                    Login
                  </a>
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
