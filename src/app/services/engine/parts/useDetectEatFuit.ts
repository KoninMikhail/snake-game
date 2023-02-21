import useAppSelector from '@hooks/useAppSelector/useAppSelector';
import {
    gameActions,
    gameFruitPositionSelector,
    gameSnakeHeadSelector,
} from '@store/slices/game.slice';
import useActionCreators from '@hooks/useActionCreators/useActionCreators';
import { useUpdateEffect } from 'usehooks-ts';

export const useDetectEatFuit = () => {
    const gameActionsList = useActionCreators(gameActions);
    const snakeHeadPoint = useAppSelector(gameSnakeHeadSelector);
    const fruitPoint = useAppSelector(gameFruitPositionSelector);

    useUpdateEffect(() => {
        if (snakeHeadPoint === fruitPoint) {
            gameActionsList.increaseLength();
            gameActionsList.generateNewFruit();
        }
    }, [snakeHeadPoint]);
};
