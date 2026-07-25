import React, { forwardRef, type ReactNode, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export interface MobileViewportProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  isMobile?: boolean;
}

const MobileViewport = forwardRef<HTMLDivElement, MobileViewportProps>(
  ({ children, isMobile = false, className = "", ...props }, forwardedRef) => {
    const location = useLocation();
    
    // Create an internal ref if one wasn't provided
    const internalRef = useRef<HTMLDivElement>(null);
    const setRef = (node: HTMLDivElement) => {
      internalRef.current = node;
      if (typeof forwardedRef === 'function') {
        forwardedRef(node);
      } else if (forwardedRef) {
        forwardedRef.current = node;
      }
    };
    
    // Also create a ref for the mobile inner scroll container
    const mobileInnerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (internalRef.current) {
        internalRef.current.scrollTo(0, 0);
      }
      if (mobileInnerRef.current) {
        mobileInnerRef.current.scrollTo(0, 0);
      }
    }, [location.pathname]);

    if (!isMobile) {
      return (
        <div
          ref={setRef}
          role="main"
          aria-label="Desktop Viewport"
          className={`h-full w-full overflow-y-auto scrollbar-hide bg-cremp-background @container transition-base ${className}`}
          {...props}
        >
          {children}
        </div>
      );
    }

    return (
      <div
        role="region"
        aria-label="Mobile Preview Environment"
        className="flex items-center justify-center h-full w-full overflow-y-auto scrollbar-hide box-border bg-cremp-surface-alt md:p-[clamp(16px,4vh,40px)] p-0 transition-base"
      >
        <div
          ref={setRef}
          role="region"
          aria-label="Mobile Device Simulator"
          className={`
            relative shrink-0 overflow-hidden bg-cremp-surface
            md:shadow-2xl transform-gpu translate-x-0 translate-y-0
            w-full md:max-w-[390px] md:aspect-[390/844] h-full md:h-[min(90vh,844px)]
            transition-all duration-500 ease-out md:hover:shadow-xl
            ${className}
          `}
          {...props}
        >
          <div ref={mobileInnerRef} className="h-full w-full overflow-y-auto scrollbar-hide @container bg-cremp-background md:pt-2">
            {children}
          </div>
        </div>
      </div>
    );
  },
);

MobileViewport.displayName = "MobileViewport";

export default MobileViewport;
