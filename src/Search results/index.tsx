import Desktop from "./desktop";
import Mobile from "./mobile";
import SiteHeader from "../components/commonfiles/Header";
import SiteFooter from "../components/commonfiles/Footer";

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
