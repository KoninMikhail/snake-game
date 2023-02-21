import useAppSelector from '@hooks/useAppSelector/useAppSelector';
import { gameActions, gameLevelSelector } from '@store/slices/game.slice';
import useActionCreators from '@hooks/useActionCreators/useActionCreators';
import { useUpdateEffect } from 'usehooks-ts';

export const useSpeedControl = () => {
    const gameActionsList = useActionCreators(gameActions);
    const gameLevel = useAppSelector(gameLevelSelector);

    useUpdateEffect(() => {
        gameLevel > 1 && gameActionsList.increaseSpeed();
    }, [gameLevel]);
};
