import { screen } from '@testing-library/react';
import { OrientationLandscape } from '@templates/devices/orientations/Landscape/OrientationLandscape';
import { AppGlobalState } from '@store/slices/app.slice';
import { renderWithProviders } from '@utils/test-utils';

describe('OrientationLandscape', () => {
    const testContent = 'testContent';
    const testId = 'testId';

    it('should render test content', () => {
        const preloadedState = {
            app: { device: { orientation: 'landscape' } } as AppGlobalState,
        };
        renderWithProviders(
            <OrientationLandscape>
                <div data-testid={testId}>{testContent}</div>
            </OrientationLandscape>,
            { preloadedState }
        );
        expect(screen.getByTestId(testId)).toBeInTheDocument();
    });

    it('should return empty document', async () => {
        const preloadedState = {
            app: { device: { orientation: 'portrait' } } as AppGlobalState,
        };

        renderWithProviders(
            <OrientationLandscape>
                <div data-testid={testId}>{testContent}</div>
            </OrientationLandscape>,
            { preloadedState }
        );
        expect(screen.queryByTestId(testId)).not.toBeInTheDocument();
    });
});
