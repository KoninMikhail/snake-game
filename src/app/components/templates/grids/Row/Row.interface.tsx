import { ReactNode } from 'react';
import { GapSize } from '@styles/theme.types';

export interface IRowProps {
    columns?: number;
    templateColumns?: string;
    gap?: GapSize;
    children: ReactNode | ReactNode[];
}
