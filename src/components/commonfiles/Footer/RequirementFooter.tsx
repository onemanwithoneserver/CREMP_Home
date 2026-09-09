import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface RequirementFooterProps {
  onContinue: () => void;
}

export default function RequirementFooter({ onContinue }: RequirementFooterProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 pb-8 z-50 shadow-[0_-4px_24px_rgba(0,0,0,0.04)]">
      <div className="flex items-center justify-between max-w-5xl mx-auto">
        <div className="flex flex-col">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Requirement</span>
          <span className="text-[14px] font-bold text-[#0a1128]">Form in progress</span>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onContinue}
          className="flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-[14px]"
          style={{ background: "linear-gradient(135deg, #d4af37 0%, #f3cd52 100%)", color: "#0a1128" }}
        >
          Continue <ArrowRight size={16} />
        </motion.button>
      </div>
    </div>
  );
}
