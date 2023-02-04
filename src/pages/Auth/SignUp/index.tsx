/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import CloseButton from '@components/CloseButton';
import CommonButton from '@components/CommonButton';
import Input from '@components/Input';
import { TX } from '@components/Text';
import { PATH_NAMES } from '@constants/pages';

interface IFormInput {
  nickname: string;
}

const FlexColumnCenterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;
  padding: 24px 16px;
`;

const Logo = styled(FlexColumnCenterDiv)`
  width: 151px;
  height: 80px;

  margin-bottom: 28px;
  background: #ececec;
  border: 1px solid #969696;
`;

const Title = styled(TX.Head3)`
  margin-bottom: 26px;
`;

const SubTitle = styled(TX.Body2)`
  color: ${({ theme }) => theme.colors.grey002};

  margin-bottom: 93px;
`;

const NickNameForm = styled(FlexColumnCenterDiv).attrs({
  as: 'form',
})`
  flex: 1;
  width: 100%;
  gap: 0.5rem;

  justify-content: space-between;
`;

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    setFocus,
    clearErrors,
  } = useForm<IFormInput>();

  const nickNameLength = watch('nickname')?.length || 0;
  const isConfirmButtonDisabled = !!(errors.nickname || !nickNameLength);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (isConfirmButtonDisabled) {
      return;
    }

    console.log(data);
    handleSubmit(onSubmit);
    navigate(PATH_NAMES.HOME);
  };

  const handleClearButtonClick = () => {
    setValue('nickname', '');
    clearErrors('nickname');
    setFocus('nickname');
  };

  useEffect(() => {
    setFocus('nickname');
  }, [setFocus]);

  return (
    <SignUpContainer>
      <Logo />

      <CloseButton
        style={{
          position: 'absolute',
          top: 28,
          right: 28,
        }}
      />

      <Title>
        냥레터에서 사용할 닉네임을 <br />
        입력해 주세요!
      </Title>

      <SubTitle>닉네임은 언제든지 변경 가능해요.</SubTitle>

      <NickNameForm onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="nickname"
          type="text"
          maxLength={15}
          length={nickNameLength}
          placeholder="닉네임을 입력하세요."
          errors={errors}
          register={register}
          handleClearButtonClick={handleClearButtonClick}
        />

        <CommonButton
          fullWidth
          disabled={isConfirmButtonDisabled}
          height={64}
          target="primary"
          label="확인"
          onClick={handleSubmit(onSubmit)}
        />
      </NickNameForm>
    </SignUpContainer>
  );
};

export default SignUp;
