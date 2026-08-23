import { useCallback, useEffect, useRef, useState } from "react";
export interface AnimatedCounterOptions {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
  decimals?: number;
  startOnMount?: boolean;
}
export function useAnimatedCounter({
  start = 0,
  end,
  duration = 2000,
  delay = 0,
  decimals = 0,
  startOnMount = false,
}: AnimatedCounterOptions) {
  const [count, setCount] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const rafRef = useRef<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const play = useCallback(() => {
    if (hasStarted) return;
    setHasStarted(true);
  }, [hasStarted]);
  const reset = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHasStarted(false);
    setIsFinished(false);
    setCount(start);
  }, [start]);
  useEffect(() => {
    if (startOnMount) {
      play();
    }
  }, [startOnMount, play]);
  useEffect(() => {
    if (!hasStarted) return;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentCount = start + (end - start) * eased;
      const multiplier = Math.pow(10, decimals);
      setCount(Math.round(currentCount * multiplier) / multiplier);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
        setIsFinished(true);
      }
    };
    if (delay > 0) {
      timeoutRef.current = setTimeout(() => {
        rafRef.current = requestAnimationFrame(animate);
      }, delay);
    } else {
      rafRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [hasStarted, start, end, duration, delay, decimals]);
  return { count, play, reset, hasStarted, isFinished };
}
