import React from 'react';
import { FieldErrors } from 'react-hook-form';

import styled from 'styled-components';

import TextCSS from '@components/Text/Styles';

interface IErrorMessageProps {
  id: string;
  errors?: FieldErrors;
}

const ErrorBlock = styled.div`
  ${TextCSS.Body1}

  width: 100%;
  display: flex;
  align-items: flex-start;

  opacity: 0.35;
  color: ${({ theme }) => theme.colors.red001};
`;

const ErrorMessage: React.FC<IErrorMessageProps> = ({
  id,
  errors = undefined,
}) => {
  if (!errors || !errors?.[id]) {
    return null;
  }

  return (
    <ErrorBlock>
      {errors?.[id]?.type === 'maxLength' && '15자 이내로 입력해 주세요.'}
    </ErrorBlock>
  );
};

export default ErrorMessage;
