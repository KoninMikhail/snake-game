import { AppListenerEffectAPI } from '@store/store';
import { Action } from '@reduxjs/toolkit';
import { gameActions } from '@store/slices/game.slice';

export const startNewGameSessionEffect = (action: Action, listenerApi: AppListenerEffectAPI) => {
    listenerApi.dispatch(gameActions.setLaunch({ launch: 'launch' }));
};
