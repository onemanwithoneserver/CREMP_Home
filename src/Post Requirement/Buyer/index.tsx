import { useState } from "react";
import Step1 from "./Step 1";
import Step2 from "./Step 2";
import Step3 from "./Step 3";
import Step4 from "./Step 4";
import Step5 from "./Step 5";
import { AnimatePresence, motion } from "framer-motion";

interface PostRequirementBuyerProps {
  isMobile: boolean;
}

export default function PostRequirementBuyer({ isMobile }: PostRequirementBuyerProps) {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="relative w-full h-full overflow-y-auto scrollbar-hide bg-gray-50">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
          className="w-full min-h-screen"
        >
          {currentStep === 1 && <Step1 onNext={nextStep} isMobile={isMobile} />}
          {currentStep === 2 && <Step2 onNext={nextStep} onBack={prevStep} isMobile={isMobile} />}
          {currentStep === 3 && <Step3 onNext={nextStep} onBack={prevStep} isMobile={isMobile} />}
          {currentStep === 4 && <Step4 onNext={nextStep} onBack={prevStep} isMobile={isMobile} />}
          {currentStep === 5 && (
            <Step5 
              onSubmit={() => {
                alert("Requirement Submitted!");
                setCurrentStep(1);
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
