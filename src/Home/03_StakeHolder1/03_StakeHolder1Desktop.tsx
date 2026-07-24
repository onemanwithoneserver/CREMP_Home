
import { motion } from "framer-motion";
import { ArrowRight, BarChart, Users, Sparkles } from "lucide-react";
import { stakeholderData } from "./data";

const smoothEasing: [number, number, number, number] = [0.16, 1, 0.3, 1];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const fadeUpText = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)", scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 0.8, ease: smoothEasing },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: smoothEasing },
  },
};

const floatAnim1: any = {
  animate: {
    y: [0, -10, 0],
    rotate: [0, 2, -2, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

const floatAnim2: any = {
  animate: {
    y: [0, 12, 0],
    rotate: [0, -3, 3, 0],
    transition: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
  },
};

const backgroundPan: any = {
  animate: {
    scale: [1.05, 1.1, 1.05],
    x: [0, -10, 0],
    transition: { duration: 25, repeat: Infinity, ease: "linear" }
  }
};

const buttonHover = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.3, ease: smoothEasing } },
  tap: { scale: 0.98 }
};

const arrowHover = {
  rest: { x: 0 },
  hover: { x: 4, transition: { duration: 0.3, ease: smoothEasing } }
};

export default function DesktopStakeHolder1() {
  const { block1, block2, block3 } = stakeholderData;

  return (
    <div className="flex flex-col gap-8 py-8 px-4 w-full max-w-7xl overflow-hidden mx-auto font-sans">
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="rounded-[8px] bg-white overflow-hidden relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-orange-100 w-full"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 via-white to-orange-50/30 pointer-events-none"></div>

        <div className="relative z-10 p-8 lg:p-10 flex flex-col gap-8 w-full">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <motion.div variants={fadeUpText} className="flex flex-col gap-4 max-w-2xl">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-orange-100/50 text-orange-700 text-[11px] font-bold px-3 py-1 rounded-[4px] w-fit tracking-wider uppercase border border-orange-200/50 cursor-default"
              >
                <Users size={14} strokeWidth={2.5}/>
                {block1.tag}
              </motion.div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.1]">
                {block1.title}
              </h2>
              <p className="text-base text-gray-600 font-medium leading-relaxed whitespace-pre-line">
                {block1.subtitle}
              </p>
            </motion.div>

            <motion.div variants={fadeUpText} className="hidden lg:block w-[400px] h-32 relative rounded-[4px] overflow-hidden shadow-sm border border-orange-100">
               <motion.img 
                 variants={backgroundPan}
                 animate="animate"
                 src={block1.bgImage} 
                 alt="Background" 
                 className="w-full h-full object-cover" 
               />
               <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent mix-blend-multiply"></div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
            {block1.cards.map((card) => (
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -6, boxShadow: "0 20px 40px -15px rgba(249,115,22,0.2)" }}
                key={card.id}
                className="group bg-white rounded-[8px] p-6 lg:p-8 shadow-sm border border-orange-100 hover:border-orange-300 transition-all duration-500 flex flex-col h-full relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 to-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="flex justify-between items-start gap-6 mb-6 relative z-10">
                  <div className="flex flex-col gap-3 flex-1">
                    <div className="flex items-center gap-3">
                      <motion.div 
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                        className="w-12 h-12 shrink-0 rounded-[4px] bg-orange-50 text-orange-500 flex items-center justify-center border border-orange-100 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300"
                      >
                        <card.icon size={24} strokeWidth={1.5} />
                      </motion.div>
                      <div className="flex flex-col">
                        <h3 className="text-[22px] font-extrabold text-gray-900 leading-tight group-hover:text-orange-600 transition-colors">
                          {card.title}
                        </h3>
                        <p className="text-orange-600 font-bold text-[11px] mt-0.5">
                          {card.desktopSubtitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-[13px] leading-relaxed mt-2 pr-2">
                      {card.description}
                    </p>
                  </div>

                  <div className="hidden sm:block w-36 h-28 shrink-0 rounded-[4px] overflow-hidden border border-gray-100 shadow-sm relative group-hover:shadow-md transition-shadow">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 transition-colors duration-300"></div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2 py-5 mt-auto border-t border-gray-100 mb-2 relative z-10">
                  {card.features.map((feature, idx) => (
                    <motion.div 
                      key={idx} 
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="flex flex-col items-center text-center gap-2"
                    >
                      <div className="text-orange-500 bg-white border border-orange-100 p-2 rounded-[4px] shadow-sm group-hover:border-orange-400 group-hover:shadow-md transition-all duration-300">
                        <feature.icon size={18} strokeWidth={1.5} />
                      </div>
                      <span className="text-[10px] font-bold text-gray-700 leading-tight group-hover:text-orange-600 transition-colors">
                        {feature.labelDesktop}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex justify-start w-full mt-2 relative z-10">
                  <motion.button 
                    variants={buttonHover}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    className="w-full sm:w-[55%] bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold py-3.5 px-6 rounded-[4px] flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(249,115,22,0.2)] hover:shadow-[0_6px_20px_rgba(249,115,22,0.4)] text-[13px] relative overflow-hidden"
                  >
                    <motion.div 
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: "-100%", skewX: -15 }}
                      whileHover={{ x: "200%" }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                    <span className="relative z-10">{card.buttonText}</span>
                    <motion.div variants={arrowHover} className="relative z-10">
                      <ArrowRight size={16} />
                    </motion.div>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="rounded-[8px] bg-[#0a192f] text-white overflow-hidden p-8 lg:p-10 flex flex-col gap-8 relative shadow-xl border border-slate-700/50 w-full"
      >
        <motion.div 
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,1),transparent_50%)] pointer-events-none"
        ></motion.div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative z-10 w-full">
          <motion.div variants={fadeUpText} className="flex flex-col gap-4 max-w-2xl">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-blue-900/40 border border-blue-400/30 text-blue-300 text-[11px] font-bold px-3 py-1 rounded-[4px] w-fit uppercase tracking-wider cursor-default shadow-[0_0_15px_rgba(59,130,246,0.1)]"
            >
              {block2.tag}
            </motion.div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-400 tracking-tight leading-[1.1]">
              {block2.title}
            </h2>
            <p className="text-base text-slate-300 font-medium leading-relaxed">
              {block2.subtitle}
            </p>
          </motion.div>

          <motion.div variants={fadeUpText} className="hidden md:flex justify-end relative z-10 lg:pr-8">
            <div className="relative group cursor-default">
              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-blue-500/30 rounded-full blur-[40px]"
              ></motion.div>
              <motion.img
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                src={block2.headerImage}
                alt="Growth Metrics"
                className="h-32 w-auto object-contain drop-shadow-[0_0_20px_rgba(59,130,246,0.3)] relative z-10"
              />
              <motion.div variants={floatAnim1} animate="animate" className="absolute -bottom-2 -left-6 bg-slate-800 p-2.5 rounded-[4px] border border-slate-600 z-20 shadow-lg">
                <BarChart className="text-blue-400" size={20} strokeWidth={2}/>
              </motion.div>
              <motion.div variants={floatAnim2} animate="animate" className="absolute -top-4 -right-2 bg-slate-800 p-2.5 rounded-full border border-slate-600 z-20 shadow-lg">
                <Sparkles className="text-blue-300" size={16} strokeWidth={2}/>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10 w-full">
          {block2.cards.map((card) => (
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: "0 20px 40px -15px rgba(59,130,246,0.2)" }}
              key={card.id}
              className="group bg-slate-800/40 backdrop-blur-md rounded-[8px] p-6 lg:p-8 shadow-lg border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-500 flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="flex justify-between items-start gap-6 mb-6 relative z-10">
                <div className="flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 shrink-0 rounded-[4px] bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300"
                    >
                      <card.icon size={24} strokeWidth={1.5} />
                    </motion.div>
                    <div className="flex flex-col">
                      <h3 className="text-[22px] font-extrabold text-white leading-tight group-hover:text-blue-300 transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-blue-400 font-bold text-[11px] mt-0.5">
                        {card.desktopSubtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-300 text-[13px] leading-relaxed mt-2 pr-2">
                    {card.description}
                  </p>
                </div>

                <div className="hidden sm:block w-36 h-28 shrink-0 rounded-[4px] overflow-hidden border border-slate-600/50 shadow-sm relative group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-shadow">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-blue-900/40 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2 py-5 mt-auto border-t border-slate-700/50 mb-2 relative z-10">
                {card.features.map((feature, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="flex flex-col items-center text-center gap-2"
                  >
                    <div className="text-blue-400 bg-slate-900/50 border border-slate-600/50 p-2 rounded-[4px] shadow-sm group-hover:border-blue-400 group-hover:bg-slate-800 transition-all duration-300">
                      <feature.icon size={18} strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 leading-tight group-hover:text-blue-300 transition-colors">
                      {feature.labelDesktop}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="flex justify-start w-full mt-2 relative z-10">
                <motion.button 
                  variants={buttonHover}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  className="w-full sm:w-[55%] bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3.5 px-6 rounded-[4px] flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(79,70,229,0.2)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.4)] text-[13px] relative overflow-hidden"
                >
                  <motion.div 
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%", skewX: -15 }}
                    whileHover={{ x: "200%" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                  <span className="relative z-10">{card.buttonText}</span>
                  <motion.div variants={arrowHover} className="relative z-10">
                    <ArrowRight size={16} />
                  </motion.div>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="rounded-[8px] bg-gradient-to-br from-[#f0fdf4] to-[#e6fbf1] overflow-hidden flex flex-col lg:flex-row relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-emerald-200/50 w-full"
      >
        <div className="p-8 lg:p-10 flex-1 flex flex-col gap-8 z-10 w-full lg:w-[55%]">
          <motion.div variants={fadeUpText} className="flex flex-col gap-4">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 border border-emerald-200 text-emerald-700 text-[11px] font-bold px-3 py-1 rounded-[4px] w-fit uppercase tracking-wider cursor-default shadow-sm"
            >
              {block3.tag}
            </motion.div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#064e3b] leading-[1.1] tracking-tight">
              {block3.title}
            </h2>
            <p className="text-lg font-bold text-emerald-800">
              {block3.subtitleBold}
            </p>
            <p className="text-gray-600 font-medium leading-relaxed pr-4 text-[14px]">
              {block3.subtitle}
            </p>
          </motion.div>

          <motion.div variants={fadeUpText} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
            {block3.categories.map((category, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-white rounded-[4px] p-4 flex flex-col items-center justify-center text-center gap-3 shadow-sm border border-emerald-100 hover:border-emerald-400 hover:shadow-[0_10px_20px_rgba(16,185,129,0.1)] transition-all duration-300 cursor-pointer"
              >
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="text-emerald-500 group-hover:text-emerald-600 transition-colors"
                >
                  <category.icon size={26} strokeWidth={1.5} />
                </motion.div>
                <span className="text-[11px] font-bold text-gray-700 group-hover:text-emerald-800 transition-colors">
                  {category.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUpText} className="mt-4 w-full sm:w-fit">
            <motion.button
              variants={buttonHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-3.5 px-10 rounded-[4px] flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(5,150,105,0.2)] hover:shadow-[0_6px_20px_rgba(5,150,105,0.4)] text-[13px] relative overflow-hidden"
            >
              <motion.div 
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%", skewX: -15 }}
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
              <span className="relative z-10">{block3.buttonText}</span>
              <motion.div variants={arrowHover} className="relative z-10">
                <ArrowRight size={16} />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>

        <div className="flex-1 w-full lg:w-[45%] relative min-h-[400px] lg:min-h-full overflow-hidden">
          <div className="absolute inset-0 bg-emerald-900/5 z-10 mix-blend-overlay pointer-events-none"></div>
          <motion.img
            initial={{ scale: 1.1, opacity: 0, filter: "blur(10px)" }}
            whileInView={{ scale: 1.05, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: smoothEasing }}
            whileHover={{ scale: 1.08 }}
            src={block3.mainImage}
            alt="Opportunities"
            className="absolute inset-0 w-full h-full object-cover lg:rounded-r-[8px] transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#e6fbf1] via-transparent to-transparent z-10 w-full lg:w-32 hidden lg:block pointer-events-none"></div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-4 lg:right-8 flex flex-col gap-4 z-20">
            {block3.floaters.map((floater, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 40, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.4 + idx * 0.15, duration: 0.8, ease: smoothEasing }}
                whileHover={{ x: -8, scale: 1.02 }}
                className="group bg-white/95 backdrop-blur-md rounded-[4px] p-3 shadow-[0_10px_20px_rgba(16,185,129,0.1)] border border-emerald-100 hover:border-emerald-400 hover:bg-white flex items-center gap-3 w-48 lg:w-56 cursor-default transition-all duration-300"
              >
                <motion.div 
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.5 }}
                  className="text-emerald-600 bg-emerald-50 border border-emerald-100 p-1.5 rounded-[4px] shadow-sm group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 transition-colors duration-300"
                >
                  <floater.icon size={16} strokeWidth={2} />
                </motion.div>
                <span className="text-[12px] font-bold text-gray-800 leading-tight group-hover:text-emerald-800 transition-colors">
                  {floater.labelDesktop}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}