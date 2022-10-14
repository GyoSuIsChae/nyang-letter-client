import React from 'react';
import { FieldErrors } from 'react-hook-form';

import styled from 'styled-components';

import TextCSS from '@components/Text/Styles';

interface IErrorMessageProps {
  id: string;
  errors?: FieldErrors;
}

const ErrorBlock = styled.div`
  ${TextCSS.Body3}

  color: ${({ theme }) => theme.colors.red};
`;

const ErrorMessage: React.FC<IErrorMessageProps> = ({ id, errors }) => {
  if (!errors || !errors?.[id]) {
    return null;
  }

  return (
    <ErrorBlock>
      {errors?.[id]?.type === 'maxLength' && '15자 이내로 입력해 주세요.'}
    </ErrorBlock>
  );
};

ErrorMessage.defaultProps = {
  errors: undefined,
};

export default ErrorMessage;
