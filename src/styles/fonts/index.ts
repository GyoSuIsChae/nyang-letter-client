import LeeSeoyunWOFF from '@assets/fonts/LeeSeoyun.woff';
import NanumSquareRoundWOFFB from '@assets/fonts/NanumSquareRoundB.woff';
import NanumSquareRoundOTFB from '@assets/fonts/NanumSquareRoundOTFB.otf';
import NanumSquareRoundOTFR from '@assets/fonts/NanumSquareRoundOTFR.otf';
import NanumSquareRoundWOFFR from '@assets/fonts/NanumSquareRoundR.woff';
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
    src: url(${NanumSquareRoundOTFR}) format('otf'),
        url(${NanumSquareRoundWOFFR}) format('woff');
  }

  @font-face {
    font-family: 'NanumSquareRoundOTFB';
    font-weight: 700;
    font-style: normal;
    src: url(${NanumSquareRoundOTFB}) format('otf'),
    url(${NanumSquareRoundWOFFB}) format('woff');
  }

  @font-face {
    font-family: 'NotoSansKR-Regular';
    font-weight: 400;
    font-style: normal;
    src: url(${NotoSansKRRegular}) format('otf');
  }
`;
