import { motion } from "framer-motion";
import { Crosshair, Navigation } from "lucide-react";
import { useState } from "react";
import { MAP_AREAS, MAP_PINS } from "../data";
import type { MapPin } from "../data";

interface MapViewProps {
  selectedCity?: string;
  listingsCount?: number;
  onSelectPin?: (pin: MapPin) => void;
}

export default function MapView({
  selectedCity: _selectedCity = "Hyderabad",
  listingsCount = 30,
  onSelectPin,
}: MapViewProps) {
  const [activePin, setActivePin] = useState<string | null>(null);

  const getDotColorClass = (color: MapPin["color"]) => {
    switch (color) {
      case "purple":
        return "bg-[#8b5cf6] shadow-[0_0_10px_#8b5cf6]";
      case "orange":
        return "bg-[#f97316] shadow-[0_0_10px_#f97316]";
      case "blue":
        return "bg-[#0284c7] shadow-[0_0_10px_#0284c7]";
      case "green":
        return "bg-[#10b981] shadow-[0_0_10px_#10b981]";
      case "red":
        return "bg-[#ef4444] shadow-[0_0_10px_#ef4444]";
      default:
        return "bg-[#d4af37]";
    }
  };

  return (
    <div className="w-full flex-1 min-h-[500px] h-[calc(100vh-220px)] relative bg-[#eef2f6] overflow-hidden select-none">
      {/* Background Stylized Map Grid and Roads */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Minor Grid */}
          <defs>
            <pattern
              id="map-grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="0.8"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#map-grid)" />

          {/* Road Network Lines */}
          <path
            d="M 50 120 Q 300 200 650 320 T 1100 480"
            fill="none"
            stroke="#ffffff"
            strokeWidth="8"
          />
          <path
            d="M 50 120 Q 300 200 650 320 T 1100 480"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="3"
            strokeDasharray="6 4"
          />

          <path
            d="M 200 40 Q 380 340 700 700"
            fill="none"
            stroke="#ffffff"
            strokeWidth="7"
          />
          <path
            d="M 200 40 Q 380 340 700 700"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2.5"
          />

          <path
            d="M 100 450 Q 550 420 980 200"
            fill="none"
            stroke="#ffffff"
            strokeWidth="6"
          />
          <path
            d="M 100 450 Q 550 420 980 200"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Highway Shield Badges */}
      <div className="absolute top-[22%] left-[16%] px-1.5 py-0.5 rounded-[3px] border border-gray-400 bg-white text-[9px] font-extrabold text-gray-600 shadow-2xs">
        ORR
      </div>
      <div className="absolute top-[25%] right-[22%] px-1.5 py-0.5 rounded-[3px] border border-gray-400 bg-white text-[9px] font-extrabold text-gray-600 shadow-2xs">
        45
      </div>
      <div className="absolute bottom-[28%] left-[8%] px-1.5 py-0.5 rounded-[3px] border border-gray-400 bg-white text-[9px] font-extrabold text-gray-600 shadow-2xs">
        65
      </div>

      {/* Area Name Labels */}
      {MAP_AREAS.map((area) => (
        <div
          key={area.name}
          style={{ left: `${area.x}%`, top: `${area.y}%` }}
          className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none text-center"
        >
          <span className="text-[10px] sm:text-[11px] font-extrabold tracking-wider text-gray-700 uppercase bg-white/70 backdrop-blur-xs px-1.5 py-0.5 rounded-[3px] shadow-2xs border border-white/60">
            {area.name}
          </span>
        </div>
      ))}

      {/* Interactive Property Map Pins / Dots */}
      {MAP_PINS.map((pin) => {
        const isHovered = activePin === pin.id;
        return (
          <div
            key={pin.id}
            style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <button
              type="button"
              onMouseEnter={() => setActivePin(pin.id)}
              onMouseLeave={() => setActivePin(null)}
              onClick={() => onSelectPin?.(pin)}
              className="relative group p-2 cursor-pointer flex items-center justify-center"
            >
              <div
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full ${getDotColorClass(
                  pin.color
                )} transition-transform duration-200 group-hover:scale-135`}
              />
              <div className="absolute inset-0 rounded-full animate-ping opacity-25 bg-current pointer-events-none" />

              {/* Pin Tooltip Popup */}
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-[#0b1b42] text-white text-[11px] font-semibold rounded-[4px] shadow-xl whitespace-nowrap z-30 pointer-events-none"
                >
                  <span>{pin.name}</span>
                </motion.div>
              )}
            </button>
          </div>
        );
      })}

      {/* Floating 30 Listings Badge */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="absolute bottom-6 left-5 z-20"
      >
        <div className="w-14 h-14 rounded-full bg-[#0a1128] text-white flex flex-col items-center justify-center shadow-xl border border-white/20">
          <span className="text-sm font-extrabold leading-none">
            {listingsCount}
          </span>
          <span className="text-[8px] font-medium text-gray-300 mt-0.5">
            Listings
          </span>
        </div>
      </motion.div>

      {/* Floating GPS & Navigation Controls */}
      <div className="absolute bottom-6 right-5 flex flex-col gap-2 z-20">
        <button
          type="button"
          aria-label="Locate Me"
          className="w-11 h-11 rounded-full bg-white text-gray-800 flex items-center justify-center shadow-lg border border-gray-200 hover:bg-gray-50 active:scale-95 transition-all"
        >
          <Crosshair className="w-5 h-5 text-gray-700" />
        </button>

        <button
          type="button"
          aria-label="Compass Navigation"
          className="w-11 h-11 rounded-full bg-white text-gray-800 flex items-center justify-center shadow-lg border border-gray-200 hover:bg-gray-50 active:scale-95 transition-all"
        >
          <Navigation className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </div>
  );
}
