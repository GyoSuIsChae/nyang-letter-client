/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import styled, { css } from 'styled-components';

import Input from '@components/Input';
import ErrorMessage from '@components/Input/ErrorMessage';
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

  height: 100vh;
  gap: 2em;
`;

const BodyText = styled(TX.Body1)`
  text-align: center;
`;

const TestButton = styled.button.attrs({
  type: 'submit',
})`
  ${TextCSS.BodyText1}
`;

const NickNameForm = styled.form`
  ${FlexColumnCenterCSS}

  gap: 0.5rem;
`;

const Home = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <Container>
      <BodyText>
        냥레터에서 사용할
        <br />
        닉네임을 입력해 주세요!
      </BodyText>

      <NickNameForm onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="nickname"
          control={control}
          rules={{ required: true, maxLength: 15 }}
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              id="nickname"
              errors={errors}
              placeholder="닉네임을 입력하세요."
            />
          )}
        />

        <ErrorMessage id="nickname" errors={errors} />

        <TestButton type="submit">저장하기</TestButton>
      </NickNameForm>
    </Container>
  );
};

export default Home;
