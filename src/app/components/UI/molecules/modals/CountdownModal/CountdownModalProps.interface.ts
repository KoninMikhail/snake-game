import { PositiveInteger } from '@/types/positive-integer';

export interface ICountdownModal<T extends PositiveInteger<number>> {
    visible: boolean;
    message: string;
    countStart: T;
    onCountdownEnd?: () => void;
}
