import Step3Mobile from "./mobile";
import Step3Desktop from "./desktop";

interface Step3Props {
  onNext: () => void;
  onBack: () => void;
  isMobile: boolean;
}

export default function Step3({ onNext, onBack, isMobile }: Step3Props) {
  return isMobile ? (
    <Step3Mobile onNext={onNext} onBack={onBack} />
  ) : (
    <Step3Desktop onNext={onNext} onBack={onBack} />
  );
}
