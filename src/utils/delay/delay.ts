import {AssertPositive} from '@/types/assert-positive';

/**
 * @function delay
 *
 * Use is as setTimeout in async functions
 *
 * @async
 * @param ms - The number of milliseconds to delay.
 * @returns A promise that resolves after the specified number of milliseconds.
 */
export const delay = async <T extends number>(ms: AssertPositive<T>) =>
    await new Promise((resolve) => setTimeout(resolve, ms));
