import { CSSProperties } from 'react';
import { IGameOverModal } from '@ui/molecules/modals/GameOverModal/GameOverModal.interface';
import { IPauseModal } from '@ui/molecules/modals/PauseModal/PauseModal.interface';

export interface IGameBoardProps {
    localization: {
        countdownModal: { message: string };
        pauseModal: Pick<IPauseModal, 'headline' | 'message'>;
        gameOverModal: Pick<IGameOverModal, 'headline' | 'buttonLabel'>;
    };
    style?: CSSProperties;
}
