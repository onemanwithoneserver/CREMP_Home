import { Command, FileX, Search } from "lucide-react";
import React, {
    forwardRef,
    useEffect,
    type ButtonHTMLAttributes,
    type HTMLAttributes,
    type ReactNode,
} from "react";
import { useAnimatedCounter } from "../hooks/useAnimatedCounter";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export interface AnimatedCounterProps extends HTMLAttributes<HTMLSpanElement> {
    end: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
}

export const AnimatedCounter = forwardRef<
    HTMLSpanElement,
    AnimatedCounterProps
>(
    (
        {
            end,
            duration = 2000,
            prefix = "",
            suffix = "",
            className = "",
            ...props
        },
        ref,
    ) => {
        const { ref: scrollRef, isVisible } = useScrollAnimation({
            threshold: 0.3,
        });
        const { count, play } = useAnimatedCounter({ end, duration });

        useEffect(() => {
            if (isVisible) play();
        }, [isVisible, play]);

        return (
            <span
                ref={(node) => {
                    if (typeof ref === "function") ref(node);
                    else if (ref) ref.current = node;
                    (
                        scrollRef as React.MutableRefObject<HTMLSpanElement | null>
                    ).current = node;
                }}
                className={className}
                {...props}
            >
                {prefix}
                {count.toLocaleString()}
                {suffix}
            </span>
        );
    },
);
AnimatedCounter.displayName = "AnimatedCounter";

export type BadgeVariant =
    "default" | "success" | "warning" | "info" | "accent" | "error";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    children: ReactNode;
    variant?: BadgeVariant;
    icon?: ReactNode;
    pulse?: boolean;
}

