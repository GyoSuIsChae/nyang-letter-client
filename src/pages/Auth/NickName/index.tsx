/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import CircleImage from '@components/CircleImage';
import CommonButton from '@components/CommonButton';
import Header from '@components/Header';
import Input from '@components/Input';
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

const SignUpContainer = styled(FlexColumnCenterDiv)`
  width: 100%;
  height: 100vh;

  padding: 24px 16px;
  gap: 36px 0px;
`;

const NickNameForm = styled(FlexColumnCenterDiv).attrs({
  as: 'form',
})`
  flex: 1;
  width: 100%;
  gap: 0.5rem;

  justify-content: space-between;
`;

const NickName: React.FC = () => {
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
      <Header title="닉네임 수정" />

      <CircleImage />

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
          height={56}
          target="primary"
          label="확인"
          onClick={handleSubmit(onSubmit)}
        />
      </NickNameForm>
    </SignUpContainer>
  );
};

export default NickName;
