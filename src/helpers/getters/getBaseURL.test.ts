import getBaseURL from '@/helpers/getters/getBaseURL';

describe('getBaseUrl', () => {
    const originalWindowLocation = window.location;

    beforeEach(() => {
        Object.defineProperty(window, 'location', {
            configurable: true,
            enumerable: true,
            writable: true,
            value: new URL(window.location.href),
        });
    });

    afterEach(() => {
        Object.defineProperty(window, 'location', {
            configurable: true,
            enumerable: true,
            value: originalWindowLocation,
        });
    });

    it('should return base URL', () => {
        Object.defineProperty(window, 'location', {
            configurable: true,
            enumerable: true,
            value: new URL('https://www.example.com/mind'),
        });

        expect(getBaseURL()).toEqual('https://www.example.com/mind');
    });
});
