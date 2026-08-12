import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { tabsData, tabContent } from "./data";

export default function CommercialTerms() {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  return (
    <div className="w-full relative z-10 py-6 px-4">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
        {/* Tabs Header */}
        <div className="flex w-full border-b border-gray-100">
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3.5 px-2 text-[0.75rem] font-medium text-center border-b-2 transition-all duration-300 ${
                activeTab === tab.id
                  ? "border-[#d4af37] text-gray-900 bg-amber-50/30"
                  : "border-transparent text-gray-400 hover:text-gray-600 hover:bg-gray-50/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="relative min-h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="p-5 flex flex-col"
            >
              {(() => {
                const data = tabContent[activeTab];
                if (!data) return null;

                return (
                  <>
                    {/* Header Section */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex flex-col">
                        <span className="text-[0.65rem] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                          {data.header.title}
                        </span>
                        <div className="flex items-baseline gap-1">
                          <span
                            className={`text-[2.5rem] font-light tracking-tight leading-none ${
                              data.header.valueColor || "text-gray-900"
                            }`}
                          >
                            {data.header.value}
                          </span>
                          {data.header.suffix && (
                            <span className="text-gray-400 text-lg">
                              {data.header.suffix}
                            </span>
                          )}
                        </div>
                        {data.header.subtext && (
                          <span className="text-gray-500 text-[0.75rem] mt-1.5">
                            {data.header.subtext}
                          </span>
                        )}
                      </div>

                      {/* Right Card */}
                      {data.rightCard && (
                        <div className="shrink-0 ml-4">
                          {data.rightCard.type === "box" && (
                            <div className="border border-gray-200 rounded-2xl p-3.5 flex flex-col items-center justify-center bg-white shadow-sm min-w-[90px]">
                              <span className="text-[0.6rem] font-bold text-gray-400 uppercase tracking-wider mb-1">
                                {data.rightCard.label}
                              </span>
                              <span className="text-2xl font-light text-gray-900 leading-none">
                                {data.rightCard.value}
                              </span>
                              {data.rightCard.subtext && (
                                <span className="text-gray-400 text-[0.65rem] mt-1">
                                  {data.rightCard.subtext}
                                </span>
                              )}
                            </div>
                          )}
                          {data.rightCard.type === "pill" && (
                            <div className="px-3.5 py-1.5 rounded-lg border border-amber-200 bg-amber-50 text-amber-700 text-xs font-medium shadow-sm mt-1">
                              {data.rightCard.label}
                            </div>
                          )}
                          {data.rightCard.type === "dark" && (
                            <div className="bg-[#0a1128] rounded-xl p-3 flex flex-col items-center justify-center shadow-md min-w-[100px]">
                              <span className="text-[0.55rem] font-bold text-gray-400 uppercase tracking-wider mb-1">
                                {data.rightCard.label}
                              </span>
                              <span className="text-2xl font-semibold text-[#d4af37] leading-none">
                                {data.rightCard.value}
                              </span>
                              {data.rightCard.subtext && (
                                <span className="text-gray-400 text-[0.6rem] mt-1 opacity-80">
                                  {data.rightCard.subtext}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Details List */}
                    <div className="flex flex-col w-full">
                      <div className="border-t border-gray-100 w-full mb-1" />
                      {data.details.map((detail: any, idx: number) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0"
                        >
                          <div className="flex items-center gap-2.5 text-gray-500">
                            <detail.icon size={15} className="text-gray-400" />
                            <span className="text-[0.8rem] font-medium">{detail.label}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span
                              className={`text-[0.8rem] font-medium text-right ${
                                detail.valueColor || "text-gray-700"
                              }`}
                            >
                              {detail.showCheck && (
                                <CheckCircle2 size={13} className="inline mr-1 text-emerald-500 relative -top-[1px]" />
                              )}
                              {detail.value}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Footer */}
                    {data.footer && (
                      <div className="mt-4 pt-3 text-[0.75rem] text-gray-500 font-medium">
                        {data.footer}
                      </div>
                    )}
                  </>
                );
              })()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
