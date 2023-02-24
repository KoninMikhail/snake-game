import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import store, { persist } from '@/app/store/store';
import routesList from '@routes/routes';
import { theme } from '@styles/theme';
import { imagesData } from '@data/imagesData';
import ImagesProvider from '@context/ImagesContext';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import locales from './locale/index';
import LanguageDetector from 'i18next-browser-languagedetector';
import SoundsProvider from '@context/SoundsContext';
import { soundsData } from '@data/soundsData';

// Prepare DOM
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

// Create routes
const routes = createBrowserRouter(routesList);

// Load translation detector
const lngDetector = new LanguageDetector(null, {
    order: ['navigator', 'localStorage', 'cookie'],
    lookupCookie: 'i18next',
    lookupLocalStorage: 'i18next',
    caches: ['localStorage', 'cookie'],
});

// Connect translations
i18next
    .use(lngDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        resources: locales,
        interpolation: {
            escapeValue: false,
        },
        parseMissingKeyHandler: (key: string) => key,
        debug: import.meta.env.NODE_ENV === 'development',
    });

// Start
root.render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persist}>
                <ThemeProvider theme={theme}>
                    <ImagesProvider images={imagesData}>
                        <SoundsProvider sounds={soundsData}>
                            <RouterProvider router={routes} />
                        </SoundsProvider>
                    </ImagesProvider>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    </StrictMode>
);
