/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from 'react';
import { CSSTransition } from 'react-transition-group';

import styled from 'styled-components';

import tutorialPopupBg from '@assets/images/tutorial_box.png';
import Portal from '@components/Portal';

const transitionName = 'Popup';

interface IOverlay {
  duration: number;
}

interface ITutorialPopupProps {
  children?: React.ReactNode;
  selector?: string;
  onClose: () => void;
}

const FlexColumnCenterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Overlay = styled.div<IOverlay>`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  height: 100vh;

  display: flex;
  flex-direction: column;
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

const TutorialCharacterWrapper = styled(FlexColumnCenterDiv)`
  position: absolute;
  bottom: -61px;

  align-self: center;

  margin-top: 24px;
`;

const TutorialCharacter = styled.img`
  width: 27.3vh;
  aspect-ratio: 1;

  border-radius: 50%;

  background: #d9d9d9;
  border: 1px solid #727272;
`;

const Container = styled.div`
  position: relative;
  top: 5.69vh;

  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 456px;
  height: 100%;

  padding-inline: 16px;
`;

const PopupWrapper = styled(FlexColumnCenterDiv)`
  position: relative;
  justify-content: flex-start;

  z-index: ${({ theme }) => theme.zIndexLayer.level10};

  background-image: url(${tutorialPopupBg});
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  aspect-ratio: 0.65;

  padding-block: 16px;
  padding: 20px;
`;

const TutorialPopup = ({
  children = null,
  selector = undefined,
  onClose,
}: ITutorialPopupProps) => (
  <CSSTransition classNames={transitionName} in timeout={300} unmountOnExit>
    <Portal selector={selector}>
      <Overlay duration={300}>
        <Dim onClick={onClose} />

        <Container>
          <PopupWrapper>{children}</PopupWrapper>

          <TutorialCharacterWrapper>
            <TutorialCharacter />
          </TutorialCharacterWrapper>
        </Container>
      </Overlay>
    </Portal>
  </CSSTransition>
);

export default TutorialPopup;
