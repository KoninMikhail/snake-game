import { DeviceInfo } from '@/types/device-screen-type';

/**
 * @function isDesktop
 * 
 * If the device screen is defined in `store/app/device` and if it's equal to 'desktop' return true, otherwise return false.
 * 
 * @param device - DeviceInfo - The device information object in store/app.
 * @returns A function that takes a DeviceInfo object and returns a boolean.
 */
export const isDesktop = (device: DeviceInfo): boolean => {
    const deviceScreen = device.screen;
    if (deviceScreen) {
        return deviceScreen === 'desktop';
    }
    return false;
};

export default isDesktop;
