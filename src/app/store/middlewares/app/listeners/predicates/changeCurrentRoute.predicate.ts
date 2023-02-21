import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '@store/store';

export const changeCurrentRoutePredicate = (
    action: AnyAction,
    currentState: RootState,
    previousState: RootState
): boolean => {
    const route = currentState.app.currentRoute;
    const routePrev = previousState.app.currentRoute;

    if (route && routePrev) return route !== routePrev;

    return false;
};
