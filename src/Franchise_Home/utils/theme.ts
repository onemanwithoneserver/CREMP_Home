export const getBadgeStyles = (intent?: string) => {
  switch (intent) {
    case "success":
      return "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800/60 shadow-sm rounded-[2px] px-3 py-1";
    case "info":
      return "bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 border border-sky-100 dark:border-sky-800/60 shadow-sm rounded-[2px] px-3 py-1";
    case "warning":
      return "bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-100 dark:border-amber-800/60 shadow-sm rounded-[2px] px-3 py-1";
    case "danger":
      return "bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border border-rose-100 dark:border-rose-800/60 shadow-sm rounded-[2px] px-3 py-1";
    case "primary":
      return "bg-[#0a1128]/5 dark:bg-[#d4af37]/10 text-[#0a1128] dark:text-[#d4af37] border border-[#0a1128]/10 dark:border-[#d4af37]/30 shadow-sm rounded-[2px] px-3 py-1";
    default:
      return "bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-gray-700 shadow-sm rounded-[2px] px-3 py-1";
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
      return "bg-[#0a1128] text-white shadow-md shadow-[#0a1128]/25 border border-[#d4af37]/30";
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
  return "border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-colors duration-300";
};

export const getCardStyles = (_intent?: string) => {
  return "bg-white dark:bg-[#121c33] border border-gray-100 dark:border-gray-800 rounded-[4px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300";
};

export const getTextStyles = (intent?: string) => {
  switch (intent) {
    case "success":
      return "text-emerald-600 dark:text-emerald-400 font-bold";
    case "info":
      return "text-sky-600 dark:text-sky-400 font-bold";
    case "warning":
      return "text-amber-600 dark:text-amber-400 font-bold";
    case "danger":
      return "text-rose-600 dark:text-rose-400 font-bold";
    case "primary":
      return "text-[#0a1128] dark:text-white font-bold";
    default:
      return "text-gray-800 dark:text-gray-200 font-semibold";
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
      return "bg-[#0a1128] text-white shadow-md border border-[#d4af37]/30";
    default:
      return "bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-sm";
  }
};

export const getCheckBadgeStyles = (intent?: string) => {
  switch (intent) {
    case "success":
      return {
        wrapper: "group-hover/item:bg-[#059669]/15 group-hover/item:ring-[#059669]/30",
        icon: "group-hover/item:text-[#059669]",
      };
    case "info":
      return {
        wrapper: "group-hover/item:bg-[#0284c7]/15 group-hover/item:ring-[#0284c7]/30",
        icon: "group-hover/item:text-[#0284c7]",
      };
    case "warning":
      return {
        wrapper: "group-hover/item:bg-[#d97706]/15 group-hover/item:ring-[#d97706]/30",
        icon: "group-hover/item:text-[#d97706]",
      };
    case "danger":
      return {
        wrapper: "group-hover/item:bg-[#dc2626]/15 group-hover/item:ring-[#dc2626]/30",
        icon: "group-hover/item:text-[#dc2626]",
      };
    case "primary":
      return {
        wrapper: "group-hover/item:bg-[#0b162c]/15 dark:group-hover/item:bg-[#d4af37]/20 group-hover/item:ring-[#0b162c]/30 dark:group-hover/item:ring-[#d4af37]/40",
        icon: "group-hover/item:text-[#0b162c] dark:group-hover/item:text-[#d4af37]",
      };
    case "violet":
      return {
        wrapper: "group-hover/item:bg-[#7c3aed]/15 group-hover/item:ring-[#7c3aed]/30",
        icon: "group-hover/item:text-[#7c3aed]",
      };
    case "pink":
      return {
        wrapper: "group-hover/item:bg-[#e11d48]/15 group-hover/item:ring-[#e11d48]/30",
        icon: "group-hover/item:text-[#e11d48]",
      };
    case "orange":
      return {
        wrapper: "group-hover/item:bg-[#ea580c]/15 group-hover/item:ring-[#ea580c]/30",
        icon: "group-hover/item:text-[#ea580c]",
      };
    default:
      return {
        wrapper: "group-hover/item:bg-gray-500/15 group-hover/item:ring-gray-500/30",
        icon: "group-hover/item:text-gray-500",
      };
  }
};
