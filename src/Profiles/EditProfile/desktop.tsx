import { useState } from "react";
import { Lock, Camera, CheckCircle2, User, ShieldCheck, Briefcase } from "lucide-react";
import { rolesData, initialFormData, type EditProfileFormData } from "./data";
import { motion } from "framer-motion";
import clsx from "clsx";

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
    if (formData.userType === "Seller" && !formData.companyName?.trim()) newErrors.companyName = "Required";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    onSave?.();
  };

  const availableRoles = formData.userType === "Buyer" ? rolesData.buyer : rolesData.seller;

  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center py-12 px-6 font-sans">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8">
        
        
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          <div className="sticky top-24 flex flex-col gap-6">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="bg-white rounded-[20px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-center text-center gap-4"
            >
              <div className="w-24 h-24 rounded-full bg-[#1b253b] text-[#d4af37] flex items-center justify-center text-4xl font-bold border-4 border-[#d4af37] shadow-lg">
                A
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-2xl font-bold text-[#0a1128]">{formData.fullName || "Your Name"}</h2>
                <div className="mt-2 flex items-center gap-1 px-4 py-1.5 bg-orange-50 rounded-full">
                  <span className="text-[11px] font-bold text-[#d4af37] uppercase tracking-widest">{formData.userType} • {formData.role}</span>
                </div>
              </div>
              
              <div className="w-full h-px bg-gray-100 my-2"></div>
              
              <p className="text-sm text-gray-500">Update your personal information, authentication details, and business settings below.</p>
              
              <button
                onClick={handleSave}
                className="w-full mt-4 py-4 rounded-[12px] font-bold text-[15px] flex items-center justify-center gap-2 transition-all bg-[#1b253b] text-white hover:bg-[#121928] shadow-md hover:shadow-lg"
              >
                <CheckCircle2 size={18} className="text-[#d4af37]" /> Save Changes
              </button>
            </motion.div>
          </div>
        </div>

        
        <div className="w-full md:w-2/3 flex flex-col gap-6">
          
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-[20px] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col gap-6"
          >
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
              <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-[#d4af37]">
                <User size={16} />
              </div>
              <h3 className="font-bold text-sm tracking-widest text-[#0a1128] uppercase">Personal Information</h3>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-bold text-[#0a1128]">Full Name <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                value={formData.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                className={clsx(
                  "w-full px-5 py-3.5 rounded-[12px] border focus:outline-none transition-colors text-[14px]",
                  errors.fullName ? "border-red-500 bg-red-50 focus:border-red-500" : "border-gray-200 bg-white focus:border-[#d4af37]"
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-[13px] font-bold text-[#0a1128]">Email Address</label>
                </div>
                <div className="w-full px-5 py-3.5 rounded-[12px] border border-gray-200 bg-gray-50 text-[14px] text-gray-500 flex justify-between items-center group relative cursor-not-allowed">
                  <span>{formData.email}</span>
                  <Lock size={16} className="text-gray-400" />
                  <div className="absolute -top-8 right-0 bg-gray-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Immutable Credential
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-[13px] font-bold text-[#0a1128]">Mobile Number</label>
                </div>
                <div className="w-full px-5 py-3.5 rounded-[12px] border border-gray-200 bg-gray-50 text-[14px] text-gray-500 flex justify-between items-center group relative cursor-not-allowed">
                  <span>{formData.mobile}</span>
                  <Lock size={16} className="text-gray-400" />
                  <div className="absolute -top-8 right-0 bg-gray-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    OTP Verified & Immutable
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[20px] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col gap-6"
          >
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
              <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-[#d4af37]">
                <ShieldCheck size={16} />
              </div>
              <h3 className="font-bold text-sm tracking-widest text-[#0a1128] uppercase">Identity & Authentication</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-bold text-[#0a1128]">PAN Card Number</label>
                <input 
                  type="text" 
                  placeholder="e.g. ABCDE1234F"
                  value={formData.panNumber}
                  onChange={(e) => handleChange("panNumber", e.target.value.toUpperCase())}
                  className="w-full px-5 py-3.5 rounded-[12px] border border-gray-200 bg-white focus:outline-none focus:border-[#d4af37] transition-colors text-[14px] uppercase"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-bold text-[#0a1128]">Name (as per PAN)</label>
                <input 
                  type="text" 
                  placeholder="Enter name as on PAN card"
                  value={formData.nameAsPan}
                  onChange={(e) => handleChange("nameAsPan", e.target.value)}
                  className="w-full px-5 py-3.5 rounded-[12px] border border-gray-200 bg-white focus:outline-none focus:border-[#d4af37] transition-colors text-[14px]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-bold text-[#0a1128]">Date of Birth</label>
                <div className="flex gap-3">
                  <input 
                    type="date" 
                    value={formData.dob}
                    onChange={(e) => handleChange("dob", e.target.value)}
                    className="flex-1 px-5 py-3.5 rounded-[12px] border border-gray-200 bg-white focus:outline-none focus:border-[#d4af37] transition-colors text-[14px]"
                  />
                  <button className="px-6 rounded-[12px] bg-[#1b253b] text-white font-bold text-[14px] hover:bg-[#121928] transition-colors">
                    Verify
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-bold text-[#0a1128]">Face Authentication</label>
                <div className="border border-gray-200 rounded-[12px] p-2 bg-gray-50 flex items-center justify-between gap-3 h-[50px] pl-4">
                  <div className="flex items-center gap-2">
                    <Camera size={16} className="text-[#d4af37]" />
                    <span className="text-[13px] font-semibold text-[#0a1128]">Biometric Check</span>
                  </div>
                  <button className="px-4 h-full bg-[#1b253b] rounded-[8px] text-white text-[12px] font-bold hover:bg-[#121928] transition-colors">
                    Verify
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-[20px] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col gap-6 mb-12"
          >
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
              <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-[#d4af37]">
                <Briefcase size={16} />
              </div>
              <h3 className="font-bold text-sm tracking-widest text-[#0a1128] uppercase">Role & Business Details</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label className="text-[13px] font-bold text-[#0a1128]">User Type <span className="text-red-500">*</span></label>
                <div className="grid grid-cols-2 gap-4">
                  {(["Buyer", "Seller"] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        handleChange("userType", type);
                        handleChange("role", type === "Buyer" ? rolesData.buyer[0] : rolesData.seller[0]);
                      }}
                      className={clsx(
                        "py-3.5 rounded-[12px] border-2 flex items-center justify-center gap-2 transition-all font-bold text-[14px]",
                        formData.userType === type 
                          ? "border-[#d4af37] bg-orange-50/20 text-[#0a1128]" 
                          : "border-gray-100 bg-white text-gray-500 hover:border-gray-300 hover:bg-gray-50"
                      )}
                    >
                      <div className={clsx("w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors", formData.userType === type ? "border-[#d4af37]" : "border-gray-300")}>
                         {formData.userType === type && <div className="w-2 h-2 rounded-full bg-[#d4af37]" />}
                      </div>
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[13px] font-bold text-[#0a1128]">Select Your Role <span className="text-red-500">*</span></label>
                <div className="flex flex-wrap gap-2">
                  {availableRoles.map((role) => (
                    <button
                      key={role}
                      onClick={() => handleChange("role", role)}
                      className={clsx(
                        "px-4 py-2 rounded-full border transition-all font-bold text-[13px]",
                        formData.role === role 
                          ? "bg-[#1b253b] text-white border-[#1b253b]" 
                          : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
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
                className="flex flex-col gap-1.5 mt-2"
              >
                <label className="text-[13px] font-bold text-[#0a1128]">Entity / Company Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  placeholder="Enter company name"
                  value={formData.companyName}
                  onChange={(e) => handleChange("companyName", e.target.value)}
                  className={clsx(
                    "w-full px-5 py-3.5 rounded-[12px] border focus:outline-none transition-colors text-[14px]",
                    errors.companyName ? "border-red-500 bg-red-50 focus:border-red-500" : "border-gray-200 bg-white focus:border-[#d4af37]"
                  )}
                />
              </motion.div>
            )}

          </motion.div>
        </div>
      </div>
    </div>
  );
}
