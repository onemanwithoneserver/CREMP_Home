import { useEffect, useRef, useState, type PointerEvent } from "react";

const DRAG_THRESHOLD_PX = 6;

/**
 * Adds desktop click-and-drag scrolling and mouse-wheel-to-horizontal scrolling
 * to a horizontally overflowing element, while leaving native touch/trackpad
 * scrolling completely untouched (only `pointerType === "mouse"` triggers drag).
 */
export function useDragToScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [isDragging, setIsDragging] = useState(false);
  const drag = useRef({ startX: 0, startScrollLeft: 0, moved: false });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Native wheel listener (not React's onWheel) so preventDefault works reliably,
    // since React attaches synthetic wheel handlers as passive by default.
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX) && el.scrollWidth > el.clientWidth) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    // Swallow the click a chip button would otherwise receive right after a real
    // drag (mousedown -> move -> mouseup still fires a "click" on the target).
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

  const onPointerDown = (e: PointerEvent<T>) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse" || e.button !== 0) return;
    drag.current = { startX: e.clientX, startScrollLeft: el.scrollLeft, moved: false };
    setIsDragging(true);
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: PointerEvent<T>) => {
    const el = ref.current;
    if (!el || !isDragging) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > DRAG_THRESHOLD_PX) drag.current.moved = true;
    el.scrollLeft = drag.current.startScrollLeft - dx;
  };

  const endDrag = (e: PointerEvent<T>) => {
    const el = ref.current;
    if (el?.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
    setIsDragging(false);
  };

  return {
    ref,
    isDragging,
    onPointerDown,
    onPointerMove,
    onPointerUp: endDrag,
    onPointerCancel: endDrag,
    onPointerLeave: endDrag,
  };
}
