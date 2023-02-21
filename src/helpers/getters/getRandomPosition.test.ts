import { getRandomPosition } from '@/helpers/getters/getRandomPosition';

describe('getRandomPosition', () => {
    it('should return a random position when given a board size and no restricted points', () => {
        const boardSize = 3;
        const restrictedPoints: number[] = [];

        const result = getRandomPosition(boardSize, restrictedPoints);
        expect(result).toBeGreaterThanOrEqual(0);
        expect(result).toBeLessThanOrEqual(8);
    });

    it('should not return a restricted point when given a board size and restricted points', () => {
        const boardSize = 3;
        const restrictedPoints: number[] = [1, 3, 5];

        const result = getRandomPosition(boardSize, restrictedPoints);
        expect(result).not.toBe(1);
        expect(result).not.toBe(3);
        expect(result).not.toBe(5);
    });
});
