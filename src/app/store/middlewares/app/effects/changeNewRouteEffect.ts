import { Action } from '@reduxjs/toolkit';
import { AppListenerEffectAPI } from '@store/store';
import { appActions } from '@store/slices/app.slice';
import { changeCurrentRoutePredicate } from '@store/middlewares/app/listeners/predicates/changeCurrentRoute.predicate';
import { delay } from '@utils/delay/delay';
import { PAGE_TRANSITION_DURATION } from '@constants/APP';

export const changeNewRouteEffect = async (action: Action, listenerApi: AppListenerEffectAPI) => {
    listenerApi.dispatch(appActions.setPageState({ state: 'loading' }));

    if (await listenerApi.condition(changeCurrentRoutePredicate)) {
        await delay(PAGE_TRANSITION_DURATION);
        listenerApi.dispatch(appActions.setPageState({ state: 'ready' }));
    }
};
