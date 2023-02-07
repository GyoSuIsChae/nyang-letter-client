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
  ${DefaultTextCSS};

  font-family: 'LeeSeoyun';
  font-size: 1.75rem;
  line-height: 125%;
  letter-spacing: -0.01em;
`;

const Head1 = css`
  ${DefaultTextCSS};

  font-family: 'LeeSeoyun';
  font-size: 1.375rem;
  line-height: 130%;
  letter-spacing: -0.02em;
`;

const Head2 = css`
  ${DefaultTextCSS};

  font-family: 'LeeSeoyun';
  font-size: 1.375rem;
  line-height: 130%;
  letter-spacing: -0.02em;
`;

const Head3 = css`
  ${DefaultTextCSS};

  font-family: 'LeeSeoyun';
  font-size: 1.5rem;
  line-height: 130%;
  letter-spacing: -0.02em;
`;

const Head4 = css`
  ${DefaultTextCSS};

  font-family: 'LeeSeoyun';
  font-size: 1.625rem;
  line-height: 125%;
  letter-spacing: -0.01em;
`;

const SubHead1 = css`
  ${DefaultTextCSS};

  font-family: 'NanumSquareRoundOTFB';
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 0.875rem;
  line-height: 145%;
  letter-spacing: -0.02em;
`;

const SubHead2 = css`
  ${DefaultTextCSS};

  font-family: 'NanumSquareRoundOTFB';
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 1rem;
  line-height: -0.02em;
`;

const SubHead3 = css`
  ${DefaultTextCSS};

  font-family: 'NanumSquareRoundOTFB';
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 1.125rem;
  line-height: 145%;
  letter-spacing: -0.02em;
`;

const Body1 = css`
  ${DefaultTextCSS};

  font-family: 'NanumSquareRoundOTFR';
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: 0.875rem;
  line-height: 20px;
  letter-spacing: -0.02em;
`;

const Body2 = css`
  ${DefaultTextCSS};

  font-family: 'NanumSquareRoundOTFR';
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: 1rem;
  line-height: 20px;
  letter-spacing: -0.02em;
`;

const BodyText1 = css`
  ${DefaultTextCSS};

  font-family: 'NotoSansKR-Regular';
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: 1rem;
  line-height: 165%;
  letter-spacing: -0.02em;
`;

const LetterText1 = css`
  ${DefaultTextCSS};

  font-family: 'NotoSansKR-Regular';
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: 1rem;
  line-height: 200%;
  letter-spacing: -0.02em;
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
