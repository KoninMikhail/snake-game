import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type DataStateType = {
  sound: boolean;
  maxScore: number;
};

const initialState: DataStateType = {
  sound: true,
  maxScore: 0,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    toggleSound(state) {
      state.sound = !state.sound;
    },
    setMaxScore(state, action: PayloadAction<number>) {
      state.maxScore = action.payload;
    },
  },
});

export default dataSlice.reducer;
/* setMaxScore reserved for future */
export const { toggleSound } = dataSlice.actions;
