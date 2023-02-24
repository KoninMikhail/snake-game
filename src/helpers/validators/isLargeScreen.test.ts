import isLargeScreen from '@helpers/validators/isLargeScreen';
import { DeviceInfo } from '@/types/device';

describe('isLargeScreen', () => {
    it('should return true if the device screen is equal to large', () => {
        const device = { screen: 'large' } as DeviceInfo;
        expect(isLargeScreen(device)).toBe(true);
    });
    it('should return false if the device screen is not large', () => {
        const device = { screen: 'small' } as DeviceInfo;
        expect(isLargeScreen(device)).toBe(false);
    });
});
