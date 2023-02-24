import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@store/store';
import { DeviceInfo, DeviceOrientation, DeviceScreenSize, DeviceTouch } from '@/types/device';

/**
 * Constants
 */
const SLICE_NAME = 'app';

/**
 * Types
 */

export type PageState = 'loading' | 'ready';
type AppInit = boolean;
type AppRoute = `/${string}`;

export interface AppGlobalState {
    pageState: PageState;
    init: AppInit;
    currentRoute: AppRoute | null;
    device: DeviceInfo;
}

/**
 * Initial
 */
export const initialState: AppGlobalState = {
    pageState: 'loading',
    init: false,
    currentRoute: null,
    device: {
        orientation: null,
        screen: null,
        model: null,
        touch: false,
    },
};

/**
 * slice
 */
const soundSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {
        setRoute: (state, action: PayloadAction<{ route: AppRoute }>) => {
            state.currentRoute = action.payload.route;
        },
        setInit: (state, action: PayloadAction<{ init: AppInit }>) => {
            state.init = action.payload.init;
        },
        setPageState: (state, action: PayloadAction<{ state: PageState }>) => {
            state.pageState = action.payload.state;
        },
        setDeviceScreen: (state, action: PayloadAction<{ screen: DeviceScreenSize }>) => {
            state.device.screen = action.payload.screen;
        },
        setDeviceTouchState: (state, action: PayloadAction<{ touch: DeviceTouch }>) => {
            state.device.touch = action.payload.touch;
        },
        setDeviceOrientation: (
            state,
            action: PayloadAction<{ orientation: DeviceOrientation }>
        ) => {
            state.device.orientation = action.payload.orientation;
        },
    },
});

export const appPageStateSelector = (state: RootState) => state.app.pageState;
export const appDeviceInfoSelector = (state: RootState) => state.app.device;
export const appDeviceTouchStateSelector = (state: RootState) => state.app.device.touch;
export const appDeviceScreenTypeSelector = (state: RootState) => state.app.device.screen;
export const appDeviceOrientationSelector = (state: RootState) => state.app.device.orientation;

export const { reducer: appReducer, actions: appActions } = soundSlice;
export default appReducer;
