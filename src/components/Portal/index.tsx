import React from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
  children: React.ReactNode;
  selector?: string;
}

const Portal = ({ children, selector = undefined }: IPortalProps) => {
  const rootElement = selector && document.querySelector(selector);

  if (rootElement) {
    return createPortal(children, rootElement);
  }

  return <>{children}</>;
};

export default Portal;
