import { Menu, Lock, Search } from "lucide-react";
import { motion } from "framer-motion";
import { step1Features } from "./data";

interface Step1DesktopProps {
  onNext: () => void;
}

export default function Step1Desktop({ onNext }: Step1DesktopProps) {
  return (
    <div className="h-full min-h-full w-full bg-[#0a1128] text-white flex flex-col font-sans">
      <header className="flex items-center justify-between px-10 py-6 border-b border-white/10 max-w-7xl mx-auto w-full">
        <h1 className="text-[32px] font-bold leading-tight">
          Post Your <span className="text-[#d4af37]">Requirement</span>
        </h1>
        <button className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
          <Menu size={24} />
        </button>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-10 py-16 flex items-center gap-20">
        
        <div className="flex-1">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[48px] font-bold leading-tight text-white mb-6"
          >
            Can't Find the <br />
            <span className="text-[#d4af37]">Right Property?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[18px] text-white/70 leading-relaxed font-medium max-w-lg mb-12"
          >
            Many great opportunities are not listed online. Post your requirement and let
            our network of brokers, property owners, developers and sellers reach out to you.
          </motion.p>

          <div className="bg-white/5 rounded-3xl border border-white/10 p-8 mb-8 flex flex-col gap-6 max-w-lg">
            {step1Features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div 
                  key={feature.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex items-center gap-5"
                >
                  <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-[#d4af37]" />
                  </div>
                  <span className="text-[16px] font-semibold text-white/90">
                    {feature.text}
                  </span>
                </motion.div>
              );
            })}
          </div>

          <div className="max-w-lg">
             <div className="flex items-start gap-3 mb-8">
              <Lock size={18} className="text-white/40 shrink-0 mt-0.5" />
              <p className="text-[14px] text-white/50 leading-relaxed font-medium">
                Your contact details will only be shared with relevant stakeholders who can help fulfill your requirement.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onNext}
              className="w-full py-5 rounded-2xl text-white font-bold text-[18px] shadow-2xl shadow-[#d4af37]/20 flex items-center justify-center transition-all cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #d4af37 0%, #f3cd52 100%)",
                color: "#0a1128",
              }}
            >
              Post My Requirement
            </motion.button>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex justify-center items-center"
        >
          <div className="w-[400px] h-[400px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center relative backdrop-blur-3xl shadow-2xl">
             <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af37]/20 to-transparent rounded-full blur-3xl"></div>
             <Search className="w-40 h-40 text-white/20 relative z-10" />
             <div className="absolute bottom-20 right-20 w-12 h-12 bg-green-400 rounded-full border-4 border-[#0a1128] z-20 shadow-xl"></div>
          </div>
        </motion.div>

      </main>
    </div>
  );
}
