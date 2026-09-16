import { useState } from "react";
import { ChevronLeft, Lock, Camera, CheckCircle2, User, ShieldCheck, Briefcase } from "lucide-react";
import { rolesData, initialFormData, type EditProfileFormData } from "./data";
import { motion } from "framer-motion";
import clsx from "clsx";
import crempLogo from "../../Logo/CREMP_Light.png";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 400, damping: 24 },
  },
};

interface EditProfileMobileProps {
  onBack?: () => void;
  onSave?: () => void;
}

export default function EditProfileMobile({ onBack, onSave }: EditProfileMobileProps) {
  const [formData, setFormData] = useState<EditProfileFormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof EditProfileFormData, string>>>({});

  const handleChange = (field: keyof EditProfileFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSave = () => {
    const newErrors: typeof errors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Required";
    if (!formData.email.trim()) newErrors.email = "Required";
    if (!formData.mobile.trim()) newErrors.mobile = "Required";
    if (formData.userType === "Seller" && !formData.companyName?.trim()) newErrors.companyName = "Required";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    onSave?.();
  };

  const availableRoles = formData.userType === "Buyer" ? rolesData.buyer : rolesData.seller;

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="min-h-screen w-full bg-white dark:bg-[#050b14] flex flex-col font-sans pb-20"
    >
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0b1b42] via-[#121c33] to-[#0b1b42] w-full pt-5 pb-16 px-5 relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-56 h-56 bg-[#d4af37]/8 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-[-20%] left-[-10%] w-48 h-48 bg-[#d4af37]/5 rounded-full blur-[60px] pointer-events-none" />

        <div className="flex justify-between items-center w-full mb-6 relative z-10">
          <button 
            onClick={onBack}
            className="w-9 h-9 rounded-[4px] bg-white/8 border border-white/10 flex items-center justify-center text-white hover:bg-white/15 transition-colors duration-200"
            aria-label="Go back"
          >
            <ChevronLeft size={18} />
          </button>
        </div>
        
        <div className="flex items-center justify-between gap-4 relative z-10">
          <div className="flex flex-col">
            <h1 className="text-white text-2xl font-semibold tracking-tight">Edit Profile</h1>
            <p className="text-gray-400 text-xs mt-0.5 max-w-[200px]">Update your personal and business details</p>
          </div>
          <img
            src={crempLogo}
            alt="CREMP Logo"
            className="h-12 w-auto object-contain drop-shadow-lg"
          />
        </div>
      </div>

      <div className="px-4 -mt-10 flex flex-col gap-4 z-10">
        
        {/* Profile Preview Card */}
        <motion.div 
          variants={item}
          className="bg-white/95 dark:bg-[#121c33] backdrop-blur-md rounded-[4px] p-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] w-full flex items-center gap-3"
        >
          <div className="w-14 h-14 rounded-full bg-[#0b1b42] text-[#d4af37] flex items-center justify-center text-xl font-bold border-2 border-[#d4af37]/60 shadow-md shadow-[#d4af37]/10 shrink-0">
            A
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg font-bold text-[#0a1128] dark:text-white tracking-tight">{formData.fullName || "Your Name"}</h2>
            <div className="mt-0.5 flex items-center gap-1 px-2.5 py-0.5 bg-[#0b1b42]/5 dark:bg-[#d4af37]/10 border border-[#0a1128]/10 dark:border-[#d4af37]/30 rounded-[2px] w-fit">
              <span className="text-[9px] font-bold text-[#d4af37] uppercase tracking-widest">{formData.userType} • {formData.role}</span>
            </div>
          </div>
        </motion.div>

        {/* Personal Information */}
        <motion.div variants={item} className="bg-white/95 dark:bg-[#121c33] backdrop-blur-md rounded-[4px] p-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] flex flex-col gap-4">
          <div className="flex items-center gap-2 border-b border-gray-100 dark:border-gray-800 pb-3">
            <div className="w-7 h-7 rounded-[4px] bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white shadow-sm shadow-orange-500/20">
              <User size={14} />
            </div>
            <h3 className="font-bold text-xs tracking-widest text-[#0a1128] dark:text-white uppercase">Personal Information</h3>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[12px] font-bold text-[#0a1128] dark:text-white">Full Name <span className="text-rose-500">*</span></label>
            <input 
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              className={clsx(
                "w-full px-3.5 py-2.5 rounded-[4px] border focus:outline-none transition-colors text-[13px] font-medium placeholder:text-gray-400",
                errors.fullName 
                  ? "border-rose-500 bg-rose-50 dark:bg-rose-950/20 focus:border-rose-500" 
                  : "border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0b1b42]/50 focus:border-[#d4af37] text-[#0a1128] dark:text-white"
              )}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[12px] font-bold text-[#0a1128] dark:text-white">Email Address <span className="text-rose-500">*</span></label>
            <input 
              type="email" 
              placeholder="Enter your email address"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className={clsx(
                "w-full px-3.5 py-2.5 rounded-[4px] border focus:outline-none transition-colors text-[13px] font-medium placeholder:text-gray-400",
                errors.email 
                  ? "border-rose-500 bg-rose-50 dark:bg-rose-950/20 focus:border-rose-500" 
                  : "border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0b1b42]/50 focus:border-[#d4af37] text-[#0a1128] dark:text-white"
              )}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[12px] font-bold text-[#0a1128] dark:text-white">Mobile Number <span className="text-rose-500">*</span></label>
            <input 
              type="tel" 
              placeholder="Enter your mobile number"
              value={formData.mobile}
              onChange={(e) => handleChange("mobile", e.target.value)}
              className={clsx(
                "w-full px-3.5 py-2.5 rounded-[4px] border focus:outline-none transition-colors text-[13px] font-medium placeholder:text-gray-400",
                errors.mobile 
                  ? "border-rose-500 bg-rose-50 dark:bg-rose-950/20 focus:border-rose-500" 
                  : "border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0b1b42]/50 focus:border-[#d4af37] text-[#0a1128] dark:text-white"
              )}
            />
          </div>
        </motion.div>

        {/* Identity & Authentication */}
        <motion.div variants={item} className="bg-white/95 dark:bg-[#121c33] backdrop-blur-md rounded-[4px] p-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] flex flex-col gap-4">
          <div className="flex items-center gap-2 border-b border-gray-100 dark:border-gray-800 pb-3">
            <div className="w-7 h-7 rounded-[4px] bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white shadow-sm shadow-emerald-500/20">
              <ShieldCheck size={14} />
            </div>
            <h3 className="font-bold text-xs tracking-widest text-[#0a1128] dark:text-white uppercase">Identity & Auth</h3>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[12px] font-bold text-[#0a1128] dark:text-white">PAN Card Number</label>
            <input 
              type="text" 
              placeholder="e.g. ABCDE1234F"
              value={formData.panNumber}
              onChange={(e) => handleChange("panNumber", e.target.value.toUpperCase())}
              className="w-full px-3.5 py-2.5 rounded-[4px] border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0b1b42]/50 focus:outline-none focus:border-[#d4af37] transition-colors text-[13px] uppercase font-medium text-[#0a1128] dark:text-white placeholder:text-gray-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[12px] font-bold text-[#0a1128] dark:text-white">Name (as per PAN)</label>
            <input 
              type="text" 
              placeholder="Enter name as on PAN card"
              value={formData.nameAsPan}
              onChange={(e) => handleChange("nameAsPan", e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-[4px] border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0b1b42]/50 focus:outline-none focus:border-[#d4af37] transition-colors text-[13px] font-medium text-[#0a1128] dark:text-white placeholder:text-gray-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[12px] font-bold text-[#0a1128] dark:text-white">Date of Birth (as per PAN)</label>
            <div className="flex gap-2">
              <input 
                type="date" 
                value={formData.dob}
                onChange={(e) => handleChange("dob", e.target.value)}
                className="flex-1 px-3.5 py-2.5 rounded-[4px] border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0b1b42]/50 focus:outline-none focus:border-[#d4af37] transition-colors text-[13px] font-medium text-[#0a1128] dark:text-white"
              />
              <button className="px-5 rounded-[4px] bg-[#0b1b42] text-white font-bold text-[12px] border border-[#d4af37]/30 shadow-md shadow-[#0a1128]/25 hover:bg-[#121928] transition-colors whitespace-nowrap">
                Verify
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[12px] font-bold text-[#0a1128] dark:text-white">Face Authentication</label>
            <div className="border border-gray-100 dark:border-gray-800 rounded-[4px] p-3 bg-gray-50 dark:bg-[#0b1b42]/30 flex items-center justify-between gap-3">
               <div className="flex items-center gap-2.5">
                 <motion.div
                   whileHover={{ scale: 1.15, rotate: [0, -8, 8, 0] }}
                   transition={{ duration: 0.3 }}
                   className="w-9 h-9 rounded-[4px] bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-sm shadow-blue-500/20 shrink-0"
                 >
                   <Camera size={16} />
                 </motion.div>
                 <div className="flex flex-col">
                   <span className="text-[12px] font-bold text-[#0a1128] dark:text-white">Face Biometric</span>
                   <span className="text-[10px] text-gray-500 dark:text-gray-400 leading-snug">Verify your identity</span>
                 </div>
               </div>
               <button className="px-3.5 py-2 bg-[#0b1b42] rounded-[4px] text-white text-[11px] font-bold flex items-center gap-1.5 whitespace-nowrap shrink-0 border border-[#d4af37]/30 shadow-md shadow-[#0a1128]/25 hover:bg-[#121928] transition-colors">
                 <Camera size={12} /> Verify
               </button>
            </div>
          </div>
        </motion.div>

        {/* Role & Business Details */}
        <motion.div variants={item} className="bg-white/95 dark:bg-[#121c33] backdrop-blur-md rounded-[4px] p-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] flex flex-col gap-4">
          <div className="flex items-center gap-2 border-b border-gray-100 dark:border-gray-800 pb-3">
            <div className="w-7 h-7 rounded-[4px] bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white shadow-sm shadow-violet-500/20">
              <Briefcase size={14} />
            </div>
            <h3 className="font-bold text-xs tracking-widest text-[#0a1128] dark:text-white uppercase">Role & Business</h3>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[12px] font-bold text-[#0a1128] dark:text-white">User Type <span className="text-rose-500">*</span></label>
            <div className="grid grid-cols-2 gap-2">
              {(["Buyer", "Seller"] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    handleChange("userType", type);
                    handleChange("role", type === "Buyer" ? rolesData.buyer[0] : rolesData.seller[0]);
                  }}
                  className={clsx(
                    "py-2.5 rounded-[4px] flex items-center justify-center gap-2 transition-all font-bold text-[13px]",
                    formData.userType === type 
                      ? "bg-[#d4af37]/20 text-[#0a1128] dark:text-white shadow-sm" 
                      : "bg-gray-100 dark:bg-[#0b1b42]/50 text-gray-500 hover:bg-gray-200 dark:hover:bg-[#0b1b42]/80 hover:text-gray-700 dark:hover:text-gray-300"
                  )}
                >
                  <div className={clsx("w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center", formData.userType === type ? "border-[#d4af37]" : "border-gray-300 dark:border-gray-600")}>
                     {formData.userType === type && <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />}
                  </div>
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[12px] font-bold text-[#0a1128] dark:text-white">Select Your Role <span className="text-rose-500">*</span></label>
            <div className="flex flex-wrap gap-1.5">
              {availableRoles.map((role) => (
                <button
                  key={role}
                  onClick={() => handleChange("role", role)}
                  className={clsx(
                    "px-3.5 py-2 rounded-[4px] border transition-all font-bold text-[12px]",
                    formData.role === role 
                      ? "bg-[#0b1b42] text-white border-[#0b1b42] shadow-md shadow-[#0a1128]/25" 
                      : "bg-white dark:bg-[#0b1b42]/30 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                  )}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

          {formData.userType === "Seller" && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="flex flex-col gap-1 overflow-hidden"
            >
              <label className="text-[12px] font-bold text-[#0a1128] dark:text-white">Entity / Company Name <span className="text-rose-500">*</span></label>
              <input 
                type="text" 
                placeholder="Enter company name"
                value={formData.companyName}
                onChange={(e) => handleChange("companyName", e.target.value)}
                className={clsx(
                  "w-full px-3.5 py-2.5 rounded-[4px] border focus:outline-none transition-colors text-[13px] font-medium",
                  errors.companyName 
                    ? "border-rose-500 bg-rose-50 dark:bg-rose-950/20 focus:border-rose-500" 
                    : "border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0b1b42]/50 focus:border-[#d4af37] text-[#0a1128] dark:text-white placeholder:text-gray-400"
                )}
              />
            </motion.div>
          )}

        </motion.div>

      </div>

      {/* Fixed Save Button */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-white/95 dark:bg-[#121c33]/95 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 z-50">
        <button
          onClick={handleSave}
          className="w-full py-3.5 rounded-[4px] font-bold text-[14px] flex items-center justify-center gap-2 transition-all bg-[#0b1b42] text-white hover:bg-[#121928] shadow-md shadow-[#0a1128]/25 border border-[#d4af37]/30"
        >
          <CheckCircle2 size={16} className="text-[#d4af37]" /> Save Changes
        </button>
      </div>

    </motion.div>
  );
}
