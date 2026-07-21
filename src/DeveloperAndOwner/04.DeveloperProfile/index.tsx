import DesktopDeveloperProfile from './DesktopDeveloperProfile'
import MobileDeveloperProfile from './MobileDeveloperProfile'

export default function DeveloperAndOwnerProfile({ isMobile }: { isMobile: boolean }) {
  return isMobile ? <MobileDeveloperProfile /> : <DesktopDeveloperProfile />
}
