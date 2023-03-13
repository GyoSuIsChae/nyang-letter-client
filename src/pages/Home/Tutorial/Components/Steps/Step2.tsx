import React from 'react';

import styled from 'styled-components';

import MakingCafeImageSrc from '@assets/images/img_making_cafe.png';
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
  src: MakingCafeImageSrc as string,
  alt: '카페 만들기 이미지',
})`
  width: calc(100% - 40px - 40px);
  align-self: center;

  object-fit: contain;
  aspect-ratio: 1.007;
`;

const Step2 = () => (
  <Container>
    <Text>
      먼저 카페 이름을 입력하고
      <br />
      기념일을 입력한다냥!
      <br /> 그리고 마음에 드는 카페를 고르면 <br /> 카페 오픈 준비가 끝난다냥!
    </Text>

    <MakingCafeImage />
  </Container>
);

export default Step2;
