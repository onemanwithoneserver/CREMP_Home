import {
  Suspense,
  lazy,
  useState,
  useRef,
  useCallback,
  useEffect,
} from "react";
import { GripVertical } from "lucide-react";
import { useParams } from "react-router-dom";
import Hero from "./01.Hero";
import MapView from "./MapView";
const SpaceOverview = lazy(() => import("./03.SpaceOverview"));
const Listings = lazy(() => import("./03.Listings"));
const Infrastructure = lazy(() => import("./05.Infrastructure"));
const Terms = lazy(() => import("./08.Terms"));
const StickyFooter = lazy(() => import("./StickyFooter"));
const SectionLoader = () => (
  <div
    className="w-full h-32 animate-pulse bg-gray-100/60 rounded-2xl mx-2.5"
    style={{ width: "calc(100% - 1.25rem)" }}
  />
);
export default function AllBuildingBox({ viewModeProp }: { viewModeProp?: "desktop" | "mobile" }) {
  const { viewMode: paramViewMode } = useParams<{ viewMode: "desktop" | "mobile" }>();
  const viewMode = viewModeProp || paramViewMode || "desktop";
  const [dialogWidth, setDialogWidth] = useState(35);
  const [isDragging, setIsDragging] = useState(false);
  const [panelPadding, setPanelPadding] = useState("1rem");
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!panelRef.current) return;
    const updatePadding = () => {
      if (!panelRef.current) return;
      const width = panelRef.current.clientWidth;
      if (width < 450) {
        setPanelPadding("0.875rem");
      } else if (width < 580) {
        setPanelPadding("1rem");
      } else if (width < 720) {
        setPanelPadding("1.25rem");
      } else {
        setPanelPadding("1.5rem");
      }
    };
    updatePadding();
    const observer = new ResizeObserver(updatePadding);
    observer.observe(panelRef.current);
    return () => observer.disconnect();
  }, []);
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const mapWidthPercent =
        ((e.clientX - containerRect.left) / containerRect.width) * 100;
      const clampedMapWidth = Math.min(Math.max(mapWidthPercent, 65), 75);
      setDialogWidth(100 - clampedMapWidth);
    },
    [isDragging],
  );
  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);
  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);
  const content = (
    <div className="flex-1 flex flex-col relative h-full w-full overflow-hidden">
      <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide pb-20 px-0 pt-0 w-full">
        <Hero />
        <div className="border-b border-gray-100 w-full" />
        <Suspense fallback={<SectionLoader />}>
          <Listings />
          <div className="border-b border-gray-100 w-full" />
          <SpaceOverview />
          <div className="border-b border-gray-100 w-full" />
          <Infrastructure />
          <div className="border-b border-gray-100 w-full" />
          <Terms />
        </Suspense>
      </div>
      <div className="absolute bottom-0 left-0 w-full z-50">
        <Suspense fallback={null}>
          <StickyFooter />
        </Suspense>
      </div>
    </div>
  );
  return (
    <div
      ref={containerRef}
      className="w-full h-full bg-white relative font-sans text-gray-900 overflow-hidden flex select-none"
    >
      {viewMode === "desktop" ? (
        <div className="flex w-full h-full">
          <div
            style={{ width: `calc(${100 - dialogWidth}% - 0.375rem)` }}
            className="h-full relative z-10"
          >
            <MapView />
          </div>
          <div
            className="w-1.5 h-full bg-gray-200 hover:bg-blue-400 cursor-col-resize flex flex-col items-center justify-center group relative z-30 transition-colors"
            onMouseDown={handleMouseDown}
          >
            <div className="bg-white border border-gray-300 rounded shadow-sm py-2 opacity-0 group-hover:opacity-100 transition-opacity absolute -right-2 flex items-center justify-center">
              <GripVertical size={14} className="text-gray-500" />
            </div>
            {isDragging && (
              <div className="fixed inset-0 z-50 cursor-col-resize" />
            )}
          </div>
          <div
            ref={panelRef}
            style={
              {
                width: `${dialogWidth}%`,
                "--panel-px": panelPadding,
              } as React.CSSProperties
            }
            className="h-full bg-white shadow-xl relative z-20 border-l border-gray-200"
          >
            {content}
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col max-w-[480px] mx-auto bg-white shadow-xl relative z-20">
          {content}
        </div>
      )}
    </div>
  );
}
