import {StyledPauseModal, StyledPauseModalContainer,} from '@ui/molecules/modals/PauseModal/style/StyledPauseModal';
import {ExtraLargeCaption} from '@ui/atoms/typography/caption/ExtraLargeCaption/ExtraLargeCaption';
import {IPauseModal} from './PauseModal.interface';
import {Text} from '@ui/atoms/typography/body/Text/Text';

/**
 * @name PauseModal
 * @author Mikhail Konin <dev.konin@gmail.com>
 *
 * Use it with board component
 *
 * @param headline - title of that modal
 * @param message - headline text
 */
export const PauseModal = ({ message, headline, onClick }: IPauseModal) => (
    <StyledPauseModal onClick={onClick}>
        <StyledPauseModalContainer>
            <ExtraLargeCaption align={'center'}>{headline.toUpperCase()}</ExtraLargeCaption>
            <Text>{message}</Text>
        </StyledPauseModalContainer>
    </StyledPauseModal>
);
