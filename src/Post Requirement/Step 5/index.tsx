import Step5Mobile from "./mobile";
import Step5Desktop from "./desktop";

interface Step5Props {
  onSubmit: () => void;
  onBack: () => void;
  isMobile: boolean;
}

export default function Step5({ onSubmit, onBack, isMobile }: Step5Props) {
  return isMobile ? (
    <Step5Mobile onSubmit={onSubmit} onBack={onBack} />
  ) : (
    <Step5Desktop onSubmit={onSubmit} onBack={onBack} />
  );
}
