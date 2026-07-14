import { Command, FileX, Search } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, type ButtonHTMLAttributes } from "react";
import { useAnimatedCounter } from "../hooks/useAnimatedCounter";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface AnimatedCounter_AnimatedCounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}
export function AnimatedCounter({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  className = '',
}: AnimatedCounter_AnimatedCounterProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 })
  const { count, start } = useAnimatedCounter({ end, duration })

  useEffect(() => {
    if (isVisible) start()
  }, [isVisible, start])

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}
type Badge_BadgeVariant = 'default' | 'success' | 'warning' | 'info' | 'accent' | 'error'
interface Badge_BadgeProps {
  children: ReactNode
  variant?: Badge_BadgeVariant
  icon?: ReactNode
  pulse?: boolean
  className?: string
}
const Badge_variantStyles: Record<Badge_BadgeVariant, string> = {
  default: 'bg-cremp-surface-alt text-cremp-text-secondary border-cremp-border',
  success: 'bg-success-light text-success border-success/20',
  warning: 'bg-warning-light text-warning border-warning/20',
  info: 'bg-info-light text-info border-info/20',
  accent: 'bg-[#fdf6e3] text-cremp-accent-dark border-cremp-accent/20',
  error: 'bg-error-light text-error border-error/20',
}
export function Badge({
  children,
  variant = 'default',
  icon,
  pulse = false,
  className = '',
}: Badge_BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide border transition-base ${Badge_variantStyles[variant]} ${className}`}
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
  )
}
type Button_ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Button_ButtonSize = 'sm' | 'md' | 'lg'
interface Button_ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Button_ButtonVariant
  size?: Button_ButtonSize
  icon?: ReactNode
  iconRight?: ReactNode
  loading?: boolean
  fullWidth?: boolean
}
const Button_variantStyles: Record<Button_ButtonVariant, string> = {
  primary:
    'gradient-accent text-cremp-navy font-bold shadow-elevation-2 hover:shadow-glow-accent hover:brightness-110 active:brightness-95',
  secondary:
    'bg-cremp-primary text-white font-bold shadow-elevation-2 hover:bg-cremp-primary-light hover:shadow-glow-primary active:bg-cremp-primary',
  outline:
    'bg-transparent border border-cremp-border text-cremp-text-primary font-semibold hover:bg-cremp-surface-alt hover:border-cremp-text-muted active:bg-cremp-border/30',
  ghost:
    'bg-transparent text-cremp-text-secondary font-semibold hover:bg-cremp-surface-alt hover:text-cremp-text-primary active:bg-cremp-border/30',
}
const Button_sizeStyles: Record<Button_ButtonSize, string> = {
  sm: 'px-4 py-2 text-xs gap-1.5',
  md: 'px-6 py-2.5 text-sm gap-2',
  lg: 'px-8 py-3.5 text-base gap-2.5',
}
export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  loading = false,
  fullWidth = false,
  children,
  className = '',
  disabled,
  ...props
}: Button_ButtonProps) {
  return (
    <button
      className={`relative inline-flex items-center justify-center rounded transition-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cremp-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none ${Button_variantStyles[variant]} ${Button_sizeStyles[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Loading...
        </span>
      ) : (
        <>
          {icon && <span className="flex-shrink-0" aria-hidden="true">{icon}</span>}
          {children}
          {iconRight && <span className="flex-shrink-0" aria-hidden="true">{iconRight}</span>}
        </>
      )}
    </button>
  )
}
type Card_CardVariant = 'default' | 'glass' | 'gradient' | 'outlined'
interface Card_CardProps {
  children: ReactNode
  variant?: Card_CardVariant
  hover?: boolean
  header?: ReactNode
  footer?: ReactNode
  className?: string
  padding?: 'sm' | 'md' | 'lg'
}
const Card_variantStyles: Record<Card_CardVariant, string> = {
  default: 'bg-white border border-cremp-border shadow-elevation-1',
  glass: 'glass',
  gradient: 'gradient-border bg-white shadow-elevation-2',
  outlined: 'bg-transparent border border-cremp-border',
}
const Card_paddingStyles = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}
export function Card({
  children,
  variant = 'default',
  hover = false,
  header,
  footer,
  className = '',
  padding = 'md',
}: Card_CardProps) {
  return (
    <div
      className={`rounded overflow-hidden ${Card_variantStyles[variant]} ${hover ? 'hover-lift cursor-pointer' : ''} ${className}`}
    >
      {header && (
        <div className="px-6 py-4 border-b border-cremp-border/50">{header}</div>
      )}
      <div className={Card_paddingStyles[padding]}>{children}</div>
      {footer && (
        <div className="px-6 py-4 border-t border-cremp-border/50">{footer}</div>
      )}
    </div>
  )
}
interface EmptyState_EmptyStateProps {
  icon?: ReactNode
  title: string
  description?: string
  action?: ReactNode
  className?: string
}
export function EmptyState({
  icon,
  title,
  description,
  action,
  className = '',
}: EmptyState_EmptyStateProps) {
  return (
    <div className={`flex flex-col items-center justify-center py-16 px-6 text-center ${className}`}>
      <div className="w-16 h-16 rounded-full bg-cremp-surface-alt flex items-center justify-center text-cremp-text-muted mb-4">
        {icon || <FileX size={28} strokeWidth={1.5} />}
      </div>
      <h3 className="text-lg font-bold text-cremp-text-primary mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-cremp-text-secondary max-w-sm mb-6">{description}</p>
      )}
      {action && <div>{action}</div>}
    </div>
  )
}
interface FeatureCard_FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  accentColor?: string
  className?: string
}
export function FeatureCard({
  icon,
  title,
  description,
  accentColor = 'text-cremp-primary',
  className = '',
}: FeatureCard_FeatureCardProps) {
  return (
    <div
      className={`group bg-white border border-cremp-border rounded p-6 hover-lift cursor-default ${className}`}
    >
      <div
        className={`w-12 h-12 rounded flex items-center justify-center mb-4 transition-base group-hover:scale-110 ${accentColor} bg-cremp-surface-alt`}
      >
        {icon}
      </div>
      <h3 className="text-base font-bold text-cremp-text-primary mb-2 leading-tight">{title}</h3>
      <p className="text-sm text-cremp-text-secondary leading-relaxed">{description}</p>
    </div>
  )
}
export function LoadingCard({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-white border border-cremp-border rounded p-6 ${className}`} aria-busy="true" aria-label="Loading content">
      <div className="shimmer-bg rounded h-10 w-10 mb-4" />
      <div className="shimmer-bg rounded h-4 w-3/4 mb-3" />
      <div className="shimmer-bg rounded h-3 w-full mb-2" />
      <div className="shimmer-bg rounded h-3 w-5/6 mb-2" />
      <div className="shimmer-bg rounded h-3 w-2/3" />
    </div>
  )
}
export function LoadingHero({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full min-h-[70vh] flex flex-col justify-center px-6 ${className}`} aria-busy="true" aria-label="Loading hero section">
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
  )
}
export function LoadingStats({ count = 4, className = '' }: { count?: number; className?: string }) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${className}`} aria-busy="true" aria-label="Loading statistics">
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
  )
}
export function LoadingTimeline({ count = 3, className = '' }: { count?: number; className?: string }) {
  return (
    <div className={`space-y-6 ${className}`} aria-busy="true" aria-label="Loading timeline">
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
  )
}
interface ProgressBar_ProgressBarProps {
  value: number
  max?: number
  label?: string
  showPercentage?: boolean
  variant?: 'primary' | 'accent' | 'success' | 'info' | 'warning'
  size?: 'sm' | 'md'
  className?: string
  animated?: boolean
}
const ProgressBar_variantColors: Record<string, string> = {
  primary: 'bg-cremp-primary',
  accent: 'gradient-accent',
  success: 'bg-success',
  info: 'bg-info',
  warning: 'bg-warning',
}
export function ProgressBar({
  value,
  max = 100,
  label,
  showPercentage = true,
  variant = 'primary',
  size = 'md',
  className = '',
  animated = true,
}: ProgressBar_ProgressBarProps) {
  const percentage = Math.min(Math.round((value / max) * 100), 100)

  return (
    <div className={className}>
      {(label || showPercentage) && (
        <div className="flex items-center justify-between mb-2">
          {label && <span className="text-xs font-semibold text-cremp-text-secondary">{label}</span>}
          {showPercentage && <span className="text-xs font-bold text-cremp-text-primary">{percentage}%</span>}
        </div>
      )}
      <div
        className={`w-full bg-cremp-surface-alt rounded-full overflow-hidden ${size === 'sm' ? 'h-1.5' : 'h-2.5'}`}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label || 'Progress'}
      >
        <div
          className={`h-full rounded-full ${ProgressBar_variantColors[variant]} ${animated ? 'transition-all duration-1000 ease-out' : ''}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
