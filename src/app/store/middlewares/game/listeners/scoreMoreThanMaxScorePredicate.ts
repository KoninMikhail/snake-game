import { RootState } from '@store/store';
import { AnyAction } from '@reduxjs/toolkit';

export const scoreMoreThanMaxScorePredicate = (
    action: AnyAction,
    currentState: RootState
): boolean => {
    const score = currentState.game.score;
    const maxScore = currentState.maxScore;
    return score >= maxScore;
};
