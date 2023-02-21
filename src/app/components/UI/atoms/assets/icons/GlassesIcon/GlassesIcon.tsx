import { ReactComponent as SoundOffIconSVG } from '@ui/atoms/assets/icons/GlassesIcon/GlassesIconSVG.svg';
import { useTheme } from 'styled-components';
import getThemeIconSize from '@/helpers/theme/getThemeIconSize';
import { IIcon } from '@ui/atoms/assets/icons/Icon.interface';

/**
 * @name GlassesIcon
 * @author Mikhail Konin <dev.konin@gmail.com>
 *
 * Use as icon.
 *
 * @param size - icon size
 * @param rest - optional arguments for passing to icon
 * @returns {JSX.Element}
 */
export const GlassesIcon = ({ size = 'md', ...rest }: IIcon) => {
    const theme = useTheme();
    const outputSize = getThemeIconSize(theme, size);
    return (
        <>
            <SoundOffIconSVG fill={'currentColor'} width={'auto'} height={outputSize} {...rest} />
        </>
    );
};
