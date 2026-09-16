import { actionCards } from '../data/marketplaceData';
import { motion } from 'framer-motion';
import headerImage from '../assets/hire_broker_header.jpg';


interface BrokerHeaderProps {
  isDesktop: boolean;
}

export default function BrokerHeader({ isDesktop }: BrokerHeaderProps) {
  return (
    <div className="w-full bg-gradient-to-br from-[#0a1128] via-[#121c33] to-[#0a1128] relative overflow-hidden shrink-0 border-b border-white/[0.05]">
      
      <motion.div
        animate={{ x: [-20, 20, -20], y: [-15, 25, -15], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-80 h-80 bg-[#d4af37]/15 blur-[90px] -translate-y-1/3 translate-x-1/4 rounded-full pointer-events-none"
      />
      <motion.div
        animate={{ x: [15, -25, 15], y: [20, -15, 20], scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 blur-[80px] translate-y-1/3 -translate-x-1/4 rounded-full pointer-events-none"
      />
      
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      {isDesktop ? (
        <div 
          className="absolute inset-y-0 right-0 w-[550px] z-0 overflow-hidden pointer-events-none transition-all duration-500"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 25%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 25%)",
          }}
        >
          <img src={headerImage} alt="" className="w-full h-full object-cover object-right opacity-90 mix-blend-screen" />
        </div>
      ) : (
        <div 
          className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0%, black 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 100%)",
          }}
        >
          <img src={headerImage} alt="" className="w-full h-full object-cover object-[center_30%] opacity-[0.45]" />
        </div>
      )}

      <div className={`relative z-10 ${isDesktop ? 'px-8 py-10' : 'px-4 py-8'}`}>
        
        <div className="flex items-start justify-between gap-4 mb-1">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className={`font-extralight text-white tracking-wide m-0 leading-tight ${
                isDesktop ? 'text-[1.6rem]' : 'text-[1.25rem]'
              }`}
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Find{' '}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] animate-[cb-shimmer_3s_infinite_linear]" style={{ backgroundSize: "200% auto" }}>
                CREMP Brokers
              </span>
            </motion.h1>
          </div>

          
          {isDesktop && (
            <div className="">
            </div>
          )}
        </div>

        
        <div className={`grid gap-3 mt-4 ${isDesktop ? 'grid-cols-2 max-w-2xl' : 'grid-cols-2'}`}>
          {actionCards.map((card, idx) => (
            <motion.button
              key={card.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -2, scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              transition={{ delay: 0.1 * idx, duration: 0.3 }}
              className={`bg-gradient-to-br ${card.gradient} rounded-[4px] border border-white/10 text-left transition-shadow relative overflow-hidden group
                hover:shadow-[0_8px_25px_rgba(0,0,0,0.35)] hover:border-[#d4af37]/40
                ${isDesktop ? 'px-5 py-4' : 'px-3.5 py-3'}`}
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300" />
              <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 blur-xl rounded-full translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-start gap-2">
                <span className={isDesktop ? 'text-xl' : 'text-base'}>{card.icon}</span>
                <div className="min-w-0">
                  <p
                    className={`text-white font-semibold leading-tight ${
                      isDesktop ? 'text-[13px]' : 'text-[12px]'
                    }`}
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {card.title}
                  </p>
                  <p
                    className={`text-white/55 font-light leading-snug mt-0.5 ${
                      isDesktop ? 'text-[11px]' : 'text-[10px]'
                    }`}
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {card.subtitle}
                  </p>
                  <p
                    className={`text-[#d4af37] font-semibold mt-1.5 ${
                      isDesktop ? 'text-[11px]' : 'text-[10px]'
                    }`}
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {card.cta}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>


      </div>
    </div>
  );
}
