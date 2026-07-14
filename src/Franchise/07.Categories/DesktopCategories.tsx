import { motion } from 'framer-motion'
import { Container } from '../../components/layout'
import { categoriesData } from './data'
import { Users, ChevronRight, ShieldCheck, Star } from 'lucide-react'

export default function DesktopCategories() {
  return (
    <div className="w-full bg-[#ffffff] pt-24 pb-24 relative overflow-hidden">
      
      {/* Background Dot Pattern (Faint) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#d97706 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <Container className="relative z-10 flex flex-col items-center text-center">
        
        <motion.div 
           initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
           className="flex items-center gap-4 mb-6"
        >
           <div className="w-8 h-[2px] bg-[#d97706]" />
           <span className="text-[0.7rem] font-bold text-[#C79A17] tracking-widest uppercase">
             {categoriesData.tag}
           </span>
           <div className="w-8 h-[2px] bg-[#d97706]" />
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="text-[3.2rem] font-black text-[#2A3A69] leading-[1.1] tracking-tight mb-6"
        >
          {categoriesData.title}
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="text-[1.1rem] text-[#3A4566] font-medium leading-relaxed max-w-3xl mb-16"
        >
          {categoriesData.desc}
        </motion.p>

        {/* Categories Grid */}
        <div className="w-full grid grid-cols-6 gap-6 mb-16">
           {categoriesData.categories.map((category, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 * (idx % 6) }}
               className="bg-white rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-[#E2E6EE] hover:shadow-[0_8px_30px_rgba(217,119,6,0.12)] hover:border-[#d97706]/30 transition-all group cursor-pointer h-44"
             >
                <div className="w-16 h-16 rounded-full bg-[rgba(199, 154, 23, 0.05)] flex items-center justify-center text-[#2A3A69] mb-4 group-hover:bg-[#d97706] group-hover:text-white transition-colors relative">
                   <div className="absolute -inset-1 bg-[#d97706]/10 rounded-full scale-0 group-hover:scale-100 transition-transform" />
                   <category.icon size={28} strokeWidth={1.5} className="relative z-10" />
                </div>
                <span className="text-[0.85rem] font-bold text-[#2A3A69] whitespace-pre-line leading-tight">
                  {category.label}
                </span>
                <div className="w-4 h-[2px] bg-[#d97706] mt-4 opacity-50 group-hover:opacity-100 transition-opacity" />
             </motion.div>
           ))}
        </div>

        {/* Bottom CTA Area */}
        <motion.div 
           initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
           className="flex flex-col items-center gap-6"
        >
           <div className="flex items-center gap-2 mb-2">
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#E2E6EE]" />
              <Star size={16} className="text-[#d97706] fill-[#d97706]" />
              <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#E2E6EE]" />
           </div>

           <button className="bg-[#2A3A69] hover:bg-[#2A3A69] text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl transition-all flex items-center gap-3 transform hover:scale-105">
              <Users size={20} className="text-[#d97706]" />
              {categoriesData.button.text}
              <ChevronRight size={20} className="text-white/70" />
           </button>
           
           <div className="flex items-center gap-2 text-[#6B7491]">
              <ShieldCheck size={16} className="text-[#d97706]" />
              <span className="text-[0.85rem] font-medium">{categoriesData.bottomDisclaimer}</span>
           </div>
        </motion.div>

      </Container>
    </div>
  )
}
