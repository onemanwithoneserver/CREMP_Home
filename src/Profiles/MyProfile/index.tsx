import MyProfileDesktop from "./desktop";
import MyProfileMobile from "./mobile";

interface MyProfileProps {
  isMobile: boolean;
  onEditProfile?: () => void;
  onBack?: () => void;
}

export default function MyProfile({ isMobile, onEditProfile, onBack }: MyProfileProps) {
  if (isMobile) {
    return <MyProfileMobile onEditProfile={onEditProfile} onBack={onBack} />;
  }
  return <MyProfileDesktop onEditProfile={onEditProfile} onBack={onBack} />;
}
