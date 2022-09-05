import LogoImageSrc from 'assets/images/Identity/Logo.png';
import { CustomImage } from '../../atoms/images/CustomImage';

/**
 * @typedef ILogoImageProps
 * @property {string} width - The width of the logo image (css: width property)
 * @property {string=} height - The height of the logo image (css: height property)
 * @property {string=} alt - The alt of the logo image
 */
interface ILogoImageProps {
  width: string;
  height?: string;
  alt?: string;
}

/**
 * Logo image
 *
 * Use for displaying the logo image
 *
 * @param {ILogoImageProps} props - Properties
 * @return {JSX.Element}
 */
export const LogoImage = (props: ILogoImageProps): JSX.Element => (
  <CustomImage src={LogoImageSrc} width={props.width} height={props.height} alt={props.alt} />
);
