import React from 'react';

import styled from 'styled-components';

import { TX } from '@components/Text';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  gap: 32px 0px;
`;

const HeadText = styled(TX.Head4)`
  display: block;
  color: ${({ theme }) => theme.colors.grey004};

  strong {
    font-weight: normal;
    color: ${({ theme }) => theme.colors.black001};
  }
`;

const Text = styled(TX.Head2)`
  color: ${({ theme }) => theme.colors.grey004};
`;

const Step1 = () => (
  <Container>
    <HeadText>
      냥레터에 온 걸 환영한다냥!
      <br />
      냥레터는 <strong>기념일</strong>
      <br />
      <strong>편지 배달</strong> 서비스다냥.
    </HeadText>

    <Text>
      나만의 기념일 카페를 만들고
      <br />
      링크를 공유하면
      <br />
      D-DAY 전까지 가족, 지인, 친구들에게
      <br />
      편지를 받아볼 수 있다냥.
    </Text>
  </Container>
);

export default Step1;
