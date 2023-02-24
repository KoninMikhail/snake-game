import useActionCreators from '@hooks/useActionCreators/useActionCreators';
import { gameActions, gameSpeedSelector, gameStatusSelector } from '@store/slices/game.slice';
import useAppSelector from '@hooks/useAppSelector/useAppSelector';
import { useInterval } from 'usehooks-ts';
import isGameOn from '@/helpers/validators/isGameOn';

/**
 * @function useSnakeMovement
 *
 * It uses the useInterval hook to trigger the gameActionsList.tick()
 * action at a specified interval.
 *
 * @return {void}
 */
export const useSnakeMovement = () => {
    const gameActionsList = useActionCreators(gameActions); // get the gameActionsList from the useActionCreators hook
    const gameStatus = useAppSelector(gameStatusSelector); // get the game status from the useAppSelector hook
    const gameSpeed = useAppSelector(gameSpeedSelector); // get the game speed from the useAppSelector hook

    useInterval(
        () => {
            gameActionsList.tick();
        },
        // if the game is on, then set the interval to the game speed, else set the interval to null
        isGameOn(gameStatus) ? gameSpeed : null
    );
};
