import { screen } from '@testing-library/react';
import { renderWithProviders } from '@utils/test-utils';
import { AppGlobalState } from '@store/slices/app.slice';
import { TouchScreen } from '@templates/devices/screen/type/TouchScreen';

describe('TouchScreen', () => {
    const testId = 'mockElement';

    it('should pass content', () => {
        const preloadedState = {
            preloadedState: { app: { device: { touch: true } } as AppGlobalState },
        };

        renderWithProviders(
            <TouchScreen>
                <div data-testid={testId}>{'content'}</div>
            </TouchScreen>,
            preloadedState
        );

        expect(screen.getByTestId(testId)).toBeInTheDocument();
    });

    it('should return null', () => {
        const preloadedState = {
            preloadedState: { app: { device: { touch: false } } as AppGlobalState },
        };

        renderWithProviders(
            <TouchScreen>
                <div data-testid={testId} />
            </TouchScreen>,
            preloadedState
        );

        expect(screen.queryByTestId(testId)).toBeNull();
    });
});
