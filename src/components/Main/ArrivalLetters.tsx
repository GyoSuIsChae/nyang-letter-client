// @ts-nocheck
import React, { MutableRefObject, useEffect, useRef, useState } from 'react';

import styled from 'styled-components';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.css';
import 'swiper/css/pagination';
import { TX } from '@components/Text';

SwiperCore.use([Pagination]);

const randomData = [
  {
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  },
  {
    id: 2,
    title: 'qui est esse',
  },
  {
    id: 3,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
  },
  {
    id: 4,
    title: 'eum et est occaecati',
  },
  {
    id: 5,
    title: 'nesciunt quas odio',
  },
  {
    id: 6,
    title: 'dolorem eum magni eos aperiam quia',
  },
  {
    id: 7,
    title: 'magnam facilis autem',
  },
];

const ITEM_SIZE = 100;
const ITEM_SIZE_X = 80;
const ITEM_SIZE_Y = 146;

const Containers = styled.div`
  flex: 2;
  height: 400px;
  background-color: lightblue;
  padding-inline: 2px;
  padding-block: 4px;
`;

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
// const getRandomPosition = (existingPositions) => {
//   const newPosition = {
//     x: Math.floor(Math.random() * 500),
//     y: Math.floor(Math.random() * 500),
//   };
//   const isOverlapping = existingPositions.some((position) => {
//     const dx = newPosition.x - position.x;
//     const dy = newPosition.y - position.y;
//     const distance = Math.sqrt(dx * dx + dy * dy);
//     return distance < 120;
//   });
//   if (isOverlapping) {
//     return getRandomPosition(existingPositions);
//   }
//   return newPosition;
// };

const itemstt = [
  {
    id: 1,
    text: 'Item 1',
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    backgroundColor: getRandomColor(),
  },
  {
    id: 2,
    text: 'Item 2',
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    backgroundColor: getRandomColor(),
  },
  {
    id: 3,
    text: 'Item 3',
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    backgroundColor: getRandomColor(),
  },
  {
    id: 4,
    text: 'Item 4',
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    backgroundColor: getRandomColor(),
  },
  {
    id: 5,
    text: 'Item 5',
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    backgroundColor: getRandomColor(),
  },
  {
    id: 6,
    text: 'Item 6',
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    backgroundColor: getRandomColor(),
  },
];

const SampleContent = ({ name, style }) => (
  <div
    style={{
      width: '120px',
      height: '120px',
      backgroundColor: getRandomColor(),
      ...style,
    }}
  >
    <TX.Body1>Sample Content {name}</TX.Body1>
  </div>
);

