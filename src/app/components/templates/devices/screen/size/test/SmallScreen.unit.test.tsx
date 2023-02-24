import { screen } from '@testing-library/react';
import { renderWithProviders } from '@utils/test-utils';
import { AppGlobalState } from '@store/slices/app.slice';
import { SmallScreen } from '@templates/devices/screen/size/SmallScreen';

describe('Small screen', () => {
    const testId = 'mockElement';

    it('should pass content', () => {
        const preloadedState = {
            preloadedState: { app: { device: { screen: 'small' } } as AppGlobalState },
        };

        renderWithProviders(
            <SmallScreen>
                <div data-testid={testId}>{'content'}</div>
            </SmallScreen>,
            preloadedState
        );

        expect(screen.getByTestId(testId)).toBeInTheDocument();
    });

    it('should return null', () => {
        const preloadedState = {
            preloadedState: { app: { device: { screen: 'middle' } } as AppGlobalState },
        };

        renderWithProviders(
            <SmallScreen>
                <div data-testid={testId} />
            </SmallScreen>,
            preloadedState
        );

        expect(screen.queryByTestId(testId)).not.toBeInTheDocument();
    });
});