interface SearchBar_SearchBarProps {
  placeholder?: string
  className?: string
  showShortcut?: boolean
}
export function SearchBar({
  placeholder = 'Search properties, franchises, opportunities...',
  className = '',
  showShortcut = true,
}: SearchBar_SearchBarProps) {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
        <Search
          size={18}
          className="text-cremp-text-muted group-focus-within:text-cremp-primary transition-colors duration-200"
          aria-hidden="true"
        />
      </div>
      <input
        type="search"
        placeholder={placeholder}
        className="w-full pl-11 pr-20 py-3.5 bg-white border border-cremp-border rounded text-sm font-medium text-cremp-text-primary placeholder:text-cremp-text-muted shadow-elevation-1 focus:shadow-elevation-2 focus:border-cremp-primary/40 focus:outline-none transition-base"
        aria-label="Search"
      />
      {showShortcut && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-cremp-surface-alt rounded text-[0.65rem] font-bold text-cremp-text-muted border border-cremp-border/50">
            <Command size={10} aria-hidden="true" />
            K
          </span>
        </div>
      )}
    </div>
  )
}
interface SectionHeader_SectionHeaderProps {
  badge?: string
  badgeVariant?: 'primary' | 'accent' | 'info' | 'success' | 'warning'
  title: ReactNode
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}
const SectionHeader_badgeStyles: Record<string, string> = {
  primary: 'bg-cremp-primary/10 text-cremp-primary',
  accent: 'bg-[#fdf6e3] text-cremp-accent-dark',
  info: 'bg-info-light text-info',
  success: 'bg-success-light text-success',
  warning: 'bg-warning-light text-warning',
}
export function SectionHeader({
  badge,
  badgeVariant = 'primary',
  title,
  subtitle,
  align = 'left',
  className = '',
}: SectionHeader_SectionHeaderProps) {
  return (
    <div className={`mb-10 ${align === 'center' ? 'text-center' : ''} ${className}`}>
      {badge && (
        <span
          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 ${SectionHeader_badgeStyles[badgeVariant]}`}
        >
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold text-cremp-text-primary tracking-tight mb-3 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base font-medium text-cremp-text-secondary leading-relaxed ${align === 'center' ? 'max-w-xl mx-auto' : 'max-w-lg'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
interface StatCard_StatCardProps {
  icon: ReactNode
  label: string
  value: number
  prefix?: string
  suffix?: string
  trend?: { value: number; positive: boolean }
  className?: string
}
export function StatCard({
  icon,
  label,
  value,
  prefix = '',
  suffix = '',
  trend,
  className = '',
}: StatCard_StatCardProps) {
  return (
    <div
      className={`bg-white border border-cremp-border rounded p-5 hover-lift group ${className}`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="w-10 h-10 rounded flex items-center justify-center bg-cremp-primary/10 text-cremp-primary transition-base group-hover:bg-cremp-primary group-hover:text-white">
          {icon}
        </div>
        {trend && (
          <span
            className={`inline-flex items-center gap-0.5 text-xs font-bold ${trend.positive ? 'text-success' : 'text-error'}`}
          >
            <span aria-hidden="true">{trend.positive ? '↑' : '↓'}</span>
            {trend.value}%
          </span>
        )}
      </div>
      <div className="text-2xl font-extrabold text-cremp-text-primary tracking-tight mb-1">
        <AnimatedCounter end={value} prefix={prefix} suffix={suffix} />
      </div>
      <span className="text-xs font-semibold text-cremp-text-muted uppercase tracking-wider">{label}</span>
    </div>
  )
}
interface Timeline_TimelineItem {
  icon: ReactNode
  title: string
  description: string
  time: string
  status?: 'completed' | 'active' | 'pending'
}
interface Timeline_TimelineProps {
  items: Timeline_TimelineItem[]
  className?: string
}
const Timeline_statusColors: Record<string, string> = {
  completed: 'bg-success text-white',
  active: 'bg-cremp-primary text-white',
  pending: 'bg-cremp-surface-alt text-cremp-text-muted',
}
const Timeline_lineColors: Record<string, string> = {
  completed: 'bg-success',
  active: 'bg-cremp-primary',
  pending: 'bg-cremp-border',
}
export function Timeline({ items, className = '' }: Timeline_TimelineProps) {
  return (
    <div className={`space-y-0 ${className}`} role="list" aria-label="Timeline">
      {items.map((item, index) => (
        <div key={index} className="flex gap-4 group" role="listitem">
          <div className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${Timeline_statusColors[item.status || 'pending']} transition-base`}
            >
              {item.icon}
            </div>
            {index < items.length - 1 && (
              <div className={`w-0.5 flex-1 my-1 ${Timeline_lineColors[item.status || 'pending']}`} />
            )}
          </div>
          <div className="flex-1 pb-6">
            <div className="flex items-start justify-between gap-2">
              <h4 className="text-sm font-bold text-cremp-text-primary">{item.title}</h4>
              <time className="text-[0.65rem] font-medium text-cremp-text-muted whitespace-nowrap">{item.time}</time>
            </div>
            <p className="text-xs text-cremp-text-secondary mt-1 leading-relaxed">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
