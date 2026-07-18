import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, ChevronDown } from 'lucide-react';
import { stakeholdersData, statsData } from './data';
import logo from '../../Logo/CREMP.png';

export default function Mobile() {
  const [activeTab, setActiveTab] = useState(stakeholdersData[0].id);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const springAnim = { type: "spring", stiffness: 100, damping: 20 };
  
  const handleTabChange = (id) => {
    setActiveTab(id);
  };

  const activeStakeholder = stakeholdersData.find(s => s.id === activeTab);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-gray-50 dark:bg-[#050C17] px-5 pb-10 pt-16 font-sans text-[#050C17] dark:text-white">
      
      <div className="mb-8 flex w-full flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={springAnim}
          className="mb-4 flex w-fit items-center justify-center gap-2 rounded-full border border-[#B27F1C]/30 dark:border-[#F6B23B]/30 bg-[#B27F1C]/10 dark:bg-[#F6B23B]/10 px-3 py-1.5 text-[#B27F1C] dark:text-[#F6B23B] shadow-[0_0_15px_rgba(178,127,28,0.15)] dark:shadow-[0_0_15px_rgba(246,178,59,0.15)] backdrop-blur-[2px]"
        >
          <UsersIcon className="h-3 w-3 flex-shrink-0" />
          <span className="whitespace-nowrap text-[9px] font-bold uppercase tracking-wider">Tailored Solutions For Every Stakeholder</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ...springAnim, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-3 text-3xl font-extrabold tracking-tight text-[#050C17] dark:text-white"
        >
          One Platform.<br/>
          <span className="bg-gradient-to-r from-[#B27F1C] to-[#d49924] dark:from-[#F6B23B] dark:to-[#ffc15e] bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
            Unlimited Opportunities.
          </span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ...springAnim, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-sm text-gray-600 dark:text-gray-400"
        >
          CREMP brings together every key player in commercial real estate,
          helping you connect, collaborate, and grow.
        </motion.p>
      </div>

      <div className="mb-10 flex w-full flex-col gap-6">
        
        {/* Orbital Graphic */}
        <div className="group/orbit relative mx-auto mb-8 mt-2 flex h-[340px] w-[340px] items-center justify-center">
          <div className="pointer-events-none absolute inset-0 rounded-full bg-[#F6B23B]/5 blur-[60px]" />
          
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
            className="absolute inset-[30px] rounded-full border border-gray-200/50 dark:border-gray-700/30" 
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
            className="absolute inset-[70px] rounded-full border border-gray-200 dark:border-[#111A2C]" 
          >
            <div className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B27F1C] dark:bg-[#F6B23B] shadow-[0_0_10px_#B27F1C] dark:shadow-[0_0_10px_#F6B23B]" />
            <div className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#B27F1C] dark:bg-[#F6B23B] shadow-[0_0_10px_#B27F1C] dark:shadow-[0_0_10px_#F6B23B]" />
            <div className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B27F1C] dark:bg-[#F6B23B] shadow-[0_0_10px_#B27F1C] dark:shadow-[0_0_10px_#F6B23B]" />
            <div className="absolute right-0 top-1/2 h-1.5 w-1.5 translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B27F1C] dark:bg-[#F6B23B] shadow-[0_0_10px_#B27F1C] dark:shadow-[0_0_10px_#F6B23B]" />
          </motion.div>
          
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="relative z-10 flex h-32 w-32 flex-col items-center justify-center rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#050C17] shadow-[0_0_30px_rgba(0,0,0,0.05)] dark:shadow-[0_0_30px_rgba(246,178,59,0.15)] before:absolute before:inset-[-8px] before:-z-10 before:rounded-full before:bg-gradient-to-b before:from-gray-100 dark:before:from-[#08101E] before:to-transparent"
          >
            <div className="absolute inset-0 animate-ping rounded-full bg-[#B27F1C]/10 dark:bg-[#F6B23B]/10 opacity-20 duration-[3000ms]" />
            <img src={logo} alt="CREMP" className="mb-1 h-12 w-auto object-contain drop-shadow-[0_0_10px_rgba(178,127,28,0.1)] dark:drop-shadow-[0_0_10px_rgba(246,178,59,0.3)] filter" />
            <span className="text-base font-bold tracking-tight text-[#050C17] dark:text-white">CREMP</span>
          </motion.div>

          {stakeholdersData.map((stakeholder, index) => {
            const isActive = activeTab === stakeholder.id;
            const positions = [
              { top: '39px', left: '39px' },    
              { top: '39px', right: '39px' },   
              { bottom: '39px', right: '39px' }, 
              { bottom: '39px', left: '39px' },  
            ];
            const pos = positions[index];
            return (
              <motion.div 
                key={stakeholder.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", duration: 0.6, delay: 0.8 + (index * 0.1) }}
                viewport={{ once: true }}
                className="absolute z-20 flex cursor-pointer items-center justify-center"
                style={pos}
                onClick={() => handleTabChange(stakeholder.id)}
              >
                <div className="relative">
                  {isActive && (
                    <div className="absolute inset-0 animate-ping rounded-full bg-[#B27F1C] dark:bg-[#F6B23B] opacity-30 duration-1000" />
                  )}
                  <motion.div 
                    className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full border bg-white dark:bg-[#0C1525] transition-all duration-500 ${
                      isActive 
                        ? 'scale-110 border-[#B27F1C] dark:border-[#F6B23B] text-[#B27F1C] dark:text-[#F6B23B] shadow-[0_0_20px_rgba(178,127,28,0.15)] dark:shadow-[0_0_20px_rgba(246,178,59,0.4)]' 
                        : 'border-gray-200 dark:border-gray-700 text-gray-400'
                    }`}
                    whileTap={!isActive ? { scale: 0.95 } : {}}
                  >
                    <stakeholder.icon className="h-6 w-6" strokeWidth={1.8} />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Content Card Area */}
        <div className="flex w-full flex-col">
          <div className="relative flex flex-col rounded-[8px] border border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-[#08101E]/95 p-5 backdrop-blur-[8px] shadow-sm dark:shadow-none">
            
            {/* Custom Modern Dropdown */}
            <div className="relative z-30 mb-6">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`relative flex w-full items-center justify-between rounded-[4px] border bg-gradient-to-r from-gray-50 to-white dark:from-[#111A2C] dark:to-[#0C1525] px-4 py-4 text-sm font-bold tracking-wide text-[#050C17] dark:text-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] outline-none transition-all ${isDropdownOpen ? 'border-[#B27F1C] dark:border-[#F6B23B] ring-2 ring-[#B27F1C]/20 dark:ring-[#F6B23B]/20' : 'border-gray-200 dark:border-gray-700'}`}
              >
                <div className="flex items-center gap-3">
                  {activeStakeholder && <activeStakeholder.icon className="h-4 w-4 text-[#B27F1C] dark:text-[#F6B23B]" />}
                  <span>{activeStakeholder?.label.replace('\n', ' ')}</span>
                </div>
                <div className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-[2px] border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-[#050C17]">
                  <ChevronDown className={`h-4 w-4 text-[#B27F1C] dark:text-[#F6B23B] transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </div>
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setIsDropdownOpen(false)} 
                    />
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-[4px] border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0C1525] shadow-[0_8px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.7)]"
                    >
                      {stakeholdersData.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => {
                            handleTabChange(s.id);
                            setIsDropdownOpen(false);
                          }}
                          className={`flex w-full items-center gap-3 border-b border-gray-100 dark:border-gray-800/50 px-4 py-3.5 text-left text-sm font-semibold transition-colors last:border-0 ${
                            activeTab === s.id ? 'bg-[#B27F1C]/10 dark:bg-[#F6B23B]/10 text-[#B27F1C] dark:text-[#F6B23B]' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#111A2C] hover:text-[#050C17] dark:hover:text-white'
                          }`}
                        >
                          <s.icon className={`h-4 w-4 ${activeTab === s.id ? 'text-[#B27F1C] dark:text-[#F6B23B]' : 'text-gray-400 dark:text-gray-500'}`} strokeWidth={1.8} />
                          {s.label.replace('\n', ' ')}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Dynamic Content */}
            <div className="relative z-10 min-h-[260px]">
              <AnimatePresence mode="wait">
                {stakeholdersData.map((stakeholder) => {
                  if (stakeholder.id !== activeTab) return null;
                  return (
                    <motion.div
                      key={stakeholder.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col"
                    >
                      <h3 className="mb-6 text-2xl font-bold text-[#050C17] dark:text-white">{stakeholder.title}</h3>

                      <div className="flex flex-col gap-5">
                        {stakeholder.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-4">
                            <div className="flex-shrink-0">
                              <div className="flex h-10 w-10 items-center justify-center rounded-[4px] border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#111A2C] text-[#B27F1C] dark:text-[#F6B23B]">
                                <feature.icon className="h-5 w-5" strokeWidth={1.8} />
                              </div>
                            </div>
                            <div className="flex flex-col justify-center">
                              <h4 className="text-sm font-semibold text-[#050C17] dark:text-white">{feature.title}</h4>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <div className="relative z-10 mt-8 border-t border-gray-200 dark:border-gray-800/50 pt-6">
              <button className="group flex w-full items-center justify-center gap-2 rounded-[4px] bg-[#F6B23B] px-5 py-3.5 text-sm font-bold text-black shadow-[0_0_15px_rgba(246,178,59,0.2)] transition-all active:scale-95 active:bg-[#ffc15e]">
                Explore More
                <ArrowRight className="h-4 w-4 transition-transform group-active:translate-x-1" />
              </button>
            </div>
            
          </div>
        </div>
      </div>

      {/* Bottom Stats Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={springAnim}
        className="flex w-full flex-col gap-5 rounded-[8px] border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-white to-gray-50 dark:from-[#0C1525] dark:to-[#050C17] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
      >
        <div className="flex flex-col items-center gap-3 border-b border-gray-200 dark:border-gray-800 pb-5 text-center">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#111A2C]">
            <ShieldCheck className="h-6 w-6 text-[#B27F1C] dark:text-[#F6B23B]" strokeWidth={1.8} />
          </div>
          <div className="flex flex-col">
            <h4 className="text-base font-bold text-[#050C17] dark:text-white">Trusted. Secure. Seamless.</h4>
            <p className="mt-1 text-[11px] text-gray-500 dark:text-gray-400">Your data and transactions are protected with enterprise-grade security.</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {statsData.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-4 rounded-[4px] border border-gray-200 dark:border-gray-800/50 bg-gray-50 dark:bg-[#08101E]/50 p-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[4px] border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111A2C] text-[#B27F1C] dark:text-[#F6B23B]">
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

function UsersIcon(props) {
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