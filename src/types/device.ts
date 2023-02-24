export type DeviceScreenSize = 'small' | 'middle' | 'large';

export type DeviceOrientation = 'portrait' | 'landscape';

export type DeviceModel = string;

export type DeviceTouch = boolean;

export type DeviceInfo = {
    orientation: DeviceOrientation | null;
    screen: DeviceScreenSize | null;
    model: DeviceModel | null;
    touch: DeviceTouch;
};
