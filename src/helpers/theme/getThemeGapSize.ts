import {IBaseTheme} from '@styles/theme';
import {ThemeGaps} from '@styles/theme_parts/gaps';

/**
 * @name getThemeGapSize
 *
 * Get the gap size from the theme.
 *
 * @param theme - The theme object
 * @param size - The size of the gap you want to get.
 * @returns A function that takes a theme and a size and returns the theme.gaps[size]
 */
const getThemeGapSize: GetFromThemeFn<IBaseTheme, ThemeGaps> = (theme, size) => theme.gaps[size];

export default getThemeGapSize;
