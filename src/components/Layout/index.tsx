import React from 'react';
import { Outlet } from 'react-router-dom';

import styled from 'styled-components';

interface ILayoutProps {
  children?: React.ReactNode;
}

const MOBILE_WIDTH = 375;
const MAX_WIDTH = 768;

const Container = styled.div`
  position: relative;

  display: flex;
  flex: 1;
  flex-direction: column;

  width: 100%;
  max-width: ${MAX_WIDTH}px;
  min-width: ${MOBILE_WIDTH}px;
  height: 100%;
  margin: 0px auto;

  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 1 1 auto;

  width: 100%;
  height: 100%;

  overflow-y: scroll;
  overflow-x: hidden;
`;

const Layout: React.FC<ILayoutProps> = ({ children = null }) => (
  <Container>
    <Wrapper>{children || <Outlet />}</Wrapper>
  </Container>
);

export default Layout;
