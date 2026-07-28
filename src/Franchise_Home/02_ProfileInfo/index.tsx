import ProfileInfoDesktop from "./02_ProfileInfoDesktop";
import ProfileInfoMobile from "./02_ProfileInfoMobile";

export default function ProfileInfo({ isMobile }: { isMobile: boolean }) {
  return isMobile ? <ProfileInfoMobile /> : <ProfileInfoDesktop />;
}
