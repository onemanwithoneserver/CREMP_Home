export const singleSelectBtn = (isSelected: boolean) =>
  `flex items-center justify-between px-3.5 py-2.5 rounded border text-xs font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cremp-accent/50 ${
    isSelected
      ? "bg-[#0b1b42] border-cremp-accent/50 text-white shadow-glow-accent"
      : "bg-cremp-surface-alt/60 border-cremp-border hover:border-cremp-text-muted/40 hover:bg-cremp-surface text-cremp-text-primary"
  }`;

export const multiSelectBtn = singleSelectBtn;

export const checkBox = (isSelected: boolean) =>
  `w-4 h-4 rounded-sm border flex items-center justify-center transition-colors duration-200 ${
    isSelected ? "bg-cremp-accent border-cremp-accent" : "border-cremp-border bg-cremp-surface"
  }`;
