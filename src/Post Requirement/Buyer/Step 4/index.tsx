import Step4Mobile from "./mobile";
import Step4Desktop from "./desktop";

import type { Step1Data, Step2Data, Step3Data } from "../index";

interface Step4Props {
  onNext: () => void;
  onBack: () => void;
  isMobile: boolean;
  step1Data: Step1Data;
  step2Data: Step2Data;
  step3Data: Step3Data;
}

export default function Step4({ onNext, onBack, isMobile, step1Data, step2Data, step3Data }: Step4Props) {
  return isMobile ? (
    <Step4Mobile onNext={onNext} onBack={onBack}  step1Data={step1Data} step2Data={step2Data} step3Data={step3Data} />
  ) : (
    <Step4Desktop onNext={onNext} onBack={onBack}  step1Data={step1Data} step2Data={step2Data} step3Data={step3Data} />
  );
}
