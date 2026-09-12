import { Target, Home, Clock, CheckSquare, Lock, Search, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { formColors } from "../../components/colors";

interface Step0MobileProps {
  onNext: () => void;
}

export default function Step0Mobile({ onNext }: Step0MobileProps) {
  const benefits = [
    { icon: Target, text: "Get matched with relevant properties" },
    { icon: Home, text: "Access off-market opportunities" },
    { icon: Clock, text: "Save time on property hunting" },
    { icon: CheckSquare, text: "Receive responses from verified stakeholders" }
  ];

  return (
    <div className="h-full min-h-screen w-full bg-white dark:bg-[#060e24] text-[#0a1128] dark:text-white font-['Outfit',sans-serif] flex flex-col relative overflow-hidden">
      
      
      <div className="bg-[#1a2b4c] text-white p-4 flex justify-between items-center shadow-md">
        <div>
          <h1 className="text-[20px] leading-tight">
            Post Your <br />
            <span className="text-[#d4af37] font-bold">Requirement</span>
          </h1>
        </div>
        <button className="w-10 h-10 rounded bg-white/10 flex items-center justify-center">
          <Menu size={20} />
        </button>
      </div>

      <main className="flex-1 overflow-y-auto p-5 pb-24 flex flex-col justify-center">
        
        
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <h2 className="text-[22px] font-bold leading-tight mb-2 text-[#0a1128] dark:text-white">
              Can't Find the <br />
              <span className="text-[#d4af37]">Right Property?</span>
            </h2>
            <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">
              Many great opportunities are not listed online. Post your requirement and let our network of brokers, property owners, developers and sellers reach out to you.
            </p>
          </div>
          <div className="w-24 h-24 shrink-0 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center relative shadow-inner">
             
             <div className="absolute grid grid-cols-2 gap-1 opacity-20">
               <div className="w-4 h-8 bg-[#0a1128] dark:bg-white rounded-sm"></div>
               <div className="w-4 h-10 bg-[#0a1128] dark:bg-white rounded-sm"></div>
               <div className="w-4 h-6 bg-[#0a1128] dark:bg-white rounded-sm"></div>
               <div className="w-4 h-12 bg-[#0a1128] dark:bg-white rounded-sm"></div>
             </div>
             <Search size={40} className="text-[#0a1128] dark:text-white z-10 drop-shadow-md" strokeWidth={1.5} />
          </div>
        </div>

        
        <div className="bg-white dark:bg-[#0b1b42] rounded border border-gray-100 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)] p-4 mb-4">
          <div className="flex flex-col gap-5">
            {benefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={idx} 
                  className="flex items-center gap-4"
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${formColors[idx % formColors.length].solid}`}>
                    <Icon size={16} className="text-white" />
                  </div>
                  <span className="text-[13px] font-bold text-[#0a1128] dark:text-white">
                    {item.text}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        
        <div className="flex items-start gap-3 px-2 mb-4">
          <Lock size={16} className="text-gray-400 shrink-0 mt-0.5" />
          <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
            Your contact details will only be shared with relevant stakeholders who can help fulfill your requirement.
          </p>
        </div>

      </main>

      
      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-white dark:from-[#060e24] via-white/90 dark:via-[#060e24]/90 to-transparent">
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={onNext}
          className="w-full py-4 rounded font-bold text-[15px] flex items-center justify-center shadow-lg"
          style={{ background: "linear-gradient(135deg, #c5a034 0%, #dcae3a 100%)", color: "#ffffff" }}
        >
          Post My Requirement
        </motion.button>
      </div>
      
    </div>
  );
}
