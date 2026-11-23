import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 20px;
    font-family: Arial, sans-serif;
    background-color: #fff6d9;
    color: #000;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  h2 {
    margin: 0;
  }
`;
