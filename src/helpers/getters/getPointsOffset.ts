import { PositiveInteger } from '@/types/positive-integer';
import { Direction } from '@/types/enums/direction';

/**
 * @function getPointsOffset
 *
 * "Given a board size and a direction, return the offset to the next point in that direction."
 *
 * The first thing to notice is that the function is generic. This is because the board size is a
 * number, and we want to make sure that it's a positive integer
 *
 * @param boardSize - The size of the board.
 * @param {Direction} direction - Direction - The direction in which the snake is moving.
 * @returns A function that takes a boardSize and direction and returns a number.
 */
export const getPointsOffset = <T extends number>(
    boardSize: PositiveInteger<T>,
    direction: Direction
) => {
    switch (direction) {
        case Direction.RIGHT:
            return 1;
        case Direction.LEFT:
            return -1;
        case Direction.UP:
            return -boardSize;
        case Direction.DOWN:
            return boardSize;
    }
};

export default getPointsOffset;
