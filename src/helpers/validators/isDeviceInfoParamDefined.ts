import { RootState } from '@store/store';
import { DeviceInfo } from '@/types/device';

/**
 * @function isDeviceInfoParamDefined
 *
 * If the value of the property of the device object in the state is not null, return true, otherwise
 * return false.
 *
 * @param params - keyof DeviceInfo - this is the size of the parameter that we want to check.
 * @param state - RootState - this is the state of the entire application.
 * @returns A function that takes a parameter of size keyof DeviceInfo and a parameter of size
 * RootState and returns a boolean.
 */
export const isDeviceInfoParamDefined = (params: keyof DeviceInfo, state: RootState) => {
    return state.app.device[params] !== null && state.app.device[params] !== undefined;
};

export default isDeviceInfoParamDefined;
