import { useState } from "react";
import Step0 from "./Step 0";
import Step1 from "./Step 1";
import Step2 from "./Step 2";
import Step3 from "./Step 3";
import Step4 from "./Step 4";
import Step5 from "./Step 5";
import { AnimatePresence, motion } from "framer-motion";

interface PostRequirementBuyerProps {
  isMobile: boolean;
}

export interface Step3Data {
  location: string;
  selectedZone: string;
  selectedCircle: string;
  timeframe: string;
  selectedDate: string;
}

export interface Step2Data {
  purpose: string;
  budget: string;
  size: string;
  leaseMonth: string;
  dailyOp: string;
}

export interface Step1Data {
  reqType: string;
  reqName: string;
  propCategory: string;
  selectedIndustries: string[];
}

export default function PostRequirementBuyer({ isMobile }: PostRequirementBuyerProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [step1Data, setStep1Data] = useState<Step1Data>({
    reqType: "buy_property",
    reqName: "",
    propCategory: "retail_space",
    selectedIndustries: [],
  });

  const [step3Data, setStep3Data] = useState<Step3Data>({
    location: "",
    selectedZone: "",
    selectedCircle: "",
    timeframe: "",
    selectedDate: "",
  });

  const [step2Data, setStep2Data] = useState<Step2Data>({
    purpose: "",
    budget: "",
    size: "",
    leaseMonth: "",
    dailyOp: "",
  });

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="relative w-full h-full overflow-y-auto scrollbar-hide bg-[#fafafb] dark:bg-[#060e24]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
          className="w-full min-h-screen"
        >
          {currentStep === 0 && (
            <Step0 
              onNext={nextStep} 
              isMobile={isMobile} 
            />
          )}
          {currentStep === 1 && (
            <Step1 
              onNext={nextStep} 
              onBack={prevStep}
              isMobile={isMobile} 
              step1Data={step1Data} 
              setStep1Data={setStep1Data} 
            />
          )}
          {currentStep === 2 && (
            <Step2 
              onNext={nextStep} 
              onBack={prevStep} 
              isMobile={isMobile}
              step1Data={step1Data}
              step2Data={step2Data}
              setStep2Data={setStep2Data}
            />
          )}
          {currentStep === 3 && <Step3 onNext={nextStep} onBack={prevStep} isMobile={isMobile} step1Data={step1Data} step2Data={step2Data} step3Data={step3Data} setStep3Data={setStep3Data} />}
          {currentStep === 4 && <Step4 onNext={nextStep} onBack={prevStep} isMobile={isMobile} step1Data={step1Data} step2Data={step2Data} step3Data={step3Data} />}
          {currentStep === 5 && (
            <Step5 
              onSubmit={() => {
                alert("Requirement Submitted!");
                setCurrentStep(0);
              }} 
              onBack={prevStep} 
              isMobile={isMobile}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
