import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@store/store';

/**
 * constants
 */
const SLICE_NAME = 'maxScore';

/**
 * initial state
 */

export const initialState = 0;

/**
 * Slice
 */
const maxScoreSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {
        updateMaxScore: (state, action: PayloadAction<number>) => {
            return action.payload > state ? action.payload : state;
        },
    },
});

export const maxScoreSelector = (state: RootState) => state.maxScore;

export const { updateMaxScore } = maxScoreSlice.actions;
export default maxScoreSlice.reducer;
