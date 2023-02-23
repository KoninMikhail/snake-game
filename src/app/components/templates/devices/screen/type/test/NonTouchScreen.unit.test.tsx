import { screen } from '@testing-library/react';
import { renderWithProviders } from '@utils/test-utils';
import { AppGlobalState } from '@store/slices/app.slice';
import { NonTouchScreen } from '@templates/devices/screen/type/NonTouchScreen';

describe('NonTouchScreen', () => {
    const testId = 'mockElement';

    it('should pass content', () => {
        const preloadedState = {
            preloadedState: { app: { device: { touch: false } } as AppGlobalState },
        };

        renderWithProviders(
            <NonTouchScreen>
                <div data-testid={testId}>{'content'}</div>
            </NonTouchScreen>,
            preloadedState
        );

        expect(screen.getByTestId(testId)).toBeInTheDocument();
    });

    it('should return null', () => {
        const preloadedState = {
            preloadedState: { app: { device: { touch: true } } as AppGlobalState },
        };

        renderWithProviders(
            <NonTouchScreen>
                <div data-testid={testId} />
            </NonTouchScreen>,
            preloadedState
        );

        expect(screen.queryByTestId(testId)).toBeNull();
    });
});
