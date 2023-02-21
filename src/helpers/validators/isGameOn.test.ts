import isGameOn from '@/helpers/validators/isGameOn';

describe('isGameOn', () => {
    it('should return true if game is on', () => {
        const gameStatus = 'GAME';
        expect(isGameOn(gameStatus)).toEqual(true);
    });
    it('should return false if game is off', () => {
        const gameStatus = 'OVER';
        expect(isGameOn(gameStatus)).toEqual(false);
    });
});
