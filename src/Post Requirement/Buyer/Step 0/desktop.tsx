import { Target, Home, Clock, CheckSquare, Lock, Search } from "lucide-react";
import { motion } from "framer-motion";
import { formColors } from "../../components/colors";

interface Step0DesktopProps {
  onNext: () => void;
}

export default function Step0Desktop({ onNext }: Step0DesktopProps) {
  const benefits = [
    { icon: Target, text: "Get matched with relevant properties" },
    { icon: Home, text: "Access off-market opportunities" },
    { icon: Clock, text: "Save time on property hunting" },
    { icon: CheckSquare, text: "Receive responses from verified stakeholders" }
  ];

  return (
    <div className="h-full min-h-screen w-full bg-[#f8f9fa] dark:bg-[#020817] text-[#0a1128] dark:text-white font-['Outfit',sans-serif] flex flex-col relative overflow-hidden">
      
      
      <div className="bg-[#1a2b4c] text-white p-6 px-8 flex justify-between items-center shadow-md">
        <div>
          <h1 className="text-[24px] leading-tight">
            Post Your <span className="text-[#d4af37] font-bold">Requirement</span>
          </h1>
        </div>
      </div>

      <main className="flex-1 overflow-y-auto p-8 lg:p-12 pb-12 flex flex-col items-center justify-center">
        
        <div className="max-w-3xl w-full flex flex-col md:flex-row items-center gap-12 mb-6">
          
          <div className="flex-1">
            <h2 className="text-[30px] font-bold leading-tight mb-4 text-[#0a1128] dark:text-white">
              Can't Find the <br />
              <span className="text-[#d4af37]">Right Property?</span>
            </h2>
            <p className="text-[16px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-md">
              Many great opportunities are not listed online. Post your requirement and let our network of brokers, property owners, developers and sellers reach out to you.
            </p>
          </div>

          <div className="w-48 h-48 shrink-0 rounded-full bg-white dark:bg-white/5 flex items-center justify-center relative shadow-xl">
             
             <div className="absolute grid grid-cols-2 gap-2 opacity-20">
               <div className="w-8 h-16 bg-[#0a1128] dark:bg-white rounded-sm"></div>
               <div className="w-8 h-20 bg-[#0a1128] dark:bg-white rounded-sm"></div>
               <div className="w-8 h-12 bg-[#0a1128] dark:bg-white rounded-sm"></div>
               <div className="w-8 h-24 bg-[#0a1128] dark:bg-white rounded-sm"></div>
             </div>
             <Search size={80} className="text-[#0a1128] dark:text-white z-10 drop-shadow-md" strokeWidth={1.5} />
          </div>

        </div>

        
        <div className="w-full max-w-3xl bg-white dark:bg-[#0b1b42] rounded border border-gray-100 dark:border-white/10 shadow-lg p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={idx} 
                  className="flex items-center gap-5"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${formColors[idx % formColors.length].solid}`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <span className="text-[15px] font-bold text-[#0a1128] dark:text-white">
                    {item.text}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        
        <div className="flex items-start gap-4 px-4 mb-6 max-w-2xl text-center justify-center">
          <Lock size={18} className="text-gray-400 shrink-0 mt-0.5" />
          <p className="text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
            Your contact details will only be shared with relevant stakeholders who can help fulfill your requirement.
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onNext}
          className="px-12 py-5 rounded font-bold text-[18px] flex items-center justify-center shadow-lg transition-transform"
          style={{ background: "linear-gradient(135deg, #c5a034 0%, #dcae3a 100%)", color: "#ffffff" }}
        >
          Post My Requirement
        </motion.button>

      </main>
    </div>
  );
}
