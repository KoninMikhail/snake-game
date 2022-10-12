import styled from 'styled-components';
import { ITextAlignProps } from './TextAlign';

export const StyledTextAlign = styled.div<ITextAlignProps>`
  text-align: ${(props) => props.align};
`;
