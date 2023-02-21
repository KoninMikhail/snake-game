import { isTouchDevice } from '@/helpers/validators/isTouchDevice';

describe('isTouchDevice', () => {
    beforeEach(() => {
        Object.defineProperty(window.navigator, 'maxTouchPoints', {
            value: 0,
            writable: true,
        });
    });

    it('should return true', () => {
        Object.defineProperty(navigator, 'maxTouchPoints', {
            value: 5,
            writable: true,
        });
        expect(isTouchDevice()).toEqual(true);
    });

    it('should return false', () => {
        expect(isTouchDevice()).toEqual(false);
    });
});
