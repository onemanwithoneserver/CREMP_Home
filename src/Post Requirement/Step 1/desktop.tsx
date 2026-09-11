import { Menu, Lock, Search } from "lucide-react";
import { motion } from "framer-motion";
import { step1Features } from "./data";

interface Step1DesktopProps {
  onNext: () => void;
}

export default function Step1Desktop({ onNext }: Step1DesktopProps) {
  return (
    <div className="h-full min-h-full w-full bg-gray-50 text-[#0a1128] flex flex-col font-sans relative overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#d4af37]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#d4af37]/10 rounded-full blur-[120px] pointer-events-none" />

      <header className="flex items-center justify-between px-10 py-6 border-b border-gray-200 max-w-7xl mx-auto w-full relative z-10">
        <h1 className="text-[32px] font-bold leading-tight text-[#0a1128]">
          Post Your <span className="text-[#d4af37]">Requirement</span>
        </h1>
        <button className="w-12 h-12 rounded-[4px] bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
          <Menu size={24} />
        </button>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-10 py-16 flex items-center gap-20 relative z-10">
        
        <div className="flex-1">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[48px] font-bold leading-tight text-[#0a1128] mb-6 drop-shadow-sm"
          >
            Can't Find the <br />
            <span className="text-[#d4af37]">Right Property?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[16px] text-gray-600 leading-relaxed font-medium max-w-lg mb-12"
          >
            Many great opportunities are not listed online. Post your requirement and let
            our network of brokers, property owners, developers and sellers reach out to you.
          </motion.p>

          <div className="bg-white rounded-[4px] border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 mb-8 flex flex-col gap-6 max-w-lg relative overflow-hidden">
            <div className="absolute top-0 inset-x-1 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />
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
                  <div className="w-10 h-10 rounded-[4px] bg-[#d4af37]/10 flex items-center justify-center shrink-0 border border-[#d4af37]/20 shadow-sm">
                    <Icon size={20} className="text-[#d4af37]" />
                  </div>
                  <span className="text-[15px] font-bold text-gray-800">
                    {feature.text}
                  </span>
                </motion.div>
              );
            })}
          </div>

          <div className="max-w-lg">
             <div className="flex items-start gap-3 mb-8">
              <Lock size={16} className="text-[#d4af37] shrink-0 mt-1" />
              <p className="text-[12px] text-gray-500 leading-relaxed font-medium uppercase tracking-wider">
                Your contact details will only be shared with relevant stakeholders who can help fulfill your requirement.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onNext}
              className="w-full py-5 rounded-[4px] text-white font-bold text-[18px] shadow-[0_4px_24px_rgba(212,175,55,0.3)] flex items-center justify-center transition-all border border-[#d4af37]"
              style={{
                background: "linear-gradient(135deg, #d4af37 0%, #aa8922 100%)",
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
          className="flex-1 flex justify-center items-center relative"
        >
          <div className="w-[400px] h-[400px] rounded-[4px] bg-white border border-gray-100 flex items-center justify-center relative shadow-[0_15px_50px_rgba(0,0,0,0.08)]">
             <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af37]/5 to-transparent rounded-[4px]"></div>
             <Search className="w-40 h-40 text-gray-200 relative z-10" />
             <div className="absolute bottom-16 right-16 w-10 h-10 bg-green-500 rounded-full border-4 border-white z-20 shadow-lg"></div>
             
             {/* Decorative elements */}
             <div className="absolute top-10 left-10 w-20 h-20 border border-[#d4af37]/20 rounded-[4px] rotate-12" />
             <div className="absolute bottom-10 left-20 w-12 h-12 border border-gray-200 rounded-full" />
          </div>
        </motion.div>

      </main>
    </div>
  );
}
