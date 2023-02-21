import { Action } from '@reduxjs/toolkit';
import { AppListenerEffectAPI } from '@store/store';
import { appActions } from '@store/slices/app.slice';
import { delay } from '@utils/delay/delay';

export const confirmAppInitializationEffect = async (
    action: Action,
    listenerApi: AppListenerEffectAPI
): Promise<void> => {
    listenerApi.dispatch(appActions.setInit({ init: true }));
    await delay(800);
    listenerApi.dispatch(appActions.setPageState({ state: 'ready' }));
};
