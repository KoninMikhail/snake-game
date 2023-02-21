import React, {PropsWithChildren} from 'react';
import type {RenderOptions} from '@testing-library/react';
import {render} from '@testing-library/react';
import type {PreloadedState} from '@reduxjs/toolkit';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';

import type {AppStore, RootState} from '@store/store';
import appSlice from '@store/slices/app.slice';
import soundSlice from '@store/slices/sound.slice';
import maxScoreSlice from '@store/slices/maxScore.slice';
import gameDataSlice from '@store/slices/game.slice';
import {ImagesData} from '@data/imagesData';
import {mockImagesData, mockSoundData} from '@/setupTests';
import SoundsProvider from '@context/SoundsContext';
import ImagesProvider from '@context/ImagesContext';
import {SoundsData} from '@data/soundsData';
import {DefaultTheme, ThemeProvider} from 'styled-components';
import {theme as appTheme} from '@styles/theme';

// As a basic setup, import your same slice reducers

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: PreloadedState<RootState>;
    store?: AppStore;
    images?: ImagesData;
    sounds?: SoundsData;
    theme?: DefaultTheme;
}

export function renderWithProviders(
    ui: React.ReactElement,
    {
        preloadedState = {},
        // Automatically create a store instance if no store was passed in
        store = configureStore({
            reducer: {
                app: appSlice,
                sounds: soundSlice,
                maxScore: maxScoreSlice,
                game: gameDataSlice,
            },
            preloadedState,
        }),
        images = mockImagesData,
        sounds = mockSoundData,
        theme = appTheme,
        ...renderOptions
    }: ExtendedRenderOptions = {}
) {
    function Wrapper({children}: PropsWithChildren): JSX.Element {
        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <SoundsProvider sounds={sounds}>
                        <ImagesProvider images={images}>{children}</ImagesProvider>
                    </SoundsProvider>
                </ThemeProvider>
            </Provider>
        );
    }

    // Return an object with the store and all of RTL's query functions
    return {store, ...render(ui, {wrapper: Wrapper, ...renderOptions})};
}
