/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from 'react';

import styled from 'styled-components';

import imagePrimaryBtn from '@assets/images/primary_btn.png';
import imageSecondaryBtn from '@assets/images/secondary_btn.png';

interface ICommonButtonProps {
  label: string;
  target: 'primary' | 'secondary' | 'default';
  onClick: () => void;
  disabled?: boolean;
  inline?: boolean;
  fullWidth?: boolean;
  height?: number;
  wrapperStyle?: { [key: string]: string };
}
interface IUnderlineButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  inline?: boolean;
  fullWidth?: boolean;
  wrapperStyle?: { [key: string]: string };
}

interface ICommonButtonContainerProps {
  disabled?: boolean;
  target: 'primary' | 'secondary' | 'default';
  inline?: boolean;
  fullWidth?: boolean;
  height?: number;
  wrapperStyle?: { [key: string]: string };
}
interface IUnderlineButtonContainerProps {
  disabled?: boolean;
  inline?: boolean;
  fullWidth?: boolean;
  wrapperStyle?: { [key: string]: string };
}

const getButtonImage = (target: string) => {
  switch (target) {
    case 'primary':
      return imagePrimaryBtn;
    case 'secondary':
      return imageSecondaryBtn;
    default:
      return imagePrimaryBtn;
  }
};

const CommonButtonContainer = styled.button<ICommonButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ height }) => height || 64}px;
  ${({ inline }) => inline && 'flex: 1;'}
  ${({ fullWidth }) => fullWidth && 'width: 100%;'}
  background-image: url(${({ target }) => getButtonImage(target)});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  ${({ disabled }) => disabled && 'filter: opacity(0.5);'};
  ${({ wrapperStyle }) => wrapperStyle || null};
`;

const UnderlineButtonContainer = styled.button<IUnderlineButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(171, 167, 163, 1);
  ${({ inline }) => inline && 'flex: 1;'};
  ${({ fullWidth }) => fullWidth && 'width: 100%;'};
  ${({ disabled }) => disabled && 'filter: opacity(0.5);'};
  ${({ wrapperStyle }) => wrapperStyle || null};
`;

const CommonButton = ({
  label,
  target,
  disabled = false,
  inline = false,
  fullWidth = false,
  height = 64,
  onClick,
  wrapperStyle = {},
}: ICommonButtonProps) => {
  return (
    <CommonButtonContainer
      disabled={disabled}
      inline={inline}
      fullWidth={fullWidth}
      height={height}
      target={target}
      wrapperStyle={wrapperStyle}
      onClick={() => onClick()}
    >
      {/* TODO: Typography 컴포넌트 적용하기 */}
      <span>{label}</span>
    </CommonButtonContainer>
  );
};

export const UnderlineButton = ({
  label,
  disabled = false,
  inline = false,
  fullWidth = false,
  onClick,
  wrapperStyle = {},
}: IUnderlineButtonProps) => {
  return (
    <UnderlineButtonContainer
      disabled={disabled}
      inline={inline}
      fullWidth={fullWidth}
      wrapperStyle={wrapperStyle}
      onClick={() => onClick()}
    >
      {/* TODO: Typography 컴포넌트 적용하기 */}
      <span style={{ color: 'rgba(171, 167, 163, 1)' }}>{label}</span>
    </UnderlineButtonContainer>
  );
};

export default CommonButton;
