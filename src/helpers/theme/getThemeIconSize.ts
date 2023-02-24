import { IBaseTheme } from '@styles/theme';
import { ThemeIcons } from '@styles/theme_parts/icons';

/**
 * @name getThemeIconSize
 *
 * Get the icon size from the theme.
 *
 * @param theme - The theme object
 * @param size - The size of the icon you want to get.
 * @returns A function that takes a theme and a size and returns the theme.icons[size]
 */
const getThemeIconSize: GetFromThemeFn<IBaseTheme, ThemeIcons> = (theme, size) => {
    return theme.icons[size];
};

export default getThemeIconSize;
