import { Unsubscribe } from '@reduxjs/toolkit';
import { AppStartListening } from '@store/store';
import { updateMaxScoreEffect } from '@store/middlewares/game/effects/updateMaxScoreEffect';
import { appInitPredicate } from '@store/middlewares/app/listeners/predicates/appInit.predicate';
import { confirmAppInitializationEffect } from '@store/middlewares/app/effects/confirmAppInitializationEffect';
import { changeNewRouteEffect } from '@store/middlewares/app/effects/changeNewRouteEffect';
import { requestNewRoute } from '@store/actions/requestNewRoute';
import { startNewGameSessionEffect } from '@store/middlewares/app/effects/startNewGameSessionEffect';
import { requestNewGame } from '@store/actions/requestNewGame';
import { scoreMoreThanMaxScorePredicate } from '@store/middlewares/game/listeners/scoreMoreThanMaxScorePredicate';
import { sessionReadyToStartGame } from '@store/middlewares/game/listeners/sessionReasyToStartGame';
import { requestGameStartEffect } from '@store/middlewares/game/effects/requestGameStartEffect';

export function setupAppListeners(startListening: AppStartListening): Unsubscribe {
    const listeners = [
        startListening({
            predicate: appInitPredicate,
            effect: confirmAppInitializationEffect,
        }),
        startListening({
            actionCreator: requestNewRoute,
            effect: changeNewRouteEffect,
        }),
        startListening({
            actionCreator: requestNewGame,
            effect: startNewGameSessionEffect,
        }),
    ];
    return () => listeners.forEach((unsubscribe) => unsubscribe());
}

export function setupGameListeners(startListening: AppStartListening): Unsubscribe {
    const listeners = [
        startListening({
            predicate: sessionReadyToStartGame, // start game
            effect: requestGameStartEffect,
        }),
        startListening({
            predicate: scoreMoreThanMaxScorePredicate, // Update max score
            effect: updateMaxScoreEffect,
        }),
    ];
    return () => listeners.forEach((unsubscribe) => unsubscribe());
}
