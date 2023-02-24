import { DeviceInfo } from '@/types/device';

/**
 * @function isLargeScreen
 *
 * If the device screen is defined in `store/app/device` and if it's equal to 'desktop' return true, otherwise return false.
 *
 * @param device - DeviceInfo - The device information object in store/app.
 * @returns A function that takes a DeviceInfo object and returns a boolean.
 */
export const isLargeScreen = ({ screen }: DeviceInfo): boolean =>
    screen ? screen === 'large' : false;

export default isLargeScreen;
