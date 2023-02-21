import { ReactComponent as KeyboardArrowsIconSVG } from '@ui/atoms/assets/icons/KeyboardArrowsIcon/KeyboardArrowsIconSVG.svg';
import { useTheme } from 'styled-components';
import getThemeIconSize from '@/helpers/theme/getThemeIconSize';
import { IIcon } from '@ui/atoms/assets/icons/Icon.interface';

/**
 * @name KeyboardArrowsIcon
 * @author Mikhail Konin <dev.konin@gmail.com>
 *
 * Use as icon.
 *
 * @param size - icon size
 * @param rest - optional arguments for passing to icon
 * @returns {JSX.Element}
 */
export const KeyboardArrowsIcon = ({ size = 'md', ...rest }: IIcon) => {
    const theme = useTheme();
    const outputSize = getThemeIconSize(theme, size);
    return (
        <>
            <KeyboardArrowsIconSVG
                fill={'currentColor'}
                width={outputSize}
                height={outputSize}
                {...rest}
            />
        </>
    );
};
