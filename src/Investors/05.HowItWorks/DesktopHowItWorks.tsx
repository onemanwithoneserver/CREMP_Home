import { motion } from 'framer-motion';
import { Container } from '../../components/layout';
import { howItWorksData } from './data';



export default function DesktopHowItWorks() {
  return (
    <div className="relative w-full overflow-hidden bg-white py-24 transition-colors duration-700 dark:bg-[#050C17]">
      <Container className="relative z-10 max-w-7xl px-4 xl:px-0">
        
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-4 inline-flex items-center justify-center">
            <span className="rounded-[8px] border border-[#B27F1C]/20 bg-[#B27F1C]/5 px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-widest text-[#B27F1C] dark:border-[#F6B23B]/20 dark:bg-[#F6B23B]/10 dark:text-[#F6B23B]">
              {howItWorksData.tag}
            </span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="mb-6 text-[3rem] font-black leading-tight text-gray-900 dark:text-white">
            {howItWorksData.titleBase} <br />
            <span className="bg-gradient-to-r from-[#B27F1C] to-[#d49924] bg-clip-text text-transparent dark:from-[#F6B23B] dark:to-[#f9d08b]">
              {howItWorksData.titleHighlight}
            </span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mx-auto max-w-2xl text-[1.1rem] leading-relaxed text-gray-600 dark:text-gray-400">
            {howItWorksData.desc[0]}
          </motion.p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          
          <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#B27F1C]/30 via-gray-200 to-transparent dark:from-[#F6B23B]/30 dark:via-gray-800" />
          
          <div className="flex flex-col gap-12">
            {howItWorksData.steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                  className={`flex w-full items-center justify-between ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-[45%] ${isEven ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-block rounded-[8px] border border-gray-100 bg-gray-50 p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl dark:border-gray-800 dark:bg-[#0a101d] ${isEven ? 'hover:shadow-[-20px_20px_40px_rgba(30,107,79,0.05)]' : 'hover:shadow-[20px_20px_40px_rgba(30,107,79,0.05)]'}`}>
                      <span className="mb-2 block text-[0.7rem] font-black uppercase tracking-widest text-[#B27F1C] dark:text-[#F6B23B]">{step.step}</span>
                      <h3 className="mb-3 text-xl font-black text-gray-900 dark:text-white">{step.title}</h3>
                      <p className="text-[0.95rem] leading-relaxed text-gray-500 dark:text-gray-400">{step.desc}</p>
                    </div>
                  </div>

                  <div className="relative flex w-[10%] justify-center z-10">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[#B27F1C] text-white shadow-xl dark:border-[#050C17] dark:bg-[#F6B23B] dark:text-gray-900">
                      <step.icon size={24} />
                    </div>
                  </div>
                  <div className="w-[45%]" />
                </motion.div>
              );
            })}
          </div>
        </div>

      </Container>
    </div>
  );
}
