import { motion } from 'framer-motion';
import { Rocket, ChevronDown, Globe, ArrowRight } from 'lucide-react';
import { featuresData, stepsData } from './data';
import bgImage from './bg.png';

export default function Mobile() {
  const springAnim = { type: "spring", stiffness: 100, damping: 20 };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-gray-50 dark:bg-[#050C17] px-5 pb-8 pt-20 font-sans text-[#050C17] dark:text-white">
      
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-[#050C17] z-0" />
      <div 
        className="absolute inset-0 z-0 opacity-10 dark:opacity-20 bg-cover bg-center bg-no-repeat mix-blend-screen"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-50 via-gray-50/40 to-gray-50 dark:from-[#050C17] dark:via-[#050C17]/40 dark:to-[#050C17] pointer-events-none" />

      <div className="relative z-10 flex w-full flex-col gap-8">
        
        <div className="flex flex-col">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springAnim}
            className="mb-5 flex w-fit items-center gap-2 rounded-full border border-[#B27F1C]/30 dark:border-[#F6B23B]/30 bg-[#B27F1C]/10 dark:bg-[#F6B23B]/10 px-3 py-1 text-[#B27F1C] dark:text-[#F6B23B] shadow-[0_0_15px_rgba(178,127,28,0.15)] dark:shadow-[0_0_15px_rgba(246,178,59,0.15)] backdrop-blur-[2px]"
          >
            <Rocket className="h-3.5 w-3.5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Client Onboarding</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springAnim, delay: 0.1 }}
            className="mb-2 text-3xl font-extrabold leading-tight tracking-tight text-[#050C17] dark:text-white"
          >
            Welcome to CREMP.<br/>
            <span className="bg-gradient-to-r from-[#B27F1C] to-[#d49924] dark:from-[#F6B23B] dark:to-[#ffc15e] bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
              Let's Build Opportunities Together.
            </span>
          </motion.h1>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ...springAnim, delay: 0.3 }}
          viewport={{ once: true, margin: "-40px" }}
          className="relative overflow-hidden rounded-[8px] border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-[#0C1525]/80 p-5 backdrop-blur-[8px] shadow-sm dark:shadow-none"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B27F1C]/10 dark:bg-[#F6B23B]/10 blur-[60px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_black_1px,_transparent_1px)] dark:bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:16px_16px] opacity-[0.03] dark:opacity-[0.02]" />
          
          <div className="relative z-10">
            <div className="mb-6 flex items-center justify-center gap-3">
              <div className="h-[2px] w-8 rounded-[2px] bg-gradient-to-l from-[#B27F1C] dark:from-[#F6B23B] to-transparent" />
              <h2 className="text-base font-bold tracking-wide text-[#050C17] dark:text-white">
                Onboard in 3 Steps
              </h2>
              <div className="h-[2px] w-8 rounded-[2px] bg-gradient-to-r from-[#B27F1C] dark:from-[#F6B23B] to-transparent" />
            </div>

            <div className="flex flex-col gap-4">
              {stepsData.map((step, idx) => (
                <motion.div 
                  key={step.step}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ ...springAnim, delay: 0.4 + (idx * 0.1) }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  <div className="flex w-full items-center gap-3 rounded-[8px] border border-transparent p-1 active:bg-black/5 dark:active:bg-white/5">
                    <span className="w-6 text-right text-2xl font-black text-[#B27F1C]/30 dark:text-[#F6B23B]/50">
                      {step.step}
                    </span>
                    <div className="flex-shrink-0 rounded-[4px] border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#111A2C] p-2.5 text-[#B27F1C] dark:text-[#F6B23B]">
                      <step.icon className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <div className="flex flex-1 flex-col justify-center">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                        {step.title}
                      </h4>
                    </div>
                  </div>
                  {idx < stepsData.length - 1 && (
                    <ChevronDown className="mb-1 mt-3 h-5 w-5 text-gray-400 dark:text-gray-600/50" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ ...springAnim, delay: 0.5 }}
          viewport={{ once: true, margin: "-40px" }}
          className="relative flex flex-col items-center overflow-hidden rounded-[8px] border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-white to-gray-50 dark:from-[#0C1525] dark:to-[#050C17] p-5 text-center shadow-[0_8px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#B27F1C] dark:from-[#F6B23B] via-transparent to-transparent opacity-5 dark:opacity-10" />
          
          <div className="relative z-10 flex w-full flex-col items-center">
            <div className="mb-3 flex-shrink-0 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#111A2C] p-2.5 text-[#B27F1C] dark:text-[#F6B23B]">
              <Globe className="h-5 w-5" strokeWidth={1.8} />
            </div>
            <h3 className="mb-5 text-base font-semibold text-[#050C17] dark:text-white">
              One Platform.<br/>
              <span className="text-[#B27F1C] dark:text-[#F6B23B]">Endless Possibilities.</span>
            </h3>
  
            <button className="group flex w-full items-center justify-center gap-2 rounded-[4px] bg-[#F6B23B] px-5 py-3 text-sm font-bold text-black transition-all active:scale-95 active:bg-[#ffc15e]">
              Explore Marketplace
              <ArrowRight className="h-4 w-4 transition-transform group-active:translate-x-1" />
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}