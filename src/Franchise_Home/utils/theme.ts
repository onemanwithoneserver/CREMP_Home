export const getBadgeStyles = (intent?: string) => {
    switch (intent) {
        case 'success': return 'bg-success/10 text-success border border-success/20 shadow-sm';
        case 'info': return 'bg-info/10 text-info border border-info/20 shadow-sm';
        case 'warning': return 'bg-warning/10 text-warning border border-warning/20 shadow-sm';
        case 'danger': return 'bg-error/10 text-error border border-error/20 shadow-sm';
        case 'primary': return 'bg-primary/10 text-primary border border-primary/20 dark:bg-accent/10 dark:text-accent dark:border-accent/30 shadow-[0_0_10px_rgba(var(--color-accent),0.1)]';
        default: return 'bg-gray-100 text-gray-600 border border-gray-200 dark:bg-surface-alt dark:text-gray-400 dark:border-border shadow-sm';
    }
};

export const getIconStyles = (intent?: string) => {
    switch (intent) {
        case 'success': return 'text-success drop-shadow-sm';
        case 'info': return 'text-info drop-shadow-sm';
        case 'warning': return 'text-warning drop-shadow-sm';
        case 'danger': return 'text-error drop-shadow-sm';
        case 'primary': return 'text-primary dark:text-accent drop-shadow-sm';
        default: return 'text-gray-500 dark:text-gray-400';
    }
};

export const getIconContainerStyles = (intent?: string) => {
    switch (intent) {
        case 'success': return 'bg-gradient-to-br from-[#10B981] to-[#047857] text-white shadow-elevation-2 shadow-[#10B981]/40 border-none';
        case 'info': return 'bg-gradient-to-br from-[#0EA5E9] to-[#0369A1] text-white shadow-elevation-2 shadow-[#0EA5E9]/40 border-none';
        case 'warning': return 'bg-gradient-to-br from-[#FBBF24] to-[#D97706] text-white shadow-elevation-2 shadow-[#FBBF24]/40 border-none';
        case 'danger': return 'bg-gradient-to-br from-[#EF4444] to-[#B91C1C] text-white shadow-elevation-2 shadow-[#EF4444]/40 border-none';
        case 'primary': return 'bg-gradient-to-br from-[#BF953F] to-[#B38728] text-white shadow-glow-accent border-none';
        case 'violet': return 'bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] text-white shadow-elevation-2 shadow-[#8B5CF6]/40 border-none';
        case 'pink': return 'bg-gradient-to-br from-[#EC4899] to-[#BE185D] text-white shadow-elevation-2 shadow-[#EC4899]/40 border-none';
        default: return 'bg-gradient-to-br from-gray-600 to-gray-800 text-white shadow-elevation-2 shadow-gray-700/40 border-none';
    }
};

export const getBorderStyles = (intent?: string) => {
    switch (intent) {
        case 'success': return 'border-success/30 hover:border-success/60 hover:shadow-[0_0_15px_rgba(22,163,74,0.2)] transition-all duration-300';
        case 'info': return 'border-info/30 hover:border-info/60 hover:shadow-[0_0_15px_rgba(29,78,216,0.2)] transition-all duration-300';
        case 'warning': return 'border-warning/30 hover:border-warning/60 hover:shadow-[0_0_15px_rgba(199,154,23,0.2)] transition-all duration-300';
        case 'danger': return 'border-error/30 hover:border-error/60 hover:shadow-[0_0_15px_rgba(220,38,38,0.2)] transition-all duration-300';
        case 'primary': return 'border-primary/30 hover:border-primary/60 hover:shadow-glow-primary dark:border-accent/30 dark:hover:border-accent/60 dark:hover:shadow-glow-accent transition-all duration-300';
        default: return 'border-border hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300';
    }
};

export const getCardStyles = (intent?: string) => {
    switch (intent) {
        case 'success': return 'bg-success/5 border-success/30 hover:border-success/50 hover:bg-success/10 text-success hover:shadow-[0_4px_20px_rgba(22,163,74,0.15)] transition-all duration-300';
        case 'info': return 'bg-info/5 border-info/30 hover:border-info/50 hover:bg-info/10 text-info hover:shadow-[0_4px_20px_rgba(29,78,216,0.15)] transition-all duration-300';
        case 'warning': return 'bg-warning/5 border-warning/30 hover:border-warning/50 hover:bg-warning/10 text-warning hover:shadow-[0_4px_20px_rgba(199,154,23,0.15)] transition-all duration-300';
        case 'danger': return 'bg-error/5 border-error/30 hover:border-error/50 hover:bg-error/10 text-error hover:shadow-[0_4px_20px_rgba(220,38,38,0.15)] transition-all duration-300';
        case 'primary': return 'bg-primary/5 border-primary/20 hover:border-primary/40 hover:bg-primary/10 dark:bg-accent/5 dark:border-accent/30 dark:hover:border-accent/50 dark:hover:bg-accent/10 text-primary dark:text-accent hover:shadow-glow-primary dark:hover:shadow-glow-accent transition-all duration-300';
        default: return 'bg-white dark:bg-surface border-border border-gray-300 dark:border-gray-500 text-gray-900 dark:text-white hover:shadow-elevation-3 transition-all duration-300';
    }
};

export const getTextStyles = (intent?: string) => {
    switch (intent) {
        case 'success': return 'text-success font-semibold';
        case 'info': return 'text-info font-semibold';
        case 'warning': return 'text-warning font-semibold';
        case 'danger': return 'text-error font-semibold';
        case 'primary': return 'text-primary dark:text-accent font-semibold';
        default: return 'text-gray-900 dark:text-white';
    }
};

export const getSolidBgStyles = (intent?: string) => {
    switch (intent) {
        case 'success': return 'bg-success shadow-lg shadow-success/30';
        case 'info': return 'bg-info shadow-lg shadow-info/30';
        case 'warning': return 'bg-warning shadow-lg shadow-warning/30';
        case 'danger': return 'bg-error shadow-lg shadow-error/30';
        case 'primary': return 'bg-primary dark:bg-accent shadow-glow-primary dark:shadow-glow-accent';
        default: return 'bg-gray-500 shadow-elevation-2';
    }
};
