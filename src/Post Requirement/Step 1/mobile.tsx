import { Menu, Lock, Search } from "lucide-react";
import { motion } from "framer-motion";
import { step1Features } from "./data";
import MobileStickyFooter from "../../components/commonfiles/Footer/MobileStickyFooter";

interface Step1MobileProps {
  onNext: () => void;
}

export default function Step1Mobile({ onNext }: Step1MobileProps) {
  return (
    <div className="min-h-screen bg-[#0a1128] text-white flex flex-col font-sans">
      <header className="flex items-center justify-between p-5 pb-4">
        <h1 className="text-[26px] font-bold leading-tight">
          Post Your <br />
          <span className="text-[#d4af37]">Requirement</span>
        </h1>
        <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 shrink-0">
          <Menu size={20} />
        </button>
      </header>

      <main className="flex-1 bg-white rounded-t-[32px] mt-2 px-5 pt-8 pb-[100px] text-[#0a1128] flex flex-col">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex-1">
            <h2 className="text-[24px] font-bold leading-tight text-[#0a1128] mb-2">
              Can't Find the <br />
              <span className="text-[#d4af37]">Right Property?</span>
            </h2>
            <p className="text-[13px] text-gray-500 leading-relaxed font-medium">
              Many great opportunities are not listed online. Post your requirement and let
              our network of brokers, property owners, developers and sellers reach out to you.
            </p>
          </div>
          <div className="w-[100px] h-[100px] shrink-0 bg-gray-50 rounded-full flex items-center justify-center border-4 border-gray-100 relative">
             <Search className="w-10 h-10 text-gray-400" />
             <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100 p-5 mb-6 flex flex-col gap-5">
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
                <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-[#d4af37]" />
                </div>
                <span className="text-[13px] font-semibold text-[#0a1128]">
                  {feature.text}
                </span>
              </motion.div>
            );
          })}
        </div>

        <div className="flex items-start gap-3 px-2 mb-8">
          <Lock size={16} className="text-gray-400 shrink-0 mt-0.5" />
          <p className="text-[11px] text-gray-500 leading-relaxed font-medium">
            Your contact details will only be shared with relevant stakeholders who can help fulfill your requirement.
          </p>
        </div>

        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={onNext}
          className="w-full py-4 rounded-xl text-white font-bold text-[15px] shadow-lg shadow-[#d4af37]/20 flex items-center justify-center transition-all"
          style={{
            background: "linear-gradient(135deg, #d4af37 0%, #f3cd52 100%)",
            color: "#0a1128",
          }}
        >
          Post My Requirement
        </motion.button>
      </main>

      <MobileStickyFooter />
    </div>
  );
}
