import { useEffect, useState, useRef } from 'react'

interface AnimatedCounterOptions {
  end: number
  duration?: number
  startOnMount?: boolean
}

export function useAnimatedCounter({ end, duration = 2000, startOnMount = false }: AnimatedCounterOptions) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const rafRef = useRef<number>(0)

  const start = () => {
    if (hasStarted) return
    setHasStarted(true)
  }

  useEffect(() => {
    if (startOnMount) {
      setHasStarted(true)
    }
  }, [startOnMount])

  useEffect(() => {
    if (!hasStarted) return

    let startTime: number | null = null

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(rafRef.current)
    }
  }, [hasStarted, end, duration])

  return { count, start, hasStarted }
}