const badgeVariantStyles: Record<BadgeVariant, string> = {
    default: "bg-cremp-surface-alt text-cremp-text-secondary border-cremp-border",
    success: "bg-success-light text-success border-success/20",
    warning: "bg-warning-light text-warning border-warning/20",
    info: "bg-info-light text-info border-info/20",
    accent: "bg-[#fdf6e3] text-cremp-accent-dark border-cremp-accent/20",
    error: "bg-error-light text-error border-error/20",
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
    (
        {
            children,
            variant = "default",
            icon,
            pulse = false,
            className = "",
            ...props
        },
        ref,
    ) => {
        return (
            <span
                ref={ref}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide border transition-base ${badgeVariantStyles[variant]} ${className}`}
                {...props}
            >
                {pulse && (
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-current" />
                    </span>
                )}
                {icon && <span className="flex-shrink-0">{icon}</span>}
                {children}
            </span>
        );
    },
);
Badge.displayName = "Badge";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    icon?: ReactNode;
    iconRight?: ReactNode;
    loading?: boolean;
    fullWidth?: boolean;
}

const buttonVariantStyles: Record<ButtonVariant, string> = {
    primary:
        "gradient-accent text-cremp-navy font-bold shadow-elevation-2 hover:shadow-glow-accent hover:brightness-110 active:brightness-95",
    secondary:
        "bg-cremp-primary text-white font-bold shadow-elevation-2 hover:bg-cremp-primary-light hover:shadow-glow-primary active:bg-cremp-primary",
    outline:
        "bg-transparent border border-cremp-border text-cremp-text-primary font-semibold hover:bg-cremp-surface-alt hover:border-cremp-text-muted active:bg-cremp-border/30",
    ghost:
        "bg-transparent text-cremp-text-secondary font-semibold hover:bg-cremp-surface-alt hover:text-cremp-text-primary active:bg-cremp-border/30",
};

const buttonSizeStyles: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-2.5 text-sm gap-2",
    lg: "px-8 py-3.5 text-base gap-2.5",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = "primary",
            size = "md",
            icon,
            iconRight,
            loading = false,
            fullWidth = false,
            children,
            className = "",
            disabled,
            ...props
        },
        ref,
    ) => {
        return (
            <button
                ref={ref}
                className={`relative inline-flex items-center justify-center rounded transition-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cremp-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none ${buttonVariantStyles[variant]} ${buttonSizeStyles[size]} ${fullWidth ? "w-full" : ""} ${className}`}
                disabled={disabled || loading}
                {...props}
            >
                {loading ? (
                    <span className="flex items-center gap-2">
                        <svg
                            className="animate-spin h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>
                        Loading...
                    </span>
                ) : (
                    <>
                        {icon && (
                            <span className="flex-shrink-0" aria-hidden="true">
                                {icon}
                            </span>
                        )}
                        {children}
                        {iconRight && (
                            <span className="flex-shrink-0" aria-hidden="true">
                                {iconRight}
                            </span>
                        )}
                    </>
                )}
            </button>
        );
    },
);
Button.displayName = "Button";

export type CardVariant = "default" | "glass" | "gradient" | "outlined";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: CardVariant;
    hover?: boolean;
    header?: ReactNode;
    footer?: ReactNode;
    padding?: "sm" | "md" | "lg";
}

const cardVariantStyles: Record<CardVariant, string> = {
    default: "bg-white border border-cremp-border shadow-elevation-1",
    glass: "glass",
    gradient: "gradient-border bg-white shadow-elevation-2",
    outlined: "bg-transparent border border-cremp-border",
};

const cardPaddingStyles = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
    (
        {
            children,
            variant = "default",
            hover = false,
            header,
            footer,
            className = "",
            padding = "md",
            ...props
        },
        ref,
    ) => {
        return (
            <div
                ref={ref}
                className={`rounded overflow-hidden ${cardVariantStyles[variant]} ${hover ? "hover-lift cursor-pointer" : ""} ${className}`}
                {...props}
            >
                {header && (
                    <div className="px-6 py-4 border-b border-cremp-border/50">
                        {header}
                    </div>
                )}
                <div className={cardPaddingStyles[padding]}>{children}</div>
                {footer && (
                    <div className="px-6 py-4 border-t border-cremp-border/50">
                        {footer}
                    </div>
                )}
            </div>
        );
    },
);
Card.displayName = "Card";

export interface EmptyStateProps extends HTMLAttributes<HTMLDivElement> {
    icon?: ReactNode;
    title: string;
    description?: string;
    action?: ReactNode;
}

export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
    ({ icon, title, description, action, className = "", ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={`flex flex-col items-center justify-center py-16 px-6 text-center ${className}`}
                {...props}
            >
                <div className="w-16 h-16 rounded-full bg-cremp-surface-alt flex items-center justify-center text-cremp-text-muted mb-4">
                    {icon || <FileX size={28} strokeWidth={1.5} />}
                </div>
                <h3 className="text-lg font-bold text-cremp-text-primary mb-2">
                    {title}
                </h3>
                {description && (
                    <p className="text-sm text-cremp-text-secondary max-w-sm mb-6">
                        {description}
                    </p>
                )}
                {action && <div>{action}</div>}
            </div>
        );
    },
);
EmptyState.displayName = "EmptyState";

export interface FeatureCardProps extends HTMLAttributes<HTMLDivElement> {
    icon: ReactNode;
    title: string;
    description: string;
    accentColor?: string;
}

export const FeatureCard = forwardRef<HTMLDivElement, FeatureCardProps>(
    (
        {
            icon,
            title,
            description,
            accentColor = "text-cremp-primary",
            className = "",
            ...props
        },
        ref,
    ) => {
        return (
            <div
                ref={ref}
                className={`group bg-white border border-cremp-border rounded p-6 hover-lift cursor-default ${className}`}
                {...props}
            >
                <div
                    className={`w-12 h-12 rounded flex items-center justify-center mb-4 transition-base group-hover:scale-110 ${accentColor} bg-cremp-surface-alt`}
                >
                    {icon}
                </div>
                <h3 className="text-base font-bold text-cremp-text-primary mb-2 leading-tight">
                    {title}
                </h3>
                <p className="text-sm text-cremp-text-secondary leading-relaxed">
                    {description}
                </p>
            </div>
        );
    },
);
FeatureCard.displayName = "FeatureCard";

export const LoadingCard = forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
    <div
        ref={ref}
        className={`bg-white border border-cremp-border rounded p-6 ${className}`}
        aria-busy="true"
        aria-label="Loading content"
        {...props}
    >
        <div className="shimmer-bg rounded h-10 w-10 mb-4" />
        <div className="shimmer-bg rounded h-4 w-3/4 mb-3" />
        <div className="shimmer-bg rounded h-3 w-full mb-2" />
        <div className="shimmer-bg rounded h-3 w-5/6 mb-2" />
        <div className="shimmer-bg rounded h-3 w-2/3" />
    </div>
));
LoadingCard.displayName = "LoadingCard";

export const LoadingHero = forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
    <div
        ref={ref}
        className={`w-full min-h-[70vh] flex flex-col justify-center px-6 ${className}`}
        aria-busy="true"
        aria-label="Loading hero section"
        {...props}
    >
        <div className="max-w-[1200px] mx-auto w-full">
            <div className="shimmer-bg rounded-full h-6 w-64 mb-8" />
            <div className="shimmer-bg rounded h-12 w-[500px] max-w-full mb-4" />
            <div className="shimmer-bg rounded h-12 w-[400px] max-w-full mb-4" />
            <div className="shimmer-bg rounded h-12 w-[300px] max-w-full mb-8" />
            <div className="shimmer-bg rounded h-4 w-[450px] max-w-full mb-3" />
            <div className="shimmer-bg rounded h-4 w-[350px] max-w-full mb-10" />
            <div className="flex gap-4">
                <div className="shimmer-bg rounded h-12 w-48" />
                <div className="shimmer-bg rounded h-12 w-48" />
            </div>
        </div>
    </div>
));
LoadingHero.displayName = "LoadingHero";

export const LoadingStats = forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement> & { count?: number }
>(({ count = 4, className = "", ...props }, ref) => (
    <div
        ref={ref}
        className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${className}`}
        aria-busy="true"
        aria-label="Loading statistics"
        {...props}
    >
        {Array.from({ length: count }).map((_, i) => (
            <div key={i} className="bg-white border border-cremp-border rounded p-5">
                <div className="flex items-center justify-between mb-3">
                    <div className="shimmer-bg rounded h-10 w-10" />
                    <div className="shimmer-bg rounded h-4 w-12" />
                </div>
                <div className="shimmer-bg rounded h-7 w-20 mb-2" />
                <div className="shimmer-bg rounded h-3 w-28" />
            </div>
        ))}
    </div>
));
LoadingStats.displayName = "LoadingStats";

