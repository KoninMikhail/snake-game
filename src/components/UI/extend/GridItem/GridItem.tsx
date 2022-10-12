import { CSSProperties } from 'styled-components';
import { StyledGridItem } from './StyledGridItem';

/**
 * @typedef IGridItemProps
 *
 * @property {string=} gridColumn - Columns size (css: grid-column);
 * @property {string=} gridRow - Row size (css: grid-row);
 * @property {string=} align - Align in grid item (css: justify-self);
 * @property {string=} justify- Justify in grid item (css: align-self);
 */

export interface IGridItemProps {
  gridColumn?: string;
  gridRow?: string;
  justify?: string;
  align?: string;
  children: JSX.Element | JSX.Element[] | string;
  style?: CSSProperties;
}

/**
 * GridItem
 *
 * Use for creation item in the grid
 *
 * @memberOf Grid
 * @param {IGridItemProps} props - The grid item properties
 * @returns {JSX.Element}
 */

export const GridItem = ({ children, ...rest }: IGridItemProps): JSX.Element => (
  <StyledGridItem {...rest}>{children}</StyledGridItem>
);
