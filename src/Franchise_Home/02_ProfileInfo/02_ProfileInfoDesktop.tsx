import { motion } from "framer-motion";
import { profileInfoData } from "./data";
import { CheckCircle } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 400, damping: 30 } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function ProfileInfoDesktop() {
  return (
    <section className="w-full bg-[#0a1128] px-6 py-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="flex items-start justify-between gap-8"
        >
          <motion.div variants={fadeInUp} className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                <span className="text-[#D4AF37] font-bold text-lg">UB</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-bold text-white">
                    {profileInfoData.brandName}
                  </h1>
                  {profileInfoData.isVerified && (
                    <span className="flex items-center gap-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-bold px-2 py-0.5 rounded-full">
                      <CheckCircle size={10} /> Verified
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-xs">{profileInfoData.category}</p>
              </div>
            </div>

            <p className="text-[#D4AF37] text-sm font-semibold italic mt-4 mb-3">
              {profileInfoData.tagline}
            </p>

            <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-xl">
              {profileInfoData.description}
            </p>

            <p className="text-gray-500 text-xs mb-3">
              BUILT DURING EXPANSION ACROSS
            </p>

            <div className="flex flex-wrap gap-2">
              {profileInfoData.locationTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full border border-gray-700 text-gray-300 hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="w-[320px] bg-[#0d1a3a] border border-gray-800 rounded-xl p-5"
          >
            <div className="grid grid-cols-1 gap-3">
              {profileInfoData.keyDetails.map((detail) => {
                const Icon = detail.icon;
                return (
                  <div
                    key={detail.label}
                    className="flex items-center gap-3 py-2 border-b border-gray-800/50 last:border-0"
                  >
                    <Icon size={16} className="text-[#D4AF37] shrink-0" />
                    <div className="flex-1">
                      <span className="text-gray-500 text-[10px] uppercase tracking-wider">
                        {detail.label}
                      </span>
                      <p className="text-white text-sm font-medium">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
