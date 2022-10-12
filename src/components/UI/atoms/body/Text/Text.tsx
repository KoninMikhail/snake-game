import { StyledText } from './StyledText';
import { ElementType } from 'react';

export interface ITextProps {
  as?: ElementType;
  children?: JSX.Element | JSX.Element[] | string;
}

/**
 * Text
 *
 * Use for add text content
 *
 * @returns {JSX.Element}
 */

export const Text = ({ as, children }: ITextProps) => <StyledText as={as}>{children}</StyledText>;
