// fonts.ts
import { createGlobalStyle } from 'styled-components';
import PixeloidBoldWoff2 from 'static/fonts/pixeloidsans-bold-webfont.woff2';
import PixeloidBoldWoff from 'static/fonts/pixeloidsans-bold-webfont.woff';

export const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'pixeloid_bold';
    font-weight: normal;
    font-style: normal;
    src: url(${PixeloidBoldWoff2}) format('woff2'),
    url(${PixeloidBoldWoff}) format('woff');
  }
`;
