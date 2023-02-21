import { cloneElement } from 'react';
import { useTheme } from 'styled-components';
import getThemeColor from '@/helpers/theme/getThemeColor';
import { IBorderProps } from '@ui/atoms/assets/borders/Border.interface';

/**
 * @name LightBorder
 * @author Mikhail Konin <dev.konin@gmail.com>
 *
 * Use for borders
 *
 * @param children - Element for adding border
 */

export const LightBorder = ({ children }: IBorderProps) => {
    const theme = useTheme();
    const outputColor = getThemeColor(theme, 'light');
    return cloneElement(children, {
        style: {
            border: `0.61em solid ${outputColor}`,
        },
    });
};
