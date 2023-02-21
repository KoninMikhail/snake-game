import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '@store/store';
import {SOUND_ENABLED} from '@constants/APP';

/**
 * constants
 */
const SLICE_NAME = 'sounds';

/**
 * Types
 */

export interface SoundsState {
    isEnabled: boolean;
}

/**
 * Initial
 */

const initialState: SoundsState = {
    isEnabled: SOUND_ENABLED,
};

/**
 * slice
 */
const soundSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {
        setSound: (state, action: PayloadAction<{ isEnabled: boolean }>) => {
            return {
                ...state,
                isEnabled: action.payload.isEnabled,
            };
        },
    },
});

export const soundStatusSelector = (state: RootState) => state.sounds.isEnabled;

export const { reducer: soundReducer, actions: soundActions } = soundSlice;
export default soundReducer;
