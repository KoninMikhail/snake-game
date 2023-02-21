import getRandomInt from '@/helpers/getters/getRandomInt';

/**
 * @function getRandomPosition
 *
 * Use it for generate random position on the board, without touch restricted ponts
 *
 * @param boardSize - The size of the board.
 * @param restrictedPoints - This is an array of points that we don't want to generate.
 * @returns A number
 */
export function getRandomPosition(boardSize: number, restrictedPoints: number[]): number {
    const indexOfAllBoardPoints = boardSize ** 2 - 1;
    const generatedPoint = getRandomInt(0, indexOfAllBoardPoints);

    if (restrictedPoints.includes(generatedPoint)) {
        return getRandomPosition(boardSize, restrictedPoints);
    }

    return generatedPoint;
}
