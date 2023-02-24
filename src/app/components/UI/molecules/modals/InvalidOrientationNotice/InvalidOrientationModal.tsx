import {
    StyledInvalidOrientationModalContainer,
    StyledInvalidOrientationModalContent,
    StyledInvalidOrientationNoticel,
} from './style/StyledInvalidOrientationNoticel';
import { GlassesIcon } from '@ui/atoms/assets/icons/GlassesIcon/GlassesIcon';
import { PrimaryFill } from '@ui/atoms/assets/fills/PrimaryFill/PrimaryFill';
import { FadeAnimation } from '@ui/atoms/assets/animations/FadeAnimation/FadeAnimation';
import { PrimaryTextShadow } from '@ui/atoms/assets/shadows/text/PrimaryTextShadow/PrimaryTextShadow';
import { Caption } from '@ui/atoms/typography/caption/Caption/Caption';
import { IInvalidOrientationModal } from '@ui/molecules/modals/InvalidOrientationNotice/InvalidOrientationModal.interface';

/**
 * @name InvalidOrientationModal
 * @author Mikhail Konin <dev.konin@gmail.com>
 *
 * Use to ready a message about incorrect screen orientation.
 *
 * @param children - message for user
 * @returns {JSX.Element}
 */
export const InvalidOrientationModal = ({ message }: IInvalidOrientationModal) => (
    <StyledInvalidOrientationNoticel>
        <FadeAnimation direction={'in'}>
            <StyledInvalidOrientationModalContainer>
                <StyledInvalidOrientationModalContent>
                    <PrimaryTextShadow>
                        <Caption align={'center'}>{message}</Caption>
                    </PrimaryTextShadow>
                    <PrimaryFill>
                        <GlassesIcon size={'lg'} style={{ width: 'auto' }} />
                    </PrimaryFill>
                </StyledInvalidOrientationModalContent>
            </StyledInvalidOrientationModalContainer>
        </FadeAnimation>
    </StyledInvalidOrientationNoticel>
);
