import isDeviceInfoParamDefined from '@/helpers/validators/isDeviceInfoParamDefined';
import { RootState, store } from '@store/store';

describe('isDeviceInfoParamDefined', () => {
    beforeAll(() => {
        jest.mock('@store/store');

        const mockState = {
            app: { device: { screen: 'desktop', model: null } },
        } as RootState;

        // in this point store.getState is going to be mocked
        store.getState = () => mockState;
    });

    afterAll(() => {
        jest.clearAllMocks();
        jest.resetAllMocks();
    });

    it('should return true if the requested property is not null', () => {
        const params = 'screen';
        const state = store.getState();
        expect(isDeviceInfoParamDefined(params, state)).toBe(true);
    });

    it('should return false if the requested property is null', () => {
        const params = 'model';
        const state = store.getState();
        expect(isDeviceInfoParamDefined(params, state)).toBe(false);
    });
});
