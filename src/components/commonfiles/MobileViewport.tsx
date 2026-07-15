import React, { forwardRef, type ReactNode } from 'react'

export interface MobileViewportProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  isMobile?: boolean
}

const MobileViewport = forwardRef<HTMLDivElement, MobileViewportProps>(
  ({ children, isMobile = false, className = '', ...props }, ref) => {
    if (!isMobile) {
      return (
        <div
          ref={ref}
          role="main"
          aria-label="Desktop Viewport"
          className={`h-full w-full overflow-y-auto scrollbar-hide bg-cremp-background @container transition-base ${className}`}
          {...props}
        >
          {children}
        </div>
      )
    }

    return (
      <div
        role="region"
        aria-label="Mobile Preview Environment"
        className="flex items-center justify-center h-full w-full overflow-y-auto scrollbar-hide box-border bg-cremp-surface-alt p-[clamp(16px,4vh,40px)] transition-base"
      >
        <div
          ref={ref}
          role="region"
          aria-label="Mobile Device Simulator"
          className={`
            relative shrink-0 overflow-hidden bg-cremp-surface
            border-[8px] border-cremp-border shadow-2xl
            rounded-[2.5rem]
            w-full max-w-[390px] aspect-[390/844] h-[min(90vh,844px)]
            transition-all duration-500 ease-out hover:shadow-xl
            ${className}
          `}
          {...props}
        >
          <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-50 pointer-events-none">
            <div className="w-1/3 h-5 bg-cremp-border rounded-b-2xl opacity-80 backdrop-blur-sm"></div>
          </div>

          <div className="h-full w-full overflow-y-auto scrollbar-hide @container bg-cremp-background pt-2">
            {children}
          </div>
        </div>
      </div>
    )
  }
)

MobileViewport.displayName = 'MobileViewport'

export default MobileViewport