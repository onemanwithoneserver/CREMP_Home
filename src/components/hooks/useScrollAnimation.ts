import { useEffect, useRef, useState, useCallback } from 'react'

interface ScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px', triggerOnce = true } = options
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries
      if (entry.isIntersecting) {
        setIsVisible(true)
      } else if (!triggerOnce) {
        setIsVisible(false)
      }
    },
    [triggerOnce]
  )

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
    })

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [handleIntersection, threshold, rootMargin])

  return { ref, isVisible }
}
