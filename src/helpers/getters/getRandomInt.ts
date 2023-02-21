
/**
 * @function getRandomInt
 * 
 * Return a random integer between min and max, inclusive.
 * 
 * @param min - The minimum number that can be returned.
 * @param max - The maximum number that can be returned.
 * @returns A random integer between the min and max values.
 */
export default function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
