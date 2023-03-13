import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import { TextCSS } from '@components/Text';

import Bottom from './Components/Bottom';
import Header from './Components/Header';
import { Step1, Step2, Step3, Step4 } from './Components/Steps';
import TutorialPopup from './Components/TutorialPopup';

const TUTORIAL_STEPS_COUNT = 4;

const TutorialButton = styled.button`
  ${TextCSS.SubHead2}
`;

const Tutorial = () => {
  const navigate = useNavigate();
  const [isTutorialPopupVisible, setIsTutorialPopupVisible] =
    useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(0);

  const handleTutorialPopupVisible = () => {
    if (isTutorialPopupVisible) {
      setCurrentStep(0);
    }

    setIsTutorialPopupVisible((prev) => !prev);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleNextStep = () => {
    if (currentStep === TUTORIAL_STEPS_COUNT - 1) {
      navigate('/');

      return;
    }

    setCurrentStep((prevStep) => prevStep + 1);
  };

  const renderCurrentStepComponent = () => {
    switch (currentStep) {
      case 0:
        return <Step1 />;

      case 1:
        return <Step2 />;

      case 2:
        return <Step3 />;

      default:
        return <Step4 />;
    }
  };

  if (!isTutorialPopupVisible) {
    return (
      <TutorialButton onClick={handleTutorialPopupVisible}>
        튜토리얼
      </TutorialButton>
    );
  }

  return (
    <TutorialPopup selector="#tutorial" onClose={handleTutorialPopupVisible}>
      <Header
        indicatorCount={TUTORIAL_STEPS_COUNT}
        currentStep={currentStep}
        handleTutorialPopupVisible={handleTutorialPopupVisible}
      />
      {renderCurrentStepComponent()}
      <Bottom
        currentStep={currentStep}
        handlePrevStep={handlePrevStep}
        handleNextStep={handleNextStep}
      />
    </TutorialPopup>
  );
};

export default Tutorial;
