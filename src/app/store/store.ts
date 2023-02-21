import {
    addListener,
    combineReducers,
    configureStore,
    createListenerMiddleware,
    ListenerEffectAPI,
    TypedAddListener,
    TypedStartListening,
} from '@reduxjs/toolkit';
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE,} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import gameDataSlice from '@store/slices/game.slice';
import maxScoreSlice from '@store/slices/maxScore.slice';
import soundSlice from '@store/slices/sound.slice';
import appSlice from '@store/slices/app.slice';

/**
 * Reducers
 */
export const rootReducer = combineReducers({
    app: appSlice,
    sounds: soundSlice,
    maxScore: maxScoreSlice,
    game: gameDataSlice,
});

// Local storage persist
const persistedReducer = persistReducer(
    { key: 'snake_game', blacklist: ['game', 'app'], storage },
    rootReducer
);

/**
 * Middlewares
 */
const listenerMiddlewareInstance = createListenerMiddleware({
    onError: () => console.error,
});

/**
 * App store
 */
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).prepend(listenerMiddlewareInstance.middleware),
});

export const persist = persistStore(store);

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof configureStore>;

// @see https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
export type AppDispatch = typeof store.dispatch;

export type AppListenerEffectAPI = ListenerEffectAPI<RootState, AppDispatch>;

// @see https://redux-toolkit.js.org/api/createListenerMiddleware#typescript-usage
export type AppStartListening = TypedStartListening<RootState, AppDispatch>;
export type AppAddListener = TypedAddListener<RootState, AppDispatch>;

export const startAppListening = listenerMiddlewareInstance.startListening as AppStartListening;
export const addAppListener = addListener as AppAddListener;
