import styled from 'styled-components';

/**
 * @typedef IGridItemProps
 *
 * @property {string=} gridColumn - Columns size (css: grid-column);
 * @property {string=} gridRow - Row size (css: grid-row);
 * @property {string=} align - Align in grid item (css: justify-self);
 * @property {string=} justify- Justify in grid item (css: align-self);
 */

interface IGridItemProps {
  gridColumn?: string;
  gridRow?: string;
  justify?: string;
  align?: string;
}

/**
 * GridItem
 *
 * @description Use for creation item in the grid
 *
 * @memberOf Grid
 * @param {IGridItemProps} - The grid item properties
 * @returns {JSX.Element}
 */

export const GridItem = styled.div<IGridItemProps>`
  display: block;
  position: relative;
  grid-column: ${(props) => props?.gridColumn};
  grid-row: ${(props) => props?.gridRow || 'auto'};
  justify-self: ${(props) => props?.justify || 'auto'};
  align-self: ${(props) => props?.align || 'auto'};
`;
