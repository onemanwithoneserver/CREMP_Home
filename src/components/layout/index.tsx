import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";

interface Container_ContainerProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'article' | 'main'
}
export function Container({
  children,
  className = '',
  as: Tag = 'div',
}: Container_ContainerProps) {
  return (
    <Tag className={`max-w-[1200px] mx-auto px-4 sm:px-6 ${className}`}>
      {children}
    </Tag>
  )
}
interface Grid_GridProps {
  children: ReactNode
  cols?: 1 | 2 | 3 | 4
  gap?: 'sm' | 'md' | 'lg'
  className?: string
}
const Grid_colStyles = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
}
const Grid_gapStyles = {
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
}
export function Grid({
  children,
  cols = 2,
  gap = 'md',
  className = '',
}: Grid_GridProps) {
  return (
    <div className={`grid ${Grid_colStyles[cols]} ${Grid_gapStyles[gap]} ${className}`}>
      {children}
    </div>
  )
}
interface PageTransition_PageTransitionProps {
  children: ReactNode
  className?: string
}
export function PageTransition({ children, className = '' }: PageTransition_PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
interface Section_SectionProps {
  children: ReactNode
  className?: string
  background?: 'default' | 'alt' | 'primary' | 'mesh'
  padding?: 'sm' | 'md' | 'lg'
  id?: string
}
const Section_bgStyles = {
  default: 'bg-white',
  alt: 'bg-cremp-surface-alt',
  primary: 'gradient-hero text-white',
  mesh: 'gradient-mesh',
}
const Section_paddingStyles = {
  sm: 'py-12',
  md: 'py-16 md:py-20',
  lg: 'py-20 md:py-28',
}
export function Section({
  children,
  className = '',
  background = 'default',
  padding = 'md',
  id,
}: Section_SectionProps) {
  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden ${Section_bgStyles[background]} ${Section_paddingStyles[padding]} ${className}`}
    >
      {children}
    </section>
  )
}
interface Stack_StackProps {
  children: ReactNode
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  direction?: 'vertical' | 'horizontal'
  align?: 'start' | 'center' | 'end' | 'stretch'
  className?: string
}
const Stack_gapStyles = {
  xs: 'gap-1',
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8',
}
const Stack_alignStyles = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
}
export function Stack({
  children,
  gap = 'md',
  direction = 'vertical',
  align = 'stretch',
  className = '',
}: Stack_StackProps) {
  return (
    <div
      className={`flex ${direction === 'horizontal' ? 'flex-row' : 'flex-col'} ${Stack_gapStyles[gap]} ${Stack_alignStyles[align]} ${className}`}
    >
      {children}
    </div>
  )
}
