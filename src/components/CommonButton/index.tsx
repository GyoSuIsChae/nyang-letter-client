/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from 'react';

import styled from 'styled-components';

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
  wrapperStyle?: { [key: string]: string };
  buttonTextStyle?: { [key: string]: string };
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
  type?: 'button' | 'submit' | 'reset';
  target: 'primary' | 'secondary' | 'help' | 'default';
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

interface ICommonButtonTextProps {
  fullWidth?: boolean;
  buttonTextStyle?: { [key: string]: string };
}

const getButtonImage = (target: string, disabled = false) => {
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

const getAspectRatio = (target: string) => {
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

  aspect-ratio: ${({ target }) => getAspectRatio(target)};
  pointer: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  ${({ fullWidth }) => fullWidth && 'width: 100%;'}
  ${({ inline }) => inline && 'flex: 1;'}
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
  buttonTextStyle = {},
}: ICommonButtonProps) => (
  <CommonButtonContainer
    type={type}
    disabled={disabled}
    inline={inline}
    fullWidth={fullWidth}
    height={height}
    target={target}
    wrapperStyle={wrapperStyle}
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
