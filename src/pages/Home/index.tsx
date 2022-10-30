import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Home = () => {
  return (
    <Container>
      <p>Nyang Letter 시작</p>
    </Container>
  );
};

export default Home;
