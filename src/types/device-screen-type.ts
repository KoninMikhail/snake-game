export type DeviceScreenType = 'mobile' | 'tablet' | 'desktop';

export type DeviceOrientation = 'portrait' | 'landscape';

export type DeviceModel = string;

export type DeviceInfo = {
    orientation: DeviceOrientation | null;
    screen: DeviceScreenType | null;
    model: DeviceModel | null;
};
