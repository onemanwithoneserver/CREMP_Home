import { motion } from 'framer-motion';
import { Rocket, ArrowRight } from 'lucide-react';
import { networkCategories, vendorBenefits } from './data';
import bgImage from './bg.png';

export default function Mobile() {
  const springAnim = { type: 'spring' as const, stiffness: 100, damping: 20 };

  const iconColorMap: Record<string, string> = {
    emerald: 'text-emerald-700 dark:text-emerald-400',
    blue: 'text-blue-700 dark:text-blue-400',
    purple: 'text-purple-700 dark:text-purple-400',
    rose: 'text-rose-700 dark:text-rose-400',
    amber: 'text-amber-700 dark:text-amber-400',
    cyan: 'text-cyan-700 dark:text-cyan-400',
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-gray-50 dark:bg-[#050C17] px-5 pb-10 pt-28 font-sans text-[#050C17] dark:text-white">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-[#050C17] z-0" />
      <motion.div
        className="absolute inset-0 z-0 opacity-15 dark:opacity-30 bg-cover bg-center bg-no-repeat mix-blend-multiply dark:mix-blend-screen"
        style={{ backgroundImage: `url(${bgImage})` }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.15 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-50/90 via-gray-50/95 to-gray-50 dark:from-[#050C17]/90 dark:via-[#050C17]/95 dark:to-[#050C17] pointer-events-none" />

      {/* Floating particles */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute z-0 hidden rounded-full bg-[#F6B23B]/30 dark:block"
          style={{
            left: `${15 + i * 30}%`,
            top: `${20 + i * 20}%`,
            width: 3 + i,
            height: 3 + i,
          }}
          animate={{
            y: [-8, 8, -8],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.8,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="relative z-10 flex w-full flex-col gap-8">
        
        {/* HERO SECTION */}
        <div className="flex flex-col z-10">
          {/* Top Banner */}
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={springAnim}
            className="mb-6 flex flex-col items-start gap-2 rounded-xl border border-[#B27F1C]/20 dark:border-[#F6B23B]/20 bg-gradient-to-br from-[#B27F1C]/10 to-transparent dark:from-[#F6B23B]/10 p-3 shadow-sm backdrop-blur-sm"
          >
            <div className="flex items-center gap-2 text-xs font-bold text-[#050C17] dark:text-white">
              <Rocket className="h-3.5 w-3.5 text-[#B27F1C] dark:text-[#F6B23B]" />
              <span className="uppercase tracking-wide">Vendor Onboarding Open</span>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-semibold text-[#B27F1C] dark:text-[#F6B23B]">
              <span className="uppercase">Early Access</span>
              <span className="rounded bg-[#B27F1C]/20 dark:bg-[#F6B23B]/20 px-1.5 py-0.5 font-bold uppercase">
                Launching First in Telangana
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springAnim, delay: 0.1 }}
            className="mb-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#050C17] dark:text-white"
          >
            India's 1st Integrated <br />
            <motion.span
              className="bg-gradient-to-r from-[#d97b29] to-[#F6B23B] bg-clip-text text-transparent"
              style={{ backgroundSize: '200% auto' }}
              animate={{ backgroundPosition: ['0% center', '100% center', '0% center'] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            >
              Commercial Real Estate
            </motion.span>{' '}
            <br />
            Marketplace
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springAnim, delay: 0.2 }}
            className="mb-2 flex flex-col gap-1 text-sm font-bold text-[#050C17]/80 dark:text-white/80"
          >
            <div className="flex items-center gap-2">
              <span className="text-[#F6B23B]">•</span>
              <span>Commercial Properties</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#F6B23B]">•</span>
              <span>Franchise Expansion</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#F6B23B]">•</span>
              <span>Retail Business Opportunities</span>
            </div>
          </motion.div>
        </div>

        {/* ONBOARDING CARD SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ...springAnim, delay: 0.4 }}
          viewport={{ once: true, margin: '-20px' }}
          className="relative mt-4 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-[#0C1525]/95 shadow-md dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] backdrop-blur-xl"
        >
          <div className="p-5 sm:p-6">
            
            {/* Launch Info */}
            <div className="mb-6 flex flex-col border-b border-gray-100 pb-5 dark:border-gray-800/50">
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-full bg-orange-100 p-2 dark:bg-orange-500/10">
                  <Rocket className="h-5 w-5 text-orange-500 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#050C17] dark:text-white leading-tight">
                    Launching First in
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <span className="text-base font-bold text-orange-500 dark:text-orange-400">Telangana</span>
                    <span className="text-xs font-bold text-gray-500 dark:text-gray-400">— Phase 1</span>
                  </div>
                </div>
              </div>
              <p className="text-xs font-medium text-gray-600 dark:text-gray-400">
                We're currently onboarding our founding network of:
              </p>
            </div>

            {/* Network Categories Grid */}
            <div className="mb-6 grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-3">
              {networkCategories.map((cat, idx) => (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ ...springAnim, delay: 0.2 + idx * 0.05 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center gap-1.5"
                >
                  <div className="flex h-10 w-10 items-center justify-center">
                    <cat.icon 
                      className={`h-6 w-6 ${iconColorMap[cat.colorFamily] || 'text-gray-700 dark:text-gray-300'}`} 
                      strokeWidth={1.5} 
                    />
                  </div>
                  <span className="text-[10px] font-bold leading-tight text-gray-800 dark:text-gray-200">
                    {cat.title}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3">
              <motion.button
                whileTap={{ scale: 0.96 }}
                className="group relative flex w-full items-center justify-between overflow-hidden rounded-lg bg-[#050C17] dark:bg-white px-4 py-3 text-sm font-bold text-white dark:text-[#050C17] active:bg-gray-900 dark:active:bg-gray-100"
              >
                <span className="relative">Request Early Access</span>
                <ArrowRight className="relative h-4 w-4" />
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.96 }}
                className="group relative flex w-full items-center justify-between rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#111A2C] px-4 py-3 text-sm font-bold text-[#050C17] dark:text-white active:bg-gray-50 dark:active:bg-gray-800"
              >
                <span className="relative">Explore the Marketplace</span>
                <ArrowRight className="relative h-4 w-4" />
              </motion.button>
            </div>
          </div>

          {/* Bottom text */}
          <div className="border-t border-gray-100 bg-gray-50/50 px-4 py-3 text-center dark:border-gray-800 dark:bg-white/[0.02]">
            <p className="text-[11px] font-medium text-gray-700 dark:text-gray-300">
              Join early to establish your presence <span className="font-bold text-orange-600 dark:text-orange-400">before public discovery begins.</span>
            </p>
          </div>
        </motion.div>

        {/* FOUNDING VENDOR BENEFITS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ...springAnim, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-2 flex flex-col gap-4 rounded-xl border border-gray-200/60 bg-white/60 p-5 backdrop-blur-md dark:border-gray-800/60 dark:bg-[#0C1525]/60"
        >
          <div className="text-center text-xs font-bold uppercase tracking-wider text-gray-800 dark:text-gray-200">
            Founding Vendor Benefits
          </div>
          
          <div className="flex flex-col gap-3">
            {vendorBenefits.map((benefit, idx) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ...springAnim, delay: 0.6 + idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="flex-shrink-0 rounded-full border border-gray-200 bg-white p-1.5 text-orange-500 shadow-sm dark:border-gray-700 dark:bg-[#111A2C] dark:text-orange-400">
                  <benefit.icon className="h-3.5 w-3.5" />
                </div>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  {benefit.title}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}