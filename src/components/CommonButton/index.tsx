/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from 'react';

import styled, { Interpolation } from 'styled-components';

import imageHelpBtn from '@assets/images/btn_help.png';
import imagePrimaryBtn from '@assets/images/primary_btn.png';
import imageSecondaryBtn from '@assets/images/secondary_btn.png';
import { TX, TextCSS } from '@components/Text';

interface ICommonButtonProps {
  type?: 'button' | 'submit' | 'reset';
  label: string;
  target: 'primary' | 'secondary' | 'help' | 'default';
  onClick: () => void;
  disabled?: boolean;
  inline?: boolean;
  fullWidth?: boolean;
  height?: number;
  wrapperStyle?: Interpolation<any> | { [key: string]: string };
  buttonTextStyle?: Interpolation<any>;
  aspectRatio?: number;
}

interface IUnderlineButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  inline?: boolean;
  fullWidth?: boolean;
  wrapperStyle?: Interpolation<any> | { [key: string]: string };
}

interface ICommonButtonContainerProps {
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  target: 'primary' | 'secondary' | 'help' | 'default';
  inline?: boolean;
  fullWidth?: boolean;
  height?: number;
  wrapperStyle?: Interpolation<any> | { [key: string]: string };
  aspectRatio?: number;
}

interface IUnderlineButtonContainerProps {
  disabled?: boolean;
  inline?: boolean;
  fullWidth?: boolean;
  wrapperStyle?: Interpolation<any> | { [key: string]: string };
}

interface ICommonButtonTextProps {
  fullWidth?: boolean;
  buttonTextStyle?: Interpolation<any>;
}

const getButtonImage = (target: string, disabled = false): string => {
  switch (target) {
    case 'primary':
      if (disabled) {
        return imageSecondaryBtn;
      }

      return imagePrimaryBtn;

    case 'help':
      return imageHelpBtn;

    default:
      return imagePrimaryBtn;
  }
};

const getAspectRatio = (target: string, aspectRatio?: number): number => {
  if (aspectRatio !== undefined) {
    return aspectRatio;
  }

  switch (target) {
    case 'help':
      return 3.2;

    default:
      return 5.35;
  }
};

const CommonButtonContainer = styled.button<ICommonButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: ${({ height }) => height || 64}px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url(${({ target, disabled }) =>
    getButtonImage(target, disabled)});
  aspect-ratio: ${({ target, aspectRatio }) =>
    getAspectRatio(target, aspectRatio)};

  pointer: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  ${({ fullWidth }) => fullWidth && 'width: 100%;'}
  ${({ inline }) => inline && 'flex: 1;'}
  ${({ wrapperStyle }) => wrapperStyle || null};
`;

const UnderlineButtonContainer = styled.button<IUnderlineButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-bottom: 2px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey002};
  ${({ inline }) => inline && 'flex: 1;'};
  ${({ fullWidth }) => fullWidth && 'width: 100%;'};
  ${({ disabled }) => disabled && 'filter: opacity(0.5);'};
  ${({ wrapperStyle }) => wrapperStyle || null};
`;

const CommonButtonText = styled.span<ICommonButtonTextProps>`
  ${({ fullWidth }) => (fullWidth ? TextCSS.Head4 : TextCSS.Body1)}
  ${({ buttonTextStyle }) => buttonTextStyle || null}
  color: #ffffff;
`;

const UnderLineButtonText = styled(TX.SubHead2)`
  color: ${({ theme }) => theme.colors.grey002};
`;

const CommonButton = ({
  type = 'button',
  label,
  target,
  disabled = false,
  inline = false,
  fullWidth = false,
  height = 64,
  onClick,
  wrapperStyle = {},
  buttonTextStyle = undefined,
  aspectRatio = undefined,
}: ICommonButtonProps) => (
  <CommonButtonContainer
    type={type}
    disabled={disabled}
    inline={inline}
    fullWidth={fullWidth}
    height={height}
    target={target}
    wrapperStyle={wrapperStyle}
    aspectRatio={aspectRatio}
    onClick={() => onClick()}
  >
    <CommonButtonText fullWidth={fullWidth} buttonTextStyle={buttonTextStyle}>
      {label}
    </CommonButtonText>
  </CommonButtonContainer>
);

export const UnderlineButton = ({
  label,
  disabled = false,
  inline = false,
  fullWidth = false,
  onClick,
  wrapperStyle = {},
}: IUnderlineButtonProps) => (
  <UnderlineButtonContainer
    disabled={disabled}
    inline={inline}
    fullWidth={fullWidth}
    wrapperStyle={wrapperStyle}
    onClick={() => onClick()}
  >
    <UnderLineButtonText>{label}</UnderLineButtonText>
  </UnderlineButtonContainer>
);

export default CommonButton;
