import { motion } from 'framer-motion'
import { categoriesData } from './data'
import { Users, ChevronRight, ShieldCheck, Star } from 'lucide-react'

export default function MobileCategories() {
  return (
    <div className="w-full bg-gray-50 dark:bg-[#050C17] pt-16 pb-16 px-5 relative overflow-hidden">
      
      {/* Background Dot Pattern (Faint) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#B27F1C 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

      <div className="flex flex-col items-center text-center relative z-10">
        
        <motion.div 
           initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
           className="flex items-center gap-3 mb-4"
        >
           <div className="w-6 h-[2px] bg-[#B27F1C] dark:bg-[#F6B23B]" />
           <span className="text-[0.55rem] font-bold text-[#C79A17] tracking-widest uppercase">
             {categoriesData.tag}
           </span>
           <div className="w-6 h-[2px] bg-[#B27F1C] dark:bg-[#F6B23B]" />
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="text-[2.2rem] font-black text-gray-900 dark:text-white leading-[1.1] tracking-tight mb-4"
        >
          {categoriesData.title}
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="text-[0.95rem] text-gray-600 dark:text-gray-400 font-medium leading-relaxed mb-10"
        >
          {categoriesData.desc}
        </motion.p>

        {/* Categories Grid (Mobile: 3 columns) */}
        <div className="w-full grid grid-cols-3 gap-3 mb-12">
           {categoriesData.categories.map((category, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 * idx }}
               className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-sm border border-[#E2E6EE] h-32"
             >
                <div className="w-10 h-10 rounded-full bg-[rgba(199, 154, 23, 0.05)] flex items-center justify-center text-gray-900 dark:text-white mb-3 relative">
                   <category.icon size={18} strokeWidth={1.5} className="relative z-10" />
                </div>
                <span className="text-[0.6rem] font-bold text-gray-900 dark:text-white whitespace-pre-line leading-tight">
                  {category.label}
                </span>
                <div className="w-3 h-[2px] bg-[#B27F1C] dark:bg-[#F6B23B] mt-2 opacity-50" />
             </motion.div>
           ))}
        </div>

        {/* Bottom CTA Area */}
        <motion.div 
           initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
           className="flex flex-col items-center gap-5 w-full"
        >
           <div className="flex items-center gap-2 mb-1">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E2E6EE]" />
              <Star size={12} className="text-[#B27F1C] dark:text-[#F6B23B] fill-[#B27F1C] dark:fill-[#F6B23B]" />
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E2E6EE]" />
           </div>

           <button className="w-full max-w-[280px] bg-white dark:bg-[#0C1525] text-gray-900 dark:text-white px-6 py-4 rounded-xl font-bold text-[1rem] shadow-lg flex items-center justify-center gap-3">
              <Users size={18} className="text-[#B27F1C] dark:text-[#F6B23B]" />
              {categoriesData.button.text}
              <ChevronRight size={18} className="text-gray-900 dark:text-white/70" />
           </button>
           
           <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
              <ShieldCheck size={14} className="text-[#B27F1C] dark:text-[#F6B23B]" />
              <span className="text-[0.65rem] font-medium">{categoriesData.bottomDisclaimer}</span>
           </div>
        </motion.div>

      </div>
    </div>
  )
}
