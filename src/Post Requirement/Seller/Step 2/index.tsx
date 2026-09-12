import Step2Mobile from "./mobile";
import Step2Desktop from "./desktop";
import type { Step1Data } from "../index";

interface Step2Props {
  onNext: () => void;
  onBack: () => void;
  isMobile: boolean;
  step1Data: Step1Data;
}

export default function Step2({ onNext, onBack, isMobile, step1Data }: Step2Props) {
  return isMobile ? (
    <Step2Mobile onNext={onNext} onBack={onBack} step1Data={step1Data} />
  ) : (
    <Step2Desktop onNext={onNext} onBack={onBack} step1Data={step1Data} />
  );
}
