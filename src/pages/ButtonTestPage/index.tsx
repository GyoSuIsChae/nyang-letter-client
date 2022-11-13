/* eslint-disable no-console */
import React from 'react';

import styled from 'styled-components';

import CommonButton, { UnderlineButton } from '@components/CommonButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ButtonTestPage = () => {
  return (
    <Container>
      <p>버튼 테스트 페이지</p>
      <CommonButton
        label="primary버튼"
        onClick={() => console.log('click')}
        fullWidth
        target="primary"
        wrapperStyle={{ color: 'red' }}
      />
      <CommonButton
        label="secondary버튼"
        onClick={() => console.log('click')}
        fullWidth
        target="secondary"
        wrapperStyle={{ color: 'blue', fontSize: '20px' }}
      />
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
        <CommonButton
          label="버튼"
          onClick={() => console.log('click')}
          fullWidth
          target="primary"
          inline
          wrapperStyle={{ color: 'red' }}
        />
        <CommonButton
          label="버튼"
          onClick={() => console.log('click')}
          fullWidth
          target="secondary"
          inline
          wrapperStyle={{ color: 'blue', fontSize: '20px' }}
        />
      </div>
      <UnderlineButton
        label="테스트 버튼"
        onClick={() => console.log('클릭')}
      />
    </Container>
  );
};

export default ButtonTestPage;
