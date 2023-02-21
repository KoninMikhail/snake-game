import {Color} from '@/types/color';

/**
 * @typedef ThemeColors
 */
export type ThemeColors = {
    primary: Color;
    secondary: Color;
    success: Color;
    danger: Color;
    warning: Color;
    info: Color;
    light: Color;
    dark: Color;
    black: Color;
    body: Color;
};

/**
 * The md colors scheme
 */
export const colors: ThemeColors = {
    primary: 'deeppink',
    secondary: 'white',
    success: 'white',
    danger: 'white',
    warning: 'white',
    info: 'white',
    light: 'white',
    dark: 'white',
    black: 'black',
    body: 'white',
};
