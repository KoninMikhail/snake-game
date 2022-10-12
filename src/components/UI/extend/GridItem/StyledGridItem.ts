import styled from 'styled-components';
import { IGridItemProps } from './GridItem';

export const StyledGridItem = styled.div<IGridItemProps>`
  display: block;
  position: relative;
  grid-column: ${(props) => props?.gridColumn || 'auto'};
  grid-row: ${(props) => props?.gridRow || 'auto'};
  justify-self: ${(props) => props?.justify || 'auto'};
  align-self: ${(props) => props?.align || 'auto'};
`;
