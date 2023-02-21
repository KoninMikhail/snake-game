import { TextAlign } from '@/types/typography';
import { AssertPositive } from '@/types/assert-positive';

export interface IMaxScore<T extends AssertPositive<number>> {
    value: T;
    label: string;
    align?: TextAlign;
}
