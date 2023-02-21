import {StyledCell, StyledCellContent} from '@ui/molecules/modules/Cell/style/StyledCell';
import {ICellProps} from '@ui/molecules/modules/Cell/Cell.interface';
import useAppSelector from '@hooks/useAppSelector/useAppSelector';
import {gameFruitPositionSelector, gameSnakeHeadSelector, gameSnakePointsSelector,} from '@store/slices/game.slice';

/**
 * @name Cell
 * @author Mikhail Konin <dev.konin@gmail.com>
 *
 * Use for creating gameBoard
 *
 * @param index - current cell index
 * @return {JSX.Element}
 */
export const Cell = ({ index }: ICellProps) => {
    const snakePoints = useAppSelector(gameSnakePointsSelector);
    const snakeHead = useAppSelector(gameSnakeHeadSelector);
    const fruitPos = useAppSelector(gameFruitPositionSelector);

    const isSnake = () => snakePoints.some((snakePoint: number) => snakePoint === index);
    const isSnakeHead = () => snakeHead === index;
    const isFruit = () => fruitPos === index;

    const getCellType = () => {
        if (isSnake()) return 'snake';
        if (isSnakeHead()) return 'snakeHead';
        if (isFruit()) return 'fruit';
    };

    return (
        <StyledCell>
            <StyledCellContent type={getCellType()} />
        </StyledCell>
    );
};
