import {useTheme} from 'styled-components';
import {cloneElement} from 'react';
import {IBorderProps} from '@ui/atoms/assets/borders/Border.interface';

/**
 * @name PrimaryBorder
 * @author Mikhail Konin <dev.konin@gmail.com>
 * @license MIT
 *
 * Use for creating border
 *
 * @param children - Element for adding border
 * @return {JSX.Element}
 */

export const PrimaryBorder = ({ children }: IBorderProps) => {
    const theme = useTheme();
    return cloneElement(children, {
        style: {
            border: `0.25em dashed ${theme.colors.primary}`,
        },
    });
};
