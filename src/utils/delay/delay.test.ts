import { delay } from './delay';

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

describe('utils/delay', () => {
    it('correctly work', () => {
        /* Setting the timeout for the test. */
        jest.setTimeout(1000);
        /* Calling the function `delay` with the argument `200`. */
        delay(200);

        /* Checking that the setTimeout function was called once. */
        expect(setTimeout).toHaveBeenCalledTimes(1);
        /* Checking that the setTimeout function was called with the correct arguments. */
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 200);
    });
});
