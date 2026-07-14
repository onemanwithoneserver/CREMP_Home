import { type ReactNode } from 'react'

interface MobileViewportProps {
  children: ReactNode
  isMobile?: boolean
}

export default function MobileViewport({ children, isMobile = false }: MobileViewportProps) {
  if (!isMobile) {
    return (
      <div
        role="main"
        aria-label="Desktop Viewport"
        className="h-full w-full overflow-y-auto scrollbar-hide bg-cremp-navy @container"
      >
        {children}
      </div>
    )
  }

  return (
    <div
      role="region"
      aria-label="Desktop Preview Environment"
      className="flex items-center justify-center h-full overflow-y-auto scrollbar-hide box-border bg-cremp-surface-alt p-[clamp(12px,3vh,28px)]"
    >
      <div
        role="region"
        aria-label="Mobile Device Simulator"
        className="relative shrink-0 overflow-hidden bg-white my-0.5 rounded border border-cremp-border shadow-elevation-4 aspect-[11/19.5] h-[min(92vh,900px)]"
      >
        <div className="h-full w-full overflow-y-auto scrollbar-hide @container">
          {children}
        </div>
      </div>
    </div>
  )
}
