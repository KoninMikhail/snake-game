import { cloneElement } from 'react';
import { useTheme } from 'styled-components';
import getThemeColor from '@/helpers/theme/getThemeColor';
import { IShadow } from '@ui/atoms/assets/shadows/Shadow.interface';

/**
 * @name  PrimaryTextShadow
 *
 * Use for creating text shadow.
 *
 * @param children - a Text component to add shadow
 * @return {JSX.Element}
 */
export const PrimaryTextShadow = ({ children }: IShadow) => {
    const theme = useTheme();
    const outputColor = getThemeColor(theme, 'primary');

    return cloneElement(children, {
        style: {
            textShadow: `2px 2px 0 ${outputColor}`,
        },
    });
};
