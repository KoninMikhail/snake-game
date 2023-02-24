import useAppSelector from '@hooks/useAppSelector/useAppSelector';
import { gameActions, gameSnakePointsSelector } from '@store/slices/game.slice';
import useActionCreators from '@hooks/useActionCreators/useActionCreators';
import { useUpdateEffect } from 'usehooks-ts';

/**
 * @function useScore
 *
 * This function is used to increase the score of the game.
 *
 * @returns {void}
 */
export const useScore = () => {
    const gameActionsList = useActionCreators(gameActions);
    const gameSnakePoints = useAppSelector(gameSnakePointsSelector);

    useUpdateEffect(() => {
        gameActionsList.increaseScore();
    }, [gameSnakePoints.length]);
};
