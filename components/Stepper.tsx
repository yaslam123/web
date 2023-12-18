// stepper
import React, { useState } from 'react';

interface StepperComponentProps {
    currentStep: number;
}
// Define 'stepper' as a functional component
const StepperComponent: React.FC<StepperComponentProps> = ({ currentStep }) => {
    const steps = ['Costumer info', 'Shippig info', 'Payment', 'Costumer info', 'Payment'];
    return (
        <div className="flex justify-between">
            {steps?.map((steps, i) => (
                <div key={i} className={`step-items ${currentStep === i + 1 && 'active'}`}>
                    <div className="steps"> {i + 1} </div>
                    <p className="text-black"> {steps} </p>
                </div>
            ))}
        </div>
    );
};

// Define 'Stepper' as a functional component
const Stepper: React.FC<StepperComponentProps> = ({ currentStep }) => {
    return (
        <div className="mx-4 my-24 h-8 items-center justify-between p-4">
            <StepperComponent currentStep={1} />
        </div>
    );
};

export default Stepper;
