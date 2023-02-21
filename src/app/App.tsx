import {Outlet, ScrollRestoration, useLocation} from 'react-router-dom';
import {FontStyles} from '@styles/fonts-face';
import {GlobalStyles} from '@styles/globals';
import useActionCreators from '@hooks/useActionCreators/useActionCreators';
import {appActions} from '@store/slices/app.slice';
import useWindowOrientation from '@hooks/useWindowOrientation/useWindowOrientation';
import {useEffectOnce, useUpdateEffect} from 'usehooks-ts';
import useDeviceScreenType from '@hooks/useDeviceScreenType/useDeviceScreenType';
import {useEffect} from 'react';
import {setupAppListeners, setupGameListeners} from '@store/middlewares/setupListeners';
import {startAppListening} from '@store/store';
import {Loader} from '@ui/atoms/loaders/Loader/Loader';

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
