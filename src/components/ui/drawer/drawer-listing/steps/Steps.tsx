import { t } from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';


interface IStepsProps {
  activeStep: number,
  setActiveStep: (step: number) => void;
  steps: { label: string, number: number}[];
}

export default function Steps({
  setActiveStep,
  activeStep,
  steps
}: IStepsProps) {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center items-center mb-6">
      {steps.map((step, index) => (
        <div
          key={step.number}
          className="flex flex-col items-center cursor-pointer w-1/4 gap-2"
          onClick={() => setActiveStep(step.number)}
        >
          <div className="relative flex items-center justify-center">
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-full ${step.number <= activeStep
                  ? "bg-[#177DFF0C]"
                  : "bg-[#AAA3A30C]"
                }`}
            >
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full ${step.number <= activeStep
                    ? "bg-[#E8F2FF]"
                    : "bg-[#F5F5F5]"
                  }`}
              >
                <div
                  className={`flex items-center justify-center w-[30px] h-[30px] rounded-full ${step.number <= activeStep
                      ? "bg-[#177DFF] "
                      : "bg-[#E0E0E0]"
                    }`}
                >
                  <span className={`text-lg font-bold ${step.number <= activeStep
                      ? "bg-clip-text text-transparent bg-gradient-to-b from-[#D1E5FF] to-[#177DFF00] "
                      : "bg-clip-text text-transparent bg-gradient-to-b from-[#B9BDC2] to-[#8B8C8D00]"
                    }`}>{step.number}</span>
                </div>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`absolute top-1/2 -right-16 h-[1px] w-16 ${step.number <= activeStep ? "bg-[#177DFF]" : "bg-[#EEEEEE]"
                  }`}
              />
            )}
          </div>
          <span
            className={`text-xs font-normal h-10 text-center w-20  ${step.number <= activeStep ? "text-[#212121]" : "text-[#757575]"
              }`}
          >
            {step.label}
          </span>
        </div>
      ))}
    </div>
  );
}
