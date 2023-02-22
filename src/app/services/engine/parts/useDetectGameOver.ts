import useActionCreators from '@hooks/useActionCreators/useActionCreators';
import {
    gameActions,
    gameBoardSizeSelector,
    gameMoveDirectionSelector,
    gameSnakeHeadSelector,
    gameSnakePointsSelector,
} from '@store/slices/game.slice';
import {useUpdateEffect} from 'usehooks-ts';
import useAppSelector from '@hooks/useAppSelector/useAppSelector';
import getPointsOffset from '@/helpers/getters/getPointsOffset';

/**
 * @function useDetectGameOver
 *
 * This function uses action creators, selectors from the app state and update effects to detect whether the game is over
 * and sets the status to 'OVER' when the game is over.
 *
 * @returns {void}
 */

export const useDetectGameOver = () => {
    const gameActionsList = useActionCreators(gameActions);
    const gameSnakeHead = useAppSelector(gameSnakeHeadSelector);
    const gameSnakePoints = useAppSelector(gameSnakePointsSelector);
    const gameBoardSize = useAppSelector(gameBoardSizeSelector);
    const gameSnakeMoveDirection = useAppSelector(gameMoveDirectionSelector);

    const isWallUp = () => gameSnakeHead < 0;
    const isWallDown = () =>
        gameSnakeHead > gameBoardSize - 1 + (gameBoardSize - 1) * gameBoardSize;
    const isWallLeftOrRight = () => {
        const pointsOffset = getPointsOffset(gameBoardSize, gameSnakeMoveDirection);
        const oldHead = gameSnakePoints.at(-2) as number;
        const oldHeadX = oldHead - Math.floor(oldHead / gameBoardSize) * gameBoardSize;
        return (
            Math.abs(gameSnakeMoveDirection) === 1 &&
            (oldHeadX + pointsOffset >= gameBoardSize || oldHeadX + pointsOffset < 0)
        );
    };
    const isHimself = () =>
        gameSnakePoints.slice(0, -1).find((point: number) => point === gameSnakeHead);

    useUpdateEffect(() => {
        if (isWallUp() || isWallDown() || isWallLeftOrRight() || isHimself())
            gameActionsList.setStatus({status: 'OVER'});
    });
};
