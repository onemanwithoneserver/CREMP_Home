import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Video, X } from 'lucide-react';

export default function Desktop() {
  const [isOpen, setIsOpen] = useState(false);

  const connectOptions = [
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      icon: MessageCircle,
      color: 'bg-green-500 hover:bg-green-400',
      action: () => window.open('https://wa.me/1234567890', '_blank')
    },
    {
      id: 'phone',
      label: 'Call Us',
      icon: Phone,
      color: 'bg-blue-500 hover:bg-blue-400',
      action: () => window.open('tel:+1234567890', '_self')
    },
    {
      id: 'meet',
      label: 'Book a Meet',
      icon: Video,
      color: 'bg-[#F6B23B] hover:bg-[#ffc15e] text-black',
      action: () => window.open('https://meet.google.com', '_blank')
    }
  ];

  return (
    <div className="fixed bottom-8 right-8 z-[100] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 flex flex-col gap-3"
          >
            {connectOptions.map((option, idx) => (
              <motion.button
                key={option.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: (connectOptions.length - 1 - idx) * 0.05 }}
                onClick={option.action}
                className="group flex items-center justify-end gap-3"
              >
                <span className="rounded-[4px] bg-[#0C1525]/90 px-3 py-1.5 text-sm font-semibold text-white shadow-lg backdrop-blur-sm transition-opacity group-hover:opacity-100 opacity-0 md:opacity-100">
                  {option.label}
                </span>
                <div className={`flex h-12 w-12 items-center justify-center rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-transform hover:scale-110 active:scale-95 ${option.color} ${option.id === 'meet' ? 'text-black' : 'text-white'}`}>
                  <option.icon className="h-5 w-5" strokeWidth={2} />
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#F6B23B] text-black shadow-[0_0_25px_rgba(246,178,59,0.4)] transition-all hover:bg-[#ffc15e]"
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? (
            <X className="h-7 w-7" strokeWidth={2.5} />
          ) : (
            <MessageCircle className="h-7 w-7" strokeWidth={2.5} />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
}
