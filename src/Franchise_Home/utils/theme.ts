export const getBadgeStyles = (intent?: string) => {
  switch (intent) {
    case 'success': return 'bg-success/10 text-success border border-success/20';
    case 'info': return 'bg-info/10 text-info border border-info/20';
    case 'warning': return 'bg-warning/10 text-warning border border-warning/20';
    case 'danger': return 'bg-error/10 text-error border border-error/20';
    case 'primary': return 'bg-primary/10 text-primary border border-primary/20 dark:bg-accent/10 dark:text-accent dark:border-accent/20';
    default: return 'bg-gray-100 text-gray-600 border border-gray-200 dark:bg-surface-alt dark:text-gray-400 dark:border-border';
  }
};

export const getIconStyles = (intent?: string) => {
  switch (intent) {
    case 'success': return 'text-success';
    case 'info': return 'text-info';
    case 'warning': return 'text-warning';
    case 'danger': return 'text-error';
    case 'primary': return 'text-primary dark:text-accent';
    default: return 'text-gray-500 dark:text-gray-400';
  }
};

export const getIconContainerStyles = (intent?: string) => {
  switch (intent) {
    case 'success': return 'bg-success/10 text-success';
    case 'info': return 'bg-info/10 text-info';
    case 'warning': return 'bg-warning/10 text-warning';
    case 'danger': return 'bg-error/10 text-error';
    case 'primary': return 'bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent';
    default: return 'bg-gray-100 text-gray-500 dark:bg-surface-alt dark:text-gray-400';
  }
};

export const getBorderStyles = (intent?: string) => {
  switch (intent) {
    case 'success': return 'border-success/30 hover:border-success/50';
    case 'info': return 'border-info/30 hover:border-info/50';
    case 'warning': return 'border-warning/30 hover:border-warning/50';
    case 'danger': return 'border-error/30 hover:border-error/50';
    case 'primary': return 'border-primary/20 hover:border-primary/40 dark:border-accent/20 dark:hover:border-accent/40';
    default: return 'border-border hover:border-gray-300 dark:hover:border-gray-600';
  }
};

export const getCardStyles = (intent?: string) => {
  switch (intent) {
    case 'success': return 'bg-success/5 border-success/30 hover:border-success/50 text-success';
    case 'info': return 'bg-info/5 border-info/30 hover:border-info/50 text-info';
    case 'warning': return 'bg-warning/5 border-warning/30 hover:border-warning/50 text-warning';
    case 'danger': return 'bg-error/5 border-error/30 hover:border-error/50 text-error';
    case 'primary': return 'bg-primary/5 border-primary/20 hover:border-primary/40 dark:bg-accent/5 dark:border-accent/20 dark:hover:border-accent/40 text-primary dark:text-accent';
    default: return 'bg-white dark:bg-surface border-border hover:border-gray-300 dark:hover:border-gray-600 text-gray-900 dark:text-white';
  }
};

export const getTextStyles = (intent?: string) => {
  switch (intent) {
    case 'success': return 'text-success';
    case 'info': return 'text-info';
    case 'warning': return 'text-warning';
    case 'danger': return 'text-error';
    case 'primary': return 'text-primary dark:text-accent';
    default: return 'text-gray-900 dark:text-white';
  }
};

export const getSolidBgStyles = (intent?: string) => {
  switch (intent) {
    case 'success': return 'bg-success';
    case 'info': return 'bg-info';
    case 'warning': return 'bg-warning';
    case 'danger': return 'bg-error';
    case 'primary': return 'bg-primary dark:bg-accent';
    default: return 'bg-gray-500';
  }
};
