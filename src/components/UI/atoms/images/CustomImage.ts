import styled from 'styled-components';

/**
 * @typedef ICustomImageProps
 *
 * @property {string} src - The image src
 * @property {string} width - The image width (css rules)
 * @property {string=} height - The image height (css rules)
 * @property {string} alt - The image alt
 */
interface ICustomImageProps {
  src: string;
  width: string;
  height?: string;
  alt?: string;
}

/**
 * CustomImage
 *
 * @description Use for image on the page
 *
 * @param {ICustomImageProps} - Component properties
 * @returns {JSX.Element}
 */
export const CustomImage = styled.img.attrs<ICustomImageProps>((props) => ({
  src: props.src,
  alt: props.alt || '',
}))`
  width: ${(props) => props.width};
  height: ${(props) => props.height || 'auto'};
`;
