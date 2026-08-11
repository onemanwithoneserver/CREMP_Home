import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Container } from "../../components/layout";
import { investorProfileData } from "./data";

export default function DesktopInvestorProfile() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="relative w-full overflow-hidden bg-gray-50 py-24 transition-colors duration-700 dark:bg-[#0b1b42]">
      <Container className="relative z-10 max-w-7xl px-4 xl:px-0">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="mb-4 inline-flex items-center justify-center"
          >
            <span className="rounded-[8px] bg-[#D4AF37]/10 px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-widest text-[#D4AF37] dark:bg-[#D4AF37]/10 dark:text-[#D4AF37]">
              {investorProfileData.tag}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-[3rem] font-black leading-tight text-gray-900 dark:text-white"
          >
            {investorProfileData.titleBase} <br />
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#b38728] bg-clip-text text-transparent dark:from-[#D4AF37] dark:to-[#f9d08b]">
              {investorProfileData.titleHighlight}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-2xl text-[1.1rem] leading-relaxed text-gray-600 dark:text-gray-400"
          >
            {investorProfileData.desc[0]}
          </motion.p>
        </div>

        <div className="flex gap-12 rounded-[8px] bg-white p-8 shadow-xl dark:bg-[#121c33] dark:border dark:border-gray-800">
          <div className="flex w-1/3 flex-col gap-3 border-r border-gray-100 pr-8 dark:border-gray-800">
            <h3 className="mb-4 text-[0.8rem] font-bold uppercase tracking-widest text-gray-400">
              Select Profile
            </h3>
            {investorProfileData.pills.map((pill, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`group flex items-center justify-between rounded-[8px] px-5 py-4 text-left transition-all ${
                  activeTab === idx
                    ? "bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] shadow-lg shadow-[#D4AF37]/20 dark:bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] dark:shadow-[#D4AF37]/10"
                    : "hover:bg-gray-50 dark:hover:bg-gray-800/50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <pill.icon
                    size={22}
                    className={
                      activeTab === idx
                        ? "text-white dark:text-gray-900"
                        : "text-gray-400 transition-colors group-hover:text-[#D4AF37] dark:group-hover:text-[#D4AF37]"
                    }
                  />
                  <span
                    className={`font-bold ${activeTab === idx ? "text-white dark:text-gray-900" : "text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white"}`}
                  >
                    {pill.label}
                  </span>
                </div>
                {activeTab === idx && (
                  <ChevronRight
                    size={18}
                    className="text-white/70 dark:text-gray-900/70"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex w-2/3 flex-col py-2 pl-4">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] dark:bg-[#D4AF37]/10 dark:text-[#D4AF37]">
                {(() => {
                  const FirstIcon = investorProfileData.expectations[0].icon;
                  return <FirstIcon size={20} />;
                })()}
              </div>
              <h3 className="text-xl font-black text-gray-900 dark:text-white">
                {investorProfileData.expectationsTitle}
              </h3>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 gap-6"
              >
                {investorProfileData.expectations.map((exp, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col gap-3 rounded-[8px] border border-gray-100 bg-gray-50 p-6 dark:border-gray-800 dark:bg-[#0b1b42] transition-all duration-300 hover:shadow-lg hover:border-[#D4AF37]/50"
                  >
                    <exp.icon
                      size={24}
                      className="text-[#D4AF37] dark:text-[#D4AF37]"
                    />
                    <h4 className="text-[1.05rem] font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h4>
                    <p className="text-[0.9rem] leading-relaxed text-gray-500 dark:text-gray-400">
                      {exp.desc}
                    </p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </div>
  );
}
