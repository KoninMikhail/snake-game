import { useEffect } from 'react';
import { useEffectOnce, useUpdateEffect } from 'usehooks-ts';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import { FontStyles } from '@styles/fonts-face';
import { GlobalStyles } from '@styles/globals';
import { appActions } from '@store/slices/app.slice';
import { startAppListening } from '@store/store';
import useWindowOrientation from '@hooks/useWindowOrientation/useWindowOrientation';
import useDeviceScreenType from '@hooks/useDeviceScreenType/useDeviceScreenType';
import useActionCreators from '@hooks/useActionCreators/useActionCreators';
import { setupAppListeners, setupGameListeners } from '@store/middlewares/setupListeners';
import { Loader } from '@ui/atoms/loaders/Loader/Loader';
import { isTouchDevice } from '@helpers/validators/isTouchDevice';

/**
 * App
 */
const App = () => {
    const actions = useActionCreators(appActions);
    const location = useLocation();

    /** Detect Screen type
     * ======================== */
    const screen = useDeviceScreenType();
    useUpdateEffect(() => {
        actions.setDeviceScreenType({ screenType: screen.type });
    }, [screen]);

    /** Detect Orientation
     * ======================== */
    const { orientation } = useWindowOrientation();
    useEffect(() => {
        actions.setDeviceOrientation({ orientation });
    }, [actions, orientation]);

    /** Detect touch
     * ======================== */
    useEffectOnce(() => {
        isTouchDevice() && actions.setDeviceTouchState({ touch: true });
    });

    /** Detect Change Route
     * ======================== */
    useEffect(() => {
        actions.setRoute({ route: location.pathname });
    }, [actions, location.pathname]);

    /** Middlewares
     * ======================== */
    useEffectOnce(() => {
        setupAppListeners(startAppListening);
        return () => setupGameListeners(startAppListening)();
    });
    return (
        <>
            <GlobalStyles />
            <FontStyles />
            <Loader />
            <Outlet />
            <ScrollRestoration />
        </>
    );
};

export default App;
