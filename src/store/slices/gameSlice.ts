import { createSlice } from '@reduxjs/toolkit';

type SnakeCoords = {
  x: number;
  y: number;
};

export type GameState = {
  status: string;
  score: number;
  speed: number;
  position: SnakeCoords[];
};

const initialState: GameState = {
  status: 'wait',
  score: 0,
  speed: 0,
  position: [
    {
      x: 0,
      y: 0,
    },
  ],
};

const scoresSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    incrementScore(state) {
      state.score += 10;
    },

    incrementSpeed(state) {
      state.speed = state.speed * 1.3;
    },
  },
});

export default scoresSlice.reducer;

/*export const { incrementScore, incrementSpeed } = scoresSlice.actions;*/
