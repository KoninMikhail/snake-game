import { IMaxScore } from '@ui/molecules/information/MaxScore/MaxScore.interface';
import { AssertPositive } from '@/types/assert-positive';
import { IPauseModal } from '@ui/molecules/modals/PauseModal/PauseModal.interface';
import { IGameOverModal } from '@ui/molecules/modals/GameOverModal/GameOverModal.interface';

export interface IGameTemplate<T extends AssertPositive<number>> {
    locale: IGameLocale<T>;
}

interface IGameLocale<T extends AssertPositive<number>> {
    modals: {
        countdownModal: { message: string };
        pauseModal: Pick<IPauseModal, 'headline' | 'message'>;
        gameOverModal: Pick<IGameOverModal, 'headline' | 'buttonLabel'>;
    };
    messages: {
        swipeControl: string;
        keyboardControl: string;
    };
    maxScore: Omit<IMaxScore<T>, 'align'>;
}
