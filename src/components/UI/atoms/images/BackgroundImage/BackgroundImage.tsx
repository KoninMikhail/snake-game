import { StyledBackgroundImage } from './StyledBackgroundImage';

/**
 * @typedef IBackgroundImageProps
 *
 * @property {string} src - The image src
 * @property {string=} size - The image size (css rules)
 * @property {string=} position - The image position (css rules)
 * @property {JSX.Element | JSX.Element[]} children - The children elements.
 */
export interface IBackgroundImageProps {
  src: string;
  size?: string;
  position?: string;
  children: JSX.Element | JSX.Element[];
}

/**
 * BackgroundImage
 *
 * Use for add background image
 *
 * @param {IBackgroundImageProps} props- Component properties
 * @returns {JSX.Element}
 */
export const BackgroundImage = ({ children, ...rest }: IBackgroundImageProps): JSX.Element => (
  <StyledBackgroundImage {...rest}>{children}</StyledBackgroundImage>
);
