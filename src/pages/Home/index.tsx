import React from 'react';

import styled from 'styled-components';

import TX from '@components/Text';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const BodyText = styled(TX.Body1)`
  text-align: center;
`;

const Home = () => {
  return (
    <Container>
      <BodyText>
        냥레터에서 사용할
        <br />
        닉네임을 입력해 주세요!
      </BodyText>
    </Container>
  );
};

export default Home;
