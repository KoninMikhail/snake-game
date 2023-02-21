import {TextAlign} from '@/types/typography';
import {ReactElement} from 'react';

// InfoBox
// ----------------------------------------------------------------------

export interface IInfoBoxProps {
    align?: TextAlign;
    icon: ReactElement;
    message: string;
}
