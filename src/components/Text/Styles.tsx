import { css } from 'styled-components';

interface TextProps {
  color?: string;
}

// @TODO: 소소가 Typography 가이드 만들어 주면 그걸로 바꾸어 줘야 함
const DefaultTextCSS = css<TextProps>`
  display: inline-flex;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  color: ${({ color }) => color};
`;

const H1 = css`
  ${DefaultTextCSS}

  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 29px;
`;

const SubTitle1 = css`
  ${DefaultTextCSS}

  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 18px;
`;

const Body1 = css`
  ${DefaultTextCSS}

  font-size: ${({ theme }) => theme.fontSizes.lg}px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 21px;
`;

const Body2 = css`
  ${DefaultTextCSS}

  font-size: ${({ theme }) => theme.fontSizes.md}px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 19px;
`;

const Body3 = css`
  ${DefaultTextCSS}

  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 17px;
`;

const TextCSS = {
  H1,
  SubTitle1,
  Body1,
  Body2,
  Body3,
};

export default TextCSS;
