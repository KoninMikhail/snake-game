import { ToolbarWithSoundControlTemplate } from '@templates/toolbars/ToolbarWithSoundControl/ToolbarWithSoundControlTemplate';
import { renderWithProviders } from '@utils/test-utils';
import { AppGlobalState } from '@store/slices/app.slice';

/**
 * Mocks
 */

// fake content
const mockSoundContent = 'mocked SoundControl';

// fake component
jest.mock('@ui/organisms/SoundControl/SoundControl', () => ({
    SoundControl: () => mockSoundContent,
}));

/**
 * Tests
 */
describe('ToolbarWithSoundControl', () => {
    it('Equals snapshot on small screens', () => {
        const preloadedState = {
            preloadedState: { app: { device: { screen: 'small' } } as AppGlobalState },
        };

        const { container } = renderWithProviders(
            <ToolbarWithSoundControlTemplate />,
            preloadedState
        );

        expect(container).toMatchSnapshot();
    });

    it('Equals snapshot on middle screen devices', () => {
        const preloadedState = {
            preloadedState: { app: { device: { screen: 'middle' } } as AppGlobalState },
        };

        const { container } = renderWithProviders(
            <ToolbarWithSoundControlTemplate />,
            preloadedState
        );

        expect(container).toMatchSnapshot();
    });
    it('Equals snapshot on large screen devices', () => {
        const preloadedState = {
            preloadedState: { app: { device: { screen: 'large' } } as AppGlobalState },
        };

        const { container } = renderWithProviders(
            <ToolbarWithSoundControlTemplate />,
            preloadedState
        );

        expect(container).toMatchSnapshot();
    });
});
