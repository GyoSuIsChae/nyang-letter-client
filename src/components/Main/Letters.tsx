import React from 'react';

import styled from 'styled-components';

import useScreenSize from '@hooks/useScreenSize';
import { generateRandomPositions } from '@utils/Letter';

const GAP = 16;

const LETTER_COUNT = 5;

const ASPECT_RATIO = {
  CONTAINER: 0.82,
};

const LETTER_SIZE = {
  WIDTH: 80,
  HEIGHT: 146,
};

const Container = styled.div`
  position: relative;

  background: rgba(255, 0, 0, 0.4);
`;

const LetterItem = styled.div`
  position: absolute;

  background: #ececec;
  border: 1px solid #9b9b9b;
`;

const Letters: React.FC = () => {
  const { width } = useScreenSize();

  const CONTAINER_SIZE = {
    WIDTH: width - GAP * 2,
    HEIGHT: (width - GAP * 2) / ASPECT_RATIO.CONTAINER,
  };

  const positions = generateRandomPositions(
    LETTER_COUNT,
    LETTER_SIZE.WIDTH,
    LETTER_SIZE.HEIGHT,
    CONTAINER_SIZE.WIDTH,
    CONTAINER_SIZE.HEIGHT,
  );

  return (
    <Container
      style={{
        width: `${CONTAINER_SIZE.WIDTH}px`,
        height: `${CONTAINER_SIZE.HEIGHT}px`,
      }}
    >
      {positions.map((position, index) => (
        <LetterItem
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: `${LETTER_SIZE.WIDTH}px`,
            height: `${LETTER_SIZE.HEIGHT}px`,
          }}
        />
      ))}
    </Container>
  );
};

export default Letters;
