import Step3Mobile from "./mobile";
import Step3Desktop from "./desktop";

import type { Step1Data, Step2Data } from "../index";

interface Step3Props {
  onNext: () => void;
  onBack: () => void;
  isMobile: boolean;
  step1Data: Step1Data;
  step2Data: Step2Data;
}

export default function Step3({ onNext, onBack, isMobile, step1Data, step2Data }: Step3Props) {
  return isMobile ? (
    <Step3Mobile onNext={onNext} onBack={onBack}  step1Data={step1Data} step2Data={step2Data} />
  ) : (
    <Step3Desktop onNext={onNext} onBack={onBack}  step1Data={step1Data} step2Data={step2Data} />
  );
}
