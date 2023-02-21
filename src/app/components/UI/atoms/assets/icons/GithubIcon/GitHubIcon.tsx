import { ReactComponent as GithubIconSVG } from './GitHubIcon.svg';
import { useTheme } from 'styled-components';
import getThemeIconSize from '@/helpers/theme/getThemeIconSize';
import { IIcon } from '@ui/atoms/assets/icons/Icon.interface';

/**
 * @name GitHubIcon
 * @author Mikhail Konin <dev.konin@gmail.com>
 *
 * Use as Github icon.
 *
 * @param size - icon size
 * @param rest - optional arguments for passing to icon
 * @returns {JSX.Element}
 */

export const GitHubIcon = ({ size = 'md', ...rest }: IIcon) => {
    const theme = useTheme();
    const outputSize = getThemeIconSize(theme, size);
    return (
        <>
            <GithubIconSVG fill={'currentColor'} width={outputSize} height={outputSize} {...rest} />
        </>
    );
};
