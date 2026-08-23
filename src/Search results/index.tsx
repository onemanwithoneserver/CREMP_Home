import Desktop from "./desktop";
import Mobile from "./mobile";
import SiteHeader from "../components/commonfiles/Header/headerdesktop";
import SiteFooter from "../components/commonfiles/Footer/footerdesktop";

export default function SearchResults({ isMobile }: { isMobile?: boolean }) {
  if (isMobile) {
    return (
      <div className="flex flex-col h-[100dvh]">
        <SiteHeader isMobile={isMobile} />
        <div className="flex-1 overflow-y-auto overflow-x-hidden relative flex flex-col scrollbar-hide">
          <div className="flex-1 relative">
            <Mobile />
          </div>
          <SiteFooter />
        </div>
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
