/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react';

import styled from 'styled-components';

import TextCSS from '@components/Text/Styles';

interface IErrorMessageProps {
  errors?: any;
}

const ErrorBlock = styled.div`
  ${TextCSS.Body1}

  width: 100%;
  display: flex;
  align-items: flex-start;

  opacity: 0.35;
  color: ${({ theme }) => theme.colors.red001};
`;

const ErrorMessage: React.FC<IErrorMessageProps> = ({ errors = undefined }) => {
  if (!errors || !errors?.type) {
    return null;
  }

  return (
    <ErrorBlock>
      {errors?.type === 'maxLength' && '15자 이내로 입력해 주세요.'}
    </ErrorBlock>
  );
};

export default ErrorMessage;
