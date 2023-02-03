/* eslint-disable @typescript-eslint/restrict-template-expressions */
import LeeSeoyunOTF from '@assets/fonts/LeeSeoyun.otf';
import NanumSquareRoundOTFB from '@assets/fonts/NanumSquareRoundOTFB.otf';
import NanumSquareRoundOTFR from '@assets/fonts/NanumSquareRoundOTFR.otf';
import NotoSansKRRegular from '@assets/fonts/NotoSansKRRegular.otf';

export default `
  @font-face {
    font-family: 'LeeSeoyun';
    font-weight: 400;
    font-style: normal;
    src: url(${LeeSeoyunOTF}) format('otf');
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
