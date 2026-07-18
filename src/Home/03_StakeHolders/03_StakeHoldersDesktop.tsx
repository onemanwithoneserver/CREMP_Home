import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { stakeholdersData, statsData } from './data';
import CrempTextLogo from '../../components/CrempTextLogo';
import logo from '../../Logo/CREMP.png';

export default function Desktop() {
  const [activeTab, setActiveTab] = useState(stakeholdersData[0].id);
  const springAnim = { type: "spring" as const, stiffness: 100, damping: 20 };
  
  const handleTabChange = (id: string) => {
    setActiveTab(id);
  };

  const iconColorMap: Record<string, string> = {
    emerald: 'text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 border-emerald-300 dark:border-emerald-500/20 shadow-[0_4px_10px_rgba(16,185,129,0.2)] dark:shadow-none',
    blue: 'text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-500/10 border-blue-300 dark:border-blue-500/20 shadow-[0_4px_10px_rgba(59,130,246,0.2)] dark:shadow-none',
    purple: 'text-purple-700 dark:text-purple-400 bg-purple-100 dark:bg-purple-500/10 border-purple-300 dark:border-purple-500/20 shadow-[0_4px_10px_rgba(168,85,247,0.2)] dark:shadow-none',
    rose: 'text-rose-700 dark:text-rose-400 bg-rose-100 dark:bg-rose-500/10 border-rose-300 dark:border-rose-500/20 shadow-[0_4px_10px_rgba(225,29,72,0.2)] dark:shadow-none',
    amber: 'text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-500/10 border-amber-300 dark:border-amber-500/20 shadow-[0_4px_10px_rgba(217,119,6,0.2)] dark:shadow-none',
    cyan: 'text-cyan-700 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-500/10 border-cyan-300 dark:border-cyan-500/20 shadow-[0_4px_10px_rgba(8,145,178,0.2)] dark:shadow-none'
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-gray-50 dark:bg-[#050C17] px-6 pb-12 pt-20 font-sans text-[#050C17] dark:text-white lg:px-12">
      
      <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={springAnim}
          className="mb-4 flex w-fit items-center gap-2 rounded-full border border-[#B27F1C]/30 dark:border-[#F6B23B]/30 bg-[#B27F1C]/10 dark:bg-[#F6B23B]/10 px-4 py-1.5 text-[#B27F1C] dark:text-[#F6B23B] shadow-[0_0_15px_rgba(178,127,28,0.15)] dark:shadow-[0_0_15px_rgba(246,178,59,0.15)] backdrop-blur-[2px]"
        >
          <UsersIcon className="h-4 w-4" />
          <span className="text-xs font-bold uppercase tracking-wider">Tailored Solutions For Every Stakeholder</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ...springAnim, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl text-[#050C17] dark:text-white"
        >
          One Platform. <span className="bg-gradient-to-r from-[#B27F1C] to-[#d49924] dark:from-[#F6B23B] dark:to-[#ffc15e] bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">Unlimited Opportunities.</span>
        </motion.h2>

      </div>

      <div className="mx-auto mb-10 grid w-full max-w-[1300px] grid-cols-1 items-center gap-8 lg:grid-cols-[500px_1fr]">
        
        <div className="group/orbit relative mx-auto flex h-[500px] w-[500px] items-center justify-center lg:mx-0">
          <div className="pointer-events-none absolute inset-0 rounded-full bg-[#F6B23B]/5 blur-[100px] transition-opacity duration-700 group-hover/orbit:opacity-100" />
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1, rotate: 360 }}
            transition={{
              scale: { duration: 1 },
              opacity: { duration: 1 },
              rotate: { repeat: Infinity, duration: 60, ease: "linear" }
            }}
            viewport={{ once: true }}
            className="absolute inset-0 rounded-full border border-dashed border-gray-300/80 dark:border-gray-800/80" 
          />
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute inset-[45px] rounded-full border border-gray-200/50 dark:border-gray-700/30"
          />

          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1, rotate: -360 }}
            transition={{
              scale: { duration: 1, delay: 0.4 },
              opacity: { duration: 1, delay: 0.4 },
              rotate: { repeat: Infinity, duration: 30, ease: "linear" }
            }}
            viewport={{ once: true }}
            className="absolute inset-[90px] rounded-full border border-gray-200 dark:border-[#111A2C]"
          >
            <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B27F1C] dark:bg-[#F6B23B] shadow-[0_0_15px_#B27F1C] dark:shadow-[0_0_15px_#F6B23B]" />
            <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#B27F1C] dark:bg-[#F6B23B] shadow-[0_0_15px_#B27F1C] dark:shadow-[0_0_15px_#F6B23B]" />
            <div className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B27F1C] dark:bg-[#F6B23B] shadow-[0_0_15px_#B27F1C] dark:shadow-[0_0_15px_#F6B23B]" />
            <div className="absolute right-0 top-1/2 h-2 w-2 translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B27F1C] dark:bg-[#F6B23B] shadow-[0_0_15px_#B27F1C] dark:shadow-[0_0_15px_#F6B23B]" />
          </motion.div>

          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="relative z-10 flex h-[190px] w-[190px] flex-col items-center justify-center rounded-full border border-gray-800 bg-[#050C17] shadow-[0_0_40px_rgba(246,178,59,0.15)] transition-shadow duration-700 before:absolute before:inset-[-10px] before:-z-10 before:rounded-full before:bg-gradient-to-b before:from-[#08101E] before:to-transparent group-hover/orbit:shadow-[0_0_60px_rgba(246,178,59,0.25)]"
          >
            <div className="absolute inset-0 animate-ping rounded-full bg-[#F6B23B]/10 opacity-20 duration-[3000ms]" />
            <img src={logo} alt="CREMP" className="mb-2 h-16 w-auto object-contain drop-shadow-[0_0_10px_rgba(246,178,59,0.3)] filter" />
            <CrempTextLogo className="h-6 w-auto text-white mb-1" />
            <span className="mt-0.5 text-center text-[12px] font-medium leading-tight text-[#F6B23B]">
              An Integrated<br/>CRE Marketplace
            </span>
          </motion.div>

          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            className="absolute inset-0 z-20"
          >
            {stakeholdersData.map((stakeholder, index) => {
              const isActive = activeTab === stakeholder.id;
              const positions = [
                { top: '65px', left: '65px' },
                { top: '65px', right: '65px' },
                { bottom: '65px', right: '65px' },
                { bottom: '65px', left: '65px' },
              ];
              const pos = positions[index];

              return (
                <motion.div 
                  key={stakeholder.id}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", duration: 0.6, delay: 0.8 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="absolute flex cursor-pointer flex-col items-center justify-center"
                  style={pos}
                  onClick={() => handleTabChange(stakeholder.id)}
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                    className="flex flex-col items-center justify-center"
                  >
                    <div className="relative">
                      {isActive && (
                        <div className="absolute inset-0 animate-ping rounded-full bg-[#B27F1C] dark:bg-[#F6B23B] opacity-30 duration-1000" />
                      )}
                      <motion.div 
                        className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full border bg-white dark:bg-[#0C1525] transition-all duration-500 ${
                          isActive 
                            ? 'scale-110 border-[#B27F1C] dark:border-[#F6B23B] text-[#B27F1C] dark:text-[#F6B23B] shadow-[0_0_30px_rgba(178,127,28,0.2)] dark:shadow-[0_0_30px_rgba(246,178,59,0.5)]' 
                            : 'border-gray-200 dark:border-gray-700 text-gray-400 hover:border-[#B27F1C]/50 dark:hover:border-[#F6B23B]/50 hover:text-[#050C17] dark:hover:text-white'
                        }`}
                        whileHover={!isActive ? { scale: 1.05 } : {}}
                      >
                        <stakeholder.icon className="h-7 w-7" strokeWidth={1.8} />
                      </motion.div>
                    </div>
                    <span className={`mt-3 text-center text-sm font-bold transition-all duration-500 ${isActive ? 'text-[#050C17] dark:text-white drop-shadow-[0_0_2px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]' : 'text-gray-500'}`} style={{ whiteSpace: 'pre-line' }}>
                      {stakeholder.label}
                    </span>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <div className="flex h-full flex-col">
          <div className="flex overflow-hidden rounded-t-[8px] border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-[#0C1525]/80 p-1.5 backdrop-blur-[8px]">
            {stakeholdersData.map((stakeholder) => {
              const isActive = activeTab === stakeholder.id;
              return (
                <button
                  key={stakeholder.id}
                  onClick={() => handleTabChange(stakeholder.id)}
                  className={`relative flex flex-1 flex-col items-center justify-center rounded-[4px] px-2 py-3 transition-all duration-300 ${
                    isActive ? 'text-[#B27F1C] dark:text-[#F6B23B]' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#111A2C]/50 hover:text-[#050C17] dark:hover:text-gray-200'
                  }`}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabOutline"
                      className="absolute inset-0 rounded-[4px] border border-[#B27F1C]/50 dark:border-[#F6B23B]/50 bg-gray-50 dark:bg-[#111A2C] shadow-[inset_0_0_15px_rgba(178,127,28,0.05)] dark:shadow-[inset_0_0_15px_rgba(246,178,59,0.1)]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <div className="relative z-10 flex flex-row items-center justify-center gap-2">
                    <stakeholder.icon className="h-5 w-5 flex-shrink-0" strokeWidth={1.8} />
                    <span className="text-left text-[11px] font-semibold leading-tight whitespace-pre-line">
                      {stakeholder.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="relative flex flex-1 flex-col overflow-hidden rounded-b-[8px] border-x border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-[#08101E]/95 p-6 backdrop-blur-[8px]">
            <AnimatePresence mode="wait">
              {stakeholdersData.map((stakeholder) => {
                if (stakeholder.id !== activeTab) return null;
                return (
                  <motion.div
                    key={stakeholder.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-full flex-col"
                  >
                    <h3 className="mb-8 text-3xl font-bold text-[#050C17] dark:text-white">{stakeholder.title}</h3>

                    <div className="mb-8 grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2">
                      {stakeholder.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-4">
                          <div className="flex-shrink-0">
                            <div className={`flex h-10 w-10 items-center justify-center rounded-[4px] border ${feature.colorFamily ? iconColorMap[feature.colorFamily] : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#111A2C] text-[#B27F1C] dark:text-[#F6B23B]'}`}>
                              <feature.icon className="h-5 w-5" strokeWidth={1.8} />
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <h4 className="text-base font-semibold text-[#050C17] dark:text-white">{feature.title}</h4>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto border-t border-gray-200 dark:border-gray-800/50 pt-6">
                      <button className="group flex w-fit items-center gap-2 rounded-[4px] border border-[#B27F1C]/50 dark:border-[#F6B23B]/50 bg-transparent px-6 py-2.5 text-sm font-bold text-[#B27F1C] dark:text-[#F6B23B] transition-all hover:bg-[#B27F1C]/10 dark:hover:bg-[#F6B23B]/10 active:scale-95">
                        Explore More
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ ...springAnim, delay: 0.3 }}
        viewport={{ once: true, margin: "-40px" }}
        className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 rounded-[8px] border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-white to-gray-50 dark:from-[#0C1525] dark:to-[#050C17] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] md:flex-row md:gap-8 lg:p-6"
      >
        <div className="flex w-full items-center gap-4 border-b border-gray-200 dark:border-gray-800 pb-5 md:w-auto md:border-b-0 md:border-r md:pb-0 md:pr-8">
          <div className="group relative flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#111A2C]">
            <div className="absolute inset-0 bg-[#B27F1C]/10 dark:bg-[#F6B23B]/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
            <ShieldCheck className="relative z-10 h-6 w-6 text-[#B27F1C] dark:text-[#F6B23B]" strokeWidth={1.8} />
          </div>
          <div className="flex flex-col">
            <h4 className="text-base font-bold text-[#050C17] dark:text-white">Trusted. Secure. Seamless.</h4>
            <p className="mt-0.5 text-[11px] text-gray-500 dark:text-gray-400">Your data and transactions are protected<br/>with enterprise-grade security.</p>
          </div>
        </div>

        <div className="flex w-full flex-1 justify-around gap-4 md:justify-end md:gap-8 lg:gap-12">
          {statsData.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[4px] border ${stat.colorFamily ? iconColorMap[stat.colorFamily] : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#111A2C] text-[#B27F1C] dark:text-[#F6B23B]'}`}>
                <stat.icon className="h-5 w-5" strokeWidth={1.8} />
              </div>
              <div className="flex flex-col">
                <span className="mb-0.5 text-lg font-bold leading-none text-[#050C17] dark:text-white">{stat.value}</span>
                <span className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      
    </div>
  );
}

function UsersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}