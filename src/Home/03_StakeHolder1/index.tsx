import { lazy, Suspense } from "react";

const Desktop = lazy(() => import("./03_StakeHolder1Desktop"));
const Mobile = lazy(() => import("./03_StakeHolder1Mobile"));

export default function StakeHolder1({ isMobile }: { isMobile: boolean }) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen w-full bg-gray-50 dark:bg-[#0b1b42]" />
      }
    >
      {isMobile ? <Mobile /> : <Desktop />}
    </Suspense>
  );
}
