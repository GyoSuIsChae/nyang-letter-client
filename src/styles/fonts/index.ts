/* eslint-disable @typescript-eslint/restrict-template-expressions */
import LeeSeoyunWOFF from '@assets/fonts/LeeSeoyun.woff';
import NanumSquareRoundOTFB from '@assets/fonts/NanumSquareRoundOTFB.otf';
import NanumSquareRoundOTFR from '@assets/fonts/NanumSquareRoundOTFR.otf';
import NotoSansKRRegular from '@assets/fonts/NotoSansKRRegular.otf';

export default `
  @font-face {
    font-family: 'LeeSeoyun';
    font-weight: 400;
    font-style: normal;
    src: url(${LeeSeoyunWOFF}) format('woff');
  }

  @font-face {
    font-family: 'NanumSquareRoundOTFR';
    font-weight: 400;
    font-style: normal;
    src: url(${NanumSquareRoundOTFR}) format('otf');
  }

  @font-face {
    font-family: 'NanumSquareRoundOTFB';
    font-weight: 700;
    font-style: normal;
    src: url(${NanumSquareRoundOTFB}) format('otf');
  }

  @font-face {
    font-family: 'NotoSansKR-Regular';
    font-weight: 400;
    font-style: normal;
    src: url(${NotoSansKRRegular}) format('otf');
  }
`;
