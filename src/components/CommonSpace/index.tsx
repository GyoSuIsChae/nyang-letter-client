import React from 'react';

import styled from 'styled-components';

const CS = styled.div<{ height?: number }>`
  height: ${({ height = 30 }) => height}px;
`;

const CommonSpace = ({ height = 30 }: { height?: number }) => {
  return <CS height={height} />;
};

export default CommonSpace;
