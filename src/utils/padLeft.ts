/**
 * PadLeft
 *
 * @description Use for increase number length
 *
 * @param {number} nr - Entry number
 * @param {number} n - Number of characters
 * @param {string} str - String to pad
 * @return {string}
 */
export default function padLeft(nr: number, n: number, str?: string): string {
  return Array(n - String(nr).length + 1).join(str || '0') + nr;
}
