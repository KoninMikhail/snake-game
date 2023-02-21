import { ReactNode } from 'react';
import { GridAlignment } from '@templates/grids/grids.types';

export interface IColumnProps {
    children: ReactNode | ReactNode[];
    align?: GridAlignment;
    justify?: GridAlignment;
}
