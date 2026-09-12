import Step2Mobile from "./mobile";
import Step2Desktop from "./desktop";
import type { Step1Data, Step2Data } from "../index";

interface Step2Props {
  onNext: () => void;
  onBack: () => void;
  isMobile: boolean;
  step1Data: Step1Data;
  step2Data: Step2Data;
  setStep2Data: React.Dispatch<React.SetStateAction<Step2Data>>;
}

export default function Step2({ onNext, onBack, isMobile, step1Data, step2Data, setStep2Data }: Step2Props) {
  return isMobile ? (
    <Step2Mobile onNext={onNext} onBack={onBack} step1Data={step1Data}  step2Data={step2Data} setStep2Data={setStep2Data} />
  ) : (
    <Step2Desktop onNext={onNext} onBack={onBack} step1Data={step1Data}  step2Data={step2Data} setStep2Data={setStep2Data} />
  );
}
