import { ThemeColors } from '@styles/theme_parts/colors';
import { IBaseTheme } from '@styles/theme';

/**
 * @name getThemeColor
 *
 * Get the color from theme.
 *
 * @param theme - The theme object
 * @param color - The color you want to get from the theme.
 * @returns A function that takes a theme and a color and returns the color from the theme.
 */
const getThemeColor: GetFromThemeFn<IBaseTheme, ThemeColors> = (theme, color) => {
    return theme.colors[color];
};

export default getThemeColor;
