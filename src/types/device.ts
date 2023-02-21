export type Device = 'mobile' | 'tablet' | 'desktop';

export type DeviceOrientation = 'portrait' | 'landscape';

export type DeviceModel = string;

export type DeviceInfo = {
    orientation: DeviceOrientation | null;
    screen: Device | null;
    model: DeviceModel | null;
};
