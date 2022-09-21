import styled from 'styled-components';

/**
 * @typedef IBackgroundImageProps
 *
 * @property {string} src - The image src
 * @property {string=} size - The image size (css rules)
 * @property {string=} position - The image position (css rules)
 */
interface IBackgroundImageProps {
  src: string;
  size?: string;
  position?: string;
}

/**
 * BackgroundImage
 *
 * @description Use for add background image
 *
 * @param {IBackgroundImageProps} - Component properties
 * @returns {JSX.Element}
 */
export const BackgroundImage = styled.div<IBackgroundImageProps>`
  background-image: url(${({ src }) => src || ''});
  background-position: ${({ position }) => position || 'center center'};
  background-size: ${({ size }) => size || 'cover'};
  width: inherit;
  height: inherit;
`;
