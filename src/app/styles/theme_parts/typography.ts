import {ScreenType} from '@/types/screen';

/**
 * @typedef ThemeTypography
 */
export type ThemeTypography = {
    fontFamily: Record<string, string>;
    fontSize: {
        body: Record<ScreenType, string>;
        caption: {
            md: Record<ScreenType, string>;
            lg: Record<ScreenType, string>;
            xl: Record<ScreenType, string>;
            xxl: Record<ScreenType, string>;
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
        body: { mobile: '14px', tablet: '16px', desktop: '1.1vw' },
        caption: {
            md: { mobile: '1.3em', tablet: '1.2em', desktop: '1.18em' },
            lg: { mobile: '1.3em', tablet: '1.2em', desktop: '1.3vw' },
            xl: { mobile: '2.3em', tablet: '2.3em', desktop: '2em' },
            xxl: { mobile: '2.8em', tablet: '2.5em', desktop: '3.4em' },
        },
    },
};
