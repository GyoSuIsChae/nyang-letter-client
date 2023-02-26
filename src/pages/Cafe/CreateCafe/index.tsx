import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { format } from 'date-fns';
import styled from 'styled-components';

import iconTitleNumber from '@assets/images/icon_title_number.png';
import CommonButton from '@components/CommonButton';
import CommonDatePicker from '@components/CommonDatePicker';
import CommonSpace from '@components/CommonSpace';
import Header from '@components/Header';
import Input from '@components/Input';
import { TX } from '@components/Text';
import { PATH_NAMES } from '@constants/pages';

interface FormInput {
  cafeTitle: string;
}

const FlexColumnCenterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const CreateCafeContainer = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px 16px;
`;

const Section = styled.section`
  flex: 1;
`;

const CafeTitleNameForm = styled(FlexColumnCenterDiv).attrs({
  as: 'form',
})`
  width: 100%;
  gap: 0.5rem;
  justify-content: space-between;
`;

const NumberTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
  margin-bottom: 9px;
`;

const NumberTextWrapper = styled.div`
  position: relative;
`;

const NumberText = styled(TX.Head2)`
  position: absolute;
  top: 0;
  left: 0;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  line-height: 26px;
  color: white;
`;
const NumberTitle = styled(TX.Head2)`
  color: #2d2218;
`;
const NumberSubTitle = styled(TX.Body1)`
  color: #a4a4a4;
  margin-top: -2px;
  margin-bottom: 6px;
`;

const NumberIcon = styled.img.attrs({
  src: iconTitleNumber,
  alt: 'iconTitleNumber',
})`
  width: 26px;
  height: 26px;
`;

const CreateCafe = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    setFocus,
    clearErrors,
  } = useForm<FormInput>();

  const cafeTitleLength = watch('cafeTitle')?.length || 0;
  const isConfirmButtonDisabled = !!(errors.cafeTitle || !cafeTitleLength);

  const [selectOpenDate, setSelectOpenDate] = useState<Date | string>(
    format(new Date(), 'yyyy.MM.dd'),
  );

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    if (isConfirmButtonDisabled || !selectOpenDate) {
      return;
    }

    console.log(data);
    handleSubmit(onSubmit);
    navigate(PATH_NAMES.HOME);
  };

  const handleClearButtonClick = () => {
    setValue('cafeTitle', '');
    clearErrors('cafeTitle');
    setFocus('cafeTitle');
  };

  useEffect(() => {
    setFocus('cafeTitle');
  }, [setFocus]);

  return (
    <CreateCafeContainer>
      <Header title="카페 만들기" />

      <Section>
        <NumberTitleWrapper>
          <NumberTextWrapper>
            <NumberIcon />
            <NumberText>1</NumberText>
          </NumberTextWrapper>
          <NumberTitle>카페 이름을 입력해주세요.</NumberTitle>
        </NumberTitleWrapper>
        <CafeTitleNameForm onSubmit={handleSubmit(onSubmit)}>
          <Input
            id="cafeTitle"
            type="text"
            maxLength={15}
            length={cafeTitleLength}
            placeholder="카페 이름을 입력해주세요."
            errors={errors}
            register={register}
            handleClearButtonClick={handleClearButtonClick}
          />
        </CafeTitleNameForm>
      </Section>
      <CommonSpace />
      <Section>
        <NumberTitleWrapper>
          <NumberTextWrapper>
            <NumberIcon />
            <NumberText>2</NumberText>
          </NumberTextWrapper>
          <NumberTitle>카페 오픈일을 입력해주세요.</NumberTitle>
        </NumberTitleWrapper>
        <NumberSubTitle>
          나만의 기념일에 맞춰 카페를 오픈할 수 있어요.
        </NumberSubTitle>
        <CommonDatePicker
          currentDate={selectOpenDate}
          setCurrentDate={setSelectOpenDate}
        />
      </Section>
      <CommonSpace height={60} />

      <Section>
        <NumberTitleWrapper>
          <NumberTextWrapper>
            <NumberIcon />
            <NumberText>3</NumberText>
          </NumberTextWrapper>
          <NumberTitle>카페 테마를 선택해주세요.</NumberTitle>
        </NumberTitleWrapper>
        <div
          style={{
            height: 190,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f5f5f5',
            paddingBlock: 20,
            marginBottom: 20,
          }}
        >
          <span>카페 테마가 들어갈 영역입니다.</span>
        </div>
      </Section>

      <CommonButton
        fullWidth
        disabled={isConfirmButtonDisabled || !selectOpenDate}
        height={64}
        target="primary"
        label="확인"
        onClick={handleSubmit(onSubmit)}
      />
    </CreateCafeContainer>
  );
};

export default CreateCafe;
