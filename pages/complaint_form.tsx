import React, { useState } from 'react';
import StepperControl from '../components/StepperControl';
import Footer from '../components/Layouts/Footer';
import Stepper from '../components/Stepper';

const ComplaintForm: React.FC = () => {
    const [currentStep, setCurrentStep] = useState<number>(1);

    return (
        <>
            <div className="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
                <div className="relative">
                    <div className="container">
                        <div className="items-center justify-between py-10 md:flex md:h-[400px] md:py-0">
                            <div className="heading relative mb-0 text-center ltr:md:text-left rtl:md:text-right">
                                <h6>Guidlines</h6>
                                <h4 className="!text-white">Legal Framework</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-24 mx-auto h-56 rounded-2xl bg-white pb-2 shadow-xl md:w-1/2 ">
                {/* Stepper */}
                <div className="horizontal container mt-5">
                    <Stepper currentStep={currentStep} />
                </div>

                {/* Navigation Controls */}
                <div>
                    <StepperControl currentStep={currentStep} setCurrentStep={setCurrentStep} />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ComplaintForm;
