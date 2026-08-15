import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Image as ImageIcon,
  Download,
  Play,
  Eye,
  Maximize,
} from "lucide-react";
import { mediaData } from "./data";
import SectionHeader from "../components/SectionHeader";
import { fadeInUp, staggerContainer, gridItem } from "../components/animations";

export default function Mobile() {
  const [activeTab, setActiveTab] = useState(mediaData.tabs[0].label);

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={staggerContainer}
      className="w-full relative z-10"
    >
      <motion.div
        variants={fadeInUp}
        className="w-full bg-white border-b border-gray-200/60 relative"
      >
        <SectionHeader
          overline="Photos, Videos & Tours"
          title={mediaData.title}
          icon={ImageIcon}
        />

        <div className="px-5 mt-4">
          <div className="flex w-full bg-[#0b1b42] rounded-[4px] p-1 border border-[#0b1b42]/10 relative overflow-x-auto scrollbar-hide">
            {mediaData.tabs.map((tab) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className={`relative flex-1 flex items-center justify-center gap-1.5 py-2.5 px-4 text-[0.75rem] font-semibold whitespace-nowrap transition-all duration-300 rounded-[2px] z-10 focus-visible:outline-none min-w-max ${
                  activeTab === tab.label
                    ? "text-[#0a1128]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {activeTab === tab.label && (
                  <motion.div
                    layoutId="mediaTabActiveMobile"
                    className="absolute inset-0 bg-white rounded-[2px] shadow-sm border border-white/20"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <tab.icon size={14} strokeWidth={2} />
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="px-5 py-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              {activeTab === "Video" && (
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="show"
                  className="flex flex-wrap gap-2.5"
                >
                  {mediaData.videos.map((video, idx) => (
                    <motion.div
                      key={idx}
                      variants={gridItem}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className={`relative rounded-[4px] overflow-hidden group cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-500 ${video.fullWidth ? "w-full h-44" : "w-[calc(50%-0.3125rem)] h-28"}`}
                    >
                      <img
                        src={video.image}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent group-hover:from-black/75 transition-all duration-500" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.15 }}
                          className="w-10 h-10 rounded-full border border-white/25 bg-white/10 backdrop-blur-xl flex items-center justify-center text-white group-hover:bg-[#d4af37]/20 group-hover:border-[#d4af37]/40 transition-all duration-500 shadow-lg"
                        >
                          <Play
                            size={15}
                            fill="currentColor"
                            className="ml-0.5"
                          />
                        </motion.div>
                      </div>
                      <div className="absolute bottom-2.5 left-2.5 right-2.5">
                        <span className="bg-[#0a1128]/80 backdrop-blur-xl text-white text-[0.58rem] font-semibold px-2.5 py-1 rounded-[4px] truncate block w-fit max-w-full border border-white/10">
                          {video.title} · {video.duration}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === "Site Plan" && (
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="show"
                  className="flex flex-col gap-2.5"
                >
                  {mediaData.floorPlans.map((plan, idx) => (
                    <motion.div
                      key={idx}
                      variants={gridItem}
                      whileHover={{ x: 3 }}
                      className="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-0 group cursor-default transition-all duration-300"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-[4px] text-white bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] shadow-sm shadow-[#3B82F6]/20 border-none flex items-center justify-center shrink-0 transition-colors duration-300">
                          <plan.icon size={14} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[0.75rem] font-semibold text-[#0a1128]">
                            {plan.title}
                          </span>
                          <span className="text-[0.6rem] text-gray-400 font-medium">
                            {plan.desc}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-8 h-8 rounded-[4px] text-gray-400 hover:text-[#d4af37] flex items-center justify-center transition-all hover:bg-[#d4af37]/10"
                        >
                          <Eye size={15} />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-8 h-8 rounded-[4px] text-gray-400 hover:text-[#d4af37] flex items-center justify-center transition-all hover:bg-[#d4af37]/10"
                        >
                          <Download size={15} />
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === "Virtual Tour" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="relative rounded-[4px] overflow-hidden w-full h-56 group shadow-lg"
                >
                  <img
                    src={mediaData.virtualTour.image}
                    alt="Virtual Tour"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#0a1128]/60 backdrop-blur-[3px]" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-3 text-center">
                    <motion.div
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-14 h-14 rounded-full border-2 border-[#d4af37]/40 flex items-center justify-center text-white bg-[#d4af37]/10 backdrop-blur-xl shadow-[0_0_35px_rgba(212,175,55,0.2)]"
                    >
                      <Maximize size={22} />
                    </motion.div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-white text-lg font-semibold tracking-tight">
                        {mediaData.virtualTour.title}
                      </h3>
                      <p className="text-gray-300 text-xs font-medium">
                        {mediaData.virtualTour.desc}
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-2 px-6 py-2.5 rounded-[4px] bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] hover:from-[#d4af37] hover:via-[#bf953f] hover:to-[#a67c00] text-white font-semibold text-sm flex items-center gap-2 transition-all shadow-md"
                    >
                      <mediaData.virtualTour.btnIcon
                        size={15}
                        className="-rotate-45"
                      />
                      {mediaData.virtualTour.btnText}
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {activeTab === "Photos" && (
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-3 gap-2"
                >
                  {mediaData.photos.map((photo, idx) => (
                    <motion.div
                      key={idx}
                      variants={gridItem}
                      whileHover={{ scale: 1.04, y: -2 }}
                      className="relative rounded-[4px] overflow-hidden aspect-square group cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-500"
                    >
                      <img
                        src={photo.image}
                        alt={photo.label}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                      <div className="absolute bottom-2 left-2">
                        <span className="bg-[#0a1128]/80 backdrop-blur-xl text-white text-[0.52rem] font-semibold px-2 py-0.5 rounded-[4px] border border-white/10">
                          {photo.label}
                        </span>
                      </div>
                    </motion.div>
                  ))}

                  <motion.div
                    variants={gridItem}
                    whileHover={{ scale: 1.04 }}
                    className="relative rounded-[4px] overflow-hidden aspect-square bg-gradient-to-br from-[#0a1128] to-[#0b1b42] border border-[#d4af37]/20 flex flex-col items-center justify-center cursor-pointer hover:border-[#d4af37]/40 transition-all group shadow-sm"
                  >
                    <motion.span
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="text-[#d4af37] text-xl font-semibold"
                    >
                      +9
                    </motion.span>
                    <span className="text-gray-400 text-[0.62rem] font-medium">
                      more
                    </span>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}
