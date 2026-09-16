import { useState } from "react";
import { Lock, Camera, CheckCircle2, User, ShieldCheck, Briefcase } from "lucide-react";
import { rolesData, initialFormData, type EditProfileFormData } from "./data";
import { motion } from "framer-motion";
import clsx from "clsx";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 400, damping: 30 },
  },
};

interface EditProfileDesktopProps {
  onBack?: () => void;
  onSave?: () => void;
}

export default function EditProfileDesktop({ onSave }: EditProfileDesktopProps) {
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
      className="min-h-screen w-full bg-gray-50 dark:bg-[#050b14] flex flex-col items-center py-10 px-6 font-sans"
    >
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3 flex flex-col gap-5">
          <div className="sticky top-20 flex flex-col gap-5">
            <motion.div 
              variants={item}
              className="bg-white dark:bg-[#121c33] rounded-[4px] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] flex flex-col items-center text-center gap-3"
            >
              <div className="w-24 h-24 mt-2 rounded-full bg-gradient-to-br from-[#0b1b42] to-[#121c33] text-[#d4af37] flex items-center justify-center text-4xl font-black border-4 border-[#d4af37]/30 shadow-xl shadow-[#d4af37]/10 relative group hover:border-[#d4af37]/60 transition-colors duration-500">
                A
                <div className="absolute inset-0 rounded-full border border-[#d4af37]/20 m-1" />
              </div>
              <div className="flex flex-col items-center mt-2">
                <h2 className="text-2xl font-black text-[#0a1128] dark:text-white tracking-tight">{formData.fullName || "Your Name"}</h2>
                <div className="mt-2 flex items-center gap-1 px-4 py-1.5 bg-gradient-to-r from-[#d4af37]/10 to-[#bf953f]/10 border border-[#d4af37]/20 rounded-full shadow-sm">
                  <span className="text-[10px] font-bold text-[#b8942b] dark:text-[#d4af37] uppercase tracking-widest">{formData.userType} • {formData.role}</span>
                </div>
              </div>
              
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent my-3"></div>
              
              <p className="text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-[220px]">Update your personal information, authentication details, and business settings.</p>
              
              <button
                onClick={handleSave}
                className="w-full max-w-[240px] mt-2 py-3.5 rounded-[4px] font-bold text-[14px] flex items-center justify-center gap-2 transition-all bg-[#0b1b42] text-white hover:bg-[#121928] shadow-md shadow-[#0a1128]/25 border border-[#d4af37]/30"
              >
                <CheckCircle2 size={16} className="text-[#d4af37]" /> Save Changes
              </button>
            </motion.div>
          </div>
        </div>
        <div className="w-full md:w-2/3 flex flex-col gap-5">
          <motion.div 
            variants={item}
            className="bg-white dark:bg-[#121c33] rounded-[4px] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] flex flex-col gap-5"
          >
            <div className="flex items-center gap-2.5 border-b border-gray-100 dark:border-gray-800 pb-3">
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
                  "w-full px-4 py-3 rounded-[4px] border focus:outline-none transition-colors text-[13px] font-medium placeholder:text-gray-400",
                  errors.fullName 
                    ? "border-rose-500 bg-rose-50 dark:bg-rose-950/20 focus:border-rose-500" 
                    : "border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0b1b42]/50 focus:border-[#d4af37] text-[#0a1128] dark:text-white"
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-bold text-[#0a1128] dark:text-white">Email Address <span className="text-rose-500">*</span></label>
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={clsx(
                    "w-full px-4 py-3 rounded-[4px] border focus:outline-none transition-colors text-[13px] font-medium placeholder:text-gray-400",
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
                    "w-full px-4 py-3 rounded-[4px] border focus:outline-none transition-colors text-[13px] font-medium placeholder:text-gray-400",
                    errors.mobile 
                      ? "border-rose-500 bg-rose-50 dark:bg-rose-950/20 focus:border-rose-500" 
                      : "border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0b1b42]/50 focus:border-[#d4af37] text-[#0a1128] dark:text-white"
                  )}
                />
              </div>
            </div>
          </motion.div>
          <motion.div 
            variants={item}
            className="bg-white dark:bg-[#121c33] rounded-[4px] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] flex flex-col gap-5"
          >
            <div className="flex items-center gap-2.5 border-b border-gray-100 dark:border-gray-800 pb-3">
              <div className="w-7 h-7 rounded-[4px] bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white shadow-sm shadow-emerald-500/20">
                <ShieldCheck size={14} />
              </div>
              <h3 className="font-bold text-xs tracking-widest text-[#0a1128] dark:text-white uppercase">Identity & Authentication</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-bold text-[#0a1128] dark:text-white">PAN Card Number</label>
                <input 
                  type="text" 
                  placeholder="e.g. ABCDE1234F"
                  value={formData.panNumber}
                  onChange={(e) => handleChange("panNumber", e.target.value.toUpperCase())}
                  className="w-full px-4 py-3 rounded-[4px] border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0b1b42]/50 focus:outline-none focus:border-[#d4af37] transition-colors text-[13px] uppercase font-medium text-[#0a1128] dark:text-white placeholder:text-gray-400"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-bold text-[#0a1128] dark:text-white">Name (as per PAN)</label>
                <input 
                  type="text" 
                  placeholder="Enter name as on PAN card"
                  value={formData.nameAsPan}
                  onChange={(e) => handleChange("nameAsPan", e.target.value)}
                  className="w-full px-4 py-3 rounded-[4px] border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0b1b42]/50 focus:outline-none focus:border-[#d4af37] transition-colors text-[13px] font-medium text-[#0a1128] dark:text-white placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-bold text-[#0a1128] dark:text-white">Date of Birth</label>
                <div className="flex gap-2">
                  <input 
                    type="date" 
                    value={formData.dob}
                    onChange={(e) => handleChange("dob", e.target.value)}
                    className="flex-1 px-4 py-3 rounded-[4px] border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0b1b42]/50 focus:outline-none focus:border-[#d4af37] transition-colors text-[13px] font-medium text-[#0a1128] dark:text-white"
                  />
                  <button className="px-5 rounded-[4px] bg-[#0b1b42] text-white font-bold text-[12px] hover:bg-[#121928] transition-colors border border-[#d4af37]/30 shadow-md shadow-[#0a1128]/25">
                    Verify
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-bold text-[#0a1128] dark:text-white">Face Authentication</label>
                <div className="border border-gray-200 dark:border-gray-700 rounded-[4px] p-2 bg-gray-50 dark:bg-[#0b1b42]/30 flex items-center justify-between gap-2 h-[46px] pl-3">
                  <div className="flex items-center gap-2">
                    <Camera size={14} className="text-[#d4af37]" />
                    <span className="text-[12px] font-bold text-[#0a1128] dark:text-white">Biometric Check</span>
                  </div>
                  <button className="px-3.5 h-full bg-[#0b1b42] rounded-[4px] text-white text-[11px] font-bold hover:bg-[#121928] transition-colors border border-[#d4af37]/30">
                    Verify
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            variants={item}
            className="bg-white dark:bg-[#121c33] rounded-[4px] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] flex flex-col gap-5 mb-8"
          >
            <div className="flex items-center gap-2.5 border-b border-gray-100 dark:border-gray-800 pb-3">
              <div className="w-7 h-7 rounded-[4px] bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white shadow-sm shadow-violet-500/20">
                <Briefcase size={14} />
              </div>
              <h3 className="font-bold text-xs tracking-widest text-[#0a1128] dark:text-white uppercase">Role & Business Details</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-bold text-[#0a1128] dark:text-white">User Type <span className="text-rose-500">*</span></label>
                <div className="grid grid-cols-2 gap-3">
                  {(["Buyer", "Seller"] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        handleChange("userType", type);
                        handleChange("role", type === "Buyer" ? rolesData.buyer[0] : rolesData.seller[0]);
                      }}
                      className={clsx(
                        "py-3 rounded-[4px] flex items-center justify-center gap-2 transition-all font-bold text-[13px]",
                        formData.userType === type 
                          ? "bg-[#d4af37]/20 text-[#0a1128] dark:text-white shadow-sm" 
                          : "bg-gray-100 dark:bg-[#0b1b42]/50 text-gray-500 hover:bg-gray-200 dark:hover:bg-[#0b1b42]/80 hover:text-gray-700 dark:hover:text-gray-300"
                      )}
                    >
                      <div className={clsx("w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center transition-colors", formData.userType === type ? "border-[#d4af37]" : "border-gray-300 dark:border-gray-600")}>
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
                          : "bg-white dark:bg-[#0b1b42]/30 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-[#0b1b42]/50"
                      )}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {formData.userType === "Seller" && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="flex flex-col gap-1 mt-1"
              >
                <label className="text-[12px] font-bold text-[#0a1128] dark:text-white">Entity / Company Name <span className="text-rose-500">*</span></label>
                <input 
                  type="text" 
                  placeholder="Enter company name"
                  value={formData.companyName}
                  onChange={(e) => handleChange("companyName", e.target.value)}
                  className={clsx(
                    "w-full px-4 py-3 rounded-[4px] border focus:outline-none transition-colors text-[13px] font-medium",
                    errors.companyName 
                      ? "border-rose-500 bg-rose-50 dark:bg-rose-950/20 focus:border-rose-500" 
                      : "border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0b1b42]/50 focus:border-[#d4af37] text-[#0a1128] dark:text-white placeholder:text-gray-400"
                  )}
                />
              </motion.div>
            )}

          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
