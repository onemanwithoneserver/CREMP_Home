import { lazy, Suspense } from "react";
import SiteHeader from "../components/commonfiles/Header/headerdesktop";
import SiteFooter from "../components/commonfiles/Footer/footerdesktop";

interface VideoSearchProps {
  isMobile?: boolean;
}

const Desktop = lazy(() => import("./desktop"));
const Mobile = lazy(() => import("./mobile"));

export default function VideoSearch({ isMobile = false }: VideoSearchProps) {
  if (isMobile) {
    return (
      <div className="flex flex-col h-[100dvh]">
        <SiteHeader isMobile={isMobile} />
        <div className="flex-1 overflow-y-auto overflow-x-hidden relative flex flex-col scrollbar-hide">
          <Suspense fallback={<div className="flex-1 flex items-center justify-center text-gray-500">Loading videos...</div>}>
            <Mobile />
          </Suspense>
          <SiteFooter />
        </div>
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
