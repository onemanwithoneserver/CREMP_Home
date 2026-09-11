import { Menu, Lock, Search } from "lucide-react";
import { motion } from "framer-motion";
import { step1Features } from "./data";
import MobileStickyFooter from "../../components/commonfiles/Footer/MobileStickyFooter";

interface Step1MobileProps {
  onNext: () => void;
}

export default function Step1Mobile({ onNext }: Step1MobileProps) {
  return (
    <div className="min-h-screen bg-gray-50 text-[#0a1128] flex flex-col font-sans pb-20">
      <header className="flex items-center justify-between p-4 pb-2">
        <h1 className="text-[24px] font-bold leading-tight">
          Post Your <br />
          <span className="text-[#d4af37]">Requirement</span>
        </h1>
        <button className="w-10 h-10 rounded-[4px] bg-white border border-gray-200 flex items-center justify-center text-gray-700 shrink-0 shadow-sm">
          <Menu size={20} />
        </button>
      </header>

      <main className="flex-1 px-4 pt-6 pb-24 text-[#0a1128] flex flex-col">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex-1">
            <h2 className="text-[20px] font-bold leading-tight text-[#0a1128] mb-2">
              Can't Find the <br />
              <span className="text-[#d4af37]">Right Property?</span>
            </h2>
            <p className="text-[12px] text-gray-500 leading-relaxed font-medium">
              Many great opportunities are not listed online. Post your requirement and let
              our network of brokers, property owners, developers and sellers reach out to you.
            </p>
          </div>
          <div className="w-[80px] h-[80px] shrink-0 bg-white rounded-[4px] flex items-center justify-center border border-gray-200 relative shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
             <Search className="w-8 h-8 text-[#d4af37]/70" />
             <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
        </div>

        <div className="bg-white rounded-[4px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 p-5 mb-6 flex flex-col gap-4">
          {step1Features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={feature.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-[#d4af37]/10 flex items-center justify-center shrink-0 border border-[#d4af37]/20">
                  <Icon size={14} className="text-[#d4af37]" />
                </div>
                <span className="text-[13px] font-bold text-gray-800">
                  {feature.text}
                </span>
              </motion.div>
            );
          })}
        </div>

        <div className="flex items-start gap-3 px-2 mb-8 justify-center">
          <Lock size={14} className="text-[#d4af37] shrink-0 mt-0.5" />
          <p className="text-[10px] text-gray-500 leading-relaxed font-medium uppercase tracking-wider text-center">
            Your contact details will only be shared with relevant stakeholders who can help fulfill your requirement.
          </p>
        </div>

        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={onNext}
          className="w-full py-4 rounded-[4px] text-white font-bold text-[15px] shadow-[0_4px_20px_rgba(212,175,55,0.3)] flex items-center justify-center transition-all border border-[#d4af37]"
          style={{
            background: "linear-gradient(135deg, #d4af37 0%, #aa8922 100%)",
          }}
        >
          Post My Requirement
        </motion.button>
      </main>

      <MobileStickyFooter />
    </div>
  );
}
