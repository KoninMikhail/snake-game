import store, { AppListenerEffectAPI } from '@store/store';
import { updateMaxScore } from '@store/slices/maxScore.slice';
import { Action } from '@reduxjs/toolkit';

export const updateMaxScoreEffect = (action: Action, listenerApi: AppListenerEffectAPI): void => {
    const currentState = store.getState();
    const maxScore = currentState.maxScore;
    const score = currentState.game.score;

    if (score > maxScore) {
        listenerApi.dispatch(updateMaxScore(score));
    }
};
