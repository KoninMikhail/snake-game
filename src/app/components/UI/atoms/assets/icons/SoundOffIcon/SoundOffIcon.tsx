import { ReactComponent as SoundOffIconSVG } from './SoundOffIconSVG.svg';
import { useTheme } from 'styled-components';
import getThemeIconSize from '@/helpers/theme/getThemeIconSize';
import { IIcon } from '@ui/atoms/assets/icons/Icon.interface';

/**
 * @name SoundOffIconSVG
 * @author Mikhail Konin <dev.konin@gmail.com>
 *
 * Use as icon.
 *
 * @param size - icon size
 * @param rest - optional arguments for passing to icon
 * @returns {JSX.Element}
 */
export const SoundOffIcon = ({ size = 'md', ...rest }: IIcon) => {
    const theme = useTheme();
    const outputSize = getThemeIconSize(theme, size);
    return (
        <>
            <SoundOffIconSVG
                fill={'currentColor'}
                width={outputSize}
                height={outputSize}
                {...rest}
            />
        </>
    );
};
