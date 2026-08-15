import { Map } from "lucide-react";

export default function MapView() {
  return (
    <div className="w-full h-full bg-gray-50 relative overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="relative z-10 flex flex-col items-center gap-2 bg-white/80 backdrop-blur-sm p-4 rounded-[4px] shadow-sm border border-gray-100">
        <Map size={48} className="text-[#0a1128]/80" />
        <span className="text-[#0a1128] font-semibold tracking-wide text-sm">
          Interactive Map View
        </span>
        <span className="text-gray-500 text-xs font-medium">
          Land Location Details
        </span>
      </div>
    </div>
  );
}
