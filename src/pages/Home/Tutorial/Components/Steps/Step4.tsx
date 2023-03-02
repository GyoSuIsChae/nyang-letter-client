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

const Text = styled(TX.Head2)`
  color: ${({ theme }) => theme.colors.grey004};
`;

const HeadText = styled(TX.Head4)``;

const Step4 = () => (
  <Container>
    <Text>
      이렇게 모아진 편지들은 <br />
      카페 오픈일, 즉 카페를 만들 때 설정한
      <br /> 기념일 전까지는 열어볼 없다냥! <br />
      오픈일에 맞춰 편지를 열어보면 <br />
      더욱 특별하고 기억에 남는 기념일이 <br />될 거다냥.
    </Text>

    <HeadText>
      그럼 이제 기념일 카페를 만들러 <br />가 볼까냥?
    </HeadText>
  </Container>
);

export default Step4;
