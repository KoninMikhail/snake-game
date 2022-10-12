import { StyledTextAlign } from './StyledTextAlign';

/**
 * @typedef ITextAlignProps *
 * @property {('left' | 'center' | 'right')} - align - Text alignment style
 * @property {JSX.Element |  JSX.Element[] | string} - children - The children element.
 */
export interface ITextAlignProps {
  align: 'left' | 'right' | 'center';
  children?: JSX.Element | JSX.Element[] | string;
}

/**
 * Text Align
 *
 * Use for label alignment
 *
 * @param {ITextAlignProps} - Component properties
 * @returns {JSX.Element}
 */

export const TextAlign = ({ children, ...rest }: ITextAlignProps) => (
  <StyledTextAlign {...rest}>{children}</StyledTextAlign>
);
