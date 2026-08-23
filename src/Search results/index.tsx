import Desktop from "./desktop";
import Mobile from "./mobile";
import SiteHeader from "../components/commonfiles/Header/headerdesktop";
import SiteFooter from "../components/commonfiles/Footer/footerdesktop";

export default function SearchResults({ isMobile }: { isMobile?: boolean }) {
  if (isMobile) {
    return (
      <div className="flex flex-col w-full bg-white dark:bg-[#0b1b42] min-h-screen relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <SiteHeader isMobile={isMobile} />
        <div className="flex-1 relative flex flex-col w-full">
          <Mobile />
        </div>
        <SiteFooter isMobile={isMobile} />
      </div>
    );
  }

  return (
    <>
      <SiteHeader />
      <Desktop />
      <SiteFooter />
    </>
  );
}
