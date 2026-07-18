import { motion } from 'framer-motion';
import { Rocket, ChevronRight, Globe, ArrowRight } from 'lucide-react';
import { stepsData } from './data';
import bgImage from './bg.png';

export default function Desktop() {
  const springAnim = { type: "spring" as const, stiffness: 100, damping: 20 };

  const iconColorMap: Record<string, string> = {
    emerald: 'text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 border-emerald-300 dark:border-emerald-500/20 shadow-[0_4px_10px_rgba(16,185,129,0.2)] dark:shadow-none',
    blue: 'text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-500/10 border-blue-300 dark:border-blue-500/20 shadow-[0_4px_10px_rgba(59,130,246,0.2)] dark:shadow-none',
    purple: 'text-purple-700 dark:text-purple-400 bg-purple-100 dark:bg-purple-500/10 border-purple-300 dark:border-purple-500/20 shadow-[0_4px_10px_rgba(168,85,247,0.2)] dark:shadow-none',
    rose: 'text-rose-700 dark:text-rose-400 bg-rose-100 dark:bg-rose-500/10 border-rose-300 dark:border-rose-500/20 shadow-[0_4px_10px_rgba(225,29,72,0.2)] dark:shadow-none',
    amber: 'text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-500/10 border-amber-300 dark:border-amber-500/20 shadow-[0_4px_10px_rgba(217,119,6,0.2)] dark:shadow-none',
    cyan: 'text-cyan-700 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-500/10 border-cyan-300 dark:border-cyan-500/20 shadow-[0_4px_10px_rgba(8,145,178,0.2)] dark:shadow-none'
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-gray-50 dark:bg-[#050C17] px-6 pb-12 pt-24 font-sans text-[#050C17] dark:text-white lg:px-12">
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5 }}
        className="pointer-events-none absolute right-0 top-0 z-0 h-full w-full bg-cover bg-right lg:w-2/3"
        style={{
          backgroundImage: `url(${bgImage})`,
          maskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 100%), linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 100%), linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
          WebkitMaskComposite: 'source-in',
          maskComposite: 'intersect',
        }}
      />
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-gray-50 via-gray-50/90 to-transparent lg:via-gray-50/70 dark:from-[#050C17] dark:via-[#050C17]/90 dark:lg:via-[#050C17]/70" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-8">
        
        <div className="flex max-w-2xl flex-col">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springAnim}
            className="mb-6 flex w-fit items-center gap-2 rounded-full border border-[#B27F1C]/30 dark:border-[#F6B23B]/30 bg-[#B27F1C]/10 dark:bg-[#F6B23B]/10 px-4 py-1.5 text-[#B27F1C] dark:text-[#F6B23B] shadow-[0_0_15px_rgba(178,127,28,0.15)] dark:shadow-[0_0_15px_rgba(246,178,59,0.15)] backdrop-blur-[2px]"
          >
            <Rocket className="h-4 w-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Client Onboarding</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springAnim, delay: 0.1 }}
            className="mb-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl text-[#050C17] dark:text-white"
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
          className="group/container relative overflow-hidden rounded-[8px] border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-[#0C1525]/80 p-6 backdrop-blur-[8px] transition-colors duration-500 hover:border-[#B27F1C]/30 dark:hover:border-[#F6B23B]/30 shadow-sm dark:shadow-none"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[250px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B27F1C]/10 dark:bg-[#F6B23B]/10 opacity-0 blur-[100px] transition-opacity duration-700 group-hover/container:opacity-100" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_black_1px,_transparent_1px)] dark:bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:16px_16px] opacity-[0.03] dark:opacity-[0.02]" />
          
          <div className="relative z-10">
            <div className="mb-6 flex items-center justify-center gap-4">
              <div className="h-[2px] w-10 rounded-[2px] bg-gradient-to-l from-[#B27F1C] dark:from-[#F6B23B] to-transparent" />
              <h2 className="text-lg font-bold tracking-wide text-[#050C17] dark:text-white">Onboard in 3 Simple Steps</h2>
              <div className="h-[2px] w-10 rounded-[2px] bg-gradient-to-r from-[#B27F1C] dark:from-[#F6B23B] to-transparent" />
            </div>

            <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-6">
              {stepsData.map((step, idx) => (
                <motion.div 
                  key={step.step} 
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ ...springAnim, delay: 0.4 + (idx * 0.1) }}
                  viewport={{ once: true }}
                  className="group flex w-full flex-1 cursor-default items-center gap-3 md:w-auto"
                >
                  <div className="flex w-full items-center gap-4 rounded-[8px] border border-transparent p-2 transition-colors duration-300 hover:border-gray-200 dark:hover:border-gray-800 hover:bg-black/5 dark:hover:bg-white/5">
                    <span className="text-3xl font-black text-[#B27F1C]/30 dark:text-[#F6B23B]/30 transition-colors duration-300 group-hover:text-[#B27F1C] dark:group-hover:text-[#F6B23B]">
                      {step.step}
                    </span>
                    <div className={`flex-shrink-0 rounded-[4px] border p-3 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_4px_15px_rgba(0,0,0,0.1)] dark:group-hover:shadow-[0_4px_15px_rgba(246,178,59,0.2)] ${step.colorFamily ? iconColorMap[step.colorFamily] : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#111A2C] text-[#B27F1C] dark:text-[#F6B23B] group-hover:border-[#B27F1C]/50 dark:group-hover:border-[#F6B23B]/50'}`}>
                      <step.icon className="h-6 w-6" strokeWidth={1.8} />
                    </div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 transition-colors duration-300 group-hover:text-[#050C17] dark:group-hover:text-white">
                      {step.title}
                    </h4>
                  </div>
                  {idx < stepsData.length - 1 && (
                    <ChevronRight className="ml-auto hidden h-5 w-5 flex-shrink-0 text-gray-400 dark:text-gray-600 transition-colors group-hover:text-[#B27F1C]/70 dark:group-hover:text-[#F6B23B]/70 md:block" />
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
          className="group relative flex flex-col items-center justify-between overflow-hidden rounded-[8px] border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-white to-gray-50 dark:from-[#0C1525] dark:to-[#050C17] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-[#B27F1C]/40 dark:hover:border-[#F6B23B]/40 md:flex-row"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#B27F1C] dark:from-[#F6B23B] via-transparent to-transparent opacity-5 dark:opacity-10 transition-opacity duration-500 group-hover:opacity-10 dark:group-hover:opacity-20" />
          
          <div className="relative z-10 flex items-center gap-4">
            <div className="flex-shrink-0 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#111A2C] p-2.5 text-[#B27F1C] dark:text-[#F6B23B] transition-transform duration-500 group-hover:rotate-[24deg] group-hover:scale-110">
              <Globe className="h-5 w-5" strokeWidth={1.8} />
            </div>
            <h3 className="text-base font-semibold text-[#050C17] dark:text-white">
              One Platform. <span className="text-[#B27F1C] dark:text-[#F6B23B]">Endless Possibilities.</span>
            </h3>
          </div>

          <button className="group relative z-10 mt-4 flex w-full items-center justify-center gap-2 rounded-[4px] bg-[#F6B23B] px-6 py-2.5 text-sm font-bold text-black transition-all hover:bg-[#ffc15e] hover:shadow-[0_0_20px_rgba(246,178,59,0.3)] active:scale-95 md:mt-0 md:w-auto">
            Explore Marketplace
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

      </div>
    </div>
  );
}