import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BrokerSearchProps {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  className?: string;
}

export default function BrokerSearch({
  value,
  onChange,
  placeholder = 'Search by name, expertise or location…',
  className = '',
}: BrokerSearchProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={`w-full relative flex items-center bg-white dark:bg-[#0b1b42] dark:border-white/10 border border-black/[0.08] rounded-[8px] shadow-sm hover:border-[#d4af37]/50 focus-within:border-[#d4af37] focus-within:shadow-[0_0_0_3px_rgba(212,175,55,0.12)] transition-all ${className}`}
      onClick={() => inputRef.current?.focus()}
    >
      
      <div className="pl-3.5 shrink-0 text-[#a0aabf]">
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <circle cx="9" cy="9" r="6" />
          <path d="M15 15l3 3" />
        </svg>
      </div>

      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="flex-1 bg-transparent text-[13px] text-[#0a1128] dark:text-white placeholder-[#a0aabf] font-medium px-3 py-2.5 outline-none min-w-0"
        style={{ fontFamily: 'Outfit, sans-serif' }}
      />

      
      <AnimatePresence>
        {value && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              onChange('');
            }}
            aria-label="Clear search"
            className="mr-3 shrink-0 w-5 h-5 flex items-center justify-center rounded-full bg-black/[0.06] dark:bg-white/10 text-[#637089] dark:text-white hover:bg-black/[0.1] transition-colors cursor-pointer"
          >
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-2.5 h-2.5">
              <path d="M4 4l8 8M12 4l-8 8" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
