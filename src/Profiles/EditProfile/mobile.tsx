import { useState } from "react";
import { ChevronLeft, Lock, Camera, CheckCircle2, User, ShieldCheck, Briefcase } from "lucide-react";
import { rolesData, initialFormData, type EditProfileFormData } from "./data";
import { motion } from "framer-motion";
import clsx from "clsx";

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
    if (formData.userType === "Seller" && !formData.companyName?.trim()) newErrors.companyName = "Required";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    onSave?.();
  };

  const availableRoles = formData.userType === "Buyer" ? rolesData.buyer : rolesData.seller;

  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col font-sans pb-24">
      
      <div className="bg-[#1b253b] w-full pt-6 pb-20 px-6 relative rounded-b-3xl">
        <div className="flex justify-between items-center w-full mb-6">
          <button 
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white transition-colors hover:bg-white/20"
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="w-12 h-14 border border-[#d4af37] flex flex-col justify-center items-center rounded-sm">
             <div className="w-8 h-8 border border-[#d4af37] flex items-center justify-center text-[#d4af37] font-bold text-xl">
               C
             </div>
          </div>
        </div>
        
        <h1 className="text-white text-3xl font-bold mb-1">Edit Profile</h1>
        <p className="text-gray-300 text-sm">Update your personal and business details</p>
      </div>

      <div className="px-6 -mt-12 flex flex-col gap-6 z-10">
        
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-[20px] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full flex items-center gap-4"
        >
          <div className="w-16 h-16 rounded-full bg-[#1b253b] text-[#d4af37] flex items-center justify-center text-2xl font-bold border-2 border-[#d4af37]">
            A
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-bold text-[#0a1128]">{formData.fullName}</h2>
            <div className="mt-1 flex items-center gap-1 px-3 py-1 bg-orange-50 rounded-full w-fit">
              <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-wider">{formData.userType} • {formData.role}</span>
            </div>
          </div>
        </motion.div>

        
        <div className="bg-white rounded-[20px] p-5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col gap-5">
          <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
            <div className="w-6 h-6 rounded-full bg-orange-50 flex items-center justify-center text-[#d4af37]">
              <User size={14} />
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
                "w-full px-4 py-3 rounded-[10px] border focus:outline-none transition-colors text-[14px]",
                errors.fullName ? "border-red-500 bg-red-50 focus:border-red-500" : "border-gray-200 bg-white focus:border-[#d4af37]"
              )}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center">
              <label className="text-[13px] font-bold text-[#0a1128]">Email Address</label>
              <div className="flex items-center gap-1 text-[10px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full font-medium">
                <Lock size={10} /> Immutable Credential
              </div>
            </div>
            <div className="w-full px-4 py-3 rounded-[10px] border border-gray-200 bg-gray-50 text-[14px] text-gray-500 flex justify-between items-center">
              <span>{formData.email}</span>
              <Lock size={14} className="text-gray-400" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center">
              <label className="text-[13px] font-bold text-[#0a1128]">Mobile Number</label>
              <div className="flex items-center gap-1 text-[10px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full font-medium">
                <Lock size={10} /> OTP Verified
              </div>
            </div>
            <div className="w-full px-4 py-3 rounded-[10px] border border-gray-200 bg-gray-50 text-[14px] text-gray-500 flex justify-between items-center">
              <span>{formData.mobile}</span>
              <Lock size={14} className="text-gray-400" />
            </div>
          </div>
        </div>

        
        <div className="bg-white rounded-[20px] p-5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col gap-5">
          <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
            <div className="w-6 h-6 rounded-full bg-orange-50 flex items-center justify-center text-[#d4af37]">
              <ShieldCheck size={14} />
            </div>
            <h3 className="font-bold text-sm tracking-widest text-[#0a1128] uppercase">Identity & Authentication</h3>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#0a1128]">PAN Card Number</label>
            <input 
              type="text" 
              placeholder="e.g. ABCDE1234F"
              value={formData.panNumber}
              onChange={(e) => handleChange("panNumber", e.target.value.toUpperCase())}
              className="w-full px-4 py-3 rounded-[10px] border border-gray-200 bg-white focus:outline-none focus:border-[#d4af37] transition-colors text-[14px] uppercase"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#0a1128]">Name (as per PAN)</label>
            <input 
              type="text" 
              placeholder="Enter name as on PAN card"
              value={formData.nameAsPan}
              onChange={(e) => handleChange("nameAsPan", e.target.value)}
              className="w-full px-4 py-3 rounded-[10px] border border-gray-200 bg-white focus:outline-none focus:border-[#d4af37] transition-colors text-[14px]"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#0a1128]">Date of Birth (as per PAN)</label>
            <div className="flex gap-3">
              <input 
                type="date" 
                value={formData.dob}
                onChange={(e) => handleChange("dob", e.target.value)}
                className="flex-1 px-4 py-3 rounded-[10px] border border-gray-200 bg-white focus:outline-none focus:border-[#d4af37] transition-colors text-[14px]"
              />
              <button className="px-6 rounded-[10px] bg-[#1b253b] text-white font-bold text-[14px] whitespace-nowrap">
                Verify
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <label className="text-[13px] font-bold text-[#0a1128] flex items-center gap-1.5">
               Face Authentication
            </label>
            <div className="border border-gray-100 rounded-[12px] p-4 bg-gray-50 flex items-center justify-between gap-4">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-[#d4af37] shrink-0">
                   <Camera size={18} />
                 </div>
                 <div className="flex flex-col">
                   <span className="text-[13px] font-bold text-[#0a1128]">Face Biometric Check</span>
                   <span className="text-[11px] text-gray-500 leading-snug">Perform facial camera check to verify profile identity</span>
                 </div>
               </div>
               <button className="px-4 py-2 bg-[#1b253b] rounded-[8px] text-white text-[12px] font-bold flex items-center gap-2 whitespace-nowrap shrink-0">
                 <Camera size={14} /> Verify Now
               </button>
            </div>
          </div>
        </div>

        
        <div className="bg-white rounded-[20px] p-5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col gap-5">
          <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
            <div className="w-6 h-6 rounded-full bg-orange-50 flex items-center justify-center text-[#d4af37]">
              <Briefcase size={14} />
            </div>
            <h3 className="font-bold text-sm tracking-widest text-[#0a1128] uppercase">Role & Business Details</h3>
          </div>

          <div className="flex flex-col gap-2.5">
            <label className="text-[13px] font-bold text-[#0a1128]">User Type <span className="text-red-500">*</span></label>
            <div className="grid grid-cols-2 gap-3">
              {(["Buyer", "Seller"] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    handleChange("userType", type);
                    handleChange("role", type === "Buyer" ? rolesData.buyer[0] : rolesData.seller[0]);
                  }}
                  className={clsx(
                    "py-3 rounded-[10px] border-2 flex items-center justify-center gap-2 transition-all font-bold text-[14px]",
                    formData.userType === type 
                      ? "border-[#d4af37] bg-orange-50/20 text-[#0a1128]" 
                      : "border-gray-100 bg-white text-gray-500 hover:border-gray-200"
                  )}
                >
                  <div className={clsx("w-4 h-4 rounded-full border-2 flex items-center justify-center", formData.userType === type ? "border-[#d4af37]" : "border-gray-300")}>
                     {formData.userType === type && <div className="w-2 h-2 rounded-full bg-[#d4af37]" />}
                  </div>
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2.5 mt-2">
            <label className="text-[13px] font-bold text-[#0a1128]">Select Your Role <span className="text-red-500">*</span></label>
            <div className="flex flex-wrap gap-2">
              {availableRoles.map((role) => (
                <button
                  key={role}
                  onClick={() => handleChange("role", role)}
                  className={clsx(
                    "px-4 py-2.5 rounded-full border transition-all font-bold text-[13px]",
                    formData.role === role 
                      ? "bg-[#1b253b] text-white border-[#1b253b]" 
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
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
              className="flex flex-col gap-1.5 mt-2 overflow-hidden"
            >
              <label className="text-[13px] font-bold text-[#0a1128]">Entity / Company Name <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                placeholder="Enter company name"
                value={formData.companyName}
                onChange={(e) => handleChange("companyName", e.target.value)}
                className={clsx(
                  "w-full px-4 py-3 rounded-[10px] border focus:outline-none transition-colors text-[14px]",
                  errors.companyName ? "border-red-500 bg-red-50 focus:border-red-500" : "border-gray-200 bg-white focus:border-[#d4af37]"
                )}
              />
            </motion.div>
          )}

        </div>

      </div>

      
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 z-50">
        <button
          onClick={handleSave}
          className="w-full py-4 rounded-[12px] font-bold text-[16px] flex items-center justify-center gap-2 transition-all bg-[#1b253b] text-white hover:bg-[#121928]"
        >
          <CheckCircle2 size={18} className="text-[#d4af37]" /> Save Changes
        </button>
      </div>

    </div>
  );
}
