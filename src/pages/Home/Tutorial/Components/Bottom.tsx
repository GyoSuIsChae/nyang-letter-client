import React from 'react';

import styled from 'styled-components';

import BackButtonImage from '@assets/images/btn_back.png';
import NextButtonImage from '@assets/images/btn_next.png';
import CommonButton from '@components/CommonButton';
import { TextCSS } from '@components/Text';

interface IBottomProps {
  currentStep: number;
  handlePrevStep: () => void;
  handleNextStep: () => void;
}

interface IBottomButtonContainerProps {
  isBackButtonVisible: boolean;
}

interface IBottomButtonProps {
  type: 'back' | 'next';
}

const BottomButtonContainer = styled.div<IBottomButtonContainerProps>`
  display: flex;
  width: 100%;

  align-items: center;
  justify-content: ${({ isBackButtonVisible }) =>
    isBackButtonVisible ? 'space-between' : 'flex-end'};

  position: absolute;
  bottom: 30px;
  padding: inherit;
`;

const BottomButtonButton = styled.button`
  width: 48px;
  height: 48px;
  aspect-ratio: 1;

  cursor: pointer;
`;

const BottomButtonImage = styled.img.attrs<IBottomButtonProps>(({ type }) => ({
  src: (type === 'next' ? NextButtonImage : BackButtonImage) as string,
  alt: (type === 'next' ? '다음' : '이전') as string,
}))<IBottomButtonProps>`
  width: 100%;
  height: 100%;
`;

const Bottom = ({
  currentStep,
  handlePrevStep,
  handleNextStep,
}: IBottomProps) => {
  const isBackButtonVisible = currentStep !== 0;
  const isNextButtonVisible = currentStep !== 3;

  return (
    <BottomButtonContainer isBackButtonVisible={isBackButtonVisible}>
      {isBackButtonVisible && (
        <BottomButtonButton onClick={handlePrevStep}>
          <BottomButtonImage type="back" />
        </BottomButtonButton>
      )}

      {isNextButtonVisible ? (
        <BottomButtonButton onClick={handleNextStep}>
          <BottomButtonImage type="next" />
        </BottomButtonButton>
      ) : (
        <CommonButton
          height={48}
          aspectRatio={2.8}
          target="primary"
          label="카페 만들기"
          onClick={() => {}}
          buttonTextStyle={TextCSS.Head1}
        />
      )}
    </BottomButtonContainer>
  );
};

export default Bottom;
