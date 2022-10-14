/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
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
  border-bottom: 1px solid ${({ theme }) => theme.colors.white_gray1};
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
      color: ${theme.colors.gray4};
      caret-color: ${theme.colors.gray4};

      &::placeholder {
        color: ${theme.colors.white_gray2};
      }
    `;
  }}
`;

const InputLengthText = styled(TX.Body2)<TStyledInputLengthTextProps>`
  color: ${({ isWhiteGray, theme }) =>
    isWhiteGray ? theme.colors.white_gray2 : theme.colors.gray4};
`;

const Input = ({
  id,
  type,
  width,
  placeholder,
  required,
  length,
  minLength,
  maxLength,
  errors,
  register,
}: TInputProps) => {
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
          >{`(${length}/${maxLength})`}</InputLengthText>
        )}
      </InputBlock>

      <ErrorMessage id={id} errors={errors} />
    </Container>
  );
};

Input.defaultProps = {
  type: 'text',
  width: '100%',
  required: true,
  minLength: null,
  maxLength: null,
  errors: null,
};

export default Input;
