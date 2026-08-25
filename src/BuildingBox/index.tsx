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
const CommercialTerms = lazy(() => import("./02.CommercialTerms"));
const SpaceOverview = lazy(() => import("./03.SpaceOverview"));
const FitOut = lazy(() => import("./04.FitOut"));
const Infrastructure = lazy(() => import("./05.Infrastructure"));
const Media = lazy(() => import("./06.Media"));
const LocationIntelligence = lazy(() => import("./07.LocationIntelligence"));
const Terms = lazy(() => import("./08.Terms"));
const StickyFooter = lazy(() => import("./StickyFooter"));
const SectionLoader = () => (
  <div className="w-full py-16 flex flex-col items-center justify-center gap-5">
    <div className="relative flex items-center justify-center w-12 h-12">
      <div className="absolute inset-0 border-[3px] border-gray-100 rounded-full" />
      <div className="absolute inset-0 border-[3px] border-[#d4af37] rounded-full border-t-transparent animate-spin" />
      <div className="absolute inset-2 border-[3px] border-[#d4af37]/30 rounded-full border-b-transparent animate-[spin_1.5s_linear_infinite_reverse]" />
      <div className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
    </div>
    <div className="flex flex-col items-center gap-1.5">
      <span className="text-[0.68rem] font-semibold tracking-[0.25em] text-[#d4af37] animate-pulse">
        Loading Content
      </span>
      <div className="flex gap-1.5">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/40 animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  </div>
);
export default function BuildingBox({ viewModeProp }: { viewModeProp?: "desktop" | "mobile" }) {
  const { viewMode: paramViewMode } = useParams<{ viewMode: "desktop" | "mobile" }>();
  const viewMode = viewModeProp || paramViewMode || "desktop";
  const [dialogWidth, setDialogWidth] = useState(35);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
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
      const clampedMapWidth = Math.min(Math.max(mapWidthPercent, 65), 70);
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
      <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide pb-20">
        <Hero />
        <div className="flex flex-col gap-0 px-0 py-0">
          <Suspense fallback={<SectionLoader />}>
            <CommercialTerms />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <SpaceOverview />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <FitOut />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <Infrastructure />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <Media />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <LocationIntelligence />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <Terms />
          </Suspense>
        </div>
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
      className="w-full h-full bg-slate-50 text-[#0a1128] overflow-hidden flex relative select-none"
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
            style={{ width: `${dialogWidth}%` }}
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
