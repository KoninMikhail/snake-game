import { DeviceScreenSize } from '@/types/device';

/**
 * @typedef ThemeTypography
 */
export type ThemeTypography = {
    fontFamily: Record<string, string>;
    fontSize: {
        body: Record<DeviceScreenSize, string>;
        caption: {
            md: Record<DeviceScreenSize, string>;
            lg: Record<DeviceScreenSize, string>;
            xl: Record<DeviceScreenSize, string>;
            xxl: Record<DeviceScreenSize, string>;
        };
    };
};

/**
 * Typography
 */
export const typography: ThemeTypography = {
    fontFamily: {
        body: `'pixeloid_bold', 'Segoe UI','Roboto','Oxygen','Ubuntu','Fira Sans','Droid Sans','Helvetica Neue',sans-serif`,
    },
    fontSize: {
        body: { small: '14px', middle: '16px', large: '1.1vw' },
        caption: {
            md: { small: '1.3em', middle: '1.2em', large: '1.18em' },
            lg: { small: '1.3em', middle: '1.2em', large: '1.3vw' },
            xl: { small: '2.3em', middle: '2.3em', large: '2em' },
            xxl: { small: '2.8em', middle: '2.5em', large: '3.4em' },
        },
    },
};
