import { StyledGrid } from './StyledGrid';
import { IGridItemProps } from '../GridItem/GridItem';
import { ReactElement } from 'react';
import { CSSProperties } from 'styled-components';

/**
 * @typedef IGridProps
 * @property {string=} columns - The columns template (css: grid-template-columns);
 * @property {string=} rows - The rows template (css: grid-template-rows);
 * @property {string=} gap - The gap size (css: gap);
 * @property {string=} align - Align items (css: align-items);
 * @property {string=} justify- Justify (css: justify-content);
 */
export interface IGridProps {
  columns?: string;
  rows?: string;
  gap?: string;
  justify?: string;
  align?: string;
  children: ReactElement<IGridItemProps> | Array<ReactElement<IGridItemProps>>;
  style?: CSSProperties;
}

/**
 * StyledGrid
 *
 * Use for create a grid layout on the page;
 *
 * @param {IGridProps} - The grid properties
 * @returns {JSX.Element}
 */

export const Grid = ({ children, ...rest }: IGridProps): JSX.Element => (
  <StyledGrid {...rest}>{children}</StyledGrid>
);
