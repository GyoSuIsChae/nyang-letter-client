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

  font-size: ${({ theme }) => theme.fontSizes.xxl}px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 34px;
`;

const Head1 = css`
  ${DefaultTextCSS}

  font-size: ${({ theme }) => theme.fontSizes.md}px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 26px;
  letter-spacing: -1%;
`;

const Head2 = css`
  ${DefaultTextCSS}

  font-size: ${({ theme }) => theme.fontSizes.lg}px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 26px;
`;

const Head3 = css`
  ${DefaultTextCSS}

  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 30px;
  letter-spacing: -2%;
`;

const SubTitle1 = css`
  ${DefaultTextCSS}

  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 18.2px;
`;

const SubTitle2 = css`
  ${DefaultTextCSS}

  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 18.2px;
`;

const Body1 = css`
  ${DefaultTextCSS}

  font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 20px;
`;

const Body2 = css`
  ${DefaultTextCSS}

  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 20px;
`;

const BodyText1 = css`
  ${DefaultTextCSS}

  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 26px;
`;

const TextCSS = {
  Display1,
  Head1,
  Head2,
  Head3,
  SubTitle1,
  SubTitle2,
  Body1,
  Body2,
  BodyText1,
};

export default TextCSS;
