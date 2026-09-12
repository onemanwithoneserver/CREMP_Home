import { ChevronLeft, Edit, Mail, Phone, LogOut, ShieldCheck } from "lucide-react";
import { myProfileData } from "./data";
import { motion } from "framer-motion";

interface MyProfileMobileProps {
  onEditProfile?: () => void;
  onBack?: () => void;
}

export default function MyProfileMobile({ onEditProfile, onBack }: MyProfileMobileProps) {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col font-sans">
      
      <div className="bg-gradient-to-br from-[#0a1128] via-[#121c33] to-[#0a1128] w-full pt-6 pb-20 px-6 relative rounded-b-3xl overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/10 blur-[80px] -translate-y-1/3 translate-x-1/4 rounded-full pointer-events-none" />
        <div className="flex justify-between items-center w-full mb-6 relative z-10">
          <button 
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white"
          >
            <ChevronLeft size={20} />
          </button>
          
          
          <div className="w-12 h-14 border border-[#d4af37] flex flex-col justify-center items-center rounded-sm">
             <div className="w-8 h-8 border border-[#d4af37] flex items-center justify-center text-[#d4af37] font-bold text-xl">
               C
             </div>
          </div>
        </div>
        
        <h1 className="text-white text-3xl font-bold mb-1">My Profile</h1>
        <p className="text-gray-300 text-sm">Manage your account information</p>
      </div>

      
      <div className="px-6 -mt-12 flex flex-col gap-6 pb-12 z-10">
        
        
        <motion.div 
          initial={{ y: 20, opacity: 0, scale: 0.95 }} transition={{ type: "spring", stiffness: 300, damping: 25 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white/90 backdrop-blur-xl border border-white/20 rounded-[4px] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] w-full flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1b253b] to-[#0a1128] text-[#d4af37] flex items-center justify-center text-2xl font-bold border-2 border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                A
              </div>
              <button 
                onClick={onEditProfile}
                className="absolute bottom-0 right-0 w-6 h-6 bg-[#d4af37] rounded-full flex items-center justify-center border-2 border-white text-white"
              >
                <Edit size={12} />
              </button>
            </div>
            
            <div className="flex flex-col">
              <h2 className="text-xl font-bold text-[#0a1128]">{myProfileData.name}</h2>
              <div className="mt-1 flex items-center gap-1.5 px-3 py-1 bg-green-50 rounded-full w-fit">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-xs font-semibold text-green-700">{myProfileData.status}</span>
              </div>
            </div>
          </div>

          <button 
            onClick={onEditProfile}
            className="w-10 h-10 rounded-full bg-[#1b253b] text-white flex items-center justify-center"
          >
            <Edit size={18} />
          </button>
        </motion.div>

        
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-full bg-[#1b253b] flex items-center justify-center text-white">
              <span className="text-sm">👤</span>
            </div>
            <h3 className="font-bold text-sm tracking-widest text-[#0a1128] uppercase flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#d4af37]">Contact Information</h3>
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-[4px] p-2 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100/50 flex flex-col divide-y divide-gray-100">
            <motion.div whileHover={{ x: 4, backgroundColor: "rgba(0,0,0,0.02)" }} className="p-4 flex items-center justify-between rounded-[4px] cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-[10px] bg-orange-50 flex items-center justify-center text-[#d4af37]">
                  <Mail size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500">Email Address</span>
                  <span className="text-[15px] font-bold text-[#0a1128]">{myProfileData.email}</span>
                </div>
              </div>
              <ChevronRightIcon />
            </motion.div>

            <motion.div whileHover={{ x: 4, backgroundColor: "rgba(0,0,0,0.02)" }} className="p-4 flex items-center justify-between rounded-[4px] cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-[10px] bg-orange-50 flex items-center justify-center text-[#d4af37]">
                  <Phone size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500">Mobile Number</span>
                  <span className="text-[15px] font-bold text-[#0a1128]">{myProfileData.mobile}</span>
                </div>
              </div>
              <ChevronRightIcon />
            </motion.div>
          </div>
        </div>

        
        <div className="flex flex-col gap-3 mt-2">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-full bg-[#1b253b] flex items-center justify-center text-white">
              <span className="text-sm">⚙️</span>
            </div>
            <h3 className="font-bold text-sm tracking-widest text-[#0a1128] uppercase flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#d4af37]">Account</h3>
          </div>
          
          <button className="bg-white/95 backdrop-blur-sm rounded-[4px] p-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100/50 flex items-center justify-between w-full hover:bg-red-50/30 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-[10px] bg-red-50 flex items-center justify-center text-red-500">
                <LogOut size={20} />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[15px] font-bold text-red-500">Logout</span>
                <span className="text-xs text-gray-500">Sign out from your account</span>
              </div>
            </div>
            <ChevronRightIcon />
          </button>
        </div>

        
        <div className="bg-gradient-to-r from-orange-50/80 to-transparent backdrop-blur-sm rounded-[4px] p-5 flex items-center gap-4 border border-[#d4af37]/20 shadow-sm mt-2 relative overflow-hidden">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#d4af37] shadow-sm shrink-0">
            <ShieldCheck size={24} />
          </div>
          <div className="flex flex-col">
            <span className="text-[14px] font-bold text-[#0a1128]">Your account is secure</span><div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#d4af37] to-transparent opacity-60" />
            <span className="text-[13px] text-gray-500 leading-snug mt-1">We keep your data safe and protected with industry-standard security.</span>
          </div>
        </div>

      </div>
    </div>
  );
}

function ChevronRightIcon() {
  return <ChevronLeft size={18} className="text-gray-400 rotate-180" />;
}
