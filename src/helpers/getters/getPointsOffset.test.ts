import { Direction } from '@/types/enums/direction';
import getPointsOffset from '@/helpers/getters/getPointsOffset';

describe('getPointsOffset', () => {
    test('getPointsOffset returns correct value for Direction.RIGHT', () => {
        expect(getPointsOffset(10, Direction.RIGHT)).toBe(1);
    });

    test('getPointsOffset returns correct value for Direction.LEFT', () => {
        expect(getPointsOffset(10, Direction.LEFT)).toBe(-1);
    });

    test('getPointsOffset returns correct value for Direction.UP', () => {
        expect(getPointsOffset(10, Direction.UP)).toBe(-10);
    });

    test('getPointsOffset returns correct value for Direction.DOWN', () => {
        expect(getPointsOffset(10, Direction.DOWN)).toBe(10);
    });
});
