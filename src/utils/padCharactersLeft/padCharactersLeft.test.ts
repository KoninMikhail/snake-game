import padCharactersLeft from '@utils/padCharactersLeft/padCharactersLeft';

describe('padCharactersLeft', () => {
    it("should pad a number with 0's to the left to the required length", () => {
        expect(padCharactersLeft(10, 5)).toBe('00010');
    });

    it("should pad a string with 0's to the left to the required length", () => {
        expect(padCharactersLeft('abc', 5)).toBe('00abc');
    });

    it('should pad a number with a custom string to the left to the required length', () => {
        expect(padCharactersLeft(10, 5, '-')).toBe('---10');
    });

    it('should pad a string with a custom string to the left to the required length', () => {
        expect(padCharactersLeft('abc', 5, '-')).toBe('--abc');
    });

    it('should not pad if entry length is same as required length', () => {
        expect(padCharactersLeft('abc', 3)).toBe('abc');
    });
});
