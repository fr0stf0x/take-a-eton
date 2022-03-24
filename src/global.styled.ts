import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Quicksand', sans-serif;
  }

  html {
    font-size: 15px;

    @media screen and (max-width: 768px) {
      font-size: 14px;
    }

    @media screen and (max-width: 425px) {
      font-size: 12px;
    }
  }

  .icon {
    width: 1rem;
    height: 1rem;
  }
`;

export default GlobalStyle;