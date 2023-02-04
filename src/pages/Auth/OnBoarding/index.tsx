import React from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import CommonButton from '@components/CommonButton';
import { TX, TextCSS } from '@components/Text';
import { PATH_NAMES } from '@constants/pages';

const FlexColumnCenterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TopWrapper = styled(FlexColumnCenterDiv)`
  gap: 20px;

  width: 100%;
`;

const Logo = styled(FlexColumnCenterDiv)`
  width: 200px;
  height: 120px;

  margin-bottom: 20px;
  background: #ececec;
  border: 1px solid #969696;
`;

const MiddleWrapper = styled(FlexColumnCenterDiv)`
  gap: 18px;

  margin-top: 120px;
`;

const AuthButton = styled.button`
  ${TextCSS.SubHead2}
`;

const Rectangle = styled.div`
  width: calc(100vw - 96px);
  height: 48px;

  background: #d9d9d9;

  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

const BottomWrapper = styled(FlexColumnCenterDiv)`
  position: absolute;
  bottom: 22px;

  gap: 2px;
`;

const BodyText = styled(TX.Body1)`
  color: ${({ theme }) => theme.colors.grey001};
`;

const HeadText = styled(TX.Head3)`
  color: ${({ theme }) => theme.colors.grey001};
`;

const OnBoarding: React.FC = () => {
  const navigate = useNavigate();

  const onAuthClick = () => navigate(PATH_NAMES.HOME);

  return (
    <FlexColumnCenterDiv>
      <TopWrapper>
        <Logo>
          <TX.SubHead1>로고</TX.SubHead1>
        </Logo>

        <CommonButton
          target="primary"
          label="냥레터가 뭔가요?"
          height={42}
          onClick={() => {}}
          wrapperStyle={{
            color: 'white',
          }}
        />
      </TopWrapper>

      <MiddleWrapper>
        <AuthButton onClick={onAuthClick}>로그인 / 회원가입</AuthButton>

        <div>
          <Rectangle />
          <Rectangle />
          <Rectangle />
        </div>
      </MiddleWrapper>

      <BottomWrapper>
        <BodyText>만든이들</BodyText>
        <HeadText>Team. 채교수수</HeadText>
      </BottomWrapper>
    </FlexColumnCenterDiv>
  );
};

export default OnBoarding;
