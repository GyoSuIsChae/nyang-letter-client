import React from 'react';

import styled, { css } from 'styled-components';

interface ICircleImageProps {
  url?: string;
  size?: number;
}

const Image = styled.img<ICircleImageProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;

  ${({ url }) => css`
    ${url
      ? `content: url(${url});`
      : `background-color: #d9d9d9; border: 1px solid #727272;`}
  `}
`;

const CircleImage = ({ url = '', size = 84 }: ICircleImageProps) => (
  <Image url={url} size={size} />
);

export default CircleImage;
