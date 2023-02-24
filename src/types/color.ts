import { CssNamedColors } from '@/types/enums/css-named-colors.enum';

/**
 * @name Color
 * @author Mikhail Konin <dev.konin@gmail.com>
 *
 * Use it for color check
 */

export type Color = `${CssNamedColors}` | `#${string}`;
