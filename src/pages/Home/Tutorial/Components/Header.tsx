/* eslint-disable react/no-array-index-key */
import React from 'react';

import styled from 'styled-components';

import IndicatorActiveImage from '@assets/images/tutorial_indicator_active.png';
import IndicatorInactiveImage from '@assets/images/tutorial_indicator_inactive.png';
import CloseButton from '@components/CloseButton';

interface IHeaderProps {
  indicatorCount: number;
  currentStep: number;
  handleTutorialPopupVisible: () => void;
}

interface IIndicatorImage {
  isActive?: boolean;
}

const HeaderContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 32px;
`;

const CloseButtonWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const IndicatorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0px 10px;
`;

const IndicatorImage = styled.img.attrs<IIndicatorImage>(({ isActive }) => ({
  src: (isActive ? IndicatorActiveImage : IndicatorInactiveImage) as string,
  alt: (isActive ? '활성화' : '비활성화') as string,
}))<IIndicatorImage>`
  width: 18px;
  height: 18px;
`;

const Header = ({
  indicatorCount,
  currentStep,
  handleTutorialPopupVisible,
}: IHeaderProps) => (
  <HeaderContainer>
    <IndicatorWrapper>
      {Array(indicatorCount)
        .fill('')
        .map((_, index) => (
          <IndicatorImage
            key={`indicator_${index}`}
            isActive={index === currentStep}
          />
        ))}
    </IndicatorWrapper>

    <CloseButtonWrapper>
      <CloseButton
        style={{ width: '28px', height: '28px' }}
        onClick={handleTutorialPopupVisible}
      />
    </CloseButtonWrapper>
  </HeaderContainer>
);

export default Header;
