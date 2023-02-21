import { screen } from '@testing-library/react';
import { OrientationPortrait } from '@templates/devices/orientations/Portrait/OrientationPortrait';
import { AppGlobalState } from '@store/slices/app.slice';
import { renderWithProviders } from '@utils/test-utils';

describe('OrientationPortrait', () => {
    const testContent = 'testContent';
    const testId = 'testId';

    it('should render test content', () => {
        const preloadedState = {
            app: { device: { orientation: 'portrait' } } as AppGlobalState,
        };

        renderWithProviders(
            <OrientationPortrait>
                <div data-testid={testId}>{testContent}</div>
            </OrientationPortrait>,
            { preloadedState }
        );
        expect(screen.getByTestId(testId)).toBeInTheDocument();
    });
    it('should return empty document', async () => {
        const preloadedState = {
            app: { device: { orientation: 'landscape' } } as AppGlobalState,
        };
        renderWithProviders(
            <OrientationPortrait>
                <div data-testid={testId}>{testContent}</div>
            </OrientationPortrait>,
            { preloadedState }
        );
        expect(screen.queryByTestId(testId)).not.toBeInTheDocument();
    });
});