export const LoadingTimeline = forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement> & { count?: number }
>(({ count = 3, className = "", ...props }, ref) => (
    <div
        ref={ref}
        className={`space-y-6 ${className}`}
        aria-busy="true"
        aria-label="Loading timeline"
        {...props}
    >
        {Array.from({ length: count }).map((_, i) => (
            <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                    <div className="shimmer-bg rounded-full h-8 w-8 shrink-0" />
                    {i < count - 1 && <div className="shimmer-bg w-0.5 flex-1 mt-2" />}
                </div>
                <div className="flex-1 pb-6">
                    <div className="shimmer-bg rounded h-4 w-32 mb-2" />
                    <div className="shimmer-bg rounded h-3 w-full mb-1" />
                    <div className="shimmer-bg rounded h-3 w-3/4" />
                </div>
            </div>
        ))}
    </div>
));
LoadingTimeline.displayName = "LoadingTimeline";

export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
    value: number;
    max?: number;
    label?: string;
    showPercentage?: boolean;
    variant?: "primary" | "accent" | "success" | "info" | "warning";
    size?: "sm" | "md";
    animated?: boolean;
}

const progressBarVariantColors: Record<string, string> = {
    primary: "bg-cremp-primary",
    accent: "gradient-accent",
    success: "bg-success",
    info: "bg-info",
    warning: "bg-warning",
};

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
    (
        {
            value,
            max = 100,
            label,
            showPercentage = true,
            variant = "primary",
            size = "md",
            className = "",
            animated = true,
            ...props
        },
        ref,
    ) => {
        const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

        return (
            <div ref={ref} className={className} {...props}>
                {(label || showPercentage) && (
                    <div className="flex items-center justify-between mb-2">
                        {label && (
                            <span className="text-xs font-semibold text-cremp-text-secondary">
                                {label}
                            </span>
                        )}
                        {showPercentage && (
                            <span className="text-xs font-bold text-cremp-text-primary">
                                {Math.round(percentage)}%
                            </span>
                        )}
                    </div>
                )}
                <div
                    className={`w-full bg-cremp-surface-alt rounded-full overflow-hidden ${size === "sm" ? "h-1.5" : "h-2.5"}`}
                    role="progressbar"
                    aria-valuenow={value}
                    aria-valuemin={0}
                    aria-valuemax={max}
                    aria-label={label || "Progress"}
                >
                    <div
                        className={`h-full rounded-full ${progressBarVariantColors[variant]} ${animated ? "transition-all duration-1000 ease-out" : ""}`}
                        style={{ width: `${percentage}%` }}
                    />
                </div>
            </div>
        );
    },
);
ProgressBar.displayName = "ProgressBar";

export interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
    showShortcut?: boolean;
    containerClassName?: string;
}

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
    (
        {
            placeholder = "Search properties, franchises, opportunities...",
            className = "",
            containerClassName = "",
            showShortcut = true,
            ...props
        },
        ref,
    ) => {
        return (
            <div className={`relative group ${containerClassName}`}>
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <Search
                        size={18}
                        className="text-cremp-text-muted group-focus-within:text-cremp-primary transition-colors duration-200"
                        aria-hidden="true"
                    />
                </div>
                <input
                    ref={ref}
                    type="search"
                    placeholder={placeholder}
                    className={`w-full pl-11 pr-20 py-3.5 bg-white border border-cremp-border rounded text-sm font-medium text-cremp-text-primary placeholder:text-cremp-text-muted shadow-elevation-1 focus:shadow-elevation-2 focus:border-cremp-primary/40 focus:outline-none transition-base ${className}`}
                    aria-label="Search"
                    {...props}
                />
                {showShortcut && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-cremp-surface-alt rounded text-[0.65rem] font-bold text-cremp-text-muted border border-cremp-border/50">
                            <Command size={10} aria-hidden="true" /> K
                        </span>
                    </div>
                )}
            </div>
        );
    },
);
SearchBar.displayName = "SearchBar";

export interface SectionHeaderProps extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "title"
> {
    badge?: string;
    badgeVariant?: "primary" | "accent" | "info" | "success" | "warning";
    title: ReactNode;
    subtitle?: string;
    align?: "left" | "center";
}

const sectionHeaderBadgeStyles: Record<string, string> = {
    primary: "bg-cremp-primary/10 text-cremp-primary",
    accent: "bg-[#fdf6e3] text-cremp-accent-dark",
    info: "bg-info-light text-info",
    success: "bg-success-light text-success",
    warning: "bg-warning-light text-warning",
};

