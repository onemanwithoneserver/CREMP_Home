import Step1Desktop from "./desktop";
import Step1Mobile from "./mobile";

import type { Step1Data } from "../index";

interface Step1Props {
  onNext: () => void;
  isMobile: boolean;
  step1Data: Step1Data;
  setStep1Data: (data: Step1Data | ((prev: Step1Data) => Step1Data)) => void;
}

export default function Step1({ onNext, isMobile, step1Data, setStep1Data }: Step1Props) {
  if (isMobile) {
    return <Step1Mobile onNext={onNext} step1Data={step1Data} setStep1Data={setStep1Data} />;
  }
  return <Step1Desktop onNext={onNext} step1Data={step1Data} setStep1Data={setStep1Data} />;
}
