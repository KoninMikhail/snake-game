import {
    StyledGameOverModal,
    StyledGameOverModalContainer,
} from '@ui/molecules/modals/GameOverModal/style/StyledGameOverModal';
import { ExtraLargeCaption } from '@ui/atoms/typography/caption/ExtraLargeCaption/ExtraLargeCaption';
import { PrimaryButton } from '@ui/atoms/buttons/PrimaryButton/PrimaryButton';
import { IGameOverModal } from './GameOverModal.interface';

/**
 * @name GameOverModal
 * @author Mikhail Konin <dev.konin@gmail.com>
 *
 * Use it with engine-board component
 *
 * @param show - show or hide
 * @param headline - headline text
 * @param buttonText - text on button
 * @param onPressButton - callback
 * @returns {JSX.Element}
 */
export const GameOverModal = ({ headline, buttonLabel, onPressButton }: IGameOverModal) => (
    <StyledGameOverModal>
        <StyledGameOverModalContainer>
            <ExtraLargeCaption align={'center'}>{headline}</ExtraLargeCaption>
            <PrimaryButton onClick={onPressButton}>{buttonLabel}</PrimaryButton>
        </StyledGameOverModalContainer>
    </StyledGameOverModal>
);
