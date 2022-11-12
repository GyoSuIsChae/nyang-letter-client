/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Path, UseFormRegister, FieldErrors } from 'react-hook-form';

import styled, { css } from 'styled-components';

import { TX, TextCSS } from '@components/Text';

import ErrorMessage from './ErrorMessage';

type TInputProps = {
  id: Path<any>;
  type?: string;
  width?: number | string;
  placeholder: string;
  required?: boolean;
  length: number;
  minLength?: number;
  maxLength?: number;
  errors?: FieldErrors;
  register: UseFormRegister<any>;
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
      color: ${theme.colors.gray004};
      caret-color: ${theme.colors.gray004};

      &::placeholder {
        color: ${theme.colors.white_grey002};
      }
    `;
  }}
`;

const InputLengthText = styled(TX.Body1)<TStyledInputLengthTextProps>`
  ${(props) => {
    const { isWhiteGray, isRed, theme } = props;

    return css`
      color: ${isWhiteGray ? theme.colors.white_grey002 : theme.colors.gray004};
      ${isRed && `opacity: 0.35; color: ${theme.colors.red001};`}
    `;
  }}
`;

const Input = ({
  id,
  type = 'text',
  width = '100%',
  placeholder,
  required = true,
  length,
  minLength = 1,
  maxLength = 15,
  errors = {},
  register,
}: TInputProps) => {
  const isRed = !!(length && errors[id]);

  return (
    <Container>
      <InputBlock>
        <InputField
          id={id}
          type={type}
          width={width}
          placeholder={placeholder}
          {...register(id, { required, minLength, maxLength })}
        />

        {maxLength && (
          <InputLengthText
            isWhiteGray={!length}
            isRed={isRed}
          >{`(${length}/${maxLength})`}</InputLengthText>
        )}
      </InputBlock>

      <ErrorMessage errors={errors[id]} />
    </Container>
  );
};

export default Input;
