import styled from 'styled-components';
import { gap } from '../../../../styles/variables';
import { IGridProps } from './Grid';

export const StyledGrid = styled.div<IGridProps>`
  display: grid;
  position: relative;
  grid-template-columns: ${(props) => props?.columns || '1fr'};
  grid-template-rows: ${(props) => props?.rows || '1fr'};
  grid-gap: ${(props) => props?.gap || gap};
  justify-content: ${(props) => props?.justify || 'start'};
  align-items: ${(props) => props?.align || 'normal'};
`;
