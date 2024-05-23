import { useState } from "react";
import { Step1 } from "../components/createEvent/Step1";
import { NavRoutes } from "../components/ui/NavRoutes";
import { Step2 } from "../components/createEvent/Step2";
import { Step3 } from "../components/createEvent/Step3";

export const CreateEvent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  
  const nextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  return (
    <section className="h-full w-full flex flex-col justify-center items-center gap-4 my-8">
      <div className="w-1/2">
        <NavRoutes routerName="Criar Evento Esportivo" to="/sports-meets-web" />
      </div>

      {currentStep === 1 && <Step1 onNextStep={nextStep} />}

      {currentStep === 2 && <Step2 onNextStep={nextStep} />}

      {currentStep === 3 && <Step3 />}
    </section>
  );
};
