import { lazy, Suspense } from "react";
import SiteHeader from "../components/commonfiles/Header/headerdesktop";
import SiteFooter from "../components/commonfiles/Footer/footerdesktop";
interface ExploreProps {
  isMobile?: boolean;
}
const Desktop = lazy(() => import("./desktop"));
const Mobile = lazy(() => import("./mobile"));
export default function Explore({ isMobile = false }: ExploreProps) {
  if (isMobile) {
    return (
      <div className="flex flex-col w-full bg-white dark:bg-[#0b1b42] min-h-screen relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <SiteHeader isMobile={isMobile} />
        <div className="flex-1 relative flex flex-col w-full">
          <Suspense fallback={<div className="flex-1 flex items-center justify-center text-gray-500">Loading videos...</div>}>
            <Mobile />
          </Suspense>
        </div>
        <SiteFooter isMobile={isMobile} />
      </div>
    );
  }
  return (
    <>
      <SiteHeader />
      <Suspense
        fallback={
          <div className="min-h-screen bg-white dark:bg-[#0b1b42] w-full flex items-center justify-center text-gray-500">
            Loading videos...
          </div>
        }
      >
        <Desktop />
      </Suspense>
      <SiteFooter />
    </>
  );
}
