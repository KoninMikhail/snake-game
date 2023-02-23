// global.ts
import { createGlobalStyle } from 'styled-components';
import { up } from 'styled-breakpoints';

/* Creating a global style for the app. */
export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  :root {
    background-color: black;
  }

  html {
    margin: 0;
    height: 100%;
  }

  body {
    margin: 0;
    width: 100%;
    font-size: ${({ theme }) => theme.typography.fontSize.body.small};
    height: 100%;
    line-height: 1.3;
    color: ${({ theme }) => theme.colors.body};
    background-color: black;
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    user-select: none;
    overscroll-behavior: contain;
    overflow: hidden;

    ${up('md')} {
      font-size: ${({ theme }) => theme.typography.fontSize.body.middle};
    }

    ${up('xl')} {
      font-size: ${({ theme }) => theme.typography.fontSize.body.large};
    }
  }

  #root {
    width: inherit;
    height: inherit;
    display: block;
    position: relative;
  }
`;
