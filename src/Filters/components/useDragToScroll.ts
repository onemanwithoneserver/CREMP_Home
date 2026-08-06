import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";

const DRAG_THRESHOLD_PX = 6;

export function useDragToScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [isDragging, setIsDragging] = useState(false);
  const drag = useRef({ startX: 0, startScrollLeft: 0, moved: false });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX) && el.scrollWidth > el.clientWidth) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    const onClickCapture = (e: MouseEvent) => {
      if (drag.current.moved) {
        e.stopPropagation();
        e.preventDefault();
        drag.current.moved = false;
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("click", onClickCapture, true);
    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("click", onClickCapture, true);
    };
  }, []);

  useEffect(() => {
    if (!isDragging) return;

    const onPointerMove = (e: PointerEvent) => {
      const el = ref.current;
      if (!el) return;
      const dx = e.clientX - drag.current.startX;
      if (Math.abs(dx) > DRAG_THRESHOLD_PX) drag.current.moved = true;
      el.scrollLeft = drag.current.startScrollLeft - dx;
    };

    const onPointerUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
    };
  }, [isDragging]);

  const onPointerDown = (e: ReactPointerEvent<T>) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse" || e.button !== 0) return;
    drag.current = { startX: e.clientX, startScrollLeft: el.scrollLeft, moved: false };
    setIsDragging(true);
  };

  return {
    ref,
    isDragging,
    onPointerDown,
  };
}
