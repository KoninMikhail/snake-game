import { StyledCustomImage } from './StyledCustomImage';

/**
 * @typedef ICustomImageProps
 *
 * @property {string} src - The image src
 * @property {string} width - The image width (css rules)
 * @property {string=} height - The image height (css rules)
 * @property {string} alt - The image alt
 */
export interface ICustomImageProps {
  src: string;
  width: string;
  height?: string;
  alt?: string;
}

/**
 * CustomImage
 *
 * Use for image on the page
 *
 * @param {ICustomImageProps} props- Component properties
 * @returns {JSX.Element}
 */
export const CustomImage = (props: ICustomImageProps): JSX.Element => (
  <StyledCustomImage {...props} />
);
