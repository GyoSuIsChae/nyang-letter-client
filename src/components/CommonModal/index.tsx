/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from 'react';
import { CSSTransition } from 'react-transition-group';

import styled from 'styled-components';

import modalBigBg from '@assets/images/modal_bg_big.png';
import modalSmallBg from '@assets/images/modal_bg_small.png';
import Portal from '@components/Portal';

const transitionName = `Modal`;

interface IOverlay {
  duration: number;
}

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
  max-width: 456px;
  position: relative;
  width: 100%;
  margin-inline: 16px;
`;

interface ModalProps {
  button?: boolean;
}

const ModalWrapper = styled.div<ModalProps>`
  //border-radius: 8px;
  //box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  //background: #fff;

  background-image: url(${({ button }) =>
    button ? modalBigBg : modalSmallBg});
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  //height: 118px;
  //max-height: calc(100vh - 16px);

  overflow: hidden auto;
  position: relative;
  padding-block: 16px;
  padding-inline: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 12px;
  width: 100%;
  border-bottom: 1px solid #e5e5e5;
`;

const ModalBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-block: 12px;
  width: 100%;
`;

const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding-block: 12px;
  width: 100%;
`;

interface IProps {
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

const CommonModal = ({
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
}: IProps) => {
  return (
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
            {children || (
              <ModalWrapper button={!!(cancel || confirm)}>
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
              </ModalWrapper>
            )}
          </Container>
        </Overlay>
      </Portal>
    </CSSTransition>
  );
};

export default CommonModal;
