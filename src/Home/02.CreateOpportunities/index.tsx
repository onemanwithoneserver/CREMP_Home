import DesktopCreate from './DesktopCreate'
import MobileCreate from './MobileCreate'

interface CreateProps {
  isMobile: boolean
}

export default function CreateOpportunities({ isMobile }: CreateProps) {
  return isMobile ? <MobileCreate /> : <DesktopCreate />
}
