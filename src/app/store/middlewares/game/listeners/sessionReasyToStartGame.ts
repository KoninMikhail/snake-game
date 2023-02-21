import { RootState } from '@store/store';
import { AnyAction } from '@reduxjs/toolkit';

export const sessionReadyToStartGame = (action: AnyAction, currentState: RootState): boolean => {
    const isAppInit = currentState.app.init;
    const isPageReady = currentState.app.pageState === 'ready';
    const isGameLaunched = currentState.game.gameLaunch;
    const isGamePage = currentState.app.currentRoute === '/game';
    const isGameInit = currentState.game.status === 'INIT';

    return isAppInit && isGamePage && isPageReady && isGameLaunched && isGameInit;
};
