import Step3Mobile from "./mobile";
import Step3Desktop from "./desktop";

import type { Step1Data, Step2Data, Step3Data } from "../index";

interface Step3Props {
  onNext: () => void;
  onBack: () => void;
  isMobile: boolean;
  step1Data: Step1Data;
  step2Data: Step2Data;
  step3Data: Step3Data;
  setStep3Data: React.Dispatch<React.SetStateAction<Step3Data>>;
}

export default function Step3({ onNext, onBack, isMobile, step1Data, step2Data, step3Data, setStep3Data }: Step3Props) {
  return isMobile ? (
    <Step3Mobile onNext={onNext} onBack={onBack}  step1Data={step1Data} step2Data={step2Data}  step3Data={step3Data} setStep3Data={setStep3Data} />
  ) : (
    <Step3Desktop onNext={onNext} onBack={onBack}  step1Data={step1Data} step2Data={step2Data}  step3Data={step3Data} setStep3Data={setStep3Data} />
  );
}
