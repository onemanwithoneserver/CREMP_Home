import FAQDesktop from "./17_FAQDesktop";
import FAQMobile from "./17_FAQMobile";

export default function FAQ({ isMobile }: { isMobile: boolean }) {
  return isMobile ? <FAQMobile /> : <FAQDesktop />;
}
