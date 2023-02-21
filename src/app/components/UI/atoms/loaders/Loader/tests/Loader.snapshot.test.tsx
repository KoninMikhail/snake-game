import {AppGlobalState, PageState} from '@store/slices/app.slice';
import {renderWithProviders} from '@utils/test-utils';
import {Loader} from '@ui/atoms/loaders/Loader/Loader';

/**
 * Test
 */
describe('Loader', () => {
    const testId = 'overlayEl';

    it('correctly render when hidden', () => {
        const initialState = {
            preloadedState: { app: { pageState: 'loading' as PageState } as AppGlobalState },
        };
        const { container } = renderWithProviders(<Loader data-testid={testId} />, initialState);
        expect(container).toMatchSnapshot();
    });

    it('correctly render when showed', () => {
        const initialState = {
            preloadedState: { app: { pageState: 'ready' as PageState } as AppGlobalState },
        };
        const { container } = renderWithProviders(<Loader data-testid={testId} />, initialState);
        expect(container).toMatchSnapshot();
    });
});
