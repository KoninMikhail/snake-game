import styled from 'styled-components';
import { IColumnProps } from '@templates/grids/Row/Column/Column.interface';

export const Column = styled.div<IColumnProps>`
    display: block;
    align-self: ${({ align }) => align ?? 'normal'};
    justify-self: ${({ justify }) => justify ?? 'normal'};
`;
