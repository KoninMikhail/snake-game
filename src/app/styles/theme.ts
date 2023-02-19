import {colors, ThemeColors} from './theme_parts/colors';
import {gaps, ThemeGaps} from './theme_parts/gaps';
import {icons, ThemeIcons} from './theme_parts/icons';
import {ThemeTypography, typography} from './theme_parts/typography';
import {animations, ThemeAnimations} from '@styles/theme_parts/animations';

/**
 * @typedef IBaseTheme
 */
export interface IBaseTheme {
    animations: ThemeAnimations;
    colors: ThemeColors;
    gaps: ThemeGaps;
    icons: ThemeIcons;
    typography: ThemeTypography;
}

/**
 * Theme
 */
export const theme: IBaseTheme = {
    colors,
    animations,
    gaps,
    icons,
    typography,
};
