import React from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: React.ReactNode;
  selector?: string;
}

const Portal = ({ children, selector }: Props) => {
  const rootElement = selector && document.querySelector(selector);

  if (rootElement) {
    return createPortal(children, rootElement);
  }
  return <>{children}</>;
};

Portal.defaultProps = {
  selector: null,
};

export default Portal;
