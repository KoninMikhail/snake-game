// global.ts
import { createGlobalStyle } from 'styled-components';
import { font_color, font_family_body, font_size_body, font_size_body_desktop } from './variables';
import { up } from 'styled-breakpoints';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    margin: 0;
    height: 100%;
  }

  body {
    margin: 0;
    width: 100%;
    font-size: ${font_size_body};
    height: 100%;
    color: ${font_color};
    background-color: black;
    font-family: ${font_family_body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    user-select: none;
    overscroll-behavior: contain;

    ${up('xl')} {
      font-size: ${font_size_body_desktop};
    }
  }

  #root {
    width: inherit;
    height: inherit;
    display: block;
    position: relative;
  }
`;
