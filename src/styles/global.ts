import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  html, body, #root {
    min-height: 100%;
  }
  body {
    width: 100%;
    background: black;

    color: ${(props) => props.theme.colors.white};
    font-family: ${(props) => props.theme.fontFamily.sans};
   
    margin: 0;
    padding: 0;

    *::selection
    {
      color: ${({ theme }) => theme.colors.black};
      text-shadow: none;
      background: white;
    }
  }
`;
