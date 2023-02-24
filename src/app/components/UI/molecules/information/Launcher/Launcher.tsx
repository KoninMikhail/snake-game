import {
    StyledStartBox,
    StyledStartBoxImageContainer,
    StyledStartBoxMessageContainer,
    StyledStopBoxContentHolder,
} from './style/StyledStartBox';
import { FitWidthImage } from '@ui/atoms/images/FitWidthImage/FitWidthImage';
import { ILauncher } from '@ui/molecules/information/Launcher/Launcher.interface';
import { LightTextShadow } from '@ui/atoms/assets/shadows/text/LightTextShadow/LightTextShadow';
import { Caption } from '@ui/atoms/typography/caption/Caption/Caption';
import { BlinkAnimation } from '@ui/atoms/assets/animations/BlinkAnimation/BlinkAnimation';

/**
 * @name Launcher
 * @author Mikhail Konin <dev.konin@gmail.com>
 *
 * Use for show the start box state home screen
 *
 * @param image - image for output
 * @param message - message for print
 * @param style - css styles
 */
export const Launcher = ({ image, message, style }: ILauncher) => {
    return (
        <StyledStartBox style={style}>
            <StyledStopBoxContentHolder>
                <StyledStartBoxImageContainer>
                    <FitWidthImage {...image} />
                </StyledStartBoxImageContainer>
                <StyledStartBoxMessageContainer>
                    <BlinkAnimation>
                        <LightTextShadow>
                            <Caption align={'center'}>{message}</Caption>
                        </LightTextShadow>
                    </BlinkAnimation>
                </StyledStartBoxMessageContainer>
            </StyledStopBoxContentHolder>
        </StyledStartBox>
    );
};
