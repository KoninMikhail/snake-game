import getRandomInt from '@/helpers/getters/getRandomInt';

describe('getRandomInt', () => {
    it('returns a random number between min and max', () => {
        // generate a random number between 0 and 100
        const min = 0;
        const max = 100;
        const randomNumber = getRandomInt(min, max);

        // assert that the random number is between 0 and 100
        expect(randomNumber).toBeGreaterThanOrEqual(min);
        expect(randomNumber).toBeLessThanOrEqual(max);
    });

    it('returns a different number each time', () => {
        // generate two random numbers between 0 and 100
        const min = 0;
        const max = 100;
        const randomNumber1 = getRandomInt(min, max);
        const randomNumber2 = getRandomInt(min, max);

        // assert that the two random numbers are not the same
        expect(randomNumber1).not.toEqual(randomNumber2);
    });
});
