import { NonFloatNumber } from '@/types/non-float-number';
import { AssertPositive } from '@/types/assert-positive';

export type PositiveInteger<T extends number> = AssertPositive<NonFloatNumber<T>>;