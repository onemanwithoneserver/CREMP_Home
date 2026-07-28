import { motion } from "framer-motion";
import { profileInfoData } from "./data";
import { CheckCircle } from "lucide-react";

export default function ProfileInfoMobile() {
  return (
    <section className="w-full bg-[#0a1128] px-4 py-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
            <span className="text-[#D4AF37] font-bold text-sm">UB</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base font-bold text-white">{profileInfoData.brandName}</h1>
              {profileInfoData.isVerified && (
                <span className="flex items-center gap-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-[8px] font-bold px-1.5 py-0.5 rounded-full">
                  <CheckCircle size={8} /> Verified
                </span>
              )}
            </div>
            <p className="text-gray-400 text-[10px]">{profileInfoData.category}</p>
          </div>
        </div>

        <p className="text-[#D4AF37] text-xs font-semibold italic mb-2">
          {profileInfoData.tagline}
        </p>

        <p className="text-gray-400 text-xs leading-relaxed mb-3">
          {profileInfoData.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {profileInfoData.locationTags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[10px] rounded-full border border-gray-700 text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="bg-[#0d1a3a] border border-gray-800 rounded-xl p-4">
          <div className="grid grid-cols-2 gap-3">
            {profileInfoData.keyDetails.map((detail) => {
              const Icon = detail.icon;
              return (
                <div key={detail.label} className="flex items-center gap-2">
                  <Icon size={12} className="text-[#D4AF37] shrink-0" />
                  <div>
                    <span className="text-gray-500 text-[8px] uppercase tracking-wider block">
                      {detail.label}
                    </span>
                    <p className="text-white text-[10px] font-medium">{detail.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
