import React from 'react';

import styled from 'styled-components';

import { TX } from '@components/Text';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  gap: 23px 0px;
`;

const Text = styled(TX.Head2)`
  color: ${({ theme }) => theme.colors.grey004};
`;

const MakingCafeImage = styled.img.attrs({
  alt: '카페 만들기 이미지',
})`
  width: 219px;
  align-self: center;

  background-color: #ececec;
  object-fit: contain;
  aspect-ratio: 1.61;
`;

const Step3 = () => (
  <Container>
    <Text>
      카페를 만들고 나면 공유하기 버튼으로 <br /> 지인, 친구, 가족에게
      <br /> 나만의 기념일 카페 링크를
      <br /> 마구마구 공유할 수 있다냥!
    </Text>

    <Text>
      그러면 고양이들이 편지를 들고 <br /> 카페 오픈일을 함께 기다려 줄 거다냥.
    </Text>
    <MakingCafeImage />
  </Container>
);

export default Step3;
