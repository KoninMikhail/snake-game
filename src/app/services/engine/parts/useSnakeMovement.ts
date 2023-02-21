import useActionCreators from '@hooks/useActionCreators/useActionCreators';
import { gameActions, gameSpeedSelector, gameStatusSelector } from '@store/slices/game.slice';
import useAppSelector from '@hooks/useAppSelector/useAppSelector';
import { useInterval } from 'usehooks-ts';
import isGameOn from '@/helpers/validators/isGameOn';

export const useSnakeMovement = () => {
    const gameActionsList = useActionCreators(gameActions);
    const gameStatus = useAppSelector(gameStatusSelector);
    const gameSpeed = useAppSelector(gameSpeedSelector);

    useInterval(
        () => {
            gameActionsList.tick();
        },
        isGameOn(gameStatus) ? gameSpeed : null
    );
};
