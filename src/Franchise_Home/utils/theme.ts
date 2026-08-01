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
      return "bg-[#059669] text-white shadow-md shadow-[#059669]/25";
    case "info":
      return "bg-[#0284c7] text-white shadow-md shadow-[#0284c7]/25";
    case "warning":
      return "bg-[#d97706] text-white shadow-md shadow-[#d97706]/25";
    case "danger":
      return "bg-[#dc2626] text-white shadow-md shadow-[#dc2626]/25";
    case "primary":
      return "bg-[#0b162c] text-white shadow-md shadow-[#0b162c]/25";
    case "violet":
      return "bg-[#7c3aed] text-white shadow-md shadow-[#7c3aed]/25";
    case "pink":
      return "bg-[#e11d48] text-white shadow-md shadow-[#e11d48]/25";
    case "orange":
      return "bg-[#ea580c] text-white shadow-md shadow-[#ea580c]/25";
    default:
      return "bg-gray-700 text-white shadow-md";
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
