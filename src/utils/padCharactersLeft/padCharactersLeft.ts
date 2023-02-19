import {PositiveInteger} from '@/types/positive-integer';

/**
 * @function padCharactersLeft
 *
 * Use for increase characters length
 *
 * @param entry - Entry number
 * @param n - Amount characters
 * @param str - String to pad
 * @return {string}
 */

export default function padCharactersLeft<N extends number>(
    entry: number | string,
    n: PositiveInteger<N>,
    str?: string
): string {
    return Array(n - String(entry).length + 1).join(str || '0') + entry;
}
