import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Play,
  Pause,
  Coffee,
  Utensils,
  Mail,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";
import mainCupImg from "../../assets/main_coffee_cup.png";
import { heroData } from "./data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 24 },
  },
};

export default function HeroGalleryDesktop() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-[1440px] mx-auto bg-[#FAFAFA] transition-colors duration-300 p-6 lg:p-6 flex flex-col gap-6"
    >
      <div className="grid grid-cols-12 gap-6 min-h-[500px]">
        <motion.div
          variants={item}
          className="col-span-12 lg:col-span-7 flex flex-col justify-center relative overflow-hidden group/main"
        >
          <div className="flex flex-col gap-8 relative z-10 p-4 lg:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex gap-3">
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-md text-[#c69a54] text-[10px] font-bold uppercase tracking-widest shadow-sm border border-gray-100">
                  <Utensils size={13} strokeWidth={2.5} />
                  {heroData.category}
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-md text-gray-500 text-[10px] font-bold uppercase tracking-widest shadow-sm border border-gray-100">
                  <Coffee size={13} strokeWidth={2.5} />
                  {heroData.subCategory}
                </div>
              </div>

              <motion.h1
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="text-5xl lg:text-[64px] tracking-tight font-serif font-bold uppercase leading-[1.05] text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] bg-[length:200%_auto]"
              >
                {heroData.brandName}
              </motion.h1>
            </div>

            <div className="relative pl-5 border-l-2 border-[#d4af37]/40">
              <p className="text-lg text-[#161E31] leading-[1.8] max-w-xl font-light">
                {heroData.shortDescription}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-2 pt-6 border-t border-gray-200/60">
              {[
                {
                  icon: Mail,
                  label: heroData.contactInfo.email,
                  href: `mailto:${heroData.contactInfo.email}`,
                  colors:
                    "from-blue-50 to-blue-100 text-blue-700 border-blue-200",
                  shadowColor: "rgba(59,130,246,",
                },
                {
                  icon: Phone,
                  label: heroData.contactInfo.phone,
                  href: `tel:${heroData.contactInfo.phone}`,
                  colors:
                    "from-emerald-50 to-emerald-100 text-emerald-700 border-emerald-200",
                  shadowColor: "rgba(16,185,129,",
                },
                {
                  icon: Globe,
                  label: heroData.contactInfo.website,
                  href: `https://${heroData.contactInfo.website}`,
                  colors:
                    "from-fuchsia-50 to-fuchsia-100 text-fuchsia-700 border-fuchsia-200",
                  shadowColor: "rgba(217,70,239,",
                },
                {
                  icon: MapPin,
                  label: heroData.contactInfo.headquarters,
                  href: "#",
                  colors:
                    "from-amber-50 to-amber-100 text-amber-700 border-amber-200",
                  shadowColor: "rgba(245,158,11,",
                },
              ].map((item, idx) => {
                const ItemWrapper = item.href === "#" ? motion.div : motion.a;
                return (
                  <ItemWrapper
                    key={idx}
                    href={item.href !== "#" ? item.href : undefined}
                    target={item.icon === Globe ? "_blank" : undefined}
                    rel={
                      item.icon === Globe ? "noopener noreferrer" : undefined
                    }
                    animate={{
                      boxShadow: [
                        `0px 4px 10px ${item.shadowColor}0.15)`,
                        `0px 4px 20px ${item.shadowColor}0.4)`,
                        `0px 4px 10px ${item.shadowColor}0.15)`,
                      ],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: idx * 0.2,
                    }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-[4px] bg-gradient-to-r ${item.colors} font-bold text-[12px] border ${item.href === "#" ? "cursor-default" : ""}`}
                  >
                    <item.icon size={14} />
                    {item.label}
                  </ItemWrapper>
                );
              })}
            </div>

            <div className="flex w-full items-center justify-center gap-4 mt-6">
                <motion.a
                  href="#"
                  animate={{ y: [0, -3, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-9 h-9 flex items-center justify-center rounded-full text-red-600 bg-red-50 border border-red-100 shadow-[0_4px_12px_rgba(220,38,38,0.2)]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                    <polygon
                      points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
                      fill="white"
                    ></polygon>
                  </svg>
                </motion.a>
                <motion.a
                  href={
                    heroData.contactInfo.instagram
                      ? `https://instagram.com/${heroData.contactInfo.instagram.replace("@", "")}`
                      : "#"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  animate={{ y: [0, -3, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2,
                  }}
                  className="w-9 h-9 flex items-center justify-center rounded-full text-white bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 shadow-[0_4px_12px_rgba(236,72,153,0.3)]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </motion.a>
                <motion.a
                  href={
                    heroData.contactInfo.linkedin
                      ? `https://linkedin.com/company/${heroData.contactInfo.linkedin}`
                      : "#"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  animate={{ y: [0, -3, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.4,
                  }}
                  className="w-9 h-9 flex items-center justify-center rounded-full text-white bg-[#0A66C2] shadow-[0_4px_12px_rgba(10,102,194,0.3)]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </motion.a>
              </div>
            </div>
        </motion.div>

        <motion.div
          variants={item}
          className="col-span-12 lg:col-span-5 relative group/cup overflow-hidden rounded-2xl shadow-sm border border-gray-100 h-full min-h-[400px]"
        >
          <img
            src={mainCupImg}
            alt="Hero Media"
            className="absolute inset-0 w-full h-full object-cover group-hover/cup:scale-105 transition-transform duration-700 ease-out"
          />
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute inset-0 w-full h-full bg-black/10 hover:bg-black/40 flex items-center justify-center transition-all duration-500 focus:outline-none"
            aria-label={isPlaying ? "Pause Brand Story Video" : "Watch Brand Story Video"}
          >
            <motion.div 
                className="w-16 h-16 rounded-full bg-slate-800/80 flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-colors duration-300 hover:bg-slate-900 group/btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                  {isPlaying ? (
                      <motion.div
                          key="pause"
                          initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
                          transition={{ duration: 0.2 }}
                      >
                          <Pause
                            size={24}
                            className="text-white transition-colors"
                            fill="currentColor"
                          />
                      </motion.div>
                  ) : (
                      <motion.div
                          key="play"
                          initial={{ opacity: 0, scale: 0.5, rotate: 90 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          exit={{ opacity: 0, scale: 0.5, rotate: -90 }}
                          transition={{ duration: 0.2 }}
                      >
                          <Play
                            size={24}
                            className="text-white ml-1 transition-colors"
                            fill="currentColor"
                          />
                      </motion.div>
                  )}
              </AnimatePresence>
            </motion.div>
          </button>
        </motion.div>
      </div>

      <motion.div
        variants={item}
        className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 p-8 relative overflow-hidden mt-2"
      >
        <div className="flex flex-col gap-6 relative z-10">
          <div className="flex items-center gap-3">
            <div className="h-px bg-gradient-to-r from-transparent to-[#c69a54] w-12" />
            <h3 className="text-sm font-semibold text-[#0b162c] tracking-[0.2em] uppercase">
              Why Choose Us
            </h3>
            <div className="h-px bg-gradient-to-l from-transparent to-[#c69a54] w-12" />
          </div>

          <div className="grid grid-cols-4 divide-x divide-gray-100">
            {heroData.whyChooseUs.map((feature, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center px-6 group/feature cursor-default"
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-sm relative overflow-hidden transition-transform duration-300 group-hover/feature:scale-110 ${feature.colorClass}`}
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/feature:translate-y-0 transition-transform duration-300" />
                  <feature.icon
                    size={20}
                    strokeWidth={1.5}
                    className="relative z-10"
                  />
                </div>
                <h4 className="text-[14px] font-semibold text-[#0b162c] leading-snug mb-2">
                  {feature.title}
                </h4>
                <p className="text-[12px] text-gray-500 leading-relaxed max-w-[200px]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
