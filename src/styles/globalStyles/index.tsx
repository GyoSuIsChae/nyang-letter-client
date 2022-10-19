import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body,
  #root {
    height: 100%;
    min-height: 100%;
    cursor: default;
    margin: 0;
    padding: 0;
    
    &::-webkit-scrollbar {
      display: none;
      -ms-overflow-style: none;
      width: 0;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    outline: none;

    &:visited {
      color: inherit;
    }
  }

  li {
    list-style: none;
  }

  button {
    cursor: pointer;
    background: transparent;
    border: 0;
  }

    input {
    -webkit-appearance: none;
      -moz-appearance: none;
            appearance: none;
  }

  input::-ms-clear { 
    display: none; 
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
      -moz-appearance: none;
            appearance: none;
  }

  h1,
  h2,
  h3,
  p {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: middle;
  }
`;

export default GlobalStyles;
