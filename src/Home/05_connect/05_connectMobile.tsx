import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Video, X } from 'lucide-react';

export default function Mobile() {
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
      color: 'bg-[#B27F1C] hover:bg-[#d49924] dark:bg-[#F6B23B] dark:hover:bg-[#ffc15e] text-white dark:text-black',
      action: () => window.open('https://meet.google.com', '_blank')
    }
  ];

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[90] bg-white/60 dark:bg-[#050C17]/60 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-6 right-6 z-[100] font-sans">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-16 right-0 flex flex-col gap-4"
            >
              {connectOptions.map((option, idx) => (
                <motion.button
                  key={option.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: (connectOptions.length - 1 - idx) * 0.05 }}
                  onClick={option.action}
                  className="flex items-center justify-end gap-3 active:scale-95"
                >
                  <span className="rounded-[4px] bg-white dark:bg-[#0C1525] px-3 py-1.5 text-xs font-semibold text-[#050C17] dark:text-white shadow-lg border border-gray-200 dark:border-transparent">
                    {option.label}
                  </span>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(0,0,0,0.5)] ${option.color} ${option.id === 'meet' ? '' : 'text-white'}`}>
                    <option.icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#B27F1C] dark:bg-[#F6B23B] text-white dark:text-black shadow-[0_0_20px_rgba(178,127,28,0.2)] dark:shadow-[0_0_20px_rgba(246,178,59,0.5)] active:bg-[#d49924] dark:active:bg-[#ffc15e]"
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? (
              <X className="h-6 w-6" strokeWidth={2.5} />
            ) : (
              <MessageCircle className="h-6 w-6" strokeWidth={2.5} />
            )}
          </motion.div>
        </motion.button>
      </div>
    </>
  );
}
