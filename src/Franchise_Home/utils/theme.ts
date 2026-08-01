export const getBadgeStyles = (intent?: string) => {
  switch (intent) {
    case "success":
      return "bg-emerald-50 text-emerald-600 border border-emerald-100 shadow-sm rounded-full px-3 py-1";
    case "info":
      return "bg-sky-50 text-sky-600 border border-sky-100 shadow-sm rounded-full px-3 py-1";
    case "warning":
      return "bg-amber-50 text-amber-600 border border-amber-100 shadow-sm rounded-full px-3 py-1";
    case "danger":
      return "bg-rose-50 text-rose-600 border border-rose-100 shadow-sm rounded-full px-3 py-1";
    case "primary":
      return "bg-[#0a1128]/5 text-[#0a1128] border border-[#0a1128]/10 shadow-sm rounded-full px-3 py-1";
    default:
      return "bg-gray-50 text-gray-600 border border-gray-100 shadow-sm rounded-full px-3 py-1";
  }
};

export const getIconStyles = (intent?: string) => {
  switch (intent) {
    case "success":
      return "text-emerald-500";
    case "info":
      return "text-sky-500";
    case "warning":
      return "text-amber-500";
    case "danger":
      return "text-rose-500";
    case "primary":
      return "text-[#d4af37]";
    default:
      return "text-gray-500";
  }
};

export const getIconContainerStyles = (intent?: string) => {
  switch (intent) {
    case "success":
      return "bg-emerald-50/50 border border-emerald-100 text-emerald-500 shadow-sm";
    case "info":
      return "bg-sky-50/50 border border-sky-100 text-sky-500 shadow-sm";
    case "warning":
      return "bg-amber-50/50 border border-amber-100 text-amber-500 shadow-sm";
    case "danger":
      return "bg-rose-50/50 border border-rose-100 text-rose-500 shadow-sm";
    case "primary":
      return "bg-gradient-to-br from-[#14B8A6]/10 to-[#0F766E]/10 border border-[#14B8A6]/20 text-[#14B8A6] shadow-sm";
    case "violet":
      return "bg-gradient-to-br from-[#8B5CF6]/10 to-[#6D28D9]/10 border border-[#8B5CF6]/20 text-[#8B5CF6] shadow-sm";
    case "pink":
      return "bg-gradient-to-br from-[#F43F5E]/10 to-[#BE123C]/10 border border-[#F43F5E]/20 text-[#F43F5E] shadow-sm";
    case "orange":
      return "bg-gradient-to-br from-[#F97316]/10 to-[#C2410C]/10 border border-[#F97316]/20 text-[#F97316] shadow-sm";
    default:
      return "bg-gray-50 border border-gray-100 text-gray-500 shadow-sm";
  }
};

export const getBorderStyles = (_intent?: string) => {
  return "border-gray-100 hover:border-gray-200 transition-colors duration-300";
};

export const getCardStyles = (_intent?: string) => {
  return "bg-white border border-gray-100 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300";
};

export const getTextStyles = (intent?: string) => {
  switch (intent) {
    case "success":
      return "text-emerald-600 font-bold";
    case "info":
      return "text-sky-600 font-bold";
    case "warning":
      return "text-amber-600 font-bold";
    case "danger":
      return "text-rose-600 font-bold";
    case "primary":
      return "text-[#0a1128] font-bold";
    default:
      return "text-gray-800 font-semibold";
  }
};

export const getSolidBgStyles = (intent?: string) => {
  switch (intent) {
    case "success":
      return "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20";
    case "info":
      return "bg-sky-500 text-white shadow-lg shadow-sky-500/20";
    case "warning":
      return "bg-amber-500 text-white shadow-lg shadow-amber-500/20";
    case "danger":
      return "bg-rose-500 text-white shadow-lg shadow-rose-500/20";
    case "primary":
      return "bg-[#0a1128] text-white shadow-[0_8px_30px_rgb(10,17,40,0.2)]";
    default:
      return "bg-white text-gray-800 shadow-[0_8px_30px_rgb(0,0,0,0.08)]";
  }
};
