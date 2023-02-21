// fonts.ts
import { createGlobalStyle } from 'styled-components';
import PixeloidBoldWoff2 from '@static/./fonts/pixeloidsans-bold-webfont.woff2';
import PixeloidBoldWoff from '@static/./fonts/pixeloidsans-bold-webfont.woff';
import PixeloidWoff from '@static/./fonts/PixeloidSans.woff';
import PixeloidWoff2 from '@static/./fonts/PixeloidSans.woff2';
import PixeloidTTF from '@static/./fonts/PixeloidSans.ttf';
import PixeloidSVG from '@static/./fonts/PixeloidSans.svg';
import PixeloidEOT from '@static/./fonts/PixeloidSans.eot';

export const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'pixeloid_bold';
    font-weight: normal;
    font-style: normal;
    src: url(${PixeloidBoldWoff2}) format('woff2'),
    url(${PixeloidBoldWoff}) format('woff');
  }

  @font-face {
    font-family: 'pixeloid';
    src: url('${PixeloidEOT}');
    src: url('${PixeloidEOT}?#iefix') format('embedded-opentype'),
    url('${PixeloidSVG}#PixeloidSans') format('svg'),
    url(${PixeloidTTF}) format('truetype'),
    url(${PixeloidWoff}) format('woff'),
    url(${PixeloidWoff2}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }
`;
