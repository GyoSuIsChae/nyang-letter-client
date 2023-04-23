import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSpring, animated } from '@react-spring/web';
import styled from 'styled-components';

import BgMain from '@assets/images/bg_main.png';
import HamburgerImage from '@assets/images/btn_hamberger.png';
import LogoImage from '@assets/images/logo_sample.png';
import CommonSpace from '@components/CommonSpace';
import { ArrivalLetters } from '@components/Main';
import Letters from '@components/Main/Letters';
import { TX } from '@components/Text';

const MainContainer = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px 16px;
  background-image: url(${BgMain});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  margin-bottom: 10px;
`;

const HeaderInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  align-self: flex-end;
  margin-bottom: 9px;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 2px 10px 1px 10px;
  margin-right: 66px;
  border-radius: 20px;
  max-width: 195px;
  overflow: hidden;
`;
const HeaderInfo = styled(TX.Body1)`
  white-space: nowrap;
`;
const AnimatedHeaderInfo = animated(HeaderInfo);

const LogoButton = styled.img.attrs({
  src: LogoImage,
  alt: '로고',
})`
  width: 40px;
  height: 46px;
  cursor: pointer;
`;
const MenuButton = styled.img.attrs({
  src: HamburgerImage,
  alt: '사이드메뉴',
})`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

const HomeCafe = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
const HomeTitle = styled(TX.Display1)`
  -webkit-text-stroke-width: 0.2px;
`;
const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const OpenWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2d2218;
  border-radius: 45px;
  padding: 6px 20px;
  opacity: 0.7;
  margin-bottom: 4px;
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 0;
    height: 0;
    border-top: 6px solid #2d2218;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 6px solid transparent;
    transform: translate(0px, 100%);
  }
`;
const OpenText = styled(TX.SubHead1)`
  color: #ffffff;
`;

const Main = () => {
  const navigate = useNavigate();
  const [scrollKey, setScrollKey] = useState<number>(0);
  const [latestLetter, setLatestLetter] = useState<string>('000000000000');
  const [cafeTitle, setCafeTitle] =
    useState<string>('가가가가가가가가가가가가가가가');
  const [openDDay, setOpenDDay] = useState<number>(100);

  // const scrollDuration = (6000 / latestLetter.length) * 4;
  const onLogoButtonClick = () => {
    navigate(0);
  };
  // const textScrollAnim = useSpring({
  //   from: { transform: 'translate(2%,0)' },
  //   to: { transform: `translate(-${195 / latestLetter.length}%,0)` },
  //   config: { duration: scrollDuration },
  //   reset: true,
  //   reverse: scrollKey % 2 === 1,
  //   onRest: () => {
  //     setScrollKey((prev) => prev + 1);
  //   },
  // });
  return (
    <MainContainer>
      <Header>
        <LogoButton
          onClick={() => {
            onLogoButtonClick();
          }}
        />
        <HeaderInfoWrapper>
          {/* <AnimatedHeaderInfo style={textScrollAnim}> */}
          {`오늘 도착한 편지: ${latestLetter}`}
          {/* </AnimatedHeaderInfo> */}
        </HeaderInfoWrapper>
        <MenuButton
          onClick={() => {
            console.log('사이드바가 열림');
          }}
        />
      </Header>
      <HomeCafe>
        <HomeTitle>{cafeTitle}</HomeTitle>
        <HomeContent>
          <OpenWrapper>
            <OpenText>{`D - ${openDDay}`}</OpenText>
          </OpenWrapper>
          <div style={{ height: 160 }}>
            <img src="https://via.placeholder.com/220x160" alt="sample" />
          </div>
        </HomeContent>
      </HomeCafe>
      <CommonSpace height={12} />
      {/* <ArrivalLetters /> */}
      <Letters />
    </MainContainer>
  );
};

export default Main;
