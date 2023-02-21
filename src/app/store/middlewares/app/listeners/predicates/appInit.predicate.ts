import { RootState } from '@store/store';
import { AnyAction } from '@reduxjs/toolkit';
import isDeviceInfoParamDefined from '@/helpers/validators/isDeviceInfoParamDefined';

export const appInitPredicate = (action: AnyAction, currentState: RootState): boolean => {
    const isInit = currentState.app.init;
    const screen = isDeviceInfoParamDefined('screen', currentState);
    const orientation = isDeviceInfoParamDefined('orientation', currentState);

    return !isInit && screen && orientation;
};
