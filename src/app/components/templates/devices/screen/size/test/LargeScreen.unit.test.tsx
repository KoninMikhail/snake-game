import { screen } from '@testing-library/react';
import { LargeScreen } from '@templates/devices/screen/size/LargeScreen';
import { renderWithProviders } from '@utils/test-utils';
import { AppGlobalState } from '@store/slices/app.slice';

describe('Large screen', () => {
    const testId = 'mockElement';

    it('should pass content', () => {
        const preloadedState = {
            preloadedState: { app: { device: { screen: 'large' } } as AppGlobalState },
        };

        renderWithProviders(
            <LargeScreen>
                <div data-testid={testId}>{'content'}</div>
            </LargeScreen>,
            preloadedState
        );

        expect(screen.getByTestId(testId)).toBeInTheDocument();
    });

    it('should return null', () => {
        const preloadedState = {
            preloadedState: { app: { device: { screen: 'small' } } as AppGlobalState },
        };

        renderWithProviders(
            <LargeScreen>
                <div data-testid={testId} />
            </LargeScreen>,
            preloadedState
        );

        expect(screen.queryByTestId(testId)).not.toBeInTheDocument();
    });
});
