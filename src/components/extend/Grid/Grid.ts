import styled from 'styled-components';
import { gap } from '../../../styles/variables';

/**
 * @typedef IGridProps
 * @property {string=} columns - The columns template (css: grid-template-columns);
 * @property {string=} rows - The rows template (css: grid-template-rows);
 * @property {string=} gap - The gap size (css: gap);
 * @property {string=} align - Align items (css: align-items);
 * @property {string=} justify- Justify (css: justify-content);
 */
interface IGridProps {
  columns?: string;
  rows?: string;
  gap?: string;
  justify?: string;
  align?: string;
}

/**
 * Grid
 *
 * @description Use for create a grid layout on the page;
 *
 * @param {IGridProps} - The grid properties
 * @returns {JSX.Element}
 */
export const Grid = styled.div<IGridProps>`
  display: grid;
  position: relative;
  grid-template-columns: ${(props) => props?.columns || '1fr'};
  grid-template-rows: ${(props) => props?.rows || '1fr'};
  grid-gap: ${(props) => props?.gap || gap};
  justify-content: ${(props) => props?.justify || 'start'};
  align-items: ${(props) => props?.align || 'normal'};
`;
