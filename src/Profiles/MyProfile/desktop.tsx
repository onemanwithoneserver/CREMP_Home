import MyProfileMobile from "./mobile";

interface MyProfileDesktopProps {
  onEditProfile?: () => void;
  onBack?: () => void;
}

export default function MyProfileDesktop({ onEditProfile, onBack }: MyProfileDesktopProps) {
  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-[#050b14] flex justify-center">
      <div className="w-full max-w-md bg-white dark:bg-[#050b14] min-h-screen shadow-[0_0_40px_rgba(0,0,0,0.06)] border-x border-gray-100 dark:border-gray-800">
        <MyProfileMobile onEditProfile={onEditProfile} onBack={onBack} />
      </div>
    </div>
  );
}
