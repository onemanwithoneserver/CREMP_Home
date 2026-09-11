import Step4Mobile from "./mobile";
import Step4Desktop from "./desktop";

interface Step4Props {
  onNext: () => void;
  onBack: () => void;
  isMobile: boolean;
}

export default function Step4({ onNext, onBack, isMobile }: Step4Props) {
  return isMobile ? (
    <Step4Mobile onNext={onNext} onBack={onBack} />
  ) : (
    <Step4Desktop onNext={onNext} onBack={onBack} />
  );
}
