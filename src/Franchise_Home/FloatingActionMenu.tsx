import { useState } from "react";
import { Share2, Phone, MessageCircle, Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

export default function FloatingActionMenu({
  isMobile,
}: {
  isMobile: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  if (!isMobile) return null;

  return (
    <div className="fixed bottom-24 right-4 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-3"
          >
            <button
              className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg active:scale-95 transition-transform"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} strokeWidth={2} />
            </button>
            <button
              className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg active:scale-95 transition-transform"
              aria-label="Call"
            >
              <Phone size={20} strokeWidth={2} />
            </button>
            <button
              className="w-12 h-12 rounded-full bg-white text-gray-800 flex items-center justify-center shadow-lg active:scale-95 transition-transform border border-gray-100"
              aria-label="Share"
            >
              <Share2 size={20} strokeWidth={2} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "w-12 h-12 rounded-full flex items-center justify-center shadow-xl active:scale-95 transition-all duration-300",
          isOpen
            ? "bg-gray-800 text-white"
            : "bg-gradient-to-r from-[#e3b856] to-[#c69a54] text-white",
        )}
        aria-label="Menu"
      >
        {isOpen ? <X size={24} /> : <Plus size={24} />}
      </button>
    </div>
  );
}
