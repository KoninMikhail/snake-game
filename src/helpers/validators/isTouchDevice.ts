/**
 * @function isTouchDevice
 *
 * If the browser supports touch events, return true, otherwise return false.
 *
 * @returns A boolean value.
 */
export const isTouchDevice = (): boolean =>
    'ontouchstart' in window || navigator.maxTouchPoints > 0;
