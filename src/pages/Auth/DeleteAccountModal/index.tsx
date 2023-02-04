import React, { useState } from 'react';

import styled from 'styled-components';

import CircleImage from '@components/CircleImage';
import CloseButton from '@components/CloseButton';
import CommonButton, { UnderlineButton } from '@components/CommonButton';
import Modal from '@components/Modal';
import { TX, TextCSS } from '@components/Text';

const FlexColumnCenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

const FlexRowDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DeleteAccountButton = styled.button`
  ${TextCSS.SubHead2}
`;

const ModalInner = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CircleImageWrapper = styled.div`
  position: absolute;
  top: -54px;
`;

const ModalHeader = styled(FlexRowDiv)`
  margin-bottom: 26px;s
`;

const ModalContentContainer = styled(FlexColumnCenterDiv)`
  height: 100%;
  justify-content: space-between;
  margin-top: 3vh;

  gap: 21px 0px;
`;

const ModalContent = styled(FlexColumnCenterDiv)`
  flex: 1;
  gap: 4px 0px;
`;

const ModalTitle = styled(TX.SubHead3)`
  color: ${({ theme }) => theme.colors.grey003};
`;

const ModalSubTitle = styled(TX.Body2)`
  color: ${({ theme }) => theme.colors.grey002};
`;

const ModalBottom = styled(FlexColumnCenterDiv)`
  gap: 12px 0px;
`;

const DeleteAccountModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <DeleteAccountButton onClick={handleOpen}>회원 탈퇴</DeleteAccountButton>

      <Modal
        selector="#modal-root"
        isOpen={isOpen}
        size="big"
        onClose={handleOpen}
      >
        <ModalInner>
          <ModalHeader>
            <CircleImageWrapper>
              <CircleImage size={109} />
            </CircleImageWrapper>

            <CloseButton
              style={{ position: 'absolute', top: 17, right: 17 }}
              onClick={handleOpen}
            />
          </ModalHeader>

          <ModalContentContainer>
            <ModalContent>
              <ModalTitle>탈퇴하시겠습니까?</ModalTitle>
              <ModalSubTitle>ㄱr 지 ㅁr....☆</ModalSubTitle>
            </ModalContent>

            <ModalBottom>
              <CommonButton
                fullWidth
                height={56}
                target="primary"
                label="확인"
                onClick={() => {}}
              />

              <UnderlineButton label="이어서 만들기" onClick={handleOpen} />
            </ModalBottom>
          </ModalContentContainer>
        </ModalInner>
      </Modal>
    </>
  );
};

export default DeleteAccountModal;
