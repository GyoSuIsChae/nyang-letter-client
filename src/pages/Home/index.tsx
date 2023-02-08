/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import styled, { css } from 'styled-components';

import Input from '@components/Input';
import Layout from '@components/Layout';
import { TX, TextCSS } from '@components/Text';

interface IFormInput {
  nickname: string;
}

const FlexColumnCenterCSS = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  ${FlexColumnCenterCSS}

  gap: 2em;
`;

const BodyText = styled(TX.Head1)`
  text-align: center;
`;

const TestButton = styled.button.attrs({
  type: 'submit',
})`
  ${TextCSS.BodyText1};
`;

const NickNameForm = styled.form`
  ${FlexColumnCenterCSS}

  gap: 0.5rem;
`;

const Home: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IFormInput>();

  const nickNameLength = watch('nickname')?.length || 0;

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <Layout>
      <Container>
        <BodyText>당신의 소중한 날에 냥레터가 함께 해요</BodyText>

        <NickNameForm onSubmit={handleSubmit(onSubmit)}>
          <Input
            id="nickname"
            type="text"
            placeholder="닉네임을 입력하세요."
            length={nickNameLength}
            maxLength={15}
            errors={errors}
            register={register}
          />

          <TestButton>저장하기</TestButton>
        </NickNameForm>
      </Container>
    </Layout>
  );
};

export default Home;
