
import { motion } from "framer-motion";
import { ArrowRight, BarChart, Users, Sparkles } from "lucide-react";
import { stakeholderData } from "./data";

const smoothEasing: [number, number, number, number] = [0.16, 1, 0.3, 1];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const fadeUpText = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: smoothEasing },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: smoothEasing },
  },
};

const floatAnim: any = {
  animate: {
    y: [0, -6, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function MobileStakeHolder1() {
  const { block1, block2, block3 } = stakeholderData;

  return (
    <div className="flex flex-col gap-8 py-10 px-4 w-full overflow-hidden bg-white font-sans">
      
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="rounded-[8px] bg-white relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-orange-100 w-full flex flex-col overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/90 via-white to-orange-50/30 pointer-events-none"></div>

        <div className="absolute top-0 right-0 w-full h-48 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white z-10"></div>
          <img src={block1.bgImage} alt="Buildings" className="w-full h-full object-cover opacity-60" />
        </div>

        <div className="relative z-10 p-5 flex flex-col gap-6 w-full mt-4">
          <motion.div variants={fadeUpText} className="flex flex-col gap-3">
            <div className="flex items-center gap-2 bg-orange-100/50 text-orange-700 text-[10px] font-bold px-3 py-1 rounded-[4px] w-fit tracking-wider uppercase border border-orange-200/50">
              <Users size={12} strokeWidth={2.5}/>
              {block1.tag}
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight leading-[1.1]">
              {block1.title}
            </h2>
            <p className="text-[13px] text-gray-600 font-medium leading-relaxed whitespace-pre-line">
              {block1.subtitle}
            </p>
          </motion.div>

          <div className="flex flex-col gap-5 w-full">
            {block1.cards.map((card) => (
              <motion.div
                variants={cardVariants}
                key={card.id}
                className="bg-white rounded-[8px] p-5 shadow-sm border border-orange-100 flex flex-col relative w-full"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 shrink-0 rounded-[4px] bg-orange-50 text-orange-500 flex items-center justify-center border border-orange-100">
                    <card.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-extrabold text-gray-900 leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-orange-600 font-bold text-[10px] mt-0.5 uppercase tracking-wide">
                      {card.mobileSubtitle}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 text-[13px] leading-relaxed mb-4">
                  {card.description}
                </p>

                <div className="w-full h-32 shrink-0 rounded-[4px] overflow-hidden border border-gray-100 shadow-sm relative mb-4">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3 py-4 border-t border-gray-100 mb-2">
                  {card.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <div className="text-orange-500 bg-orange-50/50 border border-orange-100 p-1.5 rounded-[4px] shrink-0">
                        <feature.icon size={14} strokeWidth={1.5} />
                      </div>
                      <span className="text-[11px] font-bold text-gray-700 leading-tight">
                        {feature.labelMobile}
                      </span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-orange-600 to-amber-600 active:from-orange-700 active:to-amber-700 text-white font-bold py-3.5 rounded-[4px] flex items-center justify-center gap-2 shadow-md text-[13px]">
                  {card.buttonText}
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="rounded-[8px] bg-[#0a192f] text-white overflow-hidden p-5 flex flex-col gap-6 relative shadow-xl border border-slate-700/50 w-full"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none"></div>

        <div className="flex justify-between items-start gap-4 relative z-10 w-full mb-2">
          <motion.div variants={fadeUpText} className="flex flex-col gap-3 flex-1">
            <div className="bg-blue-900/40 border border-blue-400/30 text-blue-300 text-[10px] font-bold px-3 py-1 rounded-[4px] w-fit uppercase tracking-wider">
              {block2.tag}
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight leading-[1.1]">
              {block2.title}
            </h2>
            <p className="text-[13px] text-slate-300 font-medium leading-relaxed">
              {block2.subtitle}
            </p>
          </motion.div>

          <motion.div variants={fadeUpText} className="relative w-24 h-24 shrink-0 flex items-center justify-center mt-2 mr-2">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500/20 rounded-full blur-[20px] w-20 h-20"></div>
            <img
              src={block2.headerImage}
              alt="Growth Metrics"
              className="h-full w-auto object-contain drop-shadow-xl relative z-10"
            />
            <motion.div variants={floatAnim} animate="animate" className="absolute bottom-0 -left-2 bg-slate-800 p-1 rounded-[4px] border border-slate-600 z-20 shadow-lg">
              <BarChart className="text-blue-400" size={12} strokeWidth={2}/>
            </motion.div>
            <motion.div variants={floatAnim} animate="animate" style={{ animationDelay: "1s" }} className="absolute -top-1 -right-1 bg-slate-800 p-1 rounded-full border border-slate-600 z-20 shadow-lg">
              <Sparkles className="text-blue-300" size={10} strokeWidth={2}/>
            </motion.div>
          </motion.div>
        </div>

        <div className="flex flex-col gap-5 relative z-10 w-full">
          {block2.cards.map((card) => (
            <motion.div
              variants={cardVariants}
              key={card.id}
              className="bg-slate-800/40 backdrop-blur-md rounded-[8px] p-5 shadow-lg border border-slate-700/50 flex flex-col w-full"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 shrink-0 rounded-[4px] bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20">
                  <card.icon size={24} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-extrabold text-white leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-blue-400 font-bold text-[10px] mt-0.5 uppercase tracking-wide">
                    {card.mobileSubtitle}
                  </p>
                </div>
              </div>

              <p className="text-slate-300 text-[13px] leading-relaxed mb-4">
                {card.description}
              </p>

              <div className="w-full h-32 shrink-0 rounded-[4px] overflow-hidden border border-slate-600/50 shadow-sm relative mb-4">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 py-4 border-t border-slate-700/50 mb-2">
                {card.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <div className="text-blue-400 bg-slate-900/50 border border-slate-600/50 p-1.5 rounded-[4px] shrink-0">
                      <feature.icon size={14} strokeWidth={1.5} />
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 leading-tight">
                      {feature.labelMobile}
                    </span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 active:from-blue-700 active:to-indigo-700 text-white font-bold py-3.5 rounded-[4px] flex items-center justify-center gap-2 shadow-md text-[13px]">
                {card.buttonText}
                <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="rounded-[8px] bg-gradient-to-br from-[#f0fdf4] to-[#e6fbf1] overflow-hidden flex flex-col relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-emerald-200/50 w-full"
      >
        <div className="p-5 flex flex-col gap-6 z-10 w-full">
          <motion.div variants={fadeUpText} className="flex flex-col gap-3">
            <div className="bg-white/80 border border-emerald-200 text-emerald-700 text-[10px] font-bold px-3 py-1 rounded-[4px] w-fit uppercase tracking-wider">
              {block3.tag}
            </div>
            <h2 className="text-3xl font-extrabold text-[#064e3b] leading-[1.1] tracking-tight">
              {block3.title}
            </h2>
            <p className="text-[13px] font-bold text-emerald-800">
              {block3.subtitleBold}
            </p>
            <p className="text-gray-600 font-medium leading-relaxed text-[13px]">
              {block3.subtitle}
            </p>
          </motion.div>

          <motion.div variants={fadeUpText} className="grid grid-cols-2 gap-3 mt-1">
            {block3.categories.map((category, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[4px] p-4 flex flex-col items-center justify-center text-center gap-2 shadow-sm border border-emerald-100"
              >
                <div className="text-emerald-500">
                  <category.icon size={24} strokeWidth={1.5} />
                </div>
                <span className="text-[11px] font-bold text-gray-700">
                  {category.label}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.button
            variants={fadeUpText}
            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 active:from-emerald-700 active:to-teal-700 text-white font-bold py-3.5 rounded-[4px] flex items-center justify-center gap-2 shadow-md text-[13px]"
          >
            {block3.buttonText}
            <ArrowRight size={16} />
          </motion.button>
        </div>

        <div className="w-full relative h-64 mt-2 overflow-hidden">
          <div className="absolute inset-0 bg-emerald-900/5 z-10 mix-blend-overlay pointer-events-none"></div>
          <motion.img
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: smoothEasing }}
            src={block3.mainImage}
            alt="Opportunities"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#e6fbf1] via-transparent to-transparent z-10"></div>
          
          <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-3 z-20 items-end">
            {block3.floaters.slice(0, 3).map((floater, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + idx * 0.15, duration: 0.6, ease: smoothEasing }}
                className="bg-white/95 backdrop-blur-md rounded-[4px] p-2.5 shadow-md border border-emerald-100 flex items-center gap-2.5 w-[200px]"
              >
                <div className="text-emerald-600 bg-emerald-50 border border-emerald-100 p-1.5 rounded-[4px] shadow-sm">
                  <floater.icon size={14} strokeWidth={2} />
                </div>
                <span className="text-[11px] font-bold text-gray-800 leading-tight">
                  {floater.labelMobile}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

    </div>
  );
}