const Item = ({ id, position }) => {
  return (
    <div
      className="item"
      style={{
        position: 'absolute',
        backgroundColor: getRandomColor(),
        width: ITEM_SIZE_X,
        height: ITEM_SIZE_Y,
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {id}
    </div>
  );
};

function poissonDiscSampler(width, height, radius) {
  const k = 30; // maximum number of samples before rejection
  const radius2 = radius * radius;
  const R = 3 * radius2;
  const cellSize = radius * Math.SQRT1_2;
  const gridWidth = Math.ceil(width / cellSize);
  const gridHeight = Math.ceil(height / cellSize);
  const grid = new Array(gridWidth * gridHeight);
  const queue = [];
  let queueSize = 0;
  const samples = [];

  function far(x, y) {
    const i = (x / cellSize) | 0;
    const j = (y / cellSize) | 0;
    const i0 = Math.max(i - 2, 0);
    const j0 = Math.max(j - 2, 0);
    const i1 = Math.min(i + 3, gridWidth);
    const j1 = Math.min(j + 3, gridHeight);
    for (let j = j0; j < j1; ++j) {
      const o = j * gridWidth;
      for (let i = i0; i < i1; ++i) {
        const s = grid[o + i];
        if (s) {
          const dx = s[0] - x;
          const dy = s[1] - y;
          if (dx * dx + dy * dy < radius2) return false;
        }
      }
    }
    return true;
  }

  function sample(x, y) {
    const s = [x, y];
    console.log('sample', s);
    samples.push(s);
    queue.push(s);
    grid[((y / cellSize) | 0) * gridWidth + ((x / cellSize) | 0)] = s;
    queueSize++;
    return s;
  }

  // seed the process with the first sample
  sample(width / 2, height / 2);

  while (queueSize) {
    // pick a random existing sample from the queue
    const i = (Math.random() * queueSize) | 0;
    const s = queue[i];

    // try k new positions near the selected sample
    for (let j = 0; j < k; ++j) {
      const a = 2 * Math.PI * Math.random();
      const r = Math.sqrt(Math.random() * R + radius2);
      const x = s[0] + r * Math.cos(a);
      const y = s[1] + r * Math.sin(a);

      // reject candidates that are outside the allowed extent,
      // or closer than 2 * radius to any existing sample
      if (x >= 0 && x < width && y >= 0 && y < height && far(x, y)) {
        sample(x, y);
      }
    }

    // remove the selected sample from the queue
    queue[i] = queue[--queueSize];
    queue.length = queueSize;
  }
  console.log('samples: ', samples);

  return samples;
}

const test = [];
const retry = 0;
const generatePosition = (boundingRect, i, usedPositions) => {
  const CELL_SIZE = Math.sqrt(
    ITEM_SIZE_X * ITEM_SIZE_X + ITEM_SIZE_Y * ITEM_SIZE_Y,
  );
  const GRID_SIZE_X = Math.ceil(boundingRect.width / CELL_SIZE);
  const GRID_SIZE_Y = Math.ceil(boundingRect.height / CELL_SIZE);
  const grid = new Array(GRID_SIZE_X * GRID_SIZE_Y).fill(null);

  const randomPositionInCell = (cellX, cellY) => {
    const x = cellX * CELL_SIZE + Math.random() * (CELL_SIZE - ITEM_SIZE_X);
    const y = cellY * CELL_SIZE + Math.random() * (CELL_SIZE - ITEM_SIZE_Y);
    const minX = 0;
    const minY = 0;
    const maxX = boundingRect.width - ITEM_SIZE_X - 4;
    const maxY = boundingRect.height - ITEM_SIZE_Y - 4;

    return {
      x: Math.min(maxX, x),
      y: Math.min(maxY, y),
    };
  };

  let newPosition;
  let attempts = 0;

  while (attempts < 10000000) {
    const cellX = Math.floor(Math.random() * GRID_SIZE_X);
    const cellY = Math.floor(Math.random() * GRID_SIZE_Y);
    const cellIndex = cellY * GRID_SIZE_X + cellX;
    if (grid[cellIndex] === null) {
      newPosition = randomPositionInCell(cellX, cellY);
      const isOverlapping = test.some((position) => {
        const dx = newPosition.x - position.x;
        const dy = newPosition.y - position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < CELL_SIZE;
      });

      if (!isOverlapping) {
        console.log('newPosition:', i, attempts, newPosition);
        return newPosition;
      }
      grid[cellIndex] = newPosition;
    }

    attempts++;
  }
  console.log('grid:', grid);

  console.log('retryNewPosition:', i, attempts, newPosition);
  // return { x: 0, y: 0 };
  return newPosition;
};

const ArrivalLetters = () => {
  const [items, setItems] = useState([]);
  const itemsLetter = Array.from({ length: 20 }, (v, i) => i);

  useEffect(() => {
    const boundingRect = document
      .getElementById('container')
      .getBoundingClientRect();

    const newItems = Array.from({ length: 5 }, (v, i) => {
      const position = generatePosition(
        boundingRect,
        i,
        items.map((item) => item.position),
      );
      test.push(position);
      return {
        id: i,
        position,
      };
    });

    setItems(newItems);
  }, []);

  return (
    <Containers id="container">
      {items.map((item) => (
        <Item key={item.id} id={item.id} position={item.position} />
      ))}
    </Containers>
  );
};

export default ArrivalLetters;
