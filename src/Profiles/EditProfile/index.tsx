import EditProfileDesktop from "./desktop";
import EditProfileMobile from "./mobile";

interface EditProfileProps {
  isMobile: boolean;
  onBack?: () => void;
  onSave?: () => void;
}

export default function EditProfile({ isMobile, onBack, onSave }: EditProfileProps) {
  if (isMobile) {
    return <EditProfileMobile onBack={onBack} onSave={onSave} />;
  }
  return <EditProfileDesktop onBack={onBack} onSave={onSave} />;
}
