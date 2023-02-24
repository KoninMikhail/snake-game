import useAppSelector from '@hooks/useAppSelector/useAppSelector';
import {
    gameActions,
    gameLevelSelector,
    gameNextLevelCountdownSelector,
    gameStatusSelector,
} from '@store/slices/game.slice';
import useActionCreators from '@hooks/useActionCreators/useActionCreators';
import { useUpdateEffect } from 'usehooks-ts';

/**
 * @function useLevel
 *
 * It used to increase the game level.
 *
 * @returns {void}
 */
export const useLevel = () => {
    const gameActionsList = useActionCreators(gameActions);
    const gameStatus = useAppSelector(gameStatusSelector);
    const gameLevel = useAppSelector(gameLevelSelector);
    const gameNextLevelCountdown = useAppSelector(gameNextLevelCountdownSelector);

    useUpdateEffect(() => {
        // Increase level after countdown
        gameStatus === 'GAME' && gameLevel < 1 && gameActionsList.increaseLevel();

        // Increase level on nextLevelCountdownExpired
        gameNextLevelCountdown <= 0 && gameActionsList.increaseLevel();
    }, [gameStatus, gameLevel, gameNextLevelCountdown]);
};
