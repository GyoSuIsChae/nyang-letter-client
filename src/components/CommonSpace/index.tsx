import React from 'react';

import styled from 'styled-components';

interface Props {
  height?: number;
}

const CS = styled.div<Props>`
  height: ${({ height = 30 }) => height}px;
`;

const CommonSpace = ({ height = 30 }: Props) => {
  return <CS height={height} />;
};

export default CommonSpace;
