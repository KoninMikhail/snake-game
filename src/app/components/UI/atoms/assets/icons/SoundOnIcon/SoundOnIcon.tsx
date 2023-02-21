import { ReactComponent as SoundOnIconSVG } from './SoundOnIconSVG.svg';
import { useTheme } from 'styled-components';
import getThemeIconSize from '@/helpers/theme/getThemeIconSize';
import { IIcon } from '@ui/atoms/assets/icons/Icon.interface';

/**
 * @name SoundOnIcon
 * @author Mikhail Konin <dev.konin@gmail.com>
 *
 * Use as icon.
 *
 * @param size - icon size
 * @param rest - optional arguments for passing to icon
 */

export const SoundOnIcon = ({ size = 'md', ...rest }: IIcon) => {
    const theme = useTheme();
    const outputSize = getThemeIconSize(theme, size);
    return (
        <>
            <SoundOnIconSVG
                fill={'currentColor'}
                width={outputSize}
                height={outputSize}
                {...rest}
            />
        </>
    );
};
