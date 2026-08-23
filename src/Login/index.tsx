import Desktop from "./desktop";
import Mobile from "./mobile";
export default function Login({ isMobile }: { isMobile?: boolean }) {
  if (isMobile) {
    return <Mobile />;
  }
  return <Desktop />;
}
