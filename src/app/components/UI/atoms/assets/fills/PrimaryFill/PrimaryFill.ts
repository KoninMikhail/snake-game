import { useTheme } from 'styled-components';
import getThemeColor from '@/helpers/theme/getThemeColor';
import { cloneElement } from 'react';
import { IFillProps } from '@ui/atoms/assets/fills/Fill.interface';

/**
 * @name PrimaryFill
 * @author Mikhail Konin <dev.konin@gmail.com>
 *
 * Use it for fill text and icons to primary theme color.
 *
 * @param  children - element for pass styles
 * @returns {JSX.Element}
 */
export const PrimaryFill = ({ children }: IFillProps) => {
    const theme = useTheme();
    const outputColor = getThemeColor(theme, 'primary');
    return cloneElement(children, {
        style: {
            color: outputColor,
        },
    });
};
