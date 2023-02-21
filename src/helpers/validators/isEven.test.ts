import isEven from '@/helpers/validators/isEven';

describe('isEven', () => {
    it('checks if a given number is even', () => {
        expect(isEven(2)).toBe(true);
        expect(isEven(3)).toBe(false);
    });
});
