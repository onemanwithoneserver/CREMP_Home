import Desktop from "./01_headerDesktop";
import Mobile from "./01_headerMobile";

export default function header({ isMobile }: { isMobile: boolean }) {
  return isMobile ? <Mobile /> : <Desktop />;
}
