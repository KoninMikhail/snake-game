import isDesktop from '@/helpers/validators/isDesktop';
import { DeviceInfo } from '@/types/device-screen-type';

describe('isDesktop', () => {
    it('should return true if the device screen is equal to desktop', () => {
        const device = { screen: 'desktop' } as DeviceInfo;
        expect(isDesktop(device)).toBe(true);
    });
    it('should return false if the device screen is not desktop', () => {
        const device = { screen: 'mobile' } as DeviceInfo;
        expect(isDesktop(device)).toBe(false);
    });
});
