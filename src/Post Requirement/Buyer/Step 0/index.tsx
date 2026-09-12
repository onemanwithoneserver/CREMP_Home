import Step0Mobile from "./mobile";
import Step0Desktop from "./desktop";

interface Step0Props {
  onNext: () => void;
  isMobile: boolean;
}

export default function Step0({ onNext, isMobile }: Step0Props) {
  return isMobile ? <Step0Mobile onNext={onNext} /> : <Step0Desktop onNext={onNext} />;
}
