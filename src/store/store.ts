import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import dataReducer from 'store/slices/dataSlice';
import gameReducer from 'store/slices/gameSlice';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  data: dataReducer,
  game: gameReducer,
});

const persistedReducer = persistReducer(
  {
    key: 'snake_game',
    blacklist: ['game'],
    storage,
  },
  rootReducer
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persist = persistStore(store);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
