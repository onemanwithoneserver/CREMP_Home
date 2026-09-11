import Step2Mobile from "./mobile";
import Step2Desktop from "./desktop";

interface Step2Props {
  onNext: () => void;
  onBack: () => void;
  isMobile: boolean;
}

export default function Step2({ onNext, onBack, isMobile }: Step2Props) {
  return isMobile ? (
    <Step2Mobile onNext={onNext} onBack={onBack} />
  ) : (
    <Step2Desktop onNext={onNext} onBack={onBack} />
  );
}
