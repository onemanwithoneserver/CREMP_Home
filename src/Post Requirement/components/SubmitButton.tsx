import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Rocket, Check, Building2 } from "lucide-react";

interface SubmitButtonProps {
  onSubmit: () => void;
}

export default function SubmitButton({ onSubmit }: SubmitButtonProps) {
  const [status, setStatus] = useState<"idle" | "launching" | "success">("idle");

  const handleClick = async () => {
    if (status !== "idle") return;
    setStatus("launching");
    
    await new Promise(resolve => setTimeout(resolve, 1800));
    setStatus("success");
    
    await new Promise(resolve => setTimeout(resolve, 1200));
    onSubmit();
  };

  return (
    <div className="flex justify-center w-full h-[72px] items-center relative">
      <motion.button
        onClick={handleClick}
        animate={{
          width: status === "launching" ? 64 : "100%",
          height: status === "launching" ? 64 : 64,
          borderRadius: status === "launching" ? 32 : 16,
          backgroundColor: status === "success" ? "#10b981" : "#d4af37",
        }}
        transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
        className="relative flex items-center justify-center overflow-hidden text-white font-bold text-[18px] shadow-xl shadow-[#d4af37]/20"
        style={{
          background: status === "idle" ? "linear-gradient(135deg, #d4af37 0%, #f3cd52 100%)" : undefined,
          color: status === "idle" ? "#0a1128" : "white"
        }}
      >
        <AnimatePresence mode="wait">
          {status === "idle" && (
            <motion.div
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: 10 }}
              className="flex items-center gap-3"
            >
              Submit Requirement <Rocket size={20} className="ml-1" />
            </motion.div>
          )}

          {status === "launching" && (
            <motion.div
              key="launching"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: -100, opacity: [1, 1, 0] }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute"
            >
              <Building2 size={28} className="text-white drop-shadow-md" />
            </motion.div>
          )}

          {status === "success" && (
            <motion.div
              key="success"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="flex items-center gap-2 text-white"
            >
              <Check size={24} strokeWidth={3} />
              <span>Received!</span>
            </motion.div>
          )}
        </AnimatePresence>

        {status === "launching" && (
          <motion.div 
            className="absolute bottom-[-10px] w-6 h-6 bg-white/40 rounded-full blur-md"
            animate={{ scale: [1, 3, 0], opacity: [0.8, 0], y: [0, 20] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        )}
      </motion.button>
    </div>
  );
}
