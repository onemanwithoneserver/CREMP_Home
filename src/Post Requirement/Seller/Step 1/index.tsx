import Step1Desktop from "./desktop";
import Step1Mobile from "./mobile";

interface Step1Props {
  onNext: () => void;
  isMobile: boolean;
}

export default function Step1({ onNext, isMobile }: Step1Props) {
  if (isMobile) {
    return <Step1Mobile onNext={onNext} />;
  }
  return <Step1Desktop onNext={onNext} />;
}
