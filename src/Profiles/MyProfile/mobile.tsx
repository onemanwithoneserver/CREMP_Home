import { ChevronLeft, Edit, Mail, Phone, LogOut, ShieldCheck } from "lucide-react";
import { myProfileData } from "./data";
import { motion } from "framer-motion";
import crempLogo from "../../Logo/CREMP_Light.png";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
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

interface MyProfileMobileProps {
  onEditProfile?: () => void;
  onBack?: () => void;
}

export default function MyProfileMobile({ onEditProfile, onBack }: MyProfileMobileProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="min-h-screen w-full flex flex-col font-sans bg-white dark:bg-[#050b14]"
    >
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0b1b42] via-[#121c33] to-[#0b1b42] w-full pt-5 pb-16 px-5 relative overflow-hidden">
        {/* Ambient glow blobs */}
        <div className="absolute top-[-10%] right-[-5%] w-56 h-56 bg-[#d4af37]/8 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-[-20%] left-[-10%] w-48 h-48 bg-[#d4af37]/5 rounded-full blur-[60px] pointer-events-none" />

        <div className="flex justify-between items-center w-full mb-5 relative z-10">
          <button
            onClick={onBack}
            className="w-9 h-9 rounded-[4px] bg-white/8 border border-white/10 flex items-center justify-center text-white hover:bg-white/15 transition-colors duration-200"
            aria-label="Go back"
          >
            <ChevronLeft size={18} />
          </button>

          <img
            src={crempLogo}
            alt="CREMP Logo"
            className="h-9 w-auto object-contain"
          />
        </div>

        <h1 className="text-white text-2xl font-semibold tracking-tight relative z-10">My Profile</h1>
        <p className="text-gray-400 text-xs mt-1 relative z-10">Manage your account information</p>
      </div>

      {/* Content */}
      <div className="px-4 -mt-10 flex flex-col gap-4 pb-8 z-10">

        {/* Profile Card */}
        <motion.div
          variants={item}
          className="bg-white/95 dark:bg-[#121c33] backdrop-blur-md rounded-[4px] p-4 shadow-sm border border-gray-100 dark:border-gray-800 w-full flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-[#0b1b42] text-[#d4af37] flex items-center justify-center text-xl font-bold border-2 border-[#d4af37]/60 shadow-md shadow-[#d4af37]/10">
                A
              </div>
              <button
                onClick={onEditProfile}
                className="absolute -bottom-0.5 -right-0.5 w-5 h-5 bg-[#d4af37] rounded-full flex items-center justify-center border-2 border-white dark:border-[#121c33] text-white"
                aria-label="Edit profile picture"
              >
                <Edit size={10} />
              </button>
            </div>

            <div className="flex flex-col">
              <h2 className="text-lg font-bold text-[#0a1128] dark:text-white tracking-tight">{myProfileData.name}</h2>
              <div className="mt-0.5 flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-800/60 rounded-[2px] w-fit">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">{myProfileData.status}</span>
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onEditProfile}
            className="w-9 h-9 rounded-[4px] bg-[#0b1b42] text-white flex items-center justify-center shadow-md shadow-[#0a1128]/25 border border-[#d4af37]/30"
            aria-label="Edit profile"
          >
            <Edit size={16} />
          </motion.button>
        </motion.div>

        {/* Contact Information Section */}
        <motion.div variants={item} className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="flex w-fit items-center gap-1.5 rounded-[2px] border border-[#d4af37]/20 bg-white/60 dark:bg-[#d4af37]/5 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-[#d4af37] shadow-sm backdrop-blur-xl">
              Contact
            </span>
          </div>
          <h3 className="text-base font-semibold text-[#0a1128] dark:text-white tracking-tight">Contact Information</h3>

          <div className="bg-white/95 dark:bg-[#121c33] backdrop-blur-md rounded-[4px] shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col divide-y divide-gray-100 dark:divide-gray-800">
            <motion.div
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="p-3.5 flex items-center justify-between cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.3 }}
                  className="w-9 h-9 rounded-[4px] bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white shadow-sm shadow-orange-500/20 shrink-0"
                >
                  <Mail size={16} />
                </motion.div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email Address</span>
                  <span className="text-[14px] font-bold text-[#0a1128] dark:text-white">{myProfileData.email}</span>
                </div>
              </div>
              <ChevronRightIcon />
            </motion.div>

            <motion.div
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="p-3.5 flex items-center justify-between cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.3 }}
                  className="w-9 h-9 rounded-[4px] bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-sm shadow-blue-500/20 shrink-0"
                >
                  <Phone size={16} />
                </motion.div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Mobile Number</span>
                  <span className="text-[14px] font-bold text-[#0a1128] dark:text-white">{myProfileData.mobile}</span>
                </div>
              </div>
              <ChevronRightIcon />
            </motion.div>
          </div>
        </motion.div>

        {/* Account Section */}
        <motion.div variants={item} className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="flex w-fit items-center gap-1.5 rounded-[2px] border border-[#d4af37]/20 bg-white/60 dark:bg-[#d4af37]/5 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-[#d4af37] shadow-sm backdrop-blur-xl">
              Account
            </span>
          </div>
          <h3 className="text-base font-semibold text-[#0a1128] dark:text-white tracking-tight">Account Settings</h3>

          <motion.button
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="bg-white/95 dark:bg-[#121c33] backdrop-blur-md rounded-[4px] p-3.5 shadow-sm border border-gray-100 dark:border-gray-800 flex items-center justify-between w-full hover:border-rose-200 dark:hover:border-rose-800/60 transition-colors duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-[4px] bg-gradient-to-br from-rose-500 to-red-600 flex items-center justify-center text-white shadow-sm shadow-rose-500/20 shrink-0">
                <LogOut size={16} />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[14px] font-bold text-rose-600 dark:text-rose-400">Logout</span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400">Sign out from your account</span>
              </div>
            </div>
            <ChevronRightIcon />
          </motion.button>
        </motion.div>

        {/* Security Banner */}
        <motion.div
          variants={item}
          className="bg-[#0b1b42] border border-white/5 rounded-[4px] p-4 flex items-center gap-3 shadow-sm relative overflow-hidden"
        >
          <div className="absolute -right-4 -top-4 w-16 h-16 bg-white/5 rounded-full blur-xl" />
          <div className="w-10 h-10 rounded-full bg-[#d4af37] flex items-center justify-center text-white shadow-md shadow-[#d4af37]/25 shrink-0 z-10">
            <ShieldCheck size={20} />
          </div>
          <div className="flex flex-col z-10">
            <span className="text-[13px] font-bold text-white">Your account is secure</span>
            <span className="text-[11px] text-gray-400 leading-snug mt-0.5">Data protected with industry-standard security.</span>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}

function ChevronRightIcon() {
  return <ChevronLeft size={16} className="text-gray-400 dark:text-gray-500 rotate-180" />;
}
