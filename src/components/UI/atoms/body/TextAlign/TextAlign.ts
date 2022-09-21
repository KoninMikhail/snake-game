import styled from 'styled-components';

/**
 * @typedef ITextAlignProps *
 * @property {('left' | 'center' | 'right')} - align - Text alignment style
 * @property {JSX.Element=} - children - The children element.
 */
interface ITextAlignProps {
  align: 'left' | 'right' | 'center';
  children?: JSX.Element | JSX.Element[];
}

/**
 * Text Align
 *
 * @description Use for label alignment
 *
 * @param {ITextAlignProps} - Component properties
 * @returns {JSX.Element}
 */
export const TextAlign = styled.div<ITextAlignProps>`
  text-align: ${(props) => props.align};
`;
