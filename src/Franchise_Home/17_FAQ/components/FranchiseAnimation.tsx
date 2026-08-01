import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Coffee, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  MapPin, 
  Sparkles, 
  Activity,
  Cpu
} from "lucide-react";

export function FranchiseAnimation() {
  const [activeNode, setActiveNode] = useState<number>(0);
  const [tick, setTick] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((prev) => (prev + 1) % 100);
    }, 120);
    return () => clearInterval(timer);
  }, []);

  const orbitingSatellites = [
    {
      id: 0,
      title: "Predictive ROI Engine",
      value: "22–31% Net Margins",
      icon: TrendingUp,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/40",
      glow: "shadow-[0_0_20px_rgba(16,185,129,0.3)]",
      angle: 0,
    },
    {
      id: 1,
      title: "Territory Exclusivity",
      value: "Guaranteed 2–4 km",
      icon: ShieldCheck,
      color: "text-blue-400",
      bg: "bg-blue-500/10 border-blue-500/40",
      glow: "shadow-[0_0_20px_rgba(59,130,246,0.3)]",
      angle: 90,
    },
    {
      id: 2,
      title: "Fast-Track Launch",
      value: "45–60 Day Turnkey",
      icon: Zap,
      color: "text-[#d4af37]",
      bg: "bg-amber-500/10 border-[#d4af37]/40",
      glow: "shadow-[0_0_20px_rgba(212,175,55,0.3)]",
      angle: 180,
    },
    {
      id: 3,
      title: "Direct Supply Chain",
      value: "24h Depot Dispatch",
      icon: MapPin,
      color: "text-purple-400",
      bg: "bg-purple-500/10 border-purple-500/40",
      glow: "shadow-[0_0_20px_rgba(168,85,247,0.3)]",
      angle: 270,
    },
  ];

  return (
    <div className="w-full relative rounded-[4px] overflow-hidden bg-gradient-to-br from-[#070d1e] via-[#0a142c] to-[#040813] border border-gray-800/90 shadow-2xl p-6 flex flex-col justify-between select-none group">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-[#d4af37]/10 rounded-full blur-[100px]" />
        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-blue-500/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-emerald-500/10 rounded-full blur-[80px]" />
        
        <div 
          className="absolute inset-0 opacity-[0.07] mix-blend-overlay"
          style={{
            backgroundImage: "radial-gradient(#d4af37 1px, transparent 1px), radial-gradient(#d4af37 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            backgroundPosition: "0 0, 12px 12px",
          }}
        />
      </div>

      <div className="relative z-10 flex items-center justify-between border-b border-gray-800/80 pb-3 mb-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest">
            Ecosystem Online
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-[2px] bg-[#d4af37]/10 border border-[#d4af37]/30 text-[10px] font-mono text-[#d4af37]">
          <Cpu size={11} className="animate-spin-slow" />
          <span>v4.2 PRO ENGINE</span>
        </div>
      </div>

      <div className="relative w-full h-[320px] flex items-center justify-center my-2">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 320 320">
          <defs>
            <radialGradient id="radarGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#d4af37" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="beamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d4af37" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>

          <circle cx="160" cy="160" r="140" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 6" opacity="0.6" />
          <circle cx="160" cy="160" r="105" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" opacity="0.8" />
          <circle cx="160" cy="160" r="70" fill="url(#radarGlow)" stroke="#d4af37" strokeWidth="1" opacity="0.4" />
          <circle cx="160" cy="160" r="40" fill="none" stroke="#d4af37" strokeWidth="1.5" opacity="0.6" />

          <line x1="160" y1="10" x2="160" y2="310" stroke="#334155" strokeWidth="1" strokeDasharray="2 4" opacity="0.3" />
          <line x1="10" y1="160" x2="310" y2="160" stroke="#334155" strokeWidth="1" strokeDasharray="2 4" opacity="0.3" />

          <g className="origin-[160px_160px] animate-spin-slow">
            <path
              d="M 160 160 L 300 160 A 140 140 0 0 0 258 62 Z"
              fill="url(#beamGrad)"
              opacity="0.18"
            />
            <line x1="160" y1="160" x2="300" y2="160" stroke="#d4af37" strokeWidth="1.5" opacity="0.7" />
          </g>
        </svg>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute w-[220px] h-[220px] rounded-full border border-dashed border-[#d4af37]/30 pointer-events-none"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#d4af37] shadow-[0_0_12px_#d4af37]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_10px_#60a5fa]" />
        </motion.div>

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute w-[280px] h-[280px] rounded-full border border-[#3b82f6]/20 pointer-events-none"
        >
          <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
          <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_#c084fc]" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.08 }}
          className="relative z-20 w-24 h-24 rounded-full bg-gradient-to-tr from-[#0a1128] via-[#16254c] to-[#0a1128] border-2 border-[#d4af37] shadow-[0_0_40px_rgba(212,175,55,0.4)] flex flex-col items-center justify-center cursor-pointer group/core"
        >
          <div className="absolute -inset-2 rounded-full border border-[#d4af37]/40 animate-ping pointer-events-none" />
          <div className="absolute -inset-4 rounded-full border border-[#d4af37]/20 pointer-events-none" />

          <Coffee size={28} className="text-[#d4af37] drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] group-hover/core:scale-110 transition-transform" />
          <span className="text-[9px] font-black text-white tracking-widest uppercase mt-1">
            CREMP
          </span>
          <span className="text-[7px] font-mono text-[#d4af37] font-bold">
            HUB 360°
          </span>
        </motion.div>

        {orbitingSatellites.map((node, i) => {
          const isSelected = activeNode === node.id;
          const Icon = node.icon;

          const positions = [
            "top-2 left-2",
            "top-2 right-2",
            "bottom-2 left-2",
            "bottom-2 right-2",
          ];

          return (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.06, y: -2 }}
              onClick={() => setActiveNode(node.id)}
              className={`absolute ${positions[i]} z-20 cursor-pointer p-2.5 rounded-[4px] border backdrop-blur-md transition-all duration-300 ${
                isSelected
                  ? `${node.bg} ${node.glow} ring-1 ring-[#d4af37]`
                  : "bg-gray-900/80 border-gray-800 hover:border-gray-700"
              }`}
            >
              <div className="flex items-center gap-2">
                <div className={`p-1.5 rounded-[2px] ${node.bg} ${node.color}`}>
                  <Icon size={13} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gray-300 leading-tight">
                    {node.title}
                  </div>
                  <div className={`text-[11px] font-extrabold ${node.color} tracking-tight`}>
                    {node.value}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="relative z-10 bg-gray-950/70 border border-gray-800/80 rounded-[4px] p-3 flex flex-col gap-2 mt-1">
        <div className="flex items-center justify-between text-[10px] text-gray-400 font-mono">
          <span className="flex items-center gap-1.5 text-gray-300 font-bold">
            <Activity size={12} className="text-[#d4af37] animate-pulse" />
            TELEMETRY STREAM
          </span>
          <span className="text-emerald-400 font-bold">99.8% EFFICIENCY</span>
        </div>

        <div className="flex items-end gap-1 h-7 w-full overflow-hidden px-1">
          {Array.from({ length: 24 }).map((_, barIdx) => {
            const heightFactor = Math.sin((tick + barIdx * 4) * 0.2) * 45 + 50;
            const isGold = barIdx % 3 === 0;

            return (
              <motion.div
                key={barIdx}
                className={`flex-1 rounded-[1px] transition-all duration-100 ${
                  isGold ? "bg-[#d4af37]" : "bg-blue-500/60"
                }`}
                style={{ height: `${Math.max(15, heightFactor)}%` }}
              />
            );
          })}
        </div>

        <div className="text-[10px] font-mono text-gray-400 flex items-center justify-between border-t border-gray-800/60 pt-1.5">
          <span className="truncate flex items-center gap-1">
            <Sparkles size={10} className="text-[#d4af37]" />
            Active Module: <strong className="text-white">{orbitingSatellites[activeNode].title}</strong>
          </span>
          <span className="text-[#d4af37] font-bold shrink-0 ml-2">
            STABLE
          </span>
        </div>
      </div>
    </div>
  );
}