export const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
    (
        {
            badge,
            badgeVariant = "primary",
            title,
            subtitle,
            align = "left",
            className = "",
            ...props
        },
        ref,
    ) => {
        return (
            <div
                ref={ref}
                className={`mb-10 ${align === "center" ? "text-center" : ""} ${className}`}
                {...props}
            >
                {badge && (
                    <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 ${sectionHeaderBadgeStyles[badgeVariant]}`}
                    >
                        {badge}
                    </span>
                )}
                <h2 className="text-3xl md:text-4xl font-extrabold text-cremp-text-primary tracking-tight mb-3 leading-tight">
                    {title}
                </h2>
                {subtitle && (
                    <p
                        className={`text-base font-medium text-cremp-text-secondary leading-relaxed ${align === "center" ? "max-w-xl mx-auto" : "max-w-lg"}`}
                    >
                        {subtitle}
                    </p>
                )}
            </div>
        );
    },
);
SectionHeader.displayName = "SectionHeader";

export interface StatCardProps extends HTMLAttributes<HTMLDivElement> {
    icon: ReactNode;
    label: string;
    value: number;
    prefix?: string;
    suffix?: string;
    trend?: { value: number; positive: boolean };
}

export const StatCard = forwardRef<HTMLDivElement, StatCardProps>(
    (
        {
            icon,
            label,
            value,
            prefix = "",
            suffix = "",
            trend,
            className = "",
            ...props
        },
        ref,
    ) => {
        return (
            <div
                ref={ref}
                className={`bg-white border border-cremp-border rounded p-5 hover-lift group ${className}`}
                {...props}
            >
                <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded flex items-center justify-center bg-cremp-primary/10 text-cremp-primary transition-base group-hover:bg-cremp-primary group-hover:text-white">
                        {icon}
                    </div>
                    {trend && (
                        <span
                            className={`inline-flex items-center gap-0.5 text-xs font-bold ${trend.positive ? "text-success" : "text-error"}`}
                        >
                            <span aria-hidden="true">{trend.positive ? "↑" : "↓"}</span>
                            {trend.value}%
                        </span>
                    )}
                </div>
                <div className="text-2xl font-extrabold text-cremp-text-primary tracking-tight mb-1">
                    <AnimatedCounter end={value} prefix={prefix} suffix={suffix} />
                </div>
                <span className="text-xs font-semibold text-cremp-text-muted uppercase tracking-wider">
                    {label}
                </span>
            </div>
        );
    },
);
StatCard.displayName = "StatCard";

export interface TimelineItem {
    icon: ReactNode;
    title: string;
    description: string;
    time: string;
    status?: "completed" | "active" | "pending";
}

export interface TimelineProps extends HTMLAttributes<HTMLDivElement> {
    items: TimelineItem[];
}

const timelineStatusColors: Record<string, string> = {
    completed: "bg-success text-white",
    active: "bg-cremp-primary text-white",
    pending: "bg-cremp-surface-alt text-cremp-text-muted",
};

const timelineLineColors: Record<string, string> = {
    completed: "bg-success",
    active: "bg-cremp-primary",
    pending: "bg-cremp-border",
};

export const Timeline = forwardRef<HTMLDivElement, TimelineProps>(
    ({ items, className = "", ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={`space-y-0 ${className}`}
                role="list"
                aria-label="Timeline"
                {...props}
            >
                {items.map((item, index) => (
                    <div key={index} className="flex gap-4 group" role="listitem">
                        <div className="flex flex-col items-center">
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${timelineStatusColors[item.status || "pending"]} transition-base`}
                            >
                                {item.icon}
                            </div>
                            {index < items.length - 1 && (
                                <div
                                    className={`w-0.5 flex-1 my-1 ${timelineLineColors[item.status || "pending"]}`}
                                />
                            )}
                        </div>
                        <div className="flex-1 pb-6">
                            <div className="flex items-start justify-between gap-2">
                                <h4 className="text-sm font-bold text-cremp-text-primary">
                                    {item.title}
                                </h4>
                                <time className="text-[0.65rem] font-medium text-cremp-text-muted whitespace-nowrap">
                                    {item.time}
                                </time>
                            </div>
                            <p className="text-xs text-cremp-text-secondary mt-1 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        );
    },
);
Timeline.displayName = "Timeline";
