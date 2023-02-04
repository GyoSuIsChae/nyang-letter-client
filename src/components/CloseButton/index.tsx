/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import CloseButtonImage from '@assets/images/btn_close.png';

interface ICloseButton {
  style: React.CSSProperties;
}

const CloseButtonIcon = styled.img.attrs({
  src: CloseButtonImage,
  alt: '닫기',
})`
  width: 24px;
  height: 24px;

  cursor: pointer;
`;

const CloseButton = ({ style = {} }: ICloseButton) => {
  const navigate = useNavigate();

  const onCloseButtonClick = () => navigate(-1);

  return <CloseButtonIcon onClick={onCloseButtonClick} style={style} />;
};

export default CloseButton;
