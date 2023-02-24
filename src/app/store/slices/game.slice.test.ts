import gameReducers, { gameActions, GameData, initialState } from '@store/slices/game.slice';
import { LEVEL_UP_SPEED_AMPLIFIER, NEXT_LEVEL_COUNTDOWN_MULTIPLIER } from '@constants/GAME';
import { Direction } from '@/types/enums/direction';

describe('sound slices', () => {
    it('should return the initial state', () => {
        expect(gameReducers(undefined, { type: undefined })).toEqual(initialState);
    });

    it('should set launch state to true', () => {
        const previousState = { gameLaunch: 'wait' } as GameData;
        expect(gameReducers(previousState, gameActions.setLaunch({ launch: 'launch' }))).toEqual({
            gameLaunch: 'launch',
        });
    });

    it('should set game status to over', () => {
        const previousState = { status: 'INIT' } as GameData;
        expect(gameReducers(previousState, gameActions.setStatus({ status: 'OVER' }))).toEqual({
            status: 'OVER',
        });
    });

    it('should set game status to "COUNTDOWN" for start game', () => {
        const previousState = { status: 'INIT' } as GameData;
        expect(gameReducers(previousState, gameActions.startGame())).toEqual({
            status: 'COUNTDOWN',
        });
    });

    it('should reset game with save launch', () => {
        expect(gameReducers(undefined, gameActions.resetGame())).toEqual({
            ...initialState,
            gameLaunch: 'launch',
        });
    });

    it('should hard reset game', () => {
        expect(gameReducers(undefined, gameActions.hardResetGame())).toEqual(initialState);
    });

    it('should start wait for increase snake', () => {
        expect(gameReducers(initialState, gameActions.increaseLength())).toEqual({
            ...initialState,
            waitNewLength: true,
        });
    });

    it('should increase game speed', () => {
        expect(gameReducers({ ...initialState, speed: 500 }, gameActions.increaseSpeed())).toEqual({
            ...initialState,
            speed: 500 * LEVEL_UP_SPEED_AMPLIFIER,
        });
        expect(gameReducers({ ...initialState, speed: 50 }, gameActions.increaseSpeed())).toEqual({
            ...initialState,
            speed: 50,
        });
    });

    it('should increment game level', () => {
        expect(
            gameReducers(
                { ...initialState, level: 25, score: 500, nextLevelCountdown: 0 },
                gameActions.increaseLevel()
            )
        ).toEqual({
            ...initialState,
            level: 26,
            score: 500,
            nextLevelCountdown: 500 * NEXT_LEVEL_COUNTDOWN_MULTIPLIER,
        });

        expect(
            gameReducers(
                {
                    ...initialState,
                    level: 0,
                    score: 500,
                    nextLevelCountdown: 0,
                },
                gameActions.increaseLevel()
            )
        ).toEqual({
            ...initialState,
            level: 1,
            score: 500,
            nextLevelCountdown: 0,
        });
    });

    it('should generate new fruit position', () => {
        const previousState = {
            ...initialState,
            fruit: 156,
            snake: {
                head: 197,
                points: [196, 197],
                tail: 196,
            },
        };

        expect(gameReducers(previousState, gameActions.generateNewFruit())).not.toEqual({
            ...initialState,
            fruit:
                previousState.fruit ||
                previousState.snake.points[0] ||
                previousState.snake.points[1],
        });
    });

    it('should change direction', () => {
        expect(
            gameReducers(
                {
                    ...initialState,
                    moveDirection: Direction.RIGHT,
                    lastMoveDirection: Direction.RIGHT,
                },
                gameActions.changeDirection({ direction: Direction.LEFT })
            )
        ).toEqual({
            ...initialState,
            moveDirection: Direction.RIGHT,
            lastMoveDirection: Direction.RIGHT,
        });

        expect(
            gameReducers(
                {
                    ...initialState,
                    moveDirection: Direction.RIGHT,
                    lastMoveDirection: Direction.RIGHT,
                },
                gameActions.changeDirection({ direction: Direction.UP })
            )
        ).toEqual({
            ...initialState,
            moveDirection: Direction.UP,
            lastMoveDirection: Direction.RIGHT,
        });
    });

    describe('game ticks', () => {
        it('should return valid new positions to move in direction', () => {
            // move right
            const previousStateMoveRight = {
                ...initialState,
                snake: {
                    head: 40,
                    points: [37, 38, 39, 40],
                    tail: 37,
                },
                moveDirection: Direction.RIGHT,
            };
            const resultMoveRight = {
                ...initialState,
                snake: {
                    head: 41,
                    points: [38, 39, 40, 41],
                    tail: 38,
                },
                moveDirection: Direction.RIGHT,
                lastMoveDirection: Direction.RIGHT,
            };

            expect(gameReducers(previousStateMoveRight, gameActions.tick())).toEqual(
                resultMoveRight
            );
        });

        it('should return valid new positions to move to another direction', () => {
            const previousStateMoveRight = {
                ...initialState,
                snake: {
                    head: 40,
                    points: [37, 38, 39, 40],
                    tail: 37,
                },
                moveDirection: Direction.UP,
                lastMoveDirection: Direction.RIGHT,
            };
            const resultMoveRight = {
                ...initialState,
                snake: {
                    head: 24,
                    points: [38, 39, 40, 24],
                    tail: 38,
                },
                moveDirection: Direction.UP,
                lastMoveDirection: Direction.UP,
            };

            expect(gameReducers(previousStateMoveRight, gameActions.tick())).toEqual(
                resultMoveRight
            );
        });

        it('should increase length of snake', () => {
            const previousStateMoveRight = {
                ...initialState,
                waitNewLength: true,
                snake: {
                    head: 40,
                    points: [37, 38, 39, 40],
                    tail: 37,
                },
            };
            const resultMoveRight = {
                ...initialState,
                waitNewLength: false,
                snake: {
                    head: 41,
                    points: [37, 38, 39, 40, 41],
                    tail: 37,
                },
            };

            expect(gameReducers(previousStateMoveRight, gameActions.tick())).toEqual(
                resultMoveRight
            );
        });
    });
});
