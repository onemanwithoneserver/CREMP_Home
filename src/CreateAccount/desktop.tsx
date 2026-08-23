import { useState } from "react";
import { User, Mail,Lock,Eye,EyeOff,Globe,ChevronDown,Shield,ArrowRight,CheckCircle2,Loader2,Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import heroBg from "../assets/LoginandCreateBG.png";
import {
  heroFeatures,
  socialProviders,
  countryCodes,
} from "./data";

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
    transition: { type: "spring" as const, stiffness: 260, damping: 22 },
  },
};

const featureColors = ["#F97316", "#0EA5E9", "#8B5CF6", "#10B981"];

export default function CreateAccountDesktop() {
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
    <div className="h-screen w-full relative overflow-hidden font-sans">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] hover:scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-l from-[#0a1128]/85 via-[#0a1128]/40 to-[#0a1128]/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/80 via-transparent to-[#0a1128]/30" />
      <div className="absolute top-6 right-8 z-30">
        <button className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-[8px] text-sm font-semibold text-white hover:bg-white/20 transition-all shadow-sm">
          <Globe size={16} />
          English
          <ChevronDown size={14} className="text-white/60" />
        </button>
      </div>
      <div className="absolute inset-0 flex items-center justify-end z-10 pointer-events-none">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-xl pr-10 xl:pr-16 2xl:pr-20 pointer-events-auto"
        >
          <motion.div variants={item} className="inline-block mb-5">
            <span className="text-[12px] font-semibold text-[#d4af37] tracking-[0.2em] uppercase">
              Welcome to Smarter Real Estate
            </span>
            <div className="h-0.5 w-14 bg-gradient-to-r from-[#bf953f] to-[#b38728] mt-2 rounded-full" />
          </motion.div>
          <motion.h1
            variants={item}
            className="text-4xl xl:text-5xl font-semibold text-white mb-4 leading-[1.15]"
          >
            India's Most Intelligent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f0d060] to-[#d4af37]">
              Real Estate
            </span>{" "}
            Platform
          </motion.h1>
          <motion.p
            variants={item}
            className="text-lg text-gray-300 font-medium leading-relaxed max-w-md mb-8"
          >
            Real-time insights. Smarter decisions.
            <br />
            Billionaire-grade experience.
          </motion.p>
          <motion.div
            variants={item}
            className="grid grid-cols-2 gap-4 max-w-md mb-8"
          >
            {heroFeatures.map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03, y: -2 }}
                className="flex items-center gap-3 group cursor-default"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors"
                  style={{ backgroundColor: featureColors[i % featureColors.length] }}
                >
                  <feature.icon
                    size={18}
                    className="text-white"
                    strokeWidth={2}
                  />
                </div>
                <span className="text-[13px] font-semibold text-white/90 group-hover:text-white transition-colors">
                  {feature.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={item} className="max-w-md">
            <div className="border border-white/20 p-4 rounded-2xl flex gap-3 items-start bg-black/40 backdrop-blur-md shadow-2xl hover:bg-black/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#bf953f] via-[#d4af37] to-[#b38728] flex items-center justify-center shrink-0 shadow-lg">
                <Shield className="text-white" size={20} strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm mb-0.5">
                  Enterprise Grade Security
                </h3>
                <p className="text-gray-300 text-[12px] leading-relaxed">
                  Your data is protected with bank-level encryption and advanced
                  security protocols.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute left-6 xl:left-10 2xl:left-16 top-1/2 -translate-y-1/2 z-20 w-full max-w-[460px]">
        <motion.div
          initial={{ opacity: 0, x: -40, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 180, damping: 22 }}
          className="bg-white/95 dark:bg-[#0b1b42]/92 backdrop-blur-2xl rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35),0_0_40px_rgba(0,0,0,0.15)] dark:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.6),0_0_50px_rgba(0,0,0,0.3)] border border-white/30 dark:border-white/10 relative overflow-hidden"
        >
          <div 
            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] bg-[length:200%_auto]"
            style={{ animation: "shimmer 3s linear infinite" }}
          />
          <div className="px-6 pt-6 pb-4">
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
                    className="w-[75%] py-3 bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] text-white rounded-[8px] font-semibold text-[13px] shadow-lg hover:-translate-y-0.5 transition-transform"
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
                    className="mb-3 text-center"
                  >
                    <h1 className="text-[24px] font-semibold text-[#0a1128] dark:text-white mb-1">
                      Create Account
                    </h1>
                  </motion.div>
                  <form className="w-[85%] mx-auto space-y-2.5" onSubmit={handleSubmit} noValidate>
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                      className="space-y-2.5"
                    >
                      <div className="space-y-1.5">
                        <label className="text-[12px] font-semibold text-[#0a1128] dark:text-white ml-1">
                          Full Name
                        </label>
                        <div className="relative group">
                          <div className={`absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-colors ${errors.name ? 'text-red-400' : 'text-gray-400 group-focus-within:text-[#d4af37]'}`}>
                            <User size={15} strokeWidth={2.5} />
                          </div>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            placeholder="Enter your full name"
                            className={`w-full pl-10 pr-3 py-2 bg-white dark:bg-[#121c33] border rounded-[8px] text-[12px] text-[#0a1128] dark:text-white placeholder-gray-400 focus:outline-none transition-all shadow-sm font-medium ${
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
                            className={`w-full pl-10 pr-3 py-2 bg-white dark:bg-[#121c33] border rounded-[8px] text-[12px] text-[#0a1128] dark:text-white placeholder-gray-400 focus:outline-none transition-all shadow-sm font-medium ${
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
                            className={`flex items-center gap-1.5 px-3 py-2 bg-gray-50 dark:bg-[#0d1730] border border-r-0 rounded-l-[8px] text-[12px] font-semibold text-[#0a1128] dark:text-white hover:bg-gray-100 dark:hover:bg-[#121c33] transition-all min-w-[65px] ${errors.phone ? 'border-red-500/60' : 'border-gray-200 dark:border-white/10'}`}
                          >
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
                                    onClick={() => {
                                      setSelectedCountry(c);
                                      setShowCountryDropdown(false);
                                    }}
                                    className={`w-full flex items-center gap-2.5 px-3 py-2 text-[12px] font-medium hover:bg-gray-50 dark:hover:bg-white/5 transition-colors ${
                                      selectedCountry.code === c.code
                                        ? "text-[#d4af37] bg-[#d4af37]/5"
                                        : "text-[#0a1128] dark:text-white"
                                    }`}
                                  >
                                    <span className="font-semibold">{c.flag}</span>
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
                          className={`flex-1 pl-3 pr-3 py-2 bg-white dark:bg-[#121c33] border rounded-r-[8px] text-[12px] text-[#0a1128] dark:text-white placeholder-gray-400 focus:outline-none transition-all shadow-sm font-medium ${
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
                        <div className={`absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-colors ${errors.password ? 'text-red-400' : 'text-gray-400 group-focus-within:text-[#d4af37]'}`}>
                          <Lock size={15} strokeWidth={2.5} />
                        </div>
                        <input
                          type={showPassword ? "text" : "password"}
                          value={formData.password}
                          onChange={(e) => handleInputChange("password", e.target.value)}
                          placeholder="Create a strong password"
                          className={`w-full pl-10 pr-10 py-2 bg-white dark:bg-[#121c33] border rounded-[8px] text-[12px] text-[#0a1128] dark:text-white placeholder-gray-400 focus:outline-none transition-all shadow-sm font-medium ${
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
                        <div className={`absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-colors ${errors.confirmPassword ? 'text-red-400' : 'text-gray-400 group-focus-within:text-[#d4af37]'}`}>
                          <Lock size={15} strokeWidth={2.5} />
                        </div>
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          value={formData.confirmPassword}
                          onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                          placeholder="Confirm your password"
                          className={`w-full pl-10 pr-10 py-2 bg-white dark:bg-[#121c33] border rounded-[8px] text-[12px] text-[#0a1128] dark:text-white placeholder-gray-400 focus:outline-none transition-all shadow-sm font-medium ${
                            errors.confirmPassword 
                              ? 'border-red-500/60 focus:border-red-500/60 focus:ring-2 focus:ring-red-500/20' 
                              : 'border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37]/50'
                          }`}
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors outline-none"
                        >
                          {showConfirmPassword ? (
                            <EyeOff size={15} strokeWidth={2.5} />
                          ) : (
                            <Eye size={15} strokeWidth={2.5} />
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
                      <label className="flex items-start gap-2.5 cursor-pointer group">
                        <div className={`relative w-4 h-4 mt-0.5 rounded-[4px] border bg-white dark:bg-[#121c33] transition-colors flex items-center justify-center shrink-0 ${errors.terms ? 'border-red-500/60' : 'border-gray-300 dark:border-gray-600 group-hover:border-[#d4af37]'}`}>
                          <input
                            type="checkbox"
                            checked={agreedToTerms}
                            onChange={() => {
                              setAgreedToTerms(!agreedToTerms);
                              if (errors.terms) handleInputChange("terms", "");
                            }}
                            className="opacity-0 absolute inset-0 cursor-pointer peer"
                          />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100 bg-[#d4af37] rounded-[3px] transition-all">
                            <Check size={12} strokeWidth={4} className="text-white" />
                          </div>
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
                        className="w-[85%] py-2 bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] text-white rounded-[8px] font-semibold text-[13px] shadow-[0_8px_20px_rgba(212,175,55,0.3)] hover:shadow-[0_12px_28px_rgba(212,175,55,0.45)] transition-all hover:-translate-y-0.5 disabled:opacity-80 disabled:hover:translate-y-0 relative overflow-hidden group flex items-center justify-center gap-2"
                      >
                        <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                        {isSubmitting ? (
                          <Loader2 className="w-4 h-4 animate-spin relative z-10" />
                        ) : (
                          <>
                            <span className="relative z-10">Create Account</span>
                            <ArrowRight
                              size={15}
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
                    className="relative mt-4 mb-4 w-[85%] mx-auto"
                  >
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200 dark:border-white/10"></div>
                    </div>
                    <div className="relative flex justify-center text-[10px] font-semibold uppercase tracking-widest">
                      <span className="bg-white/95 dark:bg-[#0b1b42]/92 px-4 text-gray-400">
                        Or sign up with
                      </span>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="grid grid-cols-3 gap-3 w-[85%] mx-auto"
                  >
                    {socialProviders.map((provider) => (
                      <button
                        key={provider.name}
                        className="flex items-center justify-center gap-2 py-2.5 border border-gray-200 dark:border-white/10 rounded-[8px] hover:bg-gray-50 dark:hover:bg-white/5 transition-all group shadow-sm text-[12px] font-semibold text-[#0a1128] dark:text-white hover:shadow-md hover:-translate-y-0.5"
                      >
                        <span
                          className="w-4 h-4 group-hover:scale-110 transition-transform [&>svg]:w-full [&>svg]:h-full"
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
                    className="text-center mt-3 mb-1 text-[12px] font-medium text-gray-500 dark:text-gray-400"
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
          </div>
        </motion.div>
      </div>
    </div>
  );
}
