import getAssetsPath from '@/helpers/getters/getAssetsPath';
import getBaseUrl from '@/helpers/getters/getBaseURL';
import * as constants from '@constants/APP';

jest.mock('@helpers/getters/getBaseURL', () => {
    const originalModule = jest.requireActual('@helpers/getters/getBaseURL');
    return {
        __esModule: true,
        ...originalModule,
        default: jest.fn(() => 'http://localhost'),
    };
});

describe('utils/getAssetsPath', () => {
    describe('test with mocked data', () => {
        it('should return correct path with mocked base URL and path from ./contants', () => {
            Object.defineProperty(constants, 'ASSETS_DIR', { value: 'fake', writable: true });
            expect(getAssetsPath()).toEqual(`${getBaseUrl()}/fake`);
        });
    });
    describe('test without data', () => {
        it('should return correct path with mocked base URL and path from ./contants', () => {
            Object.defineProperty(constants, 'ASSETS_DIR', { value: undefined, writable: true });
            expect(getAssetsPath()).toEqual(`${getBaseUrl()}/assets`);
        });
    });
});
