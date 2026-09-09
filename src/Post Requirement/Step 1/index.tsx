import Step1Mobile from "./mobile";
import Step1Desktop from "./desktop";

interface Step1Props {
  onNext: () => void;
  isMobile: boolean;
}

export default function Step1({ onNext, isMobile }: Step1Props) {
  return isMobile ? <Step1Mobile onNext={onNext} /> : <Step1Desktop onNext={onNext} />;
}
