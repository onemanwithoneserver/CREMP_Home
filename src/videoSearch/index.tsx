import { lazy, Suspense } from "react";

interface VideoSearchProps {
  isMobile?: boolean;
}

const Desktop = lazy(() => import("./desktop"));
const Mobile = lazy(() => import("./mobile"));

export default function VideoSearch({ isMobile = false }: VideoSearchProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white dark:bg-[#0b1b42] w-full flex items-center justify-center text-gray-500">
          Loading videos...
        </div>
      }
    >
      {isMobile ? <Mobile /> : <Desktop />}
    </Suspense>
  );
}
