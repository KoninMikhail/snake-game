import {
    GameBoardCellsArea,
    GameBoardContainer,
    GameBoardModalHolder,
} from '@ui/organisms/GameBoard/style/GameBoardContainer';
import {Cell} from '@ui/molecules/modules/Cell/Cell';
import useAppSelector from '@hooks/useAppSelector/useAppSelector';
import {gameActions, gameBoardSizeSelector, gameStatusSelector} from '@store/slices/game.slice';
import {IGameBoardProps} from '@ui/organisms/GameBoard/GameBoard.interface';
import useActionCreators from '@hooks/useActionCreators/useActionCreators';
import {CountdownModal} from '@ui/molecules/modals/CountdownModal/CountdownModal';
import {PauseModal} from '@ui/molecules/modals/PauseModal/PauseModal';
import {GameOverModal} from '@ui/molecules/modals/GameOverModal/GameOverModal';
import useGameEngine from '@/app/services/engine/useGameEngine';
import {Direction} from '@/types/enums/direction';
import {useSwipeable} from 'react-swipeable';
import useKeyboardArrows from '@hooks/useKeyboardArrows/useKeyboardArrows';
import isGameOn from '@/helpers/validators/isGameOn';
import {useEventListener} from 'usehooks-ts';
import useKeyPress from '@hooks/useKeyPress/useKeyPress';

/**
 * @name GameBoard
 * @author Mikhail Konin <dev.konin@gmail.com>
 *
 * Use it for place game bord in to page or organism
 *
 * @return {JSX.Element}
 */

export const GameBoard = ({ style, localization }: IGameBoardProps) => {
    const gameActionsList = useActionCreators(gameActions);
    const gameStatus = useAppSelector(gameStatusSelector);
    const boardSize = useAppSelector(gameBoardSizeSelector);

    const handleCountdownEnd = () => gameActionsList.setStatus({ status: 'GAME' });
    const handlePressButtonReset = () => gameActionsList.resetGame();
    const handleTapModalOnPause = () => gameActionsList.setStatus({ status: 'GAME' });
    const handlePressContinueKey = () => gameActionsList.setStatus({ status: 'GAME' });

    /** Engine
     * ======================== */
    useGameEngine();

    /** CONTROL
     * ======================== */
    const moveUp = () =>
        isGameOn(gameStatus) && gameActionsList.changeDirection({ direction: Direction.UP });
    const moveDown = () =>
        isGameOn(gameStatus) && gameActionsList.changeDirection({ direction: Direction.DOWN });
    const moveLeft = () =>
        isGameOn(gameStatus) && gameActionsList.changeDirection({ direction: Direction.LEFT });
    const moveRight = () =>
        isGameOn(gameStatus) && gameActionsList.changeDirection({ direction: Direction.RIGHT });

    const swipes = useSwipeable({
        onSwipedUp: moveUp,
        onSwipedDown: moveDown,
        onSwipedLeft: moveLeft,
        onSwipedRight: moveRight,
    });

    useKeyboardArrows({
        onArrowUp: moveUp,
        onArrowDown: moveDown,
        onArrowLeft: moveLeft,
        onArrowRight: moveRight,
    });

    useKeyPress(['Enter'], handlePressContinueKey);

    /** Fallback
     * ======================== */
    useEventListener('resize', () => gameActionsList.setStatus({ status: 'PAUSE' }));

    return (
        <GameBoardContainer style={style} {...swipes}>
            <GameBoardModalHolder visible={gameStatus === 'COUNTDOWN'}>
                <CountdownModal
                    visible={gameStatus === 'COUNTDOWN'}
                    countStart={3}
                    message={localization.countdownModal.message}
                    onCountdownEnd={handleCountdownEnd}
                />
            </GameBoardModalHolder>

            <GameBoardModalHolder visible={gameStatus === 'PAUSE'}>
                <PauseModal
                    headline={localization.pauseModal.headline}
                    message={localization.pauseModal.message}
                    onClick={handleTapModalOnPause}
                />
            </GameBoardModalHolder>

            <GameBoardModalHolder visible={gameStatus === 'OVER'}>
                <GameOverModal
                    headline={localization.gameOverModal.headline}
                    buttonLabel={localization.gameOverModal.buttonLabel}
                    onPressButton={handlePressButtonReset}
                />
            </GameBoardModalHolder>

            <GameBoardCellsArea size={boardSize}>
                {Array.from({ length: boardSize ** 2 }, (x, i) => i).map((index) => (
                    <Cell index={index} key={`cell-${index}`} />
                ))}
            </GameBoardCellsArea>
        </GameBoardContainer>
    );
};
