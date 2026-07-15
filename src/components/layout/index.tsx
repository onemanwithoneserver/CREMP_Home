import { forwardRef, type ElementType, type HTMLAttributes, type ReactNode } from 'react'
import { AnimatePresence, motion, type HTMLMotionProps } from 'framer-motion'

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  className?: string
  as?: ElementType
}

export const Container = forwardRef<HTMLElement, ContainerProps>(
  ({ children, className = '', as: Tag = 'div', ...props }, ref) => {
    return (
      <Tag ref={ref} className={`max-w-[1200px] mx-auto px-4 sm:px-6 ${className}`} {...props}>
        {children}
      </Tag>
    )
  }
)

Container.displayName = 'Container'

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  cols?: 1 | 2 | 3 | 4 | 5 | 6
  gap?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const gridColStyles = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  5: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
  6: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6',
}

const gridGapStyles = {
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
  xl: 'gap-12',
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ children, cols = 2, gap = 'md', className = '', ...props }, ref) => {
    return (
      <div ref={ref} className={`grid ${gridColStyles[cols]} ${gridGapStyles[gap]} ${className}`} {...props}>
        {children}
      </div>
    )
  }
)

Grid.displayName = 'Grid'

export interface PageTransitionProps extends HTMLMotionProps<"div"> {
  children: ReactNode
  className?: string
  motionKey: string | number
}

export const PageTransition = forwardRef<HTMLDivElement, PageTransitionProps>(
  ({ children, className = '', motionKey, ...props }, ref) => {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          ref={ref}
          key={motionKey}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className={className}
          {...props}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    )
  }
)

PageTransition.displayName = 'PageTransition'

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  className?: string
  background?: 'default' | 'alt' | 'primary' | 'mesh'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const sectionBgStyles = {
  default: 'bg-cremp-background',
  alt: 'bg-cremp-surface-alt',
  primary: 'gradient-hero text-cremp-text-inverse',
  mesh: 'gradient-mesh',
}

const sectionPaddingStyles = {
  none: 'py-0',
  sm: 'py-12',
  md: 'py-16 md:py-20',
  lg: 'py-20 md:py-28',
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className = '', background = 'default', padding = 'md', ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={`relative w-full overflow-hidden ${sectionBgStyles[background]} ${sectionPaddingStyles[padding]} ${className}`}
        {...props}
      >
        {children}
      </section>
    )
  }
)

Section.displayName = 'Section'

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  direction?: 'vertical' | 'horizontal'
  align?: 'start' | 'center' | 'end' | 'stretch'
  justify?: 'start' | 'center' | 'end' | 'between' | 'around'
  className?: string
}

const stackGapStyles = {
  none: 'gap-0',
  xs: 'gap-1',
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8',
}

const stackAlignStyles = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
}

const stackJustifyStyles = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ children, gap = 'md', direction = 'vertical', align = 'stretch', justify = 'start', className = '', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`flex ${direction === 'horizontal' ? 'flex-row' : 'flex-col'} ${stackGapStyles[gap]} ${stackAlignStyles[align]} ${stackJustifyStyles[justify]} ${className}`}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Stack.displayName = 'Stack'