import Desktop from "./desktop";
import Mobile from "./mobile";
import SiteHeader from "../components/commonfiles/SiteHeader";
import SiteFooter from "../components/commonfiles/SiteFooter";

export default function SearchResults({ isMobile }: { isMobile?: boolean }) {
  if (isMobile) {
    return <Mobile />;
  }

  return (
    <>
      <SiteHeader />
      <Desktop />
      <SiteFooter />
    </>
  );
}
