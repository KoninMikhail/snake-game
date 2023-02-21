import {ElementType} from 'react';
import {TextAlign, TextWeight} from '@/types/typography';

// Text Components props
// ----------------------------------------------------------------------

/** Body text **/
export interface ITextProps {
    as?: ElementType;
    align?: TextAlign;
    weight?: TextWeight;
}
