import { AppListenerEffectAPI } from '@store/store';
import { Action } from '@reduxjs/toolkit';
import { gameActions } from '@store/slices/game.slice';

export const requestGameStartEffect = (action: Action, listenerApi: AppListenerEffectAPI): void => {
    listenerApi.dispatch(gameActions.startGame());
};
