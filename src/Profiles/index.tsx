import EditProfile from "./EditProfile";

interface ProfilesProps {
  isMobile: boolean;
  onClose?: () => void;
}

export default function Profiles({ isMobile, onClose }: ProfilesProps) {
  // Directly render the Edit Profile page since My Profile overview is moved to the header
  return (
    <div className="w-full min-h-screen bg-gray-50 overflow-y-auto">
      <EditProfile 
        isMobile={isMobile} 
        onBack={onClose}
        onSave={() => alert("Profile Saved")}
      />
    </div>
  );
}
