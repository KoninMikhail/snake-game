import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@store/store';
import { getRandomPosition } from '@/helpers/getters/getRandomPosition';
import {
    BASE_SCORE_STEP,
    DEFAULT_NEXT_LEVEL_COUNTDOWN_VALUE,
    LEVEL_UP_SPEED_AMPLIFIER,
    NEXT_LEVEL_COUNTDOWN_MULTIPLIER,
} from '@constants/GAME';
import getPointsOffset from '@/helpers/getters/getPointsOffset';
import { Direction } from '@/types/enums/direction';

/**
 * constants
 */
const SLICE_NAME = 'game';

/**
 * Types
 **/

export type GameStatus = 'INIT' | 'COUNTDOWN' | 'GAME' | 'PAUSE' | 'OVER';
export type GameLaunch = 'wait' | 'launch';

export type GameData = {
    gameLaunch: GameLaunch;
    boardSize: number;
    status: GameStatus;
    score: number;
    nextLevelCountdown: number;
    level: number;
    speed: number;
    fruit: number;
    snake: {
        head: number;
        points: number[];
        tail: number;
    };
    moveDirection: Direction;
    lastMoveDirection: Direction;
    waitNewLength: boolean;
};

/**
 * Initial values
 */
export const initialState: GameData = {
    gameLaunch: 'wait',
    boardSize: 16,
    status: 'INIT',
    score: 0,
    nextLevelCountdown: DEFAULT_NEXT_LEVEL_COUNTDOWN_VALUE,
    speed: 300,
    level: 0,
    fruit: getRandomPosition(16, [105, 106, 107]),
    snake: {
        head: 107,
        points: [105, 106, 107],
        tail: 105,
    },
    moveDirection: Direction.RIGHT,
    lastMoveDirection: Direction.RIGHT,
    waitNewLength: false,
};

/**
 * Slice
 */
const gameSlice = createSlice({
    name: SLICE_NAME,
    initialState: initialState as GameData,
    reducers: {
        setLaunch: (state: GameData, action: PayloadAction<{ launch: GameLaunch }>) => {
            state.gameLaunch = action.payload.launch;
        },
        setStatus: (state: GameData, action: PayloadAction<{ status: GameStatus }>) => {
            state.status = action.payload.status;
        },
        startGame: (state: GameData) => {
            return {
                ...state,
                status: 'COUNTDOWN' as GameStatus,
            };
        },
        resetGame: () => {
            return {
                ...initialState,
                gameLaunch: 'launch',
            } as GameData;
        },
        hardResetGame: () => {
            return {
                ...initialState,
            } as GameData;
        },
        tick: (state: GameData) => {
            const pointsOffset = getPointsOffset(state.boardSize, state.moveDirection);
            const pointsWaitNewLength = state.waitNewLength;
            const moveDirection = state.moveDirection;

            // Head
            const newSnakeHead = state.snake.head + pointsOffset;

            // Points
            const newSnakePoints = [...state.snake.points];
            newSnakePoints.push(newSnakeHead);
            if (!pointsWaitNewLength) newSnakePoints.shift();

            // Tail
            const newSnakeTail = newSnakePoints[0];

            return {
                ...state,
                snake: {
                    head: newSnakeHead,
                    points: newSnakePoints,
                    tail: newSnakeTail,
                },
                lastMoveDirection: moveDirection,
                waitNewLength: false, // Increase length on fruit eat
            };
        },
        increaseLength: (state: GameData) => {
            return {
                ...state,
                waitNewLength: true,
            };
        },
        increaseScore: (state: GameData) => {
            const multiplier = state.level;
            const newScore = state.score + BASE_SCORE_STEP * multiplier;
            const newNextLevelCountdown = state.nextLevelCountdown - BASE_SCORE_STEP * multiplier;
            return {
                ...state,
                score: newScore,
                nextLevelCountdown: newNextLevelCountdown > 0 ? newNextLevelCountdown : 0,
            };
        },
        increaseSpeed: (state: GameData) => {
            return {
                ...state,
                speed: state.speed > 50 ? state.speed * LEVEL_UP_SPEED_AMPLIFIER : state.speed,
            };
        },
        increaseLevel: (state: GameData) => {
            return {
                ...state,
                level: state.level + 1,
                nextLevelCountdown:
                    state.level >= 1
                        ? state.score * NEXT_LEVEL_COUNTDOWN_MULTIPLIER
                        : state.nextLevelCountdown,
            };
        },
        generateNewFruit: (state: GameData) => {
            const currentSnakePoints = state.snake.points;
            const boardSize = state.boardSize;
            return {
                ...state,
                fruit: getRandomPosition(boardSize, currentSnakePoints),
            };
        },
        changeDirection: (state: GameData, action: PayloadAction<{ direction: Direction }>) => {
            return {
                ...state,
                moveDirection:
                    action.payload.direction === -state.lastMoveDirection
                        ? state.lastMoveDirection
                        : action.payload.direction,
            };
        },
    },
});

export const gameLaunchSelector = (state: RootState) => state.game.gameLaunch;
export const gameStatusSelector = (state: RootState) => state.game.status;
export const gameBoardSizeSelector = (state: RootState) => state.game.boardSize;
export const gameLevelSelector = (state: RootState) => state.game.level;
export const gameSpeedSelector = (state: RootState) => state.game.speed;
export const gameScoreSelector = (state: RootState) => state.game.score;
export const gameNextLevelCountdownSelector = (state: RootState) => state.game.nextLevelCountdown;
export const gameSnakeHeadSelector = (state: RootState) => state.game.snake.head;
export const gameSnakePointsSelector = (state: RootState) => state.game.snake.points;
export const gameFruitPositionSelector = (state: RootState) => state.game.fruit;
export const gameMoveDirectionSelector = (state: RootState) => state.game.moveDirection;

export const { reducer: gameReducers, actions: gameActions } = gameSlice;
export default gameReducers;
