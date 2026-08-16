import { Map } from "lucide-react";

export default function MapView() {
  return (
    <div className="w-full h-full bg-slate-200 relative overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="relative z-10 flex flex-col items-center gap-2 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-slate-300">
        <Map size={48} className="text-[#17274c]" />
        <span className="text-[#17274c] font-semibold tracking-wide text-sm">
          Interactive Map View
        </span>
        <span className="text-slate-600 text-xs">
          All Buildings Location Details
        </span>
      </div>
    </div>
  );
}
