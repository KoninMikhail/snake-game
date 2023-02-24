import { GameStatus } from '@store/slices/game.slice';

/**
 * @function isGameOn
 *
 * If the gameStatus is GAME, return true, otherwise return false.
 *
 * @param gameStatus - GameStatus
 * @returns A function that takes a gameStatus and returns a boolean.
 */
const isGameOn = (gameStatus: GameStatus) => {
    return gameStatus === 'GAME';
};
export default isGameOn;
