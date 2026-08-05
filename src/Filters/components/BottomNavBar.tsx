import {
  Heart,
  UserCheck,
  Star,
  Video,
  FileText,
  Building2,
} from "lucide-react";
import { useState } from "react";

export default function BottomNavBar() {
  const [activeNav, setActiveNav] = useState("cremp");

  const NAV_ITEMS = [
    { id: "cremp", label: "CREMP", icon: Building2 },
    { id: "saved", label: "Saved", icon: Heart },
    { id: "broker", label: "Hire Broker", icon: UserCheck },
    { id: "handpicked", label: "Handpicked", icon: Star },
    { id: "video", label: "Video Search", icon: Video },
    { id: "post", label: "Post Requirement", icon: FileText },
  ];

  return (
    <nav className="w-full bg-[#0a1128] text-white border-t border-white/10 px-2 py-2 select-none z-30 shadow-2xl">
      <div className="max-w-md mx-auto flex items-center justify-between">
        {NAV_ITEMS.map((item) => {
          const isActive = activeNav === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveNav(item.id)}
              className={`flex-1 flex flex-col items-center justify-center py-1 transition-all ${
                isActive
                  ? "text-[#d4af37]"
                  : "text-white/60 hover:text-white/90"
              }`}
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-[9px] sm:text-[10px] font-medium tracking-tight mt-1 line-clamp-1">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
