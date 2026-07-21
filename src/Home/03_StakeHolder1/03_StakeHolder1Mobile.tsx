import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { stakeholdersData } from "../03_StakeHolders/data";

export default function MobileStakeHolder1() {
  const gradients = [
    "bg-gradient-to-br from-[#D4AF37] to-[#8C6B1B] dark:from-[#D4AF37] dark:to-[#FFD17A]",
    "bg-gradient-to-tr from-rose-700 via-indigo-900 to-cyan-400",
    "bg-gradient-to-br from-emerald-500 to-teal-800",
    "bg-gradient-to-tr from-orange-500 to-red-700",
    "bg-gradient-to-bl from-blue-600 to-indigo-900",
  ];

  const renderHighlightedTitle = (title: string) => {
    const words = title.split(" ");
    if (words.length <= 1) return title;
    const lastWord = words.pop();
    return (
      <>
        {words.join(" ")}{" "}
        <span className="bg-gradient-to-r from-[#D4AF37] to-[#b38728] bg-clip-text text-transparent dark:from-[#D4AF37] dark:to-[#FFD17A]">
          {lastWord}
        </span>
      </>
    );
  };

  return (
    <div className="relative w-full bg-[#FAFAFA] px-3 sm:px-4 py-12 font-sans transition-colors duration-500 dark:bg-[#030811]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.03)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(246,178,59,0.02)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto flex w-full flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 inline-flex items-center justify-center gap-2 rounded-full border border-[#D4AF37]/30 bg-gradient-to-r from-[#D4AF37]/10 to-transparent px-3 py-1.5 text-[10px] font-bold tracking-widest text-[#D4AF37]">
              <span>CREMP PLATFORM</span>
            </div>
            <h2 className="mb-4 text-3xl font-black leading-tight tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Built for Every <br />
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#b38728] bg-clip-text text-transparent dark:from-[#D4AF37] dark:to-[#FFD17A]">
                Commercial Stakeholder
              </span>
            </h2>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Our marketplace adapts to your specific needs, providing tailored
              tools and connections to accelerate your commercial real estate
              journey.
            </p>
          </motion.div>
        </div>

        {/* Stakeholder Sections Stacked */}
        <div className="flex flex-col gap-12">
          {stakeholdersData.map((stakeholder, idx) => {
            const aspectClasses = [
              "aspect-square",
              "aspect-[4/3]",
              "aspect-[16/9]",
              "aspect-[4/3]",
              "aspect-square",
            ];
            const aspectClass = aspectClasses[idx % aspectClasses.length];
            return (
              <motion.div
                key={stakeholder.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-6"
              >
                {/* Visual Side */}
                <div className="relative w-full max-w-sm mx-auto flex-col">
                  <div className="relative w-full overflow-hidden rounded border border-gray-200 bg-gray-100 shadow-md dark:border-gray-800/80 dark:bg-[#121c33] dark:shadow-black/50">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-80 dark:from-[#0a1128]/90" />
                    <div
                      className={`relative ${aspectClass} w-full overflow-hidden`}
                    >
                      <div className={`h-full w-full ${gradients[idx % gradients.length]} opacity-90 transition-transform duration-700 hover:scale-105`} />
                      <div className="absolute bottom-4 left-4 z-20 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0a1128] shadow-md dark:bg-[#0a1128] dark:text-white">
                          <stakeholder.icon
                            className="h-4 w-4"
                            strokeWidth={2}
                          />
                        </div>
                        <h4 className="text-lg font-bold text-white drop-shadow-md">
                          {stakeholder.label.replace("\n", " ")}
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Stats Row */}
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {stakeholder.stats?.slice(0, 4).map((stat, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex flex-col justify-center rounded border border-gray-200 bg-white p-3 shadow-sm dark:border-gray-800/80 dark:bg-[#121c33]"
                      >
                        <stat.icon
                          className="mb-2 h-4 w-4 text-[#D4AF37]"
                          strokeWidth={1.5}
                        />
                        <span className="text-lg font-black leading-none text-gray-900 dark:text-white">
                          {stat.value}
                        </span>
                        <span className="mt-1 text-[9px] font-bold tracking-wider text-gray-500 uppercase dark:text-gray-400">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex w-full flex-col justify-center">
                  <div className="mb-3 w-fit rounded-sm border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-2.5 py-1 text-[9px] font-black tracking-widest text-[#D4AF37] dark:border-[#D4AF37]/20 dark:bg-[#D4AF37]/10">
                    FOR {stakeholder.id.toUpperCase()}
                  </div>

                  <h3 className="mb-5 text-2xl font-extrabold leading-[1.2] tracking-tight text-gray-900 dark:text-white">
                    {renderHighlightedTitle(stakeholder.title)}
                  </h3>

                  <div className="mb-8 flex flex-col gap-3 sm:grid sm:grid-cols-2">
                    {stakeholder.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-center gap-3 rounded border-gray-100 dark:border-gray-800/50 border bg-gray-50/50 p-2.5 dark:bg-[#121c33]/30"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-[#D4AF37] shadow-sm dark:border-gray-800 dark:bg-[#0a0f25]">
                          <feature.icon className="h-4 w-4" strokeWidth={1.5} />
                        </div>
                        <span className="text-[12px] font-bold leading-tight text-gray-900 dark:text-gray-100">
                          {feature.title}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <button className="group relative flex w-full items-center justify-between overflow-hidden rounded bg-gray-900 px-3 py-2 text-white shadow-md active:scale-[0.98] dark:bg-white dark:text-[#0a1128]">
                      <div className="flex items-center gap-3">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-transparent text-[#FFD17A] dark:text-[#D4AF37]">
                          <Sparkles className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-sm font-bold tracking-wide">
                          {stakeholder.buttonText}
                        </span>
                      </div>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
