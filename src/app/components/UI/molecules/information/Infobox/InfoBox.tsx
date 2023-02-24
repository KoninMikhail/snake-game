import { StyledInfoBox, StyledInfoBoxContent } from './style/StyledInfoBox';
import { IInfoBoxProps } from './InfoBox.interface';

/**
 * @name InfoBox
 * @author Mikhail Konin <dev.konin@gmail.com>
 *
 * Use for display showLevel;
 *
 * @param align - text alignment
 * @param icon - place icon here
 * @param  message - text for showing
 */

export const InfoBox = ({ icon, align = 'center', message }: IInfoBoxProps) => (
    <StyledInfoBox>
        <StyledInfoBoxContent align={align}>{icon}</StyledInfoBoxContent>
        <StyledInfoBoxContent align={align}>{message}</StyledInfoBoxContent>
    </StyledInfoBox>
);
