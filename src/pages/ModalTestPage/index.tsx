import React, { FC, useState } from 'react';

import styled from 'styled-components';

import CommonModal from '@components/CommonModal';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Button = styled.button`
  width: 280px;
  height: 68px;
  border-radius: 12px;
  color: #fff;
  background-color: #3d6afe;
  margin: 0;
  border: none;
  font-size: 24px;

  &:active {
    opacity: 0.8;
  }
`;

const ModalTestPage: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <Button onClick={handleOpen}>Open Modal</Button>
      <CommonModal
        selector="#modal-root"
        isOpen={isOpen}
        onClose={handleClose}
        modalIcon={<div>Icon</div>}
        title="카페만들기를 그만두고 나갈까요?"
        description="입력하신 내용은 저장되지 않아요."
        cancel="나가기"
        confirm="이어서 만들기"
        onConfirm={handleClose}
      />
    </Container>
  );
};

export default ModalTestPage;
