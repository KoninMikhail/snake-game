import appReducer, { appActions, initialState } from '@store/slices/app.slice';

describe('sound slices', () => {
    it('should return the initial state', () => {
        expect(appReducer(undefined, { type: undefined })).toEqual(initialState);
    });

    it('should set current route', () => {
        expect(appReducer(initialState, appActions.setRoute({ route: '/whatever' }))).toEqual({
            ...initialState,
            currentRoute: '/whatever',
        });
    });

    it('should set app init state', () => {
        expect(appReducer(initialState, appActions.setInit({ init: !initialState.init }))).toEqual({
            ...initialState,
            init: !initialState.init,
        });
    });

    it('should set page state', () => {
        expect(appReducer(initialState, appActions.setPageState({ state: 'ready' }))).toEqual({
            ...initialState,
            pageState: 'ready',
        });
    });

    it('should set device screen', () => {
        expect(appReducer(initialState, appActions.setDeviceScreen({ screen: 'small' }))).toEqual({
            ...initialState,
            device: {
                screen: 'small',
                model: null,
                orientation: null,
                touch: false,
            },
        });
    });

    it('determines whether the device has a touchscreen', () => {
        expect(appReducer(initialState, appActions.setDeviceTouchState({ touch: true }))).toEqual({
            ...initialState,
            device: {
                screen: null,
                model: null,
                orientation: null,
                touch: true,
            },
        });
    });

    it('should set device orientation', () => {
        expect(
            appReducer(initialState, appActions.setDeviceOrientation({ orientation: 'landscape' }))
        ).toEqual({
            ...initialState,
            device: {
                screen: null,
                model: null,
                orientation: 'landscape',
                touch: false,
            },
        });
    });
});
