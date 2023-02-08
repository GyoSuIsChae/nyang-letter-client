/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from 'react';
import { CSSTransition } from 'react-transition-group';

import styled from 'styled-components';

import modalBigBg from '@assets/images/square_popup_big.png';
import modalMediumBg from '@assets/images/square_popup_mid.png';
import modalSmallBg from '@assets/images/square_popup_small.png';
import Portal from '@components/Portal';

const transitionName = 'Modal';

interface IOverlay {
  duration: number;
}

interface IModalWrapperProps {
  size?: string;
}

interface IProps {
  size?: 'small' | 'medium' | 'big';
  children?: React.ReactNode;
  selector?: string;
  isOpen: boolean;
  onClose: () => void;
  appearDuration?: number;
  modalIcon?: React.ReactNode;
  title?: string;
  description?: string;
  cancel?: string;
  confirm?: string;
  onConfirm?: () => void;
}

const getModalBackgroundImage = (size = 'small') => {
  switch (size) {
    case 'small':
      return modalSmallBg;

    case 'medium':
      return modalMediumBg;

    case 'big':
      return modalBigBg;

    default:
      return modalSmallBg;
  }
};

const getModalBackgroundAspectRatio = (size = 'small') => {
  switch (size) {
    case 'small':
      return 2.9;

    case 'medium':
      return 1.87;

    case 'big':
      return 1.35;

    default:
      return 2.9;
  }
};

const FlexColumnCenterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const FlexRowDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Overlay = styled.div<IOverlay>`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  &.${transitionName}-enter {
    opacity: 0;
  }

  &.${transitionName}-enter-active {
    opacity: 1;
    transition: opacity ${(props) => props.duration}ms;
  }

  &.${transitionName}-exit {
    opacity: 1;
  }

  &.${transitionName}-exit-active {
    opacity: 0;
    transition: opacity ${(props) => props.duration}ms;
  }
`;

const Dim = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 456px;

  padding: 16px;
`;

const ModalWrapper = styled(FlexColumnCenterDiv)<IModalWrapperProps>`
  position: relative;

  background-image: url(${({ size }) => getModalBackgroundImage(size)});
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  aspect-ratio: ${({ size }) => getModalBackgroundAspectRatio(size)};

  padding-block: 16px;
  padding: 20px;
`;

const ModalHeader = styled(FlexRowDiv)`
  padding-block: 12px;
  width: 100%;
  border-bottom: 1px solid #e5e5e5;
`;

const ModalBody = styled(FlexColumnCenterDiv)`
  padding-block: 12px;
  width: 100%;
`;

const ModalFooter = styled(FlexRowDiv)`
  flex-direction: row;
  padding-block: 12px;
  width: 100%;
`;

const Modal = ({
  size = 'small',
  children = null,
  selector = undefined,
  isOpen,
  onClose,
  appearDuration = 300,
  modalIcon = null,
  title = '',
  description = '',
  cancel = '',
  confirm = '',
  onConfirm = () => {},
}: IProps) => (
  <CSSTransition
    classNames={transitionName}
    in={isOpen}
    timeout={appearDuration}
    unmountOnExit
  >
    <Portal selector={selector}>
      <Overlay duration={appearDuration}>
        <Dim onClick={onClose} />
        <Container>
          <ModalWrapper size={size}>
            {children || (
              <>
                <ModalHeader>
                  <div style={{ width: 24, height: 24 }} />
                  {modalIcon && modalIcon}
                  <div style={{ width: 24, height: 24 }}>X</div>
                </ModalHeader>

                <ModalBody>
                  <h2>{title}</h2>
                  <p>{description}</p>
                </ModalBody>

                {cancel || confirm ? (
                  <ModalFooter>
                    {/* TODO: 버튼 컴포넌트로 적용하기 */}
                    {confirm && (
                      <button type="button" onClick={onConfirm}>
                        {confirm}
                      </button>
                    )}

                    {cancel && (
                      <button type="button" onClick={onClose}>
                        {cancel}
                      </button>
                    )}
                  </ModalFooter>
                ) : null}
              </>
            )}
          </ModalWrapper>
        </Container>
      </Overlay>
    </Portal>
  </CSSTransition>
);

export default Modal;
