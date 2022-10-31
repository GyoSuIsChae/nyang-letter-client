/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import styled, { css } from 'styled-components';

import { TX, TextCSS } from '@components/Text';

type TInputProps = {
  id: string;
  name: string;
  value: string;
  type?: string;
  width?: number | string;
  placeholder: string;
  maxLength?: number;
  errors?: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
};

type TStyledInputProps = {
  width?: number | string;
};

type TStyledInputLengthTextProps = {
  isWhiteGray: boolean;
  isRed: boolean;
};

const DefaultBlock = styled.div`
  position: relative;
  display: inline-flex;
`;

const Container = styled(DefaultBlock)`
  flex: 1;
  flex-direction: column;
  gap: 8px;
`;

const InputBlock = styled(DefaultBlock)`
  gap: 4px;
  padding-bottom: 9px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white_grey001};
`;

const DefaultInputCSS = css`
  background-color: transparent;
  outline: none;
  vertical-align: middle;
`;

const InputField = styled.input<TStyledInputProps>`
  ${DefaultInputCSS}
  ${TextCSS.Body2}

  flex: 1;

  ${(props) => {
    const { width, theme } = props;

    return css`
      width: ${typeof width === 'number' ? `${width}px` : width};
      color: ${theme.colors.grey004};
      caret-color: ${theme.colors.grey004};

      &::placeholder {
        color: ${theme.colors.white_grey002};
      }
    `;
  }}
`;

const InputLengthText = styled(TX.Body2)<TStyledInputLengthTextProps>`
  ${(props) => {
    const { isWhiteGray, isRed, theme } = props;

    return css`
      color: ${isWhiteGray ? theme.colors.white_grey002 : theme.colors.grey004};
      ${isRed && `color: ${theme.colors.red001}; opacity: 0.35;`}
    `;
  }}
`;

const Input = ({
  id,
  name,
  value,
  type = 'text',
  width = '100%',
  placeholder,
  maxLength = 15,
  errors = null,
  onChange = () => {},
  onBlur = () => {},
}: TInputProps) => {
  const { length } = value;
  const error = errors?.[id];

  return (
    <Container>
      <InputBlock>
        <InputField
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          type={type}
          width={width}
          placeholder={placeholder}
        />

        {maxLength && (
          <InputLengthText
            isWhiteGray={!length}
            isRed={error}
          >{`(${length}/${maxLength})`}</InputLengthText>
        )}
      </InputBlock>
    </Container>
  );
};

export default Input;
