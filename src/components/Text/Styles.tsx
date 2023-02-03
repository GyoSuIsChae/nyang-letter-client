import { css } from 'styled-components';

interface TextProps {
  color?: string;
}

const DefaultTextCSS = css<TextProps>`
  display: inline-flex;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  color: ${({ color, theme }) => color || theme.colors.black001};
`;

const Display1 = css`
  ${DefaultTextCSS}

  font-family: 'LeeSeoyun';
  font-size: ${({ theme }) => theme.fontSizes.xxxl}px;
  line-height: 125%;
  letter-spacing: -1%;
`;

const Head1 = css`
  ${DefaultTextCSS}

  font-family: 'LeeSeoyun';
  font-size: ${({ theme }) => theme.fontSizes.lg}px;
  line-height: 130%;
  letter-spacing: -2%;
`;

const Head2 = css`
  ${DefaultTextCSS}

  font-family: 'LeeSeoyun';
  font-size: ${({ theme }) => theme.fontSizes.lg}px;
  line-height: 130%;
  letter-spacing: -2%;
`;

const Head3 = css`
  ${DefaultTextCSS}

  font-family: 'LeeSeoyun';
  font-size: ${({ theme }) => theme.fontSizes.mxld}px;
  line-height: 130%;
  letter-spacing: -2%;
`;

const Head4 = css`
  ${DefaultTextCSS}

  font-family: 'LeeSeoyun';
  font-size: ${({ theme }) => theme.fontSizes.xxl}px;
  line-height: 125%;
  letter-spacing: -1%;
`;

const SubHead1 = css`
  ${DefaultTextCSS}

  font-family: 'NanumSquareRoundOTFB';
  font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 145%;
  letter-spacing: -2%;
`;

const SubHead2 = css`
  ${DefaultTextCSS}

  font-family: 'NanumSquareRoundOTFB';
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: -2%;
`;

const SubHead3 = css`
  ${DefaultTextCSS}

  font-family: 'NanumSquareRoundOTFB';
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 145%;
  letter-spacing: -2%;
`;

const Body1 = css`
  ${DefaultTextCSS}

  font-family: 'NanumSquareRoundOTFR';
  font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 20px;
  letter-spacing: -0.2%;
`;

const Body2 = css`
  ${DefaultTextCSS}

  font-family: 'NanumSquareRoundOTFR';
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 20px;
  letter-spacing: -0.2%;
`;

const BodyText1 = css`
  ${DefaultTextCSS}

  font-family: 'NotoSansKR-Regular';
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 165%;
  letter-spacing: -0.2%;
`;

const LetterText1 = css`
  ${DefaultTextCSS}

  font-family: 'NotoSansKR-Regular';
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 200%;
  letter-spacing: -0.2%;
`;

const TextCSS = {
  Display1,
  Head1,
  Head2,
  Head3,
  Head4,
  SubHead1,
  SubHead2,
  SubHead3,
  Body1,
  Body2,
  BodyText1,
  LetterText1,
};

export default TextCSS;